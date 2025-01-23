"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) throw new Error("Failed to fetch data");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p className="text-center text-lg font-semibold">Loading posts...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto px-6 py-36">
      <h2 className="text-3xl font-bold text-center mb-8">This is the Home Page</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.slice(0, 12).map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg min-h-[200px] rounded-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300"
          >
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
            </div>
            <div className="p-4 flex justify-center items-center">
              <button
                onClick={() => router.push(`/posts/${post.id}`)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-all duration-300"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
