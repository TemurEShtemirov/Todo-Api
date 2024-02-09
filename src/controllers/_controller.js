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
      message: `Todo Found By Id:'${todo._id}' is found `,
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

export const PutTodo = async (req, res) => {
  // id
  const TodoId = req.params.id;
  const { title, description, isFinished } = req.body;

  try {
    const PutTodo = await TodoModel.findByIdAndUpdate(
      TodoId,
      title,
      description,
      isFinished,
      { new: true }
    );

    if (!PutTodo) {
      return res.status(404).json({
        success: false,
        todo: null,
        message: `Todo is not found with id : ${TodoId}`,
      });
    }

    res.status(201).json({
      success: true,
      todo: PutTodo,
      message: "Todo has been edited successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Bad Request",
    });
  }
};

export const PatchTodo = async (req, res) => {
  const todoId = req.params.id;

  try {
    const todo = await TodoModel.findByIdAndUpdate(todoId, req.body, {
      new: true,
    });

    if (!todo) {
      return res.status(404).json({
        success: false,
        todo: null,
        message: `Todo is not found with id : ${todoId}`,
      });
    }

    res.status(201).json({
      success: true,
      todo: todo,
      message: "Todo has been edited successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Bad Request",
    });
  }
};
