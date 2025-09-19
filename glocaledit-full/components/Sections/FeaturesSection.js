export default function FeaturesSection() {
  const features = [
    {title: 'Video Editing', desc: 'Submit unlimited orders in few clicks.'},
    {title: '1-2 Days Turnaround', desc: 'We share the first version in 1-2 days.'},
    {title: 'Dedicated Editor', desc: 'Expert team dedicated to your brand.'},
    {title: 'Hassle-free Communication', desc: 'Easy, transparent feedback loop.'},
  ];
  return (
    <section className="py-12">
      <div className="container">
        <h3 className="text-2xl font-bold mb-6">Key Features</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow">
              <h4 className="font-semibold">{f.title}</h4>
              <p className="mt-2 text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
