import { WifiOff } from 'lucide-react'
import { useOnline } from '@/hooks/use-online'

export function OfflineBanner() {
  const isOnline = useOnline()

  if (isOnline) return null

  return (
    <div
      className="bg-rose-500 text-white px-4 py-2.5 flex items-center justify-center gap-2 text-sm font-bold animate-slide-down sticky top-0 z-50 shadow-md safe-area-top"
      role="alert"
      aria-live="assertive"
    >
      <WifiOff className="w-4 h-4 shrink-0" aria-hidden="true" />
      <span>Você está offline. Visualizando dados em cache.</span>
    </div>
  )
}
