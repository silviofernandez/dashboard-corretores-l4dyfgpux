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
    <footer className="px-6 md:px-8 py-4 md:py-6 bg-slate-900/80 backdrop-blur-md border-t border-white/5 flex flex-col gap-3 z-10 mt-auto shrink-0">
      <div className="flex justify-between items-end">
        <div>
          <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">
            VGV Total da Equipe
          </p>
          <p className="text-xl md:text-2xl font-black text-white">{formatCurrency(current)}</p>
        </div>
        <div className="text-right hidden sm:block">
          <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">
            Meta Global
          </p>
          <p className="text-xl md:text-2xl font-black text-slate-300">
            {formatCurrency(totalGoal)}
          </p>
        </div>
      </div>
      <div className="w-full h-3 md:h-4 bg-slate-800 rounded-full overflow-hidden relative border border-white/5 shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out animate-glow-pulse"
          style={{ width: `${progress}%` }}
        />
      </div>
    </footer>
  )
}
