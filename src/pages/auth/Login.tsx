import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/providers/AppProviders'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const authContext = useAuth()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (authContext) {
      authContext.login({
        id: '1',
        email: 'admin@imobiliaria.com',
        name: 'Administrador',
        role: 'admin',
      })
    }

    const from = location.state?.from?.pathname || '/admin'
    navigate(from, { replace: true })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-sm w-full animate-in fade-in slide-in-from-bottom-4">
        <h1 className="text-2xl font-black text-slate-800 mb-2 text-center">
          Login Administrativo
        </h1>
        <p className="text-slate-500 text-sm text-center mb-6">
          Acesse o dashboard de gestão de corretores e equipes.
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail ou Usuário</Label>
            <Input id="email" type="text" placeholder="admin@imobiliaria.com" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none transition-colors"
                aria-label={showPassword ? 'Ocultar senha' : 'Exibir senha'}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-sm transition-all duration-200"
          >
            Acessar Dashboard
          </Button>
        </form>
      </div>
    </div>
  )
}
