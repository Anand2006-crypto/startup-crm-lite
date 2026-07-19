import axios from "axios";

const API = axios.create({
  baseURL: "https://startup-crm-lite-production-4fcf.up.railway.app/api",
});

// Get all leads
export const getLeads = (userId) =>
  API.get(`/leads?userId=${userId}`);

// Add lead
export const addLead = (lead) => API.post("/leads", lead);

// Update lead
export const updateLead = (id, lead) => API.put(`/leads/${id}`, lead);

// Delete lead
export const deleteLead = (id) => API.delete(`/leads/${id}`);

