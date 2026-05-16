import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/auth/Login'
import Dashboard from './pages/Dashboard'
import { AdminLayout } from './pages/admin/AdminLayout'
import AdminDashboard from './pages/admin/Dashboard'
import AdminBrokers from './pages/admin/Brokers'
import AdminTeams from './pages/admin/Teams'
import AdminReports from './pages/admin/Reports'
import AdminIntegrations from './pages/admin/Integrations'
import AdminEngine from './pages/admin/Engine'
import { AuthProvider } from './providers/AppProviders'
import { ProtectedRoute } from './components/ProtectedRoute'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="corretores" element={<AdminBrokers />} />
              <Route path="equipes" element={<AdminTeams />} />
              <Route path="relatorios" element={<AdminReports />} />
              <Route path="integracoes" element={<AdminIntegrations />} />
              <Route path="motor" element={<AdminEngine />} />
              <Route
                path="alertas"
                element={
                  <div className="p-8 text-slate-500 font-medium animate-in fade-in">
                    Módulo de Alertas em breve...
                  </div>
                }
              />
              <Route
                path="configuracoes"
                element={
                  <div className="p-8 text-slate-500 font-medium animate-in fade-in">
                    Configurações do Sistema em breve...
                  </div>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
