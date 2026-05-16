import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Save, TrendingUp, Trophy, Zap } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const data = [
  { name: 'Sem 1', points: 40000 },
  { name: 'Sem 2', points: 30000 },
  { name: 'Sem 3', points: 50000 },
  { name: 'Sem 4', points: 48500 },
]

export default function AdminGamification() {
  const { toast } = useToast()

  const handleSave = () => {
    toast({
      title: 'Configurações salvas',
      description: 'As regras do motor de pontuação foram atualizadas com sucesso.',
    })
  }

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-6xl mx-auto pb-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2">
          <Trophy className="w-8 h-8 text-amber-500" />
          Analytics & Motor Gamificação
        </h2>
        <p className="text-slate-500 text-sm md:text-base mt-1">
          Analise o engajamento da equipe e configure os pesos do sistema de recompensas.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="shadow-sm border-indigo-100 bg-indigo-50/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold text-slate-500 uppercase tracking-widest">
              Total Distribuído
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-indigo-700">
              168.500 <span className="text-sm opacity-60 font-medium">pts</span>
            </div>
            <p className="text-xs font-bold text-slate-500 mt-1 flex items-center gap-1">
              Neste mês
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-amber-100 bg-amber-50/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold text-slate-500 uppercase tracking-widest">
              Conquistas Desbloqueadas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-amber-600">342</div>
            <p className="text-xs font-bold text-slate-500 mt-1">Top badge: Vendedor do Mês</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-emerald-100 bg-emerald-50/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold text-slate-500 uppercase tracking-widest">
              Engajamento Médio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-emerald-600">85%</div>
            <p className="text-xs font-bold text-emerald-600 mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +5% vs último mês
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="analytics" className="w-full">
        <TabsList className="mb-6 h-auto p-1 bg-slate-100">
          <TabsTrigger value="analytics" className="py-2.5 px-6 font-bold">
            Visão Geral
          </TabsTrigger>
          <TabsTrigger value="rules" className="py-2.5 px-6 font-bold">
            Motor de Pontos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="analytics" className="space-y-6 animate-fade-in-up">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Evolução de Pontos Distribuídos</CardTitle>
              <CardDescription>
                Volume total de pontos ganhos pela equipe ao longo das semanas.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ChartContainer
                config={{ points: { label: 'Pontos XP', color: 'hsl(var(--primary))' } }}
                className="h-full w-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tickMargin={10}
                      tick={{ fill: '#64748b', fontWeight: 600 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(val) => `${val / 1000}k`}
                      tick={{ fill: '#64748b', fontWeight: 600 }}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="points" fill="var(--color-points)" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rules" className="animate-fade-in-up">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-indigo-500" /> Configuração do Motor
              </CardTitle>
              <CardDescription>
                Ajuste o peso e os ganhos de XP para cada ação do corretor na plataforma.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-2">
                  <Label className="font-bold text-slate-700">Pontos por Venda Fechada</Label>
                  <Input
                    type="number"
                    defaultValue="100"
                    className="font-mono text-lg font-bold bg-slate-50"
                  />
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    XP Base
                  </p>
                </div>
                <div className="space-y-2">
                  <Label className="font-bold text-slate-700">Multiplicador VGV (R$ 1.000)</Label>
                  <Input
                    type="number"
                    defaultValue="1"
                    className="font-mono text-lg font-bold bg-slate-50"
                  />
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    Porção Variável
                  </p>
                </div>
                <div className="space-y-2">
                  <Label className="font-bold text-slate-700">
                    Engajamento CRM (Lead completo)
                  </Label>
                  <Input
                    type="number"
                    defaultValue="50"
                    className="font-mono text-lg font-bold bg-slate-50"
                  />
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    Bônus Adoção
                  </p>
                </div>
                <div className="space-y-2">
                  <Label className="font-bold text-slate-700">Conclusão de Quiz / Prova</Label>
                  <Input
                    type="number"
                    defaultValue="25"
                    className="font-mono text-lg font-bold bg-slate-50"
                  />
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    Treinamento Contínuo
                  </p>
                </div>
                <div className="space-y-2">
                  <Label className="font-bold text-slate-700">Conclusão Módulo EAD</Label>
                  <Input
                    type="number"
                    defaultValue="100"
                    className="font-mono text-lg font-bold bg-slate-50"
                  />
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    Capacitação
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <Button
                  onClick={handleSave}
                  size="lg"
                  className="w-full sm:w-auto gap-2 font-bold bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  <Save className="w-4 h-4" /> Salvar Configurações do Motor
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
