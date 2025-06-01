"use client"

import { X, LogOut, Home, BookOpen, Award, Settings, User } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"

const Drawer = ({ isOpen, onClose, onLogout }) => {
  const { isDarkTheme } = useTheme()

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300" onClick={onClose} />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col ${isDarkTheme ? "bg-gray-900 border-l border-gray-700" : "bg-white border-l border-gray-200"}`}
      >
        {/* Header */}
        <div className={`p-6 border-b ${isDarkTheme ? "border-slate-700 bg-slate-800" : "border-gray-200 bg-white"}`}>
          <div className="flex justify-between items-center">
            <h2 className={`text-xl font-bold ${isDarkTheme ? "text-white" : "text-gray-800"}`}>Menu</h2>
            <button
              onClick={onClose}
              className={`p-2 rounded-full transition-colors ${
                isDarkTheme ? "hover:bg-slate-700 text-gray-300" : "hover:bg-gray-100 text-gray-600"
              }`}
              aria-label="Fechar menu"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Perfil */}
        <div
          className={`p-6 border-b flex items-center space-x-4 ${isDarkTheme ? "border-gray-700" : "border-gray-200"}`}
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <User className="text-white" size={24} />
          </div>
          <div>
            <p className={`font-medium ${isDarkTheme ? "text-white" : "text-gray-800"}`}>Usuário</p>
            <p className={`text-sm ${isDarkTheme ? "text-gray-400" : "text-gray-500"}`}>estudante@programin.com</p>
          </div>
        </div>

        {/* Navegação */}
        <nav className="flex-grow p-6 space-y-2">
          {[
            { icon: Home, label: "Início", href: "#" },
            { icon: BookOpen, label: "Meus Cursos", href: "#" },
            { icon: Award, label: "Certificados", href: "#" },
            { icon: Settings, label: "Configurações", href: "#" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                isDarkTheme
                  ? "hover:bg-gray-800 text-gray-300 hover:text-white"
                  : "hover:bg-gray-100 text-gray-700 hover:text-gray-900"
              }`}
            >
              <item.icon size={20} className="text-blue-500" />
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Logout */}
        <div className={`p-6 border-t ${isDarkTheme ? "border-gray-700" : "border-gray-200"}`}>
          <button
            onClick={onLogout}
            className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
              isDarkTheme ? "text-red-400 hover:bg-red-900 hover:bg-opacity-20" : "text-red-600 hover:bg-red-50"
            }`}
          >
            <LogOut size={20} />
            <span className="font-medium">Sair</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Drawer
