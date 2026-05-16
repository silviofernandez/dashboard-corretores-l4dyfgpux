import { useState } from 'react'
import { Plus, Calendar as CalendarIcon, Clock, BookOpen, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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
import { useAuth } from '@/providers/AppProviders'

export default function AdminTrainings() {
  const { trainings, addTraining, deleteTraining } = useAuth()!
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    addTraining({
      theme: formData.get('theme') as string,
      date: formData.get('date') as string,
      time: formData.get('time') as string,
    })

    setIsDialogOpen(false)
    toast({
      title: 'Treinamento agendado',
      description: 'O novo treinamento foi adicionado e está disponível para os corretores.',
    })
  }

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Treinamentos da Equipe</h2>
          <p className="text-slate-500 text-sm md:text-base">
            Agende capacitações e masterclasses para o desenvolvimento dos corretores.
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" /> Novo Treinamento
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Agendar Treinamento</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSave}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="theme" className="text-right">
                    Tema
                  </Label>
                  <Input
                    name="theme"
                    id="theme"
                    required
                    placeholder="Ex: Técnicas de Fechamento"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="date" className="text-right">
                    Data
                  </Label>
                  <Input name="date" id="date" type="date" required className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="time" className="text-right">
                    Hora
                  </Label>
                  <Input name="time" id="time" type="time" required className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Salvar Agendamento</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {trainings.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-xl shadow-sm border p-5 flex flex-col hover:border-slate-300 transition-colors relative"
          >
            <div className="absolute top-4 right-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-400 hover:text-red-600 hover:bg-red-50 h-8 w-8"
                onClick={() => {
                  deleteTraining(t.id)
                  toast({ title: 'Treinamento removido' })
                }}
              >
                <Trash className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center gap-3 mb-4 pr-8">
              <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-lg">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-slate-800 leading-tight">{t.theme}</h3>
            </div>

            <div className="mt-auto space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                <CalendarIcon className="w-4 h-4 text-slate-400" />
                {t.date.split('-').reverse().join('/')}
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                <Clock className="w-4 h-4 text-slate-400" />
                {t.time}
              </div>
            </div>
          </div>
        ))}

        {trainings.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-500 border-2 border-dashed rounded-xl bg-slate-50/50">
            Nenhum treinamento agendado no momento.
          </div>
        )}
      </div>
    </div>
  )
}
