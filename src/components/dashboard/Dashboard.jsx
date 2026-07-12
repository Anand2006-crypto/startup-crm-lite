import {
  FiUsers,
  FiAward,
  FiDollarSign,
  FiTrendingUp
} from "react-icons/fi"
function Dashboard({ leads, darkMode }) {
  const totalLeads = leads.length

  const wonDeals = leads.filter(
  (lead) => lead.status === "Won"
).length

 const conversionRate =
  totalLeads === 0
    ? 0
    : Math.round((wonDeals / totalLeads) * 100)

const revenue = wonDeals * 25000

  return (
    <div style={{ padding: "10px" }}>
      {/* Heading */}
      <div style={{ marginBottom: "30px" }}>
        <h1
  style={{
    margin: 0,
    fontSize: "48px",
    fontWeight: "700",
    color: darkMode ? "white" : "#111827"
  }}
>
  Dashboard Management
</h1>

        <p style={{ color: "#6b7280", marginTop: "10px" }}>
          Overview of your sales performance
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px"
        }}
      >
       <Card
  title="Total Leads"
  value={totalLeads}
  icon={<FiUsers size={28} />}
  color="linear-gradient(135deg,#2563eb,#3b82f6)"
/>

<Card
  title="Won Deals"
  value={wonDeals}
  icon={<FiAward size={28} />}
  color="linear-gradient(135deg,#16a34a,#22c55e)"
/>

<Card
  title="Revenue"
  value={`₹${revenue}`}
  icon={<FiDollarSign size={28} />}
  color="linear-gradient(135deg,#f59e0b,#fbbf24)"
/>

<Card
  title="Conversion Rate"
  value={`${conversionRate}%`}
  icon={<FiTrendingUp size={28} />}
  color="linear-gradient(135deg,#9333ea,#7c3aed)"
/>
      </div>

      {/* Recent Leads */}
      <div
        style={{
          marginTop: "35px",
          background: darkMode ? "#1f2937" : "white",
          padding: "24px",
          borderRadius: "18px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
        }}
      >
       <h2
  style={{
    color: darkMode ? "white" : "#111827"
  }}
>
  Recent Leads
</h2>
        <table
  style={{
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px"
  }}
>
  <thead>
    <tr style={{ color: "#6b7280" }}>
      <th style={{ textAlign: "left", padding: "12px" }}>Lead</th>
      <th style={{ textAlign: "left", padding: "12px" }}>Company</th>
      <th style={{ textAlign: "left", padding: "12px" }}>Source</th>
      <th style={{ textAlign: "left", padding: "12px" }}>Status</th>
    </tr>
  </thead>

  <tbody>
    {leads.slice(0, 5).map((lead) => (
      <tr
        key={lead.id}
        style={{
          borderTop: "1px solid #e5e7eb"
        }}
      >
        <td style={{ padding: "15px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "#2563eb",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold"
              }}
            >
              {lead.name.charAt(0).toUpperCase()}
            </div>

            <div>
              <div style={{ fontWeight: "600" }}>
                {lead.name}
              </div>

              <div
                style={{
                  fontSize: "13px",
                  color: "#6b7280"
                }}
              >
                {lead.email}
              </div>
            </div>
          </div>
        </td>

        <td
  style={{
    padding: "15px",
    color: darkMode ? "white" : "#111827"
  }}
>
  {lead.company}
</td>

<td
  style={{
    padding: "15px",
    color: darkMode ? "white" : "#111827"
  }}
>
  {lead.source}
</td>

        <td style={{ padding: "15px" }}>
          <span
            style={{
              padding: "6px 14px",
              borderRadius: "20px",
              background:
                lead.status === "Won"
                  ? "#dcfce7"
                  : lead.status === "Proposal"
                  ? "#fef3c7"
                  : lead.status === "Qualified"
                  ? "#ede9fe"
                  : lead.status === "Contacted"
                  ? "#dbeafe"
                  : lead.status === "Lost"
                  ? "#fee2e2"
                  : "#e5e7eb",
              color:
                lead.status === "Won"
                  ? "#16a34a"
                  : lead.status === "Proposal"
                  ? "#d97706"
                  : lead.status === "Qualified"
                  ? "#7c3aed"
                  : lead.status === "Contacted"
                  ? "#2563eb"
                  : lead.status === "Lost"
                  ? "#dc2626"
                  : "#374151",
              fontWeight: "600"
            }}
          >
            {lead.status}
          </span>
        </td>
      </tr>
    ))}
  </tbody>
</table>
      </div>
    </div>
  )
}

function Card({ title, value, color, icon }) {
  return (
    <div
      style={{
        background: color,
        color: "white",
        padding: "22px",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,0.25)"
      }}
    >
      <div>
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            opacity: 0.9
          }}
        >
          {title}
        </p>

        <h1
          style={{
            marginTop: "10px",
            fontSize: "34px"
          }}
        >
          {value}
        </h1>
      </div>

      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "16px",
          background: "rgba(255,255,255,0.20)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {icon}
      </div>
    </div>
  )
}

export default Dashboard