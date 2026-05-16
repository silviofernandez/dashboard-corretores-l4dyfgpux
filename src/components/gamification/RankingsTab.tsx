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
import { Trophy, TrendingUp, Medal } from 'lucide-react'

const LEADERBOARD = [
  {
    rank: 1,
    name: 'Ricardo Machado',
    score: 14500,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1',
  },
  {
    rank: 2,
    name: 'Ana Paula Silva',
    score: 13200,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1',
  },
  {
    rank: 3,
    name: 'Marcos Gomes',
    score: 11800,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2',
  },
  {
    rank: 4,
    name: 'Juliana Costa',
    score: 9500,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=3',
  },
  {
    rank: 5,
    name: 'Carlos Eduardo',
    score: 8400,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=4',
  },
]

export function RankingsTab() {
  const [period, setPeriod] = useState('monthly')
  const [category, setCategory] = useState('sales')

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <Select value={period} onValueChange={setPeriod}>
          <SelectTrigger className="w-full sm:w-[180px] bg-slate-50">
            <SelectValue placeholder="Período" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="weekly">Semanal</SelectItem>
            <SelectItem value="monthly">Mensal</SelectItem>
            <SelectItem value="quarterly">Trimestral</SelectItem>
          </SelectContent>
        </Select>

        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full sm:w-[220px] bg-slate-50">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sales">Vendas Gerais</SelectItem>
            <SelectItem value="engagement">Engajamento (CRM & Treino)</SelectItem>
            <SelectItem value="growth">Crescimento de Performance</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl">Placar de Líderes</CardTitle>
            <CardDescription>
              Sua posição atual na equipe para o período selecionado.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {LEADERBOARD.map((user) => (
              <div
                key={user.rank}
                className={`flex items-center gap-4 p-3.5 rounded-xl border transition-all ${
                  user.rank === 1
                    ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200 shadow-sm'
                    : 'bg-white border-slate-100 hover:border-slate-200 hover:shadow-sm'
                }`}
              >
                <div
                  className={`w-10 font-black text-center text-lg ${user.rank <= 3 ? 'text-amber-500' : 'text-slate-400'}`}
                >
                  {user.rank}º
                </div>
                <Avatar className={user.rank === 1 ? 'ring-2 ring-amber-400 ring-offset-2' : ''}>
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback className="bg-slate-100 font-bold text-slate-600">
                    {user.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800">{user.name}</h4>
                  {user.rank === 1 && (
                    <span className="text-[10px] font-black uppercase text-amber-600 tracking-wider">
                      Líder Atual
                    </span>
                  )}
                </div>
                <div className="font-mono font-black text-lg text-indigo-600">
                  {user.score.toLocaleString()}{' '}
                  <span className="text-xs font-medium text-slate-400">pts</span>
                </div>
                {user.rank === 1 && (
                  <Trophy className="w-6 h-6 text-amber-500 ml-2 hidden sm:block drop-shadow-sm" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white border-0 shadow-lg relative overflow-hidden h-fit">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl -mr-10 -mt-10" />
          <CardHeader className="relative z-10">
            <CardTitle className="flex items-center gap-2 text-amber-400 font-black text-xl">
              <Medal className="w-6 h-6" /> Hall da Fama
            </CardTitle>
            <CardDescription className="text-slate-400 font-medium">
              Os melhores da história.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 relative z-10">
            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-md border border-white/10 hover:bg-white/15 transition-colors">
              <p className="text-xs text-amber-200/80 font-bold uppercase tracking-widest mb-3">
                Campeão Mês Passado
              </p>
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 ring-2 ring-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                  <AvatarImage src="https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1" />
                </Avatar>
                <div>
                  <p className="font-bold text-white text-lg">Ana Paula Silva</p>
                  <p className="text-sm text-amber-400 font-mono font-bold mt-0.5">32.000 pts</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white/5 rounded-xl backdrop-blur-md border border-white/5 hover:bg-white/10 transition-colors">
              <p className="text-xs text-emerald-200/80 font-bold uppercase tracking-widest mb-3">
                Maior Evolução
              </p>
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 ring-2 ring-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                  <AvatarImage src="https://img.usecurling.com/ppl/thumbnail?gender=male&seed=4" />
                </Avatar>
                <div>
                  <p className="font-bold text-white text-lg">Carlos Eduardo</p>
                  <p className="text-sm text-emerald-400 font-bold mt-0.5 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" /> +145% crescimento
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
