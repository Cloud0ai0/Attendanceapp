import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'

export default function Login() {
  const [role, setRole] = useState('student')
  const navigate = useNavigate()

  const handleContinue = (e) => {
    e.preventDefault()
    if (role === 'teacher') navigate('/teacher')
    else navigate('/student')
  }

  return (
    <section className="mx-auto max-w-2xl px-4 py-10">
      <Card title="Login">
        <form className="space-y-4" onSubmit={handleContinue}>
          <div className="flex gap-3">
            <label className={`cursor-pointer px-4 py-2 rounded-md border ${role==='teacher'?'border-indigo-500 bg-indigo-50':'border-gray-200'}`}>
              <input type="radio" name="role" value="teacher" className="hidden" checked={role==='teacher'} onChange={() => setRole('teacher')} />
              Teacher
            </label>
            <label className={`cursor-pointer px-4 py-2 rounded-md border ${role==='student'?'border-indigo-500 bg-indigo-50':'border-gray-200'}`}>
              <input type="radio" name="role" value="student" className="hidden" checked={role==='student'} onChange={() => setRole('student')} />
              Student
            </label>
          </div>
          <div className="grid gap-3">
            <input className="border rounded-md px-3 py-2" placeholder="Email" />
            <input className="border rounded-md px-3 py-2" placeholder="Password" type="password" />
          </div>
          <div className="flex justify-end">
            <Button type="submit">Continue</Button>
          </div>
        </form>
      </Card>
    </section>
  )
}