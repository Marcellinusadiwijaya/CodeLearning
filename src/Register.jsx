import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./Data/supaBaseClient";
import "./CSS/Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    // === Validasi sama persis dengan kode asli ===
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters, include one uppercase letter, one number, and one special symbol."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (username.trim().length < 3) {
      setError("Username must be at least 3 characters long.");
      return;
    }

    if (!role) {
      setError("Please select your role.");
      return;
    }

    setLoading(true);

    // === STEP 1: Daftarkan user ke Supabase Auth ===
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // Data tambahan yang akan di-trigger ke tabel profiles via database trigger
        data: {
          username,
          role,
        },
      },
    });

    if (signUpError) {
      setLoading(false);
      if (signUpError.message.includes("already registered")) {
        setError("This email is already registered. Please login instead.");
      } else {
        setError(signUpError.message);
      }
      return;
    }

    const user = data.user;

    // === STEP 2: Insert profil ke tabel 'profiles' ===
    // Tabel 'profiles' harus dibuat di Supabase (lihat SQL di bawah)
    const { error: profileError } = await supabase.from("profiles").insert([
      {
        id: user.id,       // Foreign key ke auth.users
        username,
        email,
        role,
      },
    ]);

    setLoading(false);

    if (profileError) {
      // Jika profil gagal dibuat, user auth sudah terbuat
      // Ini jarang terjadi, tapi perlu ditangani
      console.error("Profile insert error:", profileError);
      setError("Account created but profile setup failed. Please contact support.");
      return;
    }

    // === Tampilkan popup sukses lalu navigasi ke login ===
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Sign Up</h2>

        <form className="register-form" onSubmit={handleRegister}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className="input-group">
            <label>I am a</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              disabled={loading}
            >
              <option value="">Select role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <div className="password-field">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={loading}
              />
              <span
                className="toggle-password"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="register-btn" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="register-links">
          <p>
            Already have an account?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
            >
              Login
            </a>
          </p>
        </div>
      </div>

      {/* Popup Notifikasi */}
      {showPopup && (
        <div className="popup-notification">
          <div className="popup-box">Register Successfully!</div>
        </div>
      )}
    </div>
  );
};

export default Register;
