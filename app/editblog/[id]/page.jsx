"use client";

import React, { useState, useEffect ,use} from "react";
import axios from "axios";
import NavBar from "@/Components/NavBar";
import { useRouter } from "next/navigation";
  
  const EditBlog = ({ params }) => {
  const { id } = use(params);
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setFetching(true);
        const response = await axios.get(`/api/${id}`);

        if (response.data.success) {
          const blog = response.data.data;
          setTitle(blog.title);
          setContent(blog.content);
          setAuthor(blog.author);
          setCategory(blog.category || "");
        } else {
          alert("Blog not found");
          router.push("/blogs");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        alert("Failed to load blog");
      } finally {
        setFetching(false);
      }
    };

    if (id) fetchBlog();
  }, [id, router]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!title || !content || !author) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.put(`/api/${id}`, {
        title,
        content,
        author,
        category,
      });

      if (response.data.success) {
        alert("✅ Blog updated successfully!");
        router.push("/blogs");
      } else {
        alert("❌ Failed to update blog");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("❌ An error occurred while updating");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="h-screen flex flex-col">
        <NavBar />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-lg text-gray-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Background grid */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white 
        bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),
             linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
        bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 
          bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>

      <div className="h-screen flex flex-col">
        <NavBar />

        <div className="flex justify-center px-4 pt-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-xl">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Edit Blog
            </h1>

            <form onSubmit={handleUpdate} className="space-y-4">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter blog title"
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
                  placeholder="Write your content here..."
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

              {/* Category */}
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
              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => router.push("/blogs")}
                  className="flex-1 bg-gray-500 text-white font-semibold py-2.5 rounded-lg
                             hover:bg-gray-600 transition-all duration-300"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-purple-600 text-white font-semibold py-2.5 rounded-lg
                             hover:bg-purple-700 active:scale-95 disabled:bg-gray-400
                             transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {loading ? "Updating..." : "Update Blog"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBlog;
