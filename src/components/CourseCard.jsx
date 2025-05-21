import { Lock } from "lucide-react"

const CourseCard = ({ title, image, isLocked, onClick }) => {
  return (
    <div
      onClick={!isLocked ? onClick : undefined}
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 border border-primary-100 ${
        isLocked ? "cursor-not-allowed opacity-70" : "cursor-pointer"
      }`}
    >
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
        {isLocked && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-white text-center">
              <Lock size={40} className="mx-auto mb-2 text-accent-400" />
              <p>Módulo bloqueado</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-primary-800 mb-2">{title}</h3>
        <p className="text-text-secondary">
          {isLocked
            ? "Complete os módulos anteriores para desbloquear este conteúdo."
            : "Clique para começar a aprender agora mesmo!"}
        </p>

        <button
          className={`mt-4 w-full py-2 px-4 rounded-md font-medium ${
            isLocked
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-primary-600 text-white hover:bg-primary-700"
          }`}
          disabled={isLocked}
        >
          {isLocked ? "Bloqueado" : "Começar"}
        </button>
      </div>
    </div>
  )
}

export default CourseCard
