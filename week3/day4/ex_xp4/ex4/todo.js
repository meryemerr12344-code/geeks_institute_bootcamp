export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push({ task, completed: false });
  }

  markComplete(taskName) {
    const task = this.tasks.find(t => t.task === taskName);
    if (task) task.completed = true;
  }

  listTasks() {
    console.log("Todo List:");
    this.tasks.forEach((t, index) => {
      console.log(`${index + 1}. ${t.task} - ${t.completed ? "✅" : "❌"}`);
    });
  }
}