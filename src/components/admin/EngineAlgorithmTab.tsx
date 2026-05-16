import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function EngineAlgorithmTab() {
  return (
    <Card className="shadow-sm border-indigo-100">
      <CardHeader>
        <CardTitle>Configurações do Algoritmo</CardTitle>
        <CardDescription>
          Ajuste os pesos e parâmetros do motor de inteligência artificial.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="p-8 text-center text-slate-500 bg-slate-50 rounded-lg border border-dashed border-slate-200">
          Módulo de configuração de pesos em desenvolvimento.
        </div>
      </CardContent>
    </Card>
  )
}
