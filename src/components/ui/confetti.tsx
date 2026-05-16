import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function Confetti({ active }: { active: boolean }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (active) {
      setIsVisible(true)
      const timer = setTimeout(() => setIsVisible(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [active])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={cn('w-3 h-3 rounded-sm animate-fade-out-up')}
            style={{
              backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'][
                Math.floor(Math.random() * 5)
              ],
              animationDuration: `${Math.random() * 1.5 + 1}s`,
              transform: `translate(${Math.random() * 300 - 150}px, ${
                Math.random() * -300
              }px) rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
