import { Trophy, Medal } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function Leaderboards() {
  const mockRanking = [
    {
      id: 1,
      name: 'Ana Paula Silva',
      points: 8450,
      sales: 42,
      avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=2',
    },
    {
      id: 2,
      name: 'Ricardo Mendes',
      points: 7200,
      sales: 38,
      avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1',
    },
    {
      id: 3,
      name: 'Carlos Eduardo',
      points: 6500,
      sales: 31,
      avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=3',
    },
    {
      id: 4,
      name: 'Mariana Costa',
      points: 5900,
      sales: 28,
      avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=4',
    },
    {
      id: 5,
      name: 'Roberto Alves',
      points: 4100,
      sales: 20,
      avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=5',
    },
  ]

  return (
    <Card className="border-0 shadow-sm rounded-2xl">
      <CardHeader>
        <CardTitle className="text-xl font-black text-slate-800 flex items-center gap-2">
          <Trophy className="w-6 h-6 text-amber-500" />
          Ranking da Semana
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockRanking.map((broker, index) => (
            <div
              key={broker.id}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
            >
              <div className="w-8 h-8 flex items-center justify-center font-black text-lg shrink-0">
                {index === 0 ? (
                  <Trophy className="w-6 h-6 text-amber-500" />
                ) : index === 1 ? (
                  <Medal className="w-6 h-6 text-slate-400" />
                ) : index === 2 ? (
                  <Medal className="w-6 h-6 text-amber-700" />
                ) : (
                  <span className="text-slate-400">{index + 1}º</span>
                )}
              </div>
              <Avatar className="w-10 h-10 border-2 border-white shadow-sm shrink-0">
                <AvatarImage src={broker.avatar} />
                <AvatarFallback>{broker.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-slate-800 truncate">{broker.name}</div>
                <div className="text-sm font-medium text-slate-500">{broker.sales} vendas</div>
              </div>
              <div className="text-right shrink-0">
                <div className="font-black text-blue-600">{broker.points} pts</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
