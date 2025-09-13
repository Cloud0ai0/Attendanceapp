import { useState } from 'react'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'

const mockClasses = [
  { id: 'c1', name: 'Math 101' },
  { id: 'c2', name: 'Physics 202' },
  { id: 'c3', name: 'Chemistry 303' },
]

export default function TeacherDashboard() {
  const [selectedClassId, setSelectedClassId] = useState('c1')
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0,10))

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 grid gap-6">
      <h2 className="text-xl font-semibold">Teacher Dashboard</h2>
      <Card title="Select Class and Date" actions={
        <div className="flex gap-2">
          <Button onClick={() => alert('QR generation placeholder')}>
            Generate QR
          </Button>
        </div>
      }>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="grid gap-2">
            <label className="text-sm text-gray-600">Class</label>
            <select
              className="border rounded-md px-3 py-2"
              value={selectedClassId}
              onChange={(e) => setSelectedClassId(e.target.value)}
            >
              {mockClasses.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-gray-600">Date</label>
            <input
              type="date"
              className="border rounded-md px-3 py-2"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-gray-600">Day of Week</label>
            <input
              className="border rounded-md px-3 py-2 bg-gray-50"
              value={new Date(selectedDate).toLocaleDateString(undefined, { weekday: 'long' })}
              readOnly
            />
          </div>
        </div>
      </Card>
      <Card title="Today’s Sessions">
        <p className="text-sm text-gray-600">No sessions yet. Generate a QR to start attendance.</p>
      </Card>
    </section>
  )
}