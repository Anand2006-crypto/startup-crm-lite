import { getTheme } from "../../theme/tokens"

function LeadCard({ id, name, email, status, onDelete, onEdit, darkMode = true }) {
  const t = getTheme(darkMode)

  function handleEdit() {
    const newStatus = prompt("Enter new status:", status)

    if (newStatus) {
      onEdit(id, newStatus)
    }
  }

  return (
    <div
      style={{
        border: `1px solid ${t.border}`,
        padding: "18px",
        margin: "20px",
        borderRadius: "12px",
        background: t.surface,
        color: t.text,
        boxShadow: t.shadow,
      }}
    >
      <h3 style={{ color: t.text, margin: "0 0 8px" }}>{name}</h3>
      <p style={{ color: t.textMuted }}>Email: {email}</p>
      <p style={{ color: t.textMuted }}>Status: {status}</p>

      <button
        onClick={handleEdit}
        style={{
          marginRight: "10px",
          background: t.accent,
          color: t.textInverse,
          border: "none",
          padding: "8px 14px",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        Edit
      </button>

      <button
        onClick={onDelete}
        style={{
          background: t.danger,
          color: "#FFFFFF",
          border: "none",
          padding: "8px 14px",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        Delete
      </button>
    </div>
  )
}

export default LeadCard
