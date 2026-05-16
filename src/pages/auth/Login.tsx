export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-sm w-full animate-fade-in-up text-center">
        <h1 className="text-2xl font-black text-slate-800 mb-6">Login do Corretor</h1>
        <p className="text-slate-500 font-medium text-sm">
          Integração com autenticação em desenvolvimento.
        </p>
        <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-sm">
          Acessar Dashboard
        </button>
      </div>
    </div>
  )
}
