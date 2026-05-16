/* Main App Component - Handles routing (using react-router-dom), query client and other providers - use this file to add all routes */
import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'
import { BrokerLayout } from './components/broker/BrokerLayout'
import { AdminLayout } from './pages/admin/AdminLayout'

const Login = lazy(() => import('./pages/auth/Login'))
const BrokerDashboard = lazy(() => import('./pages/broker/Dashboard'))
const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'))
const AdminBrokers = lazy(() => import('./pages/admin/Brokers'))
const AdminIntegrations = lazy(() => import('./pages/admin/Integrations'))
const AdminAlerts = lazy(() => import('./pages/admin/Alerts'))
const AdminReports = lazy(() => import('./pages/admin/Reports'))
const AdminSettings = lazy(() => import('./pages/admin/Settings'))
const AdminEngine = lazy(() => import('./pages/admin/Engine'))
const AdminGamification = lazy(() => import('./pages/admin/Gamification'))
const BrokerGamification = lazy(() => import('./pages/broker/Gamification'))

// ONLY IMPORT AND RENDER WORKING PAGES, NEVER ADD PLACEHOLDER COMPONENTS OR PAGES IN THIS FILE
// AVOID REMOVING ANY CONTEXT PROVIDERS FROM THIS FILE (e.g. TooltipProvider, Toaster, Sonner)

const PageLoader = () => (
  <div
    className="flex h-[50vh] items-center justify-center animate-pulse text-slate-400 font-bold"
    role="status"
    aria-label="Carregando"
  >
    Carregando...
  </div>
)

const App = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch((err) => {
          console.error('ServiceWorker registration failed: ', err)
        })
      })
    }
  }, [])

  return (
    <BrowserRouter future={{ v7_startTransition: false, v7_relativeSplatPath: false }}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
            </Route>

            {/* Admin App Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="corretores" element={<AdminBrokers />} />
              <Route path="integracoes" element={<AdminIntegrations />} />
              <Route path="alertas" element={<AdminAlerts />} />
              <Route path="relatorios" element={<AdminReports />} />
              <Route path="configuracoes" element={<AdminSettings />} />
              <Route path="motor" element={<AdminEngine />} />
              <Route path="gamificacao" element={<AdminGamification />} />
            </Route>

            {/* Broker App Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<BrokerLayout />}>
              <Route index element={<BrokerDashboard />} />
              <Route
                path="historico"
                element={
                  <div className="flex h-[50vh] items-center justify-center text-slate-500 font-bold text-xl animate-fade-in-up">
                    Histórico em desenvolvimento...
                  </div>
                }
              />
              <Route
                path="metas"
                element={
                  <div className="flex h-[50vh] items-center justify-center text-slate-500 font-bold text-xl animate-fade-in-up">
                    Metas em desenvolvimento...
                  </div>
                }
              />
              <Route path="gamificacao" element={<BrokerGamification />} />
              <Route
                path="configuracoes"
                element={
                  <div className="flex h-[50vh] items-center justify-center text-slate-500 font-bold text-xl animate-fade-in-up">
                    Configurações em desenvolvimento...
                  </div>
                }
              />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </TooltipProvider>
    </BrowserRouter>
  )
}

export default App
