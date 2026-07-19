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
import { getTheme } from "./theme/tokens";

import {
  getLeads,
  addLead as addLeadAPI,
  updateLead as updateLeadAPI,
  deleteLead as deleteLeadAPI,
} from "./api/leadApi";
import {
  FiHome,
  FiUsers,
  FiBarChart2,
  FiSettings
} from "react-icons/fi";


function App() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")
  const [darkMode, setDarkMode] = useState(true)
  const [page, setPage] = useState("leads")
  useEffect(() => {
  window.scrollTo(0, 0);
}, [page]);
  
  const [showForm, setShowForm] = useState(false)
  const [selectedLead, setSelectedLead] = useState(null)
 const [isLoggedIn, setIsLoggedIn] = useState(
  localStorage.getItem("isLoggedIn") === "true"
);

  const t = getTheme(darkMode)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light")
  }, [darkMode])

 const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");

  setLeads([]);  

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
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    const { data } = await getLeads();

    const userLeads = data.filter(
      (lead) => lead.userId === currentUser?.id
    );

    setLeads(userLeads);
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
<div
  style={{
    display: "flex",
    width: "100%",
    overflowX: "hidden",
  }}
  style={{
  overflowX: "hidden",
}}
>  {window.innerWidth > 768 && (
    <Sidebar
      setPage={setPage}
      page={page}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      handleLogout={handleLogout}
    />
  )}

  

   <div
  style={{
    flex: 1,
    background: t.background,
    color: t.text,
    minHeight: "100vh",
    padding: window.innerWidth <= 768 ? "px" : "28px",
    paddingBottom: window.innerWidth <= 768 ? "90px" : "28px",
  }}
>

    <Navbar
  page={page}
  darkMode={darkMode}
  setDarkMode={setDarkMode}
  currentUser={JSON.parse(localStorage.getItem("currentUser"))}
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
 {window.innerWidth > 768 && (
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
        color: t.text,
        lineHeight: "1.1"
      }}
    >
      Lead Management
    </h1>

    <p
      style={{
        marginTop: "12px",
        color: t.textMuted,
        fontSize: "16px"
      }}
    >
      Manage and track all your sales leads
    </p>
  </div>
)}
  <div style={{ marginTop: "60px" }}></div>

  <button
  onClick={() => setShowForm(true)}
  style={{
    background: t.accent,
    color: t.textInverse,
    border: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    boxShadow: t.shadow,
  }}
>
  + Add Lead
</button>
</div>
   

    <div
  style={{
    margin: "20px",
    display: "flex",
    flexDirection: window.innerWidth <= 768 ? "column" : "row",
    alignItems: "center",
    gap: "12px",
  }}
>
  <input
    type="text"
    placeholder="🔍 Search by name, company, or email..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{
      padding: "14px 18px",
     width: window.innerWidth <= 768 ? "100%" : "420px",
boxSizing: "border-box",
      borderRadius: "12px",
      border: `1px solid ${t.border}`,
      outline: "none",
      fontSize: "15px",
      background: t.inputBg,
      color: t.text,
    }}
  />

  <button
    onClick={exportToExcel}
    style={{
      background: t.exportBtn,
      color: "#FFFFFF",
      border: "none",
      padding: "12px 18px",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "600",
      boxShadow: t.shadow,
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
        border: `1px solid ${t.filterBorder}`,
        background: filter === item ? t.filterActive : t.filterInactive,
        color: filter === item ? t.textInverse : t.filterInactiveText,
        cursor: "pointer",
        fontWeight: filter === item ? "600" : "500",
        transition: "all 0.2s ease",
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

<footer
  style={{
    textAlign: "center",
    padding: "20px",
    color: "#94a3b8",
  }}
>
  © 2026 Startup CRM Lite • Developed by Anand
</footer>
    </div>
    
    {window.innerWidth <= 768 && (
  <div
  style={{
    position: "fixed",
    bottom: "12px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "92%",
    height: "72px",
    background: t.surface,
    borderRadius: "20px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
    border: `1px solid ${t.border}`,
    zIndex: 999,
  }}
>
    <button
  onClick={() => setPage("dashboard")}
  style={{
    background: "transparent",
    border: "none",
    cursor: "pointer",
  }}
>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4px",
      color: page === "dashboard" ? "#2563eb" : "#94a3b8",
    }}
  >
    <span style={{ fontSize: "22px" }}>🏠</span>
    <span style={{ fontSize: "12px" }}>Home</span>
  </div>
</button>

<button
  onClick={() => setPage("leads")}
  style={{
    background: "transparent",
    border: "none",
    cursor: "pointer",
  }}
>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4px",
      color: page === "leads" ? "#2563eb" : "#94a3b8",
    }}
  >
    <span style={{ fontSize: "22px" }}>👥</span>
    <span style={{ fontSize: "12px" }}>Leads</span>
  </div>
</button>

<button
  onClick={() => setPage("analytics")}
  style={{
    background: "transparent",
    border: "none",
    cursor: "pointer",
  }}
>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4px",
      color: page === "analytics" ? "#2563eb" : "#94a3b8",
    }}
  >
    <span style={{ fontSize: "22px" }}>📊</span>
    <span style={{ fontSize: "12px" }}>Charts</span>
  </div>
</button>

<button
  onClick={() => setPage("profile")}
  style={{
    background: "transparent",
    border: "none",
    cursor: "pointer",
  }}
>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4px",
      color: page === "profile" ? "#2563eb" : "#94a3b8",
    }}
  >
    <span style={{ fontSize: "22px" }}>⚙️</span>
    <span style={{ fontSize: "12px" }}>Settings</span>
  </div>
</button>
  </div>
  
)}
<FiHome />
<FiUsers />
<FiBarChart2 />
<FiSettings />
    </div>

       );
}

export default App;