import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Blogs() {
  return (
    <div>
      <Navbar />
      <main className="container py-16">
        <h1 className="text-3xl font-bold">Blogs</h1>
        <p className="mt-4 text-gray-700">Articles, tips and insights about video marketing and editing.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-xl shadow">Blog post 1</div>
          <div className="p-6 bg-white rounded-xl shadow">Blog post 2</div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
