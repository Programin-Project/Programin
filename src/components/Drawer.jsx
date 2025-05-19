"use client"

import { X, LogOut } from "lucide-react"

const Drawer = ({ isOpen, onClose, onLogout }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-primary-100">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-primary-600">Menu</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200" aria-label="Fechar menu">
              <X className="text-primary-600" />
            </button>
          </div>
        </div>

        <div className="p-4">
          <button
            onClick={onLogout}
            className="flex items-center space-x-2 text-primary-600 hover:text-primary-800 w-full py-2"
          >
            <LogOut className="text-primary-600" />
            <span>Sair</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Drawer