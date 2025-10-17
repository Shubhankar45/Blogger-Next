"use client"

import React from 'react'
import NavBar from '@/Components/NavBar'
import Footer from '@/Components/Footer'
import Link from 'next/link'


const About = () => {
    return (
        <>
            {/* Background */}
            <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
            </div>
            
            <div className={`min-h-screen flex flex-col`}>
                <NavBar/>
                
                <div className="flex-1 px-4 pt-8 pb-24">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-5xl font-bold text-gray-800 mb-4">
                                About Blogger
                            </h1>
                            <p className="text-xl text-gray-600">
                                A modern blogging platform built with cutting-edge technologies
                            </p>
                        </div>

                        {/* Main Content */}
                        <div className="bg-white rounded-xl shadow-2xl p-8 mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                What is Blogger?
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                Blogger is a full-stack web application that allows users to create, read, update, 
                                and delete blog posts. Built as a learning project and portfolio piece, it demonstrates 
                                modern web development practices and technologies.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">
                                Features
                            </h3>
                            <div className="space-y-3 mb-6">
                                <div className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-gray-700"><span className="font-semibold">Create Blogs:</span> Write and publish your thoughts with an intuitive form interface</p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-gray-700"><span className="font-semibold">View Blogs:</span> Browse all published blogs in a clean, card-based layout</p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-gray-700"><span className="font-semibold">Edit Blogs:</span> Update your existing blog posts with ease</p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-gray-700"><span className="font-semibold">Delete Blogs:</span> Remove unwanted posts with confirmation</p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-gray-700"><span className="font-semibold">Responsive Design:</span> Works seamlessly on desktop, tablet, and mobile devices</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl shadow-2xl p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">
                                Start Writing Today
                            </h2>
                            <p className="text-lg mb-6 opacity-90">
                                Create your first blog post and share your ideas with the world
                            </p>
                            <Link href="/create-blog">
                                <button className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                                    Create New Blog
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        </>
    )
}

export default About
