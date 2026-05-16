import { ReactNode, useState, useRef } from 'react'
import { Loader2 } from 'lucide-react'

interface PullToRefreshProps {
  children: ReactNode
  onRefresh: () => Promise<void>
}

export function PullToRefresh({ children, onRefresh }: PullToRefreshProps) {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [pullY, setPullY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const startY = useRef(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    if (containerRef.current && containerRef.current.scrollTop === 0) {
      startY.current = e.touches[0].clientY
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startY.current > 0) {
      const y = e.touches[0].clientY - startY.current
      if (y > 0) {
        setPullY(Math.min(y, 100))
      }
    }
  }

  const handleTouchEnd = async () => {
    if (pullY > 50 && !isRefreshing) {
      setIsRefreshing(true)
      await onRefresh()
      setIsRefreshing(false)
    }
    setPullY(0)
    startY.current = 0
  }

  return (
    <div
      ref={containerRef}
      className="relative flex-1 overflow-y-auto w-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="absolute top-0 left-0 right-0 flex justify-center items-center transition-transform z-20 pointer-events-none"
        style={{
          transform: `translateY(${isRefreshing ? 20 : pullY - 40}px)`,
          opacity: pullY / 100,
        }}
      >
        <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-500">
          {isRefreshing ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <div
              className="w-5 h-5 rounded-full border-2 border-current border-t-transparent animate-spin"
              style={{ animationDuration: '3s' }}
            />
          )}
        </div>
      </div>
      <div
        style={{
          transform: `translateY(${isRefreshing ? 40 : 0}px)`,
          transition: pullY === 0 ? 'transform 0.3s' : 'none',
        }}
        className="w-full h-full"
      >
        {children}
      </div>
    </div>
  )
}
