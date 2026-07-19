import { useState } from "react";
import Register from "./Register";
import { getTheme } from "../theme/tokens";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

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
    <div style={pageStyle}>
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

        <input
          type="email"
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
  onClick={() => setShowForgot(true)}
  style={linkStyle}
>
  Forgot Password?
</p>
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
