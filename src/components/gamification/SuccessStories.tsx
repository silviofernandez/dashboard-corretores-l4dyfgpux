import { Star } from 'lucide-react'

export function SuccessStories() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center min-h-[150px] text-slate-400">
      <div className="bg-slate-50 p-3 rounded-full mb-3">
        <Star className="w-6 h-6 text-slate-300" />
      </div>
      <p className="font-bold text-sm text-slate-500">Histórias Inspiradoras</p>
      <p className="text-xs font-medium mt-1">Carregando relatos impressionantes...</p>
    </div>
  )
}
