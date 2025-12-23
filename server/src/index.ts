import express from "express";
import dotenv from "dotenv"; // loading env var
import cors from "cors";
import supabase from "./config/supabase.js";
import authRoutes from "./routes/authRoutes/authRoutes.js";
import tasksRoutes from "./routes/tasksRoutes/tasksRoutes.js"

dotenv.config(); // reading from env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// app.use(cors());
app.use(express.json());

/* Routes */
app.use("/api/auth", authRoutes);
app.use("/api/tasks", tasksRoutes)

/* Testing Routes */
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
