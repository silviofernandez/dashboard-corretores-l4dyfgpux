import { Trophy, Star, Award, ChevronUp, Minus, ChevronDown } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

export type BrokerStatus = 'Acima' | 'Esperado' | 'Abaixo'
export type BrokerPrivilege = '3x1' | '2x1' | 'Padrão'

export interface Broker {
  id: string
  name: string
  avatar: string
  sales: number
  vgv: number
  status: BrokerStatus
  privilege: BrokerPrivilege
}

const formatCurrency = (val: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(val)

const getRowStyle = (index: number) => {
  switch (index) {
    case 0:
      return 'bg-gradient-to-r from-[#FACC15] to-[#EAB308] text-black z-30 ring-1 ring-yellow-300 animate-glow-pulse'
    case 1:
      return 'bg-gradient-to-r from-[#E2E8F0] to-[#94A3B8] text-black shadow-[0_0_20px_rgba(226,232,240,0.15)] z-20'
    case 2:
      return 'bg-gradient-to-r from-[#D97706] to-[#B45309] text-white shadow-[0_0_20px_rgba(217,119,6,0.15)] z-10'
    default:
      return 'bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors'
  }
}

export function RankingList({ brokers }: { brokers: Broker[] }) {
  return (
    <div className="flex-1 w-full flex flex-col pt-4 pb-2 px-4 lg:px-10 overflow-y-auto overflow-x-hidden custom-scrollbar">
      <div className="hidden md:grid grid-cols-[60px_1fr_80px_180px_120px_120px] lg:grid-cols-[100px_1fr_120px_280px_160px_160px] gap-4 px-6 py-3 text-xs lg:text-xl font-bold text-gray-500 uppercase tracking-widest shrink-0">
        <div>Posição</div>
        <div>Corretor</div>
        <div className="text-right">Vendas</div>
        <div className="text-right">VGV</div>
        <div className="text-center">Status</div>
        <div className="text-center">Privilégios</div>
      </div>

      <div className="flex-1 flex flex-col gap-3 lg:gap-4 pb-4">
        {brokers.map((broker, idx) => (
          <div
            key={`${broker.id}-${broker.sales}`}
            className={cn(
              'flex flex-col md:grid md:grid-cols-[60px_1fr_80px_180px_120px_120px] lg:grid-cols-[100px_1fr_120px_280px_160px_160px] gap-2 md:gap-4 px-4 py-3 md:px-6 md:py-4 lg:py-5 rounded-xl animate-slide-in-right',
              getRowStyle(idx),
            )}
            style={{ animationDelay: `${idx * 75}ms` }}
          >
            <div className="flex items-center justify-between md:justify-start gap-4 md:col-span-2">
              <div className="flex items-center gap-3 md:gap-4 lg:gap-6 w-full">
                <div className="text-xl md:text-2xl lg:text-4xl font-black italic flex items-center justify-center gap-1 md:w-[60px] lg:w-[100px] shrink-0">
                  {idx + 1}º
                  {idx === 0 && <Trophy className="w-5 h-5 lg:w-8 lg:h-8 hidden md:block" />}
                  {idx === 1 && <Award className="w-5 h-5 lg:w-8 lg:h-8 hidden md:block" />}
                  {idx === 2 && <Award className="w-5 h-5 lg:w-8 lg:h-8 hidden md:block" />}
                </div>

                <Avatar className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 border-2 border-white/20 shadow-lg shrink-0">
                  <AvatarImage src={broker.avatar} />
                  <AvatarFallback className="bg-white/20 text-current">
                    {broker.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="text-lg md:text-xl lg:text-3xl font-bold truncate tracking-tight flex-1">
                  {broker.name}
                </div>
              </div>

              <div className="flex flex-col items-end md:hidden shrink-0">
                <div className="text-lg font-bold">{formatCurrency(broker.vgv)}</div>
                <div className="text-sm opacity-80 font-medium">{broker.sales} vendas</div>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-end text-xl lg:text-3xl font-bold font-mono">
              {broker.sales}
            </div>

            <div className="hidden md:flex items-center justify-end text-xl lg:text-3xl font-bold tracking-tight font-mono">
              {formatCurrency(broker.vgv)}
            </div>

            <div className="hidden md:flex items-center justify-center">
              <span
                className={cn(
                  'px-3 py-1 lg:px-6 lg:py-2 rounded-full text-xs lg:text-xl font-bold flex items-center gap-2 shadow-md',
                  broker.status === 'Acima'
                    ? 'bg-green-500/20 text-green-500'
                    : broker.status === 'Esperado'
                      ? 'bg-yellow-500/20 text-yellow-500'
                      : 'bg-red-500/20 text-red-500',
                  idx < 2 && 'bg-black/10 text-current shadow-black/10',
                )}
              >
                {broker.status === 'Acima' && (
                  <ChevronUp className="w-3 h-3 lg:w-6 lg:h-6" strokeWidth={3} />
                )}
                {broker.status === 'Esperado' && (
                  <Minus className="w-3 h-3 lg:w-6 lg:h-6" strokeWidth={3} />
                )}
                {broker.status === 'Abaixo' && (
                  <ChevronDown className="w-3 h-3 lg:w-6 lg:h-6" strokeWidth={3} />
                )}
                {broker.status}
              </span>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <span
                className={cn(
                  'px-3 py-1 lg:px-6 lg:py-2 rounded-full text-xs lg:text-xl font-bold flex items-center gap-2 shadow-md bg-white/10',
                  idx < 2 && 'bg-black/10 text-current shadow-black/10',
                )}
              >
                {broker.privilege === '3x1' && (
                  <Star className="w-3 h-3 lg:w-5 lg:h-5 fill-current" />
                )}
                {broker.privilege === '2x1' && <Star className="w-3 h-3 lg:w-5 lg:h-5" />}
                {broker.privilege}
              </span>
            </div>

            <div className="flex md:hidden gap-2 mt-2 pt-2 border-t border-white/10">
              <span
                className={cn(
                  'px-2 py-0.5 rounded-full text-xs font-bold flex items-center gap-1',
                  broker.status === 'Acima'
                    ? 'bg-green-500/20 text-green-500'
                    : broker.status === 'Esperado'
                      ? 'bg-yellow-500/20 text-yellow-500'
                      : 'bg-red-500/20 text-red-500',
                  idx < 2 && 'bg-black/10 text-current',
                )}
              >
                {broker.status}
              </span>
              <span
                className={cn(
                  'px-2 py-0.5 rounded-full text-xs font-bold flex items-center gap-1 bg-white/10',
                  idx < 2 && 'bg-black/10 text-current',
                )}
              >
                {broker.privilege}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
