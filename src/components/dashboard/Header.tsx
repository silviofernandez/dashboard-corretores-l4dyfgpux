import { MonitorPlay } from 'lucide-react'

export function Header({ lastUpdate }: { lastUpdate: Date }) {
  return (
    <header className="p-4 md:p-6 flex items-center justify-between border-b border-white/10 bg-black/20 backdrop-blur-md shrink-0">
      <div className="flex items-center gap-3">
        <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg">
          <MonitorPlay className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>
        <h1 className="text-xl md:text-3xl font-black text-white tracking-tight">
          Ranking <span className="text-blue-500">Ao Vivo</span>
        </h1>
      </div>
      <div className="text-right">
        <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">
          Última atualização
        </div>
        <div className="text-sm md:text-lg font-medium text-slate-200 tabular-nums">
          {lastUpdate.toLocaleTimeString('pt-BR')}
        </div>
      </div>
    </header>
  )
}
