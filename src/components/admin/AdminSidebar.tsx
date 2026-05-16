import {
  LayoutDashboard,
  Users,
  UsersRound,
  Link as LinkIcon,
  Bell,
  BarChart3,
  Settings,
  BrainCircuit,
  BookOpen,
} from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { useAuth } from '@/providers/AppProviders'

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Usuários', href: '/admin/usuarios', icon: Users },
  { name: 'Corretores', href: '/admin/corretores', icon: UsersRound },
  { name: 'Equipes', href: '/admin/equipes', icon: UsersRound },
  { name: 'Treinamentos', href: '/admin/treinamentos', icon: BookOpen },
  { name: 'Integrações', href: '/admin/integracoes', icon: LinkIcon },
  { name: 'Alertas', href: '/admin/alertas', icon: Bell },
  { name: 'Relatórios', href: '/admin/relatorios', icon: BarChart3 },
  { name: 'Motor IA', href: '/admin/motor', icon: BrainCircuit },
  { name: 'Configurações', href: '/admin/configuracoes', icon: Settings },
]

export function AdminSidebar() {
  const location = useLocation()
  const navigate = useNavigate()
  const authContext = useAuth()

  const handleLogout = () => {
    if (authContext) {
      authContext.logout()
    }
    navigate('/login')
  }

  return (
    <Sidebar>
      <SidebarHeader className="h-16 flex items-center justify-center border-b border-sidebar-border">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Painel Admin
        </h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      location.pathname === item.href ||
                      (location.pathname === '/admin' && item.href === '/admin')
                    }
                    tooltip={item.name}
                  >
                    <Link to={item.href}>
                      <item.icon />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <SidebarMenuButton
          onClick={handleLogout}
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <LogOut className="w-4 h-4 mr-2" />
          <span className="font-medium">Sair do Sistema</span>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  )
}
