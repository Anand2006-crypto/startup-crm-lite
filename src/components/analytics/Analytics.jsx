import {
  FiUsers,
  FiTarget,
  FiTrendingUp,
  FiDollarSign,
  FiAward,
  FiClock
} from "react-icons/fi"
import {
  AreaChart,
  Area,
} from "recharts";
import { useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
 LineChart,
Line,

} from "recharts"
import { getTheme } from "../../theme/tokens"


function Analytics({ leads, darkMode }) {
  const t = getTheme(darkMode)
  const [range, setRange] = useState("30")
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState("")

  const filteredLeads =
    range === "7"
      ? leads.slice(0, 7)
      : range === "30"
      ? leads.slice(0, 30)
      : range === "90"
      ? leads.slice(0, 90)
      : leads

  const totalLeads = filteredLeads.length

  const qualifiedLeads = filteredLeads.filter(
    (lead) =>
      lead.status === "Interested" ||
      lead.status === "Contacted"
  ).length

  const closedLeads = filteredLeads.filter(
    (lead) => lead.status === "Closed"
  ).length

  const conversionRate =
    totalLeads === 0
      ? 0
      : Math.round((closedLeads / totalLeads) * 100)

  const data = [
  {
    status: "New",
    count: leads.filter((lead) => lead.status === "New").length
  },
  {
    status: "Contacted",
    count: leads.filter((lead) => lead.status === "Contacted").length
  },
  {
    status: "Qualified",
    count: leads.filter((lead) => lead.status === "Qualified").length
  },
  {
    status: "Proposal",
    count: leads.filter((lead) => lead.status === "Proposal").length
  },
  {
    status: "Won",
    count: leads.filter((lead) => lead.status === "Won").length
  },
  {
    status: "Lost",
    count: leads.filter((lead) => lead.status === "Lost").length
  }
]
const sourceData = [
  {
    source: "Website",
    count: leads.filter(l => l.source?.trim() === "Website").length,
  },
  {
    source: "LinkedIn",
    count: leads.filter(l => l.source?.trim() === "LinkedIn").length,
  },
  {
    source: "Referral",
    count: leads.filter(l => l.source?.trim() === "Referral").length,
  },
  {
    source: "Instagram",
    count: leads.filter(l => l.source?.trim() === "Instagram").length,
  },
];
console.log("sourceData:", sourceData);

console.log(
  leads.map((lead) => ({
    name: lead.name,
    source: lead.source,
  }))
);
console.log(sourceData);
console

 const monthlyData = [
  {
    month: "Jan",
    leads: leads.filter(
      l => new Date(l.dateAdded).getMonth() === 0
    ).length,
    revenue: leads.filter(
      l =>
        new Date(l.dateAdded).getMonth() === 0 &&
        l.status === "Won"
    ).length,
  },
  {
    month: "Feb",
    leads: leads.filter(
      l => new Date(l.dateAdded).getMonth() === 1
    ).length,
    revenue: leads.filter(
      l =>
        new Date(l.dateAdded).getMonth() === 1 &&
        l.status === "Won"
    ).length,
  },
  {
    month: "Mar",
    leads: leads.filter(
      l => new Date(l.dateAdded).getMonth() === 2
    ).length,
    revenue: leads.filter(
      l =>
        new Date(l.dateAdded).getMonth() === 2 &&
        l.status === "Won"
    ).length,
  },
  {
    month: "Apr",
    leads: leads.filter(
      l => new Date(l.dateAdded).getMonth() === 3
    ).length,
    revenue: leads.filter(
      l =>
        new Date(l.dateAdded).getMonth() === 3 &&
        l.status === "Won"
    ).length,
  },
  {
    month: "May",
    leads: leads.filter(
      l => new Date(l.dateAdded).getMonth() === 4
    ).length,
    revenue: leads.filter(
      l =>
        new Date(l.dateAdded).getMonth() === 4 &&
        l.status === "Won"
    ).length,
  },
  {
    month: "Jun",
    leads: leads.filter(
      l => new Date(l.dateAdded).getMonth() === 5
    ).length,
    revenue: leads.filter(
      l =>
        new Date(l.dateAdded).getMonth() === 5 &&
        l.status === "Won"
    ).length,
  },
  {
    month: "Jul",
    leads: leads.filter(
      l => new Date(l.dateAdded).getMonth() === 6
    ).length,
    revenue: leads.filter(
      l =>
        new Date(l.dateAdded).getMonth() === 6 &&
        l.status === "Won"
    ).length,
  },
];

  const COLORS = t.chartColors

  const boxStyle = {
    background: t.surface,
    padding: "16px",
    borderRadius: "14px",
    boxShadow: t.shadowMd,
    border: `1px solid ${t.border}`,
  }
  

const wonLeads = leads.filter(
  (lead) => lead.status === "Won"
).length;

const lostLeads = leads.filter(
  (lead) => lead.status === "Lost"
).length;
const topSources = [...leads].reduce((acc, lead) => {
  acc[lead.source] = (acc[lead.source] || 0) + 1;
  return acc;
}, {});
const weeklyData = [
  { day: "Sun", value: 0 },
  { day: "Mon", value: 0 },
  { day: "Tue", value: 0 },
  { day: "Wed", value: 0 },
  { day: "Thu", value: 0 },
  { day: "Fri", value: 0 },
  { day: "Sat", value: 0 },
];

leads.forEach((lead) => {
  const day = new Date(lead.dateAdded).getDay();
  weeklyData[day].value++;
});
const topPerformers = Object.entries(topSources)
  .map(([name, count]) => ({ name, count }))
  .sort((a, b) => b.count - a.count)
  .slice(0, 3);
  const recentActivities = leads.slice(-5).reverse();
console.log(leads);
const notifications = [
  "New lead added",
  "Meeting scheduled",
  "Proposal sent",
  "Lead status updated",
];
const today = new Date();

const currentDate = today.toLocaleDateString("en-IN", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});
const pendingLeads = leads.filter(
  (lead) =>
    lead.status !== "Won" &&
    lead.status !== "Lost"
).length;

const successRate = Math.round(
  (wonLeads / (leads.length || 1)) * 100
);
const performanceScore = Math.min(
  100,
  Math.round(
    (wonLeads * 10 + qualifiedLeads * 5) /
      (leads.length || 1)
  )
);
const progressData = [
  {
    name: "New",
    value: data[0].count,
    color: t.funnelColors[0],
  },
  {
    name: "Contacted",
    value: data[1].count,
    color: t.funnelColors[1],
  },
  {
    name: "Qualified",
    value: data[2].count,
    color: t.funnelColors[2],
  },
  {
    name: "Won",
    value: data[4].count,
    color: t.funnelColors[4],
  },
];
const monthlyGoal = 50;

const goalProgress = Math.min(
  100,
  Math.round((totalLeads / monthlyGoal) * 100)
);

  return (
    <div style={{ padding: "8px" }}>
            <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "14px"
        }}
      >
        <div>
         <h1
  style={{
    color: t.text,
    margin: 0,
    fontSize: "38px",
    fontWeight: "700"
  }}
>
  Analytics Dashboard
</h1>

          <p
  style={{
    color: t.textMuted,
    marginTop: "10px"
  }}
>
  Track sales performance and revenue
</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
          flexWrap: "wrap",
          gap: "8px"
        }}
      >
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {["7", "30", "90", "custom"].map((item) => (
            <button
              key={item}
              onClick={() => setRange(item)}
              style={{
                padding: "8px 14px",
                borderRadius: "10px",
                border: `1px solid ${t.border}`,
                cursor: "pointer",
                background: range === item ? t.accent : t.surface,
                color: range === item ? t.textInverse : t.text,
                fontWeight: range === item ? "600" : "500",
              }}
            >
              {item === "custom" ? "Custom Range" : `Last ${item} Days`}
            </button>
          ))}
        </div>

        {range === "custom" && (
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              style={{
                padding: "8px",
                borderRadius: "8px",
                border: `1px solid ${t.border}`,
                background: t.inputBg,
                color: t.text,
              }}
            />

            <span style={{ color: t.textMuted }}>to</span>

            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              style={{
                padding: "8px",
                borderRadius: "8px",
                border: `1px solid ${t.border}`,
                background: t.inputBg,
                color: t.text,
              }}
            />
          </div>
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "10px",
          marginBottom: "16px"
        }}
      >
       <Card
  title="Total Leads"
  value={leads.length}
  color={t.cardGradients.blue}
  icon={<FiUsers size={30} />}
/>

<Card
  title="Qualified"
  value={leads.filter(l => l.status === "Qualified").length}
  color={t.cardGradients.slate}
  icon={<FiTarget size={30} />}
/>

<Card
  title="Conversion"
  value={`${Math.round(
    (leads.filter(l => l.status === "Won").length /
      (leads.length || 1)) * 100
  )}%`}
  color={t.cardGradients.green}
  icon={<FiTrendingUp size={30} />}
/>

<Card
  title="Pipeline"
  value={
    leads.filter(
      l => l.status !== "Won" && l.status !== "Lost"
    ).length
  }
  color={t.cardGradients.amber}
  icon={<FiDollarSign size={30} />}
/>

<Card
  title="Revenue"
  value={leads.filter(l => l.status === "Won").length}
  color={t.cardGradients.cyan}
  icon={<FiAward size={30} />}
/>

<Card
  title="Cycle"
  value="28d"
  color={t.cardGradients.red}
  icon={<FiClock size={30} />}
/>
      </div>

     <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "12px"
  }}
>
  
  <div style={boxStyle}> 
    
          <h3 style={{ color: t.panelTitle, fontSize: "14px", margin: "0 0 12px" }}>
            Lead Distribution
          </h3>
          
          <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
  }}
>
  <ResponsiveContainer width="60%" height={220}>
    <PieChart>
      <Pie
        data={data}
        dataKey="count"
        innerRadius={55}
        outerRadius={80}
        paddingAngle={3}
      >
        {data.map((entry, index) => (
          <Cell
            key={index}
            fill={COLORS[index]}
          />
        ))}

        <text
          x="50%"
          y="48%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={t.text}
          fontSize="26"
          fontWeight="bold"
        >
          {totalLeads}
        </text>

        <text
          x="50%"
          y="62%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={t.textMuted}
          fontSize="12"
        >
          Total
        </text>
      </Pie>

      <Tooltip />
    </PieChart>
  </ResponsiveContainer>

  <div style={{ width: "40%" }}>
    {data.map((item, index) => (
      <div
        key={item.status}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
          color: t.text,
          fontSize: "14px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: COLORS[index],
            }}
          />
          <span>{item.status}</span>
        </div>

        <strong>{item.count}</strong>
      </div>
    ))}
  </div>
</div>
        </div>
        
        <div style={boxStyle}>
  <h3 style={{ color: t.panelTitle, marginBottom: "15px", fontSize: "14px" }}>
    Sales Conversion Funnel
  </h3>

  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}
  >
    <div
  style={{
    width: "190px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px"
  }}
>
  {t.funnelColors.map((color, i) => {
    const widths = ["180px", "155px", "130px", "105px", "80px", "55px"]
    const heights = ["24px", "22px", "20px", "18px", "16px", "14px"]
    return (
      <div key={i} style={funnelLayer(widths[i], heights[i], color)} />
    )
  })}
</div>

    <div
  style={{
    color: t.text,
    fontSize: "12px",
    lineHeight: "1.9"
  }}
>
  <div>🔵 New .............. {data[0].count}</div>
  <div>🔷 Contacted ..... {data[1].count}</div>
  <div>🟣 Qualified ..... {data[2].count}</div>
  <div>🟠 Proposal ...... {data[3].count}</div>
  <div>🟢 Won ............. {data[4].count}</div>
  <div>🔴 Lost ............ {data[5].count}</div>
</div>
</div>

</div>

<div style={boxStyle}>
  <h3
    style={{
      color: t.panelTitle,
      fontSize: "16px",
      marginBottom: "20px",
      textAlign: "center",
    }}
  >
    Lead Status Overview
  </h3>

  <ResponsiveContainer width="100%" height={280}>
    <BarChart
      data={data}
      margin={{
        top: 20,
        right: 20,
        left: 10,
        bottom: 10,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke={t.chartGrid} />

     <XAxis
  dataKey="status"
  interval={0}
  angle={-20}
  textAnchor="end"
  height={60}
  tick={{ fontSize: 12, fill: t.chartAxis }}
  stroke={t.chartAxis}
/>
        

      <YAxis
        stroke={t.chartAxis}
        tick={{ fill: t.chartAxis }}
        allowDecimals={false}
      />

      <Tooltip />

      <Bar
        dataKey="count"
        radius={[8, 8, 0, 0]}
      >
        {data.map((entry, index) => (
          <Cell
            key={index}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
</div>

        

        <div style={boxStyle}>
          <h3 style={{ color: t.panelTitle, fontSize: "14px", margin: "0 0 12px" }}>
            Monthly Leads
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" stroke={t.chartAxis} tick={{ fill: t.chartAxis }} />
              <YAxis stroke={t.chartAxis} tick={{ fill: t.chartAxis }} />
              <Tooltip />
              <Bar dataKey="leads" fill={t.success} radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

       <div style={boxStyle}>
  <h3
    style={{
      color: t.panelTitle,
      fontSize: "14px",
      margin: "0 0 12px",
    }}
  >
    Revenue Growth
  </h3>

  <ResponsiveContainer width="100%" height={220}>
    <AreaChart data={monthlyData}>
      <defs>
        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={t.accent} stopOpacity={0.8} />
          <stop offset="95%" stopColor={t.accent} stopOpacity={0.05} />
        </linearGradient>
      </defs>

      <CartesianGrid stroke={t.chartGrid} strokeDasharray="3 3" />

      <XAxis dataKey="month" stroke={t.chartAxis} tick={{ fill: t.chartAxis }} />
      <YAxis stroke={t.chartAxis} tick={{ fill: t.chartAxis }} />

      <Tooltip />

      <Area
        type="monotone"
        dataKey="revenue"
        stroke={t.accent}
        strokeWidth={3}
        fill="url(#revenueGradient)"
        dot={{ r: 5, fill: t.accent }}
        activeDot={{ r: 7 }}
      />
    </AreaChart>
  </ResponsiveContainer>
</div>
        <div style={boxStyle}>
          <h3 style={{ color: t.panelTitle, fontSize: "14px", margin: "0 0 12px" }}>
            Weekly Performance
          </h3>
          <ResponsiveContainer width="100%" height={180}>
  <AreaChart
    data={[
      { day: "Mon", value: 20 },
      { day: "Tue", value: 35 },
      { day: "Wed", value: 45 },
      { day: "Thu", value: 40 },
      { day: "Fri", value: 75 }
    ]}
  >
    <defs>
      <linearGradient id="weeklyGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor={t.success} stopOpacity={0.7} />
        <stop offset="95%" stopColor={t.success} stopOpacity={0.05} />
      </linearGradient>
    </defs>

    <CartesianGrid stroke={t.chartGrid} strokeDasharray="3 3" />

    <XAxis
      dataKey="day"
      stroke={t.chartAxis}
      tick={{ fill: t.chartAxis }}
    />

    <YAxis
      stroke={t.chartAxis}
      tick={{ fill: t.chartAxis }}
    />

    <Tooltip />

    <Area
      type="monotone"
      dataKey="value"
      stroke={t.success}
      strokeWidth={3}
      fill="url(#weeklyGradient)"
      dot={{ r: 4, fill: t.success }}
      activeDot={{ r: 6 }}
    />
  </AreaChart>
</ResponsiveContainer>
        </div>

        
                <div style={boxStyle}>
          <h3 style={{ color: t.panelTitle, fontSize: "14px", margin: "0 0 12px" }}>
            Daily Activity
          </h3>
          <Progress name="Calls" width="75%" color={t.accent} track={t.progressTrack} text={t.text} />
          <Progress name="Meetings" width="55%" color={t.success} track={t.progressTrack} text={t.text} />
          <Progress name="Follow-ups" width="85%" color={t.warning} track={t.progressTrack} text={t.text} />
        </div>
        <div style={boxStyle}>
          <h3 style={{ color: t.panelTitle, fontSize: "14px", margin: "0 0 12px" }}>
            Team Target
          </h3>

          <p style={{ color: t.text, fontSize: "12px" }}>Completed: 82%</p>

          <div
            style={{
              background: t.progressTrack,
              height: "14px",
              borderRadius: "10px"
            }}
          >
            <div
              style={{
                width: "82%",
                height: "14px",
                background: t.accent,
                borderRadius: "10px"
              }}
            />
          </div>
        </div>

        <div style={boxStyle}>
          <h4 style={{ color: t.panelTitle, fontSize: "14px", margin: "0 0 12px" }}>
            Top Performers
          </h4>
         {topPerformers.map((item, index) => (
  <p
    key={item.name}
    style={{ color: t.text, fontSize: "15px" }}
  >
    {index === 0
      ? "🥇"
      : index === 1
      ? "🥈"
      : "🥉"}{" "}
    {item.name} — {item.count} Leads
  </p>
))}
        </div>

        

        

       <div style={boxStyle}>
  <h3 style={{ color: t.panelTitle, marginBottom: "10px", fontSize: "14px" }}>
    Top Lead Sources
  </h3>

  <ResponsiveContainer width="100%" height={180}>
  <BarChart
    data={sourceData}
    layout="vertical"
    margin={{
      top: 10,
      right: 20,
      left: 20,
      bottom: 10
    }}
  >
    <CartesianGrid strokeDasharray="3 3" stroke={t.chartGrid} />

    <XAxis
      type="number"
      stroke={t.chartAxis}
      tick={{ fill: t.chartAxis }}
      allowDecimals={false}
    />

    <YAxis
      type="category"
      dataKey="source"
      stroke={t.chartAxis}
      tick={{ fill: t.chartAxis }}
      width={100}
      interval={0}
    />

    <Tooltip />

    <Bar
      dataKey="count"
      fill={t.chartAccent}
      radius={[0, 8, 8, 0]}
    />
  </BarChart>
</ResponsiveContainer>
</div>

<div style={boxStyle}>
  <h2
    style={{
      color: t.panelTitle,
      marginBottom: "5px",
      fontSize: "16px",
    }}
  >
    Recent Activities
  </h2>

  {recentActivities.map((lead) => (
    <div
      key={lead._id}
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 0",
        borderBottom: `1px solid ${t.border}`,
        color: t.text
      }}
    >
      <div>
        <strong>{lead.name}</strong>

        <p
          style={{
            margin: "2px 0",
            color: t.textMuted,
            fontSize: "12px"
          }}
        >
          {lead.company}
        </p>
      </div>

      <span
        style={{
          background: t.accent,
          color: t.textInverse,
          padding: "6px 12px",
          borderRadius: "10px",
          fontSize: "12px",
          fontWeight: "600",
        }}
      >
        {lead.status}
      </span>
    </div>
  ))}
</div> 
<div style={boxStyle}>
  <h2
    style={{
      color: t.panelTitle,
      marginBottom: "20px",
      fontSize: "16px",
    }}
  >
    Pending Tasks
  </h2>

  <p style={{ color: t.text, fontSize: "15px", marginBottom: "8px" }}>
    📞 Call 5 clients
  </p>

  <p style={{ color: t.text, fontSize: "15px", marginBottom: "8px" }}>
    📧 Send 3 emails
  </p>

  <p style={{ color: t.text, fontSize: "15px", marginBottom: "8px" }}>
    🤝 Arrange 2 meetings
  </p>

  <p style={{ color: t.text, fontSize: "15px" }}>
    📝 Update proposals
  </p>
</div>
<div style={boxStyle}>
  <h3
    style={{
      color: t.panelTitle,
      marginBottom: "15px",
      fontSize: "14px",
    }}
  >
    Notifications
  </h3>

  {notifications.map((item, index) => (
    <div
      key={index}
      style={{
        color: t.text,
        padding: "10px 0",
        borderBottom: `1px solid ${t.border}`,
        fontSize: "14px",
      }}
    >
      🔔 {item}
    </div>
  ))}
</div>
<div style={boxStyle}>
  <h3
    style={{
      color: t.panelTitle,
      marginBottom: "15px",
      fontSize: "14px",
    }}
  >
    Calendar
  </h3>

  <div
    style={{
      color: t.text,
      textAlign: "center",
      padding: "20px 0",
    }}
  >
    <h2
      style={{
        margin: 0,
        fontSize: "24px",
      }}
    >
      📅
    </h2>

    <p
      style={{
        marginTop: "12px",
        fontSize: "15px",
      }}
    >
      {currentDate}
    </p>
  </div>
</div>
<div style={boxStyle}>
  <h3
    style={{
      color: t.panelTitle,
      marginBottom: "15px",
      fontSize: "14px",
    }}
  >
    Quick Stats
  </h3>

  <div
    style={{
      color: t.text,
      fontSize: "14px",
      lineHeight: "2",
    }}
  >
    <p>📊 Total Leads: {leads.length}</p>

    <p>⏳ Pending Leads: {pendingLeads}</p>

    <p>🏆 Won Leads: {wonLeads}</p>

    <p>📈 Success Rate: {successRate}%</p>
  </div>
</div>
<div style={boxStyle}>
  <h3
    style={{
      color: t.panelTitle,
      marginBottom: "15px",
      fontSize: "14px",
    }}
  >
    Performance Score
  </h3>

  <div
    style={{
      textAlign: "center",
      color: t.text,
    }}
  >
    <h1
      style={{
        fontSize: "42px",
        margin: "10px 0",
        color:
          performanceScore >= 75
            ? t.success
            : performanceScore >= 50
            ? t.warning
            : t.danger,
      }}
    >
      {performanceScore}%
    </h1>

    <div
      style={{
        width: "100%",
        height: "12px",
        background: t.progressTrack,
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          width: `${performanceScore}%`,
          height: "12px",
          background: t.success,
          borderRadius: "10px",
        }}
      />
    </div>
  </div>
</div>
<div style={boxStyle}>
  <h3
    style={{
      color: t.panelTitle,
      marginBottom: "15px",
      fontSize: "14px",
    }}
  >
    Lead Progress
  </h3>

  {progressData.map((item) => (
    <div key={item.name} style={{ marginBottom: "14px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: t.text,
          marginBottom: "5px",
          fontSize: "13px",
        }}
      >
        <span>{item.name}</span>
        <span>{item.value}</span>
      </div>

      <div
        style={{
          width: "100%",
          height: "10px",
          background: t.progressTrack,
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            width: `${(item.value / (totalLeads || 1)) * 100}%`,
            height: "10px",
            background: item.color,
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  ))}
</div>
<div style={boxStyle}>
  <h3
    style={{
      color: t.panelTitle,
      marginBottom: "15px",
      fontSize: "14px",
    }}
  >
    Monthly Goal
  </h3>

  <div
    style={{
      color: t.text,
      marginBottom: "10px",
      fontSize: "14px",
    }}
  >
    Goal: {totalLeads} / {monthlyGoal} Leads
  </div>

  <div
    style={{
      width: "100%",
      height: "14px",
      background: t.progressTrack,
      borderRadius: "10px",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        width: `${goalProgress}%`,
        height: "14px",
        background:
          goalProgress >= 100
            ? t.success
            : t.accent,
        borderRadius: "10px",
      }}
    />
  </div>

  <p
    style={{
      color: t.textMuted,
      marginTop: "10px",
      fontSize: "12px",
    }}
  >
    {goalProgress}% completed
  </p>
</div>
      </div>  
    </div>   ); 
    


  }

function Card({ title, value, color, icon }) {
  return (
    
    <div
      style={{
        background: color,
        borderRadius: "14px",
        padding: "10px 12px",
        height: "82px",
        color: "#FFFFFF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 6px 15px rgba(0,0,0,.2)"
      }}
    >
      <div>
        <p
          style={{
            margin: 0,
            fontSize: "11px",
            opacity: 0.9
          }}
        >
          {title}
        </p>

        <h2
          style={{
            margin: "6px 0 2px",
            fontSize: "18px",
            fontWeight: "700"
          }}
        >
          {value}
        </h2>

        <p
          style={{
            margin: 0,
            fontSize: "9px",
            opacity: 0.75
          }}
        >
          ▲ 16.8%
        </p>
      </div>

      <div
        style={{
          width: "38px",
          height: "38px",
          borderRadius: "12px",
          background: "rgba(255,255,255,.18)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {icon}
      </div>
    </div>
    
  )
}
function funnelLayer(width, height, color) {
  return {
    width,
    height,
    background: color,
    clipPath: "polygon(0 0,100% 0,85% 100%,15% 100%)"
  }
}

function Progress({ name, width, color, track, text }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <p style={{ color: text, fontSize: "12px" }}>{name}</p>
      <div
        style={{
          background: track,
          height: "12px",
          borderRadius: "10px"
        }}
      >
        <div
          style={{
            width,
            height: "12px",
            background: color,
            borderRadius: "10px"
          }}
        />
      </div>
    </div>
  )
}

export default Analytics
