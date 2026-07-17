import { useState } from "react";
import { getTheme } from "../theme/tokens";

function Register({ setShowRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const t = getTheme(true)

  const cardStyle = {
    width: "380px",
    background: t.surface,
    padding: "32px",
    borderRadius: "16px",
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
    localStorage.setItem(
      "user",
      JSON.stringify({
        name,
        email,
        password,
      })
    );

    alert("Registration successful");
    setShowRegister(false);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: t.loginGradient,
      }}
    >
      <div style={cardStyle}>
        <h1
          style={{
            color: t.text,
            textAlign: "center",
            marginBottom: "24px",
            fontSize: "28px",
          }}
        >
          Register
        </h1>

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
