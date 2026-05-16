import { Card, CardContent } from '@/components/ui/card'
import { Trophy, Star, TrendingUp } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

export function LevelProgress({
  currentLevel,
  currentPoints,
  nextLevelPoints,
}: {
  currentLevel: number
  currentPoints: number
  nextLevelPoints: number
}) {
  const progress = (currentPoints / nextLevelPoints) * 100

  return (
    <Card className="bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-700 text-white border-0 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4">
        <Trophy className="w-48 h-48" />
      </div>
      <CardContent className="p-5 md:p-6 relative z-10">
        <div className="flex flex-col sm:flex-row gap-6 sm:items-end justify-between mb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 drop-shadow-sm" />
              <span className="text-yellow-400 font-bold uppercase tracking-wider text-xs md:text-sm drop-shadow-sm">
                Nível Atual
              </span>
            </div>
            <div className="text-4xl md:text-5xl font-black tracking-tighter drop-shadow-md">
              Lvl {currentLevel}
            </div>
            <p className="text-blue-100 text-sm font-medium">Especialista em Vendas (3x1)</p>
          </div>

          <div className="sm:text-right">
            <div className="text-sm text-blue-100 font-medium mb-1">
              Faltam{' '}
              <strong className="text-white">{nextLevelPoints - currentPoints} pontos</strong> para
              o próximo nível
            </div>
            <div className="text-2xl font-bold font-mono tracking-tight drop-shadow-md">
              {currentPoints.toLocaleString()} / {nextLevelPoints.toLocaleString()}{' '}
              <span className="text-sm font-sans font-bold text-blue-200">XP</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Progress
            value={progress}
            className="h-4 md:h-5 bg-black/20 shadow-inner [&>div]:bg-gradient-to-r [&>div]:from-yellow-400 [&>div]:to-amber-500 [&>div]:shadow-md"
          />
          <div className="flex justify-between text-xs font-bold text-blue-200 pt-1">
            <span>Iniciante</span>
            <span className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full text-white">
              <TrendingUp className="w-3 h-3 text-emerald-400" strokeWidth={3} />
              Você está voando!
            </span>
            <span>Lvl {currentLevel + 1}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
