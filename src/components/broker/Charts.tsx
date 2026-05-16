import { BarChart3 } from 'lucide-react'

export function Charts() {
  return (
    <div
      className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm mt-6 flex flex-col items-center justify-center min-h-[300px] text-slate-400 animate-fade-in-up"
      style={{ animationDelay: '100ms' }}
    >
      <div className="bg-slate-50 p-4 rounded-full mb-4">
        <BarChart3 className="w-8 h-8 text-slate-300" />
      </div>
      <p className="font-bold text-slate-500">Gráficos de Performance</p>
      <p className="text-sm font-medium mt-1">Conectando dados do CRM para exibição visual...</p>
    </div>
  )
}
