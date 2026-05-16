import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Settings2, Target } from 'lucide-react'

export default function AdminSettings() {
  return (
    <div className="p-4 md:p-6 space-y-6 max-w-4xl mx-auto">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Configurações e Metas</h2>
        <p className="text-slate-500 text-sm md:text-base">
          Defina os parâmetros globais de metas e a lógica de privilégios da roleta de leads.
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="shadow-sm border-t-4 border-t-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-500" />
              Metas Globais da Equipe
            </CardTitle>
            <CardDescription>
              Valores base aplicados quando não há meta individual específica cadastrada.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="monthly-goal" className="font-semibold">
                  Meta Mensal (R$ VGV)
                </Label>
                <Input
                  id="monthly-goal"
                  type="number"
                  defaultValue={10000000}
                  className="font-mono text-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weekly-goal" className="font-semibold">
                  Meta Semanal (R$ VGV)
                </Label>
                <Input
                  id="weekly-goal"
                  type="number"
                  defaultValue={2500000}
                  className="font-mono text-lg"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-slate-50 border-t justify-end">
            <Button>Atualizar Metas</Button>
          </CardFooter>
        </Card>

        <Card className="shadow-sm border-t-4 border-t-indigo-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings2 className="w-5 h-5 text-indigo-500" />
              Lógica de Privilégios do Ranking
            </CardTitle>
            <CardDescription>
              Critérios automáticos para que um corretor alcance os diferentes status na
              distribuição de leads.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4 p-4 border rounded-xl bg-gradient-to-r from-slate-50 to-white">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-sm md:text-base flex items-center gap-2">
                    Nível Diamante (3x1)
                    <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] uppercase font-bold">
                      Mais Alto
                    </span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Recebe 3 leads a cada rodada padrão.
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t">
                <div className="space-y-2 pt-2">
                  <Label className="text-xs text-slate-600">VGV Mínimo Acumulado (R$)</Label>
                  <Input type="number" defaultValue={20000000} className="h-9" />
                </div>
                <div className="space-y-2 pt-2">
                  <Label className="text-xs text-slate-600">Nota Média Quiz (%)</Label>
                  <Input type="number" defaultValue={90} className="h-9" />
                </div>
              </div>
            </div>

            <div className="space-y-4 p-4 border rounded-xl bg-gradient-to-r from-slate-50 to-white">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-sm md:text-base flex items-center gap-2">
                    Nível Ouro (2x1)
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Recebe 2 leads a cada rodada padrão.
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t">
                <div className="space-y-2 pt-2">
                  <Label className="text-xs text-slate-600">VGV Mínimo Acumulado (R$)</Label>
                  <Input type="number" defaultValue={10000000} className="h-9" />
                </div>
                <div className="space-y-2 pt-2">
                  <Label className="text-xs text-slate-600">Nota Média Quiz (%)</Label>
                  <Input type="number" defaultValue={75} className="h-9" />
                </div>
              </div>
            </div>

            <div className="space-y-4 p-4 border rounded-xl border-dashed bg-slate-50/50 opacity-80">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-slate-700">
                    Nível Padrão (1x1)
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Todos os corretores ativos entram neste nível por padrão.
                  </p>
                </div>
                <Switch defaultChecked disabled />
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-slate-50 border-t justify-end">
            <Button>Salvar Lógicas</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
