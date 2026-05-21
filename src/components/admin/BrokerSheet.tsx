import { useState, useMemo } from 'react'
import {
  Brain,
  GraduationCap,
  TrendingUp,
  TrendingDown,
  Minus,
  Users,
  Target,
  Briefcase,
  FileText,
  XCircle,
  CheckCircle,
  DollarSign,
  MessageSquare,
  Calendar,
  Sparkles,
  Award,
  Plus,
  Trash,
} from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { useAuth } from '@/providers/AppProviders'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const TEAM_AVG_MONTHLY = {
  leads: 100,
  interactions: 250,
  visits: 40,
  foldersUploaded: 20,
  foldersRejected: 4,
  purchaseConditions: 16,
  sales: 10,
  vgv: 2500000,
  vgc: 125000,
  netCommission: 62500,
  conversionRate: 10,
}

const TOP_PERFORMER_MONTHLY = {
  leads: 200,
  interactions: 600,
  visits: 90,
  foldersUploaded: 65,
  foldersRejected: 2,
  purchaseConditions: 63,
  sales: 50,
  vgv: 15000000,
  vgc: 750000,
  netCommission: 375000,
  conversionRate: 25,
}

const formatCurrency = (val: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(val)

const getStatusStyle = (value: number, expected: number, inverse = false) => {
  if (expected === 0)
    return { bg: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-200', icon: Minus }
  const ratio = value / expected
  if (inverse) {
    if (ratio <= 0.8)
      return {
        bg: 'bg-green-50',
        text: 'text-green-700',
        border: 'border-green-200',
        icon: TrendingUp,
      }
    if (ratio <= 1.2)
      return {
        bg: 'bg-yellow-50',
        text: 'text-yellow-700',
        border: 'border-yellow-200',
        icon: Minus,
      }
    return { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', icon: TrendingDown }
  }
  if (ratio >= 1.1)
    return {
      bg: 'bg-green-50',
      text: 'text-green-700',
      border: 'border-green-200',
      icon: TrendingUp,
    }
  if (ratio >= 0.8)
    return { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200', icon: Minus }
  return { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', icon: TrendingDown }
}

const MetricCard = ({
  title,
  value,
  expected,
  inverse = false,
  isCurrency = false,
  icon: Icon,
}: any) => {
  const style = getStatusStyle(value, expected, inverse)
  const StatusIcon = style.icon
  return (
    <div className={`p-4 rounded-xl border ${style.bg} ${style.border} flex flex-col relative`}>
      <div className="flex items-center justify-between mb-3">
        <span
          className={`text-[11px] font-bold uppercase ${style.text} opacity-90 flex items-center gap-1.5 tracking-tight`}
        >
          {Icon && <Icon className="w-3.5 h-3.5" />} {title}
        </span>
        <StatusIcon className={`w-4 h-4 ${style.text}`} />
      </div>
      <span className={`text-xl lg:text-2xl font-black ${style.text} tracking-tight`}>
        {isCurrency ? formatCurrency(value) : value}
      </span>
      <div className={`mt-2 text-[10px] font-bold uppercase opacity-60 ${style.text}`}>
        Alvo: {isCurrency ? formatCurrency(expected) : expected}
      </div>
    </div>
  )
}

export function BrokerSheet({ selectedBroker, isOpen, onOpenChange, onUpdateBroker }: any) {
  const { toast } = useToast()
  const { trainings } = useAuth()!
  const [period, setPeriod] = useState('monthly')
  const [compareTarget, setCompareTarget] = useState('avg')
  const [note, setNote] = useState('')
  const [selectedTrainingId, setSelectedTrainingId] = useState('')

  const multiplier = useMemo(() => {
    switch (period) {
      case 'weekly':
        return 0.25
      case 'biweekly':
        return 0.5
      case 'monthly':
        return 1
      case 'quarterly':
        return 3
      case 'semiannually':
        return 6
      default:
        return 1
    }
  }, [period])

  const b = selectedBroker
  if (!b) return null

  const getVal = (val: number) => Math.round(val * multiplier)
  const targetObj = compareTarget === 'avg' ? TEAM_AVG_MONTHLY : TOP_PERFORMER_MONTHLY

  const handleAddNote = () => {
    if (!note.trim()) return
    const newFeedback = { id: Date.now(), date: new Date().toISOString().split('T')[0], note }
    onUpdateBroker?.({ ...b, feedbacks: [newFeedback, ...(b.feedbacks || [])] })
    setNote('')
    toast({ title: 'Feedback salvo', description: 'Anotação do 1-on-1 registrada com sucesso.' })
  }

  const handleAssignTraining = () => {
    if (!selectedTrainingId) return
    if (b.assignedTrainings?.includes(selectedTrainingId)) {
      toast({ title: 'Aviso', description: 'Treinamento já atribuído.', variant: 'destructive' })
      return
    }
    onUpdateBroker?.({
      ...b,
      assignedTrainings: [...(b.assignedTrainings || []), selectedTrainingId],
    })
    setSelectedTrainingId('')
    toast({ title: 'Treinamento atribuído', description: 'Corretor notificado.' })
  }

  const handleGenerateAI = () => {
    toast({ title: 'Analisando via IA', description: 'Enviando métricas para motor...' })
    setTimeout(
      () => toast({ title: 'Concluído', description: 'Insights gerados com sucesso.' }),
      2000,
    )
  }

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="w-full !max-w-5xl sm:w-[90vw] overflow-y-auto bg-slate-50/50 p-0">
        <div className="p-6 pb-4 bg-white border-b sticky top-0 z-10 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <SheetTitle className="text-2xl font-bold text-slate-900">{b.name}</SheetTitle>
            <SheetDescription className="flex items-center gap-2 mt-2 flex-wrap">
              <Badge variant={b.active ? 'default' : 'secondary'}>
                {b.active ? 'Ativo' : 'Inativo'}
              </Badge>
              {b.teamName && (
                <Badge variant="outline" className="bg-blue-50/50 text-blue-700 border-blue-200">
                  {b.teamName}
                </Badge>
              )}
              <Badge variant="outline">{b.position}</Badge>
              <Badge variant="outline">{b.region}</Badge>
            </SheetDescription>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="text-sm font-semibold text-slate-500 shrink-0">Filtrar Período:</span>
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger className="w-[160px] bg-slate-50 border-slate-200">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Semanal</SelectItem>
                <SelectItem value="biweekly">Quinzenal</SelectItem>
                <SelectItem value="monthly">Mensal</SelectItem>
                <SelectItem value="quarterly">Trimestral</SelectItem>
                <SelectItem value="semiannually">Semestral</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="p-6 pt-0 space-y-6">
          <Tabs defaultValue="metrics" className="w-full">
            <TabsList className="mb-6 bg-white border shadow-sm flex flex-wrap h-auto p-1 gap-1">
              <TabsTrigger value="metrics" className="py-2 flex-1">
                Funil & Vendas
              </TabsTrigger>
              <TabsTrigger value="comparison" className="py-2 flex-1">
                Comparativo
              </TabsTrigger>
              <TabsTrigger value="feedback" className="py-2 flex-1">
                1-on-1 & Feedback
              </TabsTrigger>
              <TabsTrigger value="trainings" className="py-2 flex-1">
                Treinamentos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="metrics" className="space-y-6 animate-in fade-in-50">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                <MetricCard
                  title="Leads"
                  value={getVal(b.leads)}
                  expected={getVal(TEAM_AVG_MONTHLY.leads)}
                  icon={Users}
                />
                <MetricCard
                  title="Interações"
                  value={getVal(b.interactions)}
                  expected={getVal(TEAM_AVG_MONTHLY.interactions)}
                  icon={MessageSquare}
                />
                <MetricCard
                  title="Visitas"
                  value={getVal(b.visits)}
                  expected={getVal(TEAM_AVG_MONTHLY.visits)}
                  icon={Target}
                />
                <MetricCard
                  title="Pastas"
                  value={getVal(b.foldersUploaded)}
                  expected={getVal(TEAM_AVG_MONTHLY.foldersUploaded)}
                  icon={FileText}
                />
                <MetricCard
                  title="Rejeitadas"
                  value={getVal(b.foldersRejected)}
                  expected={getVal(TEAM_AVG_MONTHLY.foldersRejected)}
                  inverse
                  icon={XCircle}
                />
                <MetricCard
                  title="Condições"
                  value={getVal(b.purchaseConditions)}
                  expected={getVal(TEAM_AVG_MONTHLY.purchaseConditions)}
                  icon={CheckCircle}
                />
                <MetricCard
                  title="Vendas"
                  value={getVal(b.sales)}
                  expected={getVal(TEAM_AVG_MONTHLY.sales)}
                  icon={Award}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <MetricCard
                  title="VGV (Vendas)"
                  value={getVal(b.vgv)}
                  expected={getVal(TEAM_AVG_MONTHLY.vgv)}
                  isCurrency
                  icon={DollarSign}
                />
                <MetricCard
                  title="VGC (Comissão Bruta)"
                  value={getVal(b.vgc)}
                  expected={getVal(TEAM_AVG_MONTHLY.vgc)}
                  isCurrency
                  icon={Briefcase}
                />
                <MetricCard
                  title="Comissão Líquida"
                  value={getVal(b.netCommission)}
                  expected={getVal(TEAM_AVG_MONTHLY.netCommission)}
                  isCurrency
                  icon={DollarSign}
                />
              </div>

              <Card className="border-indigo-100 bg-indigo-50/50 shadow-sm mt-6">
                <CardHeader className="pb-2 flex flex-row items-center justify-between">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2 text-indigo-900">
                    <Brain className="w-5 h-5 text-indigo-600" /> Insights de Performance (IA)
                  </CardTitle>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 gap-1.5 text-indigo-700 border-indigo-200 hover:bg-indigo-100"
                    onClick={handleGenerateAI}
                  >
                    <Sparkles className="w-3.5 h-3.5" /> Gerar Nova Análise
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-indigo-900/90 leading-relaxed">
                  <p>{b.aiAnalysis}</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="comparison" className="animate-in fade-in-50 space-y-6">
              <div className="flex justify-end mb-4">
                <Select value={compareTarget} onValueChange={setCompareTarget}>
                  <SelectTrigger className="w-[240px] bg-white">
                    <SelectValue placeholder="Comparar com" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="avg">Média da Equipe</SelectItem>
                    <SelectItem value="top">Top Performer (Ana Paula)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <Table>
                  <TableHeader className="bg-slate-50">
                    <TableRow>
                      <TableHead>Métrica</TableHead>
                      <TableHead className="text-right">Corretor</TableHead>
                      <TableHead className="text-right">
                        Alvo ({compareTarget === 'avg' ? 'Média' : 'Top Performer'})
                      </TableHead>
                      <TableHead className="text-center">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { label: 'Leads Trabalhados', key: 'leads' },
                      { label: 'Visitas Realizadas', key: 'visits' },
                      { label: 'Pastas Aprovadas', key: 'purchaseConditions' },
                      { label: 'Vendas Fechadas', key: 'sales' },
                      { label: 'Taxa de Conversão (%)', key: 'conversionRate' },
                      { label: 'VGV Gerado (R$)', key: 'vgv', isCurrency: true },
                    ].map((m) => {
                      const val = m.key === 'conversionRate' ? b[m.key] : getVal(b[m.key])
                      const tVal =
                        m.key === 'conversionRate'
                          ? targetObj[m.key]
                          : getVal(targetObj[m.key as keyof typeof targetObj])
                      const style = getStatusStyle(val, tVal)
                      return (
                        <TableRow key={m.key}>
                          <TableCell className="font-medium text-slate-700">{m.label}</TableCell>
                          <TableCell className="text-right font-bold text-slate-900">
                            {m.isCurrency ? formatCurrency(val) : val}
                            {m.key === 'conversionRate' ? '%' : ''}
                          </TableCell>
                          <TableCell className="text-right text-slate-500">
                            {m.isCurrency ? formatCurrency(tVal) : tVal}
                            {m.key === 'conversionRate' ? '%' : ''}
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge
                              className={`${style.bg} ${style.text} ${style.border} shadow-none`}
                              variant="outline"
                            >
                              {val >= tVal ? 'Acima' : 'Abaixo'}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="feedback" className="animate-in fade-in-50 space-y-6">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">Registrar Reunião 1-on-1</CardTitle>
                  <CardDescription>
                    Adicione notas de feedback para o histórico do corretor.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder="Escreva os pontos discutidos, metas alinhadas e feedback geral..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="min-h-[120px]"
                  />
                  <Button onClick={handleAddNote} className="gap-2">
                    <Plus className="w-4 h-4" /> Salvar Anotação
                  </Button>
                </CardContent>
              </Card>
              <div className="space-y-4">
                <h4 className="font-bold text-slate-800 text-sm">Histórico de Feedbacks</h4>
                {b.feedbacks?.length > 0 ? (
                  <div className="space-y-3">
                    {b.feedbacks.map((fb: any) => (
                      <div
                        key={fb.id}
                        className="p-4 bg-white rounded-xl border shadow-sm flex flex-col gap-2"
                      >
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                          <Calendar className="w-3.5 h-3.5" />{' '}
                          {fb.date.split('-').reverse().join('/')}
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed">{fb.note}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center text-slate-500 bg-slate-50 border border-dashed rounded-xl">
                    Nenhum feedback registrado.
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="trainings" className="animate-in fade-in-50 space-y-6">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">Recomendar e Atribuir Treinamento</CardTitle>
                  <CardDescription>
                    Selecione capacitações para cobrir gaps de performance.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row gap-3">
                  <Select value={selectedTrainingId} onValueChange={setSelectedTrainingId}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um treinamento disponível" />
                    </SelectTrigger>
                    <SelectContent>
                      {trainings.map((t: any) => (
                        <SelectItem key={t.id} value={t.id}>
                          {t.theme}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button onClick={handleAssignTraining} className="shrink-0 gap-2">
                    <GraduationCap className="w-4 h-4" /> Atribuir
                  </Button>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <h4 className="font-bold text-slate-800 text-sm">Treinamentos Atribuídos</h4>
                {b.assignedTrainings?.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {b.assignedTrainings.map((tId: string) => {
                      const t = trainings.find((tr: any) => String(tr.id) === String(tId))
                      if (!t) return null
                      return (
                        <div
                          key={tId}
                          className="p-4 bg-white rounded-xl border shadow-sm flex items-start justify-between gap-4"
                        >
                          <div>
                            <h5 className="font-semibold text-slate-800 text-sm">{t.theme}</h5>
                            <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                              <Calendar className="w-3 h-3" /> {t.date} às {t.time}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-slate-400 hover:text-red-600"
                            onClick={() => {
                              onUpdateBroker?.({
                                ...b,
                                assignedTrainings: b.assignedTrainings.filter(
                                  (id: string) => id !== tId,
                                ),
                              })
                              toast({ title: 'Treinamento removido' })
                            }}
                          >
                            <Trash className="w-4 h-4" />
                          </Button>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div className="p-6 text-center text-slate-500 bg-slate-50 border border-dashed rounded-xl">
                    Nenhum treinamento atribuído.
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  )
}
