import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

function Analytics({ leads }) {
  const data = [
    {
      status: "Interested",
      count: leads.filter((lead) => lead.status === "Interested").length
    },
    {
      status: "Contacted",
      count: leads.filter((lead) => lead.status === "Contacted").length
    },
    {
      status: "Closed",
      count: leads.filter((lead) => lead.status === "Closed").length
    }
  ]

  return (
    <div style={{ margin: "20px" }}>
      <h2>Lead Analytics</h2>

      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="status" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" />
      </BarChart>
    </div>
  )
}

export default Analytics