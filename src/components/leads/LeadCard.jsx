function LeadCard({ id, name, email, status, onDelete, onEdit }) {
  function handleEdit() {
    const newStatus = prompt("Enter new status:", status)

    if (newStatus) {
      onEdit(id, newStatus)
    }
  }

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "20px",
        borderRadius: "10px",
        background: "white",
color: "black"
       }}
    >
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Status: {status}</p>

      <button onClick={handleEdit} style={{ marginRight: "10px" }}>
        Edit
      </button>

      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default LeadCard