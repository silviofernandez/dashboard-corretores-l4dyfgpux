import { MetricsCards } from '@/components/broker/MetricsCards'
import { LevelProgress } from '@/components/gamification/LevelProgress'
import { SocialFeed } from '@/components/gamification/SocialFeed'
import { ErrorBoundary } from '@/components/ErrorBoundary'

export default function BrokerDashboard() {
  return (
    <ErrorBoundary>
      <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8 animate-fade-in-up">
        <header className="mb-2 md:mb-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
                Olá, Ana Paula 👋
              </h2>
              <p className="text-slate-500 font-medium mt-1">Seu resumo de performance hoje.</p>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 w-fit">
              <div className="text-sm font-bold text-slate-500">Score Atual:</div>
              <div className="text-xl font-black text-blue-600">8.450 pts</div>
            </div>
          </div>
        </header>

        <MetricsCards />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <LevelProgress currentLevel={5} currentPoints={8450} nextLevelPoints={10000} />
          <SocialFeed />
        </div>
      </div>
    </ErrorBoundary>
  )
}
