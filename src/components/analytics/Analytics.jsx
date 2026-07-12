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


function Analytics({ leads, darkMode }) {
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

  const COLORS = [
  "#2563eb",
  "#22c55e",
  "#f59e0b",
  "#9333ea",
  "#06b6d4",
  "#ec4899"
]

  const boxStyle = {
    background: "rgba(31,41,55,0.92)",
    padding: "8px",
    borderRadius: "12px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.35)"
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
    color: "#2563eb",
  },
  {
    name: "Contacted",
    value: data[1].count,
    color: "#06b6d4",
  },
  {
    name: "Qualified",
    value: data[2].count,
    color: "#9333ea",
  },
  {
    name: "Won",
    value: data[4].count,
    color: "#22c55e",
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
    color: darkMode ? "white" : "#000000",
    margin: 0,
    fontSize: "38px",
    fontWeight: "700"
  }}
>
  Analytics Dashboard
</h1>

          <p
  style={{
    color: darkMode ? "#d1d5db" : "#6b7280",
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
                border: "none",
                cursor: "pointer",
                background: range === item ? "#2563eb" : "#1f2937",
                color: "white"
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
              style={{ padding: "8px", borderRadius: "8px" }}
            />

            <span style={{ color: "white" }}>to</span>

            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              style={{ padding: "8px", borderRadius: "8px" }}
            />
          </div>
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, minmax(90px,1fr))",
          gap: "10px",
          marginBottom: "16px"
        }}
      >
       <Card
  title="Total Leads"
  value={leads.length}
  color="linear-gradient(135deg,#2563eb,#60a5fa)"
  icon={<FiUsers size={30} />}
/>

<Card
  title="Qualified"
  value={leads.filter(l => l.status === "Qualified").length}
  color="linear-gradient(135deg,#9333ea,#c084fc)"
  icon={<FiTarget size={30} />}
/>

<Card
  title="Conversion"
  value={`${Math.round(
    (leads.filter(l => l.status === "Won").length /
      (leads.length || 1)) * 100
  )}%`}
  color="linear-gradient(135deg,#059669,#34d399)"
  icon={<FiTrendingUp size={30} />}
/>

<Card
  title="Pipeline"
  value={
    leads.filter(
      l => l.status !== "Won" && l.status !== "Lost"
    ).length
  }
  color="linear-gradient(135deg,#f59e0b,#fbbf24)"
  icon={<FiDollarSign size={30} />}
/>

<Card
  title="Revenue"
  value={leads.filter(l => l.status === "Won").length}
  color="linear-gradient(135deg,#0891b2,#67e8f9)"
  icon={<FiAward size={30} />}
/>

<Card
  title="Cycle"
  value="28d"
  color="linear-gradient(135deg,#ef4444,#fb7185)"
  icon={<FiClock size={30} />}
/>
      </div>

     <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "8px"
  }}
>
  
  <div style={boxStyle}> 
    
          <h3 style={{ color: "#93c5fd", fontSize: "14px" }}>
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
          fill="white"
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
          fill="#9ca3af"
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
          color: "white",
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
  <h3 style={{ color: "white", marginBottom: "15px" }}>
    Sales Conversion Funnel
  </h3>

  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}
  >
    {/* Funnel */}
    <div
  style={{
    width: "190px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px"
  }}
>
  <div style={funnelLayer("180px", "24px", "#2563eb")} />
  <div style={funnelLayer("155px", "22px", "#06b6d4")} />
  <div style={funnelLayer("130px", "20px", "#9333ea")} />
  <div style={funnelLayer("105px", "18px", "#f59e0b")} />
  <div style={funnelLayer("80px", "16px", "#22c55e")} />
  <div style={funnelLayer("55px", "14px", "#ef4444")} />
</div>

    {/* Legend */}
    <div
  style={{
    color: "white",
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
      color: "#93c5fd",
      fontSize: "18px",
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
      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />

     <XAxis
  dataKey="status"
  interval={0}
  angle={-20}
  textAnchor="end"
  height={60}
  tick={{ fontSize: 12 }}
  stroke="#9ca3af"
/>
        
      

      <YAxis
        stroke="#9ca3af"
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
          <h3 style={{ color: "#93c5fd", fontSize: "14px" }}>
            Monthly Leads
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="leads" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>

       <div style={boxStyle}>
  <h3
    style={{
      color: "#93c5fd",
      fontSize: "14px"
    }}
  >
    Revenue Growth
  </h3>

  <ResponsiveContainer width="100%" height={220}>
    <AreaChart data={monthlyData}>
      <defs>
        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#22c55e" stopOpacity={0.05} />
        </linearGradient>
      </defs>

      <CartesianGrid stroke="#374151" strokeDasharray="3 3" />

      <XAxis dataKey="month" stroke="#9ca3af" />
      <YAxis stroke="#9ca3af" />

      <Tooltip />

      <Area
        type="monotone"
        dataKey="revenue"
        stroke="#22c55e"
        strokeWidth={3}
        fill="url(#revenueGradient)"
        dot={{ r: 5 }}
        activeDot={{ r: 7 }}
      />
    </AreaChart>
  </ResponsiveContainer>
</div>
        <div style={boxStyle}>
          <h3 style={{ color: "#93c5fd", fontSize: "14px" }}>
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
        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.7} />
        <stop offset="95%" stopColor="#22c55e" stopOpacity={0.05} />
      </linearGradient>
    </defs>

    <CartesianGrid stroke="#374151" strokeDasharray="3 3" />

    <XAxis
      dataKey="day"
      stroke="#9ca3af"
    />

    <YAxis
      stroke="#9ca3af"
    />

    <Tooltip />

    <Area
      type="monotone"
      dataKey="value"
      stroke="#22c55e"
      strokeWidth={3}
      fill="url(#weeklyGradient)"
      dot={{ r: 4, fill: "#22c55e" }}
      activeDot={{ r: 6 }}
    />
  </AreaChart>
</ResponsiveContainer>
        </div>

        
                <div style={boxStyle}>
          <h3 style={{ color: "#93c5fd", fontSize: "14px" }}>
            Daily Activity
          </h3>
          <Progress name="Calls" width="75%" color="#2563eb" />
          <Progress name="Meetings" width="55%" color="#22c55e" />
          <Progress name="Follow-ups" width="85%" color="#f59e0b" />
        </div>
        <div style={boxStyle}>
          <h3 style={{ color: "#93c5fd", fontSize: "14px" }}>
            Team Target
          </h3>

          <p style={{ color: "white", fontSize: "12px" }}>Completed: 82%</p>

          <div
            style={{
              background: "#374151",
              height: "14px",
              borderRadius: "10px"
            }}
          >
            <div
              style={{
                width: "82%",
                height: "14px",
                background: "#3b82f6",
                borderRadius: "10px"
              }}
            />
          </div>
        </div>

        <div style={boxStyle}>
          <h4 style={{ color: "#93c5fd", fontSize: "14px" }}>
            Top Performers
          </h4>
         {topPerformers.map((item, index) => (
  <p
    key={item.name}
    style={{ color: "white", fontSize: "15px" }}
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
  <h3 style={{ color: "#93c5fd", marginBottom: "10px" }}>
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
    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />

    <XAxis
      type="number"
      stroke="#9ca3af"
      allowDecimals={false}
    />

    <YAxis
      type="category"
      dataKey="source"
      stroke="#9ca3af"
      width={100}
      interval={0}
    />

    <Tooltip />

    <Bar
      dataKey="count"
      fill="#3b82f6"
      radius={[0, 8, 8, 0]}
    />
  </BarChart>
</ResponsiveContainer>
</div>

<div style={boxStyle}>
  <h2
    style={{
      color: "#93c5fd",
      marginBottom: "5px"
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
        padding: "1px 0",
        borderBottom: "2px solid #374151",
        color: "white"
      }}
    >
      <div>
        <strong>{lead.name}</strong>

        <p
          style={{
            margin: "2px 0",
            color: "#9ca3af",
            fontSize: "10px"
          }}
        >
          {lead.company}
        </p>
      </div>

      <span
        style={{
          background: "#2563eb",
          padding: "10px 10px",
          borderRadius: "10px",
          fontSize: "12px"
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
      color: "#93c5fd",
      marginBottom: "45px",
    }}
  >
    Pending Tasks
  </h2>

  <p style={{ color: "white", fontSize: "16px" }}>
    📞 Call 5 clients
  </p>

  <p style={{ color: "white", fontSize: "16px" }}>
    📧 Send 3 emails
  </p>

  <p style={{ color: "white", fontSize: "16px" }}>
    🤝 Arrange 2 meetings
  </p>

  <p style={{ color: "white", fontSize: "16px" }}>
    📝 Update proposals
  </p>
</div>
<div style={boxStyle}>
  <h3
    style={{
      color: "#93c5fd",
      marginBottom: "15px",
    }}
  >
    Notifications
  </h3>

  {notifications.map((item, index) => (
    <div
      key={index}
      style={{
        color: "white",
        padding: "10px 0",
        borderBottom: "1px solid #374151",
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
      color: "#93c5fd",
      marginBottom: "15px",
    }}
  >
    Calendar
  </h3>

  <div
    style={{
      color: "white",
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
      color: "#93c5fd",
      marginBottom: "15px",
    }}
  >
    Quick Stats
  </h3>

  <div
    style={{
      color: "white",
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
      color: "#93c5fd",
      marginBottom: "15px",
    }}
  >
    Performance Score
  </h3>

  <div
    style={{
      textAlign: "center",
      color: "white",
    }}
  >
    <h1
      style={{
        fontSize: "42px",
        margin: "10px 0",
        color:
          performanceScore >= 75
            ? "#22c55e"
            : performanceScore >= 50
            ? "#f59e0b"
            : "#ef4444",
      }}
    >
      {performanceScore}%
    </h1>

    <div
      style={{
        width: "100%",
        height: "12px",
        background: "#374151",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          width: `${performanceScore}%`,
          height: "12px",
          background: "#22c55e",
          borderRadius: "10px",
        }}
      />
    </div>
  </div>
</div>
<div style={boxStyle}>
  <h3
    style={{
      color: "#93c5fd",
      marginBottom: "15px",
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
          color: "white",
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
          background: "#374151",
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
      color: "#93c5fd",
      marginBottom: "15px",
    }}
  >
    Monthly Goal
  </h3>

  <div
    style={{
      color: "white",
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
      background: "#374151",
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
            ? "#22c55e"
            : "#3b82f6",
        borderRadius: "10px",
      }}
    />
  </div>

  <p
    style={{
      color: "#d1d5db",
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
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 6px 15px rgba(0,0,0,.25)"
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
            color: "#dcfce7"
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

function Progress({ name, width, color }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <p style={{ color: "white", fontSize: "12px" }}>{name}</p>
      <div
        style={{
          background: "#374151",
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