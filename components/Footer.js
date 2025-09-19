export default function Footer() {
  return (
    <footer className="mt-12 border-t">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold">G</div>
          <div>
            <div className="font-semibold">GLOCAL EDIT</div>
            <div className="text-sm text-gray-500">© {new Date().getFullYear()} All Right Reserved.</div>
          </div>
        </div>
        <div className="text-sm text-gray-600">Impact the world and scale your business with viral videos.</div>
      </div>
    </footer>
  )
}
