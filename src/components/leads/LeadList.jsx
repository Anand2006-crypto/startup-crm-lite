import LeadCard from "./LeadCard"

function LeadList({ leads, search, filter, onEdit, onDelete }) {
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = lead.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesFilter =
      filter === "All" || lead.status === filter

    return matchesSearch && matchesFilter
  })

  return (
    <div>
      {filteredLeads.map((lead) => (
        <LeadCard
          key={lead.id}
          id={lead.id}
          name={lead.name}
          email={lead.email}
          status={lead.status}
          onEdit={onEdit}
          onDelete={() => onDelete(lead.id)}
        />
      ))}
    </div>
  )
}

export default LeadList