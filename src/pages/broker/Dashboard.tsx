import { MetricsCards } from '@/components/broker/MetricsCards'
import { LeadsPipeline } from '@/components/broker/LeadsPipeline'
import { Charts } from '@/components/broker/Charts'
import { PullToRefresh } from '@/components/ui/pull-to-refresh'
import { useState } from 'react'
import { toast } from 'sonner'

export default function BrokerDashboard() {
  const [refreshKey, setRefreshKey] = useState(0)

  const handleRefresh = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setRefreshKey((prev) => prev + 1)
    if ('vibrate' in navigator) navigator.vibrate([30, 50, 30])
    toast.success('Dashboard atualizado com sucesso!')
  }

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div key={refreshKey} className="flex flex-col gap-6 md:gap-8 min-h-[calc(100vh-10rem)]">
        <header>
          <h1
            className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight"
            tabIndex={0}
          >
            Seu Desempenho
          </h1>
          <p className="text-slate-500 font-medium text-sm md:text-base mt-1">
            Confira como estão suas metas e vendas este mês.
          </p>
        </header>

        <div className="flex flex-col gap-6 w-full max-w-full overflow-x-hidden">
          <MetricsCards />
          <LeadsPipeline />

          <div className="touch-pan-y" style={{ touchAction: 'pan-y pinch-zoom' }}>
            <Charts />
          </div>
        </div>
      </div>
    </PullToRefresh>
  )
}
