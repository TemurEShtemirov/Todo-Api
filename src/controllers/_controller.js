import { TodoModel } from "../model/Todo.js";

export const GetAllTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find();

    res.status(200).json({
      success: true,
      todo: todos,
      message: "All Todos found successfully",
    });
  } catch (err) {
    res.status(500).json({
      succes: false,
      error: err.message,
      message: "Bad Request",
    });
  }
};

export const GetTodoById = async (req, res) => {
  const todoId = req.params.id;

  try {
    const todo = await TodoModel.findById(todoId);

    if (!todo) {
      return res.status(404).json({
        success: false,
        todo: null,
        message: "Todo is not found",
      });
    }

    res.status(200).json({
      succes: true,
      todo: todo,
      message: `Tod Found By Id: ${todo} is found `,
    });
  } catch (err) {
    res.status(500).json({
      succes: false,
      error: err.message,
      message: "Bad Request",
    });
  }
};

export const CreateTodo = async (req, res) => {
  const { title, description, isFinished } = req.body;

  try {
    const newTodo = await TodoModel.create({
      title,
      description,
      isFinished,
    });

    res.status(201).json({
      success: true,
      todo: newTodo,
      message: "New Todo created successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Bad Request",
    });
  }
};
