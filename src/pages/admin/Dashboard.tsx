import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import {
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

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

        <Link to="/admin/alertas" className="sm:col-span-2 md:col-span-1 block group">
          <Card className="bg-gradient-to-br from-amber-50 to-white shadow-sm h-full transition-all duration-200 hover:shadow-md hover:border-amber-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-600 group-hover:text-amber-700 transition-colors">
                Alertas Pendentes
              </CardTitle>
              <AlertCircle className="w-4 h-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-900">5 Ações</div>
              <p className="text-xs text-amber-700/80 mt-1 flex items-center gap-1">
                Requerem atenção imediata{' '}
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-1 group-hover:ml-0" />
              </p>
            </CardContent>
          </Card>
        </Link>
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
          <CardHeader className="flex flex-row items-start justify-between pb-3">
            <div>
              <CardTitle>Ações Requeridas</CardTitle>
              <CardDescription>Tarefas priorizadas da equipe</CardDescription>
            </div>
            <Link
              to="/admin/alertas"
              className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-md hover:bg-blue-100 transition-colors"
            >
              Ver todas
            </Link>
          </CardHeader>
          <CardContent className="space-y-4 flex-1">
            <Link
              to="/admin/alertas"
              className="flex items-start gap-3 p-3 bg-red-50 text-red-900 rounded-lg border border-red-100 transition-colors hover:bg-red-100 hover:border-red-200 cursor-pointer group"
            >
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
              <div className="flex-1">
                <p className="font-medium text-sm flex items-center justify-between">
                  Aprovação de Documento
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-red-700" />
                </p>
                <p className="text-xs mt-1 opacity-90">
                  Venda de alto valor aguardando aprovação há mais de 24h.
                </p>
              </div>
            </Link>
            <Link
              to="/admin/alertas"
              className="flex items-start gap-3 p-3 bg-amber-50 text-amber-900 rounded-lg border border-amber-100 transition-colors hover:bg-amber-100 hover:border-amber-200 cursor-pointer group"
            >
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <div className="flex-1">
                <p className="font-medium text-sm flex items-center justify-between">
                  Lead sem Interação
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-amber-700" />
                </p>
                <p className="text-xs mt-1 opacity-90">
                  Lead de alto potencial sem contato há mais de 48 horas.
                </p>
              </div>
            </Link>
            <Link
              to="/admin/alertas"
              className="flex items-start gap-3 p-3 bg-red-50 text-red-900 rounded-lg border border-red-100 transition-colors hover:bg-red-100 hover:border-red-200 cursor-pointer group"
            >
              <TrendingDown className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
              <div className="flex-1">
                <p className="font-medium text-sm flex items-center justify-between">
                  Conversão Baixa
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-red-700" />
                </p>
                <p className="text-xs mt-1 opacity-90">
                  Corretor apresentou queda drástica na taxa de conversão.
                </p>
              </div>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
