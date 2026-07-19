import {
  FiUsers,
  FiAward,
  FiDollarSign,
  FiTrendingUp
} from "react-icons/fi"
import { getTheme, getStatusStyle } from "../../theme/tokens"

function Dashboard({ leads, darkMode }) {
  const t = getTheme(darkMode)
  const totalLeads = leads.length

  const wonDeals = leads.filter(
  (lead) => lead.status === "Won"
).length

 const conversionRate =
  totalLeads === 0
    ? 0
    : Math.round((wonDeals / totalLeads) * 100)

const revenue = wonDeals * 25000
if (leads.length === 0) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "80px",
        color: t.textMuted,
      }}
    >
      <h1>📭</h1>

      <h2>No leads yet</h2>

      <p>Add your first lead to get started.</p>
    </div>
  );
}

  return (
    <div style={{ padding: "10px" }}>
      <div style={{ marginBottom: "30px" }}>
        <h1
  style={{
    margin: 0,
   fontSize:
  window.innerWidth <= 768
    ? "28px"
    : "48px",
    fontWeight: "700",
    color: t.text
  }}
>
  Dashboard Management
</h1>

        <p style={{ color: t.textMuted, marginTop: "10px" }}>
          Overview of your sales performance
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
  window.innerWidth <= 768
    ? "repeat(2, 1fr)"
    : "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px"
        }}
      >
       <Card
  title="Total Leads"
  value={totalLeads}
  icon={<FiUsers size={28} />}
  color={t.cardGradients.blue}
/>

<Card
  title="Won Deals"
  value={wonDeals}
  icon={<FiAward size={28} />}
  color={t.cardGradients.green}
/>

<Card
  title="Revenue"
  value={`₹${revenue}`}
  icon={<FiDollarSign size={28} />}
  color={t.cardGradients.amber}
/>

<Card
  title="Conversion Rate"
  value={`${conversionRate}%`}
  icon={<FiTrendingUp size={28} />}
  color={t.cardGradients.slate}
/>
      </div>

      <div
        style={{
          marginTop: "35px",
          background: t.surface,
          padding: "24px",
          borderRadius: "16px",
          boxShadow: t.shadowMd,
          border: `1px solid ${t.border}`,
        }}
      >
       <h2
  style={{
    color: t.text,
    marginBottom: "4px",
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
    <tr style={{ color: t.textMuted }}>
      <th style={{ textAlign: "left", padding: "12px" }}>Lead</th>
      <th style={{ textAlign: "left", padding: "12px" }}>Company</th>
      <th style={{ textAlign: "left", padding: "12px" }}>Source</th>
      <th style={{ textAlign: "left", padding: "12px" }}>Status</th>
    </tr>
  </thead>

  <tbody>
    {leads.slice(0, 5).map((lead) => {
      const statusStyle = getStatusStyle(lead.status, darkMode)
      return (
      <tr
        key={lead.id}
        style={{
          borderTop: `1px solid ${t.tableRowBorder}`
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
                background: t.accent,
                color: t.textInverse,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold"
              }}
            >
              {lead.name.charAt(0).toUpperCase()}
            </div>

            <div>
              <div style={{ fontWeight: "600", color: t.text }}>
                {lead.name}
              </div>

              <div
                style={{
                  fontSize: "13px",
                  color: t.textMuted
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
    color: t.text
  }}
>
  {lead.company}
</td>

<td
  style={{
    padding: "15px",
    color: t.text
  }}
>
  {lead.source}
</td>

        <td style={{ padding: "15px" }}>
          <span
            style={{
              padding: "6px 14px",
              borderRadius: "20px",
              background: statusStyle.background,
              color: statusStyle.color,
              fontWeight: "600",
              fontSize: "13px",
            }}
          >
            {lead.status}
          </span>
        </td>
      </tr>
    )})}
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
        color: "#FFFFFF",
        padding: window.innerWidth <= 768 ? "18px" : "22px",
        borderRadius: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
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
          borderRadius: "14px",
          background: "rgba(255,255,255,0.18)",
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
