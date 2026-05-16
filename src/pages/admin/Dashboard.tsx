import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import { AlertCircle, CheckCircle2, TrendingUp, Users, DollarSign } from 'lucide-react'

const data = [
  { month: 'Jan', sales: 4000000 },
  { month: 'Fev', sales: 3000000 },
  { month: 'Mar', sales: 5000000 },
  { month: 'Abr', sales: 4500000 },
  { month: 'Mai', sales: 6000000 },
  { month: 'Jun', sales: 8000000 },
]

export default function AdminDashboard() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Dashboard Executivo</h2>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-blue-50 to-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Vendas Totais</CardTitle>
            <DollarSign className="w-4 h-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 30.500.000</div>
            <p className="text-xs text-slate-500 mt-1 flex items-center">
              <TrendingUp className="w-3 h-3 text-emerald-500 mr-1" />
              +12% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-indigo-50 to-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Média da Equipe</CardTitle>
            <Users className="w-4 h-4 text-indigo-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 3.050.000</div>
            <p className="text-xs text-slate-500 mt-1">10 corretores ativos</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-white shadow-sm sm:col-span-2 md:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Alertas Pendentes</CardTitle>
            <AlertCircle className="w-4 h-4 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5 Ações</div>
            <p className="text-xs text-slate-500 mt-1">Requerem atenção imediata</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
        <Card className="lg:col-span-4 shadow-sm">
          <CardHeader>
            <CardTitle>Evolução de Vendas</CardTitle>
            <CardDescription>Performance mensal de VGV de toda a equipe</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] md:h-[300px]">
              <ChartContainer
                config={{ sales: { label: 'Vendas (VGV)', color: 'hsl(var(--primary))' } }}
                className="h-full w-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={10} />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(value) => `R$ ${(value / 1000000).toFixed(0)}M`}
                      width={65}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="sales"
                      stroke="var(--color-sales)"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3 shadow-sm flex flex-col">
          <CardHeader>
            <CardTitle>Ações Requeridas</CardTitle>
            <CardDescription>Tarefas priorizadas da equipe</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 flex-1">
            <div className="flex items-start gap-3 p-3 bg-red-50 text-red-900 rounded-lg border border-red-100 transition-colors hover:bg-red-100">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-sm">Documentação Vencida</p>
                <p className="text-xs mt-1 opacity-90">
                  Corretor: Carlos Eduardo - CRECI precisa ser renovado urgentemente.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-amber-50 text-amber-900 rounded-lg border border-amber-100 transition-colors hover:bg-amber-100">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-sm">Treinamento Atrasado</p>
                <p className="text-xs mt-1 opacity-90">
                  3 corretores não concluíram o módulo "Técnicas de Fechamento".
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 text-blue-900 rounded-lg border border-blue-100 transition-colors hover:bg-blue-100">
              <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-sm">Meta Atingida</p>
                <p className="text-xs mt-1 opacity-90">
                  Aprovar promoção para status 3x1 da corretora Ana Paula Silva.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
