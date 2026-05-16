import { useMemo } from 'react'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { useAuth } from '@/providers/AppProviders'
import { initialBrokers } from '@/lib/mock-data'
import { useState } from 'react'
import { Trophy, Brain, TrendingUp, LogOut, Calendar, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useToast } from '@/hooks/use-toast'

export default function BrokerDashboard() {
  const authContext = useAuth()
  const [isTrainingsOpen, setIsTrainingsOpen] = useState(false)
  const { toast } = useToast()
  const navigate = useNavigate()

  const user = useMemo(() => authContext?.user || { name: 'Corretor', email: '' }, [authContext])

  const handleLogout = () => {
    if (authContext) {
      authContext.logout()
    }
    navigate('/login')
  }

  const brokerProfile = useMemo(() => {
    const match = initialBrokers.find((b) => b.email === user.email || b.name === user.name)
    return match || initialBrokers[0]
  }, [user])

  const ranking = useMemo(() => {
    const sorted = [...initialBrokers].sort((a, b) => b.vgv - a.vgv)
    const position = sorted.findIndex((b) => b.id === brokerProfile.id) + 1
    return position > 0 ? position : '-'
  }, [brokerProfile])

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val)

  const handleEnroll = (theme: string) => {
    toast({
      title: 'Inscrição Confirmada!',
      description: `Você foi inscrito no treinamento: ${theme}`,
    })
    setIsTrainingsOpen(false)
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <header className="bg-white border-b px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <Trophy className="text-blue-600 w-6 h-6" />
            <h1 className="text-xl font-bold text-slate-800">Meu Painel</h1>
          </div>
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="text-slate-500 hover:text-red-600"
          >
            <LogOut className="w-4 h-4 mr-2" /> Sair
          </Button>
        </header>

        <main className="flex-1 p-4 md:p-8 max-w-5xl mx-auto w-full space-y-6 md:space-y-8 animate-fade-in-up">
          <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-4xl font-black border-4 border-blue-50 shrink-0">
              {ranking}º
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-2">
                Sua Posição no Ranking
              </h2>
              <p className="text-slate-500 text-lg">
                Parabéns pelo esforço, <strong>{user.name}</strong>! Continue focado para subir no
                ranking.
              </p>
            </div>
            <div className="text-center bg-slate-50 p-4 rounded-2xl w-full md:w-auto">
              <p className="text-sm font-bold text-slate-500 uppercase mb-1">VGV Total</p>
              <p className="text-3xl font-black text-emerald-600">
                {formatCurrency(brokerProfile.vgv)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-sm border-slate-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold text-slate-500 uppercase">
                  Leads Gerados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-black text-slate-800">{brokerProfile.leads}</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm border-slate-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold text-slate-500 uppercase">
                  Vendas Fechadas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-black text-slate-800">{brokerProfile.sales}</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm border-slate-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold text-slate-500 uppercase">
                  Conversão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-black text-slate-800">
                  {brokerProfile.conversionRate}%
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-indigo-100 bg-gradient-to-br from-indigo-50 to-white shadow-sm overflow-hidden">
            <div className="h-2 w-full bg-indigo-500"></div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-indigo-900 text-xl">
                <Brain className="w-6 h-6 text-indigo-600" /> Dicas de Melhoria por IA
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Análise de Performance</h4>
                <p className="text-slate-600 leading-relaxed bg-white p-4 rounded-xl border border-indigo-100/50 shadow-sm">
                  {brokerProfile.aiAnalysis}
                </p>
              </div>

              {brokerProfile.deficiencies.length > 0 && (
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">Pontos de Atenção</h4>
                  <ul className="space-y-2">
                    {brokerProfile.deficiencies.map((def, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 bg-white p-3 rounded-lg border border-rose-100"
                      >
                        <TrendingUp className="w-5 h-5 text-rose-500 mt-0.5 shrink-0" />
                        <span className="text-slate-700">{def}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {brokerProfile.trainingRecommendation && (
                <div className="bg-indigo-600 text-white p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-indigo-100 uppercase text-xs mb-1">
                      Recomendação de Treinamento
                    </h4>
                    <p className="font-bold text-lg">{brokerProfile.trainingRecommendation}</p>
                  </div>
                  <Button
                    variant="secondary"
                    className="w-full md:w-auto font-bold bg-white text-indigo-700 hover:bg-indigo-50"
                    onClick={() => setIsTrainingsOpen(true)}
                  >
                    Inscrever-se
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </main>

        <Dialog open={isTrainingsOpen} onOpenChange={setIsTrainingsOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Treinamentos Disponíveis</DialogTitle>
            </DialogHeader>
            <div className="py-4 space-y-4">
              {authContext?.trainings && authContext.trainings.length > 0 ? (
                authContext.trainings.map((t) => (
                  <div
                    key={t.id}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <h4 className="font-bold text-slate-800">{t.theme}</h4>
                      {(t as any).description && (
                        <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                          {(t as any).description}
                        </p>
                      )}
                      <div className="flex items-center gap-4 mt-2 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" /> {t.date.split('-').reverse().join('/')}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" /> {t.time}
                        </span>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleEnroll(t.theme)}
                      className="w-full sm:w-auto shrink-0 bg-indigo-600 hover:bg-indigo-700"
                    >
                      Confirmar
                    </Button>
                  </div>
                ))
              ) : (
                <p className="text-slate-500 text-center py-6">
                  Nenhum treinamento agendado no momento.
                </p>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </ErrorBoundary>
  )
}
