import { Card, CardContent } from '@/components/ui/card'

export function LevelProgress({
  currentLevel,
  currentPoints,
  nextLevelPoints,
}: {
  currentLevel: number
  currentPoints: number
  nextLevelPoints: number
}) {
  const progress = Math.min((currentPoints / nextLevelPoints) * 100, 100)

  return (
    <Card className="border-0 shadow-sm rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden relative">
      <div className="absolute right-0 top-0 opacity-10 scale-150 transform translate-x-1/4 -translate-y-1/4 pointer-events-none">
        <svg
          width="200"
          height="200"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </div>
      <CardContent className="p-6 relative z-10">
        <div className="flex justify-between items-end mb-4">
          <div>
            <div className="text-blue-200 font-bold text-xs md:text-sm uppercase tracking-wider mb-1">
              Nível Atual
            </div>
            <div className="text-3xl md:text-4xl font-black">Nvl {currentLevel}</div>
          </div>
          <div className="text-right">
            <div className="text-blue-200 font-bold text-xs md:text-sm uppercase tracking-wider mb-1">
              Próximo Nível
            </div>
            <div className="text-xl md:text-2xl font-bold">
              {currentPoints} / {nextLevelPoints} pts
            </div>
          </div>
        </div>
        <div className="w-full bg-black/20 h-3 rounded-full overflow-hidden backdrop-blur-sm">
          <div
            className="bg-white h-full rounded-full transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>
      </CardContent>
    </Card>
  )
}
