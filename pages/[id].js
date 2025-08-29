import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function TodoDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/todos/${id}`)
      .then(res => res.json())
      .then(todo => {
        setTitle(todo.title);
        setCompleted(todo.completed);
      });
  }, [id]);

  const handleUpdate = async () => {
    await fetch(`/api/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, completed }),
    });
    router.push("/");
  };

  const handleDelete = async () => {
    await fetch(`/api/todos/${id}`, { method: "DELETE" });
    router.push("/");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Edit Todo</h2>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="border p-2 w-full mb-4 rounded" />
      <label className="flex items-center mb-4">
        <input type="checkbox" checked={completed} onChange={() => setCompleted(!completed)} className="mr-2" />
        Completed
      </label>
      <div className="flex space-x-4">
        <button onClick={handleUpdate} className="bg-green-600 text-white px-4 py-2 rounded">Update</button>
        <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded">Delete</button>
      </div>
    </div>
  );
}
