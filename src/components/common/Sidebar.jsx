import {
  FiGrid,
  FiUsers,
  FiBarChart2,
  FiMoon,
  FiSun,
  FiHelpCircle,
  FiLogOut
} from "react-icons/fi"

function Sidebar({
  setPage,
  page,
  darkMode,
  setDarkMode,
  handleLogout
}) {
  const menuStyle = (menu) => ({
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "15px 18px",
    cursor: "pointer",
    background:
      page === menu
        ? "linear-gradient(135deg,#2563eb,#3b82f6)"
        : "transparent",
    borderRadius: "14px",
    marginBottom: "12px",
    color: page === menu ? "white" : "#cbd5e1",
    boxShadow:
      page === menu
        ? "0 8px 20px rgba(37,99,235,0.35)"
        : "none",
    transition: "0.3s"
  })

  return (
    <div
      style={{
        width: "260px",
        height: "100vh",
        background: "linear-gradient(180deg,#0f172a,#111827)",
        color: "white",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        borderRight: "1px solid rgba(255,255,255,0.08)"
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: "40px" }}>
        <h2
          style={{
            margin: 0,
            color: "#60a5fa",
            fontWeight: "700"
          }}
        >
          🚀 Startup CRM Lite
        </h2>

        <p
          style={{
            marginTop: "6px",
            color: "#94a3b8",
            fontSize: "13px"
          }}
        >
          Sales Management
        </p>
      </div>

      {/* Menu */}
      <div>

        <div
          onClick={() => setPage("dashboard")}
          style={menuStyle("dashboard")}
        >
          <FiGrid size={20} />
          <span>Dashboard</span>
        </div>

        <div
          onClick={() => setPage("leads")}
          style={menuStyle("leads")}
        >
          <FiUsers size={20} />
          <span>Leads</span>
        </div>

        <div
          onClick={() => setPage("analytics")}
          style={menuStyle("analytics")}
        >
          <FiBarChart2 size={20} />
          <span>Analytics</span>
        </div>

      </div>

      {/* Bottom Section */}
      <div style={{ marginTop: "auto" }}>

        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            borderRadius: "16px",
            padding: "16px",
            marginBottom: "18px"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "8px"
            }}
          >
            <FiHelpCircle />
            <strong>Need Help?</strong>
          </div>

          <p
            style={{
              margin: 0,
              color: "#cbd5e1",
              fontSize: "13px"
            }}
          >
            Contact the administrator for support.
          </p>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "14px",
            border: "none",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginBottom: "12px",
            background: darkMode ? "#f3f4f6" : "#1f2937",
            color: darkMode ? "#111827" : "white",
            fontWeight: "600"
          }}
        >
          {darkMode ? <FiSun /> : <FiMoon />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
<button
  onClick={() => setPage("profile")}
  style={{
    width: "100%",
    padding: "14px",
    borderRadius: "14px",
    border: "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    background:
      page === "profile" ? "#2563eb" : "#1f2937",
    color: "white",
    fontWeight: "600",
    marginBottom: "10px",
  }}
>
  👤 Profile
</button>
       <button
  onClick={handleLogout}
  style={{
    width: "100%",
    padding: "14px",
    borderRadius: "14px",
    border: "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    background: "#dc2626",
    color: "white",
    fontWeight: "600"
  }}
>
  <FiLogOut />
  Logout
</button>

      </div>
    </div>
  )
}

export default Sidebar