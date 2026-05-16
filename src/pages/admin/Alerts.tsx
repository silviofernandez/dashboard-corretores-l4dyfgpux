import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MessageSquare, Mail, Zap } from 'lucide-react'

export default function AdminAlerts() {
  return (
    <div className="p-4 md:p-6 space-y-6 max-w-5xl mx-auto">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Central de Alertas e Notificações
        </h2>
        <p className="text-slate-500 text-sm md:text-base">
          Configure gatilhos e templates de mensagens para Email e WhatsApp.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1 h-fit shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              Gatilhos Ativos
            </CardTitle>
            <CardDescription>Ative ou desative notificações automáticas do sistema</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between space-x-2 border-b pb-4">
              <Label htmlFor="goal-reached" className="flex flex-col space-y-1">
                <span className="font-medium">Meta Atingida</span>
                <span className="font-normal text-xs text-slate-500">
                  Notifica o corretor ao bater meta mensal
                </span>
              </Label>
              <Switch id="goal-reached" defaultChecked />
            </div>
            <div className="flex items-center justify-between space-x-2 border-b pb-4">
              <Label htmlFor="new-lead" className="flex flex-col space-y-1">
                <span className="font-medium">Novo Lead</span>
                <span className="font-normal text-xs text-slate-500">
                  Aviso imediato de novo lead distribuído
                </span>
              </Label>
              <Switch id="new-lead" defaultChecked />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="doc-expiring" className="flex flex-col space-y-1">
                <span className="font-medium">Docs Vencendo</span>
                <span className="font-normal text-xs text-slate-500">
                  Alerta gestor e corretor 5 dias antes de vencer
                </span>
              </Label>
              <Switch id="doc-expiring" />
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Templates de Mensagens</CardTitle>
            <CardDescription>
              Personalize o texto das notificações automáticas enviadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="whatsapp" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="whatsapp" className="gap-2">
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp
                </TabsTrigger>
                <TabsTrigger value="email" className="gap-2">
                  <Mail className="w-4 h-4" />
                  E-mail
                </TabsTrigger>
              </TabsList>

              <TabsContent value="whatsapp" className="space-y-4 animate-in fade-in-50">
                <div className="space-y-3">
                  <Label>Template: Meta Atingida</Label>
                  <Textarea
                    className="min-h-[120px] resize-y font-mono text-sm"
                    defaultValue="Parabéns, {{corretor_nome}}! 🎉 Você acaba de atingir sua meta de R$ {{meta_valor}} neste mês. Excelente trabalho!"
                  />
                  <p className="text-xs text-slate-500 bg-slate-50 p-2 rounded-md border">
                    <span className="font-semibold">Variáveis disponíveis:</span>{' '}
                    {'{{corretor_nome}}'}, {'{{meta_valor}}'}, {'{{mes_atual}}'}
                  </p>
                </div>
                <Button className="w-full sm:w-auto">Salvar Template</Button>
              </TabsContent>

              <TabsContent value="email" className="space-y-4 animate-in fade-in-50">
                <div className="space-y-2">
                  <Label>Assunto do E-mail (Novo Lead)</Label>
                  <Input defaultValue="Novo Lead Atribuído: {{lead_nome}}" />
                </div>
                <div className="space-y-3 pt-2">
                  <Label>Corpo do E-mail</Label>
                  <Textarea
                    className="min-h-[160px] font-mono text-sm"
                    defaultValue="Olá {{corretor_nome}},&#10;&#10;Um novo lead foi atribuído a você:&#10;Nome: {{lead_nome}}&#10;Telefone: {{lead_telefone}}&#10;&#10;Acesse o CRM para iniciar o atendimento."
                  />
                  <p className="text-xs text-slate-500 bg-slate-50 p-2 rounded-md border">
                    <span className="font-semibold">Variáveis disponíveis:</span>{' '}
                    {'{{corretor_nome}}'}, {'{{lead_nome}}'}, {'{{lead_telefone}}'},{' '}
                    {'{{link_crm}}'}
                  </p>
                </div>
                <Button className="w-full sm:w-auto">Salvar Template</Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
