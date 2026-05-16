import { Target } from 'lucide-react'

export function Challenges() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center min-h-[250px] text-slate-400">
      <div className="bg-slate-50 p-4 rounded-full mb-4">
        <Target className="w-8 h-8 text-slate-300" />
      </div>
      <p className="font-bold text-slate-500">Desafios Ativos</p>
      <p className="text-sm font-medium mt-1 text-center max-w-xs">
        Nenhum desafio ativo no momento. Fique de olho nas próximas novidades!
      </p>
    </div>
  )
}
