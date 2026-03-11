const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);

    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().lean();

    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id).lean();

    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);

    res.json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};