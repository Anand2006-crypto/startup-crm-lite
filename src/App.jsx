import { useState, useEffect } from "react"
import Navbar from "./components/common/Navbar"
import Dashboard from "./components/dashboard/Dashboard"
import LeadList from "./components/leads/LeadList"
import AddLeadForm from "./components/leads/AddLeadForm"
import Analytics from "./components/analytics/Analytics"

function App() {
  const [leads, setLeads] = useState(() => {
  const savedLeads = localStorage.getItem("leads")

  return savedLeads
    ? JSON.parse(savedLeads)
    : [
        {
          id: 1,
          name: "Rahul Sharma",
          email: "rahul@gmail.com",
          status: "Interested"
        },
        {
          id: 2,
          name: "Priya Reddy",
          email: "priya@gmail.com",
          status: "Contacted"
        }
      ]
})
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")
  const [darkMode, setDarkMode] = useState(true)

  function addLead(newLead) {
    setLeads([...leads, newLead])
  }
  function editLead(id, newStatus) {
  setLeads(
    leads.map((lead) =>
      lead.id === id ? { ...lead, status: newStatus } : lead
    )
  )
}
function deleteLead(id) {
  setLeads(leads.filter((lead) => lead.id !== id))
}
useEffect(() => {
  localStorage.setItem("leads", JSON.stringify(leads))
}, [leads])

 return (
  <div
    style={{
      backgroundColor: darkMode ? "#222" : "#fff",
      color: darkMode ? "#fff" : "#000",
      minHeight: "100vh"
    }}
  >
      <Navbar />
      <Dashboard />
      <Analytics leads={leads} />
      <button
  onClick={() => setDarkMode(!darkMode)}
  style={{
    margin: "20px",
    padding: "10px"
  }}
>
  {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>
      <input
  type="text"
  placeholder="Search leads..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={{
    padding: "10px",
    margin: "20px",
    width: "300px"
  }}
/>
<select
  value={filter}
  onChange={(e) => setFilter(e.target.value)}
  style={{
    padding: "10px",
    margin: "20px"
  }}
>
  <option>All</option>
  <option>Interested</option>
  <option>Contacted</option>
  <option>Closed</option>
</select>
      <AddLeadForm onAdd={addLead} />
     <LeadList
  leads={leads}
  search={search}
  filter={filter}
  onEdit={editLead}
  onDelete={deleteLead}
/>
    </div>
  )
}

export default App