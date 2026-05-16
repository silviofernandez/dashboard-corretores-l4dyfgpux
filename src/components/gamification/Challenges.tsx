import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Target } from 'lucide-react'

export function Challenges() {
  return (
    <Card className="border-0 shadow-sm rounded-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="w-5 h-5 text-blue-500" />
          Desafios Ativos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-slate-800">Sprint de Vendas</h4>
              <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded-md">
                2 dias restantes
              </span>
            </div>
            <p className="text-sm text-slate-500 mb-3">
              Feche 3 contratos até sexta-feira para ganhar um bônus de 500 XP.
            </p>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full rounded-full" style={{ width: '66%' }} />
            </div>
            <div className="text-right text-xs font-bold text-slate-400 mt-2">2/3 concluídos</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
