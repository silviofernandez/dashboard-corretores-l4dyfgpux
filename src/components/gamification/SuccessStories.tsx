import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function SuccessStories() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar snap-x">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-2 min-w-[72px] snap-center cursor-pointer group"
        >
          <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-tr from-amber-400 to-rose-500 group-hover:scale-105 transition-transform shadow-sm">
            <Avatar className="w-full h-full border-2 border-white">
              <AvatarImage src={`https://img.usecurling.com/ppl/thumbnail?seed=${i + 10}`} />
              <AvatarFallback>U{i}</AvatarFallback>
            </Avatar>
          </div>
          <span className="text-[11px] font-bold text-slate-600 truncate w-full text-center group-hover:text-blue-600 transition-colors">
            User {i}
          </span>
        </div>
      ))}
    </div>
  )
}
