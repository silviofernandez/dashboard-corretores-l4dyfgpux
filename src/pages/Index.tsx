import { useEffect, useState } from 'react'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Trophy, TrendingUp, Medal } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Broker {
  id: number
  name: string
  points: number
  avatar: string
  trend: 'up' | 'down' | 'neutral'
}

export default function Index() {
  const [brokers, setBrokers] = useState<Broker[]>([])

  useEffect(() => {
    // Mock data for the TV Dashboard
    const data: Broker[] = [
      {
        id: 1,
        name: 'Ana Paula Silva',
        points: 12450,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1',
        trend: 'up',
      },
      {
        id: 2,
        name: 'Marcos Costa',
        points: 11200,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2',
        trend: 'up',
      },
      {
        id: 3,
        name: 'Juliana Mendes',
        points: 9800,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=3',
        trend: 'neutral',
      },
      {
        id: 4,
        name: 'Roberto Almeida',
        points: 8450,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=4',
        trend: 'down',
      },
      {
        id: 5,
        name: 'Fernanda Lima',
        points: 7900,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=5',
        trend: 'up',
      },
    ]
    setBrokers(data)
  }, [])

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col font-sans">
        <header className="p-6 md:p-8 border-b border-slate-800/50 bg-slate-900/50 flex flex-col md:flex-row items-center justify-between shadow-xl backdrop-blur-sm sticky top-0 z-10 gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-amber-500/10 p-4 rounded-2xl border border-amber-500/20">
              <Trophy className="w-10 h-10 text-amber-500" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-center md:text-left">
                Ranking de <span className="text-blue-500">Corretores</span>
              </h1>
              <p className="text-slate-400 font-medium text-base md:text-lg mt-1 text-center md:text-left">
                Acompanhamento em tempo real
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-emerald-500/10 text-emerald-400 px-6 py-3 rounded-full border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.15)] animate-pulse">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-lg font-bold">AO VIVO</span>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8 overflow-y-auto max-w-7xl mx-auto w-full">
          <div className="grid gap-4">
            {brokers.map((broker, index) => (
              <Card
                key={broker.id}
                className={cn(
                  'border-0 shadow-lg transform transition-all duration-500 hover:scale-[1.01]',
                  index === 0
                    ? 'bg-gradient-to-r from-amber-500/20 to-slate-900 border border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.1)]'
                    : index === 1
                      ? 'bg-gradient-to-r from-slate-300/10 to-slate-900 border border-slate-300/20'
                      : index === 2
                        ? 'bg-gradient-to-r from-orange-500/10 to-slate-900 border border-orange-500/20'
                        : 'bg-slate-900/80 border border-slate-800/80',
                )}
              >
                <CardContent className="flex items-center p-4 md:p-6 gap-4 md:gap-8">
                  <div className="w-12 md:w-16 flex justify-center shrink-0">
                    {index === 0 ? (
                      <Medal className="w-10 h-10 md:w-12 md:h-12 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
                    ) : index === 1 ? (
                      <Medal className="w-8 h-8 md:w-10 md:h-10 text-slate-300" />
                    ) : index === 2 ? (
                      <Medal className="w-8 h-8 md:w-10 md:h-10 text-orange-400" />
                    ) : (
                      <span className="text-2xl md:text-3xl font-black text-slate-600">
                        #{index + 1}
                      </span>
                    )}
                  </div>

                  <Avatar className="w-16 h-16 md:w-20 md:h-20 border-2 md:border-4 border-slate-800 shadow-xl shrink-0">
                    <AvatarImage src={broker.avatar} />
                    <AvatarFallback className="bg-slate-800 text-slate-400 text-xl md:text-2xl font-bold">
                      {broker.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl md:text-3xl font-black text-white truncate">
                      {broker.name}
                    </h2>
                    <div className="flex items-center gap-1 md:gap-2 mt-1 md:mt-2">
                      <TrendingUp
                        className={cn(
                          'w-4 h-4 md:w-5 md:h-5',
                          broker.trend === 'up'
                            ? 'text-emerald-400'
                            : broker.trend === 'down'
                              ? 'text-rose-400'
                              : 'text-slate-500',
                        )}
                      />
                      <span className="text-slate-400 font-semibold text-sm md:text-lg">
                        {broker.trend === 'up'
                          ? 'Subindo'
                          : broker.trend === 'down'
                            ? 'Caindo'
                            : 'Estável'}
                      </span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-3xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400">
                      {broker.points.toLocaleString()}
                    </div>
                    <div className="text-slate-500 font-bold text-sm md:text-xl uppercase tracking-wider mt-1">
                      Pontos
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </ErrorBoundary>
  )
}
