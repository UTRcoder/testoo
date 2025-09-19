import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="container py-16">
        <h1 className="text-3xl font-bold">About us</h1>
        <p className="mt-4 text-gray-700">GLOCAL EDIT: We do what comes after LIGHTS, CAMERA, ACTION! We cut, caption, and style videos and package them into stories that speak for themselves.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-xl shadow">Our mission: Create compelling business videos that convert.</div>
          <div className="p-6 bg-white rounded-xl shadow">Our team: Editors, animators, sound designers & strategists.</div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
