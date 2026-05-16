import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Trophy, ArrowUp, ArrowDown, Minus, Crown } from 'lucide-react'

const data: Record<string, Record<string, any[]>> = {
  weekly: {
    sales: [
      {
        id: 1,
        name: 'Ricardo Melo',
        pts: 3200,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1',
        trend: 'up',
      },
      {
        id: 2,
        name: 'Marcos Gomes',
        pts: 2800,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2',
        trend: 'up',
      },
      {
        id: 3,
        name: 'Ana Paula Silva',
        pts: 2500,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1',
        trend: 'down',
      },
      {
        id: 4,
        name: 'Juliana Costa',
        pts: 1900,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=3',
        trend: 'same',
      },
      {
        id: 5,
        name: 'Fernando Lima',
        pts: 1500,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=5',
        trend: 'down',
      },
    ],
    engagement: [
      {
        id: 1,
        name: 'Marcos Gomes',
        pts: 250,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2',
        trend: 'up',
      },
      {
        id: 2,
        name: 'Ana Paula Silva',
        pts: 210,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1',
        trend: 'same',
      },
      {
        id: 3,
        name: 'Juliana Costa',
        pts: 180,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=3',
        trend: 'up',
      },
      {
        id: 4,
        name: 'Ricardo Melo',
        pts: 150,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1',
        trend: 'down',
      },
      {
        id: 5,
        name: 'Roberto Alves',
        pts: 120,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=4',
        trend: 'same',
      },
    ],
    growth: [
      {
        id: 1,
        name: 'Marcos Gomes',
        pts: '+15%',
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2',
        trend: 'up',
      },
      {
        id: 2,
        name: 'Juliana Costa',
        pts: '+8%',
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=3',
        trend: 'up',
      },
      {
        id: 3,
        name: 'Ricardo Melo',
        pts: '+5%',
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1',
        trend: 'down',
      },
      {
        id: 4,
        name: 'Fernando Lima',
        pts: '+2%',
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=5',
        trend: 'same',
      },
      {
        id: 5,
        name: 'Ana Paula Silva',
        pts: '-1%',
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1',
        trend: 'down',
      },
    ],
  },
  monthly: {
    sales: [
      {
        id: 1,
        name: 'Ricardo Melo',
        pts: 12500,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1',
        trend: 'up',
      },
      {
        id: 2,
        name: 'Ana Paula Silva',
        pts: 11200,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1',
        trend: 'down',
      },
      {
        id: 3,
        name: 'Juliana Costa',
        pts: 9800,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=3',
        trend: 'same',
      },
      {
        id: 4,
        name: 'Marcos Gomes',
        pts: 8400,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2',
        trend: 'up',
      },
      {
        id: 5,
        name: 'Fernando Lima',
        pts: 7100,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=5',
        trend: 'down',
      },
    ],
    engagement: [
      {
        id: 1,
        name: 'Ana Paula Silva',
        pts: 850,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1',
        trend: 'same',
      },
      {
        id: 2,
        name: 'Marcos Gomes',
        pts: 720,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2',
        trend: 'up',
      },
      {
        id: 3,
        name: 'Ricardo Melo',
        pts: 690,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1',
        trend: 'down',
      },
      {
        id: 4,
        name: 'Juliana Costa',
        pts: 610,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=3',
        trend: 'up',
      },
      {
        id: 5,
        name: 'Roberto Alves',
        pts: 580,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=4',
        trend: 'same',
      },
    ],
    growth: [
      {
        id: 1,
        name: 'Juliana Costa',
        pts: '+45%',
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=3',
        trend: 'up',
      },
      {
        id: 2,
        name: 'Ricardo Melo',
        pts: '+22%',
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1',
        trend: 'up',
      },
      {
        id: 3,
        name: 'Marcos Gomes',
        pts: '+12%',
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2',
        trend: 'down',
      },
      {
        id: 4,
        name: 'Ana Paula Silva',
        pts: '+5%',
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1',
        trend: 'down',
      },
      {
        id: 5,
        name: 'Fernando Lima',
        pts: '+2%',
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=5',
        trend: 'same',
      },
    ],
  },
  quarterly: {
    sales: [
      {
        id: 1,
        name: 'Ana Paula Silva',
        pts: 35200,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1',
        trend: 'up',
      },
      {
        id: 2,
        name: 'Ricardo Melo',
        pts: 34500,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1',
        trend: 'down',
      },
      {
        id: 3,
        name: 'Juliana Costa',
        pts: 29800,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=3',
        trend: 'up',
      },
      {
        id: 4,
        name: 'Fernando Lima',
        pts: 25400,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=5',
        trend: 'up',
      },
      {
        id: 5,
        name: 'Marcos Gomes',
        pts: 22100,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2',
        trend: 'down',
      },
    ],
    engagement: [
      {
        id: 1,
        name: 'Ana Paula Silva',
        pts: 2450,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1',
        trend: 'same',
      },
      {
        id: 2,
        name: 'Ricardo Melo',
        pts: 2190,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1',
        trend: 'up',
      },
      {
        id: 3,
        name: 'Juliana Costa',
        pts: 1910,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=3',
        trend: 'down',
      },
      {
        id: 4,
        name: 'Marcos Gomes',
        pts: 1820,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2',
        trend: 'up',
      },
      {
        id: 5,
        name: 'Roberto Alves',
        pts: 1680,
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=4',
        trend: 'same',
      },
    ],
    growth: [
      {
        id: 1,
        name: 'Juliana Costa',
        pts: '+85%',
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=3',
        trend: 'up',
      },
      {
        id: 2,
        name: 'Marcos Gomes',
        pts: '+62%',
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2',
        trend: 'up',
      },
      {
        id: 3,
        name: 'Ricardo Melo',
        pts: '+42%',
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1',
        trend: 'down',
      },
      {
        id: 4,
        name: 'Ana Paula Silva',
        pts: '+25%',
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1',
        trend: 'down',
      },
      {
        id: 5,
        name: 'Fernando Lima',
        pts: '+12%',
        avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=5',
        trend: 'same',
      },
    ],
  },
}
export function Leaderboards() {
  const [period, setPeriod] = useState('monthly')
  const [category, setCategory] = useState<string>('sales')

  const currentData = data[period]?.[category] || []

  return (
    <Card className="border-0 shadow-sm bg-white">
      <CardHeader className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4">
        <div>
          <CardTitle>Ranking Global</CardTitle>
          <CardDescription>Veja sua posição entre os corretores.</CardDescription>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap gap-2 w-full sm:w-auto">
          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger className="w-[140px] font-medium bg-slate-50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Semanal</SelectItem>
              <SelectItem value="monthly">Mensal</SelectItem>
              <SelectItem value="quarterly">Trimestral</SelectItem>
            </SelectContent>
          </Select>

          <Select value={category} onValueChange={(val: any) => setCategory(val)}>
            <SelectTrigger className="w-[180px] font-medium bg-slate-50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sales">Vendas Gerais</SelectItem>
              <SelectItem value="engagement">Engajamento (CRM)</SelectItem>
              <SelectItem value="growth">Crescimento (%)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {currentData.length > 0 ? (
            currentData.map((user, idx) => (
              <div
                key={user.id}
                className={`flex items-center gap-3 md:gap-4 p-3 rounded-xl transition-all ${
                  idx === 0
                    ? 'bg-gradient-to-r from-amber-50 to-white border border-amber-200 shadow-sm'
                    : 'bg-white border border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div
                  className={`flex items-center justify-center w-8 font-black text-lg ${
                    idx === 0
                      ? 'text-amber-500'
                      : idx === 1
                        ? 'text-slate-400'
                        : idx === 2
                          ? 'text-orange-400'
                          : 'text-slate-300'
                  }`}
                >
                  {idx === 0 ? <Crown className="w-6 h-6 fill-amber-400" /> : `${idx + 1}º`}
                </div>
                <Avatar
                  className={`w-10 h-10 md:w-12 md:h-12 border-2 shadow-sm ${
                    idx === 0 ? 'border-amber-400' : 'border-white'
                  }`}
                >
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-slate-800 truncate leading-tight">{user.name}</div>
                  {idx === 0 && (
                    <div className="text-[10px] font-bold text-amber-600 uppercase">
                      Líder Atual
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-3 shrink-0 bg-slate-50/50 px-3 py-1.5 rounded-lg border border-slate-100/50">
                  <span className="font-mono font-black text-slate-700 md:text-lg">{user.pts}</span>
                  <div className="w-5 flex justify-center bg-white rounded-full shadow-sm p-0.5">
                    {user.trend === 'up' && (
                      <ArrowUp className="w-3.5 h-3.5 text-emerald-500" strokeWidth={3} />
                    )}
                    {user.trend === 'down' && (
                      <ArrowDown className="w-3.5 h-3.5 text-rose-500" strokeWidth={3} />
                    )}
                    {user.trend === 'same' && (
                      <Minus className="w-3.5 h-3.5 text-slate-400" strokeWidth={3} />
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-slate-500 font-bold bg-slate-50 rounded-xl border border-dashed border-slate-200">
              Nenhum dado disponível no momento.
            </div>
          )}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100">
          <h4 className="text-sm font-black text-slate-800 mb-4 flex items-center gap-2 uppercase tracking-wide">
            <Trophy className="w-4 h-4 text-amber-500" /> Hall of Fame (Mês Anterior)
          </h4>
          <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100/50 rounded-xl shadow-inner">
            <Avatar className="w-12 h-12 border-2 border-indigo-200 shadow-sm">
              <AvatarImage src="https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1" />
              <AvatarFallback>AP</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-black text-base text-indigo-900">Ana Paula Silva</div>
              <div className="text-xs font-bold text-indigo-600 uppercase mt-0.5">
                Campeã de Vendas - Abril 2026
              </div>
            </div>
            <Award className="w-8 h-8 text-indigo-400 opacity-50" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
