import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const purchaseItems = [
  { id: 1, name: 'Advanced Investing Course', price: 29.99 },
  { id: 2, name: 'Tax Planning Strategies', price: 24.99 },
  { id: 3, name: 'Retirement Planning Guide', price: 19.99 },
  { id: 4, name: 'Stock Market Mastery', price: 34.99 },
]

export const InAppPurchase: React.FC = () => {
  const handlePurchase = (item: { id: number; name: string; price: number }) => {
    // Here you would typically integrate with a payment system
    console.log('Purchased:', item)
    alert(`Thank you for purchasing ${item.name}!`)
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Additional Learning Resources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {purchaseItems.map((item) => (
            <Card key={item.id} className="p-4">
              <h3 className="font-bold text-lg mb-2">{item.name}</h3>
              <p className="text-2xl font-bold mb-4">${item.price.toFixed(2)}</p>
              <Button onClick={() => handlePurchase(item)} className="w-full">
                Purchase
              </Button>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

