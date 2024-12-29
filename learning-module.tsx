import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Banknote, Landmark, CreditCard, FileText, PiggyBank, Rocket, ShieldCheck, Briefcase, TrendingUp, Crown, Play, Smartphone, Globe, Users } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

const topics = [
  { name: 'Money Basics', progress: 65, icon: Banknote, color: 'from-green-400 to-emerald-500' },
  { name: 'Banking', progress: 45, icon: Landmark, color: 'from-blue-400 to-cyan-500' },
  { name: 'Credit', progress: 80, icon: CreditCard, color: 'from-pink-400 to-rose-500' },
  { name: 'Taxes', progress: 30, icon: FileText, color: 'from-yellow-400 to-amber-500' },
  { name: 'Budgeting', progress: 50, icon: PiggyBank, color: 'from-purple-400 to-indigo-500' },
  { name: 'Investing', progress: 40, icon: Rocket, color: 'from-red-400 to-orange-500' },
  { name: 'Insurance', progress: 55, icon: ShieldCheck, color: 'from-teal-400 to-green-500' },
  { name: 'Careers', progress: 70, icon: Briefcase, color: 'from-blue-400 to-indigo-500' },
  { name: 'Financial Planning', progress: 35, icon: TrendingUp, color: 'from-gray-400 to-slate-500' },
  { name: 'Digital Finance', progress: 60, icon: Smartphone, color: 'from-cyan-400 to-blue-500' },
  { name: 'Global Economics', progress: 25, icon: Globe, color: 'from-green-400 to-teal-500' },
  { name: 'Social Finance', progress: 45, icon: Users, color: 'from-pink-400 to-purple-500' }
]

const traditionalLessons = [
  {
    title: "Understanding Money Basics",
    duration: "15 min",
    tier: "free",
    content: "This lesson covers the fundamental concepts of money, including its functions as a medium of exchange, store of value, and unit of account. You'll learn about the history of money, different types of currency, and how money facilitates economic transactions in our modern world."
  },
  {
    title: "Mastering Personal Banking",
    duration: "20 min",
    tier: "free",
    content: "Learn about various types of bank accounts, how to manage them effectively, and the importance of reconciling your accounts regularly. This lesson also covers online banking safety, choosing the right bank for your needs, and understanding banking fees and services."
  },
  {
    title: "Building and Maintaining Good Credit",
    duration: "25 min",
    tier: "standard",
    content: "Discover the factors that influence your credit score, how to read a credit report, and strategies for building or repairing your credit. This lesson also discusses the responsible use of credit cards, managing debt, and the long-term impact of your credit history on your financial future."
  },
  {
    title: "Navigating the World of Taxes",
    duration: "30 min",
    tier: "premium",
    content: "Understand the basics of income tax, how to file your taxes, and common deductions and credits. This comprehensive lesson covers the importance of keeping good records, planning for tax season throughout the year, and how different life events can affect your tax situation."
  },
  {
    title: "Creating and Sticking to a Budget",
    duration: "20 min",
    tier: "free",
    content: "Learn how to create a realistic budget, track your expenses, and adjust your spending habits. This lesson explores different budgeting methods and tools to help you manage your money more effectively, set financial goals, and build long-term wealth."
  },
  {
    title: "Introduction to Investing",
    duration: "25 min",
    tier: "standard",
    content: "Explore the basics of investing, including different types of investments, risk assessment, and strategies for building a diversified portfolio. This lesson will help you understand stocks, bonds, mutual funds, and ETFs, as well as the importance of starting to invest early."
  },
  {
    title: "Understanding Insurance",
    duration: "20 min",
    tier: "standard",
    content: "Learn about different types of insurance, including health, life, auto, and home insurance. This lesson will help you understand how insurance works, how to choose the right coverage for your needs, and strategies for managing insurance costs."
  },
  {
    title: "Career Planning and Salary Negotiation",
    duration: "30 min",
    tier: "premium",
    content: "Discover strategies for planning your career path, improving your employability, and negotiating your salary. This lesson covers resume writing, interview skills, networking, and how to research and negotiate fair compensation in your field."
  },
  {
    title: "Long-term Financial Planning",
    duration: "35 min",
    tier: "premium",
    content: "Learn how to set and achieve long-term financial goals, including saving for retirement, planning for major life events, and building generational wealth. This lesson covers retirement accounts, estate planning basics, and strategies for growing your wealth over time."
  }
]

const popCultureLessons = [
  {
    title: "Money Heist: The Economics of Currency",
    duration: "15 min",
    tier: "free",
    content: "Inspired by the hit show 'Money Heist', this lesson explores the concept of money printing, inflation, and the stability of financial systems. Learn about the real-world consequences of flooding the market with currency and how central banks maintain economic balance."
  },
  {
    title: "Succession: Corporate Finance and Family Banks",
    duration: "20 min",
    tier: "free",
    content: "Using the TV series 'Succession' as a backdrop, dive into the world of corporate finance, family-owned businesses, and the complexities of wealth management. Explore concepts like corporate governance, shareholder rights, and the ethics of nepotism in business."
  },
  {
    title: "Billions: The Art of Investing",
    duration: "25 min",
    tier: "standard",
    content: "Drawing parallels from the show 'Billions', this lesson covers advanced investing strategies, hedge fund operations, and the ethical considerations in the world of high finance. Learn about different investment vehicles, risk management, and the psychology of trading."
  },
  {
    title: "Ozark: Creative Accounting and Money Laundering",
    duration: "30 min",
    tier: "premium",
    content: "Using 'Ozark' as a case study, this lesson explains the concepts of creative accounting, money laundering, and financial crimes. While emphasizing the illegal nature of these activities, learn about forensic accounting, financial regulations, and the importance of ethical financial practices."
  },
  {
    title: "Shark Tank: Entrepreneurship and Pitch Perfect",
    duration: "20 min",
    tier: "free",
    content: "Inspired by 'Shark Tank', learn the basics of entrepreneurship, business valuation, and how to pitch ideas to investors. This lesson covers creating a business plan, understanding market dynamics, and the key financial metrics that matter to investors."
  },
  {
    title: "The Big Short: Understanding Financial Crises",
    duration: "25 min",
    tier: "standard",
    content: "Based on the movie 'The Big Short', this lesson delves into the 2008 financial crisis, explaining concepts like subprime mortgages, derivatives, and market bubbles. Learn how to identify potential economic risks and protect your finances during turbulent times."
  },
  {
    title: "Parks and Recreation: Local Government and Budgets",
    duration: "20 min",
    tier: "standard",
    content: "Using scenarios from 'Parks and Recreation', explore how local governments manage budgets, allocate resources, and make financial decisions. Learn about public funding, community projects, and the impact of local policies on personal finances."
  },
  {
    title: "Black Panther: Technology and Economic Development",
    duration: "30 min",
    tier: "premium",
    content: "Inspired by 'Black Panther', this lesson examines the role of technology in economic development, resource management, and international trade. Explore concepts of national wealth, technological innovation, and the balance between tradition and progress in financial systems."
  },
  {
    title: "The Good Place: Ethics in Finance",
    duration: "25 min",
    tier: "premium",
    content: "Using themes from 'The Good Place', this lesson explores ethical decision-making in finance. Discuss moral philosophy in the context of financial choices, corporate responsibility, and the long-term consequences of economic actions on society and the environment."
  }
]

export const LearningModule: React.FC<{ 
  subscriptionTier: string; 
  contentType: string;
  completedLessons: string[];
  onLessonComplete: (lessonTitle: string) => void;
  language: string;
  theme: string;
}> = ({ subscriptionTier, contentType, completedLessons, onLessonComplete, language, theme }) => {
  const lessons = contentType === 'traditional' ? traditionalLessons : popCultureLessons

  const isLessonAvailable = (lessonTier: string) => {
    if (subscriptionTier === 'premium') return true
    if (subscriptionTier === 'standard') return lessonTier !== 'premium'
    return lessonTier === 'free'
  }

  const content = {
    en: {
      title: contentType === 'traditional' ? 'Traditional Lessons' : 'Pop Culture Lessons',
      duration: "Duration",
      start: "Start Lesson",
      review: "Review Lesson",
      upgrade: "Upgrade to Access",
      complete: "Complete Lesson",
      completed: "Lesson Completed",
    },
    es: {
      title: contentType === 'traditional' ? 'Lecciones Tradicionales' : 'Lecciones de Cultura Pop',
      duration: "Duración",
      start: "Comenzar Lección",
      review: "Repasar Lección",
      upgrade: "Actualizar para Acceder",
      complete: "Completar Lección",
      completed: "Lección Completada",
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {topics.map((topic, index) => (
          <Card key={index} className={`p-4 bg-gradient-to-br ${topic.color} text-white`}>
            <div className="flex items-center gap-3 mb-3">
              <topic.icon className="h-8 w-8" />
              <h3 className="font-bold text-xl">{topic.name}</h3>
            </div>
            <Progress 
              value={topic.progress} 
              className="mb-2 bg-white/30" 
            />
            <span className="text-sm font-medium">{topic.progress}% Complete</span>
          </Card>
        ))}
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300" tabIndex={0}>
          WealthWise Academy: {content[language].title}
        </h3>
        {lessons.map((lesson, index) => (
          <Card key={index} className={`mb-4 hover:shadow-lg transition-shadow ${lesson.tier === 'premium' ? 'border-2 border-yellow-500' : lesson.tier === 'standard' ? 'border-2 border-blue-500' : ''} ${theme === 'dark' ? 'bg-gray-800 text-white' : ''}`}>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <h4 className="text-xl font-bold text-purple-700 dark:text-purple-300">{lesson.title}</h4>
                  {lesson.tier === 'premium' && <Crown className="h-4 w-4 text-yellow-500" />}
                  {lesson.tier === 'standard' && <Badge variant="secondary">Standard</Badge>}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-300 flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  {content[language].duration}: {lesson.duration}
                </span>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    className={`w-full ${!isLessonAvailable(lesson.tier) ? 'bg-gray-300 dark:bg-gray-600' : 'bg-gradient-to-r from-purple-500 to-blue-500'} text-white`}
                    disabled={!isLessonAvailable(lesson.tier)}
                  >
                    {!isLessonAvailable(lesson.tier) ? content[language].upgrade : completedLessons.includes(lesson.title) ? content[language].review : content[language].start}
                  </Button>
                </DialogTrigger>
                <DialogContent className={`sm:max-w-[425px] ${theme === 'dark' ? 'bg-gray-800 text-white' : ''}`}>
                  <DialogHeader>
                    <DialogTitle>{lesson.title}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <p>{lesson.content}</p>
                    <Button 
                      className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white"
                      onClick={() => onLessonComplete(lesson.title)}
                    >
                      {completedLessons.includes(lesson.title) ? content[language].completed : content[language].complete}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

