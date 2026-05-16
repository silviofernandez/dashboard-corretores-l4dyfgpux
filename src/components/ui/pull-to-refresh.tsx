import { ReactNode, useRef, useState } from 'react'
import { Loader2 } from 'lucide-react'

interface PullToRefreshProps {
  children: ReactNode
  onRefresh: () => Promise<void>
}

export function PullToRefresh({ children, onRefresh }: PullToRefreshProps) {
  const [startY, setStartY] = useState(0)
  const [pullDistance, setPullDistance] = useState(0)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    if (contentRef.current && contentRef.current.scrollTop <= 0) {
      setStartY(e.touches[0].clientY)
    } else {
      setStartY(0)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startY === 0 || isRefreshing) return
    const y = e.touches[0].clientY
    const distance = Math.max(0, y - startY)

    if (distance > 0 && contentRef.current && contentRef.current.scrollTop <= 0) {
      setPullDistance(Math.min(distance * 0.5, 80))
    }
  }

  const handleTouchEnd = async () => {
    if (pullDistance > 60 && !isRefreshing) {
      setIsRefreshing(true)
      setPullDistance(60)
      try {
        await onRefresh()
      } finally {
        setIsRefreshing(false)
        setPullDistance(0)
      }
    } else {
      setPullDistance(0)
    }
    setStartY(0)
  }

  return (
    <div
      className="relative w-full h-full flex flex-col"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={contentRef}
    >
      <div
        className="absolute top-0 left-0 w-full flex justify-center items-center overflow-hidden transition-all duration-200 z-10"
        style={{ height: `${pullDistance}px`, opacity: pullDistance / 60 }}
      >
        <Loader2 className={`w-6 h-6 text-blue-500 ${isRefreshing ? 'animate-spin' : ''}`} />
      </div>
      <div
        className="flex-1 transition-transform duration-200 relative z-20"
        style={{ transform: `translateY(${pullDistance}px)` }}
      >
        {children}
      </div>
    </div>
  )
}
