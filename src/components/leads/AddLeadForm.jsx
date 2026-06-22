import { useState } from "react"

function AddLeadForm({ onAdd }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")

  function handleAdd() {
    if (!name || !email || !status) {
      alert("Please fill all fields")
      return
    }

    const newLead = {
      id: Date.now(),
      name,
      email,
      status
    }

    onAdd(newLead)

    setName("")
    setEmail("")
    setStatus("")
  }

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
        background: "white",
color: "black"
      }}
    >
      <h2 style={{ color: "black" }}>Add New Lead</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: "block", marginBottom: "10px", padding: "8px" }}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: "10px", padding: "8px" }}
      />

      <select
  value={status}
  onChange={(e) => setStatus(e.target.value)}
  style={{ display: "block", marginBottom: "10px", padding: "8px" }}
>
  <option value="">Select Status</option>
  <option value="Interested">Interested</option>
  <option value="Contacted">Contacted</option>
  <option value="Closed">Closed</option>
</select>

      <button onClick={handleAdd}>Add Lead</button>
    </div>
  )
}

export default AddLeadForm