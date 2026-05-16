import { Hexagon, Clock } from 'lucide-react'

export function Header({ lastUpdate }: { lastUpdate: Date }) {
  return (
    <header className="flex items-center justify-between p-4 md:px-10 md:py-6 bg-black/20 backdrop-blur-md border-b border-white/10 text-white shrink-0">
      <div className="flex items-center gap-3">
        <Hexagon className="w-8 h-8 md:w-12 md:h-12 fill-blue-500/20 text-blue-400" />
        <h1 className="text-xl md:text-3xl font-black tracking-tight">
          Ranking de <span className="text-blue-400">Corretores</span>
        </h1>
      </div>
      <div className="flex items-center gap-2 text-sm md:text-base font-bold text-slate-300">
        <Clock className="w-4 h-4 md:w-5 md:h-5" />
        <span className="hidden md:inline">Última atualização:</span>
        {lastUpdate.toLocaleTimeString('pt-BR')}
      </div>
    </header>
  )
}
