"use client"

import { X, LogOut, Home, BookOpen, Award, Settings, User } from "lucide-react"

const Drawer = ({ isOpen, onClose, onLogout }) => {
  return (
    <>
      {/* Overlay com animação de fade */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={onClose}
          style={{
            animation: isOpen ? "fadeIn 0.3s ease-in-out" : "fadeOut 0.3s ease-in-out",
          }}
        ></div>
      )}

      {/* Drawer com design melhorado */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        {/* Cabeçalho do Drawer */}
        <div className="p-4 border-b border-primary-100 bg-gradient-to-r from-primary-600 to-primary-700">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-primary-500 transition-colors"
              aria-label="Fechar menu"
            >
              <X className="text-white" size={20} />
            </button>
          </div>
        </div>

        {/* Perfil do usuário */}
        <div className="p-4 border-b border-gray-100 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
            <User className="text-primary-600" size={20} />
          </div>
          <div>
            <p className="font-medium text-gray-800">Usuário</p>
            <p className="text-xs text-gray-500">estudante@programin.com</p>
          </div>
        </div>

        {/* Links de navegação */}
        <nav className="flex-grow p-4 space-y-1">
          <a
            href="#"
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary-50 text-gray-700 hover:text-primary-700 transition-colors"
          >
            <Home size={18} className="text-primary-500" />
            <span>Início</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary-50 text-gray-700 hover:text-primary-700 transition-colors"
          >
            <BookOpen size={18} className="text-primary-500" />
            <span>Meus Cursos</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary-50 text-gray-700 hover:text-primary-700 transition-colors"
          >
            <Award size={18} className="text-primary-500" />
            <span>Certificados</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary-50 text-gray-700 hover:text-primary-700 transition-colors"
          >
            <Settings size={18} className="text-primary-500" />
            <span>Configurações</span>
          </a>
        </nav>

        {/* Rodapé com botão de logout */}
        <div className="p-4 border-t border-gray-100 mt-auto">
          <button
            onClick={onLogout}
            className="flex items-center space-x-2 text-primary-600 hover:text-primary-800 w-full p-2 rounded-lg hover:bg-primary-50 transition-colors"
          >
            <LogOut size={18} className="text-primary-500" />
            <span>Sair</span>
          </button>
        </div>
      </div>

      {/* Estilos para animação */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
      `}</style>
    </>
  )
}

export default Drawer
