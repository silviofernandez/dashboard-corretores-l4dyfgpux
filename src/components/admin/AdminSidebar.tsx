import {
  LayoutDashboard,
  Users,
  UsersRound,
  Link as LinkIcon,
  Bell,
  BarChart3,
  Settings,
  BrainCircuit,
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Corretores', href: '/admin/corretores', icon: Users },
  { name: 'Equipes', href: '/admin/equipes', icon: UsersRound },
  { name: 'Integrações', href: '/admin/integracoes', icon: LinkIcon },
  { name: 'Alertas', href: '/admin/alertas', icon: Bell },
  { name: 'Relatórios', href: '/admin/relatorios', icon: BarChart3 },
  { name: 'Motor IA', href: '/admin/motor', icon: BrainCircuit },
  { name: 'Configurações', href: '/admin/configuracoes', icon: Settings },
]

export function AdminSidebar() {
  const location = useLocation()

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
    </Sidebar>
  )
}
