"use client"

import { Brain, Menu } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"
import ThemeToggle from "../components-home/ThemeToggle"
import Logo from "../components-gerais/Logo"

const Header = ({ toggleDrawer }) => {
  const { isDarkTheme } = useTheme()

  // MELHORIA 2: Alternância de cores - Header agora usa a cor que antes era da main
  const bgColor = isDarkTheme ? "bg-[#2555A2]" : "bg-[#BEEBFE]"
  const textColor = isDarkTheme ? "text-white" : "text-[#1a1f36]"
  const borderColor = isDarkTheme ? "border-[#1e4a87]" : "border-blue-300" // Ajustado para nova cor

  return (
    <header className={`shadow-lg transition-colors duration-300 ${bgColor} ${textColor} border-b ${borderColor}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center relative min-h-[60px]">
          {/* Aprenda com a IA - Esquerda com cores programin */}
          <div className="flex-1 flex justify-start">
            <button
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isDarkTheme
                  ? "bg-[#1e4a87] hover:bg-[#174080] text-white border border-[#3a6bb5]" // Ajustado para nova paleta
                  : "bg-blue-600 hover:bg-blue-700 text-white border border-blue-500"
              }`}
              aria-label="Aprenda com a IA"
            >
              <Brain size={20} className={isDarkTheme ? "text-blue-200" : "text-blue-100"} />
              <span className="font-medium hidden sm:inline">Aprenda com a IA</span>
              <span className="font-medium sm:hidden">IA</span>
            </button>
          </div>

          {/* Logo Programin - Centro */}
          <div className="flex-1 flex justify-center">
            <Logo variant="home" />
          </div>

          {/* Controles - Direita com hover effects consistentes */}
          <div className="flex-1 flex justify-end items-center space-x-4">
            <div className="mr-2">
              <ThemeToggle />
            </div>
            <button
              className={`flex items-center justify-center h-10 w-10 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-md ${
                isDarkTheme
                  ? "hover:bg-[#1e4a87] text-gray-300 hover:text-white" // Ajustado para nova paleta
                  : "hover:bg-white text-gray-600 hover:text-gray-900 hover:shadow-lg"
              }`}
              onClick={toggleDrawer}
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
