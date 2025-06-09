"use client"
import { useNavigate } from "react-router-dom"
import { Brain, Menu } from "lucide-react"
import { modules } from "../data/modules"
import Logo from "../components-gerais/Logo"
import ThemeToggle from "../components-home/ThemeToggle"
import { useTheme } from "../contexts/ThemeContext"

export default function ModulesNavigation({ selectedModule, toggleDrawer }) {
  const navigate = useNavigate()
  const { isDarkTheme } = useTheme()

  const handleModuleChange = (moduleId) => {
    navigate(`/modules/${moduleId}/lessons`)
  }

  // Cores do header baseadas no tema
  const bgColor = isDarkTheme ? "bg-[#1E1E1E]" : "bg-[#224D94]"
  const textColor = "text-white"
  const borderColor = isDarkTheme ? "border-gray-700" : "border-[#1a3d7a]"

  return (
    <nav
      className={`shadow-lg transition-colors duration-300 ${bgColor} ${textColor} border-b ${borderColor} sticky top-0 z-40`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center relative min-h-[60px]">
          {/* Aprenda com a IA - Esquerda */}
          <div className="flex-1 flex justify-start">
            <button
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isDarkTheme
                  ? "bg-gray-800 hover:bg-gray-700 text-white border border-gray-600"
                  : "bg-[#1a3d7a] hover:bg-[#153366] text-white border border-[#0f2952]"
              }`}
              aria-label="Aprenda com a IA"
            >
              <Brain size={20} className={isDarkTheme ? "text-blue-300" : "text-blue-200"} />
              <span className="font-medium hidden sm:inline">Aprenda com a IA</span>
              <span className="font-medium sm:hidden">IA</span>
            </button>
          </div>

          {/* Logo Programin - Centro */}
          <div className="flex-1 flex justify-center">
            <div
              className={`transition-all duration-300 ${isDarkTheme ? "" : "brightness-0 invert"}`}
              style={{
                filter: isDarkTheme ? "none" : "brightness(0) invert(1)",
              }}
            >
              <Logo variant="home" />
            </div>
          </div>

          {/* Controles - Direita */}
          <div className="flex-1 flex justify-end items-center space-x-4">
            {/* Botões dos módulos */}
            <div className="flex items-center space-x-2">
              {modules.map((module) => (
                <button
                  key={module.id}
                  onClick={() => handleModuleChange(module.id)}
                  className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                    selectedModule?.id === module.id
                      ? "bg-orange-600 text-white shadow-lg"
                      : isDarkTheme
                        ? "bg-gray-700 text-gray-200 hover:bg-gray-600 hover:text-white"
                        : "bg-[#1a3d7a] text-gray-200 hover:bg-[#153366] hover:text-white"
                  }`}
                >
                  {module.level}
                </button>
              ))}
            </div>

            {/* ThemeToggle */}
            <div className="mr-2">
              <div className={isDarkTheme ? "" : "text-white [&_*]:text-white [&_*]:fill-white [&_svg]:text-white"}>
                <ThemeToggle />
              </div>
            </div>

            {/* Botão do Drawer */}
            <button
              className={`flex items-center justify-center h-10 w-10 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-md ${
                isDarkTheme
                  ? "hover:bg-gray-800 text-gray-300 hover:text-white"
                  : "hover:bg-[#1a3d7a] text-white hover:text-white"
              }`}
              onClick={toggleDrawer}
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
