import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Target } from 'lucide-react'

export function ChallengesTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="border-0 shadow-sm rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Target className="w-5 h-5 text-rose-500" /> Desafios Ativos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-sm transition-all">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-bold text-slate-800">Flash Goal: Fim de Semana</h4>
                <p className="text-xs font-medium text-slate-500 mt-1">
                  Agende 5 visitas qualificadas até sexta-feira.
                </p>
              </div>
              <span className="bg-rose-100 text-rose-600 text-[10px] uppercase font-black px-2 py-1 rounded-md shrink-0">
                +500 XP
              </span>
            </div>
            <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden shadow-inner">
              <div className="bg-rose-500 h-full w-[60%] transition-all duration-1000" />
            </div>
            <div className="text-xs text-right mt-2 font-bold text-slate-400">3/5 visitas</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
