import { useState } from "react";
import { getTheme } from "../theme/tokens";

function Register({ setShowRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
    background: t.inputBg,
    color: t.text,
    fontSize: "15px",
  }

  const handleRegister = () => {
    if (password !== confirmPassword) {
  alert("Passwords do not match");
  return;
}
    const users = JSON.parse(localStorage.getItem("users")) || [];

users.push({
  id: Date.now(),
  name,
  email,
  password,
});

localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful");
    setShowRegister(false);
  };

  return (
    <div
      style={{
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #0f172a, #1e293b)",
  padding: "20px",
}}
    >
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
  Create your account.
</p>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ ...inputStyle, marginBottom: "20px" }}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ ...inputStyle, marginBottom: "20px" }}
        />

        <button
          onClick={handleRegister}
          style={{
            width: "100%",
            padding: "13px",
            border: "none",
            borderRadius: "10px",
            background: t.accent,
            color: t.textInverse,
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: t.shadow,
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
