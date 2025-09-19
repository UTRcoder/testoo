import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main className="container py-16">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4 text-gray-700">Get in touch with us for a free consultation.</p>
        <form className="mt-6 max-w-xl space-y-4">
          <input className="w-full p-3 border rounded" placeholder="Your name" />
          <input className="w-full p-3 border rounded" placeholder="Email" />
          <textarea className="w-full p-3 border rounded" rows="5" placeholder="Message"></textarea>
          <button className="px-6 py-3 bg-primary-600 text-white rounded">Send Message</button>
        </form>
      </main>
      <Footer />
    </div>
  )
}
