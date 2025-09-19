export default function CTASection() {
  return (
    <section className="py-12">
      <div className="container rounded-2xl p-8 bg-gradient-to-r from-primary-500 to-primary-700 text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold">Hire our on-demand professional video editors</h3>
          <p className="mt-2">Impact the world and scale your business with viral videos.</p>
        </div>
        <div>
          <a href="/contact" className="px-6 py-3 bg-white text-primary-700 rounded-lg font-semibold">GET STARTED</a>
        </div>
      </div>
    </section>
  )
}
