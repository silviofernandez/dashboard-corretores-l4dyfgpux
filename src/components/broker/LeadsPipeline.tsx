import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Filter } from 'lucide-react'

export function LeadsPipeline() {
  return (
    <Card className="border-0 shadow-sm rounded-2xl">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="font-black text-slate-800 text-base flex items-center gap-2">
          <Filter className="w-5 h-5 text-purple-500" /> Pipeline de Leads
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="bg-slate-50 p-3 rounded-xl flex flex-col items-center justify-center text-center border border-slate-100">
            <span className="text-2xl font-black text-slate-800">24</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase">Novos</span>
          </div>
          <div className="bg-blue-50 p-3 rounded-xl flex flex-col items-center justify-center text-center border border-blue-100">
            <span className="text-2xl font-black text-blue-600">12</span>
            <span className="text-[10px] font-bold text-blue-600/70 uppercase">Em Atend.</span>
          </div>
          <div className="bg-amber-50 p-3 rounded-xl flex flex-col items-center justify-center text-center border border-amber-100">
            <span className="text-2xl font-black text-amber-600">5</span>
            <span className="text-[10px] font-bold text-amber-600/70 uppercase">Proposta</span>
          </div>
          <div className="bg-emerald-50 p-3 rounded-xl flex flex-col items-center justify-center text-center border border-emerald-100">
            <span className="text-2xl font-black text-emerald-600">3</span>
            <span className="text-[10px] font-bold text-emerald-600/70 uppercase">Fechados</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
