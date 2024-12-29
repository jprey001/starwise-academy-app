import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Logo from './components/Logo'
import { useState } from 'react'

export default function LandingPage() {
  const [language, setLanguage] = useState('en')

  const content = {
    en: {
      title: "WealthWise Academy",
      subtitle: "Empowering Your Financial Future",
      description: "Join thousands of students mastering personal finance through interactive lessons, quizzes, and real-world simulations.",
      cta: "Start Your Free Trial",
      features: [
        "Personalized learning paths",
        "Expert-curated content",
        "Interactive quizzes and challenges",
        "Progress tracking and analytics",
        "Mobile-friendly platform"
      ],
      languageSelector: "Select Language",
    },
    es: {
      title: "Academia WealthWise",
      subtitle: "Empoderando Tu Futuro Financiero",
      description: "Únete a miles de estudiantes que dominan las finanzas personales a través de lecciones interactivas, cuestionarios y simulaciones del mundo real.",
      cta: "Comienza Tu Prueba Gratuita",
      features: [
        "Rutas de aprendizaje personalizadas",
        "Contenido curado por expertos",
        "Cuestionarios y desafíos interactivos",
        "Seguimiento de progreso y análisis",
        "Plataforma compatible con dispositivos móviles"
      ],
      languageSelector: "Seleccionar Idioma",
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-ww-blue via-ww-green to-ww-yellow animate-gradient-x p-4">
      <div className="text-center bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl max-w-4xl w-full">
        <Logo className="mx-auto mb-8 w-40 h-40" theme="light" />
        <h1 className="text-5xl sm:text-6xl font-bold text-ww-blue mb-4" tabIndex={0}>{content[language].title}</h1>
        <h2 className="text-3xl text-ww-green mb-4" tabIndex={0}>{content[language].subtitle}</h2>
        <p className="text-xl text-gray-700 mb-8" tabIndex={0}>{content[language].description}</p>
        <Link href="/dashboard" passHref>
          <Button className="bg-ww-yellow text-ww-gray hover:bg-ww-green hover:text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ww-blue">
            {content[language].cta}
          </Button>
        </Link>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content[language].features.map((feature, index) => (
            <div key={index} className="flex items-center bg-white bg-opacity-50 p-4 rounded-lg shadow-md">
              <svg className="h-6 w-6 text-ww-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-800">{feature}</span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <label htmlFor="language-select" className="sr-only">{content[language].languageSelector}</label>
          <select
            id="language-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-white bg-opacity-70 text-ww-blue border border-ww-blue rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ww-green"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>
    </div>
  )
}

