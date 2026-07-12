import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Get all leads
export const getLeads = () => API.get("/leads");

// Add lead
export const addLead = (lead) => API.post("/leads", lead);

// Update lead
export const updateLead = (id, lead) => API.put(`/leads/${id}`, lead);

// Delete lead
export const deleteLead = (id) => API.delete(`/leads/${id}`);

