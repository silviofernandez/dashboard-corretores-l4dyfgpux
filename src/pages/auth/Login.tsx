export default function Login() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-50 p-4 animate-fade-in">
      <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-sm text-center border border-slate-100">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl mx-auto flex items-center justify-center mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-black text-slate-800 mb-2 tracking-tight">Área Restrita</h1>
        <p className="text-slate-500 font-medium mb-8">
          A autenticação está desativada no modo de visualização.
        </p>
        <a
          href="/"
          className="inline-block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-sm"
        >
          Voltar ao Dashboard
        </a>
      </div>
    </div>
  )
}
