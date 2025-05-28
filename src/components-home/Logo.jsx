"use client"

import { useRef, useEffect } from "react"
import { useTheme } from "../contexts/ThemeContext"
import { useNotification } from "../contexts/NotificationContext"

function Logo() {
  const starsContainerRef = useRef(null)
  const logoTextRef = useRef(null)
  const { isDarkTheme } = useTheme()
  const { showNotification } = useNotification()

  // Efeito para garantir que a logo seja visível após o carregamento
  useEffect(() => {
    // Remover a animação que está causando a invisibilidade
    if (logoTextRef.current) {
      logoTextRef.current.style.opacity = "1"
      logoTextRef.current.style.transform = "translateY(0)"
    }
  }, [])

  // Função para criar estrelas
  const createStar = (x, y) => {
    if (!starsContainerRef.current) return

    const star = document.createElement("div")
    star.classList.add("star")

    // Posição inicial no centro do logo
    star.style.left = `${x}px`
    star.style.top = `${y}px`

    // Direção aleatória para a estrela se mover
    const angle = Math.random() * Math.PI * 2
    const distance = 30 + Math.random() * 70 // Aumentado para maior dispersão
    const tx = Math.cos(angle) * distance
    const ty = Math.sin(angle) * distance

    // Rotação aleatória para a estrela
    const rotation = Math.random() * 360

    // Definir variáveis CSS personalizadas para a animação
    star.style.setProperty("--tx", `${tx}px`)
    star.style.setProperty("--ty", `${ty}px`)
    star.style.setProperty("--rotation", `${rotation}deg`)

    // Tamanho aleatório para cada estrela
    const size = 6 + Math.random() * 8 // Estrelas um pouco maiores para serem mais visíveis
    star.style.width = `${size}px`
    star.style.height = `${size}px`

    // Adicionar a estrela ao container
    starsContainerRef.current.appendChild(star)

    // Remover a estrela após a animação
    setTimeout(() => {
      if (star.parentNode) {
        star.remove()
      }
    }, 800)
  }

  const createStarBurst = () => {
    if (!logoTextRef.current) return

    // Obter as dimensões do texto do logo
    const logoRect = logoTextRef.current.getBoundingClientRect()

    // Criar várias estrelas
    for (let i = 0; i < 30; i++) {
      // Posição aleatória dentro do logo
      const x = Math.random() * logoRect.width
      const y = Math.random() * logoRect.height

      // Pequeno atraso para cada estrela
      setTimeout(() => {
        createStar(x, y)
      }, i * 15)
    }
  }

  const handleLogoClick = (e) => {
    // Evitar propagação para não acionar o efeito ripple
    e.stopPropagation()

    // Criar efeito de estrelas
    createStarBurst()

    // Alternar velocidade da chuva de código
    const symbolsContainer = document.getElementById("symbols-container")
    if (symbolsContainer) {
      // Obter a classe atual
      const currentClass = symbolsContainer.className.match(/speed-\w+/)
      const currentSpeed = currentClass ? currentClass[0] : "speed-normal"

      // Definir a próxima velocidade
      let nextSpeed
      switch (currentSpeed) {
        case "speed-normal":
          nextSpeed = "speed-medium"
          break
        case "speed-medium":
          nextSpeed = "speed-fast"
          break
        default:
          nextSpeed = "speed-normal"
      }

      // Remover todas as classes de velocidade
      symbolsContainer.classList.remove("speed-normal", "speed-medium", "speed-fast")

      // Adicionar a nova classe de velocidade
      symbolsContainer.classList.add(nextSpeed)

      // Mostrar notificação com a velocidade atual
      const speedNames = {
        "speed-normal": "normal",
        "speed-medium": "média",
        "speed-fast": "rápida",
      }
      showNotification(`Velocidade ${speedNames[nextSpeed]} ativada`)
    }
  }

  return (
    <div className="logo-container">
      <button id="logo-button" className="logo-button" onClick={handleLogoClick}>
        <h1 className="logo" ref={logoTextRef} style={{ opacity: 1, transform: "translateY(0)" }}>
          Programin
        </h1>
        <div id="stars-container" className="stars-container" ref={starsContainerRef}></div>
      </button>
    </div>
  )
}

export default Logo
