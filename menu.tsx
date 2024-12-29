import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Logo from './components/Logo'

export default function Menu() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-ww-blue via-ww-green to-ww-yellow animate-gradient-x">
      <Logo className="mb-8 w-24 h-24" />
      <h1 className="text-4xl font-bold text-white mb-8">WealthWise Academy Menu</h1>
      <div className="space-y-4">
        <Link href="/">
          <Button className="w-64 bg-white text-ww-blue hover:bg-ww-yellow hover:text-white">Home</Button>
        </Link>
        <Link href="/dashboard">
          <Button className="w-64 bg-white text-ww-blue hover:bg-ww-yellow hover:text-white">Dashboard</Button>
        </Link>
        <Link href="/privacy-policy">
          <Button className="w-64 bg-white text-ww-blue hover:bg-ww-yellow hover:text-white">Privacy Policy</Button>
        </Link>
      </div>
    </div>
  )
}

