import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Heart, MessageCircle } from 'lucide-react'

export function SocialFeed() {
  return (
    <div className="space-y-4">
      <Card className="border-0 shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
        <CardContent className="p-0">
          <div className="p-4 flex gap-3">
            <Avatar className="w-10 h-10 border border-slate-100">
              <AvatarImage src="https://img.usecurling.com/ppl/thumbnail?gender=male&seed=3" />
              <AvatarFallback>CE</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                <span className="font-bold text-slate-800">Carlos Eduardo</span>
                <span className="text-xs font-medium text-slate-400">há 2 horas</span>
              </div>
              <p className="text-slate-600 mt-1 text-sm leading-relaxed">
                Acabei de desbloquear a conquista{' '}
                <strong className="text-blue-600">Vendedor do Mês</strong>! Muito orgulho do
                trabalho dessa equipe! 🚀
              </p>
              <div className="flex gap-4 mt-3 pt-2 border-t border-slate-50">
                <button className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-red-500 transition-colors">
                  <Heart className="w-4 h-4" /> 12
                </button>
                <button className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-blue-500 transition-colors">
                  <MessageCircle className="w-4 h-4" /> 3
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
