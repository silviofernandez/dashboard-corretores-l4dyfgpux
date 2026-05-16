import { Outlet } from 'react-router-dom'
import { ErrorBoundary } from '@/components/ErrorBoundary'

export function Layout() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-50 relative">
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </div>
  )
}
