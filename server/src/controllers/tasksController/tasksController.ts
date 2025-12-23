import { STATUS_CODES } from "node:http";
import supabase from "../../config/supabase";
import type { Request, Response } from "express";

// Get all tasks for the authenticated user
export const getTasks = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;

    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json({ tasks: data || [] });
  } catch (error) {
    console.error("Get tasks error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get single task by id
export const getTaskById = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const { id } = req.params;

    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("id", id)
      .eq("user_id", userId)
      .single();

    if (error) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json({ task: data });
  } catch (error) {
    console.error("Get task error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Create new task
export const createTask = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const { title, description, status, priority, due_date } = req.body;

    // Validation
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }
    const { data, error } = await supabase
      .from("tasks")
      .insert([
        {
          user_id: userId,
          title,
          description: description || null,
          status: status || "todo",
          priority: priority || "medium",
          due_date: due_date || null,
        },
      ])
      .select()
      .single();
    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(201).json({ message: "Task created successfully", task: data });
  } catch (error) {
    console.error("Create task error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Update task
export const updateTask = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const { id } = req.params;
    const { title, description, status, priority, due_date } = req.body;

    // Build update object (only include provided fields)
    const updates: any = {};
    if (title !== undefined) updates.title = title;
    if (description !== undefined) updates.description = description;
    if (status !== undefined) updates.status = status;
    if (priority !== undefined) updates.priority = priority;
    if (due_date !== undefined) updates.due_date = due_date;
    const { data, error } = await supabase
      .from("tasks")
      .update(updates)
      .eq("id", id)
      .eq("user_id", userId)
      .select()
      .single();
    if (error) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json({ message: "Task updated successfully", task: data });
    
  } catch (error) {
    console.error("Update task error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete task
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const { id } = req.params;
    const { error } = await supabase
      .from("tasks")
      .delete()
      .eq("id", id)
      .eq("user_id", userId);
    if (error) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });

  } catch (error) {
    console.error("Delete task error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
