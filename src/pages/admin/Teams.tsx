import { useState } from 'react'
import { Plus, Users, MoreHorizontal, Edit, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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
import { useToast } from '@/hooks/use-toast'
import { initialTeams, initialBrokers } from '@/lib/mock-data'

export default function AdminTeams() {
  const [teams, setTeams] = useState(initialTeams)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()

  const handleSaveNewTeam = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newTeam = {
      id: teams.length + 1,
      name: formData.get('name') as string,
    }
    setTeams([...teams, newTeam])
    setIsDialogOpen(false)
    toast({
      title: 'Equipe criada',
      description: 'A nova equipe foi adicionada com sucesso e está disponível para vinculação.',
    })
  }

  const handleDelete = (id: number) => {
    setTeams(teams.filter((t) => t.id !== id))
    toast({
      title: 'Equipe removida',
      description: 'A equipe foi excluída do sistema.',
    })
  }

  const teamsWithStats = teams.map((team) => {
    const members = initialBrokers.filter((b) => b.teamId === team.id)
    const activeMembers = members.filter((b) => b.active)
    const totalVGV = members.reduce((acc, curr) => acc + curr.vgv, 0)

    return {
      ...team,
      memberCount: activeMembers.length,
      vgv: totalVGV,
    }
  })

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Gestão de Equipes</h2>
          <p className="text-slate-500 text-sm md:text-base">
            Crie equipes para organizar e mensurar seus corretores em grupos.
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" /> Nova Equipe
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Criar Nova Equipe</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSaveNewTeam}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Nome da Equipe
                  </Label>
                  <Input
                    name="name"
                    id="name"
                    required
                    placeholder="Ex: Equipe Delta"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Salvar Equipe</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {teamsWithStats.map((team) => (
          <div
            key={team.id}
            className="bg-white rounded-xl shadow-sm border p-5 flex flex-col hover:border-slate-300 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-slate-800">{team.name}</h3>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Edit className="w-4 h-4 mr-2" /> Editar Equipe
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-red-600 focus:text-red-700"
                    onClick={() => handleDelete(team.id)}
                  >
                    <Trash className="w-4 h-4 mr-2" /> Excluir Equipe
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="mt-auto space-y-4 pt-4 border-t border-slate-100">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Corretores Vinculados</span>
                <Badge
                  variant="secondary"
                  className="font-medium bg-slate-100 text-slate-700 hover:bg-slate-200"
                >
                  {team.memberCount} ativos
                </Badge>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">VGV Total Acumulado</span>
                <span className="font-bold text-slate-700">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    maximumFractionDigits: 0,
                  }).format(team.vgv)}
                </span>
              </div>
            </div>
          </div>
        ))}
        {teamsWithStats.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-500 border-2 border-dashed rounded-xl bg-slate-50/50">
            Nenhuma equipe cadastrada no momento. Clique no botão acima para começar.
          </div>
        )}
      </div>
    </div>
  )
}
