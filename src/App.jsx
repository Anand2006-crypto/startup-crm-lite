import { useEffect } from "react"
import Navbar from "./components/common/Navbar"
import Dashboard from "./components/dashboard/Dashboard"
import LeadList from "./components/leads/LeadList"
import AddLeadForm from "./components/leads/AddLeadForm"
import LeadDetails from "./components/leads/LeadDetails"
import Analytics from "./components/analytics/Analytics"
import Sidebar from "./components/common/Sidebar"
import Login from "./pages/Login";
import { useState } from "react";
import Profile from "./pages/Profile";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

import {
  getLeads,
  addLead as addLeadAPI,
  updateLead as updateLeadAPI,
  deleteLead as deleteLeadAPI,
} from "./api/leadApi";

function App() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")
  const [darkMode, setDarkMode] = useState(true)
  const [page, setPage] = useState("leads")
  
  const [showForm, setShowForm] = useState(false)
  const [selectedLead, setSelectedLead] = useState(null)
 const [isLoggedIn, setIsLoggedIn] = useState(
  localStorage.getItem("isLoggedIn") === "true"
);
 const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  setIsLoggedIn(false);
};

  async function addLead(newLead) {
  try {
   const { data } = await addLeadAPI(newLead);
    setLeads((prev) => [...prev, data]);
  } catch (error) {
    console.error(error);
  }
}
  async function editLead(id, newStatus) {
  try {
    const lead = leads.find((l) => l._id === id);

    const { data } = await updateLeadAPI(id, {
      ...lead,
      status: newStatus,
    });

    setLeads((prev) =>
      prev.map((lead) => (lead._id === id ? data : lead))
    );
  } catch (error) {
    console.error(error);
  }
}
async function deleteLead(id) {
  try {
    await deleteLeadAPI(id);

    setLeads((prev) => prev.filter((lead) => lead._id !== id));
  } catch (error) {
    console.error(error);
  }
}
useEffect(() => {
  loadLeads();
}, []);

async function loadLeads() {
  try {
    const { data } = await getLeads();

    console.log("API Response:", data);

    setLeads(data);

    console.log("Loaded successfully");
  } catch (error) {
    console.error(error);
  }
}

if (!isLoggedIn) {
 return <Login setIsLoggedIn={setIsLoggedIn} />;
}
const exportToExcel = () => {
  const worksheet = XLSX.utils.json_to_sheet(leads);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Leads"
  );

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const file = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
  });

  saveAs(file, "leads.xlsx");
};

 return (
  <div style={{ display: "flex" }}>
   <Sidebar
  setPage={setPage}
  page={page}
  darkMode={darkMode}
  setDarkMode={setDarkMode}
  handleLogout={handleLogout}
/>

   <div
  style={{
    flex: 1,
   background: darkMode ? "#0f172a" : "#f3f4f6",
color: darkMode ? "white" : "#111827",
    minHeight: "100vh",
    padding: "30px"
  }}
>
     <Navbar
  page={page}
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>

{page === "dashboard" && <Dashboard
  leads={leads}
  darkMode={darkMode}
/>}

{page === "leads" && (
  <>
  <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
   margin: "0 20px 20px 20px"
  }}
>
 <div
  style={{
    marginTop: "40px",
    marginBottom: "40px"
  }}
>
  <h1
    style={{
      margin: 0,
      fontSize: "50px",
      fontWeight: "700",
      color: darkMode ? "white" : "#111827",
      lineHeight: "1.1"
    }}
  >
    Lead Management
  </h1>

  <p
    style={{
      marginTop: "12px",
      color: darkMode ? "#d1d5db" : "#6b7280",
      fontSize: "16px"
    }}
  >
    Manage and track all your sales leads
  </p>
</div>
  <div style={{ marginTop: "60px" }}></div>

  <button
  onClick={() => setShowForm(true)}
  style={{
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    cursor: "pointer"
  }}
>
  + Add Lead
</button>
</div>
   

    <div
  style={{
    margin: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }}
>
  <input
    type="text"
    placeholder="🔍 Search by name, company, or email..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{
      padding: "14px 18px",
      width: "420px",
      borderRadius: "12px",
      border: "1px solid #d1d5db",
      outline: "none",
      fontSize: "15px",
      background: darkMode ? "#1f2937" : "white",
    }}
  />

  <button
    onClick={exportToExcel}
    style={{
      background: "#22c55e",
      color: "white",
      border: "none",
      padding: "12px 18px",
      borderRadius: "10px",
      cursor: "pointer",
    }}
  >
    📊 Export Excel
  </button>
</div>
    <div
  style={{
    display: "flex",
    gap: "12px",
    margin: "20px",
    flexWrap: "wrap"
  }}
>
  {[
  "All",
  "New",
  "Contacted",
  "Qualified",
  "Proposal",
  "Won",
  "Lost"
].map((item) => (
    <button
      key={item}
      onClick={() => setFilter(item)}
      style={{
        padding: "10px 18px",
        borderRadius: "999px",
        border: "1px solid #e5e7eb",
        background: filter === item ? "#2563eb" : "white",
        color: filter === item ? "white" : "#6b7280",
        cursor: "pointer"
      }}
    >
      {item}
    </button>
  ))}
</div>

    
      

{showForm && (
  <AddLeadForm
    darkMode={darkMode}
    onClose={() => setShowForm(false)}
    onAdd={addLead}
  />
)}
   <LeadList
  leads={leads}
  search={search}
  filter={filter}
  onEdit={editLead}
  onDelete={deleteLead}
  onView={setSelectedLead}
  darkMode={darkMode}
/>
{selectedLead && (
  <LeadDetails
    lead={selectedLead}
    onClose={() => setSelectedLead(null)}
    darkMode={darkMode}
  />
)}
  </>
)}

{page === "analytics" && <Analytics
  leads={leads}
  darkMode={darkMode}
/>}
{page === "profile" && (
  <Profile darkMode={darkMode} />
)}
    </div>
  </div>
);
}

export default App