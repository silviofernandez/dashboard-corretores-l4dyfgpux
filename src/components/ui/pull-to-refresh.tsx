import React, { useState, useRef } from 'react'
import { RefreshCw } from 'lucide-react'

interface PullToRefreshProps {
  children: React.ReactNode
  onRefresh: () => Promise<void>
}

export function PullToRefresh({ children, onRefresh }: PullToRefreshProps) {
  const [startY, setStartY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [pullDistance, setPullDistance] = useState(0)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const maxPull = 100
  const threshold = 60

  const handleTouchStart = (e: React.TouchEvent) => {
    const scroller =
      (e.currentTarget as HTMLElement).closest(
        '[class*="overflow-y-auto"], [class*="overflow-auto"]',
      ) || document.documentElement
    if (scroller.scrollTop > 5) return

    setStartY(e.touches[0].clientY)
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || isRefreshing) return

    const scroller =
      (e.currentTarget as HTMLElement).closest(
        '[class*="overflow-y-auto"], [class*="overflow-auto"]',
      ) || document.documentElement
    const y = e.touches[0].clientY
    const diff = y - startY

    if (diff > 0 && scroller.scrollTop <= 0) {
      if (e.cancelable) e.preventDefault()
      const distance = Math.min(diff * 0.5, maxPull)
      setPullDistance(distance)
    }
  }

  const handleTouchEnd = async () => {
    setIsDragging(false)

    if (pullDistance > threshold && !isRefreshing) {
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
  }

  return (
    <div className="relative w-full">
      <div
        className="absolute top-0 left-0 right-0 flex justify-center items-center overflow-hidden transition-all duration-300 z-50 pointer-events-none"
        style={{
          height: `${isRefreshing ? 60 : pullDistance}px`,
          opacity: pullDistance / threshold,
        }}
      >
        <div className="bg-white rounded-full p-2 shadow-md flex items-center justify-center min-w-[44px] min-h-[44px]">
          <RefreshCw
            className={`w-5 h-5 text-blue-500 ${isRefreshing ? 'animate-spin' : ''}`}
            style={{ transform: `rotate(${pullDistance * 3}deg)` }}
          />
        </div>
      </div>
      <div
        className="will-change-transform w-full"
        style={{
          transform: `translateY(${isRefreshing ? 60 : pullDistance}px)`,
          transition: isDragging
            ? 'none'
            : 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children}
      </div>
    </div>
  )
}
