import { Target } from 'lucide-react'

export function Footer({
  progress,
  totalGoal,
  current,
}: {
  progress: number
  totalGoal: number
  current: number
}) {
  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val)

  return (
    <footer className="p-4 md:p-6 border-t border-white/10 bg-black/40 backdrop-blur-md flex flex-col gap-3 md:gap-4 shrink-0">
      <div className="flex justify-between items-end">
        <div className="flex items-center gap-2 text-slate-300 font-bold uppercase text-xs md:text-sm tracking-widest">
          <Target className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
          Meta Global Mensal
        </div>
        <div className="text-right">
          <span className="text-xl md:text-3xl font-black text-white tracking-tight">
            {formatCurrency(current)}
          </span>
          <span className="text-xs md:text-sm font-medium text-slate-400 ml-2 block sm:inline">
            / {formatCurrency(totalGoal)}
          </span>
        </div>
      </div>
      <div className="w-full h-3 md:h-4 bg-white/10 rounded-full overflow-hidden shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-white/20 w-full animate-[slide-in-right_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </footer>
  )
}
