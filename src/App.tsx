import { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { BrokerLayout } from './components/broker/BrokerLayout'
import { ErrorBoundary } from './components/ErrorBoundary'
import { AppProviders } from './providers/AppProviders'
import BrokerDashboard from './pages/broker/Dashboard'
import { ProtectedRoute } from './components/ProtectedRoute'

// Safely lazy load pages with fallback to prevent unhandled promise rejections blocking the render
const NotFound = lazy(() =>
  import('./pages/NotFound').catch(() => ({
    default: () => (
      <div className="p-8 text-center text-xl font-bold text-slate-500">
        404 - Página não encontrada
      </div>
    ),
  })),
)
const Index = lazy(() =>
  import('./pages/Index').catch(() => ({
    default: () => (
      <div className="p-8 text-center font-bold text-slate-500">
        TV Dashboard (Em desenvolvimento)
      </div>
    ),
  })),
)
const Login = lazy(() =>
  import('./pages/Login').catch(() => ({
    default: () => (
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-slate-50">
        <h1 className="text-2xl font-black text-slate-800">Login Seguro</h1>
        <p className="text-slate-500">Página de autenticação simulada.</p>
        <a
          href="/app"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-sm hover:bg-blue-700 transition-colors"
        >
          Acessar Plataforma
        </a>
      </div>
    ),
  })),
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
    <ErrorBoundary>
      <AppProviders>
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {/* Suspense boundary handles lazy loading correctly without hanging */}
            <Suspense
              fallback={
                <div className="flex h-screen w-screen items-center justify-center bg-slate-50">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"></div>
                </div>
              }
            >
              <Routes>
                {/* Emergency Diagnostic Route - Temporarily replacing root as requested to verify React core */}
                <Route
                  path="/"
                  element={<div style={{ color: 'red', fontSize: '40px' }}>TESTE</div>}
                />

                {/* Main Application Routes - Migrated to /app to allow root diagnostic testing */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/app" element={<BrokerLayout />}>
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
                    <Route
                      path="gamificacao"
                      element={
                        <div className="flex h-[50vh] items-center justify-center text-slate-500 font-bold text-xl animate-fade-in-up text-center px-4">
                          Página de gamificação em desenvolvimento...
                        </div>
                      }
                    />
                    <Route
                      path="configuracoes"
                      element={
                        <div className="flex h-[50vh] items-center justify-center text-slate-500 font-bold text-xl animate-fade-in-up text-center px-4">
                          Configurações do perfil em desenvolvimento...
                        </div>
                      }
                    />
                  </Route>
                </Route>

                <Route path="/tv" element={<Index />} />
                <Route path="/login" element={<Login />} />
                {/* Fallback internal redirects */}
                <Route path="/dashboard/*" element={<Navigate to="/app" replace />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </TooltipProvider>
        </BrowserRouter>
      </AppProviders>
    </ErrorBoundary>
  )
}

export default App
