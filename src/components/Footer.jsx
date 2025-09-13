export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between text-sm text-gray-500">
        <span>&copy; {new Date().getFullYear()} Attendance Portal</span>
        <span>v0.1 UI</span>
      </div>
    </footer>
  )
}