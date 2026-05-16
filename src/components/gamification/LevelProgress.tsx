import { Progress } from '@/components/ui/progress'
import { Award } from 'lucide-react'

interface LevelProgressProps {
  currentLevel: number
  currentPoints: number
  nextLevelPoints: number
}

export function LevelProgress({
  currentLevel,
  currentPoints,
  nextLevelPoints,
}: LevelProgressProps) {
  const percentage = Math.min(100, Math.max(0, (currentPoints / nextLevelPoints) * 100))

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-6">
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-full shadow-lg shadow-blue-500/20 text-white shrink-0">
        <Award className="w-10 h-10" />
      </div>
      <div className="flex-1 w-full text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Status Atual
            </span>
            <h3 className="text-2xl font-black text-slate-800 leading-none">
              Nível {currentLevel}
            </h3>
          </div>
          <div className="md:text-right">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Para o Nível {currentLevel + 1}
            </span>
            <p className="text-lg font-black text-blue-600 leading-none">
              {currentPoints} / {nextLevelPoints} pts
            </p>
          </div>
        </div>
        <Progress value={percentage} className="h-3 bg-slate-100" />
      </div>
    </div>
  )
}
