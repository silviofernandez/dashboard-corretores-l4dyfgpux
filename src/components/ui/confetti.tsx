import { useEffect, useState } from 'react'

export function Confetti({ active }: { active: boolean }) {
  const [pieces, setPieces] = useState<any[]>([])

  useEffect(() => {
    if (active) {
      const newPieces = Array.from({ length: 80 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: -10 - Math.random() * 20,
        rotation: Math.random() * 360,
        scale: Math.random() * 0.5 + 0.5,
        color: ['#f59e0b', '#3b82f6', '#10b981', '#ef4444', '#8b5cf6', '#ec4899'][
          Math.floor(Math.random() * 6)
        ],
        delay: Math.random() * 0.5,
        duration: Math.random() * 2 + 2,
        isCircle: Math.random() > 0.5,
      }))
      setPieces(newPieces)

      const timer = setTimeout(() => setPieces([]), 4000)
      return () => clearTimeout(timer)
    } else {
      setPieces([])
    }
  }, [active])

  if (!active || pieces.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <style>
        {`
          @keyframes confetti-fall {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(120vh) rotate(720deg); opacity: 0; }
          }
        `}
      </style>
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute shadow-sm"
          style={{
            width: p.isCircle ? '8px' : '10px',
            height: p.isCircle ? '8px' : '10px',
            borderRadius: p.isCircle ? '50%' : '2px',
            left: `${p.x}%`,
            top: `${p.y}%`,
            backgroundColor: p.color,
            animation: `confetti-fall ${p.duration}s cubic-bezier(.37,0,.63,1) ${p.delay}s forwards`,
          }}
        />
      ))}
    </div>
  )
}
