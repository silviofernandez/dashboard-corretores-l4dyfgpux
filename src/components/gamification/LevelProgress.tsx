import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Trophy, Star } from 'lucide-react'

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
  const progress = Math.min(100, Math.max(0, (currentPoints / nextLevelPoints) * 100))

  return (
    <Card className="border-slate-100 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Trophy className="w-5 h-5 text-amber-500" />
          Seu Progresso
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white shadow-sm">
              <Star className="w-6 h-6 text-blue-600 fill-blue-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-500">Nível Atual</p>
              <p className="text-2xl font-black text-slate-800">Nível {currentLevel}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-slate-500">Próximo Nível</p>
            <p className="text-xl font-black text-blue-600">
              {nextLevelPoints.toLocaleString()} pts
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm font-bold text-slate-600">
            <span>{currentPoints.toLocaleString()} pts</span>
            <span>Faltam {(nextLevelPoints - currentPoints).toLocaleString()} pts</span>
          </div>
          <Progress value={progress} className="h-3 bg-slate-100" />
        </div>
      </CardContent>
    </Card>
  )
}
