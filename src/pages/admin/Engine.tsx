import { BrainCircuit, Sliders, LineChart, ShieldCheck, History } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { EngineAlgorithmTab } from '@/components/admin/EngineAlgorithmTab'
import { EnginePredictiveTab } from '@/components/admin/EnginePredictiveTab'
import { EnginePrivilegesTab } from '@/components/admin/EnginePrivilegesTab'
import { EngineLogsTab } from '@/components/admin/EngineLogsTab'

export default function AdminEngine() {
  return (
    <div className="p-4 md:p-6 space-y-6 max-w-6xl mx-auto pb-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2">
          <BrainCircuit className="w-8 h-8 text-indigo-600" />
          Motor de Inteligência
        </h2>
        <p className="text-slate-500 text-sm md:text-base mt-1">
          Configure pesos de ranking, visualize projeções preditivas e gerencie automações de
          privilégios.
        </p>
      </div>

      <Tabs defaultValue="algorithm" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto mb-6 gap-2">
          <TabsTrigger value="algorithm" className="py-2.5">
            <Sliders className="w-4 h-4 mr-2" /> Algoritmo
          </TabsTrigger>
          <TabsTrigger value="predictive" className="py-2.5">
            <LineChart className="w-4 h-4 mr-2" /> Projeções
          </TabsTrigger>
          <TabsTrigger value="privileges" className="py-2.5">
            <ShieldCheck className="w-4 h-4 mr-2" /> Privilégios
          </TabsTrigger>
          <TabsTrigger value="logs" className="py-2.5">
            <History className="w-4 h-4 mr-2" /> Auditoria
          </TabsTrigger>
        </TabsList>

        <TabsContent value="algorithm" className="animate-in fade-in-50">
          <EngineAlgorithmTab />
        </TabsContent>

        <TabsContent value="predictive" className="animate-in fade-in-50">
          <EnginePredictiveTab />
        </TabsContent>

        <TabsContent value="privileges" className="animate-in fade-in-50">
          <EnginePrivilegesTab />
        </TabsContent>

        <TabsContent value="logs" className="animate-in fade-in-50">
          <EngineLogsTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}
