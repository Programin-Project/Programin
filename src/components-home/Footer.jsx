"use client"

import { Heart, Github, Linkedin, Twitter } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"

const Footer = () => {
  const { isDarkTheme } = useTheme()

  // MELHORIA 2: Alternância de cores - Footer agora usa a cor que antes era da main
  const bgColor = isDarkTheme ? "bg-[#2555A2]" : "bg-[#BEEBFE]"
  const textColor = isDarkTheme ? "text-[#F5F5F5]" : "text-gray-900"
  const subtextColor = isDarkTheme ? "text-gray-200" : "text-gray-700"
  const borderColor = isDarkTheme ? "border-[#1e4a87]" : "border-blue-300" // Ajustado para nova cor

  return (
    <footer className={`transition-colors duration-300 ${bgColor} ${textColor}`}>
      {/* SEÇÃO PRINCIPAL COMPACTA */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-center">
          {/* COLUNA 1: Informações da Programin */}
          <div className="space-y-3 text-center">
            <h3 className="text-lg font-bold">Programin</h3>
            <p className={`text-sm leading-relaxed ${subtextColor}`}>
              Plataforma completa para aprender desenvolvimento web com metodologia prática.
            </p>
            {/* REDES SOCIAIS */}
            <div className="flex space-x-3 pt-1 justify-center">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`p-1.5 rounded-full transition-all duration-300 hover:scale-110 ${
                    isDarkTheme
                      ? "hover:bg-[#1e4a87] text-gray-200 hover:text-white" // Ajustado para nova paleta
                      : "hover:bg-white text-blue-600 hover:text-blue-800 hover:shadow-md"
                  }`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SEÇÃO DE COPYRIGHT */}
      <div className={`border-t ${borderColor} py-3`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <span className={`text-xs ${subtextColor}`}>
              &copy; {new Date().getFullYear()} Programin. Todos os direitos reservados.
            </span>

            <div className="flex items-center space-x-1">
              <span className={`text-xs ${subtextColor}`}>Feito com</span>
              <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
              <span className={`text-xs ${subtextColor}`}>para desenvolvedores</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
