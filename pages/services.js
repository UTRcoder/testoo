import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <div>
      <Navbar />
      <main className="container py-16">
        <h1 className="text-3xl font-bold">Services</h1>
        <p className="mt-4 text-gray-700">Our video editing services include reel editing, ultimate video editing, strategy, and more.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="font-semibold">REEL EDITING MADE REAL</h4>
            <p className="text-sm text-gray-600 mt-2">Trending reels and short-form content creation.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="font-semibold">PRO, ULTIMATE VIDEO EDITING</h4>
            <p className="text-sm text-gray-600 mt-2">Personalized video editing with revisions.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="font-semibold">VIDEO STRATEGY</h4>
            <p className="text-sm text-gray-600 mt-2">Creative direction & consultation.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
