import { useState } from "react"

function AddLeadForm({ onAdd, onClose, darkMode }) {
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [source, setSource] = useState("")
  const [status, setStatus] = useState("")

 async function handleAdd() {
  if (!name || !company || !phone || !email || !source || !status) {
    alert("Please fill all fields");
    return;
  }

  const newLead = {
    name,
    company,
    phone,
    email,
    source,
    status,
  };

  await onAdd(newLead);

  setName("");
  setCompany("");
  setPhone("");
  setEmail("");
  setSource("");
  setStatus("");

  onClose();
}
  const inputStyle = {
    display: "block",
    width: "100%",
    marginBottom: "14px",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    boxSizing: "border-box",
    outline: "none"
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.45)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999
      }}
    >
      <div
        style={{
          width: "500px",
          padding: "25px",
          borderRadius: "18px",
          background: darkMode ? "#1f2937" : "white",
          color: darkMode ? "white" : "black",
          boxShadow: "0 12px 40px rgba(0,0,0,0.25)"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px"
          }}
        >
          <h2
            style={{
              margin: 0,
              color: darkMode ? "white" : "#111827"
            }}
          >
            Add New Lead
          </h2>

          <button
            onClick={onClose}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "22px",
              cursor: "pointer",
              color: darkMode ? "white" : "black"
            }}
          >
            ✕
          </button>
        </div>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Enter Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Enter Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
          style={inputStyle}
        >
          <option value="">Select Source</option>
          <option value="Website">Website</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Referral">Referral</option>
          <option value="Instagram">Instagram</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={inputStyle}
        >
          <option value="">Select Status</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Qualified">Qualified</option>
          <option value="Proposal">Proposal</option>
          <option value="Won">Won</option>
          <option value="Lost">Lost</option>
        </select>

        <button
          onClick={handleAdd}
          style={{
            width: "100%",
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "14px",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px"
          }}
        >
          Add Lead
        </button>
      </div>
    </div>
  )
}

export default AddLeadForm