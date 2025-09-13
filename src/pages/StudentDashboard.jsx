import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'

export default function StudentDashboard() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 grid gap-6">
      <h2 className="text-xl font-semibold">Student Dashboard</h2>
      <Card title="Scan QR to Mark Attendance" actions={
        <Button onClick={() => alert('QR scanner placeholder')}>Open Scanner</Button>
      }>
        <div className="text-sm text-gray-600">
          Your camera will be used to scan the QR shared by your teacher.
        </div>
      </Card>
      <Card title="Recent Attendance">
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li>Sample: Math 101 - 2025-09-01 - Present</li>
        </ul>
      </Card>
    </section>
  )
}