import { Card, CardContent } from '@/components/ui/card'
import { Trophy } from 'lucide-react'

export function RankingsTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="border-0 shadow-sm rounded-2xl">
        <CardContent className="p-8 flex flex-col items-center justify-center text-center">
          <Trophy className="w-16 h-16 text-amber-400 mb-4 drop-shadow-sm" />
          <h3 className="text-xl font-black text-slate-800">Ranking da Equipe</h3>
          <p className="text-slate-500 font-medium max-w-sm mt-2">
            Acesse a aba Ranking no menu principal para ver sua posição completa e detalhada entre
            os corretores.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
