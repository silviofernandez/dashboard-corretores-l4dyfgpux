import { Outlet } from 'react-router-dom'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AdminSidebar } from '@/components/admin/AdminSidebar'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Database } from 'lucide-react'

export function AdminLayout() {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset className="bg-slate-50 min-h-screen">
        <div className="p-4 md:px-6 pb-0">
          <Alert className="bg-indigo-50 text-indigo-900 border-indigo-200 shadow-sm">
            <Database className="h-4 w-4 text-indigo-600" />
            <AlertTitle>Modo de Demonstração (Sem Banco de Dados)</AlertTitle>
            <AlertDescription>
              Este sistema está utilizando dados locais temporários. Para armazenamento permanente
              das equipes, corretores e do histórico de performance, conecte um banco de dados como
              Supabase ou Skip Cloud (atualmente os dados serão reiniciados ao recarregar a página).
            </AlertDescription>
          </Alert>
        </div>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
