import React, { useState, useRef, ReactNode } from 'react'

export function PullToRefresh({
  onRefresh,
  children,
}: {
  onRefresh: () => Promise<void>
  children: ReactNode
}) {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [pullDistance, setPullDistance] = useState(0)
  const startY = useRef(0)
  const isDragging = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    if (containerRef.current && containerRef.current.scrollTop > 0) return
    startY.current = e.touches[0].clientY
    isDragging.current = true
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return
    const y = e.touches[0].clientY
    const diff = y - startY.current
    if (diff > 0 && diff < 150) {
      setPullDistance(diff)
    }
  }

  const handleTouchEnd = async () => {
    isDragging.current = false
    if (pullDistance > 60 && !isRefreshing) {
      setIsRefreshing(true)
      try {
        await onRefresh()
      } finally {
        setIsRefreshing(false)
      }
    }
    setPullDistance(0)
  }

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="flex-1 w-full flex flex-col h-full relative overflow-y-auto"
    >
      <div
        className="absolute w-full flex justify-center transition-all duration-300 z-50 pointer-events-none"
        style={{
          top: pullDistance > 0 ? `${pullDistance / 2}px` : '-40px',
          opacity: pullDistance / 100,
        }}
      >
        {isRefreshing ? (
          <div className="bg-white rounded-full p-2 shadow-md">
            <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="bg-white rounded-full p-2 shadow-md text-slate-500 text-xs font-bold">
            ↓ Puxe
          </div>
        )}
      </div>
      <div
        className="flex-1 w-full transition-transform duration-300 h-full"
        style={{ transform: `translateY(${isRefreshing ? 50 : pullDistance / 2}px)` }}
      >
        {children}
      </div>
    </div>
  )
}
