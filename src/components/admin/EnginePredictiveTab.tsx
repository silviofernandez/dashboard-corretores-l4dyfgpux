import { Edit3, TrendingUp, TrendingDown, Minus, Lightbulb } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

const mockPredictions = [
  {
    id: 1,
    name: 'Ana Paula Silva',
    leads: 45,
    convRate: 8.5,
    projectedVgv: 2800000,
    goal: 2000000,
    status: 'Acima do Esperado',
  },
  {
    id: 2,
    name: 'Marcos Gomes',
    leads: 32,
    convRate: 5.2,
    projectedVgv: 1500000,
    goal: 1600000,
    status: 'Dentro do Esperado',
  },
  {
    id: 3,
    name: 'Carlos Eduardo',
    leads: 18,
    convRate: 2.1,
    projectedVgv: 450000,
    goal: 1500000,
    status: 'Abaixo do Esperado',
  },
]

export function EnginePredictiveTab() {
  const { toast } = useToast()

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val)

  const handleManualAdjust = (name: string) => {
    toast({
      title: 'Ajuste Manual Iniciado',
      description: `Abrindo painel de override para ${name}.`,
    })
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="md:col-span-2 shadow-sm border-indigo-100">
        <CardHeader>
          <CardTitle>Predições Individuais</CardTitle>
          <CardDescription>
            Projeção de fechamento calculada com base em leads na base, taxa histórica e tempo médio
            de fechamento.
          </CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Corretor</TableHead>
                <TableHead className="text-right">Leads Ativos</TableHead>
                <TableHead className="text-right">Taxa Conv.</TableHead>
                <TableHead className="text-right">Fechamento Proj.</TableHead>
                <TableHead className="text-center">Status Preditivo</TableHead>
                <TableHead className="text-right">Ação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPredictions.map((broker) => (
                <TableRow key={broker.id}>
                  <TableCell className="font-medium whitespace-nowrap">{broker.name}</TableCell>
                  <TableCell className="text-right">{broker.leads}</TableCell>
                  <TableCell className="text-right">{broker.convRate}%</TableCell>
                  <TableCell className="text-right font-bold text-slate-700 whitespace-nowrap">
                    {formatCurrency(broker.projectedVgv)}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge
                      variant="outline"
                      className={
                        broker.status === 'Acima do Esperado'
                          ? 'bg-green-50 text-green-700 border-green-200 whitespace-nowrap'
                          : broker.status === 'Dentro do Esperado'
                            ? 'bg-yellow-50 text-yellow-700 border-yellow-200 whitespace-nowrap'
                            : 'bg-red-50 text-red-700 border-red-200 whitespace-nowrap'
                      }
                    >
                      {broker.status === 'Acima do Esperado' && (
                        <TrendingUp className="w-3 h-3 mr-1" />
                      )}
                      {broker.status === 'Dentro do Esperado' && <Minus className="w-3 h-3 mr-1" />}
                      {broker.status === 'Abaixo do Esperado' && (
                        <TrendingDown className="w-3 h-3 mr-1" />
                      )}
                      {broker.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleManualAdjust(broker.name)}
                    >
                      <Edit3 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-orange-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-800">
            <Lightbulb className="w-5 h-5 text-orange-600" />
            Padrões Detectados (ML)
          </CardTitle>
          <CardDescription className="text-orange-700/80">
            Fatores de sucesso identificados pelo motor nas últimas 4 semanas.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white/60 p-3 rounded-lg border border-orange-200 text-sm">
            <p className="font-semibold text-slate-800 mb-1">Velocidade de Contato</p>
            <p className="text-slate-600">
              Corretores que iniciam contato em menos de{' '}
              <span className="font-bold text-orange-700">5 minutos</span> convertem 30% a mais.
            </p>
          </div>
          <div className="bg-white/60 p-3 rounded-lg border border-orange-200 text-sm">
            <p className="font-semibold text-slate-800 mb-1">Qualificação de Leads</p>
            <p className="text-slate-600">
              Leads marcados com "interesse alto" no primeiro dia reduzem o ciclo em{' '}
              <span className="font-bold text-orange-700">40%</span>.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
