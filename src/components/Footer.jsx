import { LineChart, Headphones, FileText, Users } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 flex items-center justify-center md:justify-start">
              <LineChart className="mr-2 text-accent-400" /> Seu Progresso
            </h3>
            <div className="bg-primary-900 h-4 rounded-full overflow-hidden">
              <div className="bg-secondary-500 h-full" style={{ width: "25%" }}></div>
            </div>
            <p className="mt-2 text-sm">25% completo</p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 flex items-center justify-center md:justify-start">
              <Headphones className="mr-2 text-accent-400" /> Suporte
            </h3>
            <p className="text-sm">Precisa de ajuda?</p>
            <button className="mt-2 bg-primary-600 hover:bg-primary-700 px-4 py-1 rounded-md text-sm">
              Contatar Suporte
            </button>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 flex items-center justify-center md:justify-start">
              <FileText className="mr-2 text-accent-400" /> Documentos
            </h3>
            <ul className="text-sm space-y-1">
              <li>
                <a href="#" className="hover:text-accent-300">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-300">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 flex items-center justify-center md:justify-start">
              <Users className="mr-2 text-accent-400" /> Comunidade
            </h3>
            <p className="text-sm">Junte-se a outros estudantes!</p>
            <button className="mt-2 bg-secondary-600 hover:bg-secondary-700 px-4 py-1 rounded-md text-sm">
              Acessar Fórum
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Programin. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
