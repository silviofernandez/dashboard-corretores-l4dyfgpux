import { Wand2 } from 'lucide-react'
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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { useToast } from '@/hooks/use-toast'

const mockDutyScale = [
  { id: 1, date: 'Sab, 20/05 - Manhã', broker: 'Ana Paula Silva', tier: '3x1 Diamante' },
  { id: 2, date: 'Sab, 20/05 - Tarde', broker: 'Marcos Gomes', tier: '2x1 Ouro' },
  { id: 3, date: 'Dom, 21/05 - Manhã', broker: 'Juliana Costa', tier: 'Padrão' },
  { id: 4, date: 'Dom, 21/05 - Tarde', broker: 'Ana Paula Silva', tier: '3x1 Diamante' },
]

export function EnginePrivilegesTab() {
  const { toast } = useToast()

  const handleGenerateScale = () => {
    toast({
      title: 'Escala Gerada',
      description: 'O motor processou as prioridades e gerou a escala sem conflitos.',
    })
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Regras de Distribuição</CardTitle>
          <CardDescription>
            Parâmetros para qualificar corretores nos níveis de recebimento de leads.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-800">Privilégio 3x1 (Diamante)</h4>
                <p className="text-xs text-slate-500">Recebe 3 leads por rodada</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-xs">VGV Acumulado Min.</Label>
                <Input defaultValue="1.000.000" className="mt-1 font-mono" />
              </div>
              <div>
                <Label className="text-xs">Taxa Conv. Min.</Label>
                <Input defaultValue="5%" className="mt-1 font-mono" />
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-800">Privilégio 2x1 (Ouro)</h4>
                <p className="text-xs text-slate-500">Recebe 2 leads por rodada</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-xs">VGV Acumulado Min.</Label>
                <Input defaultValue="500.000" className="mt-1 font-mono" />
              </div>
              <div>
                <Label className="text-xs">Posição no Ranking</Label>
                <Input defaultValue="Top 3" className="mt-1 font-mono" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Escala de Plantão (IA)
            <Button size="sm" onClick={handleGenerateScale} className="gap-2 shrink-0">
              <Wand2 className="w-4 h-4" /> Gerar Escala
            </Button>
          </CardTitle>
          <CardDescription>
            Distribuição automática de turnos priorizando corretores com níveis mais altos.
          </CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-nowrap">Data / Turno</TableHead>
                <TableHead>Corretor</TableHead>
                <TableHead>Nível</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockDutyScale.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="text-sm font-medium whitespace-nowrap">
                    {item.date}
                  </TableCell>
                  <TableCell className="text-sm whitespace-nowrap">{item.broker}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={`whitespace-nowrap ${
                        item.tier.includes('3x1')
                          ? 'bg-blue-100 text-blue-700'
                          : item.tier.includes('2x1')
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {item.tier}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
