"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "@/Components/NavBar";
import BlogCard from "@/Components/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/");
        if (response.data.success) {
          setBlogs(response.data.data);
        }
      } catch (error) {
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Get unique categories
  const categories = ["All", ...new Set(blogs.map(b => b.category || "Other"))];

  // Filter blogs
  const filtered = category === "All" 
    ? blogs 
    : blogs.filter(b => (b.category || "Other") === category);

  if (loading) return <div><NavBar/><p className="text-center p-20">Loading...</p></div>;
  if (error) return <div><NavBar/><p className="text-center p-20 text-red-600">{error}</p></div>;

  return (
    <div>
      <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
      <NavBar />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-8">Explore Blogs</h1>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full ${
                category === cat
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700 hover:bg-purple-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(blog => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
