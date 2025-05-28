"use client"

import { useTheme } from "../contexts/ThemeContext"
import LevelCard from "./LevelCard"

const CourseCard = ({ title, description, image, levels, onClick, color }) => {
  const { isDarkTheme } = useTheme()

  const getCardColorClasses = () => {
    const baseClasses =
      "rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"

    // Manter cores vibrantes mesmo no modo escuro
    switch (color) {
      case "orange":
        return `${baseClasses} bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200`
      case "blue":
        return `${baseClasses} bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200`
      case "yellow":
        return `${baseClasses} bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200`
      default:
        return `${baseClasses} ${isDarkTheme ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"}`
    }
  }

  const getTitleColor = () => {
    // Manter cores dos títulos sempre vibrantes
    switch (color) {
      case "orange":
        return "text-orange-800"
      case "blue":
        return "text-blue-800"
      case "yellow":
        return "text-yellow-800"
      default:
        return isDarkTheme ? "text-white" : "text-gray-800"
    }
  }

  const getDescriptionColor = () => {
    // Melhorar contraste da descrição no modo claro
    return "text-gray-700"
  }

  const getDefaultImage = () => {
    if (title.includes("HTML")) {
      return "src/assets/como-funciona-html-1-.jpg"
    } else if (title.includes("CSS")) {
      return "src/assets/aplicando-estilos-css-1521410533.png"
    } else if (title.includes("JavaScript")) {
      return "src/assets/photo-1687603917313-ccae1a289a9d.jpg"
    }
    return "/placeholder.svg?height=200&width=300&text=Code"
  }

  return (
    <div className={`w-full max-w-sm ${getCardColorClasses()}`} onClick={onClick}>
      {/* Imagem */}
      <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={image || getDefaultImage()}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = getDefaultImage()
          }}
        />
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        {/* Título */}
        <h3 className={`text-xl font-bold mb-3 transition-colors ${getTitleColor()}`}>{title}</h3>

        {/* Descrição com melhor contraste */}
        <p className={`text-sm leading-relaxed mb-6 ${getDescriptionColor()}`}>{description}</p>

        {/* Mini-cards de níveis */}
        <div className="space-y-3">
          {levels.map((level, index) => (
            <LevelCard
              key={index}
              level={level.name}
              questionsCount={level.questions}
              progress={level.progress}
              color={color}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CourseCard
