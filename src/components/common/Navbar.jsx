import {
  FiSearch,
  FiBell,
  FiPlus,
  FiSun,
  FiMoon
} from "react-icons/fi"

function Navbar({ page, darkMode, setDarkMode }) {
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
  return (
    <div
      style={{
        height: "78px",
        background: darkMode ? "#111827" : "white",
        borderRadius: "18px",
        padding: "0 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        marginBottom: "20px"
      }}
    >
      {/* Left */}
      <div>
        <h2
  style={{
    margin: 0,
    color: darkMode ? "white" : "#111827"
  }}
>
  {title}
</h2>

<p
  style={{
    margin: 0,
    color: "#9ca3af"
  }}
>
  {subtitle}
</p>
      </div>

      {/* Right */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px"
        }}
      >
        {/* Search */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: darkMode ? "#1f2937" : "#f3f4f6",
            padding: "10px 15px",
            borderRadius: "12px",
            width: "260px"
          }}
        >
          <FiSearch color="#6b7280" />

          <input
            placeholder="Search..."
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              marginLeft: "10px",
              width: "100%",
              color: darkMode ? "white" : "black"
            }}
          />
        </div>

        {/* Add Button */}
        <button
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "12px",
            padding: "12px 18px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer"
          }}
        >
          <FiPlus />
          New Lead
        </button>

        {/* Theme */}
        <div
          onClick={() => setDarkMode(!darkMode)}
          style={iconBox}
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </div>

        {/* Notification */}
        <div style={iconBox}>
          <FiBell />
        </div>

        {/* Avatar */}
        <div
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            background: "#2563eb",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "18px"
          }}
        >
          A
        </div>
      </div>
    </div>
  )
}

const iconBox = {
  width: "45px",
  height: "45px",
  borderRadius: "12px",
  background: "#e5e7eb",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer"
}

export default Navbar