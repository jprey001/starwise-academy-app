import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Reward {
  id: string
  name: string
  description: string
  cost: number
  category: 'digital' | 'physical' | 'experience'
}

interface RewardsSystemProps {
  points: number
  rewards: Reward[]
  onRedeemReward: (rewardId: string) => void
}

export const RewardsSystem: React.FC<RewardsSystemProps> = ({ points, rewards, onRedeemReward }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rewards Center</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h3 className="font-bold mb-2">Your Points</h3>
          <p className="text-2xl font-bold text-ww-green">{points} pts</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Available Rewards</h3>
          <div className="space-y-4">
            {rewards.map((reward) => (
              <Card key={reward.id}>
                <CardContent className="flex items-center justify-between p-4">
                  <div>
                    <h4 className="font-bold">{reward.name}</h4>
                    <p className="text-sm text-gray-500">{reward.description}</p>
                    <Badge variant="secondary" className="mt-2">{reward.category}</Badge>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{reward.cost} pts</p>
                    <Button
                      onClick={() => onRedeemReward(reward.id)}
                      disabled={points < reward.cost}
                      className="mt-2"
                    >
                      Redeem
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

