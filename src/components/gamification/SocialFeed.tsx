import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Award, Star, ThumbsUp, MessageSquare, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'

const feed = [
  {
    id: 1,
    user: {
      name: 'Ana Paula Silva',
      avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1',
    },
    action: 'conquistou a medalha',
    target: 'Vendedor do Mês',
    icon: Award,
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-100',
    time: 'Há 2 horas',
    likes: 12,
  },
  {
    id: 2,
    user: {
      name: 'Marcos Gomes',
      avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2',
    },
    action: 'subiu para o Nível',
    target: '35 - Especialista',
    icon: Star,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-100',
    time: 'Há 5 horas',
    likes: 8,
  },
  {
    id: 3,
    user: {
      name: 'Juliana Costa',
      avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=3',
    },
    action: 'completou o desafio',
    target: 'Flash Goal Semanal',
    icon: Target,
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-100',
    time: 'Ontem',
    likes: 24,
  },
]

export function SocialFeed() {
  return (
    <div className="space-y-4">
      {feed.map((item) => {
        const Icon = item.icon
        return (
          <Card key={item.id} className="overflow-hidden shadow-sm border-0 bg-white">
            <CardContent className="p-4 sm:p-5">
              <div className="flex items-start gap-3 sm:gap-4">
                <Avatar className="w-12 h-12 border-2 border-slate-100 shadow-sm shrink-0">
                  <AvatarImage src={item.user.avatar} />
                  <AvatarFallback>{item.user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="text-sm sm:text-base text-slate-700 leading-snug">
                    <span className="font-black text-slate-900">{item.user.name}</span>{' '}
                    <span className="font-medium">{item.action}</span>{' '}
                    <span className="font-black text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded-md inline-block mt-1 sm:mt-0">
                      {item.target}
                    </span>
                    !
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <div className={`p-1 rounded-full ${item.iconBg}`}>
                      <Icon className={`w-3.5 h-3.5 ${item.iconColor}`} strokeWidth={3} />
                    </div>
                    {item.time}
                  </div>

                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-100">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 gap-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 px-3 font-bold rounded-lg"
                    >
                      <ThumbsUp className="w-4 h-4" /> {item.likes}{' '}
                      <span className="hidden sm:inline">Curtir</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 gap-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 px-3 font-bold rounded-lg"
                    >
                      <MessageSquare className="w-4 h-4" />{' '}
                      <span className="hidden sm:inline">Comentar</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
