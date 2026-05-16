import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface SwipeableItemProps {
  children: React.ReactNode
  leftAction?: React.ReactNode
  rightAction?: React.ReactNode
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  leftThreshold?: number
  rightThreshold?: number
  className?: string
}

export function SwipeableItem({
  children,
  leftAction,
  rightAction,
  onSwipeLeft,
  onSwipeRight,
  leftThreshold = 80,
  rightThreshold = 80,
  className,
}: SwipeableItemProps) {
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const [isSwiping, setIsSwiping] = useState(false)

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
    setIsSwiping(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping) return
    const currentX = e.touches[0].clientX
    const diff = currentX - startX

    // Prevent default scroll behavior only when swiping horizontally aggressively
    if (Math.abs(diff) > 20 && e.cancelable) {
      // Allow scroll, but handle carefully in complex views
    }

    // Resistance effect at edges if no action provided
    if (diff > 0 && !leftAction) return
    if (diff < 0 && !rightAction) return

    if (diff > 120) setTranslateX(120)
    else if (diff < -120) setTranslateX(-120)
    else setTranslateX(diff)
  }

  const handleTouchEnd = () => {
    setIsSwiping(false)
    if (translateX > leftThreshold && onSwipeRight) {
      if ('vibrate' in navigator) navigator.vibrate(50)
      onSwipeRight()
    } else if (translateX < -rightThreshold && onSwipeLeft) {
      if ('vibrate' in navigator) navigator.vibrate(50)
      onSwipeLeft()
    }
    setTranslateX(0)
  }

  return (
    <div className={cn('relative overflow-hidden w-full group', className)}>
      <div className="absolute inset-0 flex justify-between items-center z-0">
        <div className="flex-1 flex justify-start items-center h-full">{leftAction}</div>
        <div className="flex-1 flex justify-end items-center h-full">{rightAction}</div>
      </div>
      <div
        className={cn(
          'relative z-10 w-full bg-transparent will-change-transform',
          !isSwiping && 'transition-transform duration-300 ease-out',
        )}
        style={{ transform: `translateX(${translateX}px)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children}
      </div>
    </div>
  )
}
