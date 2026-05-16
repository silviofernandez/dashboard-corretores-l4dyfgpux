import { useEffect, useState } from 'react'
import { Trophy, TrendingUp, Minus, TrendingDown, Medal, Award } from 'lucide-react'
import { initialBrokers } from '@/lib/mock-data'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'

export default function TvDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Sorted by VGV for Ranking
  const sortedBrokers = [...initialBrokers].filter((b) => b.active).sort((a, b) => b.vgv - a.vgv)

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val)

  const getStatus = (rate: number) => {
    if (rate >= 25)
      return {
        label: 'Acima do Esperado',
        class: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        Icon: TrendingUp,
      }
    if (rate >= 15)
      return {
        label: 'Dentro do Esperado',
        class: 'bg-amber-50 text-amber-700 border-amber-200',
        Icon: Minus,
      }
    return {
      label: 'Abaixo do Esperado',
      class: 'bg-rose-50 text-rose-700 border-rose-200',
      Icon: TrendingDown,
    }
  }

  const top3 = sortedBrokers.slice(0, 3)

  return (
    <div className="h-screen bg-slate-50 flex flex-col font-sans overflow-hidden selection:bg-blue-500/30">
      <header className="px-12 py-8 bg-white border-b border-slate-200 flex justify-between items-center shadow-sm shrink-0">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900">
              Ranking de Corretores
            </h1>
            <p className="text-xl text-slate-500 font-medium mt-1">
              Acompanhamento de Metas e Performance
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-4xl font-bold font-mono tracking-wider text-slate-800">
            {currentTime.toLocaleTimeString('pt-BR')}
          </p>
          <p className="text-slate-500 uppercase tracking-widest text-sm font-bold mt-2">
            {currentTime.toLocaleDateString('pt-BR', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </header>

      <main className="flex-1 p-12 overflow-hidden flex flex-col gap-10 max-w-[1800px] mx-auto w-full">
        {/* Top 3 Section */}
        <div className="grid grid-cols-3 gap-8 shrink-0">
          {top3.map((broker, index) => {
            const isFirst = index === 0
            const isSecond = index === 1
            const isThird = index === 2

            return (
              <Card
                key={broker.id}
                className={cn(
                  'relative overflow-hidden border-2 transition-transform duration-500',
                  isFirst ? 'border-yellow-400 shadow-xl shadow-yellow-400/10 scale-105 z-10' : '',
                  isSecond ? 'border-slate-300 shadow-lg bg-slate-50/50' : '',
                  isThird ? 'border-amber-700/30 shadow-lg bg-orange-50/30' : '',
                )}
              >
                {isFirst && (
                  <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500" />
                )}
                <CardContent className="p-8 flex items-center gap-6">
                  <div
                    className={cn(
                      'w-20 h-20 rounded-full flex items-center justify-center shrink-0',
                      isFirst
                        ? 'bg-yellow-100 text-yellow-600'
                        : isSecond
                          ? 'bg-slate-200 text-slate-600'
                          : 'bg-amber-100 text-amber-700',
                    )}
                  >
                    {isFirst ? (
                      <Trophy className="w-10 h-10" />
                    ) : isSecond ? (
                      <Medal className="w-10 h-10" />
                    ) : (
                      <Award className="w-10 h-10" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">
                      {index + 1}º Lugar
                    </p>
                    <h2 className="text-3xl font-black text-slate-900 truncate mb-2">
                      {broker.name}
                    </h2>
                    <p className="text-2xl font-bold text-slate-700">
                      {formatCurrency(broker.vgv)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Table Section */}
        <Card className="flex-1 flex flex-col shadow-lg border-slate-200 overflow-hidden">
          <CardHeader className="bg-white border-b border-slate-100 pb-6 pt-8 px-10 shrink-0">
            <CardTitle className="text-3xl font-black text-slate-900">
              Predições Individuais
            </CardTitle>
            <CardDescription className="text-lg text-slate-500 mt-2 font-medium">
              Projeção de fechamento calculada com base em leads na base, taxa histórica e tempo
              médio de fechamento.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 p-0 overflow-auto bg-white">
            <Table>
              <TableHeader className="bg-slate-50/50 sticky top-0 z-10 backdrop-blur-sm">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-24 text-center py-6 text-slate-500 font-bold text-base uppercase tracking-wider">
                    Pos
                  </TableHead>
                  <TableHead className="py-6 text-slate-500 font-bold text-base uppercase tracking-wider">
                    Corretor
                  </TableHead>
                  <TableHead className="text-center py-6 text-slate-500 font-bold text-base uppercase tracking-wider">
                    Leads Ativos
                  </TableHead>
                  <TableHead className="text-center py-6 text-slate-500 font-bold text-base uppercase tracking-wider">
                    Imóveis Vendidos
                  </TableHead>
                  <TableHead className="text-center py-6 text-slate-500 font-bold text-base uppercase tracking-wider">
                    Taxa de Conversão
                  </TableHead>
                  <TableHead className="text-center py-6 text-slate-500 font-bold text-base uppercase tracking-wider">
                    Status Preditivo
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedBrokers.map((broker, index) => {
                  const status = getStatus(broker.conversionRate)
                  const StatusIcon = status.Icon

                  return (
                    <TableRow key={broker.id} className="hover:bg-slate-50 transition-colors group">
                      <TableCell className="text-center py-6">
                        <span className="text-xl font-bold text-slate-400 group-hover:text-slate-600 transition-colors">
                          {index + 1}º
                        </span>
                      </TableCell>
                      <TableCell className="py-6">
                        <span className="text-2xl font-bold text-slate-900">{broker.name}</span>
                      </TableCell>
                      <TableCell className="text-center py-6">
                        <span className="text-2xl font-bold text-slate-700">{broker.leads}</span>
                      </TableCell>
                      <TableCell className="text-center py-6">
                        <span className="text-2xl font-bold text-slate-700">{broker.sales}</span>
                      </TableCell>
                      <TableCell className="text-center py-6">
                        <span className="text-2xl font-bold text-slate-700">
                          {broker.conversionRate}%
                        </span>
                      </TableCell>
                      <TableCell className="text-center py-6">
                        <div className="flex justify-center">
                          <span
                            className={cn(
                              'inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold tracking-wide shadow-sm',
                              status.class,
                            )}
                          >
                            <StatusIcon className="w-4 h-4 stroke-[3]" />
                            {status.label}
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
