import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/auth/Login'
import { AdminLayout } from './pages/admin/AdminLayout'
import AdminDashboard from './pages/admin/Dashboard'
import AdminBrokers from './pages/admin/Brokers'
import AdminTeams from './pages/admin/Teams'
import AdminReports from './pages/admin/Reports'
import AdminIntegrations from './pages/admin/Integrations'
import AdminEngine from './pages/admin/Engine'
import AdminUsers from './pages/admin/Users'
import AdminTrainings from './pages/admin/Trainings'
import BrokerDashboard from './pages/broker/Dashboard'
import TvDashboard from './pages/tv/Dashboard'
import { AuthProvider } from './providers/AppProviders'
import { ProtectedRoute } from './components/ProtectedRoute'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tv-ranking" element={<TvDashboard />} />

          {/* Admin Routes */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="usuarios" element={<AdminUsers />} />
              <Route path="corretores" element={<AdminBrokers />} />
              <Route path="equipes" element={<AdminTeams />} />
              <Route path="treinamentos" element={<AdminTrainings />} />
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

          {/* Broker Routes */}
          <Route element={<ProtectedRoute allowedRoles={['broker']} />}>
            <Route path="/broker" element={<BrokerDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
