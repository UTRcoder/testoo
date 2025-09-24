export default function Footer() {
  return (
    <footer className="mt-12 border-t">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-">
            <img src="icgs.png" alt="ICGS Logo" className="w-full h-full object-fit " />
          </div>
          <div>
            <div className="font-semibold">International Correction & Graphical Solution</div>
            <div className="text-sm text-gray-500">© {new Date().getFullYear()} All Right Reserved.</div>
          </div>
        </div>
        <div className="text-sm text-gray-600">Impact the world and scale your business with viral videos.</div>
      </div>
    </footer>
  )
}
