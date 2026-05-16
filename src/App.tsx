import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import { AdminLayout } from './pages/admin/AdminLayout'
import AdminDashboard from './pages/admin/Dashboard'
import AdminBrokers from './pages/admin/Brokers'
import AdminReports from './pages/admin/Reports'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="corretores" element={<AdminBrokers />} />
          <Route path="relatorios" element={<AdminReports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
