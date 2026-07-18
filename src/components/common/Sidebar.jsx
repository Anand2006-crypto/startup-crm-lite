import { useState } from "react";
import {
  FiGrid,
  FiUsers,
  FiBarChart2,
  FiMoon,
  FiSun,
  FiHelpCircle,
  FiLogOut
} from "react-icons/fi"
import { getTheme } from "../../theme/tokens"

function Sidebar({
  setPage,
  page,
  darkMode,
  setDarkMode,
  handleLogout,
  sidebarOpen,
  setSidebarOpen
}) {
   
  const t = getTheme(darkMode)

  const menuStyle = (menu) => ({
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "14px 18px",
    cursor: "pointer",
    background: page === menu ? t.sidebarActive : "transparent",
    borderRadius: "12px",
    marginBottom: "10px",
    color: page === menu ? t.textInverse : t.sidebarText,
    boxShadow: page === menu ? t.sidebarActiveShadow : "none",
    transition: "all 0.25s ease",
  })
 

  return (
  <div
    style={{
      width:
        window.innerWidth <= 768
          ? sidebarOpen
            ? "260px"
            : "0px"
          : "260px",

      overflow: "hidden",

      height: "100vh",
      background: t.sidebarBg,
      color: t.text,
      padding:
        window.innerWidth <= 768
          ? sidebarOpen
            ? "24px"
            : "0px"
          : "24px",

      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      borderRight: `1px solid ${t.sidebarBorder}`,
      transition: "all 0.3s ease",

      position:
        window.innerWidth <= 768
          ? "fixed"
          : "relative",

      left: 0,
      top: 0,
      zIndex: 1000,
    }}
  >
      <div style={{ marginBottom: "36px" }}>
        <h2
          style={{
            margin: 0,
            color: t.accent,
            fontWeight: "700",
            fontSize: "20px",
          }}
        >
          🚀 Startup CRM Lite
        </h2>

        <p
          style={{
            marginTop: "6px",
            color: t.sidebarMuted,
            fontSize: "13px",
          }}
        >
          Sales Management
        </p>
      </div>

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

      <div style={{ marginTop: "auto" }}>
        <div
          style={{
            background: darkMode ? "rgba(51, 65, 85, 0.5)" : "rgba(255, 255, 255, 0.06)",
            borderRadius: "14px",
            padding: "16px",
            marginBottom: "16px",
            border: `1px solid ${t.sidebarBorder}`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "8px",
            }}
          >
            <FiHelpCircle />
            <strong>Need Help?</strong>
          </div>

          <p
            style={{
              margin: 0,
              color: t.sidebarText,
              fontSize: "13px",
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
            borderRadius: "12px",
            border: `1px solid ${t.border}`,
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
            background: darkMode ? t.surfaceElevated : t.surface,
            color: t.text,
            fontWeight: "600",
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
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            background: page === "profile" ? t.accent : t.surfaceElevated,
            color: page === "profile" ? t.textInverse : t.sidebarText,
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
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            background: t.danger,
            color: "#FFFFFF",
            fontWeight: "600",
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
