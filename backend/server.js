import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import leadRoutes from "./routes/leadRoutes.js";


dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://startup-crm-lite-silk.vercel.app",
  ],
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());

app.use("/api/leads", leadRoutes);
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
  });
});


app.get("/", (req, res) => {
  res.send("🚀 Startup CRM Backend is Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
