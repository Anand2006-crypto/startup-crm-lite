import express from "express";
import {
  getLeads,
  addLead,
  updateLead,
  deleteLead,
} from "../controllers/leadController.js";

const router = express.Router();

// GET all leads
router.get("/", getLeads);

// POST new lead
router.post("/", addLead);

// PUT update lead
router.put("/:id", updateLead);

// DELETE lead
router.delete("/:id", deleteLead);

export default router;