import { Clock } from 'lucide-react'

export function Header({ lastUpdate }: { lastUpdate: Date }) {
  return (
    <header className="flex items-center justify-between px-6 md:px-8 py-4 md:py-6 bg-slate-900/50 backdrop-blur-md border-b border-white/5 z-10 shrink-0">
      <div className="flex items-center gap-3 md:gap-4">
        <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
          TV <span className="text-blue-500">Ranking</span>
        </h1>
        <div className="h-6 w-px bg-white/10 mx-1 md:mx-2 hidden sm:block"></div>
        <div className="hidden sm:flex items-center gap-2 text-blue-400/80 bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20">
          <Clock className="w-4 h-4 shrink-0" />
          <span className="text-xs md:text-sm font-bold tracking-wider uppercase">
            Atualizado às {lastUpdate.toLocaleTimeString()}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-slate-800/50 px-4 py-2 rounded-full border border-white/5 shadow-sm">
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
        <span className="text-emerald-400 font-bold tracking-widest text-xs md:text-sm uppercase">
          Ao Vivo
        </span>
      </div>
    </header>
  )
}
