import { ReactNode, useRef, useState } from 'react'
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
  const [translateX, setTranslateX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const startX = useRef(0)
  const currentX = useRef(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const diff = e.touches[0].clientX - startX.current
    const moveX = Math.sign(diff) * Math.min(Math.abs(diff), 100)

    if ((!leftAction && moveX > 0) || (!rightAction && moveX < 0)) return

    setTranslateX(moveX)
    currentX.current = moveX
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    if (currentX.current > 60 && leftAction && onSwipeLeft) {
      onSwipeLeft()
    } else if (currentX.current < -60 && rightAction && onSwipeRight) {
      onSwipeRight()
    }
    setTranslateX(0)
    currentX.current = 0
  }

  return (
    <div className={cn('relative overflow-hidden cursor-pointer', className)}>
      {leftAction && translateX > 0 && (
        <div className="absolute inset-y-0 left-0 w-full flex items-center">{leftAction}</div>
      )}
      {rightAction && translateX < 0 && (
        <div className="absolute inset-y-0 right-0 w-full flex items-center">{rightAction}</div>
      )}
      <div
        className="relative z-10 transition-transform duration-200"
        style={{
          transform: `translateX(${translateX}px)`,
          touchAction: 'pan-y',
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
