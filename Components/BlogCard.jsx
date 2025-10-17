import React, { useEffect } from 'react'
import axios from "axios"
import Link from 'next/link'
const BlogCard = ({blog}) => {
    
    const handleDelete=async()=>{
        try {
            await axios.delete(`http://localhost:3000/api/${blog._id}`)
            alert("Blog Deleted Successfully")
            window.location.reload()

        } catch (error) {
            console.log("Error while deleting") 
        }
    }

 
      
return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-xl font-bold text-gray-800 flex-1">
          {blog.title}
        </h2>
        
        {/* Icon-only buttons on top right */}
        <div className="flex gap-2">
          <button
            
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            title="View"
          >
            <Link href={`/showblog/${blog._id}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            </Link>
          </button>
          
          <button
            
            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
            title="Edit"
          >
        <Link href={`/editblog/${blog._id}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
    </Link>
          </button>
          
          <button
            onClick={handleDelete}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Delete"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-3">
        {blog.content}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-sm text-purple-600 font-medium">
          By {blog.author}
        </p>
        <p className="text-xs text-gray-400">
          {new Date(blog.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  )
}

export default BlogCard
