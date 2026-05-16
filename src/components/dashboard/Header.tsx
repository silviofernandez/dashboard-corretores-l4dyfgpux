import { Hexagon } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Header({ lastUpdate }: { lastUpdate: Date }) {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="flex items-center justify-between px-6 py-4 lg:px-10 lg:py-6 border-b border-white/10 bg-black/20 shrink-0 shadow-sm">
      <div className="flex items-center gap-3 lg:gap-4">
        <Hexagon className="w-8 h-8 lg:w-14 lg:h-14 text-blue-500 fill-blue-500/20" />
        <h1 className="text-2xl lg:text-5xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          RANKING CORRETORES
        </h1>
      </div>
      <div className="flex flex-col items-end shrink-0">
        <div className="text-xl lg:text-3xl font-medium tracking-wider font-mono shadow-sm">
          {now.toLocaleDateString('pt-BR')} - {now.toLocaleTimeString('pt-BR')}
        </div>
        <div className="flex items-center gap-2 text-sm lg:text-xl text-gray-400 mt-1">
          <span className="relative flex h-3 w-3 lg:h-4 lg:w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 lg:h-4 lg:w-4 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
          </span>
          Atualizado em:{' '}
          {lastUpdate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </header>
  )
}
