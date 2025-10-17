"use client"
import React from "react";
import NavBar from "./NavBar";
import Link from "next/link";
import Footer from "@/Components/Footer";

const Main = () => {
  return (
    <>
      <section
        className={`w-full min-h-screen text-black flex flex-col `}
      >
        {/* Navbar */}
        <NavBar/>

        {/* Latest Blogs - Centered Content with slight top positioning */}
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4 -mt-20">
          <h2 className="text-5xl font-bold tracking-tight mb-6">
            Welcome to Blogger
          </h2>

          <p className="text-gray-800 text-lg leading-relaxed mb-10">
            Stay updated with the latest articles, stories, and insights from
            across the world of tech, creativity, and innovation.
          </p>

          {/* Create Blog Button */}
          <Link href="/create-blog">
            <button
              className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg
                         hover:bg-purple-700 hover:scale-105 active:scale-95
                         transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Create New Blog
            </button>
          </Link>
  
        </div>
      </section>
    </>
  );
};

export default Main;
