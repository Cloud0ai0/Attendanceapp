import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const isActive = (path) =>
    location.pathname === path ? 'text-indigo-600' : 'text-gray-600'

  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link to="/" className="font-semibold text-lg">Attendance Portal</Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/login" className={isActive('/login')}>Login</Link>
        </nav>
      </div>
    </header>
  )
}