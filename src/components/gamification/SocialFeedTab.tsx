import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Heart, MessageCircle, Award, Target, Flame } from 'lucide-react'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const STORIES = [
  {
    id: 1,
    name: 'Ana P.',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1',
    hasUnread: true,
  },
  {
    id: 2,
    name: 'Marcos G.',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2',
    hasUnread: true,
  },
  {
    id: 3,
    name: 'Dicas Vendas',
    avatar: 'https://img.usecurling.com/i?q=lightbulb&color=yellow&shape=fill',
    hasUnread: false,
  },
  {
    id: 4,
    name: 'Eventos',
    avatar: 'https://img.usecurling.com/i?q=party&color=rose&shape=fill',
    hasUnread: false,
  },
]

const FEED = [
  {
    id: 1,
    user: 'Ana Paula Silva',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1',
    action: 'desbloqueou o distintivo',
    target: 'Vendedor do Mês',
    time: 'Há 2 horas',
    likes: 12,
    icon: Award,
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
  },
  {
    id: 2,
    user: 'Marcos Gomes',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2',
    action: 'alcançou um novo marco',
    target: 'Nível 20',
    time: 'Há 5 horas',
    likes: 8,
    icon: Target,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
  },
  {
    id: 3,
    user: 'Equipe Norte',
    avatar: 'https://img.usecurling.com/i?q=compass&color=blue&shape=fill',
    action: 'conquistou a liderança na',
    target: 'Batalha Semanal',
    time: 'Ontem',
    likes: 45,
    icon: Flame,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
]

export function SocialFeedTab() {
  return (
    <div className="space-y-8 animate-fade-in-up max-w-2xl mx-auto">
      <div className="space-y-3">
        <h3 className="font-black text-sm text-slate-400 uppercase tracking-widest px-2">
          Histórias & Dicas
        </h3>
        <ScrollArea className="w-full whitespace-nowrap pb-4">
          <div className="flex w-max space-x-5 px-2">
            {STORIES.map((story) => (
              <div key={story.id} className="flex flex-col items-center gap-2 cursor-pointer group">
                <div
                  className={`p-1 rounded-full ${story.hasUnread ? 'bg-gradient-to-tr from-rose-500 via-fuchsia-500 to-indigo-500' : 'bg-slate-200'} transition-transform group-hover:scale-105`}
                >
                  <Avatar className="w-16 h-16 sm:w-20 sm:h-20 border-[3px] border-white">
                    <AvatarImage src={story.avatar} className="object-cover bg-white" />
                  </Avatar>
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-700">{story.name}</span>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden sm:flex" />
        </ScrollArea>
      </div>

      <div className="space-y-4">
        <h3 className="font-black text-sm text-slate-400 uppercase tracking-widest px-2">
          Atividade Recente
        </h3>
        {FEED.map((item) => (
          <Card
            key={item.id}
            className="shadow-sm border-slate-100 hover:shadow-md transition-shadow"
          >
            <CardContent className="p-5">
              <div className="flex gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={item.avatar} className="object-cover bg-slate-50" />
                  <AvatarFallback className="font-bold">{item.user.substring(0, 2)}</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="text-sm md:text-base leading-snug">
                    <span className="font-bold text-slate-800">{item.user}</span>{' '}
                    <span className="text-slate-500 font-medium">{item.action}</span>{' '}
                    <span className={`font-black ${item.color}`}>{item.target}</span>
                  </div>
                  <p className="text-xs font-bold text-slate-400 mt-1">{item.time}</p>

                  <div className="flex gap-6 mt-5 text-slate-500">
                    <button className="flex items-center gap-1.5 text-xs font-bold hover:text-rose-500 transition-colors group">
                      <Heart className="w-4 h-4 group-hover:fill-rose-500 transition-colors" />{' '}
                      {item.likes}
                    </button>
                    <button className="flex items-center gap-1.5 text-xs font-bold hover:text-blue-500 transition-colors">
                      <MessageCircle className="w-4 h-4" /> Comentar
                    </button>
                  </div>
                </div>

                <div
                  className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center shrink-0 hidden sm:flex`}
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
