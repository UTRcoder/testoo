export default function AboutSection() {
  return (
    <section className="py-12">
      <div className="container grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold">Picture Perfect<br/><span className="text-primary-700">WE ARE VIDEO MAESTROS.</span></h2>
          <p className="mt-4 text-gray-700">We create video masterpieces. You do what you do best – grow your business; we’ll do ours – edit amazing videos!</p>
          <div className="mt-6">
            <a href="/contact" className="px-5 py-3 bg-primary-500 text-white rounded-lg">Impact the world</a>
          </div>
        </div>
        <div className="space-y-4">
          <div className="p-6 bg-gray-50 rounded-xl shadow">Impact the world and scale your business with viral videos. We handle everything – corporate, product, sales, or behind-the-scenes videos.</div>
          <div className="p-6 bg-gray-50 rounded-xl shadow">Become a part of a creative and reputed video editor’s team.</div>
        </div>
      </div>
    </section>
  )
}
