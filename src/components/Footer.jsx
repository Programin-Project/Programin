import { LineChart, Headphones, FileText, Users } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-base font-semibold mb-2 flex items-center justify-center md:justify-start">
              <LineChart className="mr-2 text-accent-400" size={18} /> Seu Progresso
            </h3>
            <div className="bg-primary-900 h-3 rounded-full overflow-hidden">
              <div className="bg-secondary-500 h-full" style={{ width: "25%" }}></div>
            </div>
            <p className="mt-1 text-xs">25% completo</p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-base font-semibold mb-2 flex items-center justify-center md:justify-start">
              <Headphones className="mr-2 text-accent-400" size={18} /> Suporte
            </h3>
            <p className="text-xs">Precisa de ajuda?</p>
            <button className="mt-1 bg-primary-600 hover:bg-primary-700 px-3 py-1 rounded-md text-xs">
              Contatar Suporte
            </button>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-base font-semibold mb-2 flex items-center justify-center md:justify-start">
              <FileText className="mr-2 text-accent-400" size={18} /> Documentos
            </h3>
            <ul className="text-xs space-y-1">
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
            <h3 className="text-base font-semibold mb-2 flex items-center justify-center md:justify-start">
              <Users className="mr-2 text-accent-400" size={18} /> Comunidade
            </h3>
            <p className="text-xs">Junte-se a outros estudantes!</p>
            <button className="mt-1 bg-secondary-600 hover:bg-secondary-700 px-3 py-1 rounded-md text-xs">
              Acessar Fórum
            </button>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-primary-700 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Programin. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

