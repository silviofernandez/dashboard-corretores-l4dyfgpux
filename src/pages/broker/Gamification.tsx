import { LevelProgress } from '@/components/gamification/LevelProgress'
import { BadgesList } from '@/components/gamification/BadgesList'
import { SocialFeed } from '@/components/gamification/SocialFeed'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Trophy, Target, Award } from 'lucide-react'

export default function BrokerGamification() {
  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-6 md:space-y-8 animate-fade-in-up">
      <header className="mb-2 md:mb-4">
        <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
          Sua Jornada de <span className="text-blue-600">Gamificação</span>
        </h2>
        <p className="text-slate-500 font-medium mt-1 max-w-2xl">
          Acompanhe seu progresso, libere novas conquistas e veja o que seus colegas estão fazendo
          no mural.
        </p>
      </header>

      <LevelProgress currentLevel={34} currentPoints={8450} nextLevelPoints={10000} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="bg-blue-50 p-3 rounded-full">
            <Trophy className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-400">Venda</div>
            <div className="text-lg font-black text-slate-800">100 pts / venda</div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="bg-emerald-50 p-3 rounded-full">
            <Target className="w-6 h-6 text-emerald-500" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-400">VGV</div>
            <div className="text-lg font-black text-slate-800">1 pt / 1k</div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="bg-purple-50 p-3 rounded-full">
            <Award className="w-6 h-6 text-purple-500" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-400">Engajamento</div>
            <div className="text-lg font-black text-slate-800">CRM: 50 pts / dia</div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="badges" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-[400px] mb-6 bg-white border border-slate-200/60 p-1 h-12 shadow-sm rounded-xl">
          <TabsTrigger
            value="badges"
            className="font-bold rounded-lg data-[state=active]:bg-slate-100 data-[state=active]:text-blue-600 transition-all"
          >
            Minhas Conquistas
          </TabsTrigger>
          <TabsTrigger
            value="feed"
            className="font-bold rounded-lg data-[state=active]:bg-slate-100 data-[state=active]:text-blue-600 transition-all"
          >
            Feed da Equipe
          </TabsTrigger>
        </TabsList>
        <TabsContent value="badges" className="space-y-6 animate-fade-in">
          <BadgesList />
        </TabsContent>
        <TabsContent value="feed" className="animate-fade-in">
          <SocialFeed />
        </TabsContent>
      </Tabs>
    </div>
  )
}
