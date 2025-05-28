import { Star, Users, Trophy } from "lucide-react"

const LevelCard = ({ level, questionsCount, progress, color }) => {
  const getIcon = () => {
    switch (level) {
      case "Iniciante":
        return <Star size={16} />
      case "Intermediário":
        return <Users size={16} />
      case "Avançado":
        return <Trophy size={16} />
      default:
        return <Star size={16} />
    }
  }

  const getColorClasses = () => {
    switch (color) {
      case "orange":
        return "bg-orange-50 border-orange-200 text-orange-800 hover:bg-orange-100 hover:border-orange-300"
      case "blue":
        return "bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100 hover:border-blue-300"
      case "yellow":
        return "bg-yellow-50 border-yellow-200 text-yellow-800 hover:bg-yellow-100 hover:border-yellow-300"
      default:
        return "bg-gray-50 border-gray-200 text-gray-800 hover:bg-gray-100 hover:border-gray-300"
    }
  }

  const getProgressColor = () => {
    switch (color) {
      case "orange":
        return "bg-orange-500"
      case "blue":
        return "bg-blue-500"
      case "yellow":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div
      className={`p-3 rounded-lg border-2 transition-all duration-300 hover:shadow-md hover:scale-105 ${getColorClasses()}`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          {getIcon()}
          <span className="font-medium text-sm">{level}</span>
        </div>
        <span className="text-xs font-bold">{questionsCount} questões</span>
      </div>

      {/* Barra de progresso animada */}
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className={`h-2 rounded-full transition-all duration-1000 ease-out ${getProgressColor()}`}
          style={{
            width: `${progress}%`,
            animation: "progressFill 1.5s ease-out",
          }}
        />
      </div>
      <p className="text-xs mt-1 text-center">{progress}% completo</p>
    </div>
  )
}

export default LevelCard