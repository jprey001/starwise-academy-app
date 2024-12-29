import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const achievements = [
  { name: "Budget Master", type: "traditional" },
  { name: "Credit Whiz", type: "traditional" },
  { name: "Investing Novice", type: "traditional" },
  { name: "Pop Culture Guru", type: "popCulture" },
  { name: "Media Money Maven", type: "popCulture" },
]

export const ProgressTracking: React.FC<{ 
  contentType: string; 
  subscriptionTier: string;
  completedLessons: string[];
  quizScores: { [key: string]: number };
}> = ({ contentType, subscriptionTier, completedLessons, quizScores }) => {
  const totalLessons = contentType === 'traditional' ? 5 : 5 // Update this based on your actual number of lessons
  const completionPercentage = (completedLessons.length / totalLessons) * 100

  const quizData = Object.entries(quizScores).map(([name, score], index) => ({
    name: `Quiz ${index + 1}`,
    score
  }))

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-purple-700">Your WealthWise Academy Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-2">Overall Completion</h3>
            <Progress value={completionPercentage} className="h-4" />
            <p className="text-sm text-gray-600 mt-2">
              You've completed {completionPercentage.toFixed(0)}% of the {contentType} course material
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Recent Achievements</h3>
            <div className="flex flex-wrap gap-2">
              {achievements
                .filter(achievement => achievement.type === contentType)
                .map((achievement, index) => (
                  <Badge key={index} variant="secondary">{achievement.name}</Badge>
                ))
              }
            </div>
          </div>
          {subscriptionTier !== 'free' && quizData.length > 0 && (
            <div>
              <h3 className="font-bold text-lg mb-2">Quiz Scores</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={quizData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="score" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
          {subscriptionTier === 'premium' && (
            <div>
              <h3 className="font-bold text-lg mb-2">Personalized Study Plan</h3>
              <p>Your next recommended focus areas:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Improve your understanding of compound interest</li>
                <li>Practice more questions on tax deductions</li>
                <li>Review the basics of stock market investing</li>
              </ul>
            </div>
          )}
          {subscriptionTier === 'free' && (
            <Alert>
              <AlertTitle>Upgrade to see more detailed progress!</AlertTitle>
              <AlertDescription>
                Get access to quiz scores, personalized study plans, and more by upgrading your subscription.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

