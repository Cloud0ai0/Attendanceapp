import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Landing from './pages/Landing.jsx'
import Login from './pages/Login.jsx'
import TeacherDashboard from './pages/TeacherDashboard.jsx'
import StudentDashboard from './pages/StudentDashboard.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
