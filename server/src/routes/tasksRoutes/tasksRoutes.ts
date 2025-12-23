import express from "express";
import * as tasksController from "../../controllers/tasksController/tasksController";
import authMiddleware from "../../middleware/authMiddleware";

const router = express.Router();

// All routes protected - require authentication.
router.use(authMiddleware);


// Get all tasks
router.get("/", tasksController.getTasks);

// Get single task
router.get("/:id", tasksController.getTaskById);

// Create task
router.post("/", tasksController.createTask);

// Update task
router.put("/:id", tasksController.updateTask);

// Delete task
router.delete("/:id", tasksController.deleteTask);

export default router;
