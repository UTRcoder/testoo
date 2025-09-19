export default function ServicesSection() {
  const services = [
    {title: 'REEL EDITING MADE REAL', desc: 'We edit 2 reels a day so that you master social presence with short-form content creation.'},
    {title: 'PRO, ULTIMATE VIDEO EDITING', desc: 'Basic, consistent, or advanced personalised video editing – we do it all.'},
    {title: 'VIDEO STRATEGY & CONSULTING', desc: 'Creative direction and strategy to make your videos perform.'},
  ];

  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="container">
        <h3 className="text-2xl font-bold mb-6">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow hover:scale-[1.02] transition">
              <h4 className="font-semibold">{s.title}</h4>
              <p className="mt-3 text-gray-600">{s.desc}</p>
              <div className="mt-4">
                <a href="/services" className="text-primary-700 text-sm font-medium">View ALL →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
