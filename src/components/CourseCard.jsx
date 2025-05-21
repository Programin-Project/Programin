"use client"

const CourseCard = ({ title, description, image, progress = 0, onClick }) => {
  // Garantir que o progresso esteja entre 0 e 100
  const safeProgress = Math.min(100, Math.max(0, progress))

  // Imagens de fallback específicas para cada curso
  const getDefaultImage = () => {
    if (title.includes("HTML")) {
      return "src/assets/como-funciona-html-1-.jpg"
    } else if (title.includes("CSS")) {
      return "src/assets/images (1).jpg"
    } else if (title.includes("JavaScript")) {
      return "/src/assets/photo-1687603917313-ccae1a289a9d.jpg"
    }
    return "/placeholder.svg?height=200&width=200&query=programming%20course"
  }

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer w-full group relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
      style={{ width: "400px", height: "400px" }}
      onClick={onClick}
    >
      {/* Imagem */}
      <div className="h-48 bg-gray-100 flex items-center justify-center p-5">
        <img
          src={image || getDefaultImage()}
          alt={title}
          className="h-40 w-auto object-contain"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = getDefaultImage()
          }}
        />
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col h-[calc(400px-192px)]">
        {/* Título */}
        <h3 className="text-xl font-bold text-primary-700 mb-3 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>

        {/* Descrição */}
        <p className="text-gray-600 text-sm leading-relaxed overflow-auto mb-4">{description}</p>

        {/* Barra de Progresso */}
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-medium text-gray-500">Progresso</span>
            <span className="text-xs font-medium text-primary-600">{safeProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-primary-600 h-2.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${safeProgress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Overlay de hover */}
      <div className="absolute inset-0 bg-primary-600 bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300 pointer-events-none"></div>

      {/* Borda inferior que aparece no hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  )
}

export default CourseCard
