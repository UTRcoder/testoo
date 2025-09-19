import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Editor from '../components/Editor'

export default function EditorPage() {
  return (
    <div>
      <Navbar />
      <main className="container py-16">
        <h1 className="text-3xl font-bold">Editor</h1>
        <p className="mt-2 text-gray-700">Upload images or videos and preview them live (client-side).</p>
        <div className="mt-6 max-w-2xl">
          <Editor />
        </div>
      </main>
      <Footer />
    </div>
  )
}
