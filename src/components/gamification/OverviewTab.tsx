import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Award, Flame, Target, Users, Database, BrainCircuit, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const BADGES = [
  {
    id: 1,
    name: 'Vendedor do Mês',
    icon: Award,
    desc: 'Maior VGV em Janeiro',
    color: 'text-yellow-600',
    bg: 'bg-yellow-100',
  },
  {
    id: 2,
    name: 'Sequência 7 dias',
    icon: Flame,
    desc: 'Ativo por 7 dias seguidos',
    color: 'text-orange-600',
    bg: 'bg-orange-100',
  },
  {
    id: 3,
    name: 'Meta Batida',
    icon: Target,
    desc: 'Atingiu 100% da meta',
    color: 'text-emerald-600',
    bg: 'bg-emerald-100',
  },
  {
    id: 4,
    name: 'Lead Master',
    icon: Users,
    desc: 'Converteu 50 leads',
    color: 'text-blue-600',
    bg: 'bg-blue-100',
  },
  {
    id: 5,
    name: 'CRM Expert',
    icon: Database,
    desc: '100% de preenchimento',
    color: 'text-purple-600',
    bg: 'bg-purple-100',
  },
  {
    id: 6,
    name: 'Quiz Champion',
    icon: BrainCircuit,
    desc: 'Acertou tudo no quiz',
    color: 'text-pink-600',
    bg: 'bg-pink-100',
  },
]

export function OverviewTab() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <Card className="bg-gradient-to-br from-indigo-500 to-indigo-700 text-white border-0 shadow-md overflow-hidden relative">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="relative w-28 h-28 shrink-0 flex items-center justify-center bg-white/20 rounded-full border-4 border-white/40 shadow-xl backdrop-blur-sm">
              <span className="text-4xl font-black drop-shadow-sm">15</span>
              <div className="absolute -bottom-3 bg-white text-indigo-700 text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                Nível
              </div>
            </div>

            <div className="flex-1 w-full text-center md:text-left space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
                <div>
                  <h3 className="text-2xl font-black">Ricardo Machado</h3>
                  <p className="text-indigo-200 font-medium mt-1 flex items-center justify-center md:justify-start gap-1">
                    <Award className="w-4 h-4" /> Especialista Ouro
                  </p>
                </div>
                <div className="text-right hidden md:block bg-black/20 px-4 py-2 rounded-xl backdrop-blur-sm">
                  <p className="text-xl font-black text-white">
                    14.500 <span className="text-sm font-medium opacity-80">XP</span>
                  </p>
                  <p className="text-xs text-indigo-200 mt-1">Faltam 500 XP para Nível 16</p>
                </div>
              </div>

              <div className="space-y-2">
                <Progress value={90} className="h-3 bg-white/20 [&>div]:bg-white shadow-inner" />
                <div className="flex justify-between text-xs font-bold text-indigo-200 md:hidden">
                  <span>14.500 XP</span>
                  <span>15.000 XP</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <div>
            <CardTitle>Meus Distintivos</CardTitle>
            <CardDescription>Conquistas desbloqueadas na sua jornada.</CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex gap-2 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 border-indigo-200"
          >
            <Download className="w-4 h-4" /> Certificado
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {BADGES.map((badge) => (
              <div
                key={badge.id}
                className="flex flex-col items-center text-center space-y-3 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-all cursor-default group hover:shadow-md hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${badge.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                >
                  <badge.icon className={`w-7 h-7 ${badge.color}`} />
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-800 leading-tight mb-1">
                    {badge.name}
                  </p>
                  <p className="text-[10px] text-slate-500 font-medium">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
