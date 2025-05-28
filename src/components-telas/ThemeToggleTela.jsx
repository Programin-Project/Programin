"use client"

import { useEffect } from "react"
import { useTheme } from "../contexts/ThemeContext"
import { useNotification } from "../contexts/NotificationContext"

function ThemeToggle() {
  const { isDarkTheme, toggleTheme } = useTheme()
  const { showNotification } = useNotification()

  // Função para acionar o efeito de onda
  const triggerWaveEffect = () => {
    const waveEffect = document.getElementById("wave-effect")
    if (waveEffect) {
      // Remover classes anteriores para reiniciar a animação
      waveEffect.classList.remove("wave-animation")

      // Forçar um reflow para que a animação reinicie
      void waveEffect.offsetWidth

      // Adicionar a classe de animação
      waveEffect.classList.add("wave-animation")
    }
  }

  // Acionar o efeito de onda na carga inicial da página
  useEffect(() => {
    setTimeout(() => {
      triggerWaveEffect()
    }, 500)
  }, [])

  const handleToggle = () => {
    // Acionar o efeito de onda
    triggerWaveEffect()

    // Alternar o tema
    toggleTheme()

    // Mostrar notificação após a transição
    setTimeout(() => {
      showNotification(isDarkTheme ? "Tema claro ativado" : "Tema escuro ativado")
    }, 800)
  }

  return (
    <div className="absolute top-4 right-4 flex items-center">
      <span className="mr-2 text-sm text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sun-icon"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      </span>
      <label className="theme-switch">
        <input type="checkbox" id="theme-toggle" checked={isDarkTheme} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
      <span className="ml-2 text-sm text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="moon-icon"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </span>
    </div>
  )
}

export default ThemeToggle