"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const BlogDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        if (id) {
            fetchData();
        }
    }, [id]); 

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;

    return (
        <div className='py-20 my-20'>
            <div className=" p-6 max-w-3xl bg-gray-100 py-20  mx-auto rounded-md text-center shadow-lg">
                <h1 className='text-3xl font-bold'>{data?.id}</h1>
                <h2 className="text-3xl font-bold">{data?.title}</h2>
                <p className="text-gray-600">{data?.body}</p>
            </div>
        </div>
    );
};

export default BlogDetails;
