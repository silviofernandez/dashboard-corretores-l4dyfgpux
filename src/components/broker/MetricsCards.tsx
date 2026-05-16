import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Target, TrendingUp, Users, DollarSign } from 'lucide-react'

export function MetricsCards() {
  const metrics = [
    {
      title: 'Vendas no Mês',
      value: 'R$ 45.231,89',
      description: '+20.1% em relação ao mês passado',
      icon: DollarSign,
    },
    {
      title: 'Contratos Fechados',
      value: '12',
      description: '+2 em relação ao mês passado',
      icon: Target,
    },
    {
      title: 'Novos Clientes',
      value: '34',
      description: '+15.5% em relação ao mês passado',
      icon: Users,
    },
    {
      title: 'Taxa de Conversão',
      value: '18.2%',
      description: '+4.3% em relação ao mês passado',
      icon: TrendingUp,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {metrics.map((metric, i) => (
        <Card key={i} className="border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-semibold text-slate-500">{metric.title}</CardTitle>
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
              <metric.icon className="w-4 h-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-slate-800">{metric.value}</div>
            <p className="text-xs font-medium text-emerald-600 mt-1">{metric.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
