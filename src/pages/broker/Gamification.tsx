import { LevelProgress } from '@/components/gamification/LevelProgress'
import { BadgesList } from '@/components/gamification/BadgesList'
import { SocialFeed } from '@/components/gamification/SocialFeed'
import { Challenges } from '@/components/gamification/Challenges'
import { SuccessStories } from '@/components/gamification/SuccessStories'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Trophy, Target, Award } from 'lucide-react'
import { ErrorBoundary } from '@/components/ErrorBoundary'

export default function BrokerGamification() {
  return (
    <ErrorBoundary>
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-2">
            <div className="bg-blue-50 p-2 rounded-full">
              <Trophy className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Venda</div>
              <div className="text-sm font-black text-slate-800">100 pts</div>
            </div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-2">
            <div className="bg-emerald-50 p-2 rounded-full">
              <Target className="w-5 h-5 text-emerald-500" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">VGV (R$ 1k)</div>
              <div className="text-sm font-black text-slate-800">1 pt</div>
            </div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-2">
            <div className="bg-purple-50 p-2 rounded-full">
              <Award className="w-5 h-5 text-purple-500" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">CRM Completo</div>
              <div className="text-sm font-black text-slate-800">50 pts</div>
            </div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-2">
            <div className="bg-orange-50 p-2 rounded-full">
              <Award className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Quiz Feito</div>
              <div className="text-sm font-black text-slate-800">25 pts</div>
            </div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-2">
            <div className="bg-indigo-50 p-2 rounded-full">
              <Award className="w-5 h-5 text-indigo-500" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Treinamento</div>
              <div className="text-sm font-black text-slate-800">100 pts</div>
            </div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-2">
            <div className="bg-rose-50 p-2 rounded-full">
              <Award className="w-5 h-5 text-rose-500" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Streak Diário</div>
              <div className="text-sm font-black text-slate-800">Bônus XP</div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="badges" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-[500px] mb-6 bg-white border border-slate-200/60 p-1 h-12 shadow-sm rounded-xl overflow-x-auto">
            <TabsTrigger
              value="badges"
              className="font-bold rounded-lg data-[state=active]:bg-slate-100 data-[state=active]:text-blue-600 transition-all text-xs md:text-sm"
            >
              Conquistas
            </TabsTrigger>
            <TabsTrigger
              value="challenges"
              className="font-bold rounded-lg data-[state=active]:bg-slate-100 data-[state=active]:text-blue-600 transition-all text-xs md:text-sm"
            >
              Desafios
            </TabsTrigger>
            <TabsTrigger
              value="feed"
              className="font-bold rounded-lg data-[state=active]:bg-slate-100 data-[state=active]:text-blue-600 transition-all text-xs md:text-sm"
            >
              Feed
            </TabsTrigger>
          </TabsList>
          <TabsContent value="badges" className="space-y-6 animate-fade-in">
            <BadgesList />
          </TabsContent>
          <TabsContent value="challenges" className="space-y-6 animate-fade-in">
            <Challenges />
          </TabsContent>
          <TabsContent value="feed" className="space-y-6 animate-fade-in">
            <div className="mb-2">
              <h3 className="font-bold text-slate-800 mb-4 px-1">Histórias de Sucesso</h3>
              <SuccessStories />
            </div>
            <SocialFeed />
          </TabsContent>
        </Tabs>
      </div>
    </ErrorBoundary>
  )
}
