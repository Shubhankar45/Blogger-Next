import React from 'react'
import { assets } from '@/Assets/assets.js'
import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
  return (
    <div className="w-full px-8 py-4 flex justify-between items-center sticky top-0 backdrop-blur-md z-50 ">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={assets.logo}
            width={120}
            height={120}
            alt="Logo"
            priority
            className="cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </Link>
      </div>

      {/* Nav Links */}
      <nav className="flex items-center gap-8">
        <Link 
          href="/blogs" 
          className="text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors duration-300"
        >
          Blogs
        </Link>
        <Link 
          href="/about" 
          className="text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors duration-300"
        >
          About
        </Link>
        <Link 
          href="/contact" 
          className="text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors duration-300"
        >
          Contact
        </Link>
      </nav>
    </div>
  )
}

export default NavBar
