export default function HowItWorks() {
  const steps = [
    'Share the assets/raw footage',
    "Get the 'first cut' in 1-2 business days",
    'Edit until perfect',
    'Discuss your next video'
  ];
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h3 className="text-2xl font-bold mb-6">How It Works</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow text-center">
              <div className="text-xl font-bold mb-2">Step {i+1}</div>
              <div className="text-gray-600">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
