import express from "express";
import {
  registerUser,
  authenticateUser,
  logoutUser,
  getUsers
} from "../controllers/authController";
import { getUser

} from "../controllers/userController"

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authenticateUser);
router.post("/logout", logoutUser);
router.get("/Allusers",getUsers)
router.get("/:id", getUser);
export default router;