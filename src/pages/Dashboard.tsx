import { Trophy, TrendingUp, Medal, Award } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const brokers = [
  {
    id: 1,
    name: 'João Silva',
    sales: 15,
    volume: 'R$ 4.5M',
    avatar: 'https://img.usecurling.com/ppl/large?gender=male&seed=1',
  },
  {
    id: 2,
    name: 'Maria Santos',
    sales: 12,
    volume: 'R$ 3.8M',
    avatar: 'https://img.usecurling.com/ppl/large?gender=female&seed=2',
  },
  {
    id: 3,
    name: 'Pedro Costa',
    sales: 10,
    volume: 'R$ 3.1M',
    avatar: 'https://img.usecurling.com/ppl/large?gender=male&seed=3',
  },
  {
    id: 4,
    name: 'Ana Oliveira',
    sales: 8,
    volume: 'R$ 2.4M',
    avatar: 'https://img.usecurling.com/ppl/large?gender=female&seed=4',
  },
  {
    id: 5,
    name: 'Carlos Souza',
    sales: 7,
    volume: 'R$ 2.1M',
    avatar: 'https://img.usecurling.com/ppl/large?gender=male&seed=5',
  },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col p-8 md:p-12 font-sans overflow-hidden">
      <header className="flex items-center justify-between mb-12 animate-fade-in-down">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white flex items-center gap-6">
          <Trophy className="w-14 h-14 md:w-20 md:h-20 text-yellow-400 animate-glow-pulse" />
          Ranking de Corretores
        </h1>
        <div className="text-slate-400 text-xl md:text-3xl font-medium uppercase tracking-widest bg-slate-900/50 px-6 py-3 rounded-2xl border border-slate-800 backdrop-blur-sm hidden sm:block">
          Top Performance
        </div>
      </header>

      <div className="flex-1 grid grid-cols-1 gap-6 md:gap-8 max-w-7xl mx-auto w-full">
        {brokers.map((broker, index) => (
          <Card
            key={broker.id}
            className={cn(
              'border-0 shadow-2xl overflow-hidden relative animate-slide-in-right bg-slate-900/50 backdrop-blur transition-transform duration-500 hover:scale-[1.02]',
              index === 0 &&
                'bg-gradient-to-r from-yellow-500/20 to-slate-900/50 ring-2 ring-yellow-500/50',
              index === 1 &&
                'bg-gradient-to-r from-slate-300/20 to-slate-900/50 ring-1 ring-slate-300/50',
              index === 2 &&
                'bg-gradient-to-r from-amber-700/20 to-slate-900/50 ring-1 ring-amber-700/50',
            )}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <CardContent className="p-0 flex items-center p-6 md:p-8">
              <div className="flex items-center justify-center w-16 h-16 md:w-28 md:h-28 shrink-0">
                {index === 0 ? (
                  <Trophy className="w-12 h-12 md:w-24 md:h-24 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
                ) : index === 1 ? (
                  <Medal className="w-12 h-12 md:w-24 md:h-24 text-slate-300 drop-shadow-[0_0_15px_rgba(203,213,225,0.5)]" />
                ) : index === 2 ? (
                  <Medal className="w-12 h-12 md:w-24 md:h-24 text-amber-700 drop-shadow-[0_0_15px_rgba(180,83,9,0.5)]" />
                ) : (
                  <div className="text-4xl md:text-6xl font-black text-slate-700">{index + 1}º</div>
                )}
              </div>

              <Avatar className="w-16 h-16 md:w-28 md:h-28 border-2 md:border-4 border-slate-800 shadow-2xl ml-4 md:ml-8">
                <AvatarImage src={broker.avatar} alt={broker.name} />
                <AvatarFallback className="text-2xl md:text-4xl font-black bg-slate-800 text-white">
                  {broker.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>

              <div className="ml-6 md:ml-10 flex-1">
                <h2 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4 tracking-tight">
                  {broker.name}
                </h2>
                <div className="flex items-center gap-3 md:gap-8 text-sm md:text-2xl font-medium text-slate-400">
                  <div className="flex items-center gap-2 md:gap-3 bg-slate-950/50 px-3 py-1.5 md:px-4 md:py-2 rounded-xl border border-slate-800/50">
                    <Award className="w-4 h-4 md:w-7 md:h-7 text-blue-400" />
                    <span>{broker.sales} Vendas</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 bg-slate-950/50 px-3 py-1.5 md:px-4 md:py-2 rounded-xl border border-slate-800/50">
                    <TrendingUp className="w-4 h-4 md:w-7 md:h-7 text-green-400" />
                    <span>{broker.volume}</span>
                  </div>
                </div>
              </div>

              <div className="px-4 md:px-12 text-right hidden sm:block">
                <div className="text-3xl md:text-6xl font-black text-white tracking-tighter drop-shadow-md">
                  {broker.volume}
                </div>
                <div className="text-sm md:text-xl text-slate-500 font-bold uppercase tracking-widest mt-1 md:mt-2">
                  VGV Total
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
