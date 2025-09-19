import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="bg-white/60 backdrop-blur sticky top-0 z-50 border-b">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold">G</div>
          <span className="font-semibold">GLOCAL EDIT</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/"><a className="hover:text-primary-700">Home</a></Link>
          <Link href="/about"><a className="hover:text-primary-700">About us</a></Link>
          <Link href="/services"><a className="hover:text-primary-700">Services</a></Link>
          <Link href="/video-gallery"><a className="hover:text-primary-700">Video Gallery</a></Link>
          <Link href="/blogs"><a className="hover:text-primary-700">Blogs</a></Link>
          <Link href="/contact"><a className="hover:text-primary-700 font-medium">Contact Us</a></Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/editor"><a className="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-lg shadow-sm text-sm">GET STARTED</a></Link>
        </div>
      </div>
    </header>
  )
}
