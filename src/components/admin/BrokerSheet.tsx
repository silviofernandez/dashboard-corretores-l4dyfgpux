import { Mail, Phone, Brain, GraduationCap, Activity } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function BrokerSheet({
  selectedBroker,
  isOpen,
  onOpenChange,
}: {
  selectedBroker: any
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}) {
  if (!selectedBroker) return null

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl">{selectedBroker.name}</SheetTitle>
          <SheetDescription className="flex items-center gap-2 mt-2 flex-wrap">
            <Badge variant={selectedBroker.active ? 'default' : 'secondary'}>
              {selectedBroker.active ? 'Ativo' : 'Inativo'}
            </Badge>
            {selectedBroker.teamName && (
              <Badge variant="outline" className="bg-blue-50/50 text-blue-700 border-blue-200">
                {selectedBroker.teamName}
              </Badge>
            )}
            <Badge variant="outline">{selectedBroker.position}</Badge>
            <Badge variant="outline">{selectedBroker.region}</Badge>
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-3 text-sm text-slate-600 bg-slate-50 p-4 rounded-lg border">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-slate-400" /> {selectedBroker.email}
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-slate-400" /> {selectedBroker.phone}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Card className="shadow-sm">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-xs font-medium text-slate-500">Leads</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 text-xl font-bold text-slate-800">
                {selectedBroker.leads}
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-xs font-medium text-slate-500">Vendas</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 text-xl font-bold text-slate-800">
                {selectedBroker.sales}
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-xs font-medium text-slate-500">Conversão</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 text-xl font-bold text-slate-800">
                {selectedBroker.conversionRate}%
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4 pt-2">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Brain className="w-5 h-5 text-indigo-600" /> Módulo de Insights IA
            </h3>

            <Card className="border-indigo-100 bg-indigo-50/50 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold flex items-center gap-2 text-indigo-900">
                  Análise e Diagnóstico
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-indigo-900/90 leading-relaxed">
                <p>{selectedBroker.aiAnalysis}</p>

                {selectedBroker.deficiencies && selectedBroker.deficiencies.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-indigo-200/50">
                    <h4 className="font-bold text-red-700 mb-2 flex items-center gap-1">
                      <Activity className="w-4 h-4" /> Pontos Fracos Identificados
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-red-800/90">
                      {selectedBroker.deficiencies.map((def: string, idx: number) => (
                        <li key={idx}>{def}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

            {selectedBroker.trainingRecommendation && (
              <Card className="border-amber-200 bg-amber-50 shadow-sm animate-in fade-in slide-in-from-bottom-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-bold flex items-center gap-2 text-amber-900">
                    <GraduationCap className="w-4 h-4 text-amber-600" />
                    Sugestões de Treinamento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-amber-900/80">
                    Ação recomendada para melhorar os resultados do corretor:
                  </p>
                  <div className="flex items-start gap-3 p-3 bg-white/80 rounded-md border border-amber-200 shadow-sm">
                    <span className="text-sm font-semibold text-amber-950">
                      {selectedBroker.trainingRecommendation}
                    </span>
                  </div>
                  <Button
                    variant="default"
                    className="w-full mt-2 bg-amber-600 hover:bg-amber-700 text-white border-none shadow-sm font-medium transition-colors"
                  >
                    Agendar Treinamento
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
