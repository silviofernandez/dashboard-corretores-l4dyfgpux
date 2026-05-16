import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-slate-50">
      <h1 className="text-2xl font-black text-slate-800">Login Seguro</h1>
      <p className="text-slate-500">Página de autenticação simulada.</p>
      <Link
        to="/app"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-sm hover:bg-blue-700 transition-colors"
      >
        Acessar Plataforma
      </Link>
    </div>
  )
}
