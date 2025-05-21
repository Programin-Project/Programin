"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import TrilhaHTML from "./componentes-trilhas/TrilhaHTML"
import TrilhaCSS from "./componentes-trilhas/TrilhaCSS"
import TrilhaJavaScript from "./componentes-trilhas/TrilhaJavaScript" // ✅ Adicionado

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
    <Router>
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
        <Route path="/register" element={isAuthenticated ? <Navigate to="/" /> : <Register onLogin={handleLogin} />} />
        <Route path="/" element={isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />} />
        <Route path="/trilha-html" element={isAuthenticated ? <TrilhaHTML /> : <Navigate to="/login" />} />
        <Route path="/trilha-css" element={isAuthenticated ? <TrilhaCSS /> : <Navigate to="/login" />} />
        <Route path="/trilha-javascript" element={isAuthenticated ? <TrilhaJavaScript /> : <Navigate to="/login" />} /> {/* ✅ Nova rota */}
      </Routes>
    </Router>
  )
}

export default App
