import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Block from "./Block";
import { blocks, upcomingBlocks } from "./Data/blocks";
import { COURSE_META, loadAllCourseData } from "./Data/courseService";
import { supabase } from "./Data/supaBaseClient";
import { loadCourseProgress } from "./Data/progressService";
import "./CSS/App.css";

const CATEGORIES = ["Python"]; //"All", "C", "Java", 
const PROGRESS_FILTERS = ["Semua", "Belum Mulai", "Sedang", "Selesai"];

const CATEGORY_MAP = {
  // "C":      ["c"],
  // "Java":   ["java"],
  "Python": ["python"],
};

/** Hitung { status, percent } dari progressData Supabase */
function calcProgress(courseId, progressData, courseDataMap) {
  const courseData = courseDataMap[courseId] || [];
  let total = 0;
  let done = 0;

  courseData.forEach((section, secIndex) => {
    section.items.forEach((_, itemIndex) => {
      total++;
      if (progressData[`${secIndex}-${itemIndex}`]) done++;
    });
  });

  const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  let status = "Belum Mulai";
  if (done > 0 && done < total) status = "Sedang";
  if (done > 0 && done === total) status = "Selesai";

  return { status, percent };
}

function App() {
  const [openProfile, setOpenProfile]           = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProgress, setSelectedProgress] = useState("Semua");
  const [searchQuery, setSearchQuery]           = useState("");

  // allProgressData = { courseId: { "0-0": true, ... } }
  const [allProgressData, setAllProgressData]   = useState({});
  const [progressLoading, setProgressLoading]   = useState(true);
  const [courseDataMap, setCourseDataMap]        = useState({});

  const profileRef = useRef(null);

  // Data profil user, sekarang diambil langsung dari Supabase (bukan localStorage)
  const [username, setUsername] = useState("Guest");
  const [role, setRole]         = useState("");
  const avatarLetter = username.charAt(0).toUpperCase();

  const allBlocks = blocks;

  //Ambil profil user (username, role) langsung dari Supabase
  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: profile, error } = await supabase
        .from("profiles")
        .select("username, role")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error("[App] gagal ambil profil:", error.message);
        return;
      }

      setUsername(profile?.username || "Guest");
      setRole(profile?.role || "");
    };
    fetchProfile();
  }, []);

  //Load semua data kursus dari Supabase (ganti allCourse)
  useEffect(() => {
    loadAllCourseData().then((courses) => {
      const map = {};
      courses.forEach(c => { map[c.id] = c.data; });
      setCourseDataMap(map);
    });
  }, []);

  //Fetch semua progress dari Supabase 
  const fetchAllProgress = useCallback(async () => {
    setProgressLoading(true);
    const courseIds = COURSE_META.map(c => c.id);
    const results = await Promise.all(
      courseIds.map(async (id) => {
        const data = await loadCourseProgress(id);
        return [id, data];
      })
    );
    setAllProgressData(Object.fromEntries(results));
    setProgressLoading(false);
  }, []);

  useEffect(() => {
    fetchAllProgress();
  }, [fetchAllProgress]);

  //Helper: status + percent untuk satu course
  const getProgress = (courseId) =>
    calcProgress(courseId, allProgressData[courseId] || {}, courseDataMap);

  //Filter blocks
  const filteredBlocks = allBlocks.filter((item) => {
    const courseId = item.path.split("/").pop();

    if (selectedCategory !== "All") {
      const allowedIds = CATEGORY_MAP[selectedCategory] || [];
      if (!allowedIds.includes(courseId)) return false;
    }

    if (selectedProgress !== "Semua") {
      const { status } = getProgress(courseId);
      if (status !== selectedProgress) return false;
    }

    if (searchQuery.trim()) {
      if (!item.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    }

    return true;
  });

  const showUpcoming = selectedCategory === "All" && selectedProgress === "Semua" && !searchQuery.trim();

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSelectedProgress("Semua");
    setSearchQuery("");
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  const progressCounts = ["Belum Mulai", "Sedang", "Selesai"].reduce((acc, status) => {
    acc[status] = allBlocks.filter((item) => {
      const courseId = item.path.split("/").pop();
      return getProgress(courseId).status === status;
    }).length;
    return acc;
  }, {});

  return (
    <div className="page-bg">
      <div className="page-layout">

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <p className="sidebar-label">CATEGORY</p>
            {CATEGORIES.map((cat) => (
              <label key={cat} className="sidebar-option">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === cat}
                  onChange={() => setSelectedCategory(cat)}
                />
                <span>{cat === "All" ? "All Courses" : cat}</span>
              </label>
            ))}
          </div>

          <div className="sidebar-section">
            <p className="sidebar-label">PROGRESS</p>
            {PROGRESS_FILTERS.map((prog) => (
              <label key={prog} className="sidebar-option">
                <input
                  type="radio"
                  name="progress"
                  checked={selectedProgress === prog}
                  onChange={() => setSelectedProgress(prog)}
                />
                <span className="progress-option-label">
                  {prog}
                  {prog !== "Semua" && (
                    <span className={`progress-badge progress-badge--${
                      prog === "Selesai" ? "done" :
                      prog === "Sedang"  ? "ongoing" : "notstarted"
                    }`}>
                      {progressLoading ? "…" : (progressCounts[prog] || 0)}
                    </span>
                  )}
                </span>
              </label>
            ))}
          </div>

          <button className="reset-btn" onClick={handleResetFilters}>
            Reset Filters
          </button>
        </aside>

        {/* MAIN CONTENT */}
        <main className="main-content">

          {/* HEADER */}
          <header className="main-header">
            <div className="header-logo">
              <span className="logo-icon">{"</>"}</span>
              <span className="logo-text">CodeLearning</span>
            </div>
            <nav className="header-nav">
              <a href="#" className="nav-link active">Courses</a>
            </nav>
            <div className="header-right">
              <div className="search-bar">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="profile-wrapper" ref={profileRef}>
                <div
                  className="profile-avatar"
                  onClick={() => setOpenProfile(!openProfile)}
                >
                  {avatarLetter}
                </div>
                {openProfile && (
                  <div className="profile-dropdown">
                    <div className="profile-info">
                      <strong>{username}</strong>
                      <span className="profile-role">{role}</span>
                      {/*<Link to="/profile" className="view-profile">View Profile</Link>*/}
                    </div>
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* WELCOME CARD */}
          <div className="welcome-card">
            <div className="welcome-text">
              <h1>Welcome to <span className="brand-highlight">Code Learning</span></h1>
              <p>
                Selamat datang di <b>Code Learning</b>! Di sini kamu bisa mempelajari berbagai bahasa pemrograman
                dengan materi yang terstruktur dan dapat laitihan langsung di platform kami. 
                Pilih course yang kamu minati, ikuti progress-mu, dan capai tujuan belajar coding-mu bersama kami!
              </p>
            </div>
            <div className="welcome-stats">
              <div className="stat-item">
                <span className="stat-number">
                  {progressLoading ? "…" : (progressCounts["Selesai"] || 0)}
                </span>
                <span className="stat-label">Selesai</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">
                  {progressLoading ? "…" : (progressCounts["Sedang"] || 0)}
                </span>
                <span className="stat-label">Sedang</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">{allBlocks.length}</span>
                <span className="stat-label">Total Course</span>
              </div>
            </div>
          </div>

          {/* COURSES AREA */}
          <div className="courses-area">
            <h2 className="section-title">Available Courses</h2>
            <p className="section-sub">
              {filteredBlocks.length} course ditemukan
              {selectedCategory !== "All" && <> di <b>{selectedCategory}</b></>}
              {selectedProgress !== "Semua" && <> · <b>{selectedProgress}</b></>}
              {searchQuery.trim() && <> · "<b>{searchQuery}</b>"</>}
            </p>

            {progressLoading ? (
              <div className="empty-state">
                <span className="empty-icon">⏳</span>
                <p>Memuat progress...</p>
              </div>
            ) : filteredBlocks.length === 0 ? (
              <div className="empty-state">
                <span className="empty-icon">📭</span>
                <p>Tidak ada course yang cocok dengan filter ini.</p>
                <button className="reset-btn-inline" onClick={handleResetFilters}>
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="card-grid-flat">
                {filteredBlocks.map((item) => {
                  const courseId = item.path.split("/").pop();
                  const { status: progressStatus, percent } = getProgress(courseId);

                  return (
                    <Block
                      key={item.id}
                      title={item.title}
                      path={item.path}
                      progressStatus={progressStatus}
                      progressPercent={percent}
                      locked={false}
                    />
                  );
                })}
              </div>
            )}

            {/* DIVIDER + UPCOMING */}
            {showUpcoming && upcomingBlocks.length > 0 && (
              <>
                <div className="courses-divider">
                  <div className="courses-divider-line" />
                  <span className="courses-divider-label">🔜 Segera Hadir</span>
                  <div className="courses-divider-line" />
                </div>
                <div className="card-grid-flat">
                  {upcomingBlocks.map((item) => (
                    <Block
                      key={item.id}
                      title={item.title}
                      path={item.path}
                      upcoming={true}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

        </main>
      </div>
    </div>
  );
}

export default App;