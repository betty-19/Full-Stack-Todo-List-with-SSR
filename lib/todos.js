let todos = [
  { id: 1, title: "Learn Next.js", completed: false },
  { id: 2, title: "Build a todo app", completed: false },
];

export function getTodos() {
  return todos;
}

export function getTodoById(id) {
  return todos.find(t => t.id === id);
}

export function addTodo(todo) {
  todos.push(todo);
  return todo;
}

export function updateTodo(id, data) {
  const todo = todos.find(t => t.id === id);
  if (!todo) return null;
  Object.assign(todo, data);
  return todo;
}

export function deleteTodo(id) {
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) return null;
  return todos.splice(index, 1)[0];
}
