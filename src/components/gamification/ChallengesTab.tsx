import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Clock, Zap, Swords, Target, CheckCircle2 } from 'lucide-react'

export function ChallengesTab() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="border-orange-200 shadow-sm relative overflow-hidden bg-gradient-to-br from-white to-orange-50/50">
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full -mr-16 -mt-16 blur-3xl" />
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-orange-600 text-xl font-black">
              <Zap className="w-6 h-6 fill-orange-600/20" /> Flash Goal Semanal
            </CardTitle>
            <CardDescription className="font-medium text-slate-500">
              Recompensa extra por tempo limitado
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <h4 className="font-black text-slate-800 text-xl mb-1">Feche 2 Vendas</h4>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Complete o objetivo até sexta-feira para ganhar{' '}
                <strong className="text-orange-600">500 XP extras</strong> e o distintivo exclusivo
                Relâmpago.
              </p>

              <div className="bg-white p-4 rounded-xl border border-orange-100 shadow-sm mb-4 space-y-3">
                <div className="flex justify-between items-center text-sm font-black">
                  <span className="text-orange-600 text-lg">1 / 2 Vendas</span>
                  <span className="flex items-center bg-orange-100 text-orange-700 px-3 py-1 rounded-full gap-1.5">
                    <Clock className="w-4 h-4" /> 48h restantes
                  </span>
                </div>
                <Progress
                  value={50}
                  className="h-2.5 bg-orange-100 [&>div]:bg-orange-500 shadow-inner"
                />
              </div>
            </div>
            <Button className="w-full bg-orange-600 hover:bg-orange-700 font-bold h-12 text-md shadow-md shadow-orange-600/20">
              Ver Detalhes do Desafio
            </Button>
          </CardContent>
        </Card>

        <Card className="border-blue-200 shadow-sm bg-gradient-to-br from-white to-blue-50/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-3xl" />
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-blue-700 text-xl font-black">
              <Swords className="w-6 h-6" /> Batalha de Equipes
            </CardTitle>
            <CardDescription className="font-medium text-slate-500">
              Norte vs Sul - VGV Acumulado Mensal
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-8 bg-white p-5 rounded-xl border border-blue-100 shadow-sm">
              <div className="space-y-3 relative">
                <div className="flex justify-between items-end text-sm font-black">
                  <span className="text-blue-700 flex items-center gap-2 text-base">
                    Equipe Norte{' '}
                    <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full uppercase">
                      Sua Equipe
                    </span>
                  </span>
                  <span className="text-lg text-blue-800">14.5M</span>
                </div>
                <Progress
                  value={65}
                  className="h-3.5 bg-blue-100 [&>div]:bg-blue-600 shadow-inner"
                />
              </div>

              <div className="space-y-3 relative">
                <div className="flex justify-between items-end text-sm font-black">
                  <span className="text-slate-600 text-base">Equipe Sul</span>
                  <span className="text-lg text-slate-700">11.2M</span>
                </div>
                <Progress
                  value={45}
                  className="h-3.5 bg-slate-100 [&>div]:bg-slate-500 shadow-inner"
                />
              </div>
            </div>

            <p className="text-sm text-center font-bold text-slate-600 bg-blue-50/50 py-3 rounded-lg border border-blue-100">
              A equipe vencedora ganha <strong className="text-blue-700">+2000 XP</strong> para cada
              corretor!
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl font-black text-slate-800">
            <Target className="w-6 h-6 text-indigo-500" /> Desafios Pessoais
          </CardTitle>
          <CardDescription className="font-medium">
            Missões recomendadas baseadas na sua performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-indigo-100 bg-indigo-50/50 flex items-start sm:items-center gap-4 hover:bg-indigo-50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-indigo-100 text-indigo-700 flex flex-col items-center justify-center shrink-0 shadow-sm">
                <span className="text-[10px] font-bold uppercase opacity-80 leading-none">XP</span>
                <span className="font-black text-lg leading-none mt-0.5">+50</span>
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-slate-800 leading-tight">
                  Atualize 5 Leads Inativos
                </h5>
                <div className="flex items-center gap-3 mt-2">
                  <Progress
                    value={40}
                    className="h-2 flex-1 bg-indigo-200/50 [&>div]:bg-indigo-600"
                  />
                  <span className="text-xs font-bold text-indigo-700">2/5</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/50 flex items-start sm:items-center gap-4 hover:bg-emerald-50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex flex-col items-center justify-center shrink-0 shadow-sm">
                <span className="text-[10px] font-bold uppercase opacity-80 leading-none">XP</span>
                <span className="font-black text-lg leading-none mt-0.5">+100</span>
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-slate-800 leading-tight">
                  Conclua o Treinamento "Fechamento"
                </h5>
                <div className="flex items-center gap-2 mt-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-300" />
                  <span className="text-xs font-bold text-slate-500">Não iniciado</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
