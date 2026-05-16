import { Outlet } from 'react-router-dom'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AdminSidebar } from '@/components/admin/AdminSidebar'

export function AdminLayout() {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset className="bg-slate-50 min-h-screen">
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
