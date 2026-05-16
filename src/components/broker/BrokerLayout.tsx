import { Outlet, Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Target, Trophy, Settings, History, MonitorPlay } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { Suspense } from 'react'

export function BrokerLayout() {
  const location = useLocation()

  // Routes updated to support the new '/app' base path established for root diagnostic isolation
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/app' },
    { icon: History, label: 'Histórico', path: '/app/historico' },
    { icon: Target, label: 'Metas', path: '/app/metas' },
    { icon: Trophy, label: 'Gamificação', path: '/app/gamificacao' },
    { icon: MonitorPlay, label: 'TV Ranking', path: '/tv' },
    { icon: Settings, label: 'Configurações', path: '/app/configuracoes' },
  ]

  // CSS Visibility Audit Applied: Removed potentially collapsing containers, forced z-indexes and background layers for explicit drawing
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans w-full overflow-hidden isolate">
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 h-screen sticky top-0 shrink-0 shadow-sm z-20">
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
          <div className="bg-blue-600 text-white p-2 rounded-xl shadow-sm">
            <Trophy className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-black text-slate-800 tracking-tight leading-none">
            Dashboard
            <br />
            <span className="text-blue-600">Corretores</span>
          </h1>
        </div>
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all',
                  isActive
                    ? 'bg-blue-50 text-blue-700 shadow-sm'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800',
                )}
              >
                <item.icon
                  className={cn('w-5 h-5', isActive ? 'text-blue-600' : 'text-slate-400')}
                />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Main explicit container enforcing 100% opacity, base z-index and flex bounds to prevent child collapse */}
      <main className="flex-1 pb-20 md:pb-0 overflow-y-auto overflow-x-hidden h-screen relative w-full z-10 bg-slate-50 opacity-100 block">
        <div className="w-full h-full max-w-full flex flex-col">
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className="flex flex-1 items-center justify-center min-h-[50vh] w-full bg-slate-50">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-4 border-blue-600"></div>
                </div>
              }
            >
              {/* Outlet explicitly rendering child routes unblocked */}
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </div>
      </main>

      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 flex justify-around p-2 z-50 safe-area-bottom shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        {navItems.slice(0, 5).map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex flex-col items-center p-2 rounded-xl min-w-[64px] transition-colors',
                isActive ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600',
              )}
            >
              <div className={cn('p-1.5 rounded-lg mb-1 transition-all', isActive && 'bg-blue-50')}>
                <item.icon className={cn('w-5 h-5', isActive && 'fill-blue-100')} />
              </div>
              <span className="text-[10px] font-bold">{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
