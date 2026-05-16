import { CheckCircle2, RefreshCw } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
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

const mockLogs = [
  {
    id: 1,
    timestamp: '16/05/2026 08:00',
    event: 'Cálculo Semanal de Ranking',
    version: 'v2.4.1',
    status: 'Sucesso',
    timeTaken: '1.2s',
  },
  {
    id: 2,
    timestamp: '15/05/2026 14:30',
    event: 'Ajuste Manual: Marcos Gomes',
    version: 'v2.4.1',
    status: 'Auditoria',
    timeTaken: '-',
  },
  {
    id: 3,
    timestamp: '14/05/2026 09:15',
    event: 'Recálculo de Privilégios (3x1, 2x1)',
    version: 'v2.4.1',
    status: 'Sucesso',
    timeTaken: '0.8s',
  },
  {
    id: 4,
    timestamp: '10/05/2026 18:00',
    event: 'Atualização de Pesos do Motor',
    version: 'v2.4.0',
    status: 'Configuração',
    timeTaken: '-',
  },
]

export function EngineLogsTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Auditoria de Cálculos</CardTitle>
        <CardDescription>
          Registro imutável de todas as execuções do motor Edge, ajustes manuais e atualizações de
          versão.
        </CardDescription>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="whitespace-nowrap">Data e Hora</TableHead>
              <TableHead>Evento Registrado</TableHead>
              <TableHead>Versão Alg.</TableHead>
              <TableHead>Tempo Exec.</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell className="text-sm font-mono text-slate-500 whitespace-nowrap">
                  {log.timestamp}
                </TableCell>
                <TableCell className="font-medium text-slate-800 whitespace-nowrap">
                  {log.event}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="font-mono text-xs whitespace-nowrap">
                    {log.version}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-slate-500 whitespace-nowrap">
                  {log.timeTaken}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={`whitespace-nowrap ${
                      log.status === 'Sucesso'
                        ? 'bg-emerald-100 text-emerald-700'
                        : log.status === 'Auditoria'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-indigo-100 text-indigo-700'
                    }`}
                  >
                    {log.status === 'Sucesso' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                    {log.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="bg-slate-50 border-t flex justify-end">
        <Button variant="outline" className="gap-2">
          <RefreshCw className="w-4 h-4" /> Exportar Logs (CSV)
        </Button>
      </CardFooter>
    </Card>
  )
}
