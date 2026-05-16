import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Clock, Users, Target, Zap } from 'lucide-react'

export function Challenges() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100/50 shadow-sm col-span-1 lg:col-span-2">
        <CardHeader className="pb-3">
          <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-3">
            <div>
              <CardTitle className="flex items-center gap-2 text-orange-900 font-black text-xl">
                <Zap className="w-6 h-6 text-orange-500 fill-orange-500" /> Flash Goal Semanal
              </CardTitle>
              <CardDescription className="text-orange-800/80 mt-1 font-medium">
                Realize 15 follow-ups de leads inativos para ganhar um bônus de 500 XP e impulsionar
                seu nível.
              </CardDescription>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider bg-white text-orange-700 px-3 py-1.5 rounded-lg shadow-sm border border-orange-200 shrink-0">
              <Clock className="w-4 h-4" /> 2d 14h restantes
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 bg-white/50 p-4 rounded-xl border border-orange-200/50">
            <div className="flex justify-between text-sm font-black text-orange-900">
              <span>9 feitos</span>
              <span>15 meta</span>
            </div>
            <Progress value={60} className="h-3 [&>div]:bg-orange-500 bg-orange-200 shadow-inner" />
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm border-0">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 font-black">
            <Users className="w-5 h-5 text-blue-500" /> Batalha de Equipes
          </CardTitle>
          <CardDescription className="font-medium">
            Equipe Alfa vs Equipe Beta (VGV Acumulado no Mês)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative pt-6 pb-2">
            <div className="absolute top-0 left-0 w-full h-12 flex justify-between items-center px-2 font-black uppercase text-xs tracking-wider">
              <div className="text-blue-600 flex items-center gap-1">Alfa (Você)</div>
              <div className="text-rose-600">Beta</div>
            </div>
            <div className="h-10 bg-slate-100 rounded-xl overflow-hidden flex shadow-inner relative">
              <div
                className="h-full bg-blue-500 flex items-center justify-start px-3 text-white font-mono font-black text-sm relative z-10 transition-all duration-1000"
                style={{ width: '55%' }}
              >
                R$ 5.2M
              </div>
              <div
                className="h-full bg-rose-500 flex items-center justify-end px-3 text-white font-mono font-black text-sm relative z-10 transition-all duration-1000"
                style={{ width: '45%' }}
              >
                R$ 4.3M
              </div>
              <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white z-20 -ml-0.5 opacity-50 transform -skew-x-12"></div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm border-0">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 font-black">
            <Target className="w-5 h-5 text-indigo-500" /> Desafio Pessoal
          </CardTitle>
          <CardDescription className="font-medium">
            Gerado pela IA baseado no seu histórico.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-xl space-y-3">
            <h4 className="font-black text-indigo-900 text-sm">Mestre da Conversão</h4>
            <p className="text-xs font-medium text-indigo-700/90 leading-relaxed">
              Aumente sua taxa de conversão em 2% este mês para receber o certificado especial e
              1000 XP extras.
            </p>
            <div className="space-y-2 mt-4 bg-white/60 p-3 rounded-lg border border-indigo-100/50">
              <div className="flex justify-between text-xs font-black text-indigo-900">
                <span>Atual: 14%</span>
                <span>Meta: 16%</span>
              </div>
              <Progress value={20} className="h-2.5 [&>div]:bg-indigo-500 bg-indigo-200" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
