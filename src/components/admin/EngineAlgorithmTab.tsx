import { useState } from 'react'
import { BrainCircuit, Save, AlertTriangle } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'

export function EngineAlgorithmTab() {
  const { toast } = useToast()

  const [vgvWeight, setVgvWeight] = useState([40])
  const [salesWeight, setSalesWeight] = useState([20])
  const [crmWeight, setCrmWeight] = useState([30])
  const [trainingWeight, setTrainingWeight] = useState([10])

  const totalWeight = vgvWeight[0] + salesWeight[0] + crmWeight[0] + trainingWeight[0]

  const handleSaveWeights = () => {
    if (totalWeight !== 100) {
      toast({
        variant: 'destructive',
        title: 'Erro na Configuração',
        description: 'A soma dos pesos deve ser exatamente 100%.',
      })
      return
    }
    toast({
      title: 'Nova Versão Salva',
      description: 'As configurações foram versionadas e enviadas ao motor Edge.',
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pesos do Ranking Dinâmico</CardTitle>
        <CardDescription>
          Defina a importância de cada variável no cálculo semanal da nota dos corretores. A soma
          deve ser exatamente 100%.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Soma Total:</span>
            <Badge
              variant={totalWeight === 100 ? 'default' : 'destructive'}
              className={totalWeight === 100 ? 'bg-emerald-500 hover:bg-emerald-600' : ''}
            >
              {totalWeight}%
            </Badge>
          </div>
          {totalWeight !== 100 && (
            <span className="text-xs text-red-600 font-medium flex items-center gap-1">
              <AlertTriangle className="w-4 h-4" /> Ajuste para alcançar 100%
            </span>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex justify-between">
              <Label className="font-semibold">Volume Geral de Vendas (VGV)</Label>
              <span className="text-sm font-bold text-indigo-600">{vgvWeight[0]}%</span>
            </div>
            <Slider value={vgvWeight} onValueChange={setVgvWeight} max={100} step={5} />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <Label className="font-semibold">Engajamento no CRM</Label>
              <span className="text-sm font-bold text-indigo-600">{crmWeight[0]}%</span>
            </div>
            <Slider value={crmWeight} onValueChange={setCrmWeight} max={100} step={5} />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <Label className="font-semibold">Quantidade de Vendas</Label>
              <span className="text-sm font-bold text-indigo-600">{salesWeight[0]}%</span>
            </div>
            <Slider value={salesWeight} onValueChange={setSalesWeight} max={100} step={5} />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <Label className="font-semibold">Treinamentos e Quiz</Label>
              <span className="text-sm font-bold text-indigo-600">{trainingWeight[0]}%</span>
            </div>
            <Slider value={trainingWeight} onValueChange={setTrainingWeight} max={100} step={5} />
          </div>
        </div>

        <div className="pt-6 border-t space-y-4">
          <h4 className="font-semibold text-sm">Ajustes Adicionais</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Fator Sazonal (Multiplicador)</Label>
              <Input type="number" step="0.1" defaultValue={1.0} className="w-32" />
              <p className="text-xs text-slate-500">Ex: 1.2 para Black Friday</p>
            </div>
            <div className="space-y-2">
              <Label>Janela de Análise Histórica</Label>
              <Input type="number" defaultValue={4} className="w-32" />
              <p className="text-xs text-slate-500">Semanas consideradas para tendência</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-slate-50 border-t justify-between">
        <p className="text-xs text-slate-500 flex items-center gap-1">
          <BrainCircuit className="w-4 h-4" /> Processado via Edge Functions
        </p>
        <Button onClick={handleSaveWeights} className="gap-2">
          <Save className="w-4 h-4" /> Salvar Versão do Algoritmo
        </Button>
      </CardFooter>
    </Card>
  )
}
