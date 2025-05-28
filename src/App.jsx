"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import RecoverPassword from "./pages/RecoverPassword"
import Home from "./pages/Home"
import TrilhaHTML from "./componentes-trilhas/TrilhaHTML"
import TrilhaCSS from "./componentes-trilhas/TrilhaCSS"
import TrilhaJavaScript from "./componentes-trilhas/TrilhaJavaScript"
import { NotificationProvider } from "./contexts/NotificationContext"
import { ThemeProvider } from "./contexts/ThemeContext"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") === "true")

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true")
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.setItem("isAuthenticated", "false")
    setIsAuthenticated(false)
  }

  return (
    <ThemeProvider>
      <NotificationProvider>
        <Router>
          <Routes>
            {/* Rota de login */}
            <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />

            {/* Rota de registro */}
            <Route
              path="/register"
              element={isAuthenticated ? <Navigate to="/" /> : <Register onLogin={handleLogin} />}
            />

            {/* Rota de recuperação de senha (sem proteção) */}
            <Route path="/recover-password" element={<RecoverPassword />} />

            {/* Rota principal (Home) */}
            <Route path="/" element={isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />} />

            {/* Trilhas protegidas */}
            <Route path="/trilha-html" element={isAuthenticated ? <TrilhaHTML /> : <Navigate to="/login" />} />
            <Route path="/trilha-css" element={isAuthenticated ? <TrilhaCSS /> : <Navigate to="/login" />} />
            <Route
              path="/trilha-javascript"
              element={isAuthenticated ? <TrilhaJavaScript /> : <Navigate to="/login" />}
            />
          </Routes>
        </Router>
      </NotificationProvider>
    </ThemeProvider>
  )
}

export default App