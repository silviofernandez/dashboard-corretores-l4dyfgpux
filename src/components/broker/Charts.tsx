import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { BarChart, Activity } from 'lucide-react'

export function Charts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
      <Card className="border-0 shadow-sm rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <BarChart className="w-5 h-5 text-blue-500" />
            Vendas por Mês
          </CardTitle>
        </CardHeader>
        <CardContent className="h-64 flex items-center justify-center bg-slate-50 rounded-xl m-4 border border-slate-100 border-dashed">
          <p className="text-slate-400 font-medium text-sm text-center px-4">
            Gráfico de desempenho será exibido aqui quando conectado ao banco de dados.
          </p>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-500" />
            Atividade Recente
          </CardTitle>
        </CardHeader>
        <CardContent className="h-64 flex items-center justify-center bg-slate-50 rounded-xl m-4 border border-slate-100 border-dashed">
          <p className="text-slate-400 font-medium text-sm text-center px-4">
            O feed de atividades recentes está sendo preparado.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
