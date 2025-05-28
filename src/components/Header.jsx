"use client"

import { Brain, Menu } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"
import ThemeToggle from "../components-home/ThemeToggle"
import Logo from "../components-home/Logo"

const Header = ({ toggleDrawer }) => {
  const { isDarkTheme } = useTheme()

  // Cores mais amigáveis para Header e Footer
  const bgColor = isDarkTheme ? "bg-slate-800" : "bg-white"
  const textColor = isDarkTheme ? "text-white" : "text-gray-800"
  const borderColor = isDarkTheme ? "border-slate-700" : "border-gray-200"

  return (
    <header className={`shadow-lg transition-colors duration-300 ${bgColor} ${textColor} border-b ${borderColor}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center relative min-h-[60px]">
          {/* Aprenda com a IA - Esquerda */}
          <button
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
              isDarkTheme ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
            aria-label="Aprenda com a IA"
          >
            <Brain size={20} className="text-blue-200" />
            <span className="font-medium">Aprenda com a IA</span>
          </button>

          {/* Logo Programin - Centro */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
            <Logo />
          </div>

          {/* Controles - Direita */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                isDarkTheme
                  ? "hover:bg-slate-700 text-gray-300 hover:text-white"
                  : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
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