import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Clock,
  FileWarning,
  TrendingDown,
  CheckCircle2,
  ChevronRight,
  AlertTriangle,
  AlertCircle,
} from 'lucide-react'
import { cn } from '@/lib/utils'

type AlertType = 'critical' | 'warning' | 'positive'

interface Alert {
  id: string
  title: string
  description: string
  type: AlertType
  broker: string
  metric: string
  timestamp: string
  nextStep: string
  icon: any
}

const mockAlerts: Alert[] = [
  {
    id: '1',
    title: 'Aprovação de Documento Pendente',
    description: 'Venda de alto valor aguardando aprovação de documentação há mais de 24h.',
    type: 'critical',
    broker: 'Ricardo Mendes',
    metric: 'Venda VGV R$ 2.500.000',
    timestamp: 'Hoje, 09:30',
    nextStep: 'Revisar pasta de documentos do cliente e aprovar contrato imediatamente.',
    icon: FileWarning,
  },
  {
    id: '2',
    title: 'Lead sem Interação',
    description: 'Lead de alto potencial sem contato há mais de 48 horas.',
    type: 'warning',
    broker: 'Marcos Gomes',
    metric: 'Tempo de Resposta: 52 horas',
    timestamp: 'Ontem, 14:15',
    nextStep: 'Cobrar o corretor para realizar contato ou redistribuir o lead.',
    icon: Clock,
  },
  {
    id: '3',
    title: 'Conversão Abaixo da Expectativa',
    description: 'Corretor apresentou queda drástica na taxa de conversão nesta semana.',
    type: 'critical',
    broker: 'Carlos Eduardo',
    metric: 'Taxa de Conversão: 10% (Meta 25%)',
    timestamp: 'Ontem, 18:00',
    nextStep: 'Agendar reunião de feedback e alinhar treinamento focado em fechamento.',
    icon: TrendingDown,
  },
  {
    id: '4',
    title: 'Documentação Rejeitada',
    description: 'Pasta de crédito reprovada por inconsistência de dados.',
    type: 'warning',
    broker: 'Ana Paula Silva',
    metric: 'Documentos Inconsistentes: Comprovante de Renda',
    timestamp: 'Hoje, 11:45',
    nextStep: 'Orientar a corretora a solicitar novo comprovante atualizado ao cliente.',
    icon: AlertTriangle,
  },
  {
    id: '5',
    title: 'Reunião Realizada sem Reporte',
    description: 'Status de follow-up da reunião pendente de atualização no CRM.',
    type: 'positive',
    broker: 'Rafael Oliveira',
    metric: 'Status de Follow-up: Concluído (Resolvido)',
    timestamp: 'Hoje, 10:00',
    nextStep: 'Ação resolvida recentemente. Nenhuma ação adicional necessária no momento.',
    icon: CheckCircle2,
  },
]

export default function AdminAlerts() {
  const [, setSelectedAlert] = useState<Alert | null>(null)

  const getTypeStyles = (type: AlertType) => {
    switch (type) {
      case 'critical':
        return 'bg-red-50 text-red-900 border-red-200 hover:bg-red-100 hover:border-red-300'
      case 'warning':
        return 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100 hover:border-amber-300'
      case 'positive':
        return 'bg-emerald-50 text-emerald-900 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300'
      default:
        return 'bg-slate-50 text-slate-900 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
    }
  }

  const getIconColor = (type: AlertType) => {
    switch (type) {
      case 'critical':
        return 'text-red-600'
      case 'warning':
        return 'text-amber-600'
      case 'positive':
        return 'text-emerald-600'
      default:
        return 'text-slate-600'
    }
  }

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            5 Ações que Requerem Atenção
          </h2>
          <p className="text-slate-500 mt-1">
            Prioridades críticas que demandam intervenção imediata da gestão.
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {mockAlerts.map((alert) => (
          <Sheet key={alert.id}>
            <SheetTrigger asChild>
              <Card
                className={cn(
                  'cursor-pointer transition-all duration-200 border-l-4 shadow-sm',
                  getTypeStyles(alert.type),
                )}
                onClick={() => setSelectedAlert(alert)}
              >
                <CardContent className="p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className={cn(
                        'p-2.5 rounded-full bg-white/80 shadow-sm shrink-0',
                        getIconColor(alert.type),
                      )}
                    >
                      <alert.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg">{alert.title}</h3>
                      <p className="text-sm opacity-90 line-clamp-1 mt-0.5">{alert.description}</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex flex-col items-end gap-1.5 shrink-0">
                    <span className="text-xs font-medium opacity-75 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {alert.timestamp}
                    </span>
                    <Badge
                      variant="outline"
                      className={cn(
                        'border-transparent font-medium',
                        alert.type === 'critical'
                          ? 'bg-red-100 text-red-700'
                          : alert.type === 'warning'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-emerald-100 text-emerald-700',
                      )}
                    >
                      {alert.broker}
                    </Badge>
                  </div>
                  <ChevronRight className="w-5 h-5 opacity-40 shrink-0" />
                </CardContent>
              </Card>
            </SheetTrigger>

            <SheetContent className="w-full sm:max-w-md overflow-y-auto">
              <SheetHeader className="mb-6">
                <div
                  className={cn(
                    'inline-flex p-3.5 rounded-full w-fit mb-4',
                    alert.type === 'critical'
                      ? 'bg-red-100 text-red-600'
                      : alert.type === 'warning'
                        ? 'bg-amber-100 text-amber-600'
                        : 'bg-emerald-100 text-emerald-600',
                  )}
                >
                  <alert.icon className="w-8 h-8" />
                </div>
                <SheetTitle className="text-2xl">{alert.title}</SheetTitle>
                <SheetDescription className="text-base mt-2">{alert.description}</SheetDescription>
              </SheetHeader>

              <div className="space-y-6">
                <div className="space-y-1.5 border-b pb-4">
                  <h4 className="text-sm font-medium text-slate-500">Corretor Envolvido</h4>
                  <p className="text-lg font-semibold">{alert.broker}</p>
                </div>

                <div className="space-y-1.5 border-b pb-4">
                  <h4 className="text-sm font-medium text-slate-500">Métrica / Gatilho</h4>
                  <p className="text-base font-medium">{alert.metric}</p>
                </div>

                <div className="space-y-1.5 border-b pb-4">
                  <h4 className="text-sm font-medium text-slate-500">Data e Hora do Evento</h4>
                  <p className="text-base">{alert.timestamp}</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mt-8">
                  <h4 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    Próximo Passo Sugerido
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{alert.nextStep}</p>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row gap-3 w-full">
                  <Button
                    className="flex-1"
                    variant={alert.type === 'positive' ? 'outline' : 'default'}
                  >
                    {alert.type === 'positive' ? 'Ver Histórico' : 'Resolver Ação'}
                  </Button>
                  <Button variant="secondary" className="flex-1">
                    Enviar Mensagem
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    </div>
  )
}
