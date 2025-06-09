"use client"

import { useState, useEffect, useCallback } from "react"
import {
  Code,
  Smartphone,
  Database,
  Brain,
  Gamepad2,
  Shield,
  Server,
  BarChart3,
  Globe,
  ChevronRight,
  Sparkles,
  Zap,
  Menu,
  X,
  Star,
  Users,
  Trophy,
  Clock,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Target,
  Rocket,
  BookOpen,
  Award,
  Plus,
  Minus,
  Send,
  Heart,
  ExternalLink,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const courses = [
  {
    id: 1,
    title: "Desenvolvimento Web Frontend",
    description: "Domine React, Vue, Angular e crie interfaces incríveis e responsivas.",
    icon: Globe,
    color: "from-cyan-400 to-blue-500",
    duration: "6 meses",
    level: "Iniciante ao Avançado",
  },
  {
    id: 2,
    title: "Desenvolvimento Backend",
    description: "Aprenda Node.js, Python, Java e construa APIs robustas e escaláveis.",
    icon: Server,
    color: "from-green-400 to-emerald-500",
    duration: "8 meses",
    level: "Intermediário",
  },
  {
    id: 3,
    title: "Desenvolvimento Mobile",
    description: "Crie apps nativos e híbridos com React Native, Flutter e Swift.",
    icon: Smartphone,
    color: "from-purple-400 to-pink-500",
    duration: "7 meses",
    level: "Intermediário",
  },
  {
    id: 4,
    title: "Ciência de Dados",
    description: "Analise dados, crie visualizações e extraia insights valiosos.",
    icon: BarChart3,
    color: "from-orange-400 to-red-500",
    duration: "10 meses",
    level: "Iniciante",
  },
  {
    id: 5,
    title: "Inteligência Artificial",
    description: "Desenvolva modelos de ML, redes neurais e soluções inteligentes.",
    icon: Brain,
    color: "from-indigo-400 to-purple-500",
    duration: "12 meses",
    level: "Avançado",
  },
  {
    id: 6,
    title: "Desenvolvimento de Jogos",
    description: "Crie jogos 2D e 3D com Unity, Unreal Engine e tecnologias web.",
    icon: Gamepad2,
    color: "from-pink-400 to-rose-500",
    duration: "9 meses",
    level: "Intermediário",
  },
  {
    id: 7,
    title: "DevOps e Infraestrutura",
    description: "Automatize deploys, gerencie containers e domine a nuvem.",
    icon: Zap,
    color: "from-yellow-400 to-orange-500",
    duration: "6 meses",
    level: "Avançado",
  },
  {
    id: 8,
    title: "Segurança da Informação",
    description: "Proteja sistemas, identifique vulnerabilidades e implemente defesas.",
    icon: Shield,
    color: "from-red-400 to-pink-500",
    duration: "8 meses",
    level: "Intermediário",
  },
  {
    id: 9,
    title: "Banco de Dados",
    description: "Modele, otimize e gerencie dados com SQL, NoSQL e Big Data.",
    icon: Database,
    color: "from-teal-400 to-cyan-500",
    duration: "5 meses",
    level: "Iniciante",
  },
]

const testimonials = [
  {
    id: 1,
    name: "Leilla Carvalho",
    role: "Desenvolvedora Frontend",
    company: "Tech Corp",
    image: "https://avatars.githubusercontent.com/u/148092822?v=4",
    content:
      "O Programin transformou minha carreira! Saí do zero e hoje trabalho como desenvolvedora em uma das maiores empresas de tech do país.",
    rating: 5,
  },
  {
    id: 2,
    name: "Hudson Bezerra",
    role: "Data Scientist",
    company: "DataTech Solutions",
    image: "https://avatars.githubusercontent.com/u/178060386?v=4",
    content:
      "A metodologia de ensino é incrível. Os projetos práticos me deram a confiança necessária para migrar de carreira.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sara Morais",
    role: "Mobile Developer",
    company: "AppMakers",
    image: "https://avatars.githubusercontent.com/u/123466976?v=4",
    content:
      "Consegui meu primeiro emprego como desenvolvedora mobile apenas 4 meses após começar o curso. Recomendo demais!",
    rating: 5,
  },
]

const features = [
  {
    icon: Target,
    title: "Ensino Personalizado com IA",
    description: "Nossa IA adapta o conteúdo ao seu ritmo de aprendizado e identifica suas dificuldades.",
  },
  {
    icon: Rocket,
    title: "Projetos Reais",
    description: "Desenvolva projetos que realmente importam e construa um portfólio impressionante.",
  },
  {
    icon: Users,
    title: "Comunidade Ativa",
    description: "Conecte-se com outros estudantes e profissionais em nossa comunidade exclusiva.",
  },
  {
    icon: Trophy,
    title: "Certificação Reconhecida",
    description: "Receba certificados valorizados pelo mercado e aumente suas chances de contratação.",
  },
  {
    icon: Clock,
    title: "Flexibilidade Total",
    description: "Estude no seu tempo, no seu ritmo, de qualquer lugar do mundo.",
  },
  {
    icon: BookOpen,
    title: "Conteúdo Atualizado",
    description: "Sempre atualizamos nosso conteúdo com as tecnologias mais recentes do mercado.",
  },
]

const faqs = [
  {
    question: "O Programin é 100% gratuito?",
    answer:
      "Sim! O Programin é completamente gratuito. Todos os nossos cursos, projetos práticos, certificados e suporte estão disponíveis sem nenhum custo. Nossa missão é democratizar o ensino de programação.",
  },
  {
    question: "Preciso ter experiência prévia para começar?",
    answer:
      "Não é necessário! Nossos cursos são projetados para levar você do absoluto zero ao nível profissional. Começamos com conceitos básicos e evoluímos gradualmente, sempre com explicações claras e exemplos práticos.",
  },
  {
    question: "Em quais áreas posso aplicar o que aprendo aqui?",
    answer:
      "As possibilidades são infinitas! Você pode trabalhar como desenvolvedor web, mobile, criar sistemas, aplicativos, sites, jogos, trabalhar com dados, inteligência artificial, segurança digital e muito mais. O conhecimento em programação abre portas em praticamente todos os setores.",
  },
  {
    question: "Preciso instalar algum software?",
    answer:
      "Para a maioria dos nossos cursos iniciais, você só precisa de um navegador web! Conforme avança, orientamos sobre as ferramentas necessárias e como instalá-las. Sempre fornecemos guias detalhados e suporte para configuração.",
  },
  {
    question: "Como o conteúdo é organizado?",
    answer:
      "Nosso conteúdo é estruturado em trilhas de aprendizado progressivas. Cada trilha contém módulos teóricos, exercícios práticos, projetos reais e avaliações. Você pode seguir no seu próprio ritmo e revisitar qualquer conteúdo quando quiser.",
  },
]

function LandingPage() {
  const navigate = useNavigate()
  const [displayedText, setDisplayedText] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const fullText = "Aprenda Programação de Forma Divertida, Tecnológica e Profissional!"
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    setIsVisible(true)
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  // Efeito para detectar scroll e alterar aparência da navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll spy para detectar seção ativa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "sobre", "cursos", "depoimentos", "contato"]
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Função para scroll suave
  const scrollToSection = useCallback(
    (sectionId) => {
      if (isScrolling) return

      setIsScrolling(true)
      setMobileMenuOpen(false)

      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const navbarHeight = 88
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - navbarHeight

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })

          setTimeout(() => {
            if (Math.abs(window.pageYOffset - offsetPosition) > 50) {
              element.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          }, 100)
        }

        setTimeout(() => {
          setIsScrolling(false)
        }, 1000)
      }, 50)
    },
    [isScrolling],
  )

  // Função para navegar para login/registro
  const handleAuthNavigation = (path) => {
    navigate(path)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#3170D7] to-[#1A3B71] relative overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/30 backdrop-blur-xl border-b border-white/20 shadow-2xl"
            : "bg-black/20 backdrop-blur-lg border-b border-white/10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <Code className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Programin</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              <button
                onClick={() => scrollToSection("cursos")}
                className={`text-white hover:text-cyan-400 transition-all cursor-pointer font-medium relative ${
                  activeSection === "cursos" ? "text-cyan-400" : ""
                }`}
                disabled={isScrolling}
              >
                Cursos
                {activeSection === "cursos" && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"></div>
                )}
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className={`text-white hover:text-cyan-400 transition-all cursor-pointer font-medium relative ${
                  activeSection === "sobre" ? "text-cyan-400" : ""
                }`}
                disabled={isScrolling}
              >
                Sobre
                {activeSection === "sobre" && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"></div>
                )}
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className={`text-white hover:text-cyan-400 transition-all cursor-pointer font-medium relative ${
                  activeSection === "depoimentos" ? "text-cyan-400" : ""
                }`}
                disabled={isScrolling}
              >
                Depoimentos
                {activeSection === "depoimentos" && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"></div>
                )}
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className={`text-white hover:text-cyan-400 transition-all cursor-pointer font-medium relative ${
                  activeSection === "contato" ? "text-cyan-400" : ""
                }`}
                disabled={isScrolling}
              >
                Contato
                {activeSection === "contato" && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"></div>
                )}
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => handleAuthNavigation("/login")}
                className="text-white hover:text-cyan-400 transition-colors font-medium"
              >
                Login
              </button>
              <button
                onClick={() => handleAuthNavigation("/register")}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-7 py-3 rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all font-semibold shadow-lg"
              >
                Cadastrar
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black/40 backdrop-blur-xl border-t border-white/10">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => scrollToSection("cursos")}
                  className={`block px-4 py-3 text-white hover:text-cyan-400 w-full text-left font-medium transition-all ${
                    activeSection === "cursos" ? "text-cyan-400 border-l-2 border-cyan-400" : ""
                  }`}
                  disabled={isScrolling}
                >
                  Cursos
                </button>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className={`block px-4 py-3 text-white hover:text-cyan-400 w-full text-left font-medium transition-all ${
                    activeSection === "sobre" ? "text-cyan-400 border-l-2 border-cyan-400" : ""
                  }`}
                  disabled={isScrolling}
                >
                  Sobre
                </button>
                <button
                  onClick={() => scrollToSection("depoimentos")}
                  className={`block px-4 py-3 text-white hover:text-cyan-400 w-full text-left font-medium transition-all ${
                    activeSection === "depoimentos" ? "text-cyan-400 border-l-2 border-cyan-400" : ""
                  }`}
                  disabled={isScrolling}
                >
                  Depoimentos
                </button>
                <button
                  onClick={() => scrollToSection("contato")}
                  className={`block px-4 py-3 text-white hover:text-cyan-400 w-full text-left font-medium transition-all ${
                    activeSection === "contato" ? "text-cyan-400 border-l-2 border-cyan-400" : ""
                  }`}
                  disabled={isScrolling}
                >
                  Contato
                </button>
                <div className="flex flex-col space-y-3 px-4 pt-4 pb-2">
                  <button
                    onClick={() => handleAuthNavigation("/login")}
                    className="text-white hover:text-cyan-400 text-left font-medium"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => handleAuthNavigation("/register")}
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold"
                  >
                    Cadastrar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-bounce delay-1000">
          <Code className="w-8 h-8 text-cyan-400/60" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-bounce delay-2000">
          <Sparkles className="w-6 h-6 text-pink-400/60" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-bounce delay-3000">
          <Zap className="w-7 h-7 text-yellow-400/60" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 pt-32">
        {/* Hero Section */}
        <header
          id="inicio"
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Mascot */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  <Code className="w-12 h-12 text-blue-600" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="w-4 h-4 text-yellow-800" />
              </div>
            </div>
          </div>

          {/* Main Headline with Typing Effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {displayedText}
            </span>
            <span className="animate-pulse">|</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Domine <span className="text-cyan-400 font-semibold">Desenvolvimento Web</span>,{" "}
            <span className="text-purple-400 font-semibold">Mobile</span>,{" "}
            <span className="text-pink-400 font-semibold">IA</span>,{" "}
            <span className="text-green-400 font-semibold">Dados</span>,{" "}
            <span className="text-yellow-400 font-semibold">DevOps</span>,{" "}
            <span className="text-red-400 font-semibold">Segurança</span> e muito mais com trilhas personalizadas e
            ensino prático usando IA.
          </p>

          {/* CTA Button */}
          <div
            className={`flex justify-center items-center transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <button
              onClick={() => handleAuthNavigation("/register")}
              className="group bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center gap-3 border-2 border-white/20 hover:border-white/40"
            >
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Começar Agora - 100% Grátis
              <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-1000 delay-1500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50K+</div>
              <div className="text-gray-300">Alunos Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300">Taxa de Sucesso</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">200+</div>
              <div className="text-gray-300">Projetos Práticos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Suporte</div>
            </div>
          </div>
        </header>
      </div>

      {/* Features Section */}
      <section id="sobre" className="py-20 bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Por que escolher o{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Programin?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nossa plataforma combina tecnologia de ponta com metodologia comprovada para acelerar seu aprendizado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Escolha Sua{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Trilha de Aprendizado
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cursos estruturados para levar você do zero ao profissional com projetos reais e mentoria especializada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const IconComponent = course.icon
              return (
                <div
                  key={course.id}
                  className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer shadow-2xl hover:shadow-cyan-500/25"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${course.color} rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{course.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {course.level}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-cyan-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors">
                      Saiba mais
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <button
                      onClick={() => handleAuthNavigation("/register")}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:from-cyan-600 hover:to-purple-700 transition-all"
                    >
                      Começar
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              O que nossos{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                alunos dizem
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Histórias reais de transformação e sucesso profissional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 border-2 border-cyan-400 object-cover"
                  />
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-xs">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perguntas{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Frequentes
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tire suas dúvidas sobre nossa plataforma gratuita de ensino
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl mb-4 border border-white/20 overflow-hidden"
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-white font-semibold text-lg">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-6 h-6 text-cyan-400" />
                  ) : (
                    <Plus className="w-6 h-6 text-cyan-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/20 text-center max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pronto para <span className="text-cyan-400">Começar</span> sua Jornada?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Junte-se a mais de 50.000 pessoas que já estão aprendendo programação de forma gratuita com o Programin.
              Comece hoje mesmo e transforme seu futuro!
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => handleAuthNavigation("/register")}
                className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center gap-3 border-2 border-white/20 hover:border-white/40"
              >
                <Rocket className="w-6 h-6" />
                Começar Agora - 100% Grátis
                <Sparkles className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              ✨ Acesso imediato • 🎯 Sem cadastro obrigatório • 📚 Conteúdo completo
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contato"
        className="relative bg-gradient-to-b from-black/60 to-black/80 backdrop-blur-xl border-t border-white/10"
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-40 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20">
          {/* Header do Footer */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl">
                <Code className="w-9 h-9 text-white" />
              </div>
              <span className="text-4xl font-bold text-white">Programin</span>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Democratizando o ensino de programação através de tecnologia e inovação
            </p>
          </div>

          {/* Grid Principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Sobre a Empresa */}
            <div className="lg:col-span-1">
              <h4 className="text-white font-bold text-xl mb-6 flex items-center">
                <Target className="w-5 h-5 mr-2 text-cyan-400" />
                Nossa Missão
              </h4>
              <p className="text-gray-300 leading-relaxed mb-6">
                Transformar vidas através da educação em tecnologia, oferecendo ensino de qualidade, gratuito e
                acessível para todos.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="group">
                  <div className="w-12 h-12 bg-white/10 hover:bg-cyan-500 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="w-12 h-12 bg-white/10 hover:bg-blue-500 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="w-12 h-12 bg-white/10 hover:bg-pink-500 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="w-12 h-12 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="w-12 h-12 bg-white/10 hover:bg-red-500 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </a>
              </div>
            </div>

            {/* Links Rápidos */}
            <div>
              <h4 className="text-white font-bold text-xl mb-6 flex items-center">
                <Rocket className="w-5 h-5 mr-2 text-cyan-400" />
                Navegação
              </h4>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => scrollToSection("cursos")}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                    disabled={isScrolling}
                  >
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Cursos Gratuitos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("sobre")}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                    disabled={isScrolling}
                  >
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Sobre o Programin
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("depoimentos")}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                    disabled={isScrolling}
                  >
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Histórias de Sucesso
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Blog e Artigos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Comunidade
                  </a>
                </li>
              </ul>
            </div>

            {/* Suporte */}
            <div>
              <h4 className="text-white font-bold text-xl mb-6 flex items-center">
                <Users className="w-5 h-5 mr-2 text-cyan-400" />
                Suporte
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Documentação
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Fórum da Comunidade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Status do Sistema
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>

            {/* Contato e Newsletter */}
            <div>
              <h4 className="text-white font-bold text-xl mb-6 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                Fale Conosco
              </h4>

              {/* Informações de Contato */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium">contato@programin.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Telefone</p>
                    <p className="font-medium">+55 (11) 9999-9999</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Localização</p>
                    <p className="font-medium">São Paulo, SP</p>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h5 className="text-white font-semibold mb-3 flex items-center">
                  <Send className="w-4 h-4 mr-2 text-cyan-400" />
                  Newsletter Gratuita
                </h5>
                <p className="text-gray-400 text-sm mb-4">Receba dicas, tutoriais e novidades sobre programação</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Seu melhor email"
                    className="flex-1 bg-white/10 border border-white/20 rounded-xl sm:rounded-r-none px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all min-w-0"
                  />
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl sm:rounded-l-none hover:from-cyan-600 hover:to-purple-700 transition-all group flex items-center justify-center shrink-0">
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Linha Divisória */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center text-gray-400 mb-4 md:mb-0">
                <p>© 2024 Programin. Todos os direitos reservados.</p>
              </div>
              <div className="flex items-center text-gray-400">
                <p className="flex items-center">
                  Feito com <Heart className="w-4 h-4 mx-1 text-red-400" /> para desenvolvedores
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
