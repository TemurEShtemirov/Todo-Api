import { Router } from "express";
import {
  CreateTodo,
  GetAllTodos,
  GetTodoById,
} from "../controllers/_controller.js";

const router = Router();

router.get("/", GetAllTodos);
router.get("/:id", GetTodoById);
router.post("/", CreateTodo);

export default router;
