import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Flame, Medal, Target } from 'lucide-react'

export function SocialFeed() {
  const achievements = [
    {
      id: 1,
      name: 'João Silva',
      action: 'bateu a meta da semana!',
      time: 'Há 2 horas',
      icon: Target,
      iconColor: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
      avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1',
    },
    {
      id: 2,
      name: 'Maria Souza',
      action: 'alcançou o Nível 8',
      time: 'Há 5 horas',
      icon: Medal,
      iconColor: 'text-amber-500',
      bgColor: 'bg-amber-50',
      avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=2',
    },
    {
      id: 3,
      name: 'Carlos Santos',
      action: 'está em uma sequência de 5 dias!',
      time: 'Há 1 dia',
      icon: Flame,
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-50',
      avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=3',
    },
  ]

  return (
    <Card className="border-slate-100 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">Últimas Conquistas na Equipe</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {achievements.map((item) => (
            <div key={item.id} className="flex items-start gap-4">
              <Avatar className="w-10 h-10 border border-slate-100">
                <AvatarImage src={item.avatar} alt={item.name} />
                <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium text-slate-800">
                  <span className="font-bold">{item.name}</span> {item.action}
                </p>
                <div className="flex items-center gap-2">
                  <div className={`p-1 rounded-md ${item.bgColor}`}>
                    <item.icon className={`w-3 h-3 ${item.iconColor}`} />
                  </div>
                  <span className="text-xs font-semibold text-slate-400">{item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
