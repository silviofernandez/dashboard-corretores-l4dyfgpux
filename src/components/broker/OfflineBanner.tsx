import { WifiOff } from 'lucide-react'
import { useState, useEffect } from 'react'

export function OfflineBanner() {
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  if (isOnline) return null

  return (
    <div className="bg-rose-500 text-white px-4 py-2 flex items-center justify-center gap-2 text-sm font-bold animate-fade-in-down z-50 relative">
      <WifiOff className="w-4 h-4" />
      Você está offline. Algumas informações podem estar desatualizadas.
    </div>
  )
}
