import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./Data/supaBaseClient";
import "./CSS/Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Sign in menggunakan Supabase Auth
    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setLoading(false);
      // Pesan error user-friendly dalam bahasa Inggris (sesuai codebase asli)
      if (authError.message.includes("Invalid login credentials")) {
        setError("Invalid email or password.");
      } else if (authError.message.includes("Email not confirmed")) {
        setError("Please confirm your email before logging in.");
      } else {
        setError(authError.message);
      }
      return;
    }

    const user = data.user;

    // Ambil data profil dari tabel 'profiles' di Supabase (untuk validasi bahwa profil ada)
    const { error: profileError } = await supabase
      .from("profiles")
      .select("username, role")
      .eq("id", user.id)
      .single();

    setLoading(false);

    if (profileError) {
      setError("Failed to load user profile. Please try again.");
      return;
    }

    // Tampilkan popup sukses lalu navigasi ke /app
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate("/app");
    }, 1500);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email first, then click Forgot Password.");
      return;
    }

    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (resetError) {
      setError("Failed to send reset email. Please try again.");
    } else {
      setError("");
      alert(`Password reset email sent to ${email}. Please check your inbox.`);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="login-links">
          <p>
            Forgot{" "}
            <a href="#" onClick={handleForgotPassword}>
              Password?
            </a>
          </p>
          <p>
            Don't have an account?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/register");
              }}
            >
              Sign up
            </a>
          </p>
        </div>
      </div>

      {/* POPUP NOTIFIKASI LOGIN BERHASIL */}
      {showPopup && (
        <div className="popup-notification">
          <div className="popup-box">Login Successful!</div>
        </div>
      )}
    </div>
  );
};

export default Login;