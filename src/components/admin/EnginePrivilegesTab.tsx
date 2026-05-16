import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function EnginePrivilegesTab() {
  return (
    <Card className="shadow-sm border-indigo-100">
      <CardHeader>
        <CardTitle>Privilégios Automáticos</CardTitle>
        <CardDescription>
          Gerencie as regras de distribuição de leads por performance e tier.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="p-8 text-center text-slate-500 bg-slate-50 rounded-lg border border-dashed border-slate-200">
          Módulo de distribuição inteligente em desenvolvimento.
        </div>
      </CardContent>
    </Card>
  )
}
