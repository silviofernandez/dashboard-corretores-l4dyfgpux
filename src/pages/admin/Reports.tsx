import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Download, TrendingUp, Users, ShieldAlert } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AdminReports() {
  return (
    <div className="p-4 md:p-6 space-y-6 max-w-5xl mx-auto">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Relatórios Gerenciais</h2>
        <p className="text-slate-500 text-sm md:text-base">
          Visualize e exporte dados detalhados da operação imobiliária.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="w-4 h-4 text-blue-600" />
              </div>
              Performance Mensal
            </CardTitle>
            <CardDescription className="min-h-[40px]">
              Resumo completo de vendas e VGV por corretor no mês atual.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full gap-2 text-slate-600">
              <Download className="w-4 h-4" />
              Exportar CSV
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Users className="w-4 h-4 text-indigo-600" />
              </div>
              Engajamento de Equipe
            </CardTitle>
            <CardDescription className="min-h-[40px]">
              Progresso de treinamentos e notas dos quizzes da equipe.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full gap-2 text-slate-600">
              <Download className="w-4 h-4" />
              Exportar XLS
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <div className="p-2 bg-amber-100 rounded-lg">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
              </div>
              Status Documental
            </CardTitle>
            <CardDescription className="min-h-[40px]">
              Relação de corretores com pendências ou documentação vencida.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full gap-2 text-slate-600">
              <Download className="w-4 h-4" />
              Exportar PDF
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
