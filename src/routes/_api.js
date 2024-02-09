import { Router } from "express";
import {
  CreateTodo,
  GetAllTodos,
  GetTodoById,
  PatchTodo,
  PutTodo,
} from "../controllers/_controller.js";

const router = Router();

router.get("/", GetAllTodos);
router.get("/:id", GetTodoById);
router.post("/", CreateTodo);
router.patch("/:id", PatchTodo);
router.put("/:id", PutTodo);

export default router;
