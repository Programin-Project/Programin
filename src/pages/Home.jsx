"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTheme } from "../contexts/ThemeContext"
import Header from "../components/Header"
import CourseCard from "../components/CourseCard"
import Footer from "../components/Footer"
import Drawer from "../components/Drawer"

const Home = ({ onLogout }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const navigate = useNavigate()
  const { isDarkTheme } = useTheme()

  const courses = [
    {
      id: 1,
      title: "Aprenda HTML",
      description:
        "Domine a linguagem de marcação fundamental para a web. Aprenda a estruturar páginas, criar formulários e entender os elementos semânticos do HTML5.",
      image: "/placeholder.svg?height=200&width=300&text=HTML",
      color: "orange",
      levels: [
        { name: "Iniciante", questions: 10, progress: 85 },
        { name: "Intermediário", questions: 10, progress: 60 },
        { name: "Avançado", questions: 10, progress: 25 },
      ],
    },
    {
      id: 2,
      title: "Aprenda CSS",
      description:
        "Transforme suas páginas HTML com estilos incríveis. Aprenda layouts flexbox, grid, animações e técnicas de design responsivo para todos os dispositivos.",
      image: "/placeholder.svg?height=200&width=300&text=CSS",
      color: "blue",
      levels: [
        { name: "Iniciante", questions: 10, progress: 45 },
        { name: "Intermediário", questions: 10, progress: 20 },
        { name: "Avançado", questions: 10, progress: 0 },
      ],
    },
    {
      id: 3,
      title: "Aprenda JavaScript",
      description:
        "Dê vida às suas páginas web com interatividade. Aprenda a manipular o DOM, criar animações, validar formulários e construir aplicações dinâmicas.",
      image: "/placeholder.svg?height=200&width=300&text=JS",
      color: "yellow",
      levels: [
        { name: "Iniciante", questions: 10, progress: 15 },
        { name: "Intermediário", questions: 10, progress: 0 },
        { name: "Avançado", questions: 10, progress: 0 },
      ],
    },
  ]

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 ${
        isDarkTheme ? "bg-gray-900" : "bg-gradient-to-br from-gray-50 to-blue-50"
      }`}
    >
      <Header toggleDrawer={toggleDrawer} />
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} onLogout={onLogout} />

      <main className="flex-grow container mx-auto px-6 py-12">
        {/* Título e Descrição */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDarkTheme ? "text-white" : "text-gray-900"
            }`}
          >
            Módulos Disponíveis
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
            Embarque em uma jornada de aprendizado completa através dos fundamentos do desenvolvimento web. Domine HTML
            para estruturar conteúdo, CSS para criar designs impressionantes e JavaScript para adicionar interatividade
            às suas criações.
          </p>
        </div>

        {/* Cards dos Cursos */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                description={course.description}
                image={course.image}
                color={course.color}
                levels={course.levels}
                onClick={() => {
                  if (course.title === "Aprenda HTML") navigate("/trilha-html")
                  else if (course.title === "Aprenda CSS") navigate("/trilha-css")
                  else if (course.title === "Aprenda JavaScript") navigate("/trilha-javascript")
                }}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home