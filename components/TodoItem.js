import Link from "next/link";

export default function TodoItem({ todo }) {
  return (
    <li className={`border p-4 rounded shadow flex justify-between items-center bg-white ${todo.completed ? 'line-through text-gray-500' : ''}`}>
      <span>{todo.title}</span>
      <div>
        <Link href={`/${todo.id}`} className="text-blue-600 hover:underline ml-4">Edit</Link>
      </div>
    </li>
  );
}
