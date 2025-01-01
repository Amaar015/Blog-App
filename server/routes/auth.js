import express from "express";
import { Login, Logout, Register } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", Register);
router.get("/login", Login);
router.get("/logout", Logout);

export default router;
