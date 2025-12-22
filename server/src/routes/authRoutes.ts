import express from "express";
import * as authController from "../controllers/authController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router();

// Public routes (no authentication required)
router.post("/register", authController.register);
router.post("/login", authController.login);

// Protected routes (authentication required)
router.post("/logout", authMiddleware, authController.logout);
router.get("/me", authMiddleware, authController.getMe)

export default router;