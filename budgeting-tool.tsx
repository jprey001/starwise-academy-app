import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

interface BudgetItem {
  category: string
  amount: number
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export const BudgetingTool: React.FC = () => {
  const [income, setIncome] = useState(0)
  const [expenses, setExpenses] = useState<BudgetItem[]>([])
  const [newCategory, setNewCategory] = useState('')
  const [newAmount, setNewAmount] = useState('')

  const addExpense = () => {
    if (newCategory && newAmount) {
      setExpenses([...expenses, { category: newCategory, amount: parseFloat(newAmount) }])
      setNewCategory('')
      setNewAmount('')
    }
  }

  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0)
  const remainingBudget = income - totalExpenses

  return (
    <Card>
      <CardHeader>
        <CardTitle>Budgeting Tool</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <label htmlFor="income" className="block text-sm font-medium text-gray-700">Monthly Income</label>
          <Input
            id="income"
            type="number"
            value={income}
            onChange={(e) => setIncome(parseFloat(e.target.value))}
            placeholder="Enter your monthly income"
          />
        </div>
        <div className="mb-4">
          <h3 className="font-bold mb-2">Add Expense</h3>
          <div className="flex space-x-2">
            <Input
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Category"
            />
            <Input
              type="number"
              value={newAmount}
              onChange={(e) => setNewAmount(e.target.value)}
              placeholder="Amount"
            />
            <Button onClick={addExpense}>Add</Button>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-bold mb-2">Expense Breakdown</h3>
          {expenses.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span>{item.category}</span>
              <span>${item.amount.toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <h3 className="font-bold mb-2">Budget Summary</h3>
          <p>Total Income: ${income.toFixed(2)}</p>
          <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
          <p className={remainingBudget >= 0 ? 'text-green-500' : 'text-red-500'}>
            Remaining Budget: ${remainingBudget.toFixed(2)}
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Expense Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={expenses}
                dataKey="amount"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {expenses.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

