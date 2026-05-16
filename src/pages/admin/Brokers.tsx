import { useState } from 'react'
import { Plus, Download, Upload, MoreHorizontal } from 'lucide-react'
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

const initialBrokers = [
  {
    id: 1,
    name: 'Ricardo Mendes',
    position: 'Sênior',
    sales: 45,
    vgv: 12500000,
    training: 100,
    quiz: 95,
    docs: 'Ok',
    active: true,
  },
  {
    id: 2,
    name: 'Ana Paula Silva',
    position: 'Pleno',
    sales: 42,
    vgv: 11200000,
    training: 80,
    quiz: 88,
    docs: 'Pendente',
    active: true,
  },
  {
    id: 3,
    name: 'Carlos Eduardo',
    position: 'Júnior',
    sales: 38,
    vgv: 9800000,
    training: 60,
    quiz: 75,
    docs: 'Vencido',
    active: true,
  },
  {
    id: 4,
    name: 'Mariana Costa',
    position: 'Sênior',
    sales: 35,
    vgv: 8500000,
    training: 100,
    quiz: 90,
    docs: 'Ok',
    active: false,
  },
]

export default function AdminBrokers() {
  const [brokers, setBrokers] = useState(initialBrokers)
  const [searchTerm, setSearchTerm] = useState('')

  const toggleActive = (id: number) => {
    setBrokers(brokers.map((b) => (b.id === id ? { ...b, active: !b.active } : b)))
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
            Gerencie sua equipe, métricas e documentações.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          <Button
            variant="outline"
            className="gap-2 flex-1 md:flex-none"
            onClick={() => document.getElementById('file-upload')?.click()}
          >
            <Upload className="w-4 h-4" />
            <span className="hidden sm:inline">Importar XLS</span>
            <input id="file-upload" type="file" accept=".csv, .xlsx" className="hidden" />
          </Button>
          <Button variant="outline" className="gap-2 flex-1 md:flex-none">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Exportar</span>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                <Plus className="w-4 h-4" />
                Novo Corretor
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Adicionar Novo Corretor</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Nome
                  </Label>
                  <Input id="name" placeholder="Nome completo" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="position" className="text-right">
                    Nível
                  </Label>
                  <Input id="position" placeholder="Júnior, Pleno, Sênior" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <DialogTrigger asChild>
                  <Button type="button">Salvar</Button>
                </DialogTrigger>
              </DialogFooter>
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
                <TableHead className="text-right">Vendas</TableHead>
                <TableHead className="text-right">VGV (R$)</TableHead>
                <TableHead className="text-center">Treinamento</TableHead>
                <TableHead className="text-center">Quiz</TableHead>
                <TableHead className="text-center">Docs</TableHead>
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
                  <TableCell>
                    <Badge variant="outline" className="font-normal">
                      {broker.position}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{broker.sales}</TableCell>
                  <TableCell className="text-right font-medium text-slate-700 whitespace-nowrap">
                    {broker.vgv.toLocaleString('pt-BR')}
                  </TableCell>
                  <TableCell className="text-center min-w-[100px]">
                    <div className="w-full bg-slate-100 rounded-full h-1.5 mt-1 relative overflow-hidden">
                      <div
                        className="bg-blue-600 h-full absolute left-0 top-0"
                        style={{ width: `${broker.training}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-slate-500">{broker.training}%</span>
                  </TableCell>
                  <TableCell className="text-center">{broker.quiz}</TableCell>
                  <TableCell className="text-center">
                    <Badge
                      variant={
                        broker.docs === 'Ok'
                          ? 'default'
                          : broker.docs === 'Pendente'
                            ? 'secondary'
                            : 'destructive'
                      }
                      className={broker.docs === 'Ok' ? 'bg-emerald-500 hover:bg-emerald-600' : ''}
                    >
                      {broker.docs}
                    </Badge>
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
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => toggleActive(broker.id)}>
                          {broker.active ? 'Inativar' : 'Ativar'}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
              {filteredBrokers.length === 0 && (
                <TableRow>
                  <TableCell colSpan={9} className="h-24 text-center text-slate-500">
                    Nenhum corretor encontrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
