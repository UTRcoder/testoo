import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16" style={{background: 'linear-gradient(135deg, rgba(37,99,235,0.04), rgba(99,102,241,0.03))'}}>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="text-sm font-semibold bg-primary-100 text-primary-700 px-3 py-1 rounded">15+ Best Award</div>
            <div className="text-sm font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded">523+ Project Done</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">WELCOME TO GLOCAL EDIT<br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700">ULTIMATE VIDEO EDITING</span></h1>
          <p className="mt-6 text-gray-700 max-w-xl">Make better, more compelling business videos and save a ton of time. Hire our professional video editors at a flat monthly rate. GET. SET. EDIT!</p>
          <div className="mt-6 flex gap-4 items-center">
            <Link href="/editor"><a className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-lg shadow">GET STARTED</a></Link>
            <a href="#services" className="text-sm text-gray-600">GLOCAL EDIT</a>
          </div>
        </div>

        <div className="rounded-2xl shadow-lg overflow-hidden p-6 bg-white">
          <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-50 rounded-md flex items-center justify-center">
            <div className="text-gray-300 text-center">
              <div className="text-lg font-medium">Recent Work</div>
              <div className="text-sm mt-2">Engage your target audience and build your brand with killer video content.</div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="h-20 bg-gray-100 rounded-md"></div>
            <div className="h-20 bg-gray-100 rounded-md"></div>
            <div className="h-20 bg-gray-100 rounded-md"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
