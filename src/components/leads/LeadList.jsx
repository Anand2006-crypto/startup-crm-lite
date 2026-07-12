import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
function LeadList({
  leads,
  search,
  filter,
  onEdit,
  onDelete,
  onView,
  darkMode
}) {
 const filteredLeads = leads.filter((lead) => {
  const searchText = search.toLowerCase();

  const matchesSearch =
    lead.name.toLowerCase().includes(searchText) ||
    lead.company.toLowerCase().includes(searchText) ||
    lead.email.toLowerCase().includes(searchText);

  const matchesFilter =
    filter === "All" || lead.status === filter;

  return matchesSearch && matchesFilter;
});

  function getStatusStyle(status) {
  if (status === "New")
    return { background: "#dbeafe", color: "#2563eb" }

  if (status === "Contacted")
    return { background: "#e0f2fe", color: "#0284c7" }

  if (status === "Qualified")
    return { background: "#ede9fe", color: "#7c3aed" }

  if (status === "Proposal")
    return { background: "#fef3c7", color: "#d97706" }

  if (status === "Won")
    return { background: "#dcfce7", color: "#16a34a" }

  if (status === "Lost")
    return { background: "#fee2e2", color: "#dc2626" }

  return { background: "#f3f4f6", color: "#374151" }
}
const exportToExcel = () => {
  const worksheet = XLSX.utils.json_to_sheet(leads);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Leads"
  );

  const excelBuffer = XLSX.write(
    workbook,
    {
      bookType: "xlsx",
      type: "array",
    }
  );

  const data = new Blob(
    [excelBuffer],
    {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    }
  );

  saveAs(data, "leads.xlsx");
};
  return (
    <div
      style={{
        margin: "20px",
        overflowX: "auto",
        background: "white",
        borderRadius: "16px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        border: "1px solid #e5e7eb"
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse"
        }}
      >
        <thead>
          <tr
            style={{
              background: "#f9fafb",
              color: "#6b7280",
              textAlign: "left"
            }}
          >
            <th style={{ padding: "16px" }}>Name</th>
            <th style={{ padding: "16px" }}>Company</th>
            <th style={{ padding: "16px" }}>Phone</th>
            <th style={{ padding: "16px" }}>Email</th>
            <th style={{ padding: "16px" }}>Source</th>
            <th style={{ padding: "16px" }}>Status</th>
            <th style={{ padding: "16px" }}>Date Added</th>
            <th style={{ padding: "16px" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredLeads.map((lead) => (
            <tr
              key={lead._id}
              style={{
                borderTop: "1px solid #f3f4f6"
              }}
            >
              <td style={{ padding: "16px", color: "#111827" }}>
                {lead.name}
              </td>

              <td style={{ padding: "16px", color: "#6b7280" }}>
                {lead.company}
              </td>

              <td style={{ padding: "16px", color: "#6b7280" }}>
                {lead.phone}
              </td>

              <td style={{ padding: "16px", color: "#6b7280" }}>
                {lead.email}
              </td>

              <td style={{ padding: "16px", color: "#6b7280" }}>
                {lead.source}
              </td>

              <td style={{ padding: "16px" }}>
  <select
    value={lead.status}
    onChange={(e) => onEdit(lead._id, e.target.value)}
    style={{
      padding: "8px 12px",
      borderRadius: "20px",
      border: "none",
      fontWeight: "600",
      cursor: "pointer",
      ...getStatusStyle(lead.status)
    }}
  >
    <option value="New">New</option>
    <option value="Contacted">Contacted</option>
    <option value="Qualified">Qualified</option>
    <option value="Proposal">Proposal</option>
    <option value="Won">Won</option>
    <option value="Lost">Lost</option>
  </select>
</td>

              <td style={{ padding: "16px", color: "#6b7280" }}>
                {new Date(lead.dateAdded).toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
})}
              </td>

              <td style={{ padding: "16px" }}>
               <button
  onClick={() => onView(lead)}
  style={{
    border: "none",
    background: "#2563eb",
    color: "white",
    padding: "6px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    marginRight: "8px"
  }}
>
  View
</button>
                <button
                 onClick={() => {
  if (window.confirm("Are you sure you want to delete this lead?")) {
    onDelete(lead._id);
  }
}}
                  style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    fontSize: "18px"
                  }}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LeadList