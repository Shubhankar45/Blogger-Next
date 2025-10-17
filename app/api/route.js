import { NextResponse } from "next/server";
import {ConnectDB} from "@/lib/config/db.js"
import Blog from "@/lib/models/blogModel.js"
// GET /api - Fetch all blogs
export async function GET() {
  try {
    await ConnectDB();

    const blogs = await Blog.find({}).sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      message: "Blogs fetched successfully",
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    console.error("Error getting blogs:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch blogs", error: error.message },
      { status: 500 }
    );
  }
}

// POST /api - Create a new blog
export async function POST(request) {
  try {
    await ConnectDB();

    const body = await request.json();
    const { title, content, author, category } = body;

    if (!title || !content || !author || !category) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const blog = await Blog.create({ title, content, author, category });

    return NextResponse.json({
      success: true,
      message: "Blog created successfully",
      data: blog,
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create blog", error: error.message },
      { status: 500 }
    );
  }
}