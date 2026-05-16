import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { RefreshCcw, CheckCircle, XCircle } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'

const logs = [
  {
    id: 1,
    time: '10:45:22',
    entity: 'Leads',
    status: 'success',
    message: 'Sincronizado com sucesso (45 registros)',
  },
  {
    id: 2,
    time: '10:30:15',
    entity: 'Vendas',
    status: 'success',
    message: 'Sincronizado com sucesso (2 registros)',
  },
  {
    id: 3,
    time: '10:15:00',
    entity: 'Corretores',
    status: 'error',
    message: 'Falha de autenticação - Token expirado',
  },
  {
    id: 4,
    time: '10:00:22',
    entity: 'Leads',
    status: 'success',
    message: 'Sincronizado com sucesso (30 registros)',
  },
  {
    id: 5,
    time: '09:45:10',
    entity: 'Leads',
    status: 'success',
    message: 'Sincronizado com sucesso (12 registros)',
  },
  {
    id: 6,
    time: '09:30:05',
    entity: 'Leads',
    status: 'success',
    message: 'Sincronizado com sucesso (18 registros)',
  },
]

export default function AdminIntegrations() {
  return (
    <div className="p-4 md:p-6 space-y-6 max-w-5xl mx-auto">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Hub de Integrações</h2>
        <p className="text-slate-500 text-sm md:text-base">
          Gerencie a conexão com seu CRM (C2S) e monitore o fluxo de dados.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              CRM C2S
              <Badge className="bg-emerald-500 hover:bg-emerald-600">Conectado</Badge>
            </CardTitle>
            <CardDescription>Status da integração principal</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm bg-slate-50 p-4 rounded-lg border">
              <div className="space-y-1">
                <p className="text-slate-500">Última Sincronização</p>
                <p className="font-medium text-slate-900">Hoje, 10:45</p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-500">Registros Hoje</p>
                <p className="font-medium text-slate-900">1.245</p>
              </div>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Button variant="outline" className="w-full gap-2">
                <RefreshCcw className="w-4 h-4" />
                Sincronizar
              </Button>
              <Button variant="default" className="w-full">
                Configurar API
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Logs de Sincronização</CardTitle>
            <CardDescription>Histórico recente de comunicação com a API</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[250px] pr-4">
              <div className="space-y-4">
                {logs.map((log) => (
                  <div
                    key={log.id}
                    className="flex items-start gap-3 text-sm p-3 rounded-md transition-colors hover:bg-slate-50 border border-transparent hover:border-slate-100"
                  >
                    {log.status === 'success' ? (
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                    )}
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-900">{log.entity}</span>
                        <span className="text-xs text-slate-500">{log.time}</span>
                      </div>
                      <p className="text-slate-600 text-xs">{log.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
