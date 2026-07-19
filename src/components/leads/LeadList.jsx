import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { getTheme, getStatusStyle } from "../../theme/tokens";

function LeadList({
  leads,
  search,
  filter,
  onEdit,
  onDelete,
  onView,
  darkMode
}) {
  const t = getTheme(darkMode)

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
        background: t.surfaceElevated,
        borderRadius: "16px",
        boxShadow: t.shadow,
        border: `1px solid ${t.border}`
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
              background: t.tableHeaderBg,
              color: t.textMuted,
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
  {filteredLeads.length === 0 ? (
    <tr>
      <td
        colSpan="8"
        style={{
          textAlign: "center",
          padding: "60px",
          color: t.textMuted,
        }}
      >
        <h1>👥</h1>

        <h2>No leads found</h2>

        <p>Click "Add Lead" to create your first lead.</p>
      </td>
    </tr>
  ) : (
    filteredLeads.map((lead) => (
            <tr
              key={lead._id}
              style={{
                borderTop: `1px solid ${t.tableRowBorder}`
              }}
            >
              <td style={{ padding: "16px", color: t.text, fontWeight: "500" }}>
                {lead.name}
              </td>

              <td style={{ padding: "16px", color: t.textMuted }}>
                {lead.company}
              </td>

              <td style={{ padding: "16px", color: t.textMuted }}>
                {lead.phone}
              </td>

              <td style={{ padding: "16px", color: t.textMuted }}>
                {lead.email}
              </td>

              <td style={{ padding: "16px", color: t.textMuted }}>
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
      ...getStatusStyle(lead.status, darkMode)
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

              <td style={{ padding: "16px", color: t.textMuted }}>
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
    background: t.accent,
    color: t.textInverse,
    padding: "6px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    marginRight: "8px",
    fontWeight: "600",
    fontSize: "13px",
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
                    fontSize: "20px"
                  }}
                >
                  🗑️
                </button>
              </td>
            </tr>
                   ))
        )}
      </tbody>
      </table>
    </div>
  )
}

export default LeadList
