import { useState } from "react";
import Register from "./Register";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
if (showRegister) {
  return (
    <Register setShowRegister={setShowRegister} />
  );
}
if (showForgot) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
      }}
    >
      <div
        style={{
          width: "350px",
          background: "#1f2937",
          padding: "30px",
          borderRadius: "15px",
        }}
      >
        <h2
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          Forgot Password
        </h2>

       <p
  style={{
    color: "#d1d5db",
    textAlign: "center",
  }}
>
  Your password is:
</p>

<p
  style={{
    color: "#60a5fa",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "10px",
  }}
>
  {JSON.parse(localStorage.getItem("user"))?.password}
</p>

        <button
          onClick={() => setShowForgot(false)}
          style={{
            width: "100%",
            padding: "12px",
            border: "none",
            borderRadius: "10px",
            background: "#2563eb",
            color: "white",
            marginTop: "15px",
          }}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #0f172a, #1e293b)",
      }}
    >
      <div
        style={{
          width: "350px",
          background: "#1f2937",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          Startup CRM Lite
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <button
  onClick={() => {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (
    user &&
    email === user.email &&
    password === user.password
  ) {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  } else {
    alert("Invalid email or password");
  }
}}
  style={{
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "#2563eb",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  }}
>
  Login
</button>
<p
  onClick={() => setShowForgot(true)}
  style={{
    color: "#60a5fa",
    textAlign: "center",
    marginTop: "15px",
    cursor: "pointer",
  }}
>
  Forgot Password?
</p>
<p
  onClick={() => setShowRegister(true)}
  style={{
    color: "#60a5fa",
    textAlign: "center",
    marginTop: "15px",
    cursor: "pointer",
  }}
>
  Create new account
</p>
      </div>
    </div>
  );
}

export default Login;