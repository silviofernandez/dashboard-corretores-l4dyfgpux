import { RankingList } from '@/components/dashboard/RankingList'
import { initialBrokers } from '@/lib/mock-data'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Dashboard() {
  // Map our mock brokers to the expected interface structure for RankingList
  const brokers = initialBrokers
    .map((b) => ({
      id: b.id.toString(),
      name: b.name,
      avatar: `https://img.usecurling.com/ppl/thumbnail?gender=${
        b.name.toLowerCase().includes('a') && !b.name.toLowerCase().includes('eduardo')
          ? 'female'
          : 'male'
      }&seed=${b.id}`,
      sales: b.sales,
      vgv: b.vgv,
      status: b.active ? 'Acima' : 'Abaixo',
      privilege: b.position,
    }))
    .sort((a, b) => b.vgv - a.vgv)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 flex flex-col animate-in fade-in">
      <header className="mb-8 flex items-center justify-between gap-4">
        <Button
          asChild
          variant="ghost"
          className="text-slate-400 hover:text-white hover:bg-slate-800 hidden sm:flex shrink-0"
        >
          <Link to="/admin">
            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar ao Painel
          </Link>
        </Button>
        <h1 className="text-2xl md:text-4xl font-black text-center text-white drop-shadow-md flex-1 tracking-tight">
          Ranking de Corretores
        </h1>
        <div className="w-32 hidden sm:block shrink-0"></div>
      </header>
      <main className="flex-1 w-full max-w-5xl mx-auto bg-slate-900/60 rounded-[2rem] p-2 md:p-6 backdrop-blur-xl border border-slate-800/80 shadow-2xl overflow-hidden flex flex-col relative z-10">
        <RankingList brokers={brokers} />
      </main>
    </div>
  )
}
