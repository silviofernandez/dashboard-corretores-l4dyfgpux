import { TrendingUp, Target, DollarSign, Award } from 'lucide-react'

export function MetricsCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up">
      {[
        {
          title: 'Vendas Mês',
          value: '12',
          icon: TrendingUp,
          color: 'text-blue-600',
          bg: 'bg-blue-50',
        },
        {
          title: 'VGV Acumulado',
          value: 'R$ 2.4M',
          icon: DollarSign,
          color: 'text-emerald-600',
          bg: 'bg-emerald-50',
        },
        {
          title: 'Meta Atingida',
          value: '85%',
          icon: Target,
          color: 'text-orange-600',
          bg: 'bg-orange-50',
        },
        {
          title: 'Posição Rank',
          value: '4º',
          icon: Award,
          color: 'text-purple-600',
          bg: 'bg-purple-50',
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
        >
          <div className={`${item.bg} p-3 rounded-xl shrink-0`}>
            <item.icon className={`w-6 h-6 ${item.color}`} />
          </div>
          <div>
            <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
              {item.title}
            </p>
            <p className="text-lg sm:text-xl font-black text-slate-800">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
