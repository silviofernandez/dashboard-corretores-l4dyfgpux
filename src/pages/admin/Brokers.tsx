import { useState } from 'react'
import { Plus, Download, Upload, MoreHorizontal, Eye } from 'lucide-react'
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
import { useToast } from '@/hooks/use-toast'
import { initialBrokers, initialTeams } from '@/lib/mock-data'
import { BrokerSheet } from '@/components/admin/BrokerSheet'

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

  const handleSaveNew = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const teamIdStr = formData.get('teamId') as string
    const team = initialTeams.find((t) => t.id.toString() === teamIdStr)
    const newBroker = {
      id: brokers.length + 1,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      region: formData.get('region') as string,
      teamId: team ? team.id : null,
      teamName: team ? team.name : 'Sem Equipe',
      position: 'Júnior',
      leads: 0,
      interactions: 0,
      visits: 0,
      foldersUploaded: 0,
      foldersRejected: 0,
      purchaseConditions: 0,
      sales: 0,
      conversionRate: 0,
      vgv: 0,
      vgc: 0,
      netCommission: 0,
      active: true,
      aiAnalysis: 'Novo corretor. Coletando dados para análise de performance...',
      deficiencies: [],
      trainingRecommendation: 'Onboarding Inicial de Vendas',
      feedbacks: [],
      assignedTrainings: [],
    }
    setBrokers([...brokers, newBroker])
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

  const handleUpdateBroker = (updatedBroker: any) => {
    setBrokers(brokers.map((b) => (b.id === updatedBroker.id ? updatedBroker : b)))
    setSelectedBroker(updatedBroker)
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
            <Upload className="w-4 h-4" /> Importar
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
                    <Input
                      name="name"
                      id="name"
                      required
                      placeholder="Nome completo"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input
                      name="email"
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
                      name="phone"
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
                    <Select name="region" required>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Selecione a unidade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Unidade Norte">Unidade Norte</SelectItem>
                        <SelectItem value="Unidade Sul">Unidade Sul</SelectItem>
                        <SelectItem value="Unidade Leste">Unidade Leste</SelectItem>
                        <SelectItem value="Unidade Oeste">Unidade Oeste</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="teamId" className="text-right">
                      Equipe
                    </Label>
                    <Select name="teamId" required>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Selecione a equipe" />
                      </SelectTrigger>
                      <SelectContent>
                        {initialTeams.map((team) => (
                          <SelectItem key={team.id} value={team.id.toString()}>
                            {team.name}
                          </SelectItem>
                        ))}
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
                <TableHead>Equipe / Unidade</TableHead>
                <TableHead className="text-right">Leads Gerados</TableHead>
                <TableHead className="text-right">Imóveis Vendidos</TableHead>
                <TableHead className="text-right">Taxa Conversão</TableHead>
                <TableHead className="text-center">Status</TableHead>
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
                  <TableCell className="whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-700">{broker.teamName}</span>
                      <span className="text-xs text-slate-500">{broker.region}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{broker.leads}</TableCell>
                  <TableCell className="text-right">{broker.sales}</TableCell>
                  <TableCell className="text-right font-medium text-slate-700 whitespace-nowrap">
                    {broker.conversionRate}%
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
                          {broker.active ? 'Inativar Corretor' : 'Ativar Corretor'}
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

      <BrokerSheet
        selectedBroker={selectedBroker}
        isOpen={isSheetOpen}
        onOpenChange={setIsSheetOpen}
        onUpdateBroker={handleUpdateBroker}
      />
    </div>
  )
}
