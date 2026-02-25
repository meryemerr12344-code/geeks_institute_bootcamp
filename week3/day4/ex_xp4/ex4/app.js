import { TodoList } from "./todo.js";

const myTodo = new TodoList();

myTodo.addTask("Learn Node.js");
myTodo.addTask("Practice JavaScript");
myTodo.markComplete("Learn Node.js");
myTodo.listTasks();