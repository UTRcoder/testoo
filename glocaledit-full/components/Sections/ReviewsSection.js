export default function ReviewsSection() {
  return (
    <section className="py-12">
      <div className="container">
        <h3 className="text-2xl font-bold mb-4">Client Reviews</h3>
        <p className="text-gray-700 max-w-2xl">SOME OF OUR CLIENTS LOVED OUR VIDEO EDITS! Read what our customers say about us and our services.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-xl shadow">
            <p>We’ve had a really amazing response for our videos - all thanks to the Glocal Edit team. Their on-time delivery of the video series was great!</p>
            <div className="mt-4 font-semibold">Mark Williams <span className="text-gray-500 text-sm">— Digital Marketing Manager</span></div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <p>Working with Glocal Edit has been a rewarding experience. Their animation videos proved to be great marketing assets for our company.</p>
            <div className="mt-4 font-semibold">Lucas Mathew <span className="text-gray-500 text-sm">— SAP Business Partner Company Owner</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
