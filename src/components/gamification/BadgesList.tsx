import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Award, Zap, Target, UserCheck, Database, BrainCircuit } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const badges = [
  {
    id: 1,
    title: 'Vendedor do Mês',
    description: 'Maior VGV alcançado em um único mês na equipe.',
    icon: Award,
    color: 'text-amber-500',
    bg: 'bg-amber-100',
    earned: true,
    date: 'Mai 2026',
  },
  {
    id: 2,
    title: 'Sequência 7 dias',
    description: 'Atividade e logins contínuos por 7 dias seguidos.',
    icon: Zap,
    color: 'text-orange-500',
    bg: 'bg-orange-100',
    earned: true,
    date: '12 Mai 2026',
  },
  {
    id: 3,
    title: 'Meta Batida',
    description: 'Alcançou 100% da meta de vendas do trimestre.',
    icon: Target,
    color: 'text-emerald-500',
    bg: 'bg-emerald-100',
    earned: true,
    date: 'Abr 2026',
  },
  {
    id: 4,
    title: 'Lead Master',
    description: 'Converteu 20 leads de alta prioridade gerados pelo motor.',
    icon: UserCheck,
    color: 'text-blue-500',
    bg: 'bg-blue-100',
    earned: false,
    progress: 80,
  },
  {
    id: 5,
    title: 'CRM Expert',
    description: 'Manteve 100% dos perfis de leads do CRM atualizados.',
    icon: Database,
    color: 'text-indigo-500',
    bg: 'bg-indigo-100',
    earned: false,
    progress: 65,
  },
  {
    id: 6,
    title: 'Quiz Champion',
    description: 'Acertou 100% no treinamento e quiz de técnicas de vendas.',
    icon: BrainCircuit,
    color: 'text-purple-500',
    bg: 'bg-purple-100',
    earned: false,
    progress: 10,
  },
]

export function BadgesList() {
  return (
    <Card className="shadow-sm border-0 bg-white">
      <CardHeader className="pb-4">
        <CardTitle>Suas Conquistas</CardTitle>
        <CardDescription>Colecione medalhas exclusivas e mostre sua expertise.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {badges.map((badge) => {
            const Icon = badge.icon
            return (
              <div
                key={badge.id}
                className={`flex flex-col items-center text-center p-4 rounded-2xl border-2 transition-all duration-300 ${
                  badge.earned
                    ? 'border-slate-100 bg-white hover:border-amber-200 hover:shadow-md'
                    : 'border-dashed border-slate-200 bg-slate-50 opacity-80 hover:opacity-100 grayscale hover:grayscale-0'
                }`}
              >
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 shadow-sm ${badge.bg}`}
                >
                  <Icon className={`w-7 h-7 md:w-8 md:h-8 ${badge.color}`} />
                </div>
                <h3 className="font-bold text-sm text-slate-800 leading-tight mb-1">
                  {badge.title}
                </h3>
                <p className="text-[10px] text-slate-500 mb-3 line-clamp-2 min-h-[30px] px-1 font-medium">
                  {badge.description}
                </p>

                {badge.earned ? (
                  <Badge
                    variant="secondary"
                    className="mt-auto text-[10px] bg-slate-100 text-slate-600 font-bold w-full justify-center shadow-none"
                  >
                    Adquirido em {badge.date}
                  </Badge>
                ) : (
                  <div className="w-full space-y-1.5 mt-auto bg-white p-2 rounded-lg border border-slate-100">
                    <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-wider">
                      <span>Progresso</span>
                      <span>{badge.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden shadow-inner">
                      <div
                        className="bg-slate-400 h-full rounded-full transition-all duration-1000"
                        style={{ width: `${badge.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
