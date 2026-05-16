import { useState } from 'react'
import {
  Plus,
  Download,
  Upload,
  MoreHorizontal,
  Mail,
  Phone,
  Brain,
  GraduationCap,
  TrendingDown,
  Eye,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'

const initialBrokers = [
  {
    id: 1,
    name: 'Ricardo Mendes',
    email: 'ricardo.mendes@imob.com',
    phone: '(11) 98765-4321',
    region: 'Unidade Sul',
    position: 'Sênior',
    sales: 45,
    vgv: 12500000,
    training: 100,
    quiz: 95,
    docs: 'Ok',
    active: true,
    aiAnalysis:
      'Desempenho consistente e alta taxa de conversão nas etapas iniciais. Demonstra forte capacidade de negociação e excelente comunicação.',
    trainingRecommendation: null,
  },
  {
    id: 2,
    name: 'Ana Paula Silva',
    email: 'ana.silva@imob.com',
    phone: '(11) 97777-6666',
    region: 'Unidade Norte',
    position: 'Pleno',
    sales: 42,
    vgv: 11200000,
    training: 80,
    quiz: 88,
    docs: 'Pendente',
    active: true,
    aiAnalysis:
      'Boa performance geral, porém apresenta ligeira queda na conversão de leads frios. Follow-up poderia ser otimizado.',
    trainingRecommendation: 'Workshop: Estratégias de Follow-up e Reengajamento',
  },
  {
    id: 3,
    name: 'Carlos Eduardo',
    email: 'carlos.edu@imob.com',
    phone: '(11) 96666-5555',
    region: 'Unidade Leste',
    position: 'Júnior',
    sales: 12,
    vgv: 4500000,
    training: 60,
    quiz: 75,
    docs: 'Vencido',
    active: true,
    aiAnalysis:
      'Baixa conversão na etapa de negociação (15% abaixo da média). Tempo de resposta aos leads está acima do aceitável (lento).',
    trainingRecommendation: 'Treinamento Intensivo de Negociação e Gestão de Tempo',
  },
  {
    id: 4,
    name: 'Mariana Costa',
    email: 'mariana.costa@imob.com',
    phone: '(11) 95555-4444',
    region: 'Unidade Oeste',
    position: 'Sênior',
    sales: 35,
    vgv: 8500000,
    training: 100,
    quiz: 90,
    docs: 'Ok',
    active: false,
    aiAnalysis:
      'Histórico de vendas sólido, atualmente inativa no sistema. Mantinha excelentes índices de satisfação dos clientes.',
    trainingRecommendation: null,
  },
]

export default function AdminBrokers() {
  const [brokers, setBrokers] = useState(initialBrokers)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBroker, setSelectedBroker] = useState<any>(null)
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()

  const toggleActive = (id: number) => {
    setBrokers(brokers.map((b) => (b.id === id ? { ...b, active: !b.active } : b)))
    toast({
      title: 'Status atualizado',
      description: 'As alterações foram salvas com sucesso no banco de dados.',
    })
  }

  const handleSaveNew = (e: React.FormEvent) => {
    e.preventDefault()
    setIsDialogOpen(false)
    toast({
      title: 'Corretor registrado',
      description: 'O novo corretor foi cadastrado e sincronizado com sucesso.',
    })
  }

  const viewDetails = (broker: any) => {
    setSelectedBroker(broker)
    setIsSheetOpen(true)
  }

  const filteredBrokers = brokers.filter((b) =>
    b.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Gestão de Corretores</h2>
          <p className="text-slate-500 text-sm md:text-base">
            Gerencie cadastros, status e insights analíticos da sua equipe.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          <Button variant="outline" className="gap-2 flex-1 md:flex-none">
            <Upload className="w-4 h-4" /> Importar XLS
          </Button>
          <Button variant="outline" className="gap-2 flex-1 md:flex-none">
            <Download className="w-4 h-4" /> Exportar
          </Button>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                <Plus className="w-4 h-4" /> Novo Corretor
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[450px]">
              <DialogHeader>
                <DialogTitle>Registrar Novo Corretor</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSaveNew}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Nome
                    </Label>
                    <Input id="name" required placeholder="Nome completo" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="email@exemplo.com"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="phone" className="text-right">
                      Telefone
                    </Label>
                    <Input
                      id="phone"
                      required
                      placeholder="(00) 00000-0000"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="region" className="text-right">
                      Unidade
                    </Label>
                    <Select required>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Selecione a unidade/região" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="norte">Unidade Norte</SelectItem>
                        <SelectItem value="sul">Unidade Sul</SelectItem>
                        <SelectItem value="leste">Unidade Leste</SelectItem>
                        <SelectItem value="oeste">Unidade Oeste</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Salvar Registro</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="p-4 border-b">
          <Input
            placeholder="Buscar corretor por nome..."
            className="max-w-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Nível</TableHead>
                <TableHead>Unidade</TableHead>
                <TableHead className="text-right">Vendas</TableHead>
                <TableHead className="text-right">VGV Acumulado</TableHead>
                <TableHead className="text-center">Status DB</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBrokers.map((broker) => (
                <TableRow
                  key={broker.id}
                  className={!broker.active ? 'opacity-60 bg-slate-50/50' : ''}
                >
                  <TableCell className="font-medium whitespace-nowrap">{broker.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-normal">
                      {broker.position}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-500 text-sm whitespace-nowrap">
                    {broker.region}
                  </TableCell>
                  <TableCell className="text-right">{broker.sales}</TableCell>
                  <TableCell className="text-right font-medium text-slate-700 whitespace-nowrap">
                    R$ {broker.vgv.toLocaleString('pt-BR')}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge
                      variant={broker.active ? 'default' : 'secondary'}
                      className="whitespace-nowrap"
                    >
                      {broker.active ? 'Ativo' : 'Inativo'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => viewDetails(broker)}>
                          <Eye className="w-4 h-4 mr-2" /> Ver Detalhes / IA
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => toggleActive(broker.id)}>
                          {broker.active ? 'Inativar Conta' : 'Ativar Conta'}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
              {filteredBrokers.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center text-slate-500">
                    Nenhum corretor encontrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-full sm:max-w-md overflow-y-auto">
          {selectedBroker && (
            <>
              <SheetHeader className="mb-6">
                <SheetTitle className="text-2xl">{selectedBroker.name}</SheetTitle>
                <SheetDescription className="flex items-center gap-2 mt-1">
                  <Badge variant={selectedBroker.active ? 'default' : 'secondary'}>
                    {selectedBroker.active ? 'Ativo' : 'Inativo'}
                  </Badge>
                  <Badge variant="outline">{selectedBroker.position}</Badge>
                  <Badge variant="outline">{selectedBroker.region}</Badge>
                </SheetDescription>
              </SheetHeader>

              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-3 text-sm text-slate-600 bg-slate-50 p-4 rounded-lg border">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-400" /> {selectedBroker.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-slate-400" /> {selectedBroker.phone}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="shadow-sm">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm font-medium text-slate-500">
                        Total Vendas
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 text-3xl font-bold text-slate-800">
                      {selectedBroker.sales}
                    </CardContent>
                  </Card>
                  <Card className="shadow-sm">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm font-medium text-slate-500">
                        VGV Histórico
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 text-xl font-bold text-slate-800">
                      R$ {(selectedBroker.vgv / 1000000).toFixed(1)}M
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-indigo-100 bg-indigo-50/50 shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-semibold flex items-center gap-2 text-indigo-900">
                      <Brain className="w-4 h-4 text-indigo-600" />
                      Análise de Performance (IA)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-indigo-800/90 leading-relaxed">
                    {selectedBroker.aiAnalysis}
                  </CardContent>
                </Card>

                {selectedBroker.trainingRecommendation && (
                  <Card className="border-amber-200 bg-amber-50 shadow-sm animate-in fade-in slide-in-from-bottom-2">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-semibold flex items-center gap-2 text-amber-900">
                        <TrendingDown className="w-4 h-4 text-amber-600" />
                        Alerta de Performance Baixa
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-amber-800/80">
                        A Inteligência Artificial identificou KPIs abaixo da média. Sugestão
                        automatizada de plano de desenvolvimento:
                      </p>
                      <div className="flex items-start gap-3 p-3 bg-white/70 rounded-md border border-amber-200">
                        <GraduationCap className="w-5 h-5 text-amber-600 shrink-0" />
                        <span className="text-sm font-medium text-amber-950">
                          {selectedBroker.trainingRecommendation}
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full mt-2 bg-white text-amber-700 hover:text-amber-800 hover:bg-amber-100 border-amber-300"
                      >
                        Agendar Treinamento
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  )
}
