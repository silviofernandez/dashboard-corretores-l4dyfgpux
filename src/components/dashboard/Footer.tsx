import { Progress } from '@/components/ui/progress'

const formatCurrency = (val: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(val)

export function Footer({
  progress,
  totalGoal,
  current,
}: {
  progress: number
  totalGoal: number
  current: number
}) {
  return (
    <footer className="p-4 md:px-10 md:py-6 bg-black/20 backdrop-blur-md border-t border-white/10 text-white shrink-0">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between w-full md:w-auto md:flex-col md:items-start shrink-0">
          <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">
            Meta Global VGV
          </div>
          <div className="text-xl md:text-2xl font-black">
            <span className="text-emerald-400">{formatCurrency(current)}</span>
            <span className="text-slate-500 mx-2">/</span>
            {formatCurrency(totalGoal)}
          </div>
        </div>
        <div className="w-full flex-1 flex flex-col gap-2">
          <Progress
            value={progress}
            className="h-4 md:h-6 bg-white/10 [&>div]:bg-gradient-to-r [&>div]:from-emerald-500 [&>div]:to-emerald-400"
          />
          <div className="flex justify-between text-xs font-bold text-slate-400">
            <span>0%</span>
            <span>{progress.toFixed(1)}% alcançado</span>
            <span>100%</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
