import { NextResponse } from "next/server";
import Blog from "@/lib/models/blogModel.js";
import {ConnectDB} from "@/lib/config/db.js"
export async function GET(request, { params }) {
    try {
        await ConnectDB()
        const {id} =await params
        const blog = await Blog.findById(id)
        if (!id) { NextResponse.json({ success: false, message: "blog does not exists" }) }
        return NextResponse.json({ success: true, message: "Successful", data: blog })
    } catch (error) {
           console.error("Error occured ",error)
           return NextResponse.json({ success: false, message: "Unuccessful"})
    }
}

export async function PUT(request,{params}) {
try {
    await ConnectDB()
    const {id}=await params
    const body=await request.json()
    const {title,content,author,category}=body
    if (!title||!content||!author||!category) { NextResponse.json({ success: false, message: "blog does not exists" }) }
    const updatedBlog=await Blog.findByIdAndUpdate(id,{title,content,author,category},{new:true,runValidators:true})
    return NextResponse.json({success:true,message:"Updated Successfully",data:updatedBlog})
} catch (error) {
    console.error("Error occured ",error)
           return NextResponse.json({ success: false, message: "Update Unuccessful"})
}
}

export async function DELETE(request,{params}) {
try {
    await ConnectDB()
    const {id}=await params
    const deleteBlog=await Blog.findByIdAndDelete(id)
    return NextResponse.json({success:true,message:"Deleted Successfully",data:deleteBlog})
} catch (error) {
    console.error("Error occured ",error)
           return NextResponse.json({ success: false, message: "Delete Unuccessful"})
}
}