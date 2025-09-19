import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Gallery() {
  return (
    <div>
      <Navbar />
      <main className="container py-16">
        <h1 className="text-3xl font-bold">Video Gallery</h1>
        <p className="mt-4 text-gray-700">Take a look at some of our most innovative work.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {Array.from({length:6}).map((_,i)=> (
            <div key={i} className="bg-gray-100 h-48 rounded-md flex items-center justify-center">Video {i+1}</div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
