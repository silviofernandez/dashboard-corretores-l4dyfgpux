import { MessageSquare } from 'lucide-react'

export function SocialFeed() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center min-h-[250px] text-slate-400">
      <div className="bg-slate-50 p-4 rounded-full mb-4">
        <MessageSquare className="w-8 h-8 text-slate-300" />
      </div>
      <p className="font-bold text-slate-500">Mural da Equipe</p>
      <p className="text-sm font-medium mt-1 text-center max-w-xs">
        Acompanhe as interações e celebre as vendas dos seus colegas por aqui.
      </p>
    </div>
  )
}
