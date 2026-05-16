import { Trophy, TrendingUp, TrendingDown, Minus } from 'lucide-react'

export interface Broker {
  id: string
  name: string
  avatar: string
  sales: number
  vgv: number
  status: string
  privilege: string
}

export function RankingList({ brokers }: { brokers: Broker[] }) {
  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val)

  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-6 space-y-3 md:space-y-4 relative z-0 pb-8">
      {brokers.map((broker, index) => {
        const isTop3 = index < 3
        return (
          <div
            key={broker.id}
            className={`
              flex items-center gap-3 md:gap-6 p-3 md:p-4 rounded-2xl transition-all duration-500 animate-slide-in-right
              ${isTop3 ? 'bg-gradient-to-r from-slate-800/80 to-slate-800/40 border border-white/10 shadow-lg' : 'bg-slate-800/30 border border-transparent'}
            `}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-center justify-center w-8 md:w-12 shrink-0">
              {index === 0 ? (
                <Trophy className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
              ) : index === 1 ? (
                <Trophy className="w-6 h-6 md:w-8 md:h-8 text-slate-300" />
              ) : index === 2 ? (
                <Trophy className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />
              ) : (
                <span className="text-xl md:text-2xl font-black text-slate-500 w-6 md:w-8 text-center">
                  {index + 1}
                </span>
              )}
            </div>

            <div className="relative shrink-0 hidden sm:block">
              <img
                src={broker.avatar}
                alt={broker.name}
                className={`rounded-full object-cover border-2 ${isTop3 ? 'w-14 h-14 md:w-16 md:h-16 border-blue-500/50' : 'w-10 h-10 md:w-12 md:h-12 border-slate-600'}`}
              />
              {broker.status === 'Acima' && (
                <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-1 border-2 border-slate-900">
                  <TrendingUp className="w-3 h-3 text-white" />
                </div>
              )}
              {broker.status === 'Esperado' && (
                <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1 border-2 border-slate-900">
                  <Minus className="w-3 h-3 text-white" />
                </div>
              )}
              {broker.status === 'Abaixo' && (
                <div className="absolute -bottom-1 -right-1 bg-rose-500 rounded-full p-1 border-2 border-slate-900">
                  <TrendingDown className="w-3 h-3 text-white" />
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h2
                className={`font-black truncate tracking-wide ${isTop3 ? 'text-lg md:text-2xl text-white' : 'text-base md:text-xl text-slate-200'}`}
              >
                {broker.name}
              </h2>
              <p className="text-slate-400 font-medium text-xs md:text-sm flex items-center gap-2 mt-0.5">
                <span>{broker.sales} vendas</span>
                <span className="w-1 h-1 rounded-full bg-slate-600 hidden sm:block"></span>
                <span className="text-blue-400 hidden sm:block">{broker.privilege}</span>
              </p>
            </div>

            <div className="text-right shrink-0">
              <p
                className={`font-black tracking-wider ${isTop3 ? 'text-xl md:text-3xl text-emerald-400' : 'text-lg md:text-xl text-emerald-500/80'}`}
              >
                {formatCurrency(broker.vgv)}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
