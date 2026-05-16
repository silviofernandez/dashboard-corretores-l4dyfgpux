import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Hexagon } from 'lucide-react'

export default function Login() {
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && code) {
      navigate('/dashboard')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <Card className="w-full max-w-md shadow-elevation border-0">
        <CardHeader className="text-center space-y-4 pt-8">
          <div className="flex justify-center">
            <div className="bg-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-600/20">
              <Hexagon className="w-10 h-10 text-white" />
            </div>
          </div>
          <div>
            <CardTitle className="text-2xl font-black text-slate-800">Acesso do Corretor</CardTitle>
            <CardDescription className="text-slate-500 font-medium mt-2">
              Acompanhe seus resultados em tempo real
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="pb-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold text-slate-700">
                Nome Completo
              </label>
              <Input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Ricardo Mendes"
                className="h-12 bg-slate-50 border-slate-200 focus-visible:ring-blue-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="code" className="text-sm font-bold text-slate-700">
                Código de Acesso
              </label>
              <Input
                id="code"
                required
                type="password"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Insira seu código"
                className="h-12 bg-slate-50 border-slate-200 focus-visible:ring-blue-600"
              />
            </div>
            <Button
              type="submit"
              className="w-full h-12 text-base font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Acessar Dashboard
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
