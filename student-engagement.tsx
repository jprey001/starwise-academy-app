import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, TrendingUp, Gift, Users, Film, Tv } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const StudentEngagement: React.FC<{ contentType: string; subscriptionTier: string }> = ({ contentType, subscriptionTier }) => {
  const activities = contentType === 'traditional' 
    ? [
        {
          title: "Weekly Challenges",
          description: "Compete in fun financial challenges and win prizes!",
          icon: Trophy,
          action: "Join This Week's Challenge",
          color: "text-yellow-500"
        },
        {
          title: "Stock Market Game",
          description: "Practice investing with virtual money in our stock market simulator.",
          icon: TrendingUp,
          action: "Start Trading",
          color: "text-green-500"
        },
        {
          title: "Reward Store",
          description: "Redeem your earned points for real-world rewards and discounts.",
          icon: Gift,
          action: "Visit Store",
          color: "text-red-500"
        },
        {
          title: "Study Groups",
          description: "Join or create study groups to learn and prepare together.",
          icon: Users,
          action: "Find a Group",
          color: "text-blue-500"
        }
      ]
    : [
        {
          title: "Movie Marathon Challenge",
          description: "Watch finance-themed movies and answer trivia for points!",
          icon: Film,
          action: "Start Watching",
          color: "text-purple-500"
        },
        {
          title: "TV Show Binge Quiz",
          description: "Test your knowledge of financial concepts from popular TV shows.",
          icon: Tv,
          action: "Take the Quiz",
          color: "text-indigo-500"
        },
        {
          title: "Pop Culture Debates",
          description: "Engage in friendly debates about financial decisions in movies and shows.",
          icon: Users,
          action: "Join a Debate",
          color: "text-blue-500"
        },
        {
          title: "Fictional Stock Exchange",
          description: "Trade stocks of companies from your favorite movies and TV shows.",
          icon: TrendingUp,
          action: "Start Trading",
          color: "text-green-500"
        }
      ]

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-purple-700">
          WealthWise Academy Student Zone: {contentType === 'traditional' ? 'Traditional' : 'Pop Culture'} Edition
        </CardTitle>
      </CardHeader>
      <CardContent>
        {subscriptionTier === 'free' && (
          <Alert className="mb-4">
            <AlertTitle>Upgrade to access engagement features!</AlertTitle>
            <AlertDescription>
              Join study groups, participate in challenges, and more by upgrading to a Standard or Premium subscription.
            </AlertDescription>
          </Alert>
        )}

        {subscriptionTier !== 'free' && (
          <div className="grid gap-4 md:grid-cols-2">
            {activities.map((activity, index) => (
              <Card key={index} className="p-4">
                <activity.icon className={`h-8 w-8 mb-2 ${activity.color}`} />
                <h3 className="font-bold text-lg mb-2">{activity.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{activity.description}</p>
                <Button className="w-full">{activity.action}</Button>
              </Card>
            ))}
          </div>
        )}

        {subscriptionTier === 'premium' && (
          <Card className="mt-4 p-4">
            <h3 className="font-bold text-lg mb-2">1-on-1 Coaching</h3>
            <p className="text-sm text-gray-600 mb-4">Schedule a personalized coaching session with our financial experts.</p>
            <Button className="w-full">Book a Session</Button>
          </Card>
        )}
      </CardContent>
    </Card>
  )
}

