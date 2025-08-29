import { getTodos, addTodo } from '../../../lib/todos';

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(getTodos());
  } else if (req.method === 'POST') {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "Title is required" });
    const newTodo = { id: Date.now(), title, completed: false };
    addTodo(newTodo);
    return res.status(201).json(newTodo);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
