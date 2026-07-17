import { getTheme } from "../../theme/tokens"

function LeadDetails({ lead, onClose, darkMode }) {
  const t = getTheme(darkMode)

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: t.overlay,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
      }}
    >
      <div
        style={{
          width: "450px",
          background: t.surface,
          color: t.text,
          borderRadius: "16px",
          padding: "28px",
          boxShadow: t.shadowLg,
          border: `1px solid ${t.border}`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px"
          }}
        >
          <h2 style={{ margin: 0, color: t.text }}>Lead Details</h2>

          <button
            onClick={onClose}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "22px",
              cursor: "pointer",
              color: t.textMuted
            }}
          >
            ✕
          </button>
        </div>

        <Detail title="👤 Name" value={lead.name} border={t.border} text={t.text} />
        <Detail title="🏢 Company" value={lead.company} border={t.border} text={t.text} />
        <Detail title="📞 Phone" value={lead.phone} border={t.border} text={t.text} />
        <Detail title="📧 Email" value={lead.email} border={t.border} text={t.text} />
        <Detail title="🌐 Source" value={lead.source} border={t.border} text={t.text} />
        <Detail title="📊 Status" value={lead.status} border={t.border} text={t.text} />
        <Detail title="📅 Date Added" value={lead.dateAdded} border={t.border} text={t.text} />
      </div>
    </div>
  )
}

function Detail({ title, value, border, text }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 0",
        borderBottom: `1px solid ${border}`,
        color: text,
      }}
    >
      <strong>{title}</strong>
      <span>{value}</span>
    </div>
  )
}

export default LeadDetails
