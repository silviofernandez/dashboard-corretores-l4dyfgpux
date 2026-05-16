import React, { useState, useRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SwipeableItemProps {
  children: ReactNode
  leftAction?: ReactNode
  rightAction?: ReactNode
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  className?: string
}

export function SwipeableItem({
  children,
  leftAction,
  rightAction,
  onSwipeLeft,
  onSwipeRight,
  className,
}: SwipeableItemProps) {
  const [offset, setOffset] = useState(0)
  const startX = useRef(0)
  const currentX = useRef(0)
  const isDragging = useRef(false)

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
    isDragging.current = true
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return
    currentX.current = e.touches[0].clientX
    const diff = currentX.current - startX.current

    if (!leftAction && diff > 0) return
    if (!rightAction && diff < 0) return

    if (Math.abs(diff) < 120) {
      setOffset(diff)
    }
  }

  const handleTouchEnd = () => {
    isDragging.current = false
    if (offset > 60 && onSwipeRight && leftAction) {
      onSwipeRight()
    } else if (offset < -60 && onSwipeLeft && rightAction) {
      onSwipeLeft()
    }
    setOffset(0)
  }

  return (
    <div className={cn('relative overflow-hidden group touch-pan-y', className)}>
      <div className="absolute inset-y-0 left-0 flex items-center justify-start w-full -z-10 bg-emerald-500">
        {leftAction}
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center justify-end w-full -z-10 bg-rose-500">
        {rightAction}
      </div>
      <div
        className="transition-transform duration-200 ease-out z-10 w-full h-full bg-transparent"
        style={{ transform: `translateX(${offset}px)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children}
      </div>
    </div>
  )
}
