import express = require("express");
import dotenv = require("dotenv");
import cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const supabase = require("./config/supabase");

// Middleware
app.use(cors());
app.use(express.json());

// Test Supabase connection
app.get("/test-db", async (req, res) => {
  try {
    const { data, error } = await supabase.from("tasks").select("*").limit(1);
    if (error && error.code !== "PGRST116") {
      throw error;
    }
    console.info("connection succsfully");
    res.json({ message: "Database connection successful!", connected: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Database connection failed", error: error });
  }
});

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Task Manager API is running!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
