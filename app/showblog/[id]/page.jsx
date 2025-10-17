"use client";

import NavBar from "@/Components/NavBar";
import React, { useEffect, useState ,use} from "react";
import axios from "axios";

const ShowBlog = ({ params }) => {
  const { id } = use(params);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/${id}`);

        if (response.data.success) {
          setBlog(response.data.data);
        } else {
          setError("Blog not found");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div>
        <NavBar />
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-lg text-gray-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div>
        <NavBar />
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-lg text-red-600">{error || "Blog not found"}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      {/* Background */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white 
          bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),
          linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
          bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 
            bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <article className="bg-white rounded-2xl shadow-xl p-8">
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
            <p className="text-purple-600 font-medium">By {blog.author}</p>
            <span>•</span>
            <p>{new Date(blog.createdAt).toLocaleDateString()}</p>
            {blog.category && (
              <>
                <span>•</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                  {blog.category}
                </span>
              </>
            )}
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
              {blog.content}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ShowBlog;
