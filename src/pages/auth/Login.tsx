import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Hexagon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Login() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      navigate('/dashboard')
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in-up">
        <div className="flex flex-col items-center justify-center gap-2 mb-8 text-blue-600">
          <Hexagon className="w-12 h-12 fill-blue-600/10" />
          <h1 className="text-3xl font-black tracking-tight">BrokerTop</h1>
        </div>

        <Card className="border-0 shadow-lg rounded-2xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-black">Acessar Conta</CardTitle>
            <CardDescription className="font-medium">
              Entre com suas credenciais de corretor.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email corporativo"
                  required
                  defaultValue="ricardo@imobiliaria.com"
                  className="h-12 px-4 rounded-xl font-medium"
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Senha"
                  required
                  defaultValue="password123"
                  className="h-12 px-4 rounded-xl font-medium"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 rounded-xl font-bold text-base mt-2"
                disabled={loading}
              >
                {loading ? 'Entrando...' : 'Entrar no Dashboard'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
