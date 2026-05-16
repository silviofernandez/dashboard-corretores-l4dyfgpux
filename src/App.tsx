import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/auth/Login'
import Dashboard from './pages/Dashboard'
import { AdminLayout } from './pages/admin/AdminLayout'
import AdminDashboard from './pages/admin/Dashboard'
import AdminBrokers from './pages/admin/Brokers'
import AdminTeams from './pages/admin/Teams'
import AdminReports from './pages/admin/Reports'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="corretores" element={<AdminBrokers />} />
          <Route path="equipes" element={<AdminTeams />} />
          <Route path="relatorios" element={<AdminReports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
