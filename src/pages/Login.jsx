import { useState } from "react";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiCheck,
} from "react-icons/fi";
import Register from "./Register";
import { getTheme } from "../theme/tokens";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
const [rememberMe, setRememberMe] = useState(false);
const [loading, setLoading] = useState(false);

  const t = getTheme(true)

  const cardStyle = {
  width: "420px",
    background: t.surface,
    padding: "32px",
    borderRadius: "20px",
    boxShadow: t.shadowLg,
    border: `1px solid ${t.border}`,
  }

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    marginBottom: "14px",
    borderRadius: "10px",
    border: `1px solid ${t.border}`,
    background: "transparent",
    color: t.text,
    fontSize: "15px",
    
  }

  const btnStyle = {
    width: "100%",
    padding: "13px",
    border: "none",
    borderRadius: "10px",
    background: t.accent,
    color: t.textInverse,
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "600",
    boxShadow: t.shadow,
  }

  const linkStyle = {
    color: t.accent,
    textAlign: "center",
    marginTop: "15px",
    cursor: "pointer",
    fontSize: "14px",
  }

 const pageStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #0f172a, #1e293b)",
  padding: "20px",
}
if (showRegister) {
  return (
    <Register setShowRegister={setShowRegister} />
  );
}
if (showForgot) {
  return (
    <div
  style={{
    ...pageStyle,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "80px",
    flexWrap: "wrap",
  }}
>
  {window.innerWidth > 768 && (
  <div
  style={{
    width: "420px",
    color: "white",
  }}
>
  <h1
    style={{
      fontSize: "48px",
      fontWeight: "700",
      color: "#60a5fa",
      marginBottom: "15px",
    }}
  >
    🚀 Startup CRM Lite
  </h1>

  <p
    style={{
      color: "#cbd5e1",
      fontSize: "18px",
      lineHeight: "32px",
      marginBottom: "35px",
    }}
  >
    A modern CRM system to manage leads, monitor sales,
    visualize analytics and grow your business efficiently.
  </p>

  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "18px",
      fontSize: "17px",
    }}
  >
    <div>✅ Lead Management</div>

    <div>📊 Interactive Analytics Dashboard</div>

    <div>📈 Sales Pipeline Tracking</div>

    <div>👤 User Profile Management</div>

    <div>🌙 Dark / Light Theme</div>

    <div>📱 Fully Responsive Design</div>

    <div>🔒 Secure Login System</div>

    <div>⚡ Fast & Simple User Experience</div>
  </div>

  <div
    style={{
      marginTop: "45px",
      display: "flex",
      gap: "25px",
    }}
  >
    <div>
      <h2 style={{ color: "#60a5fa" }}>500+</h2>
      <p style={{ color: "#94a3b8" }}>Leads Managed</p>
    </div>

    <div>
      <h2 style={{ color: "#22c55e" }}>95%</h2>
      <p style={{ color: "#94a3b8" }}>Customer Satisfaction</p>
    </div>

    <div>
      <h2 style={{ color: "#f59e0b" }}>24/7</h2>
      <p style={{ color: "#94a3b8" }}>Availability</p>
    </div>
  </div>
</div>
)}
      <div style={cardStyle}>
        <h2
          style={{
            color: t.text,
            textAlign: "center",
            marginBottom: "8px",
          }}
        >
          Forgot Password
        </h2>

       <p
  style={{
    color: t.textMuted,
    textAlign: "center",
  }}
>
  Your password is:
</p>

<p
  style={{
    color: t.accent,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "10px",
  }}
>
  {JSON.parse(localStorage.getItem("user"))?.password}
</p>


        <button
          onClick={() => setShowForgot(false)}
          style={{ ...btnStyle, marginTop: "15px" }}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}
  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1
  style={{
    color: "#60a5fa",
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "32px",
  }}
>
  🚀 Startup CRM Lite
</h1>

<p
  style={{
    color: "#94a3b8",
    textAlign: "center",
    marginBottom: "25px",
  }}
>
  Welcome back! Login to continue.
</p>

       <div
  style={{
    display: "flex",
    alignItems: "center",
    background: "transparent",
    border: `1px solid ${t.border}`,
    borderRadius: "10px",
    marginBottom: "14px",
    padding: "0 12px",
  }}
>
  <FiMail color="#64748b" />

  <input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  style={{
    flex: 1,
    border: "none",
    outline: "none",
    background: "transparent",
    padding: "12px",
    color: t.text,
    fontSize: "15px",
  }}
/>
        </div>

        <div
  style={{
    display: "flex",
    alignItems: "center",
    background: "transparent",
    border: `1px solid ${t.border}`,
    borderRadius: "10px",
    marginBottom: "20px",
    padding: "0 12px",
  }}
>
  <FiLock color="#64748b" />

  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    style={{
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      padding: "12px",
      color: t.text,
      fontSize: "15px",
    }}
  />

  <div
    onClick={() => setShowPassword(!showPassword)}
    style={{
      cursor: "pointer",
      color: "#64748b",
    }}
  >
    {showPassword ? <FiEyeOff /> : <FiEye />}
  </div>
</div>
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    color: t.text,
    fontSize: "14px",
  }}
>
  <label
    style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
    }}
  >
    <input
      type="checkbox"
      checked={rememberMe}
      onChange={() => setRememberMe(!rememberMe)}
    />
    Remember Me
  </label>

  <span
    onClick={() => setShowForgot(true)}
    style={{
      color: t.accent,
      cursor: "pointer",
      fontWeight: "500",
    }}
  >
    Forgot Password?
  </span>
</div>
        <button
  onClick={() => {
  const users = JSON.parse(
  localStorage.getItem("users")
) || [];

const user = users.find(
  (u) =>
    u.email === email &&
    u.password === password
);

  if (
    user &&
    email === user.email &&
    password === user.password
  ) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem(
  "currentUser",
  JSON.stringify(user)
);
console.log(user);
    setIsLoggedIn(true);
    window.location.reload();
  } else {
    alert("Invalid email or password");
  }
}}
  style={btnStyle}
>
  Login
</button>

<p
  onClick={() => setShowRegister(true)}
  style={linkStyle}
>
  Create new account
</p>

      </div>
    </div>
  );
}

export default Login;
