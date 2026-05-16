import { Trophy } from 'lucide-react'

export function Leaderboards() {
  return (
    <div
      className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm animate-fade-in-up"
      style={{ animationDelay: '200ms' }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-yellow-50 p-2 rounded-xl">
          <Trophy className="w-5 h-5 text-yellow-500" />
        </div>
        <h3 className="text-lg font-black text-slate-800">Top Corretores - Seu Time</h3>
      </div>
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 hover:bg-slate-100 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  i === 1
                    ? 'bg-yellow-100 text-yellow-700 shadow-sm'
                    : i === 2
                      ? 'bg-slate-200 text-slate-600 shadow-sm'
                      : 'bg-amber-100 text-amber-700 shadow-sm'
                }`}
              >
                {i}º
              </div>
              <div className="font-bold text-slate-700">Corretor Destaque {i}</div>
            </div>
            <div className="font-black text-blue-600 text-sm md:text-base">
              {1200 - i * 150} pts
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
