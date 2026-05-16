import { useEffect, useState } from 'react'
import { Trophy } from 'lucide-react'
import { initialBrokers } from '@/lib/mock-data'

export default function TvDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const sortedBrokers = [...initialBrokers].filter((b) => b.active).sort((a, b) => b.vgv - a.vgv)

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col overflow-hidden font-sans selection:bg-blue-500/30">
      <header className="p-8 border-b border-slate-800/50 bg-slate-900/50 backdrop-blur-md flex justify-between items-center z-10">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-black tracking-tight text-white">Ranking de Vendas</h1>
            <p className="text-xl text-slate-400 font-medium">Top Corretores da Imobiliária</p>
          </div>
        </div>
        <div className="text-right bg-slate-800/50 px-6 py-3 rounded-2xl border border-slate-700/50">
          <p className="text-3xl font-bold font-mono tracking-wider text-slate-200">
            {currentTime.toLocaleTimeString('pt-BR')}
          </p>
          <p className="text-slate-400 uppercase tracking-widest text-sm font-semibold mt-1">
            {currentTime.toLocaleDateString('pt-BR', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </header>

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="grid grid-cols-1 gap-4 max-w-7xl mx-auto pb-12">
          {sortedBrokers.map((broker, index) => {
            const isFirst = index === 0
            const isTop3 = index < 3

            return (
              <div
                key={broker.id}
                className={`flex items-center gap-8 p-6 rounded-3xl transition-all duration-700 animate-in slide-in-from-bottom-8 fade-in ${
                  isFirst
                    ? 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/5 border border-yellow-500/30 shadow-[0_0_40px_-15px_rgba(234,179,8,0.3)]'
                    : isTop3
                      ? 'bg-slate-800/80 border border-slate-700/50'
                      : 'bg-slate-900/50 border border-slate-800/50'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 flex justify-center shrink-0">
                  {isFirst ? (
                    <Trophy className="w-16 h-16 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
                  ) : index === 1 ? (
                    <Trophy className="w-12 h-12 text-slate-300" />
                  ) : index === 2 ? (
                    <Trophy className="w-12 h-12 text-amber-700" />
                  ) : (
                    <span className="text-4xl font-black text-slate-600 w-12 text-center">
                      {index + 1}º
                    </span>
                  )}
                </div>

                <div className="flex-1 flex items-center justify-between gap-8">
                  <div className="flex-1">
                    <h2
                      className={`font-black tracking-tight truncate ${isTop3 ? 'text-4xl text-white' : 'text-3xl text-slate-300'}`}
                    >
                      {broker.name}
                    </h2>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 font-semibold text-lg">
                        {broker.teamName}
                      </span>
                      <span className="text-slate-400 font-medium text-lg">
                        {broker.sales} Vendas
                      </span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">
                      VGV Total
                    </p>
                    <p
                      className={`font-black tabular-nums tracking-tight ${isFirst ? 'text-6xl text-yellow-400' : isTop3 ? 'text-5xl text-emerald-400' : 'text-4xl text-emerald-500/80'}`}
                    >
                      {formatCurrency(broker.vgv)}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
