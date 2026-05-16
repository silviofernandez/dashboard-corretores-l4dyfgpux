import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { OverviewTab } from '@/components/gamification/OverviewTab'
import { RankingsTab } from '@/components/gamification/RankingsTab'
import { ChallengesTab } from '@/components/gamification/ChallengesTab'
import { SocialFeedTab } from '@/components/gamification/SocialFeedTab'
import { Trophy, Star, Target, Users } from 'lucide-react'

export default function Gamification() {
  return (
    <div className="space-y-6 pb-10 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
            Central de Conquistas
          </h1>
          <p className="text-slate-500 font-medium text-sm md:text-base mt-1">
            Acompanhe seu nível, distintivos e participe dos desafios da equipe.
          </p>
        </div>
      </header>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 h-auto mb-6 gap-2 bg-slate-100 p-1 rounded-xl">
          <TabsTrigger
            value="overview"
            className="py-2.5 flex flex-col md:flex-row gap-2 rounded-lg data-[state=active]:shadow-sm"
          >
            <Star className="w-4 h-4" /> <span className="hidden md:inline">Visão Geral</span>
          </TabsTrigger>
          <TabsTrigger
            value="rankings"
            className="py-2.5 flex flex-col md:flex-row gap-2 rounded-lg data-[state=active]:shadow-sm"
          >
            <Trophy className="w-4 h-4" /> <span className="hidden md:inline">Rankings</span>
          </TabsTrigger>
          <TabsTrigger
            value="challenges"
            className="py-2.5 flex flex-col md:flex-row gap-2 rounded-lg data-[state=active]:shadow-sm"
          >
            <Target className="w-4 h-4" /> <span className="hidden md:inline">Desafios</span>
          </TabsTrigger>
          <TabsTrigger
            value="feed"
            className="py-2.5 flex flex-col md:flex-row gap-2 rounded-lg data-[state=active]:shadow-sm"
          >
            <Users className="w-4 h-4" /> <span className="hidden md:inline">Social</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="focus-visible:outline-none">
          <OverviewTab />
        </TabsContent>

        <TabsContent value="rankings" className="focus-visible:outline-none">
          <RankingsTab />
        </TabsContent>

        <TabsContent value="challenges" className="focus-visible:outline-none">
          <ChallengesTab />
        </TabsContent>

        <TabsContent value="feed" className="focus-visible:outline-none">
          <SocialFeedTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}
