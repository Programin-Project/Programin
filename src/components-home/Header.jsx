"use client"

import { Brain, Menu } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"
import ThemeToggle from "../components-home/ThemeToggle"
import Logo from "../components-gerais/Logo"

const Header = ({ toggleDrawer }) => {
  const { isDarkTheme } = useTheme()

  // MELHORIA: Aplicada cor #224D94 no header para o modo claro
  const bgColor = isDarkTheme ? "bg-[#1E1E1E]" : "bg-[#224D94]"
  const textColor = isDarkTheme ? "text-white" : "text-white" // Texto branco no modo claro para contraste com #224D94
  const borderColor = isDarkTheme ? "border-gray-700" : "border-[#1a3d7a]" // Borda mais escura para combinar com #224D94

  return (
    <header className={`shadow-lg transition-colors duration-300 ${bgColor} ${textColor} border-b ${borderColor}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center relative min-h-[60px]">
          {/* Aprenda com a IA - Esquerda com cores programin */}
          <div className="flex-1 flex justify-start">
            <button
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isDarkTheme
                  ? "bg-gray-800 hover:bg-gray-700 text-white border border-gray-600"
                  : "bg-[#1a3d7a] hover:bg-[#153366] text-white border border-[#0f2952]" // Ajustado para combinar com #224D94
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
            {/* MELHORIA: Logo com filtro CSS para inverter cores no tema claro */}
            <div
              className={`transition-all duration-300 ${isDarkTheme ? "" : "brightness-0 invert"}`}
              style={{
                filter: isDarkTheme ? "none" : "brightness(0) invert(1)",
              }}
            >
              <Logo variant="home" />
            </div>
          </div>

          {/* Controles - Direita com hover effects consistentes */}
          <div className="flex-1 flex justify-end items-center space-x-4">
            <div className="mr-2">
              {/* MELHORIA: ThemeToggle com ícones brancos forçados no modo claro */}
              <div className={isDarkTheme ? "" : "text-white [&_*]:text-white [&_*]:fill-white [&_svg]:text-white"}>
                <ThemeToggle />
              </div>
            </div>
            <button
              className={`flex items-center justify-center h-10 w-10 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-md ${
                isDarkTheme
                  ? "hover:bg-gray-800 text-gray-300 hover:text-white"
                  : "hover:bg-[#1a3d7a] text-white hover:text-white" // MELHORIA: Ícone do menu branco no modo claro
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
