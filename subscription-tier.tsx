import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const tiers = [
  {
    name: 'Free',
    price: 0,
    features: [
      'Access to 2 basic lessons',
      'Limited quizzes',
      'Basic progress tracking'
    ]
  },
  {
    name: 'Standard',
    price: 9.99,
    features: [
      'Access to all lessons and quizzes',
      'Full progress tracking',
      'Study groups access'
    ]
  },
  {
    name: 'Premium',
    price: 19.99,
    features: [
      'All Standard features',
      'Advanced modules',
      'Personalized study plans',
      'Certificates of completion',
      '1-on-1 coaching sessions'
    ]
  }
]

export const SubscriptionTier: React.FC<{
  currentTier: string;
  onUpgrade: (tier: string) => void;
  showDialog: boolean;
  setShowDialog: (show: boolean) => void;
}> = ({ currentTier, onUpgrade, showDialog, setShowDialog }) => {
  const handleUpgrade = async (tier: string) => {
    const stripe = await stripePromise
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tier }),
    })

    const session = await response.json()

    const result = await stripe!.redirectToCheckout({
      sessionId: session.id,
    })

    if (result.error) {
      console.error(result.error.message)
    } else {
      onUpgrade(tier)
      setShowDialog(false)
    }
  }

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Choose Your Subscription Tier</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tiers.map((tier) => (
            <Card key={tier.name} className={`${currentTier === tier.name.toLowerCase() ? 'border-2 border-purple-500' : ''}`}>
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-4">${tier.price}/month</p>
                <ul className="list-disc list-inside mb-4">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="text-sm">{feature}</li>
                  ))}
                </ul>
                <Button 
                  onClick={() => handleUpgrade(tier.name.toLowerCase())}
                  disabled={currentTier === tier.name.toLowerCase()}
                  className="w-full"
                >
                  {currentTier === tier.name.toLowerCase() ? 'Current Plan' : 'Upgrade'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

