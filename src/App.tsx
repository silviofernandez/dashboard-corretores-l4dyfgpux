import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import { BrokerLayout } from './components/broker/BrokerLayout'
import { ErrorBoundary } from './components/ErrorBoundary'
import { AppProviders } from './providers/AppProviders'
import BrokerDashboard from './pages/broker/Dashboard'

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
            <Routes>
              <Route path="/" element={<BrokerLayout />}>
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

              <Route path="/tv" element={<Index />} />
              <Route path="/login" element={<Navigate to="/" replace />} />
              <Route path="/dashboard/*" element={<Navigate to="/" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </BrowserRouter>
      </AppProviders>
    </ErrorBoundary>
  )
}

export default App
