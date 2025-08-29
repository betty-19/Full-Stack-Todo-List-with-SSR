import { getTodoById, updateTodo, deleteTodo } from '../../../lib/todos';

export default function handler(req, res) {
  const id = parseInt(req.query.id);

  if (req.method === 'PATCH') {
    const updated = updateTodo(id, req.body);
    if (!updated) return res.status(404).json({ error: "Todo not found" });
    return res.status(200).json(updated);
  } else if (req.method === 'DELETE') {
    const deleted = deleteTodo(id);
    if (!deleted) return res.status(404).json({ error: "Todo not found" });
    return res.status(200).json(deleted);
  } else if (req.method === 'GET') {
    const todo = getTodoById(id);
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    return res.status(200).json(todo);
  } else {
    res.setHeader('Allow', ['GET', 'PATCH', 'DELETE']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
