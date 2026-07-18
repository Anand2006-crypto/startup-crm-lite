import {
  FiSearch,
  FiBell,
  FiPlus,
  FiSun,
  FiMoon
} from "react-icons/fi"
import { getTheme } from "../../theme/tokens"

function Navbar({
  page,
  darkMode,
  setDarkMode,
  sidebarOpen,
  setSidebarOpen
}) {
  const t = getTheme(darkMode)

  let title = ""
  let subtitle = ""

  if (page === "dashboard") {
    title = "Dashboard ManagementS"
    subtitle = "Overview of your sales performance"
  }

  if (page === "leads") {
    title = "Lead Management"
    subtitle = "Manage and track all your sales leads"
  }

  if (page === "analytics") {
    title = "Analytics Overview"
    subtitle = "Track sales performance and revenue"
  }
  

  const iconBox = {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    background: t.iconBoxBg,
    color: t.secondary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    border: `1px solid ${t.border}`,
    transition: "background 0.2s ease",
  }

  return (
    <div
      style={{
        height: "78px",
        background: t.navbarBg,
        borderRadius: "16px",
        padding: "0 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: t.shadowMd,
        marginBottom: "20px",
        border: `1px solid ${t.border}`,
      }}
    >
       <button
  onClick={() => setSidebarOpen(!sidebarOpen)}
>
  ☰
</button>
      <div>
        <h2
          style={{
            margin: 0,
            color: t.text,
            fontSize: "20px",
          }}
        >
          {title}
        </h2>

        <p
          style={{
            margin: 0,
            color: t.textMuted,
            fontSize: "14px",
          }}
        >
          {subtitle}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: t.inputBg,
            padding: "10px 15px",
            borderRadius: "12px",
            width: "260px",
            border: `1px solid ${t.border}`,
          }}
        >
          <FiSearch color={t.secondary} />

          <input
            placeholder="Search..."
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              marginLeft: "10px",
              width: "100%",
              color: t.text,
            }}
          />
        </div>

        <button
          style={{
            background: t.accent,
            color: t.textInverse,
            border: "none",
            borderRadius: "12px",
            padding: "12px 18px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
            fontWeight: "600",
            boxShadow: t.shadow,
          }}
        >
          <FiPlus />
          New Lead
        </button>

        <div
          onClick={() => setDarkMode(!darkMode)}
          style={iconBox}
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </div>

        <div style={iconBox}>
          <FiBell />
        </div>

        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: t.accent,
            color: t.textInverse,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "18px",
            boxShadow: t.shadow,
          }}
        >
          A
        </div>
      </div>
     
    </div>
  )
}

export default Navbar
