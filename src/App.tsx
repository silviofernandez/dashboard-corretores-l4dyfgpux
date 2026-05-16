/* Main App Component - Handles routing (using react-router-dom), query client and other providers - use this file to add all routes */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'
import Login from './pages/auth/Login'
import { BrokerLayout } from './components/broker/BrokerLayout'
import BrokerDashboard from './pages/broker/Dashboard'

// ONLY IMPORT AND RENDER WORKING PAGES, NEVER ADD PLACEHOLDER COMPONENTS OR PAGES IN THIS FILE
// AVOID REMOVING ANY CONTEXT PROVIDERS FROM THIS FILE (e.g. TooltipProvider, Toaster, Sonner)

const App = () => (
  <BrowserRouter future={{ v7_startTransition: false, v7_relativeSplatPath: false }}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
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
    </TooltipProvider>
  </BrowserRouter>
)

export default App
