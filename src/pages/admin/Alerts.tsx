import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'
import {
  MessageSquare,
  Mail,
  Zap,
  TrendingDown,
  Map,
  Clock,
  Smartphone,
  Send,
  LayoutDashboard,
  ShieldAlert,
  Users,
  CheckCircle2,
} from 'lucide-react'

const deliveryLogs = [
  {
    id: 1,
    type: 'WhatsApp',
    to: 'Carlos Eduardo',
    trigger: 'Sem Interação (7d)',
    status: 'Enviado',
    time: 'Há 10 min',
  },
  {
    id: 2,
    type: 'Email',
    to: 'Juliana Costa',
    trigger: 'Abaixo Expectativa',
    status: 'Lido',
    time: 'Há 2 horas',
  },
  {
    id: 3,
    type: 'WhatsApp',
    to: 'Marcos Gomes',
    trigger: 'Meta Atingida',
    status: 'Enviado',
    time: 'Há 5 horas',
  },
  {
    id: 4,
    type: 'Email',
    to: 'Ana Paula Silva',
    trigger: 'Novo Lead',
    status: 'Lido',
    time: 'Ontem',
  },
  {
    id: 5,
    type: 'WhatsApp',
    to: 'Carlos Eduardo',
    trigger: 'Desvio da Rota',
    status: 'Falha',
    time: 'Ontem',
  },
]

export default function AdminAlerts() {
  const { toast } = useToast()

  // Templates State
  const [wppTemplate, setWppTemplate] = useState(
    'Olá {{corretor_nome}}, notei que você está abaixo da expectativa semanal (R$ {{vgv_atual}} de R$ {{meta_semanal}}). Como a gestão pode ajudar a virar esse jogo? 🚀',
  )
  const [emailSubject, setEmailSubject] = useState('Aviso de Inatividade de Lead: {{lead_nome}}')
  const [emailTemplate, setEmailTemplate] = useState(
    'Olá {{corretor_nome}},\n\nO lead {{lead_nome}} está há 7 dias sem nenhuma interação registrada no CRM.\n\nPor favor, retome o contato imediatamente ou devolva o lead para a fila para que possamos distribuí-lo para a roleta novamente.\n\nAtenciosamente,\nGestão Skip',
  )

  // Previews
  const previewWpp = wppTemplate
    .replace(/{{corretor_nome}}/g, 'Carlos')
    .replace(/{{vgv_atual}}/g, '500.000')
    .replace(/{{meta_semanal}}/g, '2.500.000')

  const previewEmailSubj = emailSubject.replace(/{{lead_nome}}/g, 'João Silva')
  const previewEmailBody = emailTemplate
    .replace(/{{corretor_nome}}/g, 'Carlos')
    .replace(/{{lead_nome}}/g, 'João Silva')

  const handleTestSend = () => {
    toast({
      title: 'Mensagem de teste enviada',
      description: 'A pré-visualização foi disparada para o seu contato de teste.',
    })
  }

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-6xl mx-auto pb-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Central de Alertas e Notificações
        </h2>
        <p className="text-slate-500 text-sm md:text-base">
          Configure gatilhos de automação, personalize templates e monitore os disparos para a
          equipe.
        </p>
      </div>

      <Tabs defaultValue="triggers" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto mb-6 gap-2">
          <TabsTrigger value="triggers" className="py-2.5">
            <Zap className="w-4 h-4 mr-2" /> Gatilhos & Automação
          </TabsTrigger>
          <TabsTrigger value="templates" className="py-2.5">
            <MessageSquare className="w-4 h-4 mr-2" /> Templates
          </TabsTrigger>
          <TabsTrigger value="dashboard" className="py-2.5">
            <LayoutDashboard className="w-4 h-4 mr-2" /> Monitoramento
          </TabsTrigger>
        </TabsList>

        <TabsContent value="triggers" className="space-y-6 animate-in fade-in-50">
          <Card>
            <CardHeader>
              <CardTitle>Gatilhos de Performance e Inatividade</CardTitle>
              <CardDescription>
                Defina as condições para disparar alertas automáticos preventivos.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between space-x-2 border-b pb-4">
                <Label className="flex flex-col space-y-1">
                  <span className="font-semibold text-amber-700 flex items-center gap-2">
                    <TrendingDown className="w-4 h-4" /> Abaixo da Expectativa Semanal
                  </span>
                  <span className="font-normal text-sm text-slate-500">
                    Dispara se o VGV semanal estiver abaixo da porcentagem configurada na meta
                    fragmentada.
                  </span>
                </Label>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between space-x-2 border-b pb-4">
                <Label className="flex flex-col space-y-1">
                  <span className="font-semibold text-red-700 flex items-center gap-2">
                    <Map className="w-4 h-4" /> Desvio da Rota da Meta
                  </span>
                  <span className="font-normal text-sm text-slate-500">
                    Dispara quando a projeção de fechamento mensal aponta para um resultado muito
                    inferior à meta global.
                  </span>
                </Label>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between space-x-2">
                <Label className="flex flex-col space-y-1">
                  <span className="font-semibold text-indigo-700 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Sem Interação com Lead (7 Dias)
                  </span>
                  <span className="font-normal text-sm text-slate-500">
                    Alerta sobre leads distribuídos que não receberam nenhuma ação registrada no CRM
                    por 7 dias.
                  </span>
                </Label>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Motor de Escalonamento (Avisos em Níveis)</CardTitle>
              <CardDescription>
                Configure a hierarquia de avisos para corretores com performance crítica continuada.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-xl bg-yellow-50/50 transition-colors hover:bg-yellow-50">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-sm text-yellow-800">1º Aviso (Amigável)</h4>
                    <Switch defaultChecked size="sm" />
                  </div>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Mensagem automática no WhatsApp do corretor oferecendo apoio e dicas para
                    destravar vendas.
                  </p>
                </div>
                <div className="p-4 border rounded-xl bg-orange-50/50 transition-colors hover:bg-orange-50">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-sm text-orange-800">2º Aviso (Atenção)</h4>
                    <Switch defaultChecked size="sm" />
                  </div>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Notificação formal para o corretor com cópia oculta automática para o email da
                    gestão de vendas.
                  </p>
                </div>
                <div className="p-4 border rounded-xl bg-red-50/50 transition-colors hover:bg-red-50">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-sm text-red-800">3º Aviso (Crítico)</h4>
                    <Switch defaultChecked size="sm" />
                  </div>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Alerta destacado na dashboard do gerente e pausa temporária no recebimento de
                    novos leads.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6 animate-in fade-in-50">
          <Card>
            <CardHeader>
              <CardTitle>Central de Templates de Comunicação</CardTitle>
              <CardDescription>
                Edite e pré-visualize como as mensagens chegarão para a equipe.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="whatsapp" className="w-full">
                <TabsList className="grid w-[300px] grid-cols-2 mb-6">
                  <TabsTrigger value="whatsapp" className="gap-2">
                    <Smartphone className="w-4 h-4" /> WhatsApp
                  </TabsTrigger>
                  <TabsTrigger value="email" className="gap-2">
                    <Mail className="w-4 h-4" /> Email
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="whatsapp" className="animate-in fade-in-50">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Template: Abaixo da Expectativa Semanal</Label>
                        <Textarea
                          className="min-h-[160px] resize-y font-mono text-sm leading-relaxed"
                          value={wppTemplate}
                          onChange={(e) => setWppTemplate(e.target.value)}
                        />
                      </div>
                      <div className="p-3 bg-slate-50 border rounded-lg text-xs text-slate-600 space-y-1">
                        <p className="font-semibold">Variáveis disponíveis:</p>
                        <p className="font-mono text-[11px]">
                          {'{{corretor_nome}}'}, {'{{vgv_atual}}'}, {'{{meta_semanal}}'},{' '}
                          {'{{leads_atrasados}}'}
                        </p>
                      </div>
                      <Button onClick={handleTestSend} className="w-full gap-2">
                        <Send className="w-4 h-4" /> Enviar Teste de Preenchimento
                      </Button>
                    </div>

                    <div>
                      <Label className="block mb-2 text-slate-500">Live Preview (Mobile)</Label>
                      <div className="bg-[#efeae2] p-4 rounded-xl relative overflow-hidden flex flex-col h-[350px] shadow-inner border">
                        <div className="bg-[#075e54] text-white p-3 -mx-4 -mt-4 mb-4 font-medium text-sm shadow-md flex items-center gap-3 z-10">
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                            <Smartphone className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-bold">Skip Bot</div>
                            <div className="text-[10px] text-white/80">Online</div>
                          </div>
                        </div>
                        <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar">
                          <div className="bg-[#dcf8c6] text-[#303030] p-3 rounded-xl rounded-tr-sm shadow-sm max-w-[90%] ml-auto text-[13px] whitespace-pre-wrap relative mb-2">
                            {previewWpp}
                            <span className="text-[10px] text-green-800/60 float-right mt-2 ml-2">
                              10:42 ✓✓
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="email" className="animate-in fade-in-50">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Assunto do Email</Label>
                        <Input
                          value={emailSubject}
                          onChange={(e) => setEmailSubject(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Corpo do Email</Label>
                        <Textarea
                          className="min-h-[160px] resize-y font-mono text-sm leading-relaxed"
                          value={emailTemplate}
                          onChange={(e) => setEmailTemplate(e.target.value)}
                        />
                      </div>
                      <Button onClick={handleTestSend} className="w-full gap-2">
                        <Send className="w-4 h-4" /> Enviar Teste de Email
                      </Button>
                    </div>

                    <div>
                      <Label className="block mb-2 text-slate-500">
                        Live Preview (Caixa de Entrada)
                      </Label>
                      <div className="border rounded-xl flex flex-col h-[350px] bg-white shadow-sm overflow-hidden">
                        <div className="bg-slate-50 border-b p-4 flex flex-col gap-1.5 text-sm">
                          <div className="flex items-center">
                            <span className="text-slate-500 w-16 text-xs">De:</span>{' '}
                            <span className="font-medium text-slate-800">
                              Skip Alertas &lt;bot@skip.com&gt;
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-slate-500 w-16 text-xs">Para:</span>{' '}
                            <span className="text-slate-800">corretor@imobiliaria.com</span>
                          </div>
                          <div className="flex items-center mt-2">
                            <span className="text-slate-500 w-16 text-xs">Assunto:</span>{' '}
                            <span className="font-bold text-slate-900">{previewEmailSubj}</span>
                          </div>
                        </div>
                        <div className="p-5 flex-1 overflow-y-auto text-[13px] whitespace-pre-wrap text-slate-700 leading-relaxed custom-scrollbar">
                          {previewEmailBody}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dashboard" className="space-y-6 animate-in fade-in-50">
          <div className="grid gap-4 md:grid-cols-4">
            <Card className="shadow-sm bg-blue-50/50">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full space-y-1">
                <Send className="w-6 h-6 text-blue-500 mb-1" />
                <p className="text-2xl font-bold">1,245</p>
                <p className="text-xs text-slate-500 font-medium">Alertas Enviados</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm bg-emerald-50/50">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full space-y-1">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 mb-1" />
                <p className="text-2xl font-bold">98.5%</p>
                <p className="text-xs text-slate-500 font-medium">Taxa de Entrega</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm bg-indigo-50/50">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full space-y-1">
                <Users className="w-6 h-6 text-indigo-500 mb-1" />
                <p className="text-2xl font-bold">76.2%</p>
                <p className="text-xs text-slate-500 font-medium">Engajamento / Abertura</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm bg-amber-50/50">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full space-y-1">
                <ShieldAlert className="w-6 h-6 text-amber-500 mb-1" />
                <p className="text-2xl font-bold">12</p>
                <p className="text-xs text-slate-500 font-medium">3º Avisos Gerados</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Últimos Disparos de Alertas</CardTitle>
              <CardDescription>
                Log de tentativas de entrega de notificações automatizadas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Canal</TableHead>
                    <TableHead>Destinatário</TableHead>
                    <TableHead>Gatilho / Razão</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Quando</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deliveryLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          {log.type === 'WhatsApp' ? (
                            <Smartphone className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Mail className="w-4 h-4 text-blue-600" />
                          )}
                          {log.type}
                        </div>
                      </TableCell>
                      <TableCell>{log.to}</TableCell>
                      <TableCell className="text-slate-600">{log.trigger}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            log.status === 'Lido'
                              ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                              : log.status === 'Enviado'
                                ? 'bg-blue-50 text-blue-700 border-blue-200'
                                : 'bg-red-50 text-red-700 border-red-200'
                          }
                        >
                          {log.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right text-xs text-slate-500">
                        {log.time}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
