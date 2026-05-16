import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  FileText,
  Download,
  TrendingUp,
  Users,
  ShieldAlert,
  Award,
  Star,
  Calendar,
  Mail,
  Clock,
  BarChart3,
  TrendingDown,
  Minus,
} from 'lucide-react'
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

// Mock Data
const weeklyBrokers = [
  {
    id: 1,
    name: 'Ana Paula Silva',
    status: 'Acima do Esperado',
    vgv: 3500000,
    percent: 140,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1',
  },
  {
    id: 2,
    name: 'Marcos Gomes',
    status: 'Dentro do Esperado',
    vgv: 2450000,
    percent: 98,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2',
  },
  {
    id: 3,
    name: 'Juliana Costa',
    status: 'Dentro do Esperado',
    vgv: 2300000,
    percent: 92,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=3',
  },
  {
    id: 4,
    name: 'Carlos Eduardo',
    status: 'Precisa de Apoio',
    vgv: 800000,
    percent: 32,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=4',
  },
]

const individualPerformance = [
  {
    name: 'Ana Paula Silva',
    sales: 45,
    vgv: 21500000,
    trend: '+12%',
    isPositive: true,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1',
  },
  {
    name: 'Marcos Gomes',
    sales: 32,
    vgv: 11200000,
    trend: '+5%',
    isPositive: true,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2',
  },
  {
    name: 'Juliana Costa',
    sales: 28,
    vgv: 9800000,
    trend: '-2%',
    isPositive: false,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=3',
  },
  {
    name: 'Carlos Eduardo',
    sales: 12,
    vgv: 4500000,
    trend: '-15%',
    isPositive: false,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=4',
  },
  {
    name: 'Fernanda Lima',
    sales: 19,
    vgv: 7100000,
    trend: '+1%',
    isPositive: true,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=5',
  },
  {
    name: 'Roberto Alves',
    sales: 15,
    vgv: 5200000,
    trend: '-8%',
    isPositive: false,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=6',
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
    <div className="p-4 md:p-6 space-y-6 max-w-6xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Suite de Relatórios</h2>
          <p className="text-slate-500 text-sm md:text-base">
            Visão estratégica de resultados, classificações semanais e fechamentos.
          </p>
        </div>
        <Button variant="outline" className="gap-2 shrink-0">
          <Download className="w-4 h-4" /> Exportar Dados Gerais (CSV)
        </Button>
      </div>

      <Tabs defaultValue="weekly" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto mb-6 gap-2">
          <TabsTrigger value="weekly" className="py-2.5">
            Resumo Semanal
          </TabsTrigger>
          <TabsTrigger value="monthly" className="py-2.5">
            Fechamento Mensal
          </TabsTrigger>
          <TabsTrigger value="individual" className="py-2.5">
            Cards Individuais
          </TabsTrigger>
          <TabsTrigger value="schedule" className="py-2.5">
            Agendamento
          </TabsTrigger>
        </TabsList>

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
                    <TableHead className="text-right">% da Meta Semanal</TableHead>
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
                            broker.status === 'Acima do Esperado'
                              ? 'bg-green-50 text-green-700 border-green-200'
                              : broker.status === 'Dentro do Esperado'
                                ? 'bg-yellow-50 text-yellow-700 border-yellow-200'
                                : 'bg-red-50 text-red-700 border-red-200'
                          }
                        >
                          {broker.status === 'Acima do Esperado' && (
                            <TrendingUp className="w-3 h-3 mr-1" />
                          )}
                          {broker.status === 'Dentro do Esperado' && (
                            <Minus className="w-3 h-3 mr-1" />
                          )}
                          {broker.status === 'Precisa de Apoio' && (
                            <TrendingDown className="w-3 h-3 mr-1" />
                          )}
                          {broker.status}
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
                  Corretores que atingiram os critérios máximos no fechamento anterior.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
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
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-100 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-amber-800 flex items-center gap-2">
                  <Star className="w-5 h-5" /> Destaques 2x1 (Ouro)
                </CardTitle>
                <CardDescription className="text-amber-700/70">
                  Corretores com excelente performance garantindo dobro de leads.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
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
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Distribuição de Leads no Mês</CardTitle>
              <CardDescription>
                Proporção de leads entregues por nível de privilégio do corretor.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-blue-700">Nível Diamante (3x1)</span>
                    <span className="font-bold">45% do total</span>
                  </div>
                  <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-amber-600">Nível Ouro (2x1)</span>
                    <span className="font-bold">35% do total</span>
                  </div>
                  <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full"
                      style={{ width: '35%' }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-600">Nível Padrão (1x1)</span>
                    <span className="font-bold">20% do total</span>
                  </div>
                  <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-slate-400 rounded-full"
                      style={{ width: '20%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="individual" className="space-y-6 animate-in fade-in-50">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {individualPerformance.map((broker) => (
              <Card key={broker.name} className="shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-12 h-12 border-2 border-slate-100">
                      <AvatarImage src={broker.avatar} />
                      <AvatarFallback>{broker.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-slate-800 leading-tight">{broker.name}</h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {broker.sales} vendas no período
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t flex items-end justify-between">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">VGV Acumulado</p>
                      <p className="font-mono font-bold text-lg">{formatCurrency(broker.vgv)}</p>
                    </div>
                    <div
                      className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${broker.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                    >
                      {broker.isPositive ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : (
                        <TrendingDown className="w-3 h-3" />
                      )}
                      {broker.trend}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="animate-in fade-in-50">
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>Agendamento Automático de Relatórios</CardTitle>
              <CardDescription>
                Configure o envio de resumos gerenciais para o email da diretoria e gestão.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-3">
                <Label className="text-slate-700">Tipo de Relatório</Label>
                <Select defaultValue="full">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione o relatório" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Relatório Completo (Ranking + Fechamento)</SelectItem>
                    <SelectItem value="weekly">Apenas Resumo Semanal</SelectItem>
                    <SelectItem value="alerts">Relatório de Alertas e Engajamento</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label className="text-slate-700">Frequência de Envio</Label>
                <Select defaultValue="weekly">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione a frequência" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Diário (Fim do Dia - 18h)</SelectItem>
                    <SelectItem value="weekly">Semanal (Toda Segunda-feira às 08h)</SelectItem>
                    <SelectItem value="monthly">Mensal (Dia 1 de cada mês às 08h)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label className="text-slate-700">Destinatários</Label>
                <Input
                  defaultValue="gestao@imobiliaria.com, diretoria@imobiliaria.com"
                  placeholder="Emails separados por vírgula"
                />
                <p className="text-xs text-slate-500">
                  Insira os emails separados por vírgula para múltiplos destinatários.
                </p>
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
