import { Medal } from 'lucide-react'

export function BadgesList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer group"
        >
          <div className="bg-slate-100 group-hover:bg-blue-50 p-4 rounded-full mb-3 transition-colors">
            <Medal className="w-8 h-8 text-slate-400 group-hover:text-blue-500 transition-colors" />
          </div>
          <p className="font-bold text-sm text-slate-800">Conquista {i}</p>
          <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-wider">
            Bloqueada
          </p>
        </div>
      ))}
    </div>
  )
}
