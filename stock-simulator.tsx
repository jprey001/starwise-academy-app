import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface Stock {
  symbol: string
  name: string
  price: number
  change: number
}

const mockStocks: Stock[] = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 150.25, change: 2.5 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2750.80, change: -1.2 },
  { symbol: 'MSFT', name: 'Microsoft Corporation', price: 305.15, change: 1.8 },
  { symbol: 'AMZN', name: 'Amazon.com, Inc.', price: 3380.50, change: 0.5 },
]

const mockHistoricalData = [
  { date: '2023-01-01', value: 100 },
  { date: '2023-02-01', value: 120 },
  { date: '2023-03-01', value: 110 },
  { date: '2023-04-01', value: 130 },
  { date: '2023-05-01', value: 140 },
  { date: '2023-06-01', value: 135 },
]

export const StockSimulator: React.FC = () => {
  const [portfolio, setPortfolio] = useState<{ [key: string]: number }>({})
  const [cash, setCash] = useState(10000)

  const buyStock = (stock: Stock, quantity: number) => {
    const cost = stock.price * quantity
    if (cost <= cash) {
      setCash(cash - cost)
      setPortfolio({
        ...portfolio,
        [stock.symbol]: (portfolio[stock.symbol] || 0) + quantity,
      })
    }
  }

  const sellStock = (stock: Stock, quantity: number) => {
    if (portfolio[stock.symbol] >= quantity) {
      const revenue = stock.price * quantity
      setCash(cash + revenue)
      setPortfolio({
        ...portfolio,
        [stock.symbol]: portfolio[stock.symbol] - quantity,
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Stock Market Simulator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h3 className="font-bold mb-2">Your Portfolio</h3>
          <p>Cash: ${cash.toFixed(2)}</p>
          {Object.entries(portfolio).map(([symbol, quantity]) => (
            <p key={symbol}>{symbol}: {quantity} shares</p>
          ))}
        </div>
        <div className="mb-4">
          <h3 className="font-bold mb-2">Stock Prices</h3>
          {mockStocks.map((stock) => (
            <div key={stock.symbol} className="flex items-center justify-between mb-2">
              <div>
                <p className="font-medium">{stock.symbol}</p>
                <p className="text-sm text-gray-500">{stock.name}</p>
              </div>
              <div className="text-right">
                <p>${stock.price.toFixed(2)}</p>
                <p className={stock.change >= 0 ? 'text-green-500' : 'text-red-500'}>
                  {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}%
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Input type="number" placeholder="Qty" className="w-20" />
                <Button onClick={() => buyStock(stock, 1)}>Buy</Button>
                <Button onClick={() => sellStock(stock, 1)} variant="outline">Sell</Button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 className="font-bold mb-2">Market Trends</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={mockHistoricalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

