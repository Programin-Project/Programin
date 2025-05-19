"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const Register = ({ onLogin }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !email || !password || !confirmPassword) {
      setError("Por favor, preencha todos os campos")
      return
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem")
      return
    }

    // Simulando cadastro bem-sucedido
    // Em um caso real, você faria uma chamada à API aqui
    onLogin()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-primary-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary-600">Programin</h1>
          <p className="text-text-secondary mt-2">Crie sua conta e comece a aprender</p>
        </div>

        {error && (
          <div className="bg-accent-100 border border-accent-400 text-primary-700 px-4 py-3 rounded mb-4">{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-text-secondary text-sm font-bold mb-2" htmlFor="name">
              Nome completo
            </label>
            <input
              id="name"
              type="text"
              className="shadow appearance-none border border-primary-100 rounded w-full py-2 px-3 text-text-primary leading-tight focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-text-secondary text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="shadow appearance-none border border-primary-100 rounded w-full py-2 px-3 text-text-primary leading-tight focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-text-secondary text-sm font-bold mb-2" htmlFor="password">
              Senha
            </label>
            <input
              id="password"
              type="password"
              className="shadow appearance-none border border-primary-100 rounded w-full py-2 px-3 text-text-primary leading-tight focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-text-secondary text-sm font-bold mb-2" htmlFor="confirm-password">
              Confirmar senha
            </label>
            <input
              id="confirm-password"
              type="password"
              className="shadow appearance-none border border-primary-100 rounded w-full py-2 px-3 text-text-primary leading-tight focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <button
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Cadastrar
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-text-secondary">
              Já tem uma conta?{" "}
              <Link to="/login" className="text-primary-600 hover:text-primary-800">
                Faça login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
