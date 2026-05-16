import { useState, useEffect } from 'react'
import { Header } from '@/components/dashboard/Header'
import { Footer } from '@/components/dashboard/Footer'
import { RankingList } from '@/components/dashboard/RankingList'
import type { Broker } from '@/components/dashboard/RankingList'
import { Loader2 } from 'lucide-react'

const INITIAL_BROKERS: Broker[] = [
  {
    id: '1',
    name: 'Ricardo Mendes',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1',
    sales: 45,
    vgv: 12500000,
    status: 'Acima',
    privilege: '3x1',
  },
  {
    id: '2',
    name: 'Ana Paula Silva',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=2',
    sales: 42,
    vgv: 11200000,
    status: 'Acima',
    privilege: '3x1',
  },
  {
    id: '3',
    name: 'Carlos Eduardo',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=3',
    sales: 38,
    vgv: 9800000,
    status: 'Esperado',
    privilege: '2x1',
  },
  {
    id: '4',
    name: 'Mariana Costa',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=4',
    sales: 35,
    vgv: 8500000,
    status: 'Esperado',
    privilege: '2x1',
  },
  {
    id: '5',
    name: 'Roberto Alves',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=5',
    sales: 31,
    vgv: 7200000,
    status: 'Abaixo',
    privilege: 'Padrão',
  },
  {
    id: '6',
    name: 'Juliana Torres',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=6',
    sales: 29,
    vgv: 6800000,
    status: 'Abaixo',
    privilege: 'Padrão',
  },
  {
    id: '7',
    name: 'Fernando Lima',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=7',
    sales: 25,
    vgv: 5900000,
    status: 'Abaixo',
    privilege: 'Padrão',
  },
  {
    id: '8',
    name: 'Patrícia Rocha',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=8',
    sales: 22,
    vgv: 5100000,
    status: 'Abaixo',
    privilege: 'Padrão',
  },
  {
    id: '9',
    name: 'Gustavo Santos',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=9',
    sales: 18,
    vgv: 4200000,
    status: 'Abaixo',
    privilege: 'Padrão',
  },
  {
    id: '10',
    name: 'Beatriz Nogueira',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=10',
    sales: 15,
    vgv: 3500000,
    status: 'Abaixo',
    privilege: 'Padrão',
  },
]

export default function Index() {
  const [brokers, setBrokers] = useState<Broker[]>([])
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())
  const [loading, setLoading] = useState(true)

  const TOTAL_GOAL = 100000000

  const fetchAndShuffleData = () => {
    setTimeout(() => {
      setBrokers((current) => {
        const base = current.length > 0 ? current : INITIAL_BROKERS
        return base
          .map((b) => {
            // Occasional artificial bump to simulate live ranking updates on a real screen
            if (Math.random() > 0.8) {
              const saleDiff = Math.floor(Math.random() * 2) + 1
              const vgvDiff = saleDiff * (Math.random() * 150000 + 150000)
              return {
                ...b,
                sales: b.sales + saleDiff,
                vgv: b.vgv + vgvDiff,
              }
            }
            return b
          })
          .sort((a, b) => b.vgv - a.vgv)
      })
      setLastUpdate(new Date())
      setLoading(false)
    }, 500)
  }

  useEffect(() => {
    fetchAndShuffleData()
    const timer = setInterval(() => {
      fetchAndShuffleData()
    }, 30000) // 30s update as requested

    return () => clearInterval(timer)
  }, [])

  const currentVgv = brokers.reduce((acc, curr) => acc + curr.vgv, 0)
  const progress = Math.min((currentVgv / TOTAL_GOAL) * 100, 100)

  if (loading && brokers.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-6 text-white bg-[#020617] w-full h-full">
        <Loader2 className="w-16 h-16 animate-spin text-blue-500" />
        <h2 className="text-3xl font-medium tracking-widest animate-pulse">
          CARREGANDO RANKING...
        </h2>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]">
      <Header lastUpdate={lastUpdate} />
      <RankingList brokers={brokers} />
      <Footer progress={progress} totalGoal={TOTAL_GOAL} current={currentVgv} />
    </div>
  )
}
