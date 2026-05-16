import { ArrowUp, Target, TrendingUp, Award } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function MetricsCards() {
  const data = {
    vgv: { current: 12500000, target: 16600000, pct: 75 },
    sales: { current: 45, target: 60 },
    ranking: { pos: 1, trend: 'up', val: 2 },
    privileges: ['💎 3x1 Diamante', 'Clube VIP', 'Padrão'],
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-500" /> VGV Atual
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-4 pt-2">
          <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-100"
                strokeWidth="4"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-blue-600 drop-shadow-sm"
                strokeWidth="4"
                strokeDasharray="75, 100"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute flex items-center justify-center text-sm font-black text-slate-700">
              {data.vgv.pct}%
            </div>
          </div>
          <div>
            <div className="text-2xl font-black text-slate-800 tracking-tight">
              R$ {(data.vgv.current / 1000000).toFixed(1)}M
            </div>
            <p className="text-xs font-bold text-slate-400 mt-1">
              Meta: R$ {(data.vgv.target / 1000000).toFixed(1)}M
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <Target className="w-4 h-4 text-emerald-500" /> Vendas Concluídas
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-black text-slate-800 tracking-tighter">
              {data.sales.current}
            </span>
            <span className="text-xl font-bold text-slate-300">/ {data.sales.target}</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
            <div
              className="bg-emerald-500 h-full rounded-full"
              style={{ width: `${(data.sales.current / data.sales.target) * 100}%` }}
            />
          </div>
          <p className="text-xs font-bold text-slate-400 mt-2">
            {data.sales.target - data.sales.current} vendas restantes
          </p>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-500" /> Posição no Ranking
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-5 pt-2">
          <div className="text-6xl font-black text-amber-500 drop-shadow-sm tracking-tighter">
            {data.ranking.pos}º
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center text-emerald-600 text-xs font-black bg-emerald-50 px-2.5 py-1.5 rounded-lg w-fit">
              <ArrowUp className="w-3 h-3 mr-1" strokeWidth={4} />
              Subiu {data.ranking.val}
            </div>
            <p className="text-xs font-bold text-slate-400">Última semana</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <Award className="w-4 h-4 text-purple-500" /> Privilégios Ativos
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="flex flex-col gap-2.5">
            <Badge className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white font-black px-3 py-1 shadow-sm w-fit">
              💎 3x1 Diamante
            </Badge>
            <div className="flex gap-2">
              <Badge
                variant="secondary"
                className="font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 px-3"
              >
                Clube VIP
              </Badge>
              <Badge
                variant="outline"
                className="border-emerald-500 text-emerald-600 font-bold px-3"
              >
                Padrão
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
