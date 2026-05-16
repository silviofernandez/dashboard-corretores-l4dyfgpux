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
    <footer className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 lg:px-10 lg:py-6 border-t border-white/10 bg-black/40 gap-4 shrink-0 shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
      <div className="text-lg lg:text-2xl text-gray-400 font-medium">
        Próxima atualização: Sábado
      </div>
      <div className="flex items-center gap-4 w-full sm:w-1/2 lg:w-1/3">
        <div className="p-3 bg-blue-500/10 rounded-full">
          <Target className="w-8 h-8 lg:w-10 lg:h-10 text-blue-400" />
        </div>
        <div className="flex-1 space-y-2 lg:space-y-3">
          <div className="flex justify-between text-sm lg:text-xl font-bold">
            <span className="tracking-wide">Meta Mensal Geral</span>
            <span className="text-blue-400">{progress.toFixed(1)}%</span>
          </div>
          <div className="w-full h-3 lg:h-4 bg-white/10 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(34,211,238,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-xs lg:text-lg text-gray-400 font-medium font-mono">
            <span>{formatCurrency(current)}</span>
            <span>{formatCurrency(totalGoal)}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
