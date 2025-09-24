import Link from 'next/link'
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white/60 backdrop-blur sticky top-0 z-50 border-b">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="w-12 h-8 rounded-full overflow-hidden flex items-center justify-center">
            <img src="icgs.png" alt="ICGS Logo" className="w-full h-full object-fit " />
          </div>

        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-primary-700">Home</Link>
          <Link href="/about" className="hover:text-primary-700">About us</Link>
          <Link href="/services" className="hover:text-primary-700">Services</Link>
          <Link href="/video-gallery" className="hover:text-primary-700">Video Gallery</Link>
          <Link href="/blogs" className="hover:text-primary-700">Blog</Link>
          <Link href="/contact" className="hover:text-primary-700 font-medium">Contact Us</Link>
        </nav>

        <div className='flex items-center gap-3'>
          <div>

            {!isOpen && (
              <div className="md:hiddenflex items-center gap-3">
                <Link href="/editor" className="px-4 py-2 bg-gradient-to-r from-red-500 to-primary-700 text-white rounded-lg shadow-sm text-sm">GET STARTED</Link>
              </div>
            )}
          </div>
          <div className=''>
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 rounded hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="w-6 h-0.5 bg-gray-800"></span>
              <span className="w-6 h-0.5 bg-gray-800"></span>
              <span className="w-6 h-0.5 bg-gray-800"></span>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <nav className="flex flex-col p-4 gap-4 text-sm">
            <Link href="/" className="hover:text-primary-700">
              Home
            </Link>
            <Link href="/about" className="hover:text-primary-700">
              About us
            </Link>
            <Link href="/services" className="hover:text-primary-700">
              Services
            </Link>
            <Link href="/video-gallery" className="hover:text-primary-700">
              Video Gallery
            </Link>
            <Link href="/blogs" className="hover:text-primary-700">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-primary-700 font-medium">
              Contact Us
            </Link>
            <Link
              href="/editor"
              className="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-lg shadow text-center"
            >
              GET STARTED
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
