import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '@/providers/AppProviders'
import { ErrorBoundary } from '@/components/ErrorBoundary'

export function ProtectedRoute({ allowedRoles }: { allowedRoles?: string[] }) {
  const authContext = useAuth()
  const location = useLocation()

  // Guard: Fail safe if context cannot be resolved (avoids null dereference)
  if (!authContext) {
    console.error('CRITICAL: ProtectedRoute rendered without AppProviders Context')
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-slate-800 bg-slate-50 px-4 text-center">
        <h2 className="text-xl font-black mb-2 text-red-600">Falha de Inicialização</h2>
        <p className="text-slate-500 font-medium">
          Os serviços da plataforma não estão disponíveis no momento.
        </p>
      </div>
    )
  }

  const { user, loading } = authContext

  // Guard: Protect against infinite loading state freezes by supplying a highly-visible blocking fallback
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 animate-fade-in">
        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600 mb-4"></div>
        <p className="text-slate-500 font-bold tracking-tight">Autenticando sessão segura...</p>
      </div>
    )
  }

  // Guard: Protect against redirection loops verifying if target is already login
  if (!user && location.pathname !== '/login') {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (user && allowedRoles && !allowedRoles.includes(user.role)) {
    if (user.role === 'admin') return <Navigate to="/admin" replace />
    if (user.role === 'broker') return <Navigate to="/broker" replace />
    return <Navigate to="/login" replace />
  }

  // Ensure routing works seamlessly mapping directly to the layout components via Outlet
  return (
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  )
}
