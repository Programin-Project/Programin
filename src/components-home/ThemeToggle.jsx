"use client"

import { Sun, Moon } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      style={{
        backgroundColor: isDarkTheme ? "#374151" : "#D1D5DB",
      }}
    >
      <span
        className={`inline-block w-4 h-4 transform transition-transform duration-300 bg-white rounded-full shadow-lg ${
          isDarkTheme ? "translate-x-6" : "translate-x-1"
        }`}
      />
      <Sun
        className={`absolute left-1 w-3 h-3 transition-opacity duration-300 ${
          isDarkTheme ? "opacity-0" : "opacity-100 text-yellow-500"
        }`}
      />
      <Moon
        className={`absolute right-1 w-3 h-3 transition-opacity duration-300 ${
          isDarkTheme ? "opacity-100 text-blue-300" : "opacity-0"
        }`}
      />
    </button>
  )
}

export default ThemeToggle