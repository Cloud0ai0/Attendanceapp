import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'

export default function Landing() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">QR Attendance for Classes</h1>
          <p className="text-gray-600 mt-3">
            Teachers generate a class-specific QR. Students scan to mark attendance.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/login">
              <Button>Get Started</Button>
            </Link>
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <Button variant="secondary">Learn more</Button>
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg border p-6 shadow-sm">
          <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center">
            <span className="text-gray-500">QR preview placeholder</span>
          </div>
          <p className="text-sm text-gray-500 mt-3">Real QR generation and scanning will come next.</p>
        </div>
      </div>
    </section>
  )
}