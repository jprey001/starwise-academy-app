import React, { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, XCircle } from 'lucide-react'

const traditionalQuizData = [
  {
    question: "What is the primary function of money?",
    options: [
      "To make people happy",
      "To serve as a medium of exchange",
      "To create debt",
      "To cause inflation"
    ],
    correctAnswer: 1,
    explanation: "The primary function of money is to serve as a medium of exchange. It allows people to trade goods and services easily without the need for bartering."
  },
  {
    question: "What is compound interest?",
    options: [
      "Interest calculated only on the principal amount",
      "Interest calculated on the initial principal and accumulated interest from previous periods",
      "A type of tax on savings accounts",
      "A fee charged by banks for maintaining an account"
    ],
    correctAnswer: 1,
    explanation: "Compound interest is interest calculated on the initial principal and also on the accumulated interest of previous periods. This effect can significantly increase your savings over time."
  },
  {
    question: "What is diversification in investing?",
    options: [
      "Putting all your money into one promising stock",
      "Spreading investments across various financial instruments and sectors",
      "Investing only in government bonds",
      "Frequently trading stocks to maximize profits"
    ],
    correctAnswer: 1,
    explanation: "Diversification is a risk management strategy that involves spreading investments across various financial instruments, industries, and categories. This strategy aims to maximize returns by investing in different areas that would each react differently to the same event."
  }
]

const popCultureQuizData = [
  {
    question: "In 'Breaking Bad', what illegal activity does Walter White engage in to secure his family's financial future?",
    options: [
      "Robbing banks",
      "Counterfeiting money",
      "Manufacturing and selling methamphetamine",
      "Insider trading"
    ],
    correctAnswer: 2,
    explanation: "While the show depicts illegal activities, it raises important questions about financial desperation, the value of human life, and the consequences of our financial decisions. It's crucial to seek legal and ethical means to secure your financial future, such as proper financial planning, insurance, and legal investment strategies."
  },
  {
    question: "In the movie 'The Big Short', what financial instrument is at the center of the 2008 financial crisis?",
    options: [
      "Stocks",
      "Bonds",
      "Collateralized Debt Obligations (CDOs)",
      "Cryptocurrency"
    ],
    correctAnswer: 2,
    explanation: "The movie highlights the complexity and risks associated with certain financial instruments. It underscores the importance of understanding what you're investing in and the potential systemic risks in the financial market. For personal finance, this translates to doing thorough research before making investment decisions."
  },
  {
    question: "In the TV show 'Succession', what type of company is at the center of the Roy family's wealth and power struggles?",
    options: [
      "A tech startup",
      "A media conglomerate",
      "A fast-food chain",
      "A pharmaceutical company"
    ],
    correctAnswer: 1,
    explanation: "The show, while fictional, provides insights into corporate governance, family-owned businesses, and wealth management. It illustrates the complexities of running large corporations and the potential conflicts that can arise in family businesses. For personal finance, it highlights the importance of clear succession planning and the potential pitfalls of mixing family and business."
  }
]

export const PracticeQuiz: React.FC<{ 
  subscriptionTier: string; 
  contentType: string;
  onQuizComplete: (quizName: string, score: number) => void;
}> = ({ subscriptionTier, contentType, onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const quizData = contentType === 'traditional' ? traditionalQuizData : popCultureQuizData

  const availableQuestions = quizData.slice(0, subscriptionTier === 'free' ? 1 : subscriptionTier === 'standard' ? 2 : quizData.length)

  useEffect(() => {
    if (quizCompleted) {
      onQuizComplete(`${contentType}Quiz`, score)
    }
  }, [quizCompleted, score, contentType, onQuizComplete])

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index)
    setShowResult(true)
    if (index === quizData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < availableQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setQuizCompleted(false)
  }

  if (quizCompleted) {
    return (
      <Card className="p-6 border-0 shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-purple-700">Quiz Completed!</h3>
        <p className="text-lg mb-4">Your score: {score}/{availableQuestions.length}</p>
        <Button onClick={resetQuiz} className="w-full bg-purple-500 hover:bg-purple-600 text-white">
          Retake Quiz
        </Button>
      </Card>
    )
  }

  return (
    <Card className="p-6 border-0 shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-purple-700">
        {quizData[currentQuestionIndex].question}
      </h3>
      <div className="space-y-3">
        {quizData[currentQuestionIndex].options.map((option, index) => (
          <Button
            key={index}
            variant={selectedAnswer === index 
              ? index === quizData[currentQuestionIndex].correctAnswer 
                ? "default" 
                : "destructive"
              : "outline"}
            className={`w-full justify-start text-left p-4 text-lg ${
              showResult && index === quizData[currentQuestionIndex].correctAnswer ? 'bg-green-100' : ''
            }`}
            onClick={() => handleAnswerSelect(index)}
            disabled={showResult}
          >
            <span className="mr-2">{option}</span>
            {showResult && index === quizData[currentQuestionIndex].correctAnswer && (
              <CheckCircle className="h-5 w-5 text-green-500 ml-auto" />
            )}
            {showResult && selectedAnswer === index && index !== quizData[currentQuestionIndex].correctAnswer && (
              <XCircle className="h-5 w-5 text-red-500 ml-auto" />
            )}
          </Button>
        ))}
      </div>
      {showResult && (
        <>
          <Alert className="mt-4" variant={selectedAnswer === quizData[currentQuestionIndex].correctAnswer ? "default" : "destructive"}>
            <AlertTitle>
              {selectedAnswer === quizData[currentQuestionIndex].correctAnswer ? "Correct! You're on a roll! 🎉" : "Oops! Not quite right. Keep learning! 📚"}
            </AlertTitle>
            <AlertDescription>
              {quizData[currentQuestionIndex].explanation}
            </AlertDescription>
          </Alert>
          <Button 
            className="w-full mt-4 bg-purple-500 hover:bg-purple-600 text-white"
            onClick={nextQuestion}
          >
            {currentQuestionIndex < availableQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
          </Button>
        </>
      )}
      {subscriptionTier === 'free' && (
        <Alert className="mt-4">
          <AlertTitle>Upgrade to access more questions!</AlertTitle>
          <AlertDescription>
            Unlock our full question bank by upgrading to a Standard or Premium subscription.
          </AlertDescription>
        </Alert>
      )}
    </Card>
  )
}

