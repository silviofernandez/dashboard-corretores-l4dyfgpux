import { ReactNode, useState, useRef } from 'react'
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

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
    currentX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    currentX.current = e.touches[0].clientX
    const diff = currentX.current - startX.current
    if ((diff > 0 && !leftAction) || (diff < 0 && !rightAction)) return
    setOffset(diff)
  }

  const handleTouchEnd = () => {
    if (offset > 100 && onSwipeLeft) {
      onSwipeLeft()
    } else if (offset < -100 && onSwipeRight) {
      onSwipeRight()
    }
    setOffset(0)
  }

  return (
    <div className={cn('relative overflow-hidden w-full', className)}>
      {leftAction && (
        <div
          className="absolute inset-y-0 left-0 w-full flex items-center justify-start z-0"
          style={{ opacity: offset > 0 ? 1 : 0 }}
        >
          {leftAction}
        </div>
      )}
      {rightAction && (
        <div
          className="absolute inset-y-0 right-0 w-full flex items-center justify-end z-0"
          style={{ opacity: offset < 0 ? 1 : 0 }}
        >
          {rightAction}
        </div>
      )}
      <div
        className="relative z-10 transition-transform bg-transparent w-full"
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
