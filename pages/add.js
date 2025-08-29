import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const handleAdd = async () => {
    if (!title.trim()) return;
    await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    router.push("/");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      {/* <Link href="/" className="text-600 mb-4">⬅ Back to List</Link> */}
      <h2 className="text-xl font-semibold mb-4">Add New Todo</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 w-full mb-4 rounded" />
      <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">Add Todo</button>
    </div>
  );
}
