import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { PlayCircle } from 'lucide-react'

const stories = [
  {
    id: 1,
    name: 'Ana P.',
    role: 'Top Sales',
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1',
  },
  {
    id: 2,
    name: 'Marcos G.',
    role: 'CRM Master',
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2',
  },
  {
    id: 3,
    name: 'Juliana C.',
    role: 'Quiz Champ',
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=3',
  },
  {
    id: 4,
    name: 'Carlos E.',
    role: 'Growth',
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=4',
  },
  {
    id: 5,
    name: 'Fernanda L.',
    role: 'Streak',
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=5',
  },
]

export function SuccessStories() {
  return (
    <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
      <div className="flex gap-4 min-w-max px-1">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="relative transform transition-transform group-hover:scale-105 active:scale-95">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full p-[3px] bg-gradient-to-tr from-amber-400 via-rose-500 to-fuchsia-600 shadow-md">
                <Avatar className="w-full h-full border-[3px] border-white bg-white">
                  <AvatarImage src={story.image} className="object-cover" />
                  <AvatarFallback>{story.name[0]}</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute inset-0 bg-black/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                <PlayCircle className="w-8 h-8 text-white drop-shadow-md" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs font-bold text-slate-800">{story.name}</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                {story.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
