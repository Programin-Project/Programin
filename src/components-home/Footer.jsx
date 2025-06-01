"use client"

import { LineChart, Headphones, FileText, Users } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"

const Footer = () => {
  const { isDarkTheme } = useTheme()

  // Mesmas cores do Header para consistência
  const bgColor = isDarkTheme ? "bg-slate-800" : "bg-white"
  const textColor = isDarkTheme ? "text-white" : "text-gray-800"
  const borderColor = isDarkTheme ? "border-slate-700" : "border-gray-200"

  return (
    <footer className={`py-8 transition-colors duration-300 ${bgColor} ${textColor} border-t ${borderColor}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Progresso */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 flex items-center justify-center md:justify-start">
              <LineChart className="mr-2 text-blue-500" size={20} />
              Seu Progresso
            </h3>
            <div className={`h-3 rounded-full overflow-hidden mb-2 ${isDarkTheme ? "bg-slate-700" : "bg-gray-200"}`}>
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: "25%",
                  animation: "progressGlow 2s ease-in-out infinite alternate",
                }}
              />
            </div>
            <p className="text-sm text-blue-500">25% completo</p>
          </div>

          {/* Suporte */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 flex items-center justify-center md:justify-start">
              <Headphones className="mr-2 text-green-500" size={20} />
              Suporte
            </h3>
            <p className={`text-sm mb-3 ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>Precisa de ajuda?</p>
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-white">
              Contatar Suporte
            </button>
          </div>

          {/* Documentos */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 flex items-center justify-center md:justify-start">
              <FileText className="mr-2 text-purple-500" size={20} />
              Documentos
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-purple-500 transition-colors duration-300">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500 transition-colors duration-300">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500 transition-colors duration-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Comunidade */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 flex items-center justify-center md:justify-start">
              <Users className="mr-2 text-orange-500" size={20} />
              Comunidade
            </h3>
            <p className={`text-sm mb-3 ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
              Junte-se a outros estudantes!
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-white">
              Acessar Fórum
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`mt-8 pt-6 border-t text-center text-sm ${
            isDarkTheme ? `border-slate-700 text-gray-400` : `border-gray-200 text-gray-500`
          }`}
        >
          <p>&copy; {new Date().getFullYear()} Programin. Todos os direitos reservados.</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes progressGlow {
          0% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
        }
      `}</style>
    </footer>
  )
}

export default Footer
