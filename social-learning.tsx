import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface Friend {
  id: string
  name: string
  avatar: string
  level: number
}

interface SocialLearningProps {
  friends: Friend[]
  onInvite: (friendId: string) => void
}

export const SocialLearning: React.FC<SocialLearningProps> = ({ friends, onInvite }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Learn with Friends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {friends.map((friend) => (
            <div key={friend.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={friend.avatar} alt={friend.name} />
                  <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{friend.name}</p>
                  <p className="text-sm text-gray-500">Level {friend.level}</p>
                </div>
              </div>
              <Button onClick={() => onInvite(friend.id)}>Invite to Study</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

