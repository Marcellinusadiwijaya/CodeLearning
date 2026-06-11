import { useEffect, useRef } from "react";

// ─── Certificate Modal Component ─────────────────────────────────────────────
// Usage: <Certificate userName="Nama User" onClose={() => setShowCert(false)} />

export default function Certificate({ userName, onClose }) {
  const certRef = useRef(null);

  // Close on backdrop click
  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Download certificate as image using html2canvas (loaded via CDN)
  const handleDownload = async () => {
    if (!certRef.current) return;
    try {
      // Dynamically load html2canvas if not present
      if (!window.html2canvas) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }
      const canvas = await window.html2canvas(certRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#fff",
      });
      const link = document.createElement("a");
      link.download = `certificate-python-${(userName || "student").replace(/\s+/g, "_").toLowerCase()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error("Download failed:", err);
      alert("Gagal download sertifikat. Silahkan coba screenshot manual.");
    }
  };

  const today = new Date();
  const dateStr = today.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const certId = `PY-${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

  return (
    <>
      {/* ── STYLES ─────────────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        .cert-backdrop {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(0,0,0,0.72);
          backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
          animation: cert-fade-in 0.25s ease;
        }

        @keyframes cert-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .cert-modal {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 24px 80px rgba(0,0,0,0.4);
          max-width: 780px;
          width: 100%;
          overflow: hidden;
          animation: cert-slide-up 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes cert-slide-up {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ── CERTIFICATE CARD ── */
        .cert-card {
          position: relative;
          padding: 52px 64px 48px;
          background: #fff;
          overflow: hidden;
        }

        /* Decorative corner ornaments */
        .cert-card::before,
        .cert-card::after {
          content: '';
          position: absolute;
          width: 160px; height: 160px;
          border-radius: 50%;
          opacity: 0.06;
        }
        .cert-card::before {
          top: -60px; left: -60px;
          background: radial-gradient(circle, #1d4ed8, transparent);
        }
        .cert-card::after {
          bottom: -60px; right: -60px;
          background: radial-gradient(circle, #7c3aed, transparent);
        }

        /* Border frame */
        .cert-frame {
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          padding: 40px 48px;
          position: relative;
        }
        .cert-frame::before {
          content: '';
          position: absolute;
          inset: 6px;
          border: 1px solid #f3f4f6;
          border-radius: 6px;
          pointer-events: none;
        }

        /* Corner accent marks */
        .cert-corner {
          position: absolute;
          width: 20px; height: 20px;
          border-color: #1d4ed8;
          border-style: solid;
          opacity: 0.5;
        }
        .cert-corner--tl { top: 12px; left: 12px; border-width: 2px 0 0 2px; border-radius: 3px 0 0 0; }
        .cert-corner--tr { top: 12px; right: 12px; border-width: 2px 2px 0 0; border-radius: 0 3px 0 0; }
        .cert-corner--bl { bottom: 12px; left: 12px; border-width: 0 0 2px 2px; border-radius: 0 0 0 3px; }
        .cert-corner--br { bottom: 12px; right: 12px; border-width: 0 2px 2px 0; border-radius: 0 0 3px 0; }

        .cert-top {
          display: flex; align-items: center; justify-content: center;
          gap: 12px; margin-bottom: 24px;
        }

        .cert-logo-icon {
          width: 40px; height: 40px;
          background: linear-gradient(135deg, #1d4ed8, #7c3aed);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
          box-shadow: 0 4px 12px rgba(29, 78, 216, 0.3);
        }

        .cert-org {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #6b7280;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .cert-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #e5e7eb, #e5e7eb, transparent);
          margin: 20px 0;
        }

        .cert-subtitle {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #9ca3af;
          text-transform: uppercase;
          text-align: center;
          margin-bottom: 10px;
        }

        .cert-main-title {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          font-weight: 800;
          color: #111827;
          text-align: center;
          line-height: 1.15;
          margin-bottom: 28px;
        }

        .cert-presented {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          color: #9ca3af;
          text-align: center;
          font-weight: 500;
          margin-bottom: 6px;
        }

        .cert-name {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          font-weight: 700;
          font-style: italic;
          color: #1d4ed8;
          text-align: center;
          margin-bottom: 8px;
          line-height: 1.2;
        }

        .cert-name-underline {
          width: 160px;
          height: 2px;
          background: linear-gradient(to right, transparent, #1d4ed8, transparent);
          margin: 0 auto 24px;
        }

        .cert-body-text {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          color: #4b5563;
          text-align: center;
          line-height: 1.7;
          max-width: 480px;
          margin: 0 auto 28px;
        }

        .cert-course-name {
          display: inline-block;
          font-weight: 700;
          color: #111827;
        }

        .cert-meta {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid #f3f4f6;
        }

        .cert-meta-item {
          display: flex; flex-direction: column; gap: 3px;
        }
        .cert-meta-item--center { text-align: center; align-items: center; }
        .cert-meta-item--right  { text-align: right; align-items: flex-end; }

        .cert-meta-label {
          font-size: 10px;
          font-weight: 700;
          color: #9ca3af;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .cert-meta-value {
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .cert-seal {
          width: 72px; height: 72px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1d4ed8, #7c3aed);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 16px rgba(29, 78, 216, 0.3);
          flex-direction: column;
          gap: 0;
        }
        .cert-seal-icon { font-size: 28px; }
        .cert-seal-text {
          font-size: 8px;
          font-weight: 800;
          color: rgba(255,255,255,0.8);
          letter-spacing: 0.05em;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .cert-sig {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-style: italic;
          color: #111827;
        }
        .cert-sig-line {
          width: 100%;
          height: 1px;
          background: #e5e7eb;
          margin-bottom: 4px;
        }

        /* ── ACTIONS BAR ── */
        .cert-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          background: #f9fafb;
          border-top: 1px solid #e5e7eb;
        }

        .cert-close-btn {
          padding: 9px 20px;
          background: transparent;
          border: 1.5px solid #e5e7eb;
          border-radius: 9px;
          font-size: 13px;
          font-weight: 600;
          color: #6b7280;
          cursor: pointer;
          font-family: 'Plus Jakarta Sans', sans-serif;
          transition: all 0.15s;
        }
        .cert-close-btn:hover { border-color: #9ca3af; color: #374151; }

        .cert-download-btn {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 24px;
          background: linear-gradient(135deg, #1d4ed8, #7c3aed);
          color: white;
          border: none;
          border-radius: 9px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          font-family: 'Plus Jakarta Sans', sans-serif;
          transition: opacity 0.2s, transform 0.15s;
          box-shadow: 0 4px 14px rgba(29, 78, 216, 0.3);
        }
        .cert-download-btn:hover { opacity: 0.9; transform: translateY(-1px); }
        .cert-download-btn:active { transform: translateY(0); }

        .cert-id-badge {
          font-size: 11px;
          color: #9ca3af;
          font-family: 'JetBrains Mono', monospace;
        }
      `}</style>

      {/* ── BACKDROP ── */}
      <div className="cert-backdrop" onClick={handleBackdrop}>
        <div className="cert-modal">
          {/* ── CERTIFICATE ── */}
          <div className="cert-card" ref={certRef}>
            <div className="cert-frame">
              {/* Corner marks */}
              <div className="cert-corner cert-corner--tl" />
              <div className="cert-corner cert-corner--tr" />
              <div className="cert-corner cert-corner--bl" />
              <div className="cert-corner cert-corner--br" />

              {/* Header */}
              {/* <div className="cert-top">
                <div className="cert-logo-icon">🐍</div>
                <span className="cert-org">PyLearn Academy</span>
              </div>

              <div className="cert-divider" /> */}

              <p className="cert-subtitle">Certificate of Completion</p>
              <h1 className="cert-main-title">
                Introduction to Python<br />Programming
              </h1>

              <p className="cert-presented">This is to certify that</p>
              <div className="cert-name">{userName || "Student"}</div>
              <div className="cert-name-underline" />

              <p className="cert-body-text">
                has successfully completed all modules of the{" "}
                <span className="cert-course-name">Introduction to Python</span>{" "}
                course, demonstrating proficiency in Python fundamentals,
                programming logic, and practical coding exercises.
              </p>

              {/* Meta footer */}
              <div className="cert-meta">
                <div className="cert-meta-item">
                  <span className="cert-meta-label">Date Issued</span>
                  <span className="cert-meta-value">{dateStr}</span>
                </div>

                <div className="cert-meta-item cert-meta-item--center">
                  <div className="cert-seal">
                    <span className="cert-seal-icon">🏆</span>
                  </div>
                </div>

                {/* <div className="cert-meta-item cert-meta-item--right">
                  <div className="cert-sig-line" />
                  <span className="cert-sig">Instructor</span>
                  <span className="cert-meta-label">PyLearn Academy</span>
                </div> */}
              </div>
            </div>
          </div>

          {/* ── ACTIONS ── */}
          <div className="cert-actions">
            <span className="cert-id-badge">ID: {certId}</span>
            <div style={{ display: "flex", gap: "10px" }}>
              <button className="cert-close-btn" onClick={onClose}>
                Tutup
              </button>
              {/* <button className="cert-download-btn" onClick={handleDownload}>
                ⬇ Download Sertifikat
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}