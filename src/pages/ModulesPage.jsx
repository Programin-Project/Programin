"use client"

import { useNavigate } from "react-router-dom"
import { BookOpen, Code, Trophy, ChevronRight } from "lucide-react"
import { modules } from "../data/modules"
import { useProgress } from "../hooks/useProgress"
import Card from "../components-trilhas/ui/Card"
import Button from "../components-trilhas/ui/Button"
import Badge from "../components-trilhas/ui/Badge"
import Progress from "../components-trilhas/ui/Progress"
import ModulesNavigation from "../components-trilhas/ModulesNavigation"


export default function ModulesPage() {
  const navigate = useNavigate()
  const { getProgressPercentage } = useProgress()

  const handleModuleSelect = (module) => {
    navigate(`/modules/${module.id}/lessons`)
  }

  const getLevelColor = (level) => {
    switch (level) {
      case "Iniciante":
        return "bg-orange-100 text-orange-800"
      case "Intermediário":
        return "bg-orange-100 text-orange-800"
      case "Avançado":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <ModulesNavigation />

      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Escolha seu Nível</h1>
          <p className="text-lg text-gray-600">Selecione o módulo adequado ao seu conhecimento atual em HTML</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((module) => (
            <Card
              key={module.id}
              className="bg-slate-50 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => handleModuleSelect(module)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      background:
                        module.level === "Iniciante"
                          ? "#FFB347"
                          : module.level === "Intermediário"
                            ? "#FF6F1F"
                            : "#D44700",
                    }}
                  >
                    {module.level === "Iniciante" && <BookOpen className="w-6 h-6 text-white" />}
                    {module.level === "Intermediário" && <Code className="w-6 h-6 text-white" />}
                    {module.level === "Avançado" && <Trophy className="w-6 h-6 text-white" />}
                  </div>
                  <Badge className={getLevelColor(module.level)}>{module.level}</Badge>
                </div>

                <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{module.description}</p>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progresso</span>
                      <span>
                        {module.completedLessons}/{module.totalLessons} aulas
                      </span>
                    </div>
                    <Progress value={getProgressPercentage(module)} className="h-2" />
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm text-gray-500">{module.totalLessons} aulas</span>
                    <Button variant="outline" size="sm">
                      {module.completedLessons > 0 ? "Continuar" : "Começar"}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
