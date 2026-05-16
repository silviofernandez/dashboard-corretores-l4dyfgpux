import { Outlet, Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, History, Target, Settings, LogOut, Hexagon } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
  SidebarGroup,
  SidebarGroupContent,
} from '@/components/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useEffect } from 'react'

const NAV_ITEMS = [
  { title: 'Dashboard', icon: LayoutDashboard, url: '/dashboard' },
  { title: 'Histórico', icon: History, url: '/dashboard/historico' },
  { title: 'Metas', icon: Target, url: '/dashboard/metas' },
  { title: 'Configurações', icon: Settings, url: '/dashboard/configuracoes' },
]

export function BrokerLayout() {
  const location = useLocation()

  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  return (
    <SidebarProvider>
      <Sidebar variant="inset" className="border-r border-slate-200 shadow-sm bg-white">
        <SidebarHeader className="flex items-center justify-center py-6">
          <div className="flex items-center gap-2 font-black text-2xl text-blue-600">
            <Hexagon className="w-8 h-8 fill-blue-600/10" />
            <span>BrokerTop</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {NAV_ITEMS.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname === item.url}
                      className="h-12 font-bold text-slate-600 data-[active=true]:bg-blue-50 data-[active=true]:text-blue-700 mx-2 rounded-xl transition-colors"
                    >
                      <Link to={item.url}>
                        <item.icon className="w-5 h-5 mr-1" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="h-12 text-rose-600 hover:text-rose-700 hover:bg-rose-50 font-bold mx-2 rounded-xl transition-colors"
              >
                <Link to="/login">
                  <LogOut className="w-5 h-5 mr-1" />
                  <span>Sair da conta</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="bg-slate-50/50 min-h-screen flex flex-col">
        <header className="flex h-20 shrink-0 items-center gap-4 border-b border-slate-200 bg-white/80 backdrop-blur-md px-6 shadow-sm sticky top-0 z-10">
          <SidebarTrigger className="text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg p-2" />
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-black text-slate-800 leading-none">Bem-vindo, Ricardo</p>
              <p className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md inline-block mt-1.5">
                1º Lugar Geral
              </p>
            </div>
            <Avatar className="h-12 w-12 border-[3px] border-white shadow-md rounded-2xl">
              <AvatarImage
                src="https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1"
                className="rounded-xl object-cover"
              />
              <AvatarFallback className="rounded-xl bg-blue-100 text-blue-700 font-bold">
                RM
              </AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full animate-fade-in-up">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
