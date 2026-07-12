function LeadDetails({ lead, onClose, darkMode }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
      }}
    >
      <div
        style={{
          width: "450px",
          background: darkMode ? "#1f2937" : "white",
          color: darkMode ? "white" : "#111827",
          borderRadius: "18px",
          padding: "25px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
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
          <h2 style={{ margin: 0 }}>Lead Details</h2>

          <button
            onClick={onClose}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "22px",
              cursor: "pointer",
              color: darkMode ? "white" : "black"
            }}
          >
            ✕
          </button>
        </div>

        <Detail title="👤 Name" value={lead.name} />
        <Detail title="🏢 Company" value={lead.company} />
        <Detail title="📞 Phone" value={lead.phone} />
        <Detail title="📧 Email" value={lead.email} />
        <Detail title="🌐 Source" value={lead.source} />
        <Detail title="📊 Status" value={lead.status} />
        <Detail title="📅 Date Added" value={lead.dateAdded} />
      </div>
    </div>
  )
}

function Detail({ title, value }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 0",
        borderBottom: "1px solid #374151"
      }}
    >
      <strong>{title}</strong>
      <span>{value}</span>
    </div>
  )
}

export default LeadDetails