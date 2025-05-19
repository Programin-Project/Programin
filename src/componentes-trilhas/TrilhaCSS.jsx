import { useState } from "react"

/**
 * Componente TrilhaCSS - Trilha de aprendizado para CSS
 *
 * Este componente exibe uma trilha horizontal de 10 módulos de CSS
 * representando um caminho de aprendizado que o usuário percorre.
 */
export default function TrilhaCSS() {
  // Estado para controlar quais módulos foram concluídos
  // Inicialmente, todos os módulos estão como não concluídos (false)
  const [modulosConcluidos, setModulosConcluidos] = useState(Array(10).fill(false))

  // Lista de módulos da trilha de CSS
  // Para alterar o nome de um módulo, basta modificar o texto correspondente neste array
  const modulos = [
    "Introdução ao CSS e seletores básicos",
    "Box Model e layout básico",
    "Cores, fontes e texto",
    "Flexbox",
    "CSS Grid",
    "Posicionamento e display",
    "Responsividade e Media Queries",
    "Transformações e transições",
    "Animações CSS",
    "Pré-processadores e CSS moderno",
  ]

  // Função para alternar o estado de conclusão de um módulo
  const toggleModuloConcluido = (index) => {
    const novosModulosConcluidos = [...modulosConcluidos]
    novosModulosConcluidos[index] = !novosModulosConcluidos[index]
    setModulosConcluidos(novosModulosConcluidos)
  }

  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-500">Trilha de CSS</h2>
      <p className="mb-6 text-gray-300">Siga o caminho para dominar CSS:</p>

      {/* Caminho/Estrada da trilha */}
      <div className="relative mb-8">
        {/* Linha de base (estrada) */}
        <div className="h-2 bg-gray-700 rounded-full w-full absolute top-6"></div>

        {/* Módulos (pontos na estrada) */}
        <div className="flex justify-between relative">
          {modulos.map((modulo, index) => {
            // Verificar se este módulo deve estar ativo (todos os anteriores concluídos)
            const modulosAnterioresConcluidos =
              index === 0 || modulosConcluidos.slice(0, index).every((status) => status === true)

            // Verificar se este módulo está concluído
            const concluido = modulosConcluidos[index]

            // Determinar as classes de estilo com base no estado
            const circleClasses = concluido
              ? "bg-blue-500 border-blue-300"
              : modulosAnterioresConcluidos
                ? "bg-gray-800 border-blue-500 cursor-pointer"
                : "bg-gray-800 border-gray-600 opacity-50 cursor-not-allowed"

            // Determinar as classes para o texto
            const textClasses = concluido
              ? "text-blue-300"
              : modulosAnterioresConcluidos
                ? "text-gray-300"
                : "text-gray-500"

            return (
              <div key={index} className="flex flex-col items-center w-8">
                {/* Círculo do módulo */}
                <div
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center z-10 ${circleClasses}`}
                  onClick={() => modulosAnterioresConcluidos && toggleModuloConcluido(index)}
                >
                  {concluido ? (
                    <span className="text-white">✓</span>
                  ) : (
                    <span className="text-gray-300">{index + 1}</span>
                  )}
                </div>

                {/* Linha conectora para o próximo módulo (se não for o último) */}
                {index < modulos.length - 1 && (
                  <div
                    className={`h-2 absolute top-6 left-6 z-0 rounded-full ${
                      concluido ? "bg-blue-500" : "bg-gray-700"
                    }`}
                    style={{
                      width: `${100 / (modulos.length - 1)}%`,
                      left: `${(index * 100) / (modulos.length - 1)}%`,
                    }}
                  ></div>
                )}

                {/* Nome do módulo */}
                <div className="mt-4 text-center">
                  <span className={`text-xs ${textClasses}`} title={modulo}>
                    Módulo {index + 1}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Detalhes do módulo atual */}
      <div className="bg-gray-800 p-4 rounded-lg">
        {modulosConcluidos.some((status) => status === true) ? (
          <>
            <h3 className="text-lg font-medium text-blue-400 mb-2">Módulos concluídos:</h3>
            <ul className="text-gray-300 space-y-1">
              {modulosConcluidos.map(
                (status, index) =>
                  status && (
                    <li key={index} className="flex items-center">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>{modulos[index]}</span>
                    </li>
                  ),
              )}
            </ul>
          </>
        ) : (
          <p className="text-gray-400">Clique no primeiro módulo para começar sua jornada!</p>
        )}
      </div>

      {/* Contador de progresso */}
      <div className="mt-4 text-sm text-gray-400">
        Progresso: {modulosConcluidos.filter(Boolean).length} de {modulos.length} módulos
      </div>
    </div>
  )
}