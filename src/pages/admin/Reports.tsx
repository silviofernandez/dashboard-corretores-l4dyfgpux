import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'
import { Download, TrendingUp, TrendingDown, Minus, Award, Star, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useToast } from '@/hooks/use-toast'

const overviewData = [
  { period: 'Jan', volume: 15, conversion: 18, satisfaction: 4.5 },
  { period: 'Fev', volume: 12, conversion: 15, satisfaction: 4.6 },
  { period: 'Mar', volume: 18, conversion: 22, satisfaction: 4.7 },
  { period: 'Abr', volume: 16, conversion: 19, satisfaction: 4.5 },
  { period: 'Mai', volume: 21, conversion: 25, satisfaction: 4.8 },
  { period: 'Jun', volume: 25, conversion: 28, satisfaction: 4.9 },
]

const weeklyBrokers = [
  {
    id: 1,
    name: 'Ana Paula Silva',
    status: 'Acima',
    vgv: 3500000,
    percent: 140,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1',
  },
  {
    id: 2,
    name: 'Marcos Gomes',
    status: 'Dentro',
    vgv: 2450000,
    percent: 98,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2',
  },
  {
    id: 3,
    name: 'Juliana Costa',
    status: 'Dentro',
    vgv: 2300000,
    percent: 92,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=3',
  },
  {
    id: 4,
    name: 'Carlos Eduardo',
    status: 'Abaixo',
    vgv: 800000,
    percent: 32,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=4',
  },
]

export default function AdminReports() {
  const { toast } = useToast()

  const handleSchedule = () => {
    toast({
      title: 'Agendamento Salvo',
      description: 'O envio automatizado do relatório foi configurado com sucesso.',
    })
  }

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val)

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Suite de Relatórios</h2>
          <p className="text-slate-500 text-sm md:text-base">
            Visão estratégica de resultados, desempenho e satisfação.
          </p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Select defaultValue="monthly">
            <SelectTrigger className="w-[140px] bg-white">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Semanal</SelectItem>
              <SelectItem value="monthly">Mensal</SelectItem>
              <SelectItem value="yearly">Anual</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2 shrink-0 bg-white">
            <Download className="w-4 h-4" /> Exportar PDF
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto mb-6 gap-2">
          <TabsTrigger value="overview" className="py-2.5">
            Visão Geral
          </TabsTrigger>
          <TabsTrigger value="weekly" className="py-2.5">
            Resumo Semanal
          </TabsTrigger>
          <TabsTrigger value="monthly" className="py-2.5">
            Fechamento Mensal
          </TabsTrigger>
          <TabsTrigger value="schedule" className="py-2.5">
            Agendamento
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 animate-in fade-in-50">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="shadow-sm col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle>Volume de Vendas (VGV)</CardTitle>
                <CardDescription>
                  Evolução de volume geral de vendas em Milhões (R$)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ChartContainer
                    config={{ volume: { label: 'VGV', color: 'hsl(var(--primary))' } }}
                    className="h-full w-full"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={overviewData}
                        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="period" axisLine={false} tickLine={false} />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tickFormatter={(val) => `${val}M`}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="volume" fill="var(--color-volume)" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Taxa de Conversão (%)</CardTitle>
                <CardDescription>Média de leads convertidos no período</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ChartContainer
                    config={{ conversion: { label: 'Conversão', color: 'hsl(210, 100%, 50%)' } }}
                    className="h-full w-full"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={overviewData}
                        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="period" axisLine={false} tickLine={false} />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tickFormatter={(val) => `${val}%`}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line
                          type="monotone"
                          dataKey="conversion"
                          stroke="var(--color-conversion)"
                          strokeWidth={3}
                          dot={{ r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm lg:col-span-3">
              <CardHeader>
                <CardTitle>Índice de Satisfação de Clientes (CSAT)</CardTitle>
                <CardDescription>
                  Avaliação média após fechamento ou atendimento (Max: 5.0)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[220px]">
                  <ChartContainer
                    config={{ satisfaction: { label: 'Satisfação', color: 'hsl(142, 71%, 45%)' } }}
                    className="h-full w-full"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={overviewData}
                        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient id="colorSat" x1="0" y1="0" x2="0" y2="1">
                            <stop
                              offset="5%"
                              stopColor="var(--color-satisfaction)"
                              stopOpacity={0.3}
                            />
                            <stop
                              offset="95%"
                              stopColor="var(--color-satisfaction)"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="period" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} domain={[0, 5]} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area
                          type="monotone"
                          dataKey="satisfaction"
                          stroke="var(--color-satisfaction)"
                          fillOpacity={1}
                          fill="url(#colorSat)"
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="weekly" className="space-y-6 animate-in fade-in-50">
          <Card>
            <CardHeader>
              <CardTitle>Classificação Semanal de Corretores</CardTitle>
              <CardDescription>
                Análise baseada na fração semanal da meta global estipulada para a equipe.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Corretor</TableHead>
                    <TableHead>Status de Performance</TableHead>
                    <TableHead className="text-right">VGV Alcançado</TableHead>
                    <TableHead className="text-right">% da Meta</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {weeklyBrokers.map((broker) => (
                    <TableRow key={broker.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={broker.avatar} />
                            <AvatarFallback>{broker.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{broker.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            broker.status === 'Acima'
                              ? 'bg-green-50 text-green-700 border-green-200'
                              : broker.status === 'Dentro'
                                ? 'bg-yellow-50 text-yellow-700 border-yellow-200'
                                : 'bg-red-50 text-red-700 border-red-200'
                          }
                        >
                          {broker.status === 'Acima' && <TrendingUp className="w-3 h-3 mr-1" />}
                          {broker.status === 'Dentro' && <Minus className="w-3 h-3 mr-1" />}
                          {broker.status === 'Abaixo' && <TrendingDown className="w-3 h-3 mr-1" />}
                          {broker.status === 'Acima'
                            ? 'Acima do Esperado'
                            : broker.status === 'Dentro'
                              ? 'Dentro do Esperado'
                              : 'Precisa de Apoio'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-mono font-medium">
                        {formatCurrency(broker.vgv)}
                      </TableCell>
                      <TableCell className="text-right font-bold text-slate-700">
                        {broker.percent}%
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly" className="space-y-6 animate-in fade-in-50">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <Award className="w-5 h-5" /> Campeões 3x1 (Diamante)
                </CardTitle>
                <CardDescription className="text-blue-600/70">
                  Corretores que atingiram os critérios máximos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between bg-white/60 p-3 rounded-lg border border-blue-200/50">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1" />
                    </Avatar>
                    <div>
                      <p className="font-bold text-slate-800">Ana Paula Silva</p>
                      <p className="text-xs text-blue-600 font-medium">145 leads trabalhados</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-slate-900">{formatCurrency(21500000)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-100 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-amber-800 flex items-center gap-2">
                  <Star className="w-5 h-5" /> Destaques 2x1 (Ouro)
                </CardTitle>
                <CardDescription className="text-amber-700/70">
                  Performance garantindo dobro de leads.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between bg-white/60 p-3 rounded-lg border border-amber-200/50">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2" />
                    </Avatar>
                    <div>
                      <p className="font-bold text-slate-800">Marcos Gomes</p>
                      <p className="text-xs text-amber-700 font-medium">98 leads trabalhados</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-slate-900">{formatCurrency(11200000)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="animate-in fade-in-50">
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>Agendamento Automático de Relatórios</CardTitle>
              <CardDescription>
                Configure o envio de resumos para o email da diretoria e gestão.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-3">
                <Label>Tipo de Relatório</Label>
                <Select defaultValue="full">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o relatório" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Relatório Completo (Ranking + Fechamento)</SelectItem>
                    <SelectItem value="alerts">Relatório de Alertas e Engajamento</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                <Label>Destinatários</Label>
                <Input
                  defaultValue="gestao@imobiliaria.com"
                  placeholder="Emails separados por vírgula"
                />
              </div>
              <Button onClick={handleSchedule} className="w-full sm:w-auto mt-4 gap-2">
                <Clock className="w-4 h-4" /> Salvar Agendamento
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
