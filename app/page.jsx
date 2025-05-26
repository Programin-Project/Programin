import App from "../src/App"
import Link from "next/link"
import Button from "../../src/components/ui/button"

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 text-center">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900">Programin</h1>
          <p className="mt-3 text-lg text-gray-600">Bem-vindo ao Programin, sua plataforma de programação</p>
        </div>

        <div className="flex flex-col space-y-4">
          <Link href="/login">
            <Button className="w-full">Entrar</Button>
          </Link>

          <Link href="/register">
            <Button variant="outline" className="w-full">
              Cadastrar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  return <App />
}
