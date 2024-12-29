'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Play, Trophy, Users, Crown, Menu, Globe, Sun, Moon } from 'lucide-react'
import { LearningModule } from './components/learning-module'
import { PracticeQuiz } from './components/practice-quiz'
import { ProgressTracking } from './components/progress-tracking'
import { StudentEngagement } from './components/student-engagement'
import { SubscriptionTier } from './components/subscription-tier'
import { InAppPurchase } from './components/in-app-purchase'
import { Gamification } from './components/gamification'
import { SocialLearning } from './components/social-learning'
import { StockSimulator } from './components/stock-simulator'
import { BudgetingTool } from './components/budgeting-tool'
import { RewardsSystem } from './components/rewards-system'
import Logo from './components/Logo'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('learn')
  const [subscriptionTier, setSubscriptionTier] = useState('free')
  const [contentType, setContentType] = useState('traditional')
  const [showSubscriptionDialog, setShowSubscriptionDialog] = useState(false)
  const [completedLessons, setCompletedLessons] = useState<string[]>([])
  const [quizScores, setQuizScores] = useState<{ [key: string]: number }>({})
  const [language, setLanguage] = useState('en')
  const [theme, setTheme] = useState('light')
  const [gameStats, setGameStats] = useState({
    level: 1,
    experience: 0,
    nextLevelExperience: 100,
    badges: ['Newbie Investor', 'Budget Planner'],
  })
  const [friends, setFriends] = useState([
    { id: '1', name: 'Alice', avatar: '/avatars/alice.jpg', level: 5 },
    { id: '2', name: 'Bob', avatar: '/avatars/bob.jpg', level: 3 },
    { id: '3', name: 'Charlie', avatar: '/avatars/charlie.jpg', level: 7 },
  ])
  const [rewards, setRewards] = useState([
    { id: '1', name: 'Amazon Gift Card', description: '$10 Amazon Gift Card', cost: 1000, category: 'digital' },
    { id: '2', name: 'Financial Book', description: 'Bestselling personal finance book', cost: 2000, category: 'physical' },
    { id: '3', name: 'Virtual Financial Advisor Session', description: '30-min session with a pro', cost: 5000, category: 'experience' },
  ])

  useEffect(() => {
    // Load user data from localStorage
    const savedSubscriptionTier = localStorage.getItem('subscriptionTier')
    const savedCompletedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]')
    const savedQuizScores = JSON.parse(localStorage.getItem('quizScores') || '{}')
    const savedLanguage = localStorage.getItem('language') || 'en'
    const savedTheme = localStorage.getItem('theme') || 'light'

    if (savedSubscriptionTier) setSubscriptionTier(savedSubscriptionTier)
    if (savedCompletedLessons) setCompletedLessons(savedCompletedLessons)
    if (savedQuizScores) setQuizScores(savedQuizScores)
    if (savedLanguage) setLanguage(savedLanguage)
    if (savedTheme) setTheme(savedTheme)
  }, [])

  useEffect(() => {
    // Save user data to localStorage
    localStorage.setItem('subscriptionTier', subscriptionTier)
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons))
    localStorage.setItem('quizScores', JSON.stringify(quizScores))
    localStorage.setItem('language', language)
    localStorage.setItem('theme', theme)
    
    // Apply theme
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [subscriptionTier, completedLessons, quizScores, language, theme])

  const handleUpgradeClick = () => {
    setShowSubscriptionDialog(true)
  }

  const handleLessonComplete = (lessonTitle: string) => {
    setCompletedLessons(prev => [...prev, lessonTitle])
  }

  const handleQuizComplete = (quizName: string, score: number) => {
    setQuizScores(prev => ({ ...prev, [quizName]: score }))
  }

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const handleInviteFriend = (friendId: string) => {
    console.log(`Invited friend with ID: ${friendId}`)
    // Implement invitation logic here
  }

  const handleRedeemReward = (rewardId: string) => {
    console.log(`Redeemed reward with ID: ${rewardId}`)
    // Implement reward redemption logic here
  }

  const content = {
    en: {
      title: "WealthWise Academy: Your Financial Future Starts Here",
      upgrade: "Upgrade to Premium",
      contentType: "Learning Style:",
      traditional: "Classic",
      popCulture: "Pop Culture",
      learn: "Learn",
      practice: "Practice",
      progress: "Progress",
      engage: "Connect",
      privacyPolicy: "Privacy Policy",
      accessibility: "Accessibility",
    },
    es: {
      title: "Academia WealthWise: Tu Futuro Financiero Comienza Aquí",
      upgrade: "Actualizar a Premium",
      contentType: "Estilo de Aprendizaje:",
      traditional: "Clásico",
      popCulture: "Cultura Pop",
      learn: "Aprender",
      practice: "Practicar",
      progress: "Progreso",
      engage: "Conectar",
      privacyPolicy: "Política de Privacidad",
      accessibility: "Accesibilidad",
    }
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-ww-blue via-ww-green to-ww-yellow animate-gradient-x ${theme === 'dark' ? 'text-white' : ''}`}>
      <div className="max-w-6xl mx-auto p-4">
        <header className="flex justify-between items-center mb-4">
          <Link href="/" aria-label="Home">
            <Logo className="w-16 h-16 cursor-pointer" theme={theme as 'light' | 'dark'} />
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-white" tabIndex={0}>{content[language].title}</h1>
          {subscriptionTier === 'free' && (
            <Button 
              onClick={handleUpgradeClick}
              className="bg-ww-yellow text-ww-gray hover:bg-ww-green hover:text-white"
            >
              <Crown className="h-5 w-5 mr-2" />
              {content[language].upgrade}
            </Button>
          )}
        </header>

        <nav className="flex flex-wrap items-center gap-4 mb-4">
          <span className="font-medium text-white">{content[language].contentType}</span>
          <Button
            variant={contentType === 'traditional' ? 'default' : 'outline'}
            onClick={() => setContentType('traditional')}
            className="bg-white text-ww-blue hover:bg-ww-green hover:text-white"
          >
            {content[language].traditional}
          </Button>
          <Button
            variant={contentType === 'popCulture' ? 'default' : 'outline'}
            onClick={() => setContentType('popCulture')}
            className="bg-white text-ww-blue hover:bg-ww-green hover:text-white"
          >
            {content[language].popCulture}
          </Button>
        </nav>

        <main>
          <Card className="mb-6 border-0 shadow-lg bg-white bg-opacity-90">
            <CardHeader className="bg-ww-blue text-white rounded-t-lg">
              <CardTitle className="text-2xl sm:text-3xl font-bold">{content[language].title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 mb-6">
                  <TabsTrigger value="learn" className="text-lg">
                    <BookOpen className="mr-2 h-5 w-5" />
                    {content[language].learn}
                  </TabsTrigger>
                  <TabsTrigger value="practice" className="text-lg">
                    <Play className="mr-2 h-5 w-5" />
                    {content[language].practice}
                  </TabsTrigger>
                  <TabsTrigger value="progress" className="text-lg">
                    <Trophy className="mr-2 h-5 w-5" />
                    {content[language].progress}
                  </TabsTrigger>
                  <TabsTrigger value="engage" className="text-lg">
                    <Users className="mr-2 h-5 w-5" />
                    {content[language].engage}
                  </TabsTrigger>
                  <TabsTrigger value="invest" className="text-lg">
                    <Trophy className="mr-2 h-5 w-5" />
                    Invest
                  </TabsTrigger>
                  <TabsTrigger value="budget" className="text-lg">
                    <Trophy className="mr-2 h-5 w-5" />
                    Budget
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="learn">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <LearningModule 
                      subscriptionTier={subscriptionTier} 
                      contentType={contentType} 
                      completedLessons={completedLessons}
                      onLessonComplete={handleLessonComplete}
                      language={language}
                      theme={theme}
                    />
                    <Gamification {...gameStats} />
                  </div>
                </TabsContent>

                <TabsContent value="practice">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <PracticeQuiz 
                      subscriptionTier={subscriptionTier} 
                      contentType={contentType}
                      onQuizComplete={handleQuizComplete}
                    />
                    <SocialLearning friends={friends} onInvite={handleInviteFriend} />
                  </div>
                </TabsContent>

                <TabsContent value="progress">
                  <ProgressTracking 
                    contentType={contentType} 
                    subscriptionTier={subscriptionTier}
                    completedLessons={completedLessons}
                    quizScores={quizScores}
                  />
                </TabsContent>

                <TabsContent value="engage">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <StudentEngagement 
                      contentType={contentType} 
                      subscriptionTier={subscriptionTier}
                    />
                    <RewardsSystem
                      points={gameStats.experience}
                      rewards={rewards}
                      onRedeemReward={handleRedeemReward}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="invest">
                  <StockSimulator />
                </TabsContent>

                <TabsContent value="budget">
                  <BudgetingTool />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          <SubscriptionTier 
            currentTier={subscriptionTier} 
            onUpgrade={setSubscriptionTier} 
            showDialog={showSubscriptionDialog}
            setShowDialog={setShowSubscriptionDialog}
          />
          <InAppPurchase subscriptionTier={subscriptionTier} />
        </main>

        <footer className="mt-8 text-center text-white">
          <Link href="/privacy-policy" className="hover:text-ww-yellow">
            {content[language].privacyPolicy}
          </Link>
          {' | '}
          <Link href="/accessibility" className="hover:text-ww-yellow">
            {content[language].accessibility}
          </Link>
        </footer>

        <div className="fixed bottom-4 right-4 flex space-x-2">
          <Button variant="outline" size="icon" onClick={() => setLanguage(language === 'en' ? 'es' : 'en')} aria-label="Toggle language" className="bg-white text-ww-blue">
            <Globe className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={toggleTheme} aria-label="Toggle theme" className="bg-white text-ww-blue">
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
          <Button variant="outline" size="icon" asChild className="bg-white text-ww-blue">
            <Link href="/menu" aria-label="Menu">
              <Menu className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

