import { Target } from 'lucide-react'
import { MetricsCards } from '@/components/broker/MetricsCards'
import { Charts } from '@/components/broker/Charts'
import { LeadsPipeline } from '@/components/broker/LeadsPipeline'

export default function BrokerDashboard() {
  return (
    <div className="space-y-6 lg:space-y-8 pb-10">
      {/* Alert Banner */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-400 text-white p-6 rounded-3xl shadow-lg shadow-emerald-500/20 flex items-center justify-between">
        <div>
          <p className="font-black text-xl md:text-2xl mb-2 flex items-center gap-2">
            Status: No Caminho Certo! <span className="text-2xl">🚀</span>
          </p>
          <p className="text-emerald-50 font-medium text-sm md:text-base max-w-2xl leading-relaxed">
            Você está 15% acima da sua meta semanal. Continue focando nos leads em "Reuniões
            agendadas" para fechar mais vendas e garantir seu bônus de performance.
          </p>
        </div>
        <Target className="w-16 h-16 opacity-20 hidden md:block shrink-0" />
      </div>

      <MetricsCards />
      <Charts />
      <LeadsPipeline />
    </div>
  )
}
