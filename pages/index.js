import Link from "next/link";
import TodoItem from "../components/TodoItem";

export async function getServerSideProps({ req }) {
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` // Vercel sets this automatically
    : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/todos`);
  const todos = await res.json();

  return { props: { todos } };
}


export default function HomePage({ todos }) {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <Link href="/add" className="text-blue-600 underline mb-4 inline-block">Add New Todo</Link>

      <ul className="space-y-3">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </main>
  );
}
