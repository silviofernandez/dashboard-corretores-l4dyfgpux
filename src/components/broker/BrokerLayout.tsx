import { Outlet, Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Target, Trophy, Settings, History, MonitorPlay } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ErrorBoundary } from '@/components/ErrorBoundary'

export function BrokerLayout() {
  const location = useLocation()

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: History, label: 'Histórico', path: '/historico' },
    { icon: Target, label: 'Metas', path: '/metas' },
    { icon: Trophy, label: 'Gamificação', path: '/gamificacao' },
    { icon: MonitorPlay, label: 'TV Ranking', path: '/tv' },
    { icon: Settings, label: 'Configurações', path: '/configuracoes' },
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans">
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 h-screen sticky top-0 shrink-0 shadow-sm z-10">
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

      <main className="flex-1 pb-20 md:pb-0 overflow-x-hidden min-h-screen">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>

      <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-slate-200 flex justify-around p-2 z-50 safe-area-bottom shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
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
