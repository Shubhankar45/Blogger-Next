"use client";

import React, { useState } from "react";
import { Montserrat } from "next/font/google";
import axios from "axios";
import NavBar from "@/Components/NavBar.jsx";
import Footer from "@/Components/Footer";

// Use Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Blog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBlog = async (e) => {
    e.preventDefault();

    if (!title || !content || !author || !category) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("/api", {
        title,
        content,
        author,
        category,
      });

      if (response.data.success) {
        alert("✅ Blog created successfully!");
        setTitle("");
        setContent("");
        setAuthor("");
        setCategory("");
      }
    } catch (error) {
      console.error("Error occurred while saving", error);
      alert("❌ Failed to create blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
          <div className={`h-screen flex flex-col ${montserrat.className}`}>
            <NavBar />

            {/* Form */}
            <div className="flex justify-center px-4 pt-4">
              <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-xl">
                <h1 className="text-xl font-bold text-center text-gray-800 mb-5">
                  Create New Blog
                </h1>

                <form onSubmit={handleBlog} className="space-y-4">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Title
                    </label>
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      type="text"
                      placeholder="Enter your title..."
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg 
                                 focus:outline-none focus:ring-2 focus:ring-purple-500 
                                 transition-all placeholder-gray-400"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Content
                    </label>
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Enter the content..."
                      rows="5"
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg 
                                 focus:outline-none focus:ring-2 focus:ring-purple-500 
                                 transition-all placeholder-gray-400 resize-none"
                    />
                  </div>

                  {/* Author */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Author
                    </label>
                    <input
                      type="text"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder="Enter author name"
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg 
                                 focus:outline-none focus:ring-2 focus:ring-purple-500 
                                 transition-all placeholder-gray-400"
                    />
                  </div>

                  {/* Category Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg 
                                 focus:outline-none focus:ring-2 focus:ring-purple-500 
                                 transition-all placeholder-gray-400 bg-white"
                    >
                      <option value="">Select a category</option>
                      <option value="Technology">Technology</option>
                      <option value="Lifestyle">Lifestyle</option>
                      <option value="Education">Education</option>
                      <option value="Travel">Travel</option>
                      <option value="Health">Health</option>
                      <option value="Finance">Finance</option>
                      <option value="Entertainment">Entertainment</option>
                    </select>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-purple-600 text-white font-semibold py-2.5 rounded-lg
                               hover:bg-purple-700 active:scale-95 disabled:bg-gray-400
                               transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {loading ? "Creating..." : "Create Blog"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
