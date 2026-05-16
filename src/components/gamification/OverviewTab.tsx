import { LevelProgress } from './LevelProgress'
import { BadgesList } from './BadgesList'

export function OverviewTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      <LevelProgress currentLevel={34} currentPoints={8450} nextLevelPoints={10000} />
      <BadgesList />
    </div>
  )
}
