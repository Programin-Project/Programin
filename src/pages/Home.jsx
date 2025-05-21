"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import CourseCard from "../components/CourseCard"
import Footer from "../components/Footer"
import Drawer from "../components/Drawer"

const Home = ({ onLogout }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const navigate = useNavigate()

  const courses = [
    {
      id: 1,
      title: "Aprenda HTML",
      image: "/html5-logo-colorful.png",
      isLocked: false,
    },
    {
      id: 2,
      title: "Aprenda CSS",
      image: "/css3-logo-blue.png",
      isLocked: false,
    },
    {
      id: 3,
      title: "Aprenda JavaScript",
      image: "/placeholder-w79wh.png",
      isLocked: true,
    },
  ]

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header toggleDrawer={toggleDrawer} />
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} onLogout={onLogout} />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-6 text-center">Cursos Disponíveis</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              image={course.image}
              isLocked={course.isLocked}
              onClick={() => {
                if (course.title === "Aprenda HTML") navigate("/trilha-html")
                // Você pode adicionar outros redirecionamentos aqui no futuro
              }}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home

