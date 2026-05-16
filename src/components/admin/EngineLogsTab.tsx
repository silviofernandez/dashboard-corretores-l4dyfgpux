import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function EngineLogsTab() {
  return (
    <Card className="shadow-sm border-indigo-100">
      <CardHeader>
        <CardTitle>Auditoria de IA</CardTitle>
        <CardDescription>
          Histórico de decisões e análises geradas pelo motor preditivo.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="p-8 text-center text-slate-500 bg-slate-50 rounded-lg border border-dashed border-slate-200">
          Nenhum log crítico registrado nas últimas 24 horas.
        </div>
      </CardContent>
    </Card>
  )
}
