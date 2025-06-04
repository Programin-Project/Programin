"use client"

import { useNavigate } from "react-router-dom"
import { BookOpen, Code, Trophy, ChevronRight } from "lucide-react"
import Button from "../components-trilhas/ui/Button"

export default function HomePage() {
  const navigate = useNavigate()

  const handleStartLearning = () => {
    navigate("/modules")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Aprenda HTML do Básico ao Avançado</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Domine a linguagem de marcação fundamental da web através de três módulos progressivos, desde os conceitos
            básicos até técnicas avançadas de desenvolvimento.
          </p>
          <Button onClick={handleStartLearning} size="lg" className="text-lg px-8 py-3">
            Começar a Aprender HTML
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="mt-16 bg-slate-50 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Por que aprender HTML?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fundação Sólida</h3>
              <p className="text-gray-600 text-sm">
                HTML é a base de toda página web. Dominar seus conceitos é essencial para qualquer desenvolvedor.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Carreira Promissora</h3>
              <p className="text-gray-600 text-sm">
                Conhecimento em HTML abre portas para desenvolvimento web, mobile e diversas oportunidades.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Projetos Reais</h3>
              <p className="text-gray-600 text-sm">
                Cada módulo inclui projetos práticos para aplicar o conhecimento em situações reais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
