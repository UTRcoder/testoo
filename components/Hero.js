import Link from 'next/link'
import { useEffect, useState } from "react";

export default function Hero() {
  const items = [
    { id: 1, src: "icgsWhite.png" },
    { id: 2, src: "icgs.png" },
    { id: 3, src: "icgsWhite.png" },
    { id: 2, src: "icgs.png" },
    { id: 3, src: "icgsWhite.png" },
    { id: 2, src: "icgs.png" },
  ];
  // Duplicate items to create seamless loop
  const loopItems = [...items, ...items];
  return (
    <section className="relative overflow-hidden py-16" style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.04), rgba(99,102,241,0.03))' }}>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="text-sm font-semibold bg-primary-100 text-primary-700 px-3 py-1 rounded">15+ Best Award</div>
            <div className="text-sm font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded">523+ Project Done</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">WELCOME TO iC<span className='text-blue-600'>GS</span><br /><br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700">ULTIMATE VIDEO EDITING PLATFORM</span></h1>
          <p className="mt-6 text-gray-700 max-w-xl">Make better, more compelling business videos and save a ton of time. Hire our professional video editors at a flat monthly rate. GET. SET. EDIT!</p>
          <div className="mt-6 flex gap-4 items-center">
            <Link href="/editor" className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-lg shadow">GET STARTED</Link>
            <a href="#services" className="text-sm text-gray-600">Know more ....</a>
          </div>
        </div>

        <div className="rounded-2xl shadow-lg overflow-hidden p-6 bg-white">
          <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-50 rounded-md flex items-center justify-center overflow-hidden">
            <iframe
              src="https://drive.google.com/file/d/1E3I5JtDWCyTZnPQ3FZtF7fEgmDlb7TDf/preview"
              className="w-full h-full rounded-md"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>

          <div className="overflow-hidden w-full bg-white py-4">
            <div className="flex animate-marquee space-x-4">
              {loopItems.map((item, i) => (
                <div
                  key={i}
                  className="h-20 bg-gray-100 rounded-md flex items-center justify-center"
                >
                  <img
                    src={item.src}
                    alt={`Logo ${item.id}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              ))}
            </div>

          <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 10s linear infinite;
        }
      `}</style>
          </div>
          {/* <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="h-20 bg-gray-100 rounded-md"></div>
            <div className="h-20 bg-gray-100 rounded-md"></div>
            <div className="h-20 bg-gray-100 rounded-md">
              <img src="icgsWhite.png" alt="ICGS Logo" className="bg-gradient-br bg-blue-600 to bg-blue-200 w-full h-full object-cover " />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
