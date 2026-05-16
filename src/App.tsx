import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import { Layout } from './components/Layout'
import { BrokerLayout } from './components/broker/BrokerLayout'

const Login = lazy(() => import('./pages/auth/Login'))
const BrokerDashboard = lazy(() => import('./pages/broker/Dashboard'))
const BrokerGamification = lazy(() => import('./pages/broker/Gamification'))

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

            <Route path="/login" element={<Login />} />

            <Route path="/dashboard" element={<BrokerLayout />}>
              <Route index element={<BrokerDashboard />} />
              <Route
                path="historico"
                element={
                  <div className="flex h-[50vh] items-center justify-center text-slate-500 font-bold text-xl animate-fade-in-up text-center px-4">
                    Histórico detalhado em desenvolvimento...
                  </div>
                }
              />
              <Route
                path="metas"
                element={
                  <div className="flex h-[50vh] items-center justify-center text-slate-500 font-bold text-xl animate-fade-in-up text-center px-4">
                    Página de metas em desenvolvimento...
                  </div>
                }
              />
              <Route path="gamificacao" element={<BrokerGamification />} />
              <Route
                path="configuracoes"
                element={
                  <div className="flex h-[50vh] items-center justify-center text-slate-500 font-bold text-xl animate-fade-in-up text-center px-4">
                    Configurações do perfil em desenvolvimento...
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
