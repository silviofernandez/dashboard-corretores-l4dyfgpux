import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function LeadsPipeline() {
  return (
    <Card className="border-0 shadow-sm rounded-2xl overflow-hidden">
      <CardHeader className="bg-slate-800 text-white p-6">
        <CardTitle className="font-black text-xl">Funil de Leads</CardTitle>
      </CardHeader>
      <CardContent className="p-6 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-center gap-3 hover:shadow-md hover:border-slate-200 transition-all cursor-pointer group">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest group-hover:text-slate-700 transition-colors">
              Total na base
            </span>
            <span className="text-4xl font-black text-slate-800">1.240</span>
          </div>
          <div className="bg-rose-50 p-5 rounded-2xl border border-rose-100 flex flex-col items-center justify-center text-center gap-3 hover:shadow-md hover:border-rose-200 transition-all cursor-pointer group">
            <span className="text-[10px] text-rose-500 font-bold uppercase tracking-widest group-hover:text-rose-600 transition-colors">
              Em tentativa contato (7 dias)
            </span>
            <span className="text-4xl font-black text-rose-600">85</span>
          </div>
          <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 flex flex-col items-center justify-center text-center gap-3 hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group">
            <span className="text-[10px] text-blue-500 font-bold uppercase tracking-widest group-hover:text-blue-600 transition-colors">
              Com interações
            </span>
            <span className="text-4xl font-black text-blue-600">42</span>
          </div>
          <div className="bg-purple-50 p-5 rounded-2xl border border-purple-100 flex flex-col items-center justify-center text-center gap-3 hover:shadow-md hover:border-purple-200 transition-all cursor-pointer group">
            <span className="text-[10px] text-purple-500 font-bold uppercase tracking-widest group-hover:text-purple-600 transition-colors">
              Reuniões agendadas
            </span>
            <span className="text-4xl font-black text-purple-600">18</span>
          </div>
          <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100 flex flex-col items-center justify-center text-center gap-3 hover:shadow-md hover:border-amber-200 transition-all cursor-pointer group">
            <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest group-hover:text-amber-600 transition-colors">
              Documentos coletados
            </span>
            <span className="text-4xl font-black text-amber-600">7</span>
          </div>
          <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100 flex flex-col items-center justify-center text-center gap-3 hover:shadow-md hover:border-emerald-200 transition-all cursor-pointer group">
            <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest group-hover:text-emerald-600 transition-colors">
              Em aprovação
            </span>
            <span className="text-4xl font-black text-emerald-600">4</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
