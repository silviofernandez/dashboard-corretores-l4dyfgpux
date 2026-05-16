import { Users, CalendarDays } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import {
  Line,
  LineChart,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
} from 'recharts'

const WEEKLY_DATA = [
  { name: 'Seg', vendas: 2 },
  { name: 'Ter', vendas: 3 },
  { name: 'Qua', vendas: 1 },
  { name: 'Qui', vendas: 5 },
  { name: 'Sex', vendas: 4 },
  { name: 'Sáb', vendas: 7 },
  { name: 'Dom', vendas: 8 },
]

const MONTHLY_DATA = [
  { name: 'Mês Atual', valor: 45 },
  { name: 'Mês Anterior', valor: 38 },
]

const BENCHMARK_DATA = [
  { subject: 'VGV', Você: 120, Equipe: 80, fullMark: 150 },
  { subject: 'Conversão', Você: 98, Equipe: 60, fullMark: 100 },
  { subject: 'Contatos', Você: 86, Equipe: 90, fullMark: 100 },
  { subject: 'Visitas', Você: 99, Equipe: 75, fullMark: 100 },
  { subject: 'Propostas', Você: 85, Equipe: 70, fullMark: 100 },
]

export function Charts() {
  const safeWeeklyData = WEEKLY_DATA || []
  const safeMonthlyData = MONTHLY_DATA || []
  const safeBenchmarkData = BENCHMARK_DATA || []

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 border-0 shadow-sm rounded-2xl">
        <CardHeader className="flex flex-row items-center justify-between pb-8">
          <CardTitle className="font-black text-slate-800 text-lg flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-blue-500" /> Evolução semanal vendas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{ vendas: { label: 'Vendas', color: '#2563eb' } }}
            className="h-[280px] w-full"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={safeWeeklyData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#f1f5f9" />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: '#94a3b8', fontWeight: 700, fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: '#94a3b8', fontWeight: 700, fontSize: 12 }}
                  dx={-10}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent className="bg-white border-none shadow-elevation rounded-xl font-bold" />
                  }
                />
                <Line
                  type="monotone"
                  dataKey="vendas"
                  stroke="var(--color-vendas)"
                  strokeWidth={4}
                  dot={{ r: 6, fill: '#fff', strokeWidth: 3, stroke: '#2563eb' }}
                  activeDot={{ r: 8, fill: '#2563eb', stroke: '#fff', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="border-0 shadow-sm rounded-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="font-black text-slate-800 text-base">
              Comparativo com mês anterior
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{ valor: { label: 'Vendas', color: '#8b5cf6' } }}
              className="h-[140px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={safeMonthlyData}
                  layout="vertical"
                  margin={{ top: 0, right: 20, left: -10, bottom: 0 }}
                >
                  <XAxis type="number" hide />
                  <YAxis
                    dataKey="name"
                    type="category"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: '#64748b', fontWeight: 700, fontSize: 11 }}
                    width={90}
                  />
                  <ChartTooltip
                    cursor={{ fill: 'transparent' }}
                    content={
                      <ChartTooltipContent className="bg-white border-none shadow-elevation rounded-xl font-bold" />
                    }
                  />
                  <Bar
                    dataKey="valor"
                    fill="var(--color-valor)"
                    radius={[0, 6, 6, 0]}
                    barSize={32}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="font-black text-slate-800 text-base flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-500" /> Performance vs média equipe
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                Você: { label: 'Você', color: '#2563eb' },
                Equipe: { label: 'Equipe', color: '#94a3b8' },
              }}
              className="h-[220px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                  data={safeBenchmarkData}
                  margin={{ top: 0, right: 30, bottom: 0, left: 30 }}
                >
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: '#64748b', fontSize: 11, fontWeight: 700 }}
                  />
                  <Radar
                    name="Você"
                    dataKey="Você"
                    stroke="var(--color-Você)"
                    strokeWidth={2}
                    fill="var(--color-Você)"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Equipe"
                    dataKey="Equipe"
                    stroke="var(--color-Equipe)"
                    strokeWidth={2}
                    fill="var(--color-Equipe)"
                    fillOpacity={0.15}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent className="bg-white border-none shadow-elevation rounded-xl font-bold" />
                    }
                  />
                </RadarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
