import { Target } from 'lucide-react'

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-50 font-sans p-4">
      <div className="text-center space-y-6 max-w-sm w-full bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
          <Target className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight">Login</h1>
          <p className="text-slate-500 font-medium mt-2">
            O módulo de autenticação está em desenvolvimento para conexão futura.
          </p>
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md shadow-blue-600/20">
          Entrar no Dashboard
        </button>
      </div>
    </div>
  )
}
