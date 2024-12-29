import React from 'react'
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface GamificationProps {
  level: number
  experience: number
  nextLevelExperience: number
  badges: string[]
}

export const Gamification: React.FC<GamificationProps> = ({ level, experience, nextLevelExperience, badges }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold">Level {level}</span>
          <span className="text-sm">{experience} / {nextLevelExperience} XP</span>
        </div>
        <Progress value={(experience / nextLevelExperience) * 100} className="mb-4" />
        <div>
          <h3 className="font-bold mb-2">Badges Earned</h3>
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <Badge key={index} variant="secondary">{badge}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

