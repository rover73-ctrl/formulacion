/**
 * data.js - Base de Datos de Estudio, Banco Maestro de Reactivos y Cuestionarios
 * Formulación y Evaluación de Proyectos (Gabriel Baca Urbina)
 * Total de Reactivos Compilados: 148 preguntas con fundamentación pedagógica.
 */

const STUDY_DATA = {
  chapters: [
    {
      id: "cap1",
      number: "1",
      title: "Elementos Conceptuales y Preparación de la Evaluación",
      shortTitle: "1. Elementos Conceptuales",
      icon: "fa-project-diagram",
      color: "#38bdf8",
      accent: "rgba(56, 189, 248, 0.15)",
      badge: "Fundamentos, Ciclo de Vida y Metodología",
      description: "Conceptos esenciales sobre proyectos de inversión, niveles de profundidad (perfil, prefactibilidad, definitivo), estructura metodológica, cadena de suministros, planeación estratégica y detección de oportunidades.",
      reading: {
        summary: "Un proyecto es la búsqueda de una solución inteligente al planteamiento de un problema orientada a resolver una necesidad humana. Este capítulo sienta las bases metodológicas para la toma de decisiones multidisciplinarias de inversión, detallando los niveles de estudio y la inserción del proyecto en la cadena de suministros moderna y la planeación estratégica.",
        sections: [
          {
            id: "cap1-sec1",
            title: "1.1 ¿Qué es un Proyecto y por qué son Necesarios?",
            content: `
              <p>Un <strong>proyecto</strong> es la búsqueda de una solución inteligente al planteamiento de un problema, la cual tiende a resolver una necesidad humana (educación, alimentación, salud, ambiente, cultura, etc.).</p>
              <div class="concept-callout">
                <h4>Definición de Proyecto de Inversión</h4>
                <p>Es un plan estructurado que, si se le asigna determinado monto de capital y se le proporcionan diversos insumos, producirá un bien o servicio útil a la sociedad.</p>
              </div>
              <p>Día a día nos encontramos rodeados de productos y servicios creados por el ser humano. Antes de su venta comercial, cada uno fue evaluado para verificar que satisface una necesidad. Alguien tomó la decisión de producirlo en masa e invertir dinero. En la actualidad, una inversión inteligente requiere una base que la justifique: <strong>un proyecto estructurado y evaluado</strong>.</p>
              <h4>La Decisión sobre un Proyecto</h4>
              <p>Para decidir invertir, el proyecto debe someterse al <strong>análisis multidisciplinario</strong> de especialistas (ingenieros, economistas, contadores, administradores, mercadotécnicos). Una decisión de inversión nunca debe recaer en una sola persona con enfoque parcial.</p>
              <div class="note-box">
                <i class="fas fa-info-circle"></i>
                <div>
                  <strong>El riesgo siempre existe:</strong> Un análisis profundo no exime al dinero de riesgo. El futuro es incierto y existen factores fortuitos no predecibles (huelgas, desastres naturales, devaluaciones bruscas, cambios políticos drásticos) que pueden alterar los pronósticos.
                </div>
              </div>
            `
          },
          {
            id: "cap1-sec2",
            title: "1.2 Niveles de Profundidad en la Evaluación de Proyectos",
            content: `
              <p>En el proceso de formulación y evaluación se distinguen <strong>tres niveles de profundidad</strong> sucesivos:</p>
              <div class="grid-cards-3">
                <div class="study-card">
                  <div class="card-tag">Nivel 1</div>
                  <h4>Perfil (Gran Visión o Identificación de la Idea)</h4>
                  <p>Se formula con información existente, juicio común y experiencia previa. En términos monetarios únicamente presenta <em>cálculos globales</em> de inversiones, costos e ingresos, sin trabajo de campo detallado.</p>
                </div>
                <div class="study-card active-card">
                  <div class="card-tag">Nivel 2</div>
                  <h4>Estudio de Prefactibilidad (Anteproyecto)</h4>
                  <p>Profundiza la investigación en fuentes primarias y secundarias de mercado, detalla la tecnología a utilizar, calcula costos totales y evalúa la rentabilidad económica. <strong>Es el nivel de estudio y aplicación desarrollado en este texto.</strong></p>
                </div>
                <div class="study-card">
                  <div class="card-tag">Nivel 3</div>
                  <h4>Proyecto Definitivo</h4>
                  <p>Es el nivel más profundo y final. Contiene toda la información del anteproyecto con puntos finos: canales de comercialización acordados, contratos de venta ya formalizados, cotizaciones actualizadas por escrito y planos arquitectónicos constructivos detallados.</p>
                </div>
              </div>
            `
          },
          {
            id: "cap1-sec3",
            title: "1.3 Partes Generales de la Evaluación de Proyectos",
            content: `
              <p>La metodología se adapta a cuatro áreas generales de aplicación:</p>
              <ul>
                <li>Instalación de una planta totalmente nueva.</li>
                <li>Elaboración de un nuevo producto en una planta ya existente.</li>
                <li>Ampliación de capacidad instalada o creación de sucursales.</li>
                <li>Sustitución de maquinaria por obsolescencia o capacidad insuficiente.</li>
              </ul>
              <h4>Estructura Metodológica General</h4>
              <div class="process-flow">
                <div class="flow-step"><span>1</span><strong>Definición de Objetivos</strong></div>
                <div class="flow-step"><span>2</span><strong>Estudio de Mercado</strong></div>
                <div class="flow-step"><span>3</span><strong>Estudio Técnico Operativo</strong></div>
                <div class="flow-step"><span>4</span><strong>Estudio Económico Financiero</strong></div>
                <div class="flow-step"><span>5</span><strong>Evaluación Económica</strong></div>
                <div class="flow-step"><span>6</span><strong>Análisis y Administración del Riesgo</strong></div>
                <div class="flow-step"><span>7</span><strong>Decisión de Inversión</strong></div>
              </div>
            `
          },
          {
            id: "cap1-sec4",
            title: "1.4 Cadena de Suministros y Logística Inversa",
            content: `
              <p>Una empresa moderna no concluye en sus muros físicos. Forma parte integral de una <strong>cadena de suministros</strong>:</p>
              <p><em>Proveedores de materias primas &rarr; Industria de manufactura &rarr; Distribuidores &rarr; Consumidores finales.</em></p>
              <div class="concept-callout">
                <h4>Premisa Moderna de Competencia</h4>
                <p>En el mercado actual, la competencia ya no es meramente entre empresas aisladas, sino <strong>entre cadenas de suministros completas</strong>.</p>
              </div>
              <h4>Logística Inversa (Cuidado Ambiental)</h4>
              <p>Establece que quien debe retirar y dar tratamiento ambiental a los productos vencidos o desechos es el <strong>productor</strong> (por ejemplo: cartuchos de tinta, baterías, monitores, envases de agroquímicos).</p>
            `
          },
          {
            id: "cap1-sec5",
            title: "1.5 Planeación Estratégica y Detección de Oportunidades",
            content: `
              <p>De acuerdo con <strong>Michael Porter</strong>, la <strong>ventaja competitiva sustentable</strong> se logra principalmente por dos pilares: <strong>Diferenciación de Producto</strong> o <strong>Liderazgo en Costos</strong>.</p>
              <p><strong>Cuatro características sociales determinantes del consumo:</strong> Densidad poblacional, estructura de edad de los habitantes, ingreso por familia y flujos migratorios.</p>
            `
          }
        ]
      },
      quiz: [
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "¿Cuál es la respuesta más conveniente para la siguiente pregunta: ¿Puede proponerse una alternativa viable de inversión para un determinado capital?",
            "opciones": [
                  "Invertir en la construcción de un puente",
                  "Invertir en una nueva planta de energía nuclear",
                  "Invertir si es rentable en un Proyecto donde tengo experiencia y conozco el mercado",
                  "Invertir en un casino",
                  "Invertir en acciones"
            ],
            "correcta": 2,
            "resumen": "Invertir si es rentable en un Proyecto donde tengo experiencia y conozco el mercado.",
            "fundamentacion": "En la teoría y praxis de formulación de proyectos, la asignación eficiente de un capital determinado exige mitigar el riesgo operativo, de información y de mercado. Contar con 'know-how' (experiencia técnica) y conocimiento certero de la demanda y competencia reduce la asimetría informativa, mientras que la condición 'si es rentable' garantiza que el flujo de beneficios supere el costo de oportunidad del capital (TIR > tasa de descuento). Invertir a ciegas o en megaproyectos sin respaldo técnico-financiero destruye valor económico.",
            "id": 1,
            "question": "¿Cuál es la respuesta más conveniente para la siguiente pregunta: ¿Puede proponerse una alternativa viable de inversión para un determinado capital?",
            "options": [
                  "Invertir en la construcción de un puente",
                  "Invertir en una nueva planta de energía nuclear",
                  "Invertir si es rentable en un Proyecto donde tengo experiencia y conozco el mercado",
                  "Invertir en un casino",
                  "Invertir en acciones"
            ],
            "correct": 2,
            "explanation": "En la teoría y praxis de formulación de proyectos, la asignación eficiente de un capital determinado exige mitigar el riesgo operativo, de información y de mercado. Contar con 'know-how' (experiencia técnica) y conocimiento certero de la demanda y competencia reduce la asimetría informativa, mientras que la condición 'si es rentable' garantiza que el flujo de beneficios supere el costo de oportunidad del capital (TIR > tasa de descuento). Invertir a ciegas o en megaproyectos sin respaldo técnico-financiero destruye valor económico."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "A través de cuál método se materializa la \"Evaluación\" de un Proyecto:",
            "opciones": [
                  "A través del método cualitativo",
                  "A través de la confección de flujos de caja",
                  "A través de la investigación profunda del mercado",
                  "A través de la cuantificación de inversiones",
                  "A través de reconocer las ideas de un proyecto"
            ],
            "correcta": 1,
            "resumen": "A través de la confección de flujos de caja.",
            "fundamentacion": "La fase cuantitativa y decisiva de la evaluación económica y financiera de un proyecto se plasma de manera indispensable en el Flujo de Caja (Cash Flow). En él se proyectan de forma periódica todos los ingresos y egresos efectivos atribuibles al proyecto para luego aplicar sobre este saldo neto los indicadores matemáticos de bondad financiera (VAN, TIR, PRC y B/C). Sin flujo de caja, no existe base numérica para descontar dinero en el tiempo.",
            "id": 2,
            "question": "A través de cuál método se materializa la \"Evaluación\" de un Proyecto:",
            "options": [
                  "A través del método cualitativo",
                  "A través de la confección de flujos de caja",
                  "A través de la investigación profunda del mercado",
                  "A través de la cuantificación de inversiones",
                  "A través de reconocer las ideas de un proyecto"
            ],
            "correct": 1,
            "explanation": "La fase cuantitativa y decisiva de la evaluación económica y financiera de un proyecto se plasma de manera indispensable en el Flujo de Caja (Cash Flow). En él se proyectan de forma periódica todos los ingresos y egresos efectivos atribuibles al proyecto para luego aplicar sobre este saldo neto los indicadores matemáticos de bondad financiera (VAN, TIR, PRC y B/C). Sin flujo de caja, no existe base numérica para descontar dinero en el tiempo."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "Una actividad para recopilar información para el Proyecto, es:",
            "opciones": [
                  "Entrevistar al público",
                  "Buscar anuncios de la competencia",
                  "Buscar publicaciones de la empresa",
                  "Revisar noticias en los medios de prensa",
                  "Revisión contable de la empresa"
            ],
            "correcta": 0,
            "resumen": "Entrevistar al público.",
            "fundamentacion": "La entrevista directa a clientes potenciales (investigación de fuentes primarias) es el mecanismo fundamental y directo para levantar datos fidedignos sobre necesidades insatisfechas, hábitos de consumo, disposición a pagar (WTP) y validación de la propuesta de valor. Las demás opciones constituyen fuentes secundarias indirectas o de monitoreo complementario.",
            "id": 3,
            "question": "Una actividad para recopilar información para el Proyecto, es:",
            "options": [
                  "Entrevistar al público",
                  "Buscar anuncios de la competencia",
                  "Buscar publicaciones de la empresa",
                  "Revisar noticias en los medios de prensa",
                  "Revisión contable de la empresa"
            ],
            "correct": 0,
            "explanation": "La entrevista directa a clientes potenciales (investigación de fuentes primarias) es el mecanismo fundamental y directo para levantar datos fidedignos sobre necesidades insatisfechas, hábitos de consumo, disposición a pagar (WTP) y validación de la propuesta de valor. Las demás opciones constituyen fuentes secundarias indirectas o de monitoreo complementario."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "Indique a que etapa corresponde el \"estudio de mercado\":",
            "opciones": [
                  "Etapa de Identificación del Proyecto",
                  "Etapa de Idea del Proyecto",
                  "Etapa de Ejecución del Proyecto",
                  "Etapa de Valoración del Proyecto",
                  "Etapa de Formulación del Proyecto"
            ],
            "correcta": 4,
            "resumen": "Etapa de Formulación del Proyecto.",
            "fundamentacion": "El ciclo de vida del proyecto contempla la etapa de Formulación (o preinversión), en la cual se elaboran rigurosamente el Estudio de Mercado, el Estudio Técnico, el Estudio Organizacional/Legal y el Estudio Financiero. El estudio de mercado cuantifica oferta, demanda, precios y canales de comercialización requeridos para dimensionar y formular técnicamente la propuesta.",
            "id": 4,
            "question": "Indique a que etapa corresponde el \"estudio de mercado\":",
            "options": [
                  "Etapa de Identificación del Proyecto",
                  "Etapa de Idea del Proyecto",
                  "Etapa de Ejecución del Proyecto",
                  "Etapa de Valoración del Proyecto",
                  "Etapa de Formulación del Proyecto"
            ],
            "correct": 4,
            "explanation": "El ciclo de vida del proyecto contempla la etapa de Formulación (o preinversión), en la cual se elaboran rigurosamente el Estudio de Mercado, el Estudio Técnico, el Estudio Organizacional/Legal y el Estudio Financiero. El estudio de mercado cuantifica oferta, demanda, precios y canales de comercialización requeridos para dimensionar y formular técnicamente la propuesta."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "Analice cada aseveración respecto de \"La definición de un Proyecto\" e identifique cuál es la correcta:",
            "opciones": [
                  "La definición de un Proyecto responde al interés social",
                  "La definición de un Proyecto es una mejora al proyecto actual",
                  "La definición de un Proyecto corresponde a la mejor alternativa evaluada",
                  "La definición de un Proyecto corresponde al interés de los inversionistas",
                  "La definición de un Proyecto es la continuación de otro anterior"
            ],
            "correcta": 2,
            "resumen": "La definición de un Proyecto corresponde a la mejor alternativa evaluada.",
            "fundamentacion": "En metodología de preparación y evaluación de proyectos, un proyecto viable surge de un proceso iterativo de identificación, formulación y comparación de múltiples alternativas de solución frente a un problema u oportunidad. La decisión final de materializarlo recae sobre aquella alternativa que optimiza los recursos y maximiza el beneficio económico o social frente a las demás alternativas evaluadas.",
            "id": 5,
            "question": "Analice cada aseveración respecto de \"La definición de un Proyecto\" e identifique cuál es la correcta:",
            "options": [
                  "La definición de un Proyecto responde al interés social",
                  "La definición de un Proyecto es una mejora al proyecto actual",
                  "La definición de un Proyecto corresponde a la mejor alternativa evaluada",
                  "La definición de un Proyecto corresponde al interés de los inversionistas",
                  "La definición de un Proyecto es la continuación de otro anterior"
            ],
            "correct": 2,
            "explanation": "En metodología de preparación y evaluación de proyectos, un proyecto viable surge de un proceso iterativo de identificación, formulación y comparación de múltiples alternativas de solución frente a un problema u oportunidad. La decisión final de materializarlo recae sobre aquella alternativa que optimiza los recursos y maximiza el beneficio económico o social frente a las demás alternativas evaluadas."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "Identifique cuál de los siguientes es un indicador de \"evaluación económica\":",
            "opciones": [
                  "Tasa de reclamos",
                  "Control de existencias",
                  "Razón de liquidez",
                  "Valor actual neto",
                  "Cantidad de producto"
            ],
            "correcta": 3,
            "resumen": "Valor actual neto (VAN).",
            "fundamentacion": "El Valor Actual Neto (VAN o NPV) es el criterio cuantitativo por excelencia de la evaluación económica y financiera de inversiones. Mide la riqueza neta adicional expresada en moneda de hoy que generará el proyecto, descontando los flujos netos futuros a una tasa de costo de oportunidad de capital. La liquidez y control de existencias son métricas contables y de gestión operativa, no de evaluación económica de proyectos.",
            "id": 6,
            "question": "Identifique cuál de los siguientes es un indicador de \"evaluación económica\":",
            "options": [
                  "Tasa de reclamos",
                  "Control de existencias",
                  "Razón de liquidez",
                  "Valor actual neto",
                  "Cantidad de producto"
            ],
            "correct": 3,
            "explanation": "El Valor Actual Neto (VAN o NPV) es el criterio cuantitativo por excelencia de la evaluación económica y financiera de inversiones. Mide la riqueza neta adicional expresada en moneda de hoy que generará el proyecto, descontando los flujos netos futuros a una tasa de costo de oportunidad de capital. La liquidez y control de existencias son métricas contables y de gestión operativa, no de evaluación económica de proyectos."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "Un \"Proyecto\" es:",
            "opciones": [
                  "Una idea que se debe ejecutar siempre",
                  "Un análisis del mercado",
                  "Una solución o una idea de mejora para mi negocio",
                  "Una solución a lo que la empresa no pudo efectuar en el pasado",
                  "Un mecanismo para invertir en el futuro"
            ],
            "correcta": 2,
            "resumen": "Una solución o una idea de mejora para mi negocio.",
            "fundamentacion": "Conceptualmente, un proyecto es una propuesta estructurada y justificada que busca resolver una necesidad, aprovechar una oportunidad de mercado o generar una optimización/mejora sustancial dentro de una organización o negocio en marcha mediante la asignación temporal de recursos.",
            "id": 7,
            "question": "Un \"Proyecto\" es:",
            "options": [
                  "Una idea que se debe ejecutar siempre",
                  "Un análisis del mercado",
                  "Una solución o una idea de mejora para mi negocio",
                  "Una solución a lo que la empresa no pudo efectuar en el pasado",
                  "Un mecanismo para invertir en el futuro"
            ],
            "correct": 2,
            "explanation": "Conceptualmente, un proyecto es una propuesta estructurada y justificada que busca resolver una necesidad, aprovechar una oportunidad de mercado o generar una optimización/mejora sustancial dentro de una organización o negocio en marcha mediante la asignación temporal de recursos."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "De las siguientes afirmaciones en el contexto de formulación y evaluación de un Proyecto, la correcta es:",
            "opciones": [
                  "El contexto de mercado es relevante para determinar los Planes de Inversión",
                  "Un Proyecto se puede efectuar sin una evaluación",
                  "La rentabilidad de un Proyecto es medible a corto plazo",
                  "El Mercado es el lugar donde concurren oferentes y demandantes de un producto",
                  "La etapa de Ejecución es la primera actividad de un proyecto"
            ],
            "correcta": 3,
            "resumen": "El Mercado es el lugar donde concurren oferentes y demandantes de un producto.",
            "fundamentacion": "En microeconomía y evaluación de proyectos, el mercado se conceptualiza formalmente como el espacio (físico o virtual) e interacción en el cual convergen las fuerzas de la oferta (vendedores/productores) y la demanda (compradores/consumidores) para determinar los precios y cantidades transadas de bienes y servicios.",
            "id": 8,
            "question": "De las siguientes afirmaciones en el contexto de formulación y evaluación de un Proyecto, la correcta es:",
            "options": [
                  "El contexto de mercado es relevante para determinar los Planes de Inversión",
                  "Un Proyecto se puede efectuar sin una evaluación",
                  "La rentabilidad de un Proyecto es medible a corto plazo",
                  "El Mercado es el lugar donde concurren oferentes y demandantes de un producto",
                  "La etapa de Ejecución es la primera actividad de un proyecto"
            ],
            "correct": 3,
            "explanation": "En microeconomía y evaluación de proyectos, el mercado se conceptualiza formalmente como el espacio (físico o virtual) e interacción en el cual convergen las fuerzas de la oferta (vendedores/productores) y la demanda (compradores/consumidores) para determinar los precios y cantidades transadas de bienes y servicios."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "Clasifique en orden correcto las \"etapas\" de un Proyecto:",
            "opciones": [
                  "Formulación, Identificación, Evaluación y Ejecución",
                  "Identificación, Idea, Formulación, Evaluación y Ejecución",
                  "Identificación, Formulación, Evaluación y Ejecución",
                  "Formulación, Evaluación y Ejecución",
                  "Idea, Identificación, Ejecución y Formulación"
            ],
            "correcta": 2,
            "resumen": "Identificación, Formulación, Evaluación y Ejecución.",
            "fundamentacion": "El ciclo estándar y sistemático de un proyecto comprende secuencialmente: 1) Identificación (reconocer el problema/oportunidad y objetivos), 2) Formulación (diseño técnico, de mercado y organizacional), 3) Evaluación (determinación de viabilidad económica con flujos de fondos) y 4) Ejecución (puesta en marcha e implementación de la inversión).",
            "id": 9,
            "question": "Clasifique en orden correcto las \"etapas\" de un Proyecto:",
            "options": [
                  "Formulación, Identificación, Evaluación y Ejecución",
                  "Identificación, Idea, Formulación, Evaluación y Ejecución",
                  "Identificación, Formulación, Evaluación y Ejecución",
                  "Formulación, Evaluación y Ejecución",
                  "Idea, Identificación, Ejecución y Formulación"
            ],
            "correct": 2,
            "explanation": "El ciclo estándar y sistemático de un proyecto comprende secuencialmente: 1) Identificación (reconocer el problema/oportunidad y objetivos), 2) Formulación (diseño técnico, de mercado y organizacional), 3) Evaluación (determinación de viabilidad económica con flujos de fondos) y 4) Ejecución (puesta en marcha e implementación de la inversión)."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "¿Cómo desarrollaría la \"Idea\" de un Proyecto para mejorar un Gimnasio?",
            "opciones": [
                  "Mediante el estudio del mercado",
                  "A través de lo que solicita el público en las redes sociales",
                  "Mediante la formulación de una propuesta de inversión",
                  "Mediante las ideas de empresarios",
                  "Tratando de aprovechar que están bajas las tasas de interés"
            ],
            "correcta": 1,
            "resumen": "A través de lo que solicita el público en las redes sociales.",
            "fundamentacion": "La génesis o gestación de la 'idea' en servicios de consumo (como un gimnasio) proviene del levantamiento directo de retroalimentación, insatisfacciones o tendencias manifestadas por los usuarios. Las redes sociales y canales directos proporcionan información valiosa y espontánea para orientar la propuesta antes de pasar a la formulación formal.",
            "id": 10,
            "question": "¿Cómo desarrollaría la \"Idea\" de un Proyecto para mejorar un Gimnasio?",
            "options": [
                  "Mediante el estudio del mercado",
                  "A través de lo que solicita el público en las redes sociales",
                  "Mediante la formulación de una propuesta de inversión",
                  "Mediante las ideas de empresarios",
                  "Tratando de aprovechar que están bajas las tasas de interés"
            ],
            "correct": 1,
            "explanation": "La génesis o gestación de la 'idea' en servicios de consumo (como un gimnasio) proviene del levantamiento directo de retroalimentación, insatisfacciones o tendencias manifestadas por los usuarios. Las redes sociales y canales directos proporcionan información valiosa y espontánea para orientar la propuesta antes de pasar a la formulación formal."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "¿Cuál de las siguientes alternativas es una necesidad para ejecutar un Proyecto?",
            "opciones": [
                  "Necesidad de utilizar más ahorros",
                  "Necesidad de generar nuevos productos",
                  "Necesidad de ampliación de la empresa",
                  "Necesidad de contratar más personal",
                  "Necesidad de vender más"
            ],
            "correcta": 1,
            "resumen": "Necesidad de generar nuevos productos.",
            "fundamentacion": "La justificación estratégica para la ejecución de proyectos de inversión radica principalmente en satisfacer demandas latentes o adaptarse al ciclo de vida del mercado mediante la innovación y lanzamiento de nuevos bienes o servicios que otorguen valor y sostenibilidad al negocio.",
            "id": 11,
            "question": "¿Cuál de las siguientes alternativas es una necesidad para ejecutar un Proyecto?",
            "options": [
                  "Necesidad de utilizar más ahorros",
                  "Necesidad de generar nuevos productos",
                  "Necesidad de ampliación de la empresa",
                  "Necesidad de contratar más personal",
                  "Necesidad de vender más"
            ],
            "correct": 1,
            "explanation": "La justificación estratégica para la ejecución de proyectos de inversión radica principalmente en satisfacer demandas latentes o adaptarse al ciclo de vida del mercado mediante la innovación y lanzamiento de nuevos bienes o servicios que otorguen valor y sostenibilidad al negocio."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "Nombre un indicador de evaluación económica:",
            "opciones": [
                  "Tasa Interna de Retorno",
                  "Tasa de depósitos a plazo",
                  "Precio medio",
                  "Resultado operacional",
                  "Tasa de impuestos"
            ],
            "correcta": 0,
            "resumen": "Tasa Interna de Retorno (TIR).",
            "fundamentacion": "La Tasa Interna de Retorno (TIR o IRR) es el indicador dinámico de rentabilidad económica que iguala el valor actual de los flujos de caja futuros con la inversión inicial (haciendo el VAN igual a cero). Refleja la rentabilidad intrínseca porcentual del capital invertido.",
            "id": 12,
            "question": "Nombre un indicador de evaluación económica:",
            "options": [
                  "Tasa Interna de Retorno",
                  "Tasa de depósitos a plazo",
                  "Precio medio",
                  "Resultado operacional",
                  "Tasa de impuestos"
            ],
            "correct": 0,
            "explanation": "La Tasa Interna de Retorno (TIR o IRR) es el indicador dinámico de rentabilidad económica que iguala el valor actual de los flujos de caja futuros con la inversión inicial (haciendo el VAN igual a cero). Refleja la rentabilidad intrínseca porcentual del capital invertido."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "¿Cuál de las siguientes etapas precede a la etapa de Evaluación de un Proyecto?",
            "opciones": [
                  "La etapa de Idea del proyecto",
                  "La etapa de Formulación del proyecto",
                  "Las etapas de Formulación y Ejecución de un proyecto",
                  "Las etapas de Identificación de un proyecto a la mejor alternativa evaluada",
                  "Las etapas de Idea, Identificación y Formulación"
            ],
            "correcta": 4,
            "resumen": "Las etapas de Idea, Identificación y Formulación.",
            "fundamentacion": "Para evaluar rigurosamente la rentabilidad de un proyecto, es condición sine qua non haber transitado y completado previamente la concepción de la idea, la identificación del problema/oportunidad y la formulación técnica, comercial y de costos que alimentan el flujo de fondos.",
            "id": 13,
            "question": "¿Cuál de las siguientes etapas precede a la etapa de Evaluación de un Proyecto?",
            "options": [
                  "La etapa de Idea del proyecto",
                  "La etapa de Formulación del proyecto",
                  "Las etapas de Formulación y Ejecución de un proyecto",
                  "Las etapas de Identificación de un proyecto a la mejor alternativa evaluada",
                  "Las etapas de Idea, Identificación y Formulación"
            ],
            "correct": 4,
            "explanation": "Para evaluar rigurosamente la rentabilidad de un proyecto, es condición sine qua non haber transitado y completado previamente la concepción de la idea, la identificación del problema/oportunidad y la formulación técnica, comercial y de costos que alimentan el flujo de fondos."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "¿Qué interrogantes responden al \"Estudio Técnico\"?",
            "opciones": [
                  "Al ¿qué y producir?",
                  "Al ¿qué, cuánto, dónde, para quién y a qué precio producir?",
                  "Al ¿cómo distribuir los productos y servicios?",
                  "¿A qué precio debo vender mis productos y servicios?",
                  "¿Dónde debo localizar mi nuevo local comercial?"
            ],
            "correcta": 1,
            "resumen": "Al ¿qué, cuánto, dónde, para quién y a qué precio producir?",
            "fundamentacion": "El estudio técnico aborda de forma multidimensional la viabilidad operativa y productiva: tamaño del proyecto (cuánto), localización (dónde), especificaciones técnicas del bien (qué), articulado con los requerimientos identificados en el mercado (para quién y a qué condiciones de precio).",
            "id": 14,
            "question": "¿Qué interrogantes responden al \"Estudio Técnico\"?",
            "options": [
                  "Al ¿qué y producir?",
                  "Al ¿qué, cuánto, dónde, para quién y a qué precio producir?",
                  "Al ¿cómo distribuir los productos y servicios?",
                  "¿A qué precio debo vender mis productos y servicios?",
                  "¿Dónde debo localizar mi nuevo local comercial?"
            ],
            "correct": 1,
            "explanation": "El estudio técnico aborda de forma multidimensional la viabilidad operativa y productiva: tamaño del proyecto (cuánto), localización (dónde), especificaciones técnicas del bien (qué), articulado con los requerimientos identificados en el mercado (para quién y a qué condiciones de precio)."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "Señale qué es un Plan de Inversión:",
            "opciones": [
                  "Planificar la inversión que se ejecutará",
                  "Mantener una cartera de proyectos relacionados",
                  "Invertir en más de un proyecto",
                  "Planificar un cambio de localización de la empresa",
                  "Contar con alternativas de inversión"
            ],
            "correcta": 0,
            "resumen": "Planificar la inversión que se ejecutará.",
            "fundamentacion": "El Plan de Inversión es el documento y cronograma estructurado donde se cuantifican, calendarizan y asignan las fuentes de financiamiento para todos los activos tangibles (maquinaria, infraestructura), intangibles (patentes, licencias) y capital de trabajo requeridos para materializar el proyecto.",
            "id": 15,
            "question": "Señale qué es un Plan de Inversión:",
            "options": [
                  "Planificar la inversión que se ejecutará",
                  "Mantener una cartera de proyectos relacionados",
                  "Invertir en más de un proyecto",
                  "Planificar un cambio de localización de la empresa",
                  "Contar con alternativas de inversión"
            ],
            "correct": 0,
            "explanation": "El Plan de Inversión es el documento y cronograma estructurado donde se cuantifican, calendarizan y asignan las fuentes de financiamiento para todos los activos tangibles (maquinaria, infraestructura), intangibles (patentes, licencias) y capital de trabajo requeridos para materializar el proyecto."
      },
      {
            "modulo": 2,
            "moduloNombre": "Módulo 2: Metodología y Evaluación de Proyectos",
            "enunciado": "Las variables que definen la \"Metodología de Evaluación\" de un Proyecto de Inversión, son:",
            "opciones": [
                  "Flujos y costos del Proyecto",
                  "Ventas y ganancias del Proyecto",
                  "Beneficiarios y clientes del Proyecto",
                  "Objetivo y finalidad del estudio y de la inversión del Proyecto",
                  "Utilidades y rentabilidad en el Proyecto"
            ],
            "correcta": 3,
            "resumen": "Objetivo y finalidad del estudio y de la inversión del Proyecto.",
            "fundamentacion": "El diseño de la metodología evaluativa depende críticamente del propósito del estudio: si se evalúa la rentabilidad del proyecto puro (sin deuda), la rentabilidad del inversionista (con deuda), la creación de un nuevo negocio o una decisión de outsourcing/modernización/reemplazo en una empresa en marcha.",
            "id": 16,
            "question": "Las variables que definen la \"Metodología de Evaluación\" de un Proyecto de Inversión, son:",
            "options": [
                  "Flujos y costos del Proyecto",
                  "Ventas y ganancias del Proyecto",
                  "Beneficiarios y clientes del Proyecto",
                  "Objetivo y finalidad del estudio y de la inversión del Proyecto",
                  "Utilidades y rentabilidad en el Proyecto"
            ],
            "correct": 3,
            "explanation": "El diseño de la metodología evaluativa depende críticamente del propósito del estudio: si se evalúa la rentabilidad del proyecto puro (sin deuda), la rentabilidad del inversionista (con deuda), la creación de un nuevo negocio o una decisión de outsourcing/modernización/reemplazo en una empresa en marcha."
      },
      {
            "modulo": 2,
            "moduloNombre": "Módulo 2: Metodología y Evaluación de Proyectos",
            "enunciado": "Podemos considerar como un \"beneficiario externo\" de un Proyecto, a:",
            "opciones": [
                  "Al público",
                  "A los directores",
                  "A los clientes",
                  "A las familias",
                  "A los proveedores"
            ],
            "correcta": 0,
            "resumen": "Al público.",
            "fundamentacion": "En el análisis de externalidades y partes interesadas (stakeholders), el público en general o la comunidad adyacente actúa como beneficiario externo indirecto al verse favorecido por externalidades positivas generadas por el proyecto (mejora de infraestructura urbana, dinamismo económico, seguridad), sin participar directamente en la compraventa del bien.",
            "id": 17,
            "question": "Podemos considerar como un \"beneficiario externo\" de un Proyecto, a:",
            "options": [
                  "Al público",
                  "A los directores",
                  "A los clientes",
                  "A las familias",
                  "A los proveedores"
            ],
            "correct": 0,
            "explanation": "En el análisis de externalidades y partes interesadas (stakeholders), el público en general o la comunidad adyacente actúa como beneficiario externo indirecto al verse favorecido por externalidades positivas generadas por el proyecto (mejora de infraestructura urbana, dinamismo económico, seguridad), sin participar directamente en la compraventa del bien."
      },
      {
            "modulo": 2,
            "moduloNombre": "Módulo 2: Metodología y Evaluación de Proyectos",
            "enunciado": "¿Qué justifica que el EML (Enfoque de Marco Lógico) sea el enfoque más utilizado en la evaluación de proyectos?",
            "opciones": [
                  "Un método único de la evaluación de proyectos",
                  "Mejores a los enfoques tradicionales",
                  "Un nuevo concepto para evaluar proyectos",
                  "La utilidad en el ciclo de vida de los proyectos",
                  "Lo utilizan solo los países con grandes proyectos de envergadura"
            ],
            "correcta": 3,
            "resumen": "La utilidad en el ciclo de vida de los proyectos.",
            "fundamentacion": "El Enfoque de Marco Lógico (EML) destaca internacionalmente (utilizado por el BID, Banco Mundial, CEPAL) porque proporciona una herramienta integral de gestión estructurada que articula fin, propósito, componentes y actividades, sirviendo transversalmente en la identificación, formulación, seguimiento y evaluación ex-post a lo largo de todo el ciclo de vida.",
            "id": 18,
            "question": "¿Qué justifica que el EML (Enfoque de Marco Lógico) sea el enfoque más utilizado en la evaluación de proyectos?",
            "options": [
                  "Un método único de la evaluación de proyectos",
                  "Mejores a los enfoques tradicionales",
                  "Un nuevo concepto para evaluar proyectos",
                  "La utilidad en el ciclo de vida de los proyectos",
                  "Lo utilizan solo los países con grandes proyectos de envergadura"
            ],
            "correct": 3,
            "explanation": "El Enfoque de Marco Lógico (EML) destaca internacionalmente (utilizado por el BID, Banco Mundial, CEPAL) porque proporciona una herramienta integral de gestión estructurada que articula fin, propósito, componentes y actividades, sirviendo transversalmente en la identificación, formulación, seguimiento y evaluación ex-post a lo largo de todo el ciclo de vida."
      },
      {
            "modulo": 2,
            "moduloNombre": "Módulo 2: Metodología y Evaluación de Proyectos",
            "enunciado": "¿Qué significado posee el \"Preconcepto del Evaluador\"?",
            "opciones": [
                  "Generar proyectos sin financiamiento",
                  "Evaluar mal el proyecto",
                  "Preconcebir ideas del proyecto lo que vuelve sesgado a los resultados",
                  "No admitir que el proyecto está mal formulado",
                  "Dejarse llevar por el mercado"
            ],
            "correcta": 2,
            "resumen": "Preconcebir ideas del proyecto lo que vuelve sesgado a los resultados.",
            "fundamentacion": "El sesgo o preconcepto del evaluador ocurre cuando el analista asume hipótesis previas no fundamentadas o manipula parámetros técnicos y proyecciones para forzar que el proyecto resulte rentable, perdiendo objetividad e induciendo a malas decisiones de asignación de capital.",
            "id": 19,
            "question": "¿Qué significado posee el \"Preconcepto del Evaluador\"?",
            "options": [
                  "Generar proyectos sin financiamiento",
                  "Evaluar mal el proyecto",
                  "Preconcebir ideas del proyecto lo que vuelve sesgado a los resultados",
                  "No admitir que el proyecto está mal formulado",
                  "Dejarse llevar por el mercado"
            ],
            "correct": 2,
            "explanation": "El sesgo o preconcepto del evaluador ocurre cuando el analista asume hipótesis previas no fundamentadas o manipula parámetros técnicos y proyecciones para forzar que el proyecto resulte rentable, perdiendo objetividad e induciendo a malas decisiones de asignación de capital."
      },
      {
            "modulo": 2,
            "moduloNombre": "Módulo 2: Metodología y Evaluación de Proyectos",
            "enunciado": "¿Cuál de los siguientes es un estudio que se encuentra en la categoría según el \"objetivo y finalidad\" de la inversión?",
            "opciones": [
                  "Estudio para crear nuevas líneas de negocio",
                  "Estudio para medir los hábitos del Proyecto",
                  "Estudio para medir la capacidad competitiva",
                  "Estudio para medir la fuerza laboral",
                  "Estudio para modernizar la planta"
            ],
            "correcta": 0,
            "resumen": "Estudio para crear nuevas líneas de negocio.",
            "fundamentacion": "Según la finalidad del estudio y de la inversión (clasificación de Nassir Sapag Chain), los proyectos se dividen en: estudios para evaluar la creación de un nuevo negocio/nuevas líneas de negocio versus estudios para evaluar modificaciones en proyectos en marcha (outsourcing, internalización, reemplazo o ampliación).",
            "id": 20,
            "question": "¿Cuál de los siguientes es un estudio que se encuentra en la categoría según el \"objetivo y finalidad\" de la inversión?",
            "options": [
                  "Estudio para crear nuevas líneas de negocio",
                  "Estudio para medir los hábitos del Proyecto",
                  "Estudio para medir la capacidad competitiva",
                  "Estudio para medir la fuerza laboral",
                  "Estudio para modernizar la planta"
            ],
            "correct": 0,
            "explanation": "Según la finalidad del estudio y de la inversión (clasificación de Nassir Sapag Chain), los proyectos se dividen en: estudios para evaluar la creación de un nuevo negocio/nuevas líneas de negocio versus estudios para evaluar modificaciones en proyectos en marcha (outsourcing, internalización, reemplazo o ampliación)."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "¿Cuál de las siguientes NO es una característica principal de un proyecto?",
            "opciones": [
                  "Temporalidad",
                  "Unicidad",
                  "Certeza absoluta",
                  "Interdisciplinariedad"
            ],
            "correcta": 2,
            "resumen": "Certeza absoluta",
            "fundamentacion": "El proyecto implica incertidumbre, no certeza absoluta (característica clave: incertidumbre).",
            "id": 81,
            "question": "¿Cuál de las siguientes NO es una característica principal de un proyecto?",
            "options": [
                  "Temporalidad",
                  "Unicidad",
                  "Certeza absoluta",
                  "Interdisciplinariedad"
            ],
            "correct": 2,
            "explanation": "El proyecto implica incertidumbre, no certeza absoluta (característica clave: incertidumbre)."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "Según la clasificación por su naturaleza, un proyecto de inversión pública busca principalmente:",
            "opciones": [
                  "Maximizar rentabilidad financiera",
                  "Generar bienestar social",
                  "Producir bienes tangibles",
                  "Minimizar costos operativos"
            ],
            "correcta": 1,
            "resumen": "Generar bienestar social",
            "fundamentacion": "Inversión pública busca bienestar social e impacto social (salud, educación).",
            "id": 82,
            "question": "Según la clasificación por su naturaleza, un proyecto de inversión pública busca principalmente:",
            "options": [
                  "Maximizar rentabilidad financiera",
                  "Generar bienestar social",
                  "Producir bienes tangibles",
                  "Minimizar costos operativos"
            ],
            "correct": 1,
            "explanation": "Inversión pública busca bienestar social e impacto social (salud, educación)."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "¿Qué tipo de proyectos son aquellos que se benefician mutuamente si se realizan en conjunto?",
            "opciones": [
                  "Independientes",
                  "Mutuamente excluyentes",
                  "Complementarios",
                  "Marginales"
            ],
            "correcta": 2,
            "resumen": "Complementarios",
            "fundamentacion": "Proyectos complementarios: al realizarse juntos potencian beneficios.",
            "id": 83,
            "question": "¿Qué tipo de proyectos son aquellos que se benefician mutuamente si se realizan en conjunto?",
            "options": [
                  "Independientes",
                  "Mutuamente excluyentes",
                  "Complementarios",
                  "Marginales"
            ],
            "correct": 2,
            "explanation": "Proyectos complementarios: al realizarse juntos potencian beneficios."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "Fuente interna de generación de proyectos:",
            "opciones": [
                  "Demanda insatisfecha",
                  "Nuevas tecnologías disponibles",
                  "Reemplazo de equipos por obsolescencia",
                  "Políticas gubernamentales"
            ],
            "correcta": 2,
            "resumen": "Reemplazo de equipos por obsolescencia",
            "fundamentacion": "Reemplazo de equipos es fuente interna; las otras son externas.",
            "id": 84,
            "question": "Fuente interna de generación de proyectos:",
            "options": [
                  "Demanda insatisfecha",
                  "Nuevas tecnologías disponibles",
                  "Reemplazo de equipos por obsolescencia",
                  "Políticas gubernamentales"
            ],
            "correct": 2,
            "explanation": "Reemplazo de equipos es fuente interna; las otras son externas."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "En el ciclo de vida del proyecto, ¿qué fase corresponde a la 'pre-inversión'?",
            "opciones": [
                  "Ejecución y puesta en marcha",
                  "Idea, perfil, prefactibilidad y factibilidad",
                  "Operación y comercialización",
                  "Abandono de activos"
            ],
            "correcta": 1,
            "resumen": "Idea, perfil, prefactibilidad y factibilidad",
            "fundamentacion": "Pre-inversión incluye idea, perfil, prefactibilidad y factibilidad.",
            "id": 85,
            "question": "En el ciclo de vida del proyecto, ¿qué fase corresponde a la 'pre-inversión'?",
            "options": [
                  "Ejecución y puesta en marcha",
                  "Idea, perfil, prefactibilidad y factibilidad",
                  "Operación y comercialización",
                  "Abandono de activos"
            ],
            "correct": 1,
            "explanation": "Pre-inversión incluye idea, perfil, prefactibilidad y factibilidad."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "El VAN (Valor Actual Neto) es un indicador utilizado en la evaluación:",
            "opciones": [
                  "Técnica",
                  "Legal",
                  "Financiera",
                  "Ambiental"
            ],
            "correcta": 2,
            "resumen": "Financiera",
            "fundamentacion": "VAN y TIR son indicadores financieros, evalúan rentabilidad del capital.",
            "id": 86,
            "question": "El VAN (Valor Actual Neto) es un indicador utilizado en la evaluación:",
            "options": [
                  "Técnica",
                  "Legal",
                  "Financiera",
                  "Ambiental"
            ],
            "correct": 2,
            "explanation": "VAN y TIR son indicadores financieros, evalúan rentabilidad del capital."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "¿Qué etapa del proyecto integra el estudio de mercado, estudio técnico y estudio financiero?",
            "opciones": [
                  "Identificación del problema",
                  "Preparación o formulación",
                  "Decisión",
                  "Operación y seguimiento"
            ],
            "correcta": 1,
            "resumen": "Preparación o formulación",
            "fundamentacion": "Preparación/formulación incluye estudios de mercado, técnico, legal y financiero.",
            "id": 87,
            "question": "¿Qué etapa del proyecto integra el estudio de mercado, estudio técnico y estudio financiero?",
            "options": [
                  "Identificación del problema",
                  "Preparación o formulación",
                  "Decisión",
                  "Operación y seguimiento"
            ],
            "correct": 1,
            "explanation": "Preparación/formulación incluye estudios de mercado, técnico, legal y financiero."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "La evaluación de sensibilidad y análisis de riesgo pertenece principalmente a la etapa de:",
            "opciones": [
                  "Ejecución",
                  "Evaluación",
                  "Abandono",
                  "Inversión"
            ],
            "correcta": 1,
            "resumen": "Evaluación",
            "fundamentacion": "En la etapa de evaluación se aplican análisis de sensibilidad y riesgo.",
            "id": 88,
            "question": "La evaluación de sensibilidad y análisis de riesgo pertenece principalmente a la etapa de:",
            "options": [
                  "Ejecución",
                  "Evaluación",
                  "Abandono",
                  "Inversión"
            ],
            "correct": 1,
            "explanation": "En la etapa de evaluación se aplican análisis de sensibilidad y riesgo."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "¿Cuál es la principal diferencia entre estudios de prefactibilidad y factibilidad?",
            "opciones": [
                  "El costo del estudio",
                  "La profundidad y fuentes de información (primarias vs secundarias)",
                  "El tipo de producto",
                  "La metodología legal"
            ],
            "correcta": 1,
            "resumen": "La profundidad y fuentes de información (primarias vs secundarias)",
            "fundamentacion": "Prefactibilidad usa fuentes secundarias; factibilidad requiere fuentes primarias y mayor detalle.",
            "id": 89,
            "question": "¿Cuál es la principal diferencia entre estudios de prefactibilidad y factibilidad?",
            "options": [
                  "El costo del estudio",
                  "La profundidad y fuentes de información (primarias vs secundarias)",
                  "El tipo de producto",
                  "La metodología legal"
            ],
            "correct": 1,
            "explanation": "Prefactibilidad usa fuentes secundarias; factibilidad requiere fuentes primarias y mayor detalle."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "Dentro de la clasificación por área organizacional, un proyecto de 'lanzamiento de nuevo producto' corresponde a:",
            "opciones": [
                  "Proyecto financiero",
                  "Proyecto de mercadotecnia",
                  "Proyecto administrativo",
                  "Proyecto de producción"
            ],
            "correcta": 1,
            "resumen": "Proyecto de mercadotecnia",
            "fundamentacion": "Mercadotecnia abarca lanzamientos, promoción y estudio de mercado.",
            "id": 90,
            "question": "Dentro de la clasificación por área organizacional, un proyecto de 'lanzamiento de nuevo producto' corresponde a:",
            "options": [
                  "Proyecto financiero",
                  "Proyecto de mercadotecnia",
                  "Proyecto administrativo",
                  "Proyecto de producción"
            ],
            "correct": 1,
            "explanation": "Mercadotecnia abarca lanzamientos, promoción y estudio de mercado."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "¿Qué indicador mide el tiempo necesario para recuperar la inversión?",
            "opciones": [
                  "TIR",
                  "Relación B/C",
                  "Período de recuperación",
                  "Valor actual neto"
            ],
            "correcta": 2,
            "resumen": "Período de recuperación",
            "fundamentacion": "Período de recuperación (payback) mide tiempo de retorno de la inversión.",
            "id": 91,
            "question": "¿Qué indicador mide el tiempo necesario para recuperar la inversión?",
            "options": [
                  "TIR",
                  "Relación B/C",
                  "Período de recuperación",
                  "Valor actual neto"
            ],
            "correct": 2,
            "explanation": "Período de recuperación (payback) mide tiempo de retorno de la inversión."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "Ejemplo de proyecto de inversión privada:",
            "opciones": [
                  "Construcción de un hospital público",
                  "Desarrollo de un nuevo software por una empresa",
                  "Programa de alfabetización",
                  "Construcción de una carretera estatal"
            ],
            "correcta": 1,
            "resumen": "Desarrollo de un nuevo software por una empresa",
            "fundamentacion": "Desarrollo de software con fines de lucro es inversión privada.",
            "id": 92,
            "question": "Ejemplo de proyecto de inversión privada:",
            "options": [
                  "Construcción de un hospital público",
                  "Desarrollo de un nuevo software por una empresa",
                  "Programa de alfabetización",
                  "Construcción de una carretera estatal"
            ],
            "correct": 1,
            "explanation": "Desarrollo de software con fines de lucro es inversión privada."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "¿Cuál es una fuente externa de origen de proyectos?",
            "opciones": [
                  "Necesidades de expansión",
                  "Modernización tecnológica",
                  "Cambios en el entorno económico",
                  "Cumplimiento normativo interno"
            ],
            "correcta": 2,
            "resumen": "Cambios en el entorno económico",
            "fundamentacion": "Cambios económicos, sociales o políticos son del entorno externo.",
            "id": 93,
            "question": "¿Cuál es una fuente externa de origen de proyectos?",
            "options": [
                  "Necesidades de expansión",
                  "Modernización tecnológica",
                  "Cambios en el entorno económico",
                  "Cumplimiento normativo interno"
            ],
            "correct": 2,
            "explanation": "Cambios económicos, sociales o políticos son del entorno externo."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "Fase del proyecto donde se generan los flujos de efectivo continuos:",
            "opciones": [
                  "Pre-inversión",
                  "Inversión",
                  "Operación",
                  "Cierre"
            ],
            "correcta": 2,
            "resumen": "Operación",
            "fundamentacion": "Operación produce ingresos y flujos de efectivo.",
            "id": 94,
            "question": "Fase del proyecto donde se generan los flujos de efectivo continuos:",
            "options": [
                  "Pre-inversión",
                  "Inversión",
                  "Operación",
                  "Cierre"
            ],
            "correct": 2,
            "explanation": "Operación produce ingresos y flujos de efectivo."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "En la metodología de evaluación, los árboles de decisión y simulación Monte Carlo son técnicas de:",
            "opciones": [
                  "Evaluación determinista",
                  "Evaluación de riesgo",
                  "Evaluación legal",
                  "Evaluación ambiental"
            ],
            "correcta": 1,
            "resumen": "Evaluación de riesgo",
            "fundamentacion": "Simulación Monte Carlo y árboles evalúan riesgo e incertidumbre.",
            "id": 95,
            "question": "En la metodología de evaluación, los árboles de decisión y simulación Monte Carlo son técnicas de:",
            "options": [
                  "Evaluación determinista",
                  "Evaluación de riesgo",
                  "Evaluación legal",
                  "Evaluación ambiental"
            ],
            "correct": 1,
            "explanation": "Simulación Monte Carlo y árboles evalúan riesgo e incertidumbre."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "¿Qué tipo de evaluación responde '¿El proyecto beneficia a la sociedad?'",
            "opciones": [
                  "Financiera",
                  "Económica social",
                  "Técnica",
                  "Ambiental"
            ],
            "correcta": 1,
            "resumen": "Económica social",
            "fundamentacion": "Evaluación económica social mide beneficio a la sociedad (precios sombra).",
            "id": 96,
            "question": "¿Qué tipo de evaluación responde '¿El proyecto beneficia a la sociedad?'",
            "options": [
                  "Financiera",
                  "Económica social",
                  "Técnica",
                  "Ambiental"
            ],
            "correct": 1,
            "explanation": "Evaluación económica social mide beneficio a la sociedad (precios sombra)."
      },
      {
            "modulo": 1,
            "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
            "enunciado": "¿Los proyectos en los que solo uno de ellos puede realizarse (por ejemplo dos ubicaciones alternativas) se denominan?",
            "opciones": [
                  "Independientes",
                  "Complementarios",
                  "Mutuamente excluyentes",
                  "Concurrentes"
            ],
            "correcta": 2,
            "resumen": "Mutuamente excluyentes",
            "fundamentacion": "Mutuamente excluyentes: elegir uno impide el otro.",
            "id": 97,
            "question": "¿Los proyectos en los que solo uno de ellos puede realizarse (por ejemplo dos ubicaciones alternativas) se denominan?",
            "options": [
                  "Independientes",
                  "Complementarios",
                  "Mutuamente excluyentes",
                  "Concurrentes"
            ],
            "correct": 2,
            "explanation": "Mutuamente excluyentes: elegir uno impide el otro."
      },
      {
            "modulo": 2,
            "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
            "enunciado": "¿Cuál es la función administrativa que predetermina un curso de acción para alcanzar objetivos?",
            "opciones": [
                  "Organización",
                  "Dirección",
                  "Planeación",
                  "Control"
            ],
            "correcta": 2,
            "resumen": "Planeación",
            "fundamentacion": "Planeación es la función que define objetivos y acciones futuras.",
            "id": 98,
            "question": "¿Cuál es la función administrativa que predetermina un curso de acción para alcanzar objetivos?",
            "options": [
                  "Organización",
                  "Dirección",
                  "Planeación",
                  "Control"
            ],
            "correct": 2,
            "explanation": "Planeación es la función que define objetivos y acciones futuras."
      },
      {
            "modulo": 2,
            "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
            "enunciado": "¿Qué significa 'scope creep' en la gestión de proyectos?",
            "opciones": [
                  "Reducción de costos",
                  "Crecimiento no controlado del alcance",
                  "Asignación eficiente de recursos",
                  "Evaluación de riesgos"
            ],
            "correcta": 1,
            "resumen": "Crecimiento no controlado del alcance",
            "fundamentacion": "Scope creep es expansión del alcance sin control, causa fracasos.",
            "id": 99,
            "question": "¿Qué significa 'scope creep' en la gestión de proyectos?",
            "options": [
                  "Reducción de costos",
                  "Crecimiento no controlado del alcance",
                  "Asignación eficiente de recursos",
                  "Evaluación de riesgos"
            ],
            "correct": 1,
            "explanation": "Scope creep es expansión del alcance sin control, causa fracasos."
      },
      {
            "modulo": 2,
            "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
            "enunciado": "Dentro de la organización del proyecto, la estructura matricial implica:",
            "opciones": [
                  "Dependencia única al director",
                  "Doble cadena de mando (función y proyecto)",
                  "Solo jefes funcionales",
                  "Equipo autónomo sin jerarquía"
            ],
            "correcta": 1,
            "resumen": "Doble cadena de mando (función y proyecto)",
            "fundamentacion": "Estructura matricial combina autoridad funcional y por proyecto.",
            "id": 100,
            "question": "Dentro de la organización del proyecto, la estructura matricial implica:",
            "options": [
                  "Dependencia única al director",
                  "Doble cadena de mando (función y proyecto)",
                  "Solo jefes funcionales",
                  "Equipo autónomo sin jerarquía"
            ],
            "correct": 1,
            "explanation": "Estructura matricial combina autoridad funcional y por proyecto."
      },
      {
            "modulo": 2,
            "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
            "enunciado": "¿Qué herramienta descompone el trabajo en paquetes de trabajo?",
            "opciones": [
                  "Diagrama de Gantt",
                  "Estructura de Desglose de Trabajo (WBS)",
                  "Matriz RACI",
                  "Flujo de caja"
            ],
            "correcta": 1,
            "resumen": "Estructura de Desglose de Trabajo (WBS)",
            "fundamentacion": "WBS (Work Breakdown Structure) descompone el proyecto en tareas.",
            "id": 101,
            "question": "¿Qué herramienta descompone el trabajo en paquetes de trabajo?",
            "options": [
                  "Diagrama de Gantt",
                  "Estructura de Desglose de Trabajo (WBS)",
                  "Matriz RACI",
                  "Flujo de caja"
            ],
            "correct": 1,
            "explanation": "WBS (Work Breakdown Structure) descompone el proyecto en tareas."
      },
      {
            "modulo": 2,
            "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
            "enunciado": "¿Quién tiene la responsabilidad de inspirar y motivar al equipo más allá de la supervisión?",
            "opciones": [
                  "El patrocinador",
                  "El líder del proyecto",
                  "El analista financiero",
                  "El cliente"
            ],
            "correcta": 1,
            "resumen": "El líder del proyecto",
            "fundamentacion": "Liderazgo es inspirar; dirección incluye liderazgo.",
            "id": 102,
            "question": "¿Quién tiene la responsabilidad de inspirar y motivar al equipo más allá de la supervisión?",
            "options": [
                  "El patrocinador",
                  "El líder del proyecto",
                  "El analista financiero",
                  "El cliente"
            ],
            "correct": 1,
            "explanation": "Liderazgo es inspirar; dirección incluye liderazgo."
      },
      {
            "modulo": 2,
            "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
            "enunciado": "La designación de responsables debe venir acompañada de:",
            "opciones": [
                  "Mayor presupuesto",
                  "Autoridad necesaria para cumplir",
                  "Jornada extendida",
                  "Revisión diaria"
            ],
            "correcta": 1,
            "resumen": "Autoridad necesaria para cumplir",
            "fundamentacion": "Responsabilidad requiere autoridad equivalente.",
            "id": 103,
            "question": "La designación de responsables debe venir acompañada de:",
            "options": [
                  "Mayor presupuesto",
                  "Autoridad necesaria para cumplir",
                  "Jornada extendida",
                  "Revisión diaria"
            ],
            "correct": 1,
            "explanation": "Responsabilidad requiere autoridad equivalente."
      },
      {
            "modulo": 2,
            "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
            "enunciado": "¿Cuál es el objetivo principal del estudio de factibilidad?",
            "opciones": [
                  "Descartar proyectos rápidamente",
                  "Determinar con certeza la viabilidad integral",
                  "Solo evaluar mercado",
                  "Definir el nombre del proyecto"
            ],
            "correcta": 1,
            "resumen": "Determinar con certeza la viabilidad integral",
            "fundamentacion": "Factibilidad determina viabilidad técnica, económica, financiera, legal y ambiental.",
            "id": 104,
            "question": "¿Cuál es el objetivo principal del estudio de factibilidad?",
            "options": [
                  "Descartar proyectos rápidamente",
                  "Determinar con certeza la viabilidad integral",
                  "Solo evaluar mercado",
                  "Definir el nombre del proyecto"
            ],
            "correct": 1,
            "explanation": "Factibilidad determina viabilidad técnica, económica, financiera, legal y ambiental."
      },
      {
            "modulo": 2,
            "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
            "enunciado": "Los estudios de prefactibilidad se basan principalmente en:",
            "opciones": [
                  "Fuentes primarias",
                  "Fuentes secundarias",
                  "Simulación avanzada",
                  "Prototipos físicos"
            ],
            "correcta": 1,
            "resumen": "Fuentes secundarias",
            "fundamentacion": "Prefactibilidad usa información secundaria (estadísticas, publicaciones).",
            "id": 105,
            "question": "Los estudios de prefactibilidad se basan principalmente en:",
            "options": [
                  "Fuentes primarias",
                  "Fuentes secundarias",
                  "Simulación avanzada",
                  "Prototipos físicos"
            ],
            "correct": 1,
            "explanation": "Prefactibilidad usa información secundaria (estadísticas, publicaciones)."
      },
      {
            "modulo": 2,
            "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
            "enunciado": "¿Qué estudio dentro del plan de factibilidad analiza tamaño, localización óptima y procesos?",
            "opciones": [
                  "Estudio de mercado",
                  "Estudio técnico",
                  "Estudio financiero",
                  "Estudio legal"
            ],
            "correcta": 1,
            "resumen": "Estudio técnico",
            "fundamentacion": "Estudio técnico aborda tamaño, localización, ingeniería.",
            "id": 106,
            "question": "¿Qué estudio dentro del plan de factibilidad analiza tamaño, localización óptima y procesos?",
            "options": [
                  "Estudio de mercado",
                  "Estudio técnico",
                  "Estudio financiero",
                  "Estudio legal"
            ],
            "correct": 1,
            "explanation": "Estudio técnico aborda tamaño, localización, ingeniería."
      },
      {
            "modulo": 2,
            "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
            "enunciado": "La delegación de actividades en un proyecto busca:",
            "opciones": [
                  "Concentrar todo el poder",
                  "Empoderar al equipo y agilizar decisiones",
                  "Reducir costos solo",
                  "Eliminar la planeación"
            ],
            "correcta": 1,
            "resumen": "Empoderar al equipo y agilizar decisiones",
            "fundamentacion": "Delegación efectiva libera al director y empodera al equipo.",
            "id": 107,
            "question": "La delegación de actividades en un proyecto busca:",
            "options": [
                  "Concentrar todo el poder",
                  "Empoderar al equipo y agilizar decisiones",
                  "Reducir costos solo",
                  "Eliminar la planeación"
            ],
            "correct": 1,
            "explanation": "Delegación efectiva libera al director y empodera al equipo."
      },
      {
            "modulo": 2,
            "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
            "enunciado": "¿Cuál es la diferencia clave entre un programa y un proyecto?",
            "opciones": [
                  "Un programa es más pequeño",
                  "Un programa agrupa proyectos relacionados",
                  "No hay diferencia",
                  "El programa no tiene objetivos"
            ],
            "correcta": 1,
            "resumen": "Un programa agrupa proyectos relacionados",
            "fundamentacion": "Programa es conjunto de proyectos coordinados para beneficio mayor.",
            "id": 108,
            "question": "¿Cuál es la diferencia clave entre un programa y un proyecto?",
            "options": [
                  "Un programa es más pequeño",
                  "Un programa agrupa proyectos relacionados",
                  "No hay diferencia",
                  "El programa no tiene objetivos"
            ],
            "correct": 1,
            "explanation": "Programa es conjunto de proyectos coordinados para beneficio mayor."
      },
      {
            "modulo": 2,
            "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
            "enunciado": "¿Qué metodología de evaluación incluye el análisis del entorno y los estudios técnico, de mercado y financiero?",
            "opciones": [
                  "Solo análisis de sensibilidad",
                  "Metodología tradicional de evaluación de proyectos",
                  "Control de calidad",
                  "Gestión de stakeholders"
            ],
            "correcta": 1,
            "resumen": "Metodología tradicional de evaluación de proyectos",
            "fundamentacion": "Metodología típica: entorno, estudios, rentabilidad, riesgos.",
            "id": 109,
            "question": "¿Qué metodología de evaluación incluye el análisis del entorno y los estudios técnico, de mercado y financiero?",
            "options": [
                  "Solo análisis de sensibilidad",
                  "Metodología tradicional de evaluación de proyectos",
                  "Control de calidad",
                  "Gestión de stakeholders"
            ],
            "correct": 1,
            "explanation": "Metodología típica: entorno, estudios, rentabilidad, riesgos."
      },
      {
            "modulo": 2,
            "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
            "enunciado": "En la organización del trabajo en equipo, ¿qué define canales de comunicación y resolución de conflictos?",
            "opciones": [
                  "El acta de constitución",
                  "La dinámica y reglas del equipo",
                  "La WBS",
                  "El presupuesto"
            ],
            "correcta": 1,
            "resumen": "La dinámica y reglas del equipo",
            "fundamentacion": "Organización del trabajo en equipo define reglas, comunicación, conflictos.",
            "id": 110,
            "question": "En la organización del trabajo en equipo, ¿qué define canales de comunicación y resolución de conflictos?",
            "options": [
                  "El acta de constitución",
                  "La dinámica y reglas del equipo",
                  "La WBS",
                  "El presupuesto"
            ],
            "correct": 1,
            "explanation": "Organización del trabajo en equipo define reglas, comunicación, conflictos."
      },
      {
            "modulo": 2,
            "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
            "enunciado": "La definición de cada uno de los elementos del proyecto y su justificación se documenta en:",
            "opciones": [
                  "Business Case (justificación del negocio)",
                  "Plan de calidad",
                  "Matriz de comunicación",
                  "Registro de interesados"
            ],
            "correcta": 0,
            "resumen": "Business Case (justificación del negocio)",
            "fundamentacion": "Business Case justifica el proyecto con beneficios, costos y razón de ser.",
            "id": 111,
            "question": "La definición de cada uno de los elementos del proyecto y su justificación se documenta en:",
            "options": [
                  "Business Case (justificación del negocio)",
                  "Plan de calidad",
                  "Matriz de comunicación",
                  "Registro de interesados"
            ],
            "correct": 0,
            "explanation": "Business Case justifica el proyecto con beneficios, costos y razón de ser."
      },
      {
            "modulo": 2,
            "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
            "enunciado": "¿Qué tipo de estructura organizacional el equipo depende completamente del director del proyecto?",
            "opciones": [
                  "Funcional",
                  "Matricial débil",
                  "Dedicada o por proyectos",
                  "Redes"
            ],
            "correcta": 2,
            "resumen": "Dedicada o por proyectos",
            "fundamentacion": "Estructura dedicada (proyectizada) reporta al director del proyecto.",
            "id": 112,
            "question": "¿Qué tipo de estructura organizacional el equipo depende completamente del director del proyecto?",
            "options": [
                  "Funcional",
                  "Matricial débil",
                  "Dedicada o por proyectos",
                  "Redes"
            ],
            "correct": 2,
            "explanation": "Estructura dedicada (proyectizada) reporta al director del proyecto."
      },
      {
            "modulo": 2,
            "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
            "enunciado": "El estudio financiero dentro del proyecto incluye:",
            "opciones": [
                  "Tamaño de planta",
                  "Flujos de efectivo proyectados",
                  "Segmentación de mercado",
                  "Marco legal"
            ],
            "correcta": 1,
            "resumen": "Flujos de efectivo proyectados",
            "fundamentacion": "Estudio financiero elabora flujos de efectivo, presupuestos.",
            "id": 113,
            "question": "El estudio financiero dentro del proyecto incluye:",
            "options": [
                  "Tamaño de planta",
                  "Flujos de efectivo proyectados",
                  "Segmentación de mercado",
                  "Marco legal"
            ],
            "correct": 1,
            "explanation": "Estudio financiero elabora flujos de efectivo, presupuestos."
      },
      {
            "modulo": 2,
            "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
            "enunciado": "La dirección del proyecto responde a la pregunta:",
            "opciones": [
                  "¿Qué hacer?",
                  "¿Quién hace qué?",
                  "¿Cómo se ejecuta el plan?",
                  "¿Cuándo se evalúa?"
            ],
            "correcta": 2,
            "resumen": "¿Cómo se ejecuta el plan?",
            "fundamentacion": "Dirección se enfoca en cómo ejecutar el plan, liderazgo y coordinación.",
            "id": 114,
            "question": "La dirección del proyecto responde a la pregunta:",
            "options": [
                  "¿Qué hacer?",
                  "¿Quién hace qué?",
                  "¿Cómo se ejecuta el plan?",
                  "¿Cuándo se evalúa?"
            ],
            "correct": 2,
            "explanation": "Dirección se enfoca en cómo ejecutar el plan, liderazgo y coordinación."
      }
]
    },
    {
      id: "cap2",
      number: "2",
      title: "Estudio del Mercado",
      shortTitle: "2. Estudio del Mercado",
      icon: "fa-chart-line",
      color: "#10b981",
      accent: "rgba(16, 185, 129, 0.15)",
      badge: "Oferta, Demanda, Precios y Comercialización",
      description: "Cuantificación de la demanda insatisfecha, Consumo Nacional Aparente (CNA), métodos de pronóstico (mínimos cuadrados, series temporales, regresión multivariada, prueba F), técnicas de muestreo y estratificación, canales de comercialización y caso práctico mermeladas.",
      reading: {
        summary: "El estudio de mercado es la primera parte formal de la evaluación. Determina si existe una demanda potencial insatisfecha que justifique instalar una unidad productiva, analizando la oferta existente, la política de precios y los canales de distribución más eficaces.",
        sections: [
          {
            id: "cap2-sec1",
            title: "2.1 Objetivos y Estructura del Análisis de Mercado",
            content: `
              <p>Un <strong>mercado</strong> es el área en que confluyen las fuerzas de la oferta y la demanda para realizar transacciones de bienes y servicios a precios determinados.</p>
              <div class="concept-callout">
                <h4>Las 4 Variables Fundamentales</h4>
                <p>Análisis de Mercado = Análisis de la Oferta + Análisis de la Demanda + Análisis de los Precios + Análisis de la Comercialización &rarr; Conclusiones.</p>
              </div>
            `
          },
          {
            id: "cap2-sec2",
            title: "2.2 Análisis de la Demanda y Consumo Nacional Aparente (CNA)",
            content: `
              <p>La <strong>demanda</strong> es la cantidad de bienes y servicios que el mercado requiere para satisfacer una necesidad específica.</p>
              <div class="formula-box">
                <span class="formula-title">Fórmula del Consumo Nacional Aparente (CNA):</span>
                <div class="math-expr">Demanda = CNA = Producción Nacional + Importaciones - Exportaciones</div>
              </div>
            `
          },
          {
            id: "cap2-sec3",
            title: "2.3 Métodos de Proyección de la Demanda y Regresión",
            content: `
              <p>Para proyectar la demanda se analizan <strong>series de tiempo</strong> y modelos causales con regresión de mínimos cuadrados. Se aplica la <strong>prueba F (ANOVA)</strong> con significancia máxima del 5% para descartar variables ilegítimas.</p>
            `
          },
          {
            id: "cap2-sec4",
            title: "2.4 Muestreo y Estratificación",
            content: `
              <div class="formula-box">
                <span class="formula-title">Tamaño de Muestra (n):</span>
                <div class="math-expr">n = \frac{\sigma^2 Z^2}{E^2}</div>
                <small>Donde Z = 1.96 (95% confianza), &sigma; = desviación estándar, E = error permisible.</small>
              </div>
            `
          },
          {
            id: "cap2-sec5",
            title: "2.5 Oferta, Precios y Comercialización",
            content: `
              <p>Los precios <strong>se proyectan con la tasa de inflación esperada</strong> (no con curvas rígidas). Los canales para productos populares abarcan desde el directo (1A) hasta el mayorista-minorista (1C y 1D).</p>
            `
          }
        ]
      },
      quiz: [
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "Un \"Monopolio\" es:",
            "opciones": [
                  "Cuando existe un solo demandante del producto o servicio",
                  "Cuando existe un solo proveedor",
                  "Cuando solo existe un solo tipo de insumo",
                  "Cuando existe un solo oferente del producto",
                  "Cuando el precio de los bienes baja"
            ],
            "correcta": 3,
            "resumen": "Cuando existe un solo oferente del producto.",
            "fundamentacion": "Por definición microeconómica, una estructura de mercado en monopolio se caracteriza por la existencia de un único productor/vendedor (oferente) que satisface toda la demanda del mercado y ejerce poder sobre la fijación de precios, careciendo de sustitutos cercanos.",
            "id": 21,
            "question": "Un \"Monopolio\" es:",
            "options": [
                  "Cuando existe un solo demandante del producto o servicio",
                  "Cuando existe un solo proveedor",
                  "Cuando solo existe un solo tipo de insumo",
                  "Cuando existe un solo oferente del producto",
                  "Cuando el precio de los bienes baja"
            ],
            "correct": 3,
            "explanation": "Por definición microeconómica, una estructura de mercado en monopolio se caracteriza por la existencia de un único productor/vendedor (oferente) que satisface toda la demanda del mercado y ejerce poder sobre la fijación de precios, careciendo de sustitutos cercanos."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "¿Cuál de los siguientes aspectos es considerado en un \"Estudio de Mercado\"?",
            "opciones": [
                  "Demostrar que existe demanda de mercado para el producto",
                  "Determinar el valor de los insumos",
                  "Calcular el precio de los insumos",
                  "Calcular el precio del producto",
                  "Revisar los flujos de caja"
            ],
            "correcta": 0,
            "resumen": "Demostrar que existe demanda de mercado para el producto.",
            "fundamentacion": "El objetivo primario e insustituible del estudio de mercado es ratificar empíricamente la existencia de un conjunto suficiente de consumidores dispuestos a adquirir el bien o servicio propuesto a determinados precios y calidades. Si no hay demanda demostrada, el proyecto carece de base.",
            "id": 22,
            "question": "¿Cuál de los siguientes aspectos es considerado en un \"Estudio de Mercado\"?",
            "options": [
                  "Demostrar que existe demanda de mercado para el producto",
                  "Determinar el valor de los insumos",
                  "Calcular el precio de los insumos",
                  "Calcular el precio del producto",
                  "Revisar los flujos de caja"
            ],
            "correct": 0,
            "explanation": "El objetivo primario e insustituible del estudio de mercado es ratificar empíricamente la existencia de un conjunto suficiente de consumidores dispuestos a adquirir el bien o servicio propuesto a determinados precios y calidades. Si no hay demanda demostrada, el proyecto carece de base."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "La elasticidad de la demanda es importante para determinar cambios en los precios de los productos, ya que:",
            "opciones": [
                  "Cambios en la cantidad demandada afectan la cantidad ofrecida",
                  "Cambios en los precios no significan necesariamente mayores ingresos",
                  "Cambios en la demanda alteran el precio de equilibrio",
                  "Cambios tecnológicos aumentan la oferta y precio de los productos",
                  "Cambios en la cantidad alteran la cantidad ofrecida del producto"
            ],
            "correcta": 1,
            "resumen": "Cambios en los precios no significan necesariamente mayores ingresos.",
            "fundamentacion": "La elasticidad precio de la demanda mide la sensibilidad porcentual del consumo ante variaciones en el precio. Si la demanda es elástica (|Ep| > 1), un alza de precios contraerá tanto la cantidad que los ingresos totales caerán; si es inelástica, subir los precios incrementará los ingresos totales. Por ello, alterar el precio no implica automáticamente ganar más.",
            "id": 23,
            "question": "La elasticidad de la demanda es importante para determinar cambios en los precios de los productos, ya que:",
            "options": [
                  "Cambios en la cantidad demandada afectan la cantidad ofrecida",
                  "Cambios en los precios no significan necesariamente mayores ingresos",
                  "Cambios en la demanda alteran el precio de equilibrio",
                  "Cambios tecnológicos aumentan la oferta y precio de los productos",
                  "Cambios en la cantidad alteran la cantidad ofrecida del producto"
            ],
            "correct": 1,
            "explanation": "La elasticidad precio de la demanda mide la sensibilidad porcentual del consumo ante variaciones en el precio. Si la demanda es elástica (|Ep| > 1), un alza de precios contraerá tanto la cantidad que los ingresos totales caerán; si es inelástica, subir los precios incrementará los ingresos totales. Por ello, alterar el precio no implica automáticamente ganar más."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "Ante un aumento en la demanda de mercado, ¿qué sucede con el precio y cantidad demandada de equilibrio?",
            "opciones": [
                  "Ambos disminuyen",
                  "Ambos aumentan",
                  "El precio sube y la cantidad baja",
                  "El precio baja y la cantidad de equilibrio",
                  "Solo se altera el precio de equilibrio"
            ],
            "correcta": 1,
            "resumen": "Ambos aumentan.",
            "fundamentacion": "En el modelo clásico de oferta y demanda con pendiente normal, un desplazamiento hacia la derecha de la curva de demanda (ceteris paribus) genera un exceso de demanda temporal que empuja el precio hacia arriba y estimula a los productores a ofertar mayor cantidad, alcanzando un nuevo equilibrio con mayor precio y mayor cantidad transada.",
            "id": 24,
            "question": "Ante un aumento en la demanda de mercado, ¿qué sucede con el precio y cantidad demandada de equilibrio?",
            "options": [
                  "Ambos disminuyen",
                  "Ambos aumentan",
                  "El precio sube y la cantidad baja",
                  "El precio baja y la cantidad de equilibrio",
                  "Solo se altera el precio de equilibrio"
            ],
            "correct": 1,
            "explanation": "En el modelo clásico de oferta y demanda con pendiente normal, un desplazamiento hacia la derecha de la curva de demanda (ceteris paribus) genera un exceso de demanda temporal que empuja el precio hacia arriba y estimula a los productores a ofertar mayor cantidad, alcanzando un nuevo equilibrio con mayor precio y mayor cantidad transada."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "¿Qué pasaría si en la industria existen productos muy diferenciados?",
            "opciones": [
                  "Se genera especialización",
                  "Se generan barreras de entrada a nuevos consumidores",
                  "Se genera mayor competencia",
                  "Se genera mayor utilidad para las empresas competidoras",
                  "La industria elimina las barreras de entrada"
            ],
            "correcta": 0,
            "resumen": "Se genera especialización.",
            "fundamentacion": "La diferenciación acusada de productos fomenta que cada competidor atienda nichos específicos mediante ventajas competitivas únicas (especialización), fidelizando clientes y reduciendo la sustitución directa por precio.",
            "id": 25,
            "question": "¿Qué pasaría si en la industria existen productos muy diferenciados?",
            "options": [
                  "Se genera especialización",
                  "Se generan barreras de entrada a nuevos consumidores",
                  "Se genera mayor competencia",
                  "Se genera mayor utilidad para las empresas competidoras",
                  "La industria elimina las barreras de entrada"
            ],
            "correct": 0,
            "explanation": "La diferenciación acusada de productos fomenta que cada competidor atienda nichos específicos mediante ventajas competitivas únicas (especialización), fidelizando clientes y reduciendo la sustitución directa por precio."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "Los productos según su tipo de consumo se clasifican en:",
            "opciones": [
                  "Bienes Duraderos y Bienes Perecederos",
                  "Bienes Sustitutos y Bienes Complementarios",
                  "Bienes Reales y Bienes Demandados",
                  "Bienes Ofrecidos y Bienes Producidos",
                  "Bienes de Consumo y Bienes de Capital"
            ],
            "correcta": 0,
            "resumen": "Bienes Duraderos y Bienes Perecederos.",
            "fundamentacion": "Desde el punto de vista del comportamiento temporal del consumo y durabilidad del bien, los productos se categorizan fundamentalmente en Bienes Duraderos (utilizables por periodos prolongados como electrodomésticos o autos) y Perecederos (consumibles inmediatamente o de rápida caducidad como alimentos).",
            "id": 26,
            "question": "Los productos según su tipo de consumo se clasifican en:",
            "options": [
                  "Bienes Duraderos y Bienes Perecederos",
                  "Bienes Sustitutos y Bienes Complementarios",
                  "Bienes Reales y Bienes Demandados",
                  "Bienes Ofrecidos y Bienes Producidos",
                  "Bienes de Consumo y Bienes de Capital"
            ],
            "correct": 0,
            "explanation": "Desde el punto de vista del comportamiento temporal del consumo y durabilidad del bien, los productos se categorizan fundamentalmente en Bienes Duraderos (utilizables por periodos prolongados como electrodomésticos o autos) y Perecederos (consumibles inmediatamente o de rápida caducidad como alimentos)."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "Las \"economías de escala\", son:",
            "opciones": [
                  "Capacidad de atender una mayor demanda de mercado",
                  "Capacidad de ofrecer mayor cantidad de productos",
                  "Capacidad de negociación con los productores",
                  "Capacidad de uso de instalaciones para mantener bajos costos",
                  "Capacidad de aumentar el poder de negociación con los proveedores de insumos"
            ],
            "correcta": 3,
            "resumen": "Capacidad de uso de instalaciones para mantener bajos costos.",
            "fundamentacion": "Las economías de escala surgen cuando la empresa expande su capacidad productiva y nivel de producción, diluyendo sus costos fijos y optimizando procesos en sus instalaciones, lo que provoca que el costo medio unitario de producción disminuya conforme aumenta el volumen.",
            "id": 27,
            "question": "Las \"economías de escala\", son:",
            "options": [
                  "Capacidad de atender una mayor demanda de mercado",
                  "Capacidad de ofrecer mayor cantidad de productos",
                  "Capacidad de negociación con los productores",
                  "Capacidad de uso de instalaciones para mantener bajos costos",
                  "Capacidad de aumentar el poder de negociación con los proveedores de insumos"
            ],
            "correct": 3,
            "explanation": "Las economías de escala surgen cuando la empresa expande su capacidad productiva y nivel de producción, diluyendo sus costos fijos y optimizando procesos en sus instalaciones, lo que provoca que el costo medio unitario de producción disminuya conforme aumenta el volumen."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "¿Cuál de las siguientes se considera una \"fuerza competitiva\"?",
            "opciones": [
                  "Amenaza de nuevos competidores",
                  "La calidad del producto",
                  "Los medios de producción",
                  "La velocidad de la reacción de la demanda",
                  "El aumento del precio de los productos"
            ],
            "correcta": 0,
            "resumen": "Amenaza de nuevos competidores.",
            "fundamentacion": "Bajo el clásico modelo de las 5 Fuerzas de Michael Porter para el análisis de atractivo industrial, las fuerzas son: 1) Amenaza de nuevos entrantes, 2) Poder de clientes, 3) Poder de proveedores, 4) Amenaza de sustitutos y 5) Rivalidad interna.",
            "id": 28,
            "question": "¿Cuál de las siguientes se considera una \"fuerza competitiva\"?",
            "options": [
                  "Amenaza de nuevos competidores",
                  "La calidad del producto",
                  "Los medios de producción",
                  "La velocidad de la reacción de la demanda",
                  "El aumento del precio de los productos"
            ],
            "correct": 0,
            "explanation": "Bajo el clásico modelo de las 5 Fuerzas de Michael Porter para el análisis de atractivo industrial, las fuerzas son: 1) Amenaza de nuevos entrantes, 2) Poder de clientes, 3) Poder de proveedores, 4) Amenaza de sustitutos y 5) Rivalidad interna."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "¿Qué es el \"poder negociador\" de los clientes como fuerza competitiva?",
            "opciones": [
                  "Cuando los clientes no desean comprar el producto ofrecido",
                  "Cuando los clientes demandan una mayor cantidad de productos a la ofrecida",
                  "Cuando los clientes reclaman por los productos y exigen su devolución",
                  "Cuando los clientes poseen muchas alternativas de productos en el mercado y presionan a la baja en el precio",
                  "Cuando los clientes se trasladan de zona geográfica"
            ],
            "correcta": 3,
            "resumen": "Cuando los clientes poseen muchas alternativas de productos en el mercado y presionan a la baja en el precio.",
            "fundamentacion": "El poder de los compradores reside en su capacidad de forzar reducciones de precios, exigir mayor calidad o mejores condiciones comerciales al contar con un bajo costo de cambio y múltiples opciones sustitutas en el mercado.",
            "id": 29,
            "question": "¿Qué es el \"poder negociador\" de los clientes como fuerza competitiva?",
            "options": [
                  "Cuando los clientes no desean comprar el producto ofrecido",
                  "Cuando los clientes demandan una mayor cantidad de productos a la ofrecida",
                  "Cuando los clientes reclaman por los productos y exigen su devolución",
                  "Cuando los clientes poseen muchas alternativas de productos en el mercado y presionan a la baja en el precio",
                  "Cuando los clientes se trasladan de zona geográfica"
            ],
            "correct": 3,
            "explanation": "El poder de los compradores reside en su capacidad de forzar reducciones de precios, exigir mayor calidad o mejores condiciones comerciales al contar con un bajo costo de cambio y múltiples opciones sustitutas en el mercado."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "El \"poder negociador\" de los clientes aumenta cuando:",
            "opciones": [
                  "El cliente no sabe dónde comprar",
                  "El cliente no conoce los productos sustitutos",
                  "El cliente no conoce a los proveedores",
                  "El cliente conoce a los distribuidores",
                  "El cliente posee total información de la oferta de mercado"
            ],
            "correcta": 4,
            "resumen": "El cliente posee total información de la oferta de mercado.",
            "fundamentacion": "La simetría y transparencia informativa sobre costos, precios de la competencia y características de los productos otorga al comprador un apalancamiento definitivo para exigir condiciones más favorables.",
            "id": 30,
            "question": "El \"poder negociador\" de los clientes aumenta cuando:",
            "options": [
                  "El cliente no sabe dónde comprar",
                  "El cliente no conoce los productos sustitutos",
                  "El cliente no conoce a los proveedores",
                  "El cliente conoce a los distribuidores",
                  "El cliente posee total información de la oferta de mercado"
            ],
            "correct": 4,
            "explanation": "La simetría y transparencia informativa sobre costos, precios de la competencia y características de los productos otorga al comprador un apalancamiento definitivo para exigir condiciones más favorables."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "De acuerdo con el ejemplo del caso \"La Insolencia\", ¿qué estrategia se realiza para mitigar el poder negociador de los clientes?",
            "opciones": [
                  "Restringir la oferta de productos",
                  "Aumentar el precio de los productos",
                  "Generar fidelización de los clientes con productos de calidad",
                  "Ofrecer nueva información de los productos",
                  "Disminuir la cantidad de insumos"
            ],
            "correcta": 2,
            "resumen": "Generar fidelización de los clientes con productos de calidad.",
            "fundamentacion": "En el caso 'La Insolencia' (comercio de medialunas gourmet en calle con presentación formal), la estrategia central para neutralizar la presión de precios fue una fuerte propuesta de valor fundamentada en calidad superior, imagen de marca y fidelización afectiva, aislando al producto de la competencia genérica.",
            "id": 31,
            "question": "De acuerdo con el ejemplo del caso \"La Insolencia\", ¿qué estrategia se realiza para mitigar el poder negociador de los clientes?",
            "options": [
                  "Restringir la oferta de productos",
                  "Aumentar el precio de los productos",
                  "Generar fidelización de los clientes con productos de calidad",
                  "Ofrecer nueva información de los productos",
                  "Disminuir la cantidad de insumos"
            ],
            "correct": 2,
            "explanation": "En el caso 'La Insolencia' (comercio de medialunas gourmet en calle con presentación formal), la estrategia central para neutralizar la presión de precios fue una fuerte propuesta de valor fundamentada en calidad superior, imagen de marca y fidelización afectiva, aislando al producto de la competencia genérica."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "Si observamos el caso de \"La Insolencia\": Este emprendimiento creó un concepto, una marca y una forma de entender la realidad desde la observación del comercio en la calle. ¿Cuál de los siguientes aspectos es considerado en un \"Estudio de Mercado\"?",
            "opciones": [
                  "Revisar los flujos de caja",
                  "Determinar el valor de los insumos",
                  "Demostrar que existe demanda de mercado para el producto",
                  "Calcular el precio de venta",
                  "Calcular el precio de los insumos"
            ],
            "correcta": 2,
            "resumen": "Demostrar que existe demanda de mercado para el producto.",
            "fundamentacion": "Al igual que en la pregunta conceptual del módulo, la observación directa en la calle buscaba probar que existía una demanda activa no satisfecha de trabajadores y transeúntes dispuestos a consumir panadería de alta calidad al paso.",
            "id": 32,
            "question": "Si observamos el caso de \"La Insolencia\": Este emprendimiento creó un concepto, una marca y una forma de entender la realidad desde la observación del comercio en la calle. ¿Cuál de los siguientes aspectos es considerado en un \"Estudio de Mercado\"?",
            "options": [
                  "Revisar los flujos de caja",
                  "Determinar el valor de los insumos",
                  "Demostrar que existe demanda de mercado para el producto",
                  "Calcular el precio de venta",
                  "Calcular el precio de los insumos"
            ],
            "correct": 2,
            "explanation": "Al igual que en la pregunta conceptual del módulo, la observación directa en la calle buscaba probar que existía una demanda activa no satisfecha de trabajadores y transeúntes dispuestos a consumir panadería de alta calidad al paso."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "¿Qué pasaría si un aumento tecnológico afecta positivamente a la industria?",
            "opciones": [
                  "Aumenta la oferta de mercado",
                  "Aumenta la demanda de mercado",
                  "Aumenta la cantidad de competidores",
                  "No afecta, ya que el mercado es indiferente a los cambios tecnológicos",
                  "La industria elimina las barreras de entrada"
            ],
            "correcta": 0,
            "resumen": "Aumenta la oferta de mercado.",
            "fundamentacion": "Un avance o innovación tecnológica reduce los costos unitarios de producción y agiliza los procesos, lo que desplaza la curva de oferta agregada hacia la derecha (aumento de la oferta disponible a cada nivel de precio).",
            "id": 33,
            "question": "¿Qué pasaría si un aumento tecnológico afecta positivamente a la industria?",
            "options": [
                  "Aumenta la oferta de mercado",
                  "Aumenta la demanda de mercado",
                  "Aumenta la cantidad de competidores",
                  "No afecta, ya que el mercado es indiferente a los cambios tecnológicos",
                  "La industria elimina las barreras de entrada"
            ],
            "correct": 0,
            "explanation": "Un avance o innovación tecnológica reduce los costos unitarios de producción y agiliza los procesos, lo que desplaza la curva de oferta agregada hacia la derecha (aumento de la oferta disponible a cada nivel de precio)."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "¿Cuál es el objetivo principal del estudio de mercado?",
            "opciones": [
                  "Diseñar el producto",
                  "Verificar viabilidad comercial y existencia de mercado potencial",
                  "Determinar la localización",
                  "Calcular el VAN"
            ],
            "correcta": 1,
            "resumen": "Verificar viabilidad comercial y existencia de mercado potencial",
            "fundamentacion": "Objetivo: demostrar viabilidad comercial y mercado dispuesto a comprar.",
            "id": 115,
            "question": "¿Cuál es el objetivo principal del estudio de mercado?",
            "options": [
                  "Diseñar el producto",
                  "Verificar viabilidad comercial y existencia de mercado potencial",
                  "Determinar la localización",
                  "Calcular el VAN"
            ],
            "correct": 1,
            "explanation": "Objetivo: demostrar viabilidad comercial y mercado dispuesto a comprar."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "El método cualitativo en investigación de mercados utiliza herramientas como:",
            "opciones": [
                  "Encuestas estructuradas",
                  "Grupos focales y entrevistas a profundidad",
                  "Análisis de regresión",
                  "Muestreo probabilístico"
            ],
            "correcta": 1,
            "resumen": "Grupos focales y entrevistas a profundidad",
            "fundamentacion": "Método cualitativo: focus groups, entrevistas en profundidad.",
            "id": 116,
            "question": "El método cualitativo en investigación de mercados utiliza herramientas como:",
            "options": [
                  "Encuestas estructuradas",
                  "Grupos focales y entrevistas a profundidad",
                  "Análisis de regresión",
                  "Muestreo probabilístico"
            ],
            "correct": 1,
            "explanation": "Método cualitativo: focus groups, entrevistas en profundidad."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "¿Qué tipo de demanda representa la oportunidad real de negocio?",
            "opciones": [
                  "Demanda satisfecha",
                  "Demanda insatisfecha",
                  "Demanda elástica",
                  "Demanda inducida"
            ],
            "correcta": 1,
            "resumen": "Demanda insatisfecha",
            "fundamentacion": "Demanda insatisfecha = diferencia entre demanda proyectada y oferta, oportunidad.",
            "id": 117,
            "question": "¿Qué tipo de demanda representa la oportunidad real de negocio?",
            "options": [
                  "Demanda satisfecha",
                  "Demanda insatisfecha",
                  "Demanda elástica",
                  "Demanda inducida"
            ],
            "correct": 1,
            "explanation": "Demanda insatisfecha = diferencia entre demanda proyectada y oferta, oportunidad."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "Criterio de segmentación que agrupa por estilo de vida y personalidad:",
            "opciones": [
                  "Geográfico",
                  "Demográfico",
                  "Psicográfico",
                  "Conductual"
            ],
            "correcta": 2,
            "resumen": "Psicográfico",
            "fundamentacion": "Segmentación psicográfica: estilo de vida, valores, personalidad.",
            "id": 118,
            "question": "Criterio de segmentación que agrupa por estilo de vida y personalidad:",
            "options": [
                  "Geográfico",
                  "Demográfico",
                  "Psicográfico",
                  "Conductual"
            ],
            "correct": 2,
            "explanation": "Segmentación psicográfica: estilo de vida, valores, personalidad."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "En el análisis de la oferta, se debe analizar:",
            "opciones": [
                  "Solo precios",
                  "Número de competidores, market share, precios",
                  "Únicamente calidad",
                  "Promociones"
            ],
            "correcta": 1,
            "resumen": "Número de competidores, market share, precios",
            "fundamentacion": "Oferta incluye competidores, participación, estrategias y precios.",
            "id": 119,
            "question": "En el análisis de la oferta, se debe analizar:",
            "options": [
                  "Solo precios",
                  "Número de competidores, market share, precios",
                  "Únicamente calidad",
                  "Promociones"
            ],
            "correct": 1,
            "explanation": "Oferta incluye competidores, participación, estrategias y precios."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "¿Qué canal de comercialización es Productor → Minorista → Consumidor?",
            "opciones": [
                  "Canal directo",
                  "Canal corto",
                  "Canal largo",
                  "Canal inverso"
            ],
            "correcta": 1,
            "resumen": "Canal corto",
            "fundamentacion": "Canal corto: productor - minorista - consumidor (sin mayorista).",
            "id": 120,
            "question": "¿Qué canal de comercialización es Productor → Minorista → Consumidor?",
            "options": [
                  "Canal directo",
                  "Canal corto",
                  "Canal largo",
                  "Canal inverso"
            ],
            "correct": 1,
            "explanation": "Canal corto: productor - minorista - consumidor (sin mayorista)."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "Método de fijación de precios basado en lo que el consumidor está dispuesto a pagar:",
            "opciones": [
                  "Basado en costos",
                  "Basado en competencia",
                  "Basado en el valor",
                  "Precio de penetración"
            ],
            "correcta": 2,
            "resumen": "Basado en el valor",
            "fundamentacion": "Precio basado en el valor → percepción del consumidor.",
            "id": 121,
            "question": "Método de fijación de precios basado en lo que el consumidor está dispuesto a pagar:",
            "options": [
                  "Basado en costos",
                  "Basado en competencia",
                  "Basado en el valor",
                  "Precio de penetración"
            ],
            "correct": 2,
            "explanation": "Precio basado en el valor → percepción del consumidor."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "¿Qué herramienta cuantitativa es la más común para recolectar datos primarios?",
            "opciones": [
                  "Observación",
                  "Encuesta con cuestionario estructurado",
                  "Focus group",
                  "Entrevista no dirigida"
            ],
            "correcta": 1,
            "resumen": "Encuesta con cuestionario estructurado",
            "fundamentacion": "Encuesta es herramienta principal del método cuantitativo.",
            "id": 122,
            "question": "¿Qué herramienta cuantitativa es la más común para recolectar datos primarios?",
            "options": [
                  "Observación",
                  "Encuesta con cuestionario estructurado",
                  "Focus group",
                  "Entrevista no dirigida"
            ],
            "correct": 1,
            "explanation": "Encuesta es herramienta principal del método cuantitativo."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "El pronóstico de oferta y demanda se proyecta normalmente a:",
            "opciones": [
                  "1 año",
                  "3 a 5 años",
                  "10 años mínimo",
                  "1 mes"
            ],
            "correcta": 1,
            "resumen": "3 a 5 años",
            "fundamentacion": "Pronóstico típico de 3 a 5 años para evaluar ingresos futuros.",
            "id": 123,
            "question": "El pronóstico de oferta y demanda se proyecta normalmente a:",
            "options": [
                  "1 año",
                  "3 a 5 años",
                  "10 años mínimo",
                  "1 mes"
            ],
            "correct": 1,
            "explanation": "Pronóstico típico de 3 a 5 años para evaluar ingresos futuros."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "En el estudio de mercado, el análisis de precios 'basado en la competencia' consiste en:",
            "opciones": [
                  "Costo total + margen",
                  "Precio promedio del mercado",
                  "Precio emocional",
                  "Subasta inversa"
            ],
            "correcta": 1,
            "resumen": "Precio promedio del mercado",
            "fundamentacion": "Basado en competencia: tomar precio promedio del mercado.",
            "id": 124,
            "question": "En el estudio de mercado, el análisis de precios 'basado en la competencia' consiste en:",
            "options": [
                  "Costo total + margen",
                  "Precio promedio del mercado",
                  "Precio emocional",
                  "Subasta inversa"
            ],
            "correct": 1,
            "explanation": "Basado en competencia: tomar precio promedio del mercado."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "¿Cuál es una etapa del estudio de mercado?",
            "opciones": [
                  "Definición de la tecnología",
                  "Recolección de datos (trabajo de campo)",
                  "Estudio de ingeniería",
                  "Evaluación de proveedores"
            ],
            "correcta": 1,
            "resumen": "Recolección de datos (trabajo de campo)",
            "fundamentacion": "Etapas: definición problema, diseño, recolección datos, análisis, informe.",
            "id": 125,
            "question": "¿Cuál es una etapa del estudio de mercado?",
            "options": [
                  "Definición de la tecnología",
                  "Recolección de datos (trabajo de campo)",
                  "Estudio de ingeniería",
                  "Evaluación de proveedores"
            ],
            "correct": 1,
            "explanation": "Etapas: definición problema, diseño, recolección datos, análisis, informe."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "¿Qué se entiende por 'demanda proyectada'?",
            "opciones": [
                  "Demanda histórica",
                  "Estimación futura del consumo",
                  "Oferta de la competencia",
                  "Capacidad instalada"
            ],
            "correcta": 1,
            "resumen": "Estimación futura del consumo",
            "fundamentacion": "Demanda proyectada = estimación a futuro del comportamiento del consumo.",
            "id": 126,
            "question": "¿Qué se entiende por 'demanda proyectada'?",
            "options": [
                  "Demanda histórica",
                  "Estimación futura del consumo",
                  "Oferta de la competencia",
                  "Capacidad instalada"
            ],
            "correct": 1,
            "explanation": "Demanda proyectada = estimación a futuro del comportamiento del consumo."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "Según el material, ¿qué significa mercado de consumo?",
            "opciones": [
                  "Empresas que compran maquinaria",
                  "Personas que compran para uso personal",
                  "Gobierno adquiriendo servicios",
                  "Venta internacional"
            ],
            "correcta": 1,
            "resumen": "Personas que compran para uso personal",
            "fundamentacion": "Mercado de consumo: personas con necesidades y capacidad de pago.",
            "id": 127,
            "question": "Según el material, ¿qué significa mercado de consumo?",
            "options": [
                  "Empresas que compran maquinaria",
                  "Personas que compran para uso personal",
                  "Gobierno adquiriendo servicios",
                  "Venta internacional"
            ],
            "correct": 1,
            "explanation": "Mercado de consumo: personas con necesidades y capacidad de pago."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "¿Qué tipo de preguntas se recomiendan en una encuesta para facilitar tabulación?",
            "opciones": [
                  "Preguntas abiertas",
                  "Preguntas cerradas con escalas u opciones múltiples",
                  "Preguntas ambiguas",
                  "Preguntas proyectivas"
            ],
            "correcta": 1,
            "resumen": "Preguntas cerradas con escalas u opciones múltiples",
            "fundamentacion": "Preguntas cerradas fáciles de tabular y analizar estadísticamente.",
            "id": 128,
            "question": "¿Qué tipo de preguntas se recomiendan en una encuesta para facilitar tabulación?",
            "options": [
                  "Preguntas abiertas",
                  "Preguntas cerradas con escalas u opciones múltiples",
                  "Preguntas ambiguas",
                  "Preguntas proyectivas"
            ],
            "correct": 1,
            "explanation": "Preguntas cerradas fáciles de tabular y analizar estadísticamente."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "Las conclusiones del estudio de mercado deben incluir:",
            "opciones": [
                  "Solo el presupuesto",
                  "Demanda insatisfecha, estrategia 4Ps y pronóstico de ventas",
                  "Planos de la fábrica",
                  "Estructura legal"
            ],
            "correcta": 1,
            "resumen": "Demanda insatisfecha, estrategia 4Ps y pronóstico de ventas",
            "fundamentacion": "Conclusiones claves: demanda insatisfecha, comercialización y pronóstico.",
            "id": 129,
            "question": "Las conclusiones del estudio de mercado deben incluir:",
            "options": [
                  "Solo el presupuesto",
                  "Demanda insatisfecha, estrategia 4Ps y pronóstico de ventas",
                  "Planos de la fábrica",
                  "Estructura legal"
            ],
            "correct": 1,
            "explanation": "Conclusiones claves: demanda insatisfecha, comercialización y pronóstico."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "El análisis de la competencia permite identificar:",
            "opciones": [
                  "Únicamente precios",
                  "Oportunidades y amenazas",
                  "Solo cuota de mercado",
                  "Las compras"
            ],
            "correcta": 1,
            "resumen": "Oportunidades y amenazas",
            "fundamentacion": "Estudio de oferta/competencia: conocer rivales y detectar oportunidades/amenazas.",
            "id": 130,
            "question": "El análisis de la competencia permite identificar:",
            "options": [
                  "Únicamente precios",
                  "Oportunidades y amenazas",
                  "Solo cuota de mercado",
                  "Las compras"
            ],
            "correct": 1,
            "explanation": "Estudio de oferta/competencia: conocer rivales y detectar oportunidades/amenazas."
      },
      {
            "modulo": 3,
            "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
            "enunciado": "¿Cuál es la diferencia entre demanda satisfecha e insatisfecha?",
            "opciones": [
                  "Satisfecha es futura",
                  "Satisfecha ya cubierta por oferta actual; insatisfecha es oportunidad no cubierta",
                  "No hay diferencia",
                  "Insatisfecha es más cara"
            ],
            "correcta": 1,
            "resumen": "Satisfecha ya cubierta por oferta actual; insatisfecha es oportunidad no cubierta",
            "fundamentacion": "Demanda satisfecha cubierta por competidores; insatisfecha es mercado potencial.",
            "id": 131,
            "question": "¿Cuál es la diferencia entre demanda satisfecha e insatisfecha?",
            "options": [
                  "Satisfecha es futura",
                  "Satisfecha ya cubierta por oferta actual; insatisfecha es oportunidad no cubierta",
                  "No hay diferencia",
                  "Insatisfecha es más cara"
            ],
            "correct": 1,
            "explanation": "Demanda satisfecha cubierta por competidores; insatisfecha es mercado potencial."
      }
]
    },
    {
      id: "cap3",
      number: "3",
      title: "Estudio Técnico",
      shortTitle: "3. Estudio Técnico",
      icon: "fa-cogs",
      color: "#8b5cf6",
      accent: "rgba(139, 92, 246, 0.15)",
      badge: "Ingeniería, Tamaño, Localización y Distribución",
      description: "Tamaño óptimo (método de Lange y escalación), localización por puntos ponderados y método de Vogel, diagramas de proceso (bloques, flujo ASME, cursograma analítico, hilos), cálculo de mano de obra y turnos, balance de equipos y materias primas, distribución SLP (Richard Muther) y marco legal.",
      reading: {
        summary: "El estudio técnico resuelve todo lo concerniente a la instalación física y operatividad de la planta: dónde, cuánto, cuándo, cómo y con qué producir. Determina el tamaño óptimo, la localización estratégica, la ingeniería del proceso, la distribución en planta y la estructura organizacional legal.",
        sections: [
          {
            id: "cap3-sec1",
            title: "3.1 Tamaño Óptimo de la Planta",
            content: `
              <p>Capacidad instalada que opera con el costo total mínimo o la máxima rentabilidad económica. Se evalúa con el <strong>Método de Lange</strong> o el <strong>Método de Escalación</strong>.</p>
            `
          },
          {
            id: "cap3-sec2",
            title: "3.2 Localización Óptima",
            content: `
              <p>Se evalúa mediante el <strong>Método cualitativo por puntos ponderados</strong> o el <strong>Método de transporte de Vogel</strong> para minimizar fletes.</p>
            `
          },
          {
            id: "cap3-sec3",
            title: "3.3 Ingeniería de Proceso y Diagramas",
            content: `
              <p>Diagramas de Bloques, Flujo de Proceso ASME (operación, transporte, demora, almacenamiento, inspección), Cursograma Analítico y Diagramas de Recorrido/Hilos.</p>
            `
          },
          {
            id: "cap3-sec4",
            title: "3.4 Balances de Materia Prima, Equipos y Mano de Obra",
            content: `
              <p>El <strong>equipo clave</strong> debe utilizarse al 70-100%. La mano de obra directa rinde <strong>80% de tiempo efectivo</strong> (384 minutos por turno de 8 horas).</p>
            `
          },
          {
            id: "cap3-sec5",
            title: "3.5 Distribución SLP (Richard Muther)",
            content: `
              <p>Basado en parámetros <strong>PQRST</strong>, matriz de cercanías (A, E, I, O, U, X) y código de razones.</p>
            `
          }
        ]
      },
      quiz: [
      {
            "modulo": 4,
            "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
            "enunciado": "¿Qué nivel de localización analiza región, estado o zona geográfica considerando cercanía a materias primas e infraestructura?",
            "opciones": [
                  "Microlocalización",
                  "Macrolocalización",
                  "Localización de detalle",
                  "Georreferenciación"
            ],
            "correcta": 1,
            "resumen": "Macrolocalización",
            "fundamentacion": "Macrolocalización determina la región o estado, analizando macrofactores como disponibilidad de insumos y mercado.",
            "id": 132,
            "question": "¿Qué nivel de localización analiza región, estado o zona geográfica considerando cercanía a materias primas e infraestructura?",
            "options": [
                  "Microlocalización",
                  "Macrolocalización",
                  "Localización de detalle",
                  "Georreferenciación"
            ],
            "correct": 1,
            "explanation": "Macrolocalización determina la región o estado, analizando macrofactores como disponibilidad de insumos y mercado."
      },
      {
            "modulo": 4,
            "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
            "enunciado": "Método de evaluación de localización que asigna ponderaciones a factores críticos y objetivos:",
            "opciones": [
                  "Método de Brown y Gibson",
                  "Diagrama de Pareto",
                  "Método de los momentos",
                  "Análisis FODA"
            ],
            "correcta": 0,
            "resumen": "Método de Brown y Gibson",
            "fundamentacion": "El método de Brown y Gibson combina factores críticos y objetivos/subjetivos para seleccionar ubicación.",
            "id": 133,
            "question": "Método de evaluación de localización que asigna ponderaciones a factores críticos y objetivos:",
            "options": [
                  "Método de Brown y Gibson",
                  "Diagrama de Pareto",
                  "Método de los momentos",
                  "Análisis FODA"
            ],
            "correct": 0,
            "explanation": "El método de Brown y Gibson combina factores críticos y objetivos/subjetivos para seleccionar ubicación."
      },
      {
            "modulo": 4,
            "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
            "enunciado": "¿Qué es el tamaño óptimo de planta?",
            "opciones": [
                  "La capacidad máxima técnica posible",
                  "La capacidad que maximiza la rentabilidad y minimiza costos unitarios",
                  "La misma capacidad que el competidor líder",
                  "El tamaño mínimo por ley"
            ],
            "correcta": 1,
            "resumen": "La capacidad que maximiza la rentabilidad y minimiza costos unitarios",
            "fundamentacion": "El tamaño óptimo es aquel que maximiza la rentabilidad, con costos unitarios mínimos y economías de escala adecuadas.",
            "id": 134,
            "question": "¿Qué es el tamaño óptimo de planta?",
            "options": [
                  "La capacidad máxima técnica posible",
                  "La capacidad que maximiza la rentabilidad y minimiza costos unitarios",
                  "La misma capacidad que el competidor líder",
                  "El tamaño mínimo por ley"
            ],
            "correct": 1,
            "explanation": "El tamaño óptimo es aquel que maximiza la rentabilidad, con costos unitarios mínimos y economías de escala adecuadas."
      },
      {
            "modulo": 4,
            "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
            "enunciado": "Factor que NO determina el tamaño de planta según la unidad:",
            "opciones": [
                  "Demanda del mercado",
                  "Disponibilidad de insumos",
                  "Color del logotipo corporativo",
                  "Tecnología y financiamiento"
            ],
            "correcta": 2,
            "resumen": "Color del logotipo corporativo",
            "fundamentacion": "El color del logotipo no influye en la capacidad productiva; factores determinantes son demanda, insumos, tecnología y financiamiento.",
            "id": 135,
            "question": "Factor que NO determina el tamaño de planta según la unidad:",
            "options": [
                  "Demanda del mercado",
                  "Disponibilidad de insumos",
                  "Color del logotipo corporativo",
                  "Tecnología y financiamiento"
            ],
            "correct": 2,
            "explanation": "El color del logotipo no influye en la capacidad productiva; factores determinantes son demanda, insumos, tecnología y financiamiento."
      },
      {
            "modulo": 4,
            "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
            "enunciado": "Principio de distribución de planta según R. Muther que indica que el material debe recorrer la menor distancia posible:",
            "opciones": [
                  "Integración de conjunto",
                  "Mínima distancia recorrida",
                  "Espacio cúbico",
                  "Flexibilidad"
            ],
            "correcta": 1,
            "resumen": "Mínima distancia recorrida",
            "fundamentacion": "El principio de mínima distancia recorrida busca eficiencia y reducción de tiempos de desplazamiento.",
            "id": 136,
            "question": "Principio de distribución de planta según R. Muther que indica que el material debe recorrer la menor distancia posible:",
            "options": [
                  "Integración de conjunto",
                  "Mínima distancia recorrida",
                  "Espacio cúbico",
                  "Flexibilidad"
            ],
            "correct": 1,
            "explanation": "El principio de mínima distancia recorrida busca eficiencia y reducción de tiempos de desplazamiento."
      },
      {
            "modulo": 4,
            "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
            "enunciado": "Tipo de distribución de planta ideal para producción continua o en masa:",
            "opciones": [
                  "Por proceso (funcional)",
                  "Por producto (en línea)",
                  "Por posición fija",
                  "Por celdas de manufactura"
            ],
            "correcta": 1,
            "resumen": "Por producto (en línea)",
            "fundamentacion": "Distribución por producto o en línea es adecuada para producción continua y grandes volúmenes.",
            "id": 137,
            "question": "Tipo de distribución de planta ideal para producción continua o en masa:",
            "options": [
                  "Por proceso (funcional)",
                  "Por producto (en línea)",
                  "Por posición fija",
                  "Por celdas de manufactura"
            ],
            "correct": 1,
            "explanation": "Distribución por producto o en línea es adecuada para producción continua y grandes volúmenes."
      },
      {
            "modulo": 4,
            "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
            "enunciado": "¿Qué representa un diagrama de bloques en ingeniería del proyecto?",
            "opciones": [
                  "Dibujo arquitectónico detallado",
                  "Representación gráfica simple con bloques de operaciones unitarias",
                  "Listado de tuberías e instrumentación",
                  "Cronograma de actividades"
            ],
            "correcta": 1,
            "resumen": "Representación gráfica simple con bloques de operaciones unitarias",
            "fundamentacion": "El diagrama de bloques muestra operaciones unitarias y flujo de materiales de forma sencilla y global.",
            "id": 138,
            "question": "¿Qué representa un diagrama de bloques en ingeniería del proyecto?",
            "options": [
                  "Dibujo arquitectónico detallado",
                  "Representación gráfica simple con bloques de operaciones unitarias",
                  "Listado de tuberías e instrumentación",
                  "Cronograma de actividades"
            ],
            "correct": 1,
            "explanation": "El diagrama de bloques muestra operaciones unitarias y flujo de materiales de forma sencilla y global."
      },
      {
            "modulo": 4,
            "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
            "enunciado": "En el balance de materiales se aplica el principio de:",
            "opciones": [
                  "Conservación de la masa (lo que entra = lo que sale + acumulación)",
                  "Ley de la oferta y demanda",
                  "Maximización de la entropía",
                  "Equilibrio energético exclusivo"
            ],
            "correcta": 0,
            "resumen": "Conservación de la masa (lo que entra = lo que sale + acumulación)",
            "fundamentacion": "Balance de materiales se basa en la conservación de la masa: entradas = salidas + acumulación.",
            "id": 139,
            "question": "En el balance de materiales se aplica el principio de:",
            "options": [
                  "Conservación de la masa (lo que entra = lo que sale + acumulación)",
                  "Ley de la oferta y demanda",
                  "Maximización de la entropía",
                  "Equilibrio energético exclusivo"
            ],
            "correct": 0,
            "explanation": "Balance de materiales se basa en la conservación de la masa: entradas = salidas + acumulación."
      },
      {
            "modulo": 4,
            "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
            "enunciado": "¿Cuál es el objetivo de la ingeniería de detalle?",
            "opciones": [
                  "Definir únicamente el diagrama de bloques",
                  "Desarrollar planos, especificaciones, diagramas de tuberías y manuales para construcción",
                  "Realizar el estudio de mercado",
                  "Estimar solo los costos fijos"
            ],
            "correcta": 1,
            "resumen": "Desarrollar planos, especificaciones, diagramas de tuberías y manuales para construcción",
            "fundamentacion": "Ingeniería de detalle genera toda la documentación detallada: planos, especificaciones técnicas y manuales.",
            "id": 140,
            "question": "¿Cuál es el objetivo de la ingeniería de detalle?",
            "options": [
                  "Definir únicamente el diagrama de bloques",
                  "Desarrollar planos, especificaciones, diagramas de tuberías y manuales para construcción",
                  "Realizar el estudio de mercado",
                  "Estimar solo los costos fijos"
            ],
            "correct": 1,
            "explanation": "Ingeniería de detalle genera toda la documentación detallada: planos, especificaciones técnicas y manuales."
      },
      {
            "modulo": 4,
            "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
            "enunciado": "Son ejemplos de servicios de planta:",
            "opciones": [
                  "Mano de obra indirecta",
                  "Suministro de agua, energía eléctrica, vapor, tratamiento de residuos",
                  "Publicidad y marketing",
                  "Capacitación en ventas"
            ],
            "correcta": 1,
            "resumen": "Suministro de agua, energía eléctrica, vapor, tratamiento de residuos",
            "fundamentacion": "Servicios auxiliares como agua, energía, vapor, aire comprimido y tratamiento de residuos son vitales para operación.",
            "id": 141,
            "question": "Son ejemplos de servicios de planta:",
            "options": [
                  "Mano de obra indirecta",
                  "Suministro de agua, energía eléctrica, vapor, tratamiento de residuos",
                  "Publicidad y marketing",
                  "Capacitación en ventas"
            ],
            "correct": 1,
            "explanation": "Servicios auxiliares como agua, energía, vapor, aire comprimido y tratamiento de residuos son vitales para operación."
      },
      {
            "modulo": 4,
            "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
            "enunciado": "¿Qué regulan las normas ecológicas en un proyecto?",
            "opciones": [
                  "Los procedimientos contables",
                  "Límites máximos permisibles de emisiones y manejo de residuos",
                  "La distribución de planta",
                  "El precio de venta al público"
            ],
            "correcta": 1,
            "resumen": "Límites máximos permisibles de emisiones y manejo de residuos",
            "fundamentacion": "Normas ecológicas regulan emisiones, residuos peligrosos, impacto ambiental y ruido.",
            "id": 142,
            "question": "¿Qué regulan las normas ecológicas en un proyecto?",
            "options": [
                  "Los procedimientos contables",
                  "Límites máximos permisibles de emisiones y manejo de residuos",
                  "La distribución de planta",
                  "El precio de venta al público"
            ],
            "correct": 1,
            "explanation": "Normas ecológicas regulan emisiones, residuos peligrosos, impacto ambiental y ruido."
      },
      {
            "modulo": 4,
            "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
            "enunciado": "¿Qué aspecto legal se refiere al tipo de sociedad como S.A. o S. de R.L. ?",
            "opciones": [
                  "Normas de seguridad",
                  "Constitución legal y tipo de sociedad",
                  "Normas ISO 9001",
                  "Estudio de tiempos"
            ],
            "correcta": 1,
            "resumen": "Constitución legal y tipo de sociedad",
            "fundamentacion": "Dentro de aspectos legales se define el tipo de sociedad mercantil: S.A., S. de R.L., etc.",
            "id": 143,
            "question": "¿Qué aspecto legal se refiere al tipo de sociedad como S.A. o S. de R.L. ?",
            "options": [
                  "Normas de seguridad",
                  "Constitución legal y tipo de sociedad",
                  "Normas ISO 9001",
                  "Estudio de tiempos"
            ],
            "correct": 1,
            "explanation": "Dentro de aspectos legales se define el tipo de sociedad mercantil: S.A., S. de R.L., etc."
      },
      {
            "modulo": 4,
            "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
            "enunciado": "Dentro de los costos de operación, ¿cuál es un costo variable típico?",
            "opciones": [
                  "Depreciación de maquinaria",
                  "Sueldos del personal administrativo",
                  "Materias primas e insumos",
                  "Seguro de la planta"
            ],
            "correcta": 2,
            "resumen": "Materias primas e insumos",
            "fundamentacion": "Materias primas e insumos varían directamente con el nivel de producción, son costos variables.",
            "id": 144,
            "question": "Dentro de los costos de operación, ¿cuál es un costo variable típico?",
            "options": [
                  "Depreciación de maquinaria",
                  "Sueldos del personal administrativo",
                  "Materias primas e insumos",
                  "Seguro de la planta"
            ],
            "correct": 2,
            "explanation": "Materias primas e insumos varían directamente con el nivel de producción, son costos variables."
      },
      {
            "modulo": 4,
            "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
            "enunciado": "La fórmula Costos fijos + Costos variables corresponde a:",
            "opciones": [
                  "Costo de oportunidad",
                  "Costos totales de operación",
                  "Inversión fija",
                  "Punto de equilibrio"
            ],
            "correcta": 1,
            "resumen": "Costos totales de operación",
            "fundamentacion": "El costo total de operación es la suma de costos fijos más costos variables.",
            "id": 145,
            "question": "La fórmula Costos fijos + Costos variables corresponde a:",
            "options": [
                  "Costo de oportunidad",
                  "Costos totales de operación",
                  "Inversión fija",
                  "Punto de equilibrio"
            ],
            "correct": 1,
            "explanation": "El costo total de operación es la suma de costos fijos más costos variables."
      },
      {
            "modulo": 4,
            "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
            "enunciado": "¿Qué proporciona el estudio técnico al estudio financiero?",
            "opciones": [
                  "Demanda insatisfecha",
                  "Inversiones requeridas, costos de operación y vida útil de equipos",
                  "Estrategia de promoción",
                  "Segmentación psicográfica"
            ],
            "correcta": 1,
            "resumen": "Inversiones requeridas, costos de operación y vida útil de equipos",
            "fundamentacion": "El estudio técnico entrega al financiero las inversiones (fija, diferida, capital de trabajo), costos de operación y calendario.",
            "id": 146,
            "question": "¿Qué proporciona el estudio técnico al estudio financiero?",
            "options": [
                  "Demanda insatisfecha",
                  "Inversiones requeridas, costos de operación y vida útil de equipos",
                  "Estrategia de promoción",
                  "Segmentación psicográfica"
            ],
            "correct": 1,
            "explanation": "El estudio técnico entrega al financiero las inversiones (fija, diferida, capital de trabajo), costos de operación y calendario."
      },
      {
            "modulo": 4,
            "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
            "enunciado": "¿Cuál es la conclusión principal del estudio técnico?",
            "opciones": [
                  "Verificar la viabilidad comercial",
                  "Evaluar si es técnicamente factible, determinar la mejor localización, tamaño y requerimientos de inversión",
                  "Calcular el retorno sobre inversión",
                  "Diseñar la campaña publicitaria"
            ],
            "correcta": 1,
            "resumen": "Evaluar si es técnicamente factible, determinar la mejor localización, tamaño y requerimientos de inversión",
            "fundamentacion": "El estudio técnico concluye sobre viabilidad técnica, localización, tamaño óptimo e inversiones necesarias.",
            "id": 147,
            "question": "¿Cuál es la conclusión principal del estudio técnico?",
            "options": [
                  "Verificar la viabilidad comercial",
                  "Evaluar si es técnicamente factible, determinar la mejor localización, tamaño y requerimientos de inversión",
                  "Calcular el retorno sobre inversión",
                  "Diseñar la campaña publicitaria"
            ],
            "correct": 1,
            "explanation": "El estudio técnico concluye sobre viabilidad técnica, localización, tamaño óptimo e inversiones necesarias."
      },
      {
            "modulo": 4,
            "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
            "enunciado": "Método de evaluación de localización que considera factores críticos y ponderación objetiva/subjetiva (mencionado en la unidad):",
            "opciones": [
                  "Método de factores ponderados",
                  "Método Brown y Gibson",
                  "Método Delphi",
                  "Análisis de regresión lineal"
            ],
            "correcta": 1,
            "resumen": "Método Brown y Gibson",
            "fundamentacion": "En la unidad se menciona el método de Brown y Gibson (factores críticos y objetivos).",
            "id": 148,
            "question": "Método de evaluación de localización que considera factores críticos y ponderación objetiva/subjetiva (mencionado en la unidad):",
            "options": [
                  "Método de factores ponderados",
                  "Método Brown y Gibson",
                  "Método Delphi",
                  "Análisis de regresión lineal"
            ],
            "correct": 1,
            "explanation": "En la unidad se menciona el método de Brown y Gibson (factores críticos y objetivos)."
      }
]
    },
    {
      id: "cap4",
      number: "4",
      title: "Estudio Económico",
      shortTitle: "4. Estudio Económico",
      icon: "fa-calculator",
      color: "#ec4899",
      accent: "rgba(236, 72, 153, 0.15)",
      badge: "Costos, Inversión, Punto de Equilibrio y TMAR",
      description: "Costos de producción, administración, ventas y financieros; activo fijo y diferido; depreciación fiscal en línea recta; capital de trabajo (modelo Baumol, inventarios LE, cuentas por cobrar); punto de equilibrio; estado de resultados pro-forma; TMAR propia y mixta ponderada; tablas de amortización de deuda y razones financieras.",
      reading: {
        summary: "El estudio económico transforma en cifras monetarias todas las determinaciones de ingeniería técnica y comercial. Ordena y sistematiza los costos, inversiones, capital de trabajo y financiamiento para estructurar los estados pro-forma y calcular la rentabilidad económica.",
        sections: [
          {
            id: "cap4-sec1",
            title: "4.1 Clasificación de Costos e Inversión Inicial",
            content: `
              <p>Se aplica <strong>costeo absorbente</strong> con al menos 35% de prestaciones sociales. La inversión se divide en Activo Fijo (tangible), Activo Diferido (intangible) y Capital de Trabajo.</p>
            `
          },
          {
            id: "cap4-sec2",
            title: "4.2 Punto de Equilibrio",
            content: `
              <div class="formula-box">
                <span class="formula-title">Punto de Equilibrio en Unidades (Q):</span>
                <div class="math-expr">Q = \frac{CF}{P - V}</div>
              </div>
            `
          },
          {
            id: "cap4-sec3",
            title: "4.3 Capital de Trabajo y Lote Económico",
            content: `
              <p>Valores e inversiones, cuentas por cobrar e inventarios calculados por Lote Económico: $LE = \sqrt{\frac{2FU}{CP}}$.</p>
            `
          },
          {
            id: "cap4-sec4",
            title: "4.4 TMAR y Financiamiento",
            content: `
              <div class="formula-box">
                <span class="formula-title">Fórmula de TMAR Individual:</span>
                <div class="math-expr">\text{TMAR} = i + f + i \cdot f</div>
              </div>
              <p>Se analizan 4 métodos de pago de préstamo y razones financieras de liquidez y solvencia.</p>
            `
          }
        ]
      },
      quiz: [
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "Mientras más alta es la tasa de interés de descuento del Proyecto, se tendrá que:",
            "opciones": [
                  "La TIR será mayor, ya que la tasa condiciona el resultado en el tiempo",
                  "La TIR será menor, ya que la tasa condiciona el resultado en el tiempo",
                  "El VAN del Proyecto será menor a mayor tasa, ya que los flujos disminuyen",
                  "El VAN del Proyecto será mayor a mayor tasa, ya que los flujos disminuyen"
            ],
            "correcta": 2,
            "resumen": "El VAN del Proyecto será menor a mayor tasa, ya que los flujos disminuyen.",
            "fundamentacion": "En la fórmula del VAN: VAN = Σ [Ft / (1+i)^t] - I0, la tasa de descuento i se encuentra en el denominador. Conforme se incrementa la tasa i, el factor de descuento (1+i)^t crece exponencialmente, lo que reduce sustancialmente el valor presente de los flujos futuros de caja y hace que el VAN disminuya progresivamente.",
            "id": 34,
            "question": "Mientras más alta es la tasa de interés de descuento del Proyecto, se tendrá que:",
            "options": [
                  "La TIR será mayor, ya que la tasa condiciona el resultado en el tiempo",
                  "La TIR será menor, ya que la tasa condiciona el resultado en el tiempo",
                  "El VAN del Proyecto será menor a mayor tasa, ya que los flujos disminuyen",
                  "El VAN del Proyecto será mayor a mayor tasa, ya que los flujos disminuyen"
            ],
            "correct": 2,
            "explanation": "En la fórmula del VAN: VAN = Σ [Ft / (1+i)^t] - I0, la tasa de descuento i se encuentra en el denominador. Conforme se incrementa la tasa i, el factor de descuento (1+i)^t crece exponencialmente, lo que reduce sustancialmente el valor presente de los flujos futuros de caja y hace que el VAN disminuya progresivamente."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "¿Qué sucede si el PRC > T (donde T es el plazo de evaluación del proyecto)?",
            "opciones": [
                  "Se recupera el capital al mismo año de la inversión",
                  "No se alcanza a recuperar el capital",
                  "Se aplaza el proyecto la empresa",
                  "Se anula el proyecto",
                  "Se recupera el capital al primer año"
            ],
            "correcta": 1,
            "resumen": "No se alcanza a recuperar el capital.",
            "fundamentacion": "El Periodo de Recuperación del Capital (PRC o Payback) mide el tiempo requerido para que los flujos generados amorticen íntegramente la inversión inicial. Si el PRC excede el horizonte temporal 'T' previsto de vida útil del proyecto, significa que dentro del plazo estimado de evaluación la inversión no alcanza a recuperarse.",
            "id": 35,
            "question": "¿Qué sucede si el PRC > T (donde T es el plazo de evaluación del proyecto)?",
            "options": [
                  "Se recupera el capital al mismo año de la inversión",
                  "No se alcanza a recuperar el capital",
                  "Se aplaza el proyecto la empresa",
                  "Se anula el proyecto",
                  "Se recupera el capital al primer año"
            ],
            "correct": 1,
            "explanation": "El Periodo de Recuperación del Capital (PRC o Payback) mide el tiempo requerido para que los flujos generados amorticen íntegramente la inversión inicial. Si el PRC excede el horizonte temporal 'T' previsto de vida útil del proyecto, significa que dentro del plazo estimado de evaluación la inversión no alcanza a recuperarse."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "VAN lo definimos como:",
            "opciones": [
                  "Valor presente de los flujos de un proyecto",
                  "Valor de la tasa de interés utilizado en el proyecto de inversión",
                  "Valor del dinero en el tiempo",
                  "Valor actualizado del proyecto",
                  "Valor Anualizado de las ganancias"
            ],
            "correcta": 3,
            "resumen": "Valor actualizado del proyecto (o Valor de flujos netos descontados menos inversión).",
            "fundamentacion": "El Valor Actual Neto representa el valor actualizado (traído a moneda de hoy) de todos los beneficios y costos del proyecto descontados a la tasa de exigencia mínima requerida, descontando el desembolso inicial.",
            "id": 36,
            "question": "VAN lo definimos como:",
            "options": [
                  "Valor presente de los flujos de un proyecto",
                  "Valor de la tasa de interés utilizado en el proyecto de inversión",
                  "Valor del dinero en el tiempo",
                  "Valor actualizado del proyecto",
                  "Valor Anualizado de las ganancias"
            ],
            "correct": 3,
            "explanation": "El Valor Actual Neto representa el valor actualizado (traído a moneda de hoy) de todos los beneficios y costos del proyecto descontados a la tasa de exigencia mínima requerida, descontando el desembolso inicial."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "El resultado de un escenario optimista implicará:",
            "opciones": [
                  "Un VAN mayor, PRC bajo y una TIR alta",
                  "Un VAN menor, TIR baja y PRC más largo",
                  "Un VAN mayor, un PRC menor y una TIR menor",
                  "Un VAN positivo, pero una TIR menor"
            ],
            "correcta": 0,
            "resumen": "Un VAN mayor, PRC bajo y una TIR alta.",
            "fundamentacion": "En un escenario optimista (donde las ventas son superiores, los costos inferiores o los precios favorables), los flujos de caja netos se incrementan, lo que consecuentemente eleva el VAN a niveles máximos, incrementa la TIR muy por encima de la tasa de descuento y reduce el tiempo necesario para recuperar la inversión inicial (PRC menor).",
            "id": 37,
            "question": "El resultado de un escenario optimista implicará:",
            "options": [
                  "Un VAN mayor, PRC bajo y una TIR alta",
                  "Un VAN menor, TIR baja y PRC más largo",
                  "Un VAN mayor, un PRC menor y una TIR menor",
                  "Un VAN positivo, pero una TIR menor"
            ],
            "correct": 0,
            "explanation": "En un escenario optimista (donde las ventas son superiores, los costos inferiores o los precios favorables), los flujos de caja netos se incrementan, lo que consecuentemente eleva el VAN a niveles máximos, incrementa la TIR muy por encima de la tasa de descuento y reduce el tiempo necesario para recuperar la inversión inicial (PRC menor)."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "¿Qué sucede si VAN > 0 y TIR = i de descuento?",
            "opciones": [
                  "Se anula el proyecto",
                  "Es indiferente realizar el proyecto",
                  "Se rechaza el proyecto",
                  "Se realiza el proyecto la empresa",
                  "Se finaliza el proyecto"
            ],
            "correcta": 3,
            "resumen": "Se realiza el proyecto (Aceptación del proyecto).",
            "fundamentacion": "Si el criterio de decisión del VAN es mayor a cero (VAN > 0), el proyecto genera valor por encima de la exigencia del costo de capital. En la lógica de evaluación planteada en este reactivo, un VAN positivo es condición suficiente de viabilidad para aprobar la realización del proyecto.",
            "id": 38,
            "question": "¿Qué sucede si VAN > 0 y TIR = i de descuento?",
            "options": [
                  "Se anula el proyecto",
                  "Es indiferente realizar el proyecto",
                  "Se rechaza el proyecto",
                  "Se realiza el proyecto la empresa",
                  "Se finaliza el proyecto"
            ],
            "correct": 3,
            "explanation": "Si el criterio de decisión del VAN es mayor a cero (VAN > 0), el proyecto genera valor por encima de la exigencia del costo de capital. En la lógica de evaluación planteada en este reactivo, un VAN positivo es condición suficiente de viabilidad para aprobar la realización del proyecto."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "¿Qué tipo de escenarios se consideran para un análisis de sensibilidad?",
            "opciones": [
                  "Tasa de interés fija y tasa variable",
                  "Flujos de caja positivos y negativos",
                  "VAN>0 y TIR>0",
                  "Favorable y neutro",
                  "Conservador y optimista"
            ],
            "correcta": 4,
            "resumen": "Conservador (pesimista) y optimista.",
            "fundamentacion": "El análisis de sensibilidad por escenarios modela comúnmente tres situaciones: Pesimista/Conservador (caída de demanda, encarecimiento de costos), Base o más probable, y Optimista (expansión acelerada de ingresos), permitiendo evaluar la solidez del proyecto ante variaciones críticas.",
            "id": 39,
            "question": "¿Qué tipo de escenarios se consideran para un análisis de sensibilidad?",
            "options": [
                  "Tasa de interés fija y tasa variable",
                  "Flujos de caja positivos y negativos",
                  "VAN>0 y TIR>0",
                  "Favorable y neutro",
                  "Conservador y optimista"
            ],
            "correct": 4,
            "explanation": "El análisis de sensibilidad por escenarios modela comúnmente tres situaciones: Pesimista/Conservador (caída de demanda, encarecimiento de costos), Base o más probable, y Optimista (expansión acelerada de ingresos), permitiendo evaluar la solidez del proyecto ante variaciones críticas."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "¿Cuáles de los siguientes ítems corresponden a las conclusiones del Proyecto?",
            "opciones": [
                  "Un resumen ejecutivo, introducción y conclusión del proyecto",
                  "Un resumen ejecutivo, determinación de flujos de caja y análisis de sensibilidad",
                  "Un resumen ejecutivo, análisis de variables y conclusión del proyecto",
                  "Un resumen ejecutivo, flujos de caja y ampliación del proyecto",
                  "Flujos de caja y conclusión del proyecto"
            ],
            "correcta": 2,
            "resumen": "Un resumen ejecutivo, análisis de variables y conclusión del proyecto.",
            "fundamentacion": "El informe final de evaluación de un proyecto condensa en su cierre ejecutivo el Resumen Ejecutivo (hallazgos clave), el Análisis de Variables (impacto de riesgos y supuestos) y la Recomendación/Conclusión final respecto a ejecutar, postergar o rechazar la inversión.",
            "id": 40,
            "question": "¿Cuáles de los siguientes ítems corresponden a las conclusiones del Proyecto?",
            "options": [
                  "Un resumen ejecutivo, introducción y conclusión del proyecto",
                  "Un resumen ejecutivo, determinación de flujos de caja y análisis de sensibilidad",
                  "Un resumen ejecutivo, análisis de variables y conclusión del proyecto",
                  "Un resumen ejecutivo, flujos de caja y ampliación del proyecto",
                  "Flujos de caja y conclusión del proyecto"
            ],
            "correct": 2,
            "explanation": "El informe final de evaluación de un proyecto condensa en su cierre ejecutivo el Resumen Ejecutivo (hallazgos clave), el Análisis de Variables (impacto de riesgos y supuestos) y la Recomendación/Conclusión final respecto a ejecutar, postergar o rechazar la inversión."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "¿Qué sucede si el VAN es positivo?",
            "opciones": [
                  "Se realiza el proyecto",
                  "Se evalúa el proyecto",
                  "Se rechaza el proyecto",
                  "Se aplaza el proyecto la empresa",
                  "Se anula el proyecto"
            ],
            "correcta": 0,
            "resumen": "Se realiza el proyecto.",
            "fundamentacion": "La regla de decisión financiera incondicional del VAN establece: Si VAN > 0, el proyecto genera riqueza neta por encima del costo de oportunidad del capital y del retorno exigido, por lo que debe ser aceptado y realizado.",
            "id": 41,
            "question": "¿Qué sucede si el VAN es positivo?",
            "options": [
                  "Se realiza el proyecto",
                  "Se evalúa el proyecto",
                  "Se rechaza el proyecto",
                  "Se aplaza el proyecto la empresa",
                  "Se anula el proyecto"
            ],
            "correct": 0,
            "explanation": "La regla de decisión financiera incondicional del VAN establece: Si VAN > 0, el proyecto genera riqueza neta por encima del costo de oportunidad del capital y del retorno exigido, por lo que debe ser aceptado y realizado."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "Los criterios más utilizados para evaluar un Proyecto son:",
            "opciones": [
                  "VAN, TIR, PRC",
                  "Flujos correctos",
                  "Rentabilidad",
                  "Tasa de interés",
                  "Proyectos paralelos"
            ],
            "correcta": 0,
            "resumen": "VAN, TIR, PRC.",
            "fundamentacion": "La tríada clásica de indicadores de evaluación cuantitativa son: 1) VAN (mide agregación de valor monetario), 2) TIR (mide rentabilidad porcentual periódica) y 3) PRC o Payback (mide tiempo de liquidez y exposición al riesgo del capital invertido).",
            "id": 42,
            "question": "Los criterios más utilizados para evaluar un Proyecto son:",
            "options": [
                  "VAN, TIR, PRC",
                  "Flujos correctos",
                  "Rentabilidad",
                  "Tasa de interés",
                  "Proyectos paralelos"
            ],
            "correct": 0,
            "explanation": "La tríada clásica de indicadores de evaluación cuantitativa son: 1) VAN (mide agregación de valor monetario), 2) TIR (mide rentabilidad porcentual periódica) y 3) PRC o Payback (mide tiempo de liquidez y exposición al riesgo del capital invertido)."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "¿Qué es la tasa interna de retorno (TIR)?",
            "opciones": [
                  "Es la tasa de interés del proyecto",
                  "Es la tasa de interés del capital",
                  "Es la tasa de interés de los flujos",
                  "Es la tasa de interés de descuento",
                  "Es la tasa de interés de descuento que hace que el VAN = 0"
            ],
            "correcta": 4,
            "resumen": "Es la tasa de interés de descuento que hace que el VAN = 0.",
            "fundamentacion": "La definición matemática y económica estricta de la TIR es aquella tasa de descuento específica que iguala el valor presente de los flujos de fondos futuros con la inversión inicial, resultando en un VAN exactamente igual a cero.",
            "id": 43,
            "question": "¿Qué es la tasa interna de retorno (TIR)?",
            "options": [
                  "Es la tasa de interés del proyecto",
                  "Es la tasa de interés del capital",
                  "Es la tasa de interés de los flujos",
                  "Es la tasa de interés de descuento",
                  "Es la tasa de interés de descuento que hace que el VAN = 0"
            ],
            "correct": 4,
            "explanation": "La definición matemática y económica estricta de la TIR es aquella tasa de descuento específica que iguala el valor presente de los flujos de fondos futuros con la inversión inicial, resultando en un VAN exactamente igual a cero."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "Si la TIR es mayor a la tasa de descuento del proyecto, ¿qué conclusión se realiza?",
            "opciones": [
                  "Se realiza el proyecto",
                  "Se rechaza el proyecto",
                  "Es indiferente",
                  "Se modifica la tasa de interés"
            ],
            "correcta": 0,
            "resumen": "Se realiza el proyecto.",
            "fundamentacion": "Cuando la TIR supera la tasa de descuento (TIR > i), significa que el proyecto rinde a una tasa superior a la que exige el inversionista o la que cuesta financiarlo en el mercado, generando rentabilidad económica excedente (VAN > 0) y ameritando su ejecución.",
            "id": 44,
            "question": "Si la TIR es mayor a la tasa de descuento del proyecto, ¿qué conclusión se realiza?",
            "options": [
                  "Se realiza el proyecto",
                  "Se rechaza el proyecto",
                  "Es indiferente",
                  "Se modifica la tasa de interés"
            ],
            "correct": 0,
            "explanation": "Cuando la TIR supera la tasa de descuento (TIR > i), significa que el proyecto rinde a una tasa superior a la que exige el inversionista o la que cuesta financiarlo en el mercado, generando rentabilidad económica excedente (VAN > 0) y ameritando su ejecución."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "¿Por qué se utilizan distintos escenarios de sensibilidad?",
            "opciones": [
                  "Porque se puede escoger el mejor resultado",
                  "Porque se puede rechazar el peor resultado",
                  "Porque se observa cómo se modelan y afectan los flujos de caja ante variaciones",
                  "Para no escoger el peor resultado",
                  "Porque se necesita comprobar si el VAN es positivo"
            ],
            "correcta": 2,
            "resumen": "Porque se observa cómo se modelan y afectan los flujos de caja ante variaciones.",
            "fundamentacion": "El análisis de sensibilidad permite a la gerencia identificar qué variables críticas (precio, costos, demanda, tasa) tienen mayor impacto sobre el flujo de fondos y determinar los rangos de tolerancia en que el proyecto se mantiene rentable frente a imprevistos del entorno.",
            "id": 45,
            "question": "¿Por qué se utilizan distintos escenarios de sensibilidad?",
            "options": [
                  "Porque se puede escoger el mejor resultado",
                  "Porque se puede rechazar el peor resultado",
                  "Porque se observa cómo se modelan y afectan los flujos de caja ante variaciones",
                  "Para no escoger el peor resultado",
                  "Porque se necesita comprobar si el VAN es positivo"
            ],
            "correct": 2,
            "explanation": "El análisis de sensibilidad permite a la gerencia identificar qué variables críticas (precio, costos, demanda, tasa) tienen mayor impacto sobre el flujo de fondos y determinar los rangos de tolerancia en que el proyecto se mantiene rentable frente a imprevistos del entorno."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "Si un Proyecto posee flujos negativos (pérdidas) en algunos periodos de tiempo y positivos (ganancias) en otros periodos de tiempo, ¿entonces se puede calcular el VAN?",
            "opciones": [
                  "Sí se puede, ya que considera el plazo total del proyecto y descuenta cada flujo individual",
                  "No se puede, porque los resultados serán errados",
                  "Puede ser, siempre que existan más flujos positivos que negativos",
                  "Se puede, siempre que existan menos de dos flujos negativos",
                  "Se puede, solo si el resultado del VAN>0"
            ],
            "correcta": 0,
            "resumen": "Sí se puede, ya que considera el plazo total del proyecto y descuenta cada flujo individual.",
            "fundamentacion": "El cálculo del VAN es perfectamente aplicable a cualquier secuencia de flujos de caja, sean positivos, negativos o mixtos, pues cada término del flujo de caja Ft se descuenta algebraicamente mediante su factor (1+i)^t. (Nota: donde sí pueden surgir inconsistencias matemáticas de múltiples tasas es en la TIR, pero nunca en el VAN).",
            "id": 46,
            "question": "Si un Proyecto posee flujos negativos (pérdidas) en algunos periodos de tiempo y positivos (ganancias) en otros periodos de tiempo, ¿entonces se puede calcular el VAN?",
            "options": [
                  "Sí se puede, ya que considera el plazo total del proyecto y descuenta cada flujo individual",
                  "No se puede, porque los resultados serán errados",
                  "Puede ser, siempre que existan más flujos positivos que negativos",
                  "Se puede, siempre que existan menos de dos flujos negativos",
                  "Se puede, solo si el resultado del VAN>0"
            ],
            "correct": 0,
            "explanation": "El cálculo del VAN es perfectamente aplicable a cualquier secuencia de flujos de caja, sean positivos, negativos o mixtos, pues cada término del flujo de caja Ft se descuenta algebraicamente mediante su factor (1+i)^t. (Nota: donde sí pueden surgir inconsistencias matemáticas de múltiples tasas es en la TIR, pero nunca en el VAN)."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "¿Qué son los costos directos?",
            "opciones": [
                  "Gastos generales de administración",
                  "Costos que se relacionan directamente con el producto o servicio, fácilmente identificables",
                  "Todos los costos financieros",
                  "Únicamente la materia prima"
            ],
            "correcta": 1,
            "resumen": "Costos que se relacionan directamente con el producto o servicio, fácilmente identificables",
            "fundamentacion": "Los costos directos son aquellos identificables y asignables directamente a un producto o servicio, como mano de obra directa y materiales (sección 5.1.1).",
            "id": 47,
            "question": "¿Qué son los costos directos?",
            "options": [
                  "Gastos generales de administración",
                  "Costos que se relacionan directamente con el producto o servicio, fácilmente identificables",
                  "Todos los costos financieros",
                  "Únicamente la materia prima"
            ],
            "correct": 1,
            "explanation": "Los costos directos son aquellos identificables y asignables directamente a un producto o servicio, como mano de obra directa y materiales (sección 5.1.1)."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "Dentro de los costos directos de mano de obra se incluye:",
            "opciones": [
                  "Sueldos de gerentes administrativos",
                  "Salarios y prestaciones de operarios de producción",
                  "Gastos de limpieza de oficinas",
                  "Renta de instalaciones"
            ],
            "correcta": 1,
            "resumen": "Salarios y prestaciones de operarios de producción",
            "fundamentacion": "La mano de obra directa incluye salarios de operarios, supervisión directa y capacitación del personal productivo (5.1.1.1).",
            "id": 48,
            "question": "Dentro de los costos directos de mano de obra se incluye:",
            "options": [
                  "Sueldos de gerentes administrativos",
                  "Salarios y prestaciones de operarios de producción",
                  "Gastos de limpieza de oficinas",
                  "Renta de instalaciones"
            ],
            "correct": 1,
            "explanation": "La mano de obra directa incluye salarios de operarios, supervisión directa y capacitación del personal productivo (5.1.1.1)."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "¿Cuál de los siguientes es un costo indirecto típico?",
            "opciones": [
                  "Materia prima para el producto",
                  "Sueldos del personal administrativo",
                  "Salario de operarios de producción",
                  "Empaques específicos del producto"
            ],
            "correcta": 1,
            "resumen": "Sueldos del personal administrativo",
            "fundamentacion": "Los costos indirectos son comunes a muchos productos, como sueldos administrativos, rentas o servicios generales (sección 5.2).",
            "id": 49,
            "question": "¿Cuál de los siguientes es un costo indirecto típico?",
            "options": [
                  "Materia prima para el producto",
                  "Sueldos del personal administrativo",
                  "Salario de operarios de producción",
                  "Empaques específicos del producto"
            ],
            "correct": 1,
            "explanation": "Los costos indirectos son comunes a muchos productos, como sueldos administrativos, rentas o servicios generales (sección 5.2)."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "Los costos fijos se caracterizan por:",
            "opciones": [
                  "Variar proporcionalmente con la producción",
                  "No variar con el nivel de producción",
                  "Depender solo de la materia prima",
                  "Ser siempre financieros"
            ],
            "correcta": 1,
            "resumen": "No variar con el nivel de producción",
            "fundamentacion": "Los costos fijos no cambian con el nivel de producción, ej. rentas, seguros (clasificación complementaria, pág.2).",
            "id": 50,
            "question": "Los costos fijos se caracterizan por:",
            "options": [
                  "Variar proporcionalmente con la producción",
                  "No variar con el nivel de producción",
                  "Depender solo de la materia prima",
                  "Ser siempre financieros"
            ],
            "correct": 1,
            "explanation": "Los costos fijos no cambian con el nivel de producción, ej. rentas, seguros (clasificación complementaria, pág.2)."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "¿Qué mide la depreciación de activos tangibles?",
            "opciones": [
                  "El incremento del valor de mercado",
                  "La distribución del costo del activo durante su vida útil por desgaste u obsolescencia",
                  "Gastos de mantenimiento",
                  "Solo la pérdida fiscal"
            ],
            "correcta": 1,
            "resumen": "La distribución del costo del activo durante su vida útil por desgaste u obsolescencia",
            "fundamentacion": "La depreciación refleja el desgaste o consumo de activos fijos tangibles y reduce utilidad fiscal (5.2.2).",
            "id": 51,
            "question": "¿Qué mide la depreciación de activos tangibles?",
            "options": [
                  "El incremento del valor de mercado",
                  "La distribución del costo del activo durante su vida útil por desgaste u obsolescencia",
                  "Gastos de mantenimiento",
                  "Solo la pérdida fiscal"
            ],
            "correct": 1,
            "explanation": "La depreciación refleja el desgaste o consumo de activos fijos tangibles y reduce utilidad fiscal (5.2.2)."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "¿Cuál es el propósito del flujo de efectivo proyectado (pro-forma)?",
            "opciones": [
                  "Mostrar solo utilidades acumuladas",
                  "Detallar entradas y salidas de efectivo previstas",
                  "Calcular solo inversión inicial",
                  "Mostrar el balance general"
            ],
            "correcta": 1,
            "resumen": "Detallar entradas y salidas de efectivo previstas",
            "fundamentacion": "El flujo de efectivo proyectado detalla las entradas y salidas de efectivo previstas (5.3).",
            "id": 52,
            "question": "¿Cuál es el propósito del flujo de efectivo proyectado (pro-forma)?",
            "options": [
                  "Mostrar solo utilidades acumuladas",
                  "Detallar entradas y salidas de efectivo previstas",
                  "Calcular solo inversión inicial",
                  "Mostrar el balance general"
            ],
            "correct": 1,
            "explanation": "El flujo de efectivo proyectado detalla las entradas y salidas de efectivo previstas (5.3)."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "¿Qué indica el Periodo de Recuperación de la Inversión (PRI)?",
            "opciones": [
                  "La rentabilidad en porcentaje",
                  "El tiempo en que se recupera la inversión inicial con flujos acumulados",
                  "El valor actual neto",
                  "La tasa de descuento"
            ],
            "correcta": 1,
            "resumen": "El tiempo en que se recupera la inversión inicial con flujos acumulados",
            "fundamentacion": "El PRI o Payback es el tiempo que tarda el proyecto en generar flujos suficientes para recuperar la inversión (5.3.1.2).",
            "id": 53,
            "question": "¿Qué indica el Periodo de Recuperación de la Inversión (PRI)?",
            "options": [
                  "La rentabilidad en porcentaje",
                  "El tiempo en que se recupera la inversión inicial con flujos acumulados",
                  "El valor actual neto",
                  "La tasa de descuento"
            ],
            "correct": 1,
            "explanation": "El PRI o Payback es el tiempo que tarda el proyecto en generar flujos suficientes para recuperar la inversión (5.3.1.2)."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "Fórmula básica del ROI (Return on Investment):",
            "opciones": [
                  "(Utilidad Bruta / Ventas) × 100",
                  "(Utilidad Neta / Inversión Total) × 100",
                  "(Flujo de caja / Patrimonio)",
                  "(VAN / Inversión) × 100"
            ],
            "correcta": 1,
            "resumen": "(Utilidad Neta / Inversión Total) × 100",
            "fundamentacion": "ROI = (Utilidad Neta / Inversión Total) × 100, según 5.3.1.3.",
            "id": 54,
            "question": "Fórmula básica del ROI (Return on Investment):",
            "options": [
                  "(Utilidad Bruta / Ventas) × 100",
                  "(Utilidad Neta / Inversión Total) × 100",
                  "(Flujo de caja / Patrimonio)",
                  "(VAN / Inversión) × 100"
            ],
            "correct": 1,
            "explanation": "ROI = (Utilidad Neta / Inversión Total) × 100, según 5.3.1.3."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "Un VAN mayor que cero (VAN > 0) significa que:",
            "opciones": [
                  "El proyecto destruye valor, se rechaza",
                  "El proyecto es rentable, genera valor superior a la inversión",
                  "Es indiferente",
                  "La TIR es menor a la tasa de oportunidad"
            ],
            "correcta": 1,
            "resumen": "El proyecto es rentable, genera valor superior a la inversión",
            "fundamentacion": "VAN > 0 indica rentabilidad, se acepta el proyecto (5.3.1.4).",
            "id": 55,
            "question": "Un VAN mayor que cero (VAN > 0) significa que:",
            "options": [
                  "El proyecto destruye valor, se rechaza",
                  "El proyecto es rentable, genera valor superior a la inversión",
                  "Es indiferente",
                  "La TIR es menor a la tasa de oportunidad"
            ],
            "correct": 1,
            "explanation": "VAN > 0 indica rentabilidad, se acepta el proyecto (5.3.1.4)."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "La Tasa Interna de Retorno (TIR) es la tasa que hace que:",
            "opciones": [
                  "El ROI sea máximo",
                  "El VAN sea igual a cero",
                  "El periodo de recuperación sea 0",
                  "La inversión inicial se duplique"
            ],
            "correcta": 1,
            "resumen": "El VAN sea igual a cero",
            "fundamentacion": "La TIR es la tasa de descuento que iguala el VAN a cero (5.3.2).",
            "id": 56,
            "question": "La Tasa Interna de Retorno (TIR) es la tasa que hace que:",
            "options": [
                  "El ROI sea máximo",
                  "El VAN sea igual a cero",
                  "El periodo de recuperación sea 0",
                  "La inversión inicial se duplique"
            ],
            "correct": 1,
            "explanation": "La TIR es la tasa de descuento que iguala el VAN a cero (5.3.2)."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "Si la TIR > tasa de oportunidad (costo de capital), el proyecto:",
            "opciones": [
                  "Se rechaza por bajo rendimiento",
                  "Es rentable y se acepta",
                  "Es indiferente",
                  "Genera pérdida segura"
            ],
            "correcta": 1,
            "resumen": "Es rentable y se acepta",
            "fundamentacion": "Si TIR > costo de oportunidad, el proyecto genera más de lo mínimo esperado y se acepta (5.3.2).",
            "id": 57,
            "question": "Si la TIR > tasa de oportunidad (costo de capital), el proyecto:",
            "options": [
                  "Se rechaza por bajo rendimiento",
                  "Es rentable y se acepta",
                  "Es indiferente",
                  "Genera pérdida segura"
            ],
            "correct": 1,
            "explanation": "Si TIR > costo de oportunidad, el proyecto genera más de lo mínimo esperado y se acepta (5.3.2)."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "En el punto de equilibrio en unidades, la fórmula es:",
            "opciones": [
                  "Costos Fijos / (Precio - Costo Variable unitario)",
                  "Costos Totales / Margen",
                  "(Costos Fijos + Variables) / Precio",
                  "Ventas totales / Unidades"
            ],
            "correcta": 0,
            "resumen": "Costos Fijos / (Precio - Costo Variable unitario)",
            "fundamentacion": "PE (unidades) = Costos Fijos Totales / (Precio de venta unitario – Costo variable unitario) (pág.6).",
            "id": 58,
            "question": "En el punto de equilibrio en unidades, la fórmula es:",
            "options": [
                  "Costos Fijos / (Precio - Costo Variable unitario)",
                  "Costos Totales / Margen",
                  "(Costos Fijos + Variables) / Precio",
                  "Ventas totales / Unidades"
            ],
            "correct": 0,
            "explanation": "PE (unidades) = Costos Fijos Totales / (Precio de venta unitario – Costo variable unitario) (pág.6)."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "Una empresa tiene CF=$15,000, Pvu=$50, Cvu=$5. ¿Cuál es el punto de equilibrio en unidades?",
            "opciones": [
                  "300 unidades",
                  "334 unidades",
                  "375 unidades",
                  "250 unidades"
            ],
            "correcta": 1,
            "resumen": "334 unidades",
            "fundamentacion": "PE = 15000 / (50-5) = 15000/45 = 334 unidades (ejemplo página 6).",
            "id": 59,
            "question": "Una empresa tiene CF=$15,000, Pvu=$50, Cvu=$5. ¿Cuál es el punto de equilibrio en unidades?",
            "options": [
                  "300 unidades",
                  "334 unidades",
                  "375 unidades",
                  "250 unidades"
            ],
            "correct": 1,
            "explanation": "PE = 15000 / (50-5) = 15000/45 = 334 unidades (ejemplo página 6)."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "El Plan de Negocios integra todos los estudios previos. ¿Cuál es el primer elemento en la estructura típica?",
            "opciones": [
                  "Plan financiero",
                  "Resumen ejecutivo",
                  "Análisis de mercado",
                  "Plan técnico"
            ],
            "correcta": 1,
            "resumen": "Resumen ejecutivo",
            "fundamentacion": "El resumen ejecutivo es el primer punto y se escribe al final pero aparece al inicio del documento (pág.7).",
            "id": 60,
            "question": "El Plan de Negocios integra todos los estudios previos. ¿Cuál es el primer elemento en la estructura típica?",
            "options": [
                  "Plan financiero",
                  "Resumen ejecutivo",
                  "Análisis de mercado",
                  "Plan técnico"
            ],
            "correct": 1,
            "explanation": "El resumen ejecutivo es el primer punto y se escribe al final pero aparece al inicio del documento (pág.7)."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "¿Qué gasto corresponde a la amortización de activos intangibles?",
            "opciones": [
                  "Depreciación de maquinaria",
                  "Distribución del costo de patentes, licencias o software",
                  "Mantenimiento de edificios",
                  "Pago de intereses"
            ],
            "correcta": 1,
            "resumen": "Distribución del costo de patentes, licencias o software",
            "fundamentacion": "La amortización aplica a activos intangibles como patentes, marcas o software (5.2.2).",
            "id": 61,
            "question": "¿Qué gasto corresponde a la amortización de activos intangibles?",
            "options": [
                  "Depreciación de maquinaria",
                  "Distribución del costo de patentes, licencias o software",
                  "Mantenimiento de edificios",
                  "Pago de intereses"
            ],
            "correct": 1,
            "explanation": "La amortización aplica a activos intangibles como patentes, marcas o software (5.2.2)."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "¿Qué indica el Margen de contribución unitario?",
            "opciones": [
                  "La ganancia neta total",
                  "Lo que aporta cada unidad para cubrir costos fijos (precio - costo variable unitario)",
                  "El porcentaje de ROI",
                  "El valor del VAN"
            ],
            "correcta": 1,
            "resumen": "Lo que aporta cada unidad para cubrir costos fijos (precio - costo variable unitario)",
            "fundamentacion": "Margen de contribución = Precio – costo variable unitario, utilizado en punto de equilibrio (pág.6).",
            "id": 62,
            "question": "¿Qué indica el Margen de contribución unitario?",
            "options": [
                  "La ganancia neta total",
                  "Lo que aporta cada unidad para cubrir costos fijos (precio - costo variable unitario)",
                  "El porcentaje de ROI",
                  "El valor del VAN"
            ],
            "correct": 1,
            "explanation": "Margen de contribución = Precio – costo variable unitario, utilizado en punto de equilibrio (pág.6)."
      },
      {
            "modulo": 5,
            "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
            "enunciado": "¿Cuál es la decisión recomendada si VAN < 0 y TIR < tasa de oportunidad?",
            "opciones": [
                  "Aceptar el proyecto",
                  "Rechazar el proyecto",
                  "Indiferente",
                  "Financiar con más deuda"
            ],
            "correcta": 1,
            "resumen": "Rechazar el proyecto",
            "fundamentacion": "VAN negativo y TIR inferior indican que no es rentable, se recomienda rechazar (conclusiones 5.6).",
            "id": 63,
            "question": "¿Cuál es la decisión recomendada si VAN < 0 y TIR < tasa de oportunidad?",
            "options": [
                  "Aceptar el proyecto",
                  "Rechazar el proyecto",
                  "Indiferente",
                  "Financiar con más deuda"
            ],
            "correct": 1,
            "explanation": "VAN negativo y TIR inferior indican que no es rentable, se recomienda rechazar (conclusiones 5.6)."
      }
]
    },
    {
    "id": "cap5",
    "number": "5",
    "title": "Comunidad, Impacto Social, Ambiental y Seguridad Industrial",
    "shortTitle": "5. Impacto Social y Ambiental",
    "icon": "fa-leaf",
    "color": "#14b8a6",
    "accent": "rgba(20, 184, 166, 0.15)",
    "badge": "Unidad VI: Sostenibilidad y Legalidad",
    "description": "Evaluación del impacto social en la comunidad, licencia social para operar, Manifestación de Impacto Ambiental (MIA), gestión de la seguridad industrial y marco legal de proyectos.",
    "reading": {
        "summary": "Un proyecto exitoso y moderno debe ser económicamente rentable, pero también socialmente justo, ambientalmente responsable y legalmente impecable. Este módulo analiza la interacción del proyecto con la comunidad receptora, la mitigación de impactos negativos y la preservación de la vida mediante la seguridad industrial.",
        "sections": [
            {
                "id": "cap5-sec1",
                "title": "5.1 Evaluación del Impacto Social y Valor Compartido",
                "content": "\n                  <p>El <strong>impacto social</strong> evalúa los cambios directos e indirectos que la ejecución y operación de un proyecto provocan en las condiciones de vida de la comunidad receptora.</p>\n                  <div class=\"concept-callout\">\n                    <h4>Dimensiones del Impacto Social:</h4>\n                    <ul>\n                      <li><strong>Empleo y Economía Local:</strong> Generación de puestos de trabajo directos e indirectos, incremento de ingresos familiares y dinamización del comercio local.</li>\n                      <li><strong>Salud y Calidad de Vida:</strong> Efectos en servicios de salud, saneamiento y condiciones de habitabilidad.</li>\n                      <li><strong>Infraestructura y Servicios Públicos:</strong> Demanda sobre vialidades, energía, agua potable y escuelas.</li>\n                    </ul>\n                  </div>\n                  <h4>Licencia Social para Operar (LSO)</h4>\n                  <p>Más allá de cumplir con permisos legales y gubernamentales, la <strong>licencia social para operar</strong> es la aprobación y aceptación explícita o tácita de la comunidad local. Sin esta aceptación, el proyecto corre el riesgo de sufrir bloqueos comunitarios, huelgas y paralizaciones permanentes.</p>\n                  <p><strong>Valor Compartido:</strong> El proyecto no debe concebirse como un enclave aislado que extrae recursos, sino como un agente de desarrollo mutuo que aporta beneficios tangibles a la comunidad para asegurar un entorno de estabilidad duradera.</p>\n                "
            },
            {
                "id": "cap5-sec2",
                "title": "5.2 Estudio y Manifestación de Impacto Ambiental (MIA)",
                "content": "\n                  <p>La <strong>Manifestación de Impacto Ambiental (MIA)</strong> es el documento técnico-jurídico que describe las condiciones ambientales previas al proyecto, identifica las alteraciones potenciales y propone medidas de mitigación y monitoreo ambiental.</p>\n                  <h4>Clasificación de los Impactos Ambientales:</h4>\n                  <ul>\n                    <li><strong>Por su Signo:</strong> Positivos (reforestación, tratamiento de aguas residuales) o Negativos (emisiones, ruido, deforestación).</li>\n                    <li><strong>Por su Temporalidad:</strong> Temporales (ruido o polvo durante la fase de construcción) o Permanentes (ocupación del suelo).</li>\n                    <li><strong>Por su Reversibilidad:</strong> Reversibles (el entorno se recupera mediante acciones de mitigación) o Irreversibles (extinción de especies endémicas o contaminación de acuíferos profundos).</li>\n                    <li><strong>Directos vs. Indirectos (Inducidos):</strong> Directos ocurren por la actividad inmediata; Indirectos surgen como consecuencia secundaria (por ejemplo, una carretera que facilita la tala clandestina).</li>\n                  </ul>\n                  <div class=\"note-box\">\n                    <i class=\"fas fa-seedling\"></i>\n                    <div>\n                      <strong>Normas ISO 14000:</strong> Proporcionan lineamientos voluntarios para la gestión ambiental y la ecoeficiencia en los procesos productivos. Los bancos internacionales de desarrollo (BID, Banco Mundial) exigen rigurosas Evaluaciones de Impacto Social y Ambiental (EISA) para liberar financiamiento.\n                    </div>\n                  </div>\n                "
            },
            {
                "id": "cap5-sec3",
                "title": "5.3 Seguridad Industrial y Gestión Legal",
                "content": "\n                  <p>La <strong>seguridad industrial</strong> persigue un doble objetivo fundamental:</p>\n                  <ol>\n                    <li><strong>Proteger la integridad física y la salud de los trabajadores.</strong></li>\n                    <li><strong>Garantizar la continuidad operativa del proceso productivo</strong> y resguardar las instalaciones físicas de la empresa.</li>\n                  </ol>\n                  <p>Abarca no solo el equipo de protección personal (EPP), sino también el diseño ergonómico de estaciones de trabajo, programas de mantenimiento preventivo, sistemas contra incendios y capacitación continua.</p>\n                  <h4>Gestión Legal del Proyecto</h4>\n                  <p>Todo proyecto debe encuadrarse en el marco jurídico vigente. Ignorar la legislación acarrea multas severas, clausuras temporales o definitivas y responsabilidades penales para los administradores.</p>\n                  <ul>\n                    <li><strong>Forma Societaria:</strong> Constitución formal mercantil (S.A. de C.V., S. de R.L.).</li>\n                    <li><strong>Normatividad Sanitaria:</strong> Cumplimiento de las Normas Oficiales Mexicanas (NOM) para manejo e inocuidad de alimentos e insumos químicos.</li>\n                    <li><strong>Derechos Laborales:</strong> Contratos individuales y colectivos, aportaciones patronales de seguridad social y condiciones de higiene reglamentarias.</li>\n                  </ul>\n                "
            }
        ]
    },
    "quiz": [
        {
            "modulo": 6,
            "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
            "enunciado": "¿Qué estudia el impacto social de un proyecto?",
            "opciones": [
                "Únicamente costos financieros",
                "El cambio o efecto en la comunidad, en dimensiones como salud, empleo, cultura",
                "La rentabilidad para accionistas",
                "El cálculo de depreciación"
            ],
            "correcta": 1,
            "resumen": "El cambio o efecto en la comunidad, en dimensiones como salud, empleo, cultura",
            "fundamentacion": "El impacto social evalúa el bienestar de la población, cambios en salud, educación, economía local (6.1).",
            "id": 64,
            "question": "¿Qué estudia el impacto social de un proyecto?",
            "options": [
                "Únicamente costos financieros",
                "El cambio o efecto en la comunidad, en dimensiones como salud, empleo, cultura",
                "La rentabilidad para accionistas",
                "El cálculo de depreciación"
            ],
            "correct": 1,
            "explanation": "El impacto social evalúa el bienestar de la población, cambios en salud, educación, economía local (6.1)."
        },
        {
            "modulo": 6,
            "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
            "enunciado": "¿Cuál es un impacto social negativo posible de una fábrica en zona rural?",
            "opciones": [
                "Construcción de escuela",
                "Generación de empleo",
                "Migración masiva y saturación de servicios públicos",
                "Capacitación laboral"
            ],
            "correcta": 2,
            "resumen": "Migración masiva y saturación de servicios públicos",
            "fundamentacion": "La migración masiva y saturación de servicios públicos es un impacto negativo (ejemplo fábrica en comunidad rural, pág.2).",
            "id": 65,
            "question": "¿Cuál es un impacto social negativo posible de una fábrica en zona rural?",
            "options": [
                "Construcción de escuela",
                "Generación de empleo",
                "Migración masiva y saturación de servicios públicos",
                "Capacitación laboral"
            ],
            "correct": 2,
            "explanation": "La migración masiva y saturación de servicios públicos es un impacto negativo (ejemplo fábrica en comunidad rural, pág.2)."
        },
        {
            "modulo": 6,
            "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
            "enunciado": "¿Qué es la 'licencia social para operar'?",
            "opciones": [
                "Permiso municipal obligatorio",
                "Aceptación y aprobación de la comunidad para que el proyecto opere sin fricciones",
                "Un documento de impacto ambiental",
                "Un seguro de responsabilidad civil"
            ],
            "correcta": 1,
            "resumen": "Aceptación y aprobación de la comunidad para que el proyecto opere sin fricciones",
            "fundamentacion": "Más allá de permisos legales, la aceptación comunitaria es la licencia social para operar sin conflictos (6.1).",
            "id": 66,
            "question": "¿Qué es la 'licencia social para operar'?",
            "options": [
                "Permiso municipal obligatorio",
                "Aceptación y aprobación de la comunidad para que el proyecto opere sin fricciones",
                "Un documento de impacto ambiental",
                "Un seguro de responsabilidad civil"
            ],
            "correct": 1,
            "explanation": "Más allá de permisos legales, la aceptación comunitaria es la licencia social para operar sin conflictos (6.1)."
        },
        {
            "modulo": 6,
            "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
            "enunciado": "La Manifestación de Impacto Ambiental (MIA) es un documento que:",
            "opciones": [
                "Solo identifica impactos positivos",
                "Propone medidas para mitigar impactos negativos y monitoreo ambiental",
                "Es un estudio financiero",
                "Se usa para fijar precio de venta"
            ],
            "correcta": 1,
            "resumen": "Propone medidas para mitigar impactos negativos y monitoreo ambiental",
            "fundamentacion": "La MIA describe impactos, medidas de mitigación y plan de seguimiento (6.2).",
            "id": 67,
            "question": "La Manifestación de Impacto Ambiental (MIA) es un documento que:",
            "options": [
                "Solo identifica impactos positivos",
                "Propone medidas para mitigar impactos negativos y monitoreo ambiental",
                "Es un estudio financiero",
                "Se usa para fijar precio de venta"
            ],
            "correct": 1,
            "explanation": "La MIA describe impactos, medidas de mitigación y plan de seguimiento (6.2)."
        },
        {
            "modulo": 6,
            "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
            "enunciado": "¿Qué tipo de impacto ambiental es permanente e irreversible?",
            "opciones": [
                "Ruido durante construcción",
                "Contaminación temporal de un río",
                "Extinción de una especie local",
                "Polvo en el aire"
            ],
            "correcta": 2,
            "resumen": "Extinción de una especie local",
            "fundamentacion": "Extinción de una especie es irreversible y permanente (clasificación 6.2).",
            "id": 68,
            "question": "¿Qué tipo de impacto ambiental es permanente e irreversible?",
            "options": [
                "Ruido durante construcción",
                "Contaminación temporal de un río",
                "Extinción de una especie local",
                "Polvo en el aire"
            ],
            "correct": 2,
            "explanation": "Extinción de una especie es irreversible y permanente (clasificación 6.2)."
        },
        {
            "modulo": 6,
            "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
            "enunciado": "Un impacto ambiental positivo sería:",
            "opciones": [
                "Deforestación",
                "Emisión de gases",
                "Reforestación de un área degradada",
                "Vertido de aguas residuales"
            ],
            "correcta": 2,
            "resumen": "Reforestación de un área degradada",
            "fundamentacion": "La reforestación mejora el ambiente, es un impacto positivo (6.2).",
            "id": 69,
            "question": "Un impacto ambiental positivo sería:",
            "options": [
                "Deforestación",
                "Emisión de gases",
                "Reforestación de un área degradada",
                "Vertido de aguas residuales"
            ],
            "correct": 2,
            "explanation": "La reforestación mejora el ambiente, es un impacto positivo (6.2)."
        },
        {
            "modulo": 6,
            "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
            "enunciado": "¿Cuál es el objetivo principal de la seguridad industrial?",
            "opciones": [
                "Maximizar utilidades",
                "Proteger integridad física de trabajadores y prevenir daños en instalaciones",
                "Solo cumplir normas fiscales",
                "Reducir costo de mano de obra"
            ],
            "correcta": 1,
            "resumen": "Proteger integridad física de trabajadores y prevenir daños en instalaciones",
            "fundamentacion": "Seguridad industrial protege a empleados e instalaciones, evitando accidentes y garantizando continuidad (6.3).",
            "id": 70,
            "question": "¿Cuál es el objetivo principal de la seguridad industrial?",
            "options": [
                "Maximizar utilidades",
                "Proteger integridad física de trabajadores y prevenir daños en instalaciones",
                "Solo cumplir normas fiscales",
                "Reducir costo de mano de obra"
            ],
            "correct": 1,
            "explanation": "Seguridad industrial protege a empleados e instalaciones, evitando accidentes y garantizando continuidad (6.3)."
        },
        {
            "modulo": 6,
            "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
            "enunciado": "Ejemplo de gestión legal en un proyecto es:",
            "opciones": [
                "Calcular el ROI",
                "Obtener licencia de funcionamiento y cumplir NOM de seguridad",
                "Elaborar estudio de mercado",
                "Diseñar logotipo"
            ],
            "correcta": 1,
            "resumen": "Obtener licencia de funcionamiento y cumplir NOM de seguridad",
            "fundamentacion": "La gestión legal abarca permisos, licencias y cumplimiento de normas (pág.4-5).",
            "id": 71,
            "question": "Ejemplo de gestión legal en un proyecto es:",
            "options": [
                "Calcular el ROI",
                "Obtener licencia de funcionamiento y cumplir NOM de seguridad",
                "Elaborar estudio de mercado",
                "Diseñar logotipo"
            ],
            "correct": 1,
            "explanation": "La gestión legal abarca permisos, licencias y cumplimiento de normas (pág.4-5)."
        },
        {
            "modulo": 6,
            "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
            "enunciado": "¿Por qué es importante la evaluación de impacto social para acceder a financiamiento?",
            "opciones": [
                "Porque los bancos solo ven el VAN",
                "Porque bancos de desarrollo exigen evaluación de impacto social (EIS) como requisito",
                "No es relevante",
                "Solo para proyectos grandes de construcción"
            ],
            "correcta": 1,
            "resumen": "Porque bancos de desarrollo exigen evaluación de impacto social (EIS) como requisito",
            "fundamentacion": "Bancos como BID o fondos exigen EIS para financiar proyectos (6.1).",
            "id": 72,
            "question": "¿Por qué es importante la evaluación de impacto social para acceder a financiamiento?",
            "options": [
                "Porque los bancos solo ven el VAN",
                "Porque bancos de desarrollo exigen evaluación de impacto social (EIS) como requisito",
                "No es relevante",
                "Solo para proyectos grandes de construcción"
            ],
            "correct": 1,
            "explanation": "Bancos como BID o fondos exigen EIS para financiar proyectos (6.1)."
        },
        {
            "modulo": 6,
            "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
            "enunciado": "Dimensión del impacto social relacionada con la creación de empleos y dinamización comercial:",
            "opciones": [
                "Salud y bienestar",
                "Empleo y economía local",
                "Infraestructura",
                "Organización social"
            ],
            "correcta": 1,
            "resumen": "Empleo y economía local",
            "fundamentacion": "El empleo y economía local incluye generación de puestos de trabajo y aumento de ingresos (6.1).",
            "id": 73,
            "question": "Dimensión del impacto social relacionada con la creación de empleos y dinamización comercial:",
            "options": [
                "Salud y bienestar",
                "Empleo y economía local",
                "Infraestructura",
                "Organización social"
            ],
            "correct": 1,
            "explanation": "El empleo y economía local incluye generación de puestos de trabajo y aumento de ingresos (6.1)."
        },
        {
            "modulo": 6,
            "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
            "enunciado": "¿Qué significa que un impacto ambiental sea indirecto o inducido?",
            "opciones": [
                "Que ocurre inmediatamente",
                "Es consecuencia secundaria de la acción principal",
                "Que no afecta al entorno",
                "Es reversible"
            ],
            "correcta": 1,
            "resumen": "Es consecuencia secundaria de la acción principal",
            "fundamentacion": "Ejemplo: una carretera facilita llegada de colonos que talan bosque, impacto indirecto (6.2).",
            "id": 74,
            "question": "¿Qué significa que un impacto ambiental sea indirecto o inducido?",
            "options": [
                "Que ocurre inmediatamente",
                "Es consecuencia secundaria de la acción principal",
                "Que no afecta al entorno",
                "Es reversible"
            ],
            "correct": 1,
            "explanation": "Ejemplo: una carretera facilita llegada de colonos que talan bosque, impacto indirecto (6.2)."
        },
        {
            "modulo": 6,
            "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
            "enunciado": "¿Cuál es el doble objetivo de la seguridad industrial?",
            "opciones": [
                "Cuidar la vida de las personas y garantizar continuidad del proceso productivo",
                "Reducir costos y aumentar producción",
                "Evitar demandas legales únicamente",
                "Certificar calidad ISO"
            ],
            "correcta": 0,
            "resumen": "Cuidar la vida de las personas y garantizar continuidad del proceso productivo",
            "fundamentacion": "Proteger a los trabajadores y asegurar la operación sin interrupciones (6.3).",
            "id": 75,
            "question": "¿Cuál es el doble objetivo de la seguridad industrial?",
            "options": [
                "Cuidar la vida de las personas y garantizar continuidad del proceso productivo",
                "Reducir costos y aumentar producción",
                "Evitar demandas legales únicamente",
                "Certificar calidad ISO"
            ],
            "correct": 0,
            "explanation": "Proteger a los trabajadores y asegurar la operación sin interrupciones (6.3)."
        },
        {
            "modulo": 6,
            "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
            "enunciado": "¿Qué consecuencia puede traer ignorar la gestión legal en un proyecto?",
            "opciones": [
                "Mejor imagen corporativa",
                "Multas, clausuras y posibles responsabilidades penales",
                "Aumento de ventas",
                "Menor costo de producción"
            ],
            "correcta": 1,
            "resumen": "Multas, clausuras y posibles responsabilidades penales",
            "fundamentacion": "Incumplir normas genera sanciones, clausuras o carcel para directivos (conclusión pág.5).",
            "id": 76,
            "question": "¿Qué consecuencia puede traer ignorar la gestión legal en un proyecto?",
            "options": [
                "Mejor imagen corporativa",
                "Multas, clausuras y posibles responsabilidades penales",
                "Aumento de ventas",
                "Menor costo de producción"
            ],
            "correct": 1,
            "explanation": "Incumplir normas genera sanciones, clausuras o carcel para directivos (conclusión pág.5)."
        },
        {
            "modulo": 6,
            "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
            "enunciado": "¿Qué mide el impacto ambiental según su reversibilidad?",
            "opciones": [
                "Si el daño puede recuperarse con medidas o es permanente",
                "Si causa beneficios económicos",
                "La duración en meses",
                "La distancia del proyecto"
            ],
            "correcta": 0,
            "resumen": "Si el daño puede recuperarse con medidas o es permanente",
            "fundamentacion": "Reversible: puede recuperarse; irreversible: daño permanente (6.2).",
            "id": 77,
            "question": "¿Qué mide el impacto ambiental según su reversibilidad?",
            "options": [
                "Si el daño puede recuperarse con medidas o es permanente",
                "Si causa beneficios económicos",
                "La duración en meses",
                "La distancia del proyecto"
            ],
            "correct": 0,
            "explanation": "Reversible: puede recuperarse; irreversible: daño permanente (6.2)."
        },
        {
            "modulo": 6,
            "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
            "enunciado": "¿Cuál de los siguientes es un componente de la seguridad industrial además de protección personal?",
            "opciones": [
                "Ergonomía y mantenimiento preventivo",
                "Plan de marketing",
                "Análisis de precios",
                "Proyección de ingresos"
            ],
            "correcta": 0,
            "resumen": "Ergonomía y mantenimiento preventivo",
            "fundamentacion": "Incluye ergonomía, mantenimiento, planes contra incendios (6.3).",
            "id": 78,
            "question": "¿Cuál de los siguientes es un componente de la seguridad industrial además de protección personal?",
            "options": [
                "Ergonomía y mantenimiento preventivo",
                "Plan de marketing",
                "Análisis de precios",
                "Proyección de ingresos"
            ],
            "correct": 0,
            "explanation": "Incluye ergonomía, mantenimiento, planes contra incendios (6.3)."
        },
        {
            "modulo": 6,
            "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
            "enunciado": "¿Qué significa 'valor compartido' en relación con la comunidad?",
            "opciones": [
                "Reparto de dividendos",
                "Que el proyecto aporta beneficios reales a la comunidad creando un entorno próspero para ambos",
                "Donación del 1% de utilidades",
                "Patrocinio deportivo"
            ],
            "correcta": 1,
            "resumen": "Que el proyecto aporta beneficios reales a la comunidad creando un entorno próspero para ambos",
            "fundamentacion": "Generar valor compartido implica beneficios mutuos, comunidad más próspera y proyecto estable (6.1).",
            "id": 79,
            "question": "¿Qué significa 'valor compartido' en relación con la comunidad?",
            "options": [
                "Reparto de dividendos",
                "Que el proyecto aporta beneficios reales a la comunidad creando un entorno próspero para ambos",
                "Donación del 1% de utilidades",
                "Patrocinio deportivo"
            ],
            "correct": 1,
            "explanation": "Generar valor compartido implica beneficios mutuos, comunidad más próspera y proyecto estable (6.1)."
        },
        {
            "modulo": 6,
            "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
            "enunciado": "Un proyecto sostenible debe ser:",
            "opciones": [
                "Solo rentable económicamente",
                "Socialmente justo, ambientalmente responsable y legalmente impecable",
                "Únicamente innovador",
                "Independiente de la comunidad"
            ],
            "correcta": 1,
            "resumen": "Socialmente justo, ambientalmente responsable y legalmente impecable",
            "fundamentacion": "Conclusión Unidad VI: socialmente justo, ambientalmente responsable y legalmente impecable (pág.5).",
            "id": 80,
            "question": "Un proyecto sostenible debe ser:",
            "options": [
                "Solo rentable económicamente",
                "Socialmente justo, ambientalmente responsable y legalmente impecable",
                "Únicamente innovador",
                "Independiente de la comunidad"
            ],
            "correct": 1,
            "explanation": "Conclusión Unidad VI: socialmente justo, ambientalmente responsable y legalmente impecable (pág.5)."
        }
    ]
}
  ],
  flashcards: [
    { chapter: "Módulo 1", term: "Proyecto de Inversión", def: "Plan estructurado que al asignársele capital e insumos produce un bien o servicio útil a la sociedad con rentabilidad demostrada." },
    { chapter: "Módulo 1", term: "Perfil (Gran Visión)", def: "Estudio preliminar con información previa, sentido común y cifras globales sin investigación de campo exhaustiva." },
    { chapter: "Módulo 1", term: "Anteproyecto", def: "Estudio de prefactibilidad que analiza fuentes de mercado, tecnología, costos y rentabilidad; nivel estándar de evaluación." },
    { chapter: "Módulo 1", term: "Logística Inversa", def: "Responsabilidad del fabricante de recoger y tratar adecuadamente los productos vencidos o desechos para evitar contaminación." },
    { chapter: "Módulo 2", term: "Enfoque Marco Lógico", def: "Herramienta estructurada de gestión transversal en todas las etapas del ciclo de vida del proyecto." },
    { chapter: "Módulo 2", term: "Scope Creep", def: "Corrupción o expansión no controlada del alcance del proyecto sin ajuste de presupuesto ni cronograma." },
    { chapter: "Módulo 3", term: "Consumo Nacional Aparente", def: "Demanda = CNA = Producción Nacional + Importaciones - Exportaciones." },
    { chapter: "Módulo 3", term: "Prueba F (ANOVA)", def: "Herramienta estadística para validar variables explicativas con significancia máxima del 5%, evitando variables ilegítimas." },
    { chapter: "Módulo 3", term: "Muestreo Estratificado", def: "Técnica donde la muestra reproduce las proporciones demográficas y de ingreso de la población objetivo." },
    { chapter: "Módulo 3", term: "Canal 1B", def: "Productor -> Minoristas (detallistas) -> Consumidores finales (ejemplo clásico de misceláneas y abarrotes)." },
    { chapter: "Módulo 4", term: "Tamaño Óptimo", def: "Capacidad instalada que opera con el costo total mínimo o la máxima rentabilidad económica." },
    { chapter: "Módulo 4", term: "Equipo Clave", def: "Maquinaria costosa de capacidad estandarizada que debe utilizarse al 70-100% para no generar capital ocioso." },
    { chapter: "Módulo 4", term: "Jornada Efectiva (80%)", def: "En 8 horas de trabajo se consideran 6.4 horas (384 min) efectivas por alimentación, higiene y aseo." },
    { chapter: "Módulo 4", term: "Método SLP (Muther)", def: "Planeación Sistemática de Distribución basada en PQRST, matriz de cercanías (A, E, I, O, U, X) y código de razones." },
    { chapter: "Módulo 5", term: "Lote Económico (LE)", def: "Cantidad óptima de compra que minimiza la suma de costos de ordenar y costos de mantener inventario." },
    { chapter: "Módulo 5", term: "Punto de Equilibrio (Q)", def: "Nivel de unidades donde ingresos = costos totales: Q = CF / (P - V)." },
    { chapter: "Módulo 5", term: "TMAR Individual", def: "Tasa mínima requerida: TMAR = i + f + (i * f) (premio al riesgo e inflación promedio)." },
    { chapter: "Módulo 5", term: "Valor Actual Neto (VAN)", def: "Valor monetario actualizado de los flujos de fondos netos futuros descontados a la tasa de capital menos la inversión." },
    { chapter: "Módulo 6", term: "Licencia Social", def: "Aceptación voluntaria y respaldo continuo de la comunidad receptora para la operación pacífica del proyecto." },
    { chapter: "Módulo 6", term: "MIA", def: "Manifestación de Impacto Ambiental: documento técnico con medidas de mitigación y monitoreo ecológico." }
  ],
  masterQuestions: [
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "¿Cuál es la respuesta más conveniente para la siguiente pregunta: ¿Puede proponerse una alternativa viable de inversión para un determinado capital?",
    "opciones": [
      "Invertir en la construcción de un puente",
      "Invertir en una nueva planta de energía nuclear",
      "Invertir si es rentable en un Proyecto donde tengo experiencia y conozco el mercado",
      "Invertir en un casino",
      "Invertir en acciones"
    ],
    "correcta": 2,
    "resumen": "Invertir si es rentable en un Proyecto donde tengo experiencia y conozco el mercado.",
    "fundamentacion": "En la teoría y praxis de formulación de proyectos, la asignación eficiente de un capital determinado exige mitigar el riesgo operativo, de información y de mercado. Contar con 'know-how' (experiencia técnica) y conocimiento certero de la demanda y competencia reduce la asimetría informativa, mientras que la condición 'si es rentable' garantiza que el flujo de beneficios supere el costo de oportunidad del capital (TIR > tasa de descuento). Invertir a ciegas o en megaproyectos sin respaldo técnico-financiero destruye valor económico.",
    "id": 1,
    "question": "¿Cuál es la respuesta más conveniente para la siguiente pregunta: ¿Puede proponerse una alternativa viable de inversión para un determinado capital?",
    "options": [
      "Invertir en la construcción de un puente",
      "Invertir en una nueva planta de energía nuclear",
      "Invertir si es rentable en un Proyecto donde tengo experiencia y conozco el mercado",
      "Invertir en un casino",
      "Invertir en acciones"
    ],
    "correct": 2,
    "explanation": "En la teoría y praxis de formulación de proyectos, la asignación eficiente de un capital determinado exige mitigar el riesgo operativo, de información y de mercado. Contar con 'know-how' (experiencia técnica) y conocimiento certero de la demanda y competencia reduce la asimetría informativa, mientras que la condición 'si es rentable' garantiza que el flujo de beneficios supere el costo de oportunidad del capital (TIR > tasa de descuento). Invertir a ciegas o en megaproyectos sin respaldo técnico-financiero destruye valor económico."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "A través de cuál método se materializa la \"Evaluación\" de un Proyecto:",
    "opciones": [
      "A través del método cualitativo",
      "A través de la confección de flujos de caja",
      "A través de la investigación profunda del mercado",
      "A través de la cuantificación de inversiones",
      "A través de reconocer las ideas de un proyecto"
    ],
    "correcta": 1,
    "resumen": "A través de la confección de flujos de caja.",
    "fundamentacion": "La fase cuantitativa y decisiva de la evaluación económica y financiera de un proyecto se plasma de manera indispensable en el Flujo de Caja (Cash Flow). En él se proyectan de forma periódica todos los ingresos y egresos efectivos atribuibles al proyecto para luego aplicar sobre este saldo neto los indicadores matemáticos de bondad financiera (VAN, TIR, PRC y B/C). Sin flujo de caja, no existe base numérica para descontar dinero en el tiempo.",
    "id": 2,
    "question": "A través de cuál método se materializa la \"Evaluación\" de un Proyecto:",
    "options": [
      "A través del método cualitativo",
      "A través de la confección de flujos de caja",
      "A través de la investigación profunda del mercado",
      "A través de la cuantificación de inversiones",
      "A través de reconocer las ideas de un proyecto"
    ],
    "correct": 1,
    "explanation": "La fase cuantitativa y decisiva de la evaluación económica y financiera de un proyecto se plasma de manera indispensable en el Flujo de Caja (Cash Flow). En él se proyectan de forma periódica todos los ingresos y egresos efectivos atribuibles al proyecto para luego aplicar sobre este saldo neto los indicadores matemáticos de bondad financiera (VAN, TIR, PRC y B/C). Sin flujo de caja, no existe base numérica para descontar dinero en el tiempo."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "Una actividad para recopilar información para el Proyecto, es:",
    "opciones": [
      "Entrevistar al público",
      "Buscar anuncios de la competencia",
      "Buscar publicaciones de la empresa",
      "Revisar noticias en los medios de prensa",
      "Revisión contable de la empresa"
    ],
    "correcta": 0,
    "resumen": "Entrevistar al público.",
    "fundamentacion": "La entrevista directa a clientes potenciales (investigación de fuentes primarias) es el mecanismo fundamental y directo para levantar datos fidedignos sobre necesidades insatisfechas, hábitos de consumo, disposición a pagar (WTP) y validación de la propuesta de valor. Las demás opciones constituyen fuentes secundarias indirectas o de monitoreo complementario.",
    "id": 3,
    "question": "Una actividad para recopilar información para el Proyecto, es:",
    "options": [
      "Entrevistar al público",
      "Buscar anuncios de la competencia",
      "Buscar publicaciones de la empresa",
      "Revisar noticias en los medios de prensa",
      "Revisión contable de la empresa"
    ],
    "correct": 0,
    "explanation": "La entrevista directa a clientes potenciales (investigación de fuentes primarias) es el mecanismo fundamental y directo para levantar datos fidedignos sobre necesidades insatisfechas, hábitos de consumo, disposición a pagar (WTP) y validación de la propuesta de valor. Las demás opciones constituyen fuentes secundarias indirectas o de monitoreo complementario."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "Indique a que etapa corresponde el \"estudio de mercado\":",
    "opciones": [
      "Etapa de Identificación del Proyecto",
      "Etapa de Idea del Proyecto",
      "Etapa de Ejecución del Proyecto",
      "Etapa de Valoración del Proyecto",
      "Etapa de Formulación del Proyecto"
    ],
    "correcta": 4,
    "resumen": "Etapa de Formulación del Proyecto.",
    "fundamentacion": "El ciclo de vida del proyecto contempla la etapa de Formulación (o preinversión), en la cual se elaboran rigurosamente el Estudio de Mercado, el Estudio Técnico, el Estudio Organizacional/Legal y el Estudio Financiero. El estudio de mercado cuantifica oferta, demanda, precios y canales de comercialización requeridos para dimensionar y formular técnicamente la propuesta.",
    "id": 4,
    "question": "Indique a que etapa corresponde el \"estudio de mercado\":",
    "options": [
      "Etapa de Identificación del Proyecto",
      "Etapa de Idea del Proyecto",
      "Etapa de Ejecución del Proyecto",
      "Etapa de Valoración del Proyecto",
      "Etapa de Formulación del Proyecto"
    ],
    "correct": 4,
    "explanation": "El ciclo de vida del proyecto contempla la etapa de Formulación (o preinversión), en la cual se elaboran rigurosamente el Estudio de Mercado, el Estudio Técnico, el Estudio Organizacional/Legal y el Estudio Financiero. El estudio de mercado cuantifica oferta, demanda, precios y canales de comercialización requeridos para dimensionar y formular técnicamente la propuesta."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "Analice cada aseveración respecto de \"La definición de un Proyecto\" e identifique cuál es la correcta:",
    "opciones": [
      "La definición de un Proyecto responde al interés social",
      "La definición de un Proyecto es una mejora al proyecto actual",
      "La definición de un Proyecto corresponde a la mejor alternativa evaluada",
      "La definición de un Proyecto corresponde al interés de los inversionistas",
      "La definición de un Proyecto es la continuación de otro anterior"
    ],
    "correcta": 2,
    "resumen": "La definición de un Proyecto corresponde a la mejor alternativa evaluada.",
    "fundamentacion": "En metodología de preparación y evaluación de proyectos, un proyecto viable surge de un proceso iterativo de identificación, formulación y comparación de múltiples alternativas de solución frente a un problema u oportunidad. La decisión final de materializarlo recae sobre aquella alternativa que optimiza los recursos y maximiza el beneficio económico o social frente a las demás alternativas evaluadas.",
    "id": 5,
    "question": "Analice cada aseveración respecto de \"La definición de un Proyecto\" e identifique cuál es la correcta:",
    "options": [
      "La definición de un Proyecto responde al interés social",
      "La definición de un Proyecto es una mejora al proyecto actual",
      "La definición de un Proyecto corresponde a la mejor alternativa evaluada",
      "La definición de un Proyecto corresponde al interés de los inversionistas",
      "La definición de un Proyecto es la continuación de otro anterior"
    ],
    "correct": 2,
    "explanation": "En metodología de preparación y evaluación de proyectos, un proyecto viable surge de un proceso iterativo de identificación, formulación y comparación de múltiples alternativas de solución frente a un problema u oportunidad. La decisión final de materializarlo recae sobre aquella alternativa que optimiza los recursos y maximiza el beneficio económico o social frente a las demás alternativas evaluadas."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "Identifique cuál de los siguientes es un indicador de \"evaluación económica\":",
    "opciones": [
      "Tasa de reclamos",
      "Control de existencias",
      "Razón de liquidez",
      "Valor actual neto",
      "Cantidad de producto"
    ],
    "correcta": 3,
    "resumen": "Valor actual neto (VAN).",
    "fundamentacion": "El Valor Actual Neto (VAN o NPV) es el criterio cuantitativo por excelencia de la evaluación económica y financiera de inversiones. Mide la riqueza neta adicional expresada en moneda de hoy que generará el proyecto, descontando los flujos netos futuros a una tasa de costo de oportunidad de capital. La liquidez y control de existencias son métricas contables y de gestión operativa, no de evaluación económica de proyectos.",
    "id": 6,
    "question": "Identifique cuál de los siguientes es un indicador de \"evaluación económica\":",
    "options": [
      "Tasa de reclamos",
      "Control de existencias",
      "Razón de liquidez",
      "Valor actual neto",
      "Cantidad de producto"
    ],
    "correct": 3,
    "explanation": "El Valor Actual Neto (VAN o NPV) es el criterio cuantitativo por excelencia de la evaluación económica y financiera de inversiones. Mide la riqueza neta adicional expresada en moneda de hoy que generará el proyecto, descontando los flujos netos futuros a una tasa de costo de oportunidad de capital. La liquidez y control de existencias son métricas contables y de gestión operativa, no de evaluación económica de proyectos."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "Un \"Proyecto\" es:",
    "opciones": [
      "Una idea que se debe ejecutar siempre",
      "Un análisis del mercado",
      "Una solución o una idea de mejora para mi negocio",
      "Una solución a lo que la empresa no pudo efectuar en el pasado",
      "Un mecanismo para invertir en el futuro"
    ],
    "correcta": 2,
    "resumen": "Una solución o una idea de mejora para mi negocio.",
    "fundamentacion": "Conceptualmente, un proyecto es una propuesta estructurada y justificada que busca resolver una necesidad, aprovechar una oportunidad de mercado o generar una optimización/mejora sustancial dentro de una organización o negocio en marcha mediante la asignación temporal de recursos.",
    "id": 7,
    "question": "Un \"Proyecto\" es:",
    "options": [
      "Una idea que se debe ejecutar siempre",
      "Un análisis del mercado",
      "Una solución o una idea de mejora para mi negocio",
      "Una solución a lo que la empresa no pudo efectuar en el pasado",
      "Un mecanismo para invertir en el futuro"
    ],
    "correct": 2,
    "explanation": "Conceptualmente, un proyecto es una propuesta estructurada y justificada que busca resolver una necesidad, aprovechar una oportunidad de mercado o generar una optimización/mejora sustancial dentro de una organización o negocio en marcha mediante la asignación temporal de recursos."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "De las siguientes afirmaciones en el contexto de formulación y evaluación de un Proyecto, la correcta es:",
    "opciones": [
      "El contexto de mercado es relevante para determinar los Planes de Inversión",
      "Un Proyecto se puede efectuar sin una evaluación",
      "La rentabilidad de un Proyecto es medible a corto plazo",
      "El Mercado es el lugar donde concurren oferentes y demandantes de un producto",
      "La etapa de Ejecución es la primera actividad de un proyecto"
    ],
    "correcta": 3,
    "resumen": "El Mercado es el lugar donde concurren oferentes y demandantes de un producto.",
    "fundamentacion": "En microeconomía y evaluación de proyectos, el mercado se conceptualiza formalmente como el espacio (físico o virtual) e interacción en el cual convergen las fuerzas de la oferta (vendedores/productores) y la demanda (compradores/consumidores) para determinar los precios y cantidades transadas de bienes y servicios.",
    "id": 8,
    "question": "De las siguientes afirmaciones en el contexto de formulación y evaluación de un Proyecto, la correcta es:",
    "options": [
      "El contexto de mercado es relevante para determinar los Planes de Inversión",
      "Un Proyecto se puede efectuar sin una evaluación",
      "La rentabilidad de un Proyecto es medible a corto plazo",
      "El Mercado es el lugar donde concurren oferentes y demandantes de un producto",
      "La etapa de Ejecución es la primera actividad de un proyecto"
    ],
    "correct": 3,
    "explanation": "En microeconomía y evaluación de proyectos, el mercado se conceptualiza formalmente como el espacio (físico o virtual) e interacción en el cual convergen las fuerzas de la oferta (vendedores/productores) y la demanda (compradores/consumidores) para determinar los precios y cantidades transadas de bienes y servicios."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "Clasifique en orden correcto las \"etapas\" de un Proyecto:",
    "opciones": [
      "Formulación, Identificación, Evaluación y Ejecución",
      "Identificación, Idea, Formulación, Evaluación y Ejecución",
      "Identificación, Formulación, Evaluación y Ejecución",
      "Formulación, Evaluación y Ejecución",
      "Idea, Identificación, Ejecución y Formulación"
    ],
    "correcta": 2,
    "resumen": "Identificación, Formulación, Evaluación y Ejecución.",
    "fundamentacion": "El ciclo estándar y sistemático de un proyecto comprende secuencialmente: 1) Identificación (reconocer el problema/oportunidad y objetivos), 2) Formulación (diseño técnico, de mercado y organizacional), 3) Evaluación (determinación de viabilidad económica con flujos de fondos) y 4) Ejecución (puesta en marcha e implementación de la inversión).",
    "id": 9,
    "question": "Clasifique en orden correcto las \"etapas\" de un Proyecto:",
    "options": [
      "Formulación, Identificación, Evaluación y Ejecución",
      "Identificación, Idea, Formulación, Evaluación y Ejecución",
      "Identificación, Formulación, Evaluación y Ejecución",
      "Formulación, Evaluación y Ejecución",
      "Idea, Identificación, Ejecución y Formulación"
    ],
    "correct": 2,
    "explanation": "El ciclo estándar y sistemático de un proyecto comprende secuencialmente: 1) Identificación (reconocer el problema/oportunidad y objetivos), 2) Formulación (diseño técnico, de mercado y organizacional), 3) Evaluación (determinación de viabilidad económica con flujos de fondos) y 4) Ejecución (puesta en marcha e implementación de la inversión)."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "¿Cómo desarrollaría la \"Idea\" de un Proyecto para mejorar un Gimnasio?",
    "opciones": [
      "Mediante el estudio del mercado",
      "A través de lo que solicita el público en las redes sociales",
      "Mediante la formulación de una propuesta de inversión",
      "Mediante las ideas de empresarios",
      "Tratando de aprovechar que están bajas las tasas de interés"
    ],
    "correcta": 1,
    "resumen": "A través de lo que solicita el público en las redes sociales.",
    "fundamentacion": "La génesis o gestación de la 'idea' en servicios de consumo (como un gimnasio) proviene del levantamiento directo de retroalimentación, insatisfacciones o tendencias manifestadas por los usuarios. Las redes sociales y canales directos proporcionan información valiosa y espontánea para orientar la propuesta antes de pasar a la formulación formal.",
    "id": 10,
    "question": "¿Cómo desarrollaría la \"Idea\" de un Proyecto para mejorar un Gimnasio?",
    "options": [
      "Mediante el estudio del mercado",
      "A través de lo que solicita el público en las redes sociales",
      "Mediante la formulación de una propuesta de inversión",
      "Mediante las ideas de empresarios",
      "Tratando de aprovechar que están bajas las tasas de interés"
    ],
    "correct": 1,
    "explanation": "La génesis o gestación de la 'idea' en servicios de consumo (como un gimnasio) proviene del levantamiento directo de retroalimentación, insatisfacciones o tendencias manifestadas por los usuarios. Las redes sociales y canales directos proporcionan información valiosa y espontánea para orientar la propuesta antes de pasar a la formulación formal."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "¿Cuál de las siguientes alternativas es una necesidad para ejecutar un Proyecto?",
    "opciones": [
      "Necesidad de utilizar más ahorros",
      "Necesidad de generar nuevos productos",
      "Necesidad de ampliación de la empresa",
      "Necesidad de contratar más personal",
      "Necesidad de vender más"
    ],
    "correcta": 1,
    "resumen": "Necesidad de generar nuevos productos.",
    "fundamentacion": "La justificación estratégica para la ejecución de proyectos de inversión radica principalmente en satisfacer demandas latentes o adaptarse al ciclo de vida del mercado mediante la innovación y lanzamiento de nuevos bienes o servicios que otorguen valor y sostenibilidad al negocio.",
    "id": 11,
    "question": "¿Cuál de las siguientes alternativas es una necesidad para ejecutar un Proyecto?",
    "options": [
      "Necesidad de utilizar más ahorros",
      "Necesidad de generar nuevos productos",
      "Necesidad de ampliación de la empresa",
      "Necesidad de contratar más personal",
      "Necesidad de vender más"
    ],
    "correct": 1,
    "explanation": "La justificación estratégica para la ejecución de proyectos de inversión radica principalmente en satisfacer demandas latentes o adaptarse al ciclo de vida del mercado mediante la innovación y lanzamiento de nuevos bienes o servicios que otorguen valor y sostenibilidad al negocio."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "Nombre un indicador de evaluación económica:",
    "opciones": [
      "Tasa Interna de Retorno",
      "Tasa de depósitos a plazo",
      "Precio medio",
      "Resultado operacional",
      "Tasa de impuestos"
    ],
    "correcta": 0,
    "resumen": "Tasa Interna de Retorno (TIR).",
    "fundamentacion": "La Tasa Interna de Retorno (TIR o IRR) es el indicador dinámico de rentabilidad económica que iguala el valor actual de los flujos de caja futuros con la inversión inicial (haciendo el VAN igual a cero). Refleja la rentabilidad intrínseca porcentual del capital invertido.",
    "id": 12,
    "question": "Nombre un indicador de evaluación económica:",
    "options": [
      "Tasa Interna de Retorno",
      "Tasa de depósitos a plazo",
      "Precio medio",
      "Resultado operacional",
      "Tasa de impuestos"
    ],
    "correct": 0,
    "explanation": "La Tasa Interna de Retorno (TIR o IRR) es el indicador dinámico de rentabilidad económica que iguala el valor actual de los flujos de caja futuros con la inversión inicial (haciendo el VAN igual a cero). Refleja la rentabilidad intrínseca porcentual del capital invertido."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "¿Cuál de las siguientes etapas precede a la etapa de Evaluación de un Proyecto?",
    "opciones": [
      "La etapa de Idea del proyecto",
      "La etapa de Formulación del proyecto",
      "Las etapas de Formulación y Ejecución de un proyecto",
      "Las etapas de Identificación de un proyecto a la mejor alternativa evaluada",
      "Las etapas de Idea, Identificación y Formulación"
    ],
    "correcta": 4,
    "resumen": "Las etapas de Idea, Identificación y Formulación.",
    "fundamentacion": "Para evaluar rigurosamente la rentabilidad de un proyecto, es condición sine qua non haber transitado y completado previamente la concepción de la idea, la identificación del problema/oportunidad y la formulación técnica, comercial y de costos que alimentan el flujo de fondos.",
    "id": 13,
    "question": "¿Cuál de las siguientes etapas precede a la etapa de Evaluación de un Proyecto?",
    "options": [
      "La etapa de Idea del proyecto",
      "La etapa de Formulación del proyecto",
      "Las etapas de Formulación y Ejecución de un proyecto",
      "Las etapas de Identificación de un proyecto a la mejor alternativa evaluada",
      "Las etapas de Idea, Identificación y Formulación"
    ],
    "correct": 4,
    "explanation": "Para evaluar rigurosamente la rentabilidad de un proyecto, es condición sine qua non haber transitado y completado previamente la concepción de la idea, la identificación del problema/oportunidad y la formulación técnica, comercial y de costos que alimentan el flujo de fondos."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "¿Qué interrogantes responden al \"Estudio Técnico\"?",
    "opciones": [
      "Al ¿qué y producir?",
      "Al ¿qué, cuánto, dónde, para quién y a qué precio producir?",
      "Al ¿cómo distribuir los productos y servicios?",
      "¿A qué precio debo vender mis productos y servicios?",
      "¿Dónde debo localizar mi nuevo local comercial?"
    ],
    "correcta": 1,
    "resumen": "Al ¿qué, cuánto, dónde, para quién y a qué precio producir?",
    "fundamentacion": "El estudio técnico aborda de forma multidimensional la viabilidad operativa y productiva: tamaño del proyecto (cuánto), localización (dónde), especificaciones técnicas del bien (qué), articulado con los requerimientos identificados en el mercado (para quién y a qué condiciones de precio).",
    "id": 14,
    "question": "¿Qué interrogantes responden al \"Estudio Técnico\"?",
    "options": [
      "Al ¿qué y producir?",
      "Al ¿qué, cuánto, dónde, para quién y a qué precio producir?",
      "Al ¿cómo distribuir los productos y servicios?",
      "¿A qué precio debo vender mis productos y servicios?",
      "¿Dónde debo localizar mi nuevo local comercial?"
    ],
    "correct": 1,
    "explanation": "El estudio técnico aborda de forma multidimensional la viabilidad operativa y productiva: tamaño del proyecto (cuánto), localización (dónde), especificaciones técnicas del bien (qué), articulado con los requerimientos identificados en el mercado (para quién y a qué condiciones de precio)."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "Señale qué es un Plan de Inversión:",
    "opciones": [
      "Planificar la inversión que se ejecutará",
      "Mantener una cartera de proyectos relacionados",
      "Invertir en más de un proyecto",
      "Planificar un cambio de localización de la empresa",
      "Contar con alternativas de inversión"
    ],
    "correcta": 0,
    "resumen": "Planificar la inversión que se ejecutará.",
    "fundamentacion": "El Plan de Inversión es el documento y cronograma estructurado donde se cuantifican, calendarizan y asignan las fuentes de financiamiento para todos los activos tangibles (maquinaria, infraestructura), intangibles (patentes, licencias) y capital de trabajo requeridos para materializar el proyecto.",
    "id": 15,
    "question": "Señale qué es un Plan de Inversión:",
    "options": [
      "Planificar la inversión que se ejecutará",
      "Mantener una cartera de proyectos relacionados",
      "Invertir en más de un proyecto",
      "Planificar un cambio de localización de la empresa",
      "Contar con alternativas de inversión"
    ],
    "correct": 0,
    "explanation": "El Plan de Inversión es el documento y cronograma estructurado donde se cuantifican, calendarizan y asignan las fuentes de financiamiento para todos los activos tangibles (maquinaria, infraestructura), intangibles (patentes, licencias) y capital de trabajo requeridos para materializar el proyecto."
  },
  {
    "modulo": 2,
    "moduloNombre": "Módulo 2: Metodología y Evaluación de Proyectos",
    "enunciado": "Las variables que definen la \"Metodología de Evaluación\" de un Proyecto de Inversión, son:",
    "opciones": [
      "Flujos y costos del Proyecto",
      "Ventas y ganancias del Proyecto",
      "Beneficiarios y clientes del Proyecto",
      "Objetivo y finalidad del estudio y de la inversión del Proyecto",
      "Utilidades y rentabilidad en el Proyecto"
    ],
    "correcta": 3,
    "resumen": "Objetivo y finalidad del estudio y de la inversión del Proyecto.",
    "fundamentacion": "El diseño de la metodología evaluativa depende críticamente del propósito del estudio: si se evalúa la rentabilidad del proyecto puro (sin deuda), la rentabilidad del inversionista (con deuda), la creación de un nuevo negocio o una decisión de outsourcing/modernización/reemplazo en una empresa en marcha.",
    "id": 16,
    "question": "Las variables que definen la \"Metodología de Evaluación\" de un Proyecto de Inversión, son:",
    "options": [
      "Flujos y costos del Proyecto",
      "Ventas y ganancias del Proyecto",
      "Beneficiarios y clientes del Proyecto",
      "Objetivo y finalidad del estudio y de la inversión del Proyecto",
      "Utilidades y rentabilidad en el Proyecto"
    ],
    "correct": 3,
    "explanation": "El diseño de la metodología evaluativa depende críticamente del propósito del estudio: si se evalúa la rentabilidad del proyecto puro (sin deuda), la rentabilidad del inversionista (con deuda), la creación de un nuevo negocio o una decisión de outsourcing/modernización/reemplazo en una empresa en marcha."
  },
  {
    "modulo": 2,
    "moduloNombre": "Módulo 2: Metodología y Evaluación de Proyectos",
    "enunciado": "Podemos considerar como un \"beneficiario externo\" de un Proyecto, a:",
    "opciones": [
      "Al público",
      "A los directores",
      "A los clientes",
      "A las familias",
      "A los proveedores"
    ],
    "correcta": 0,
    "resumen": "Al público.",
    "fundamentacion": "En el análisis de externalidades y partes interesadas (stakeholders), el público en general o la comunidad adyacente actúa como beneficiario externo indirecto al verse favorecido por externalidades positivas generadas por el proyecto (mejora de infraestructura urbana, dinamismo económico, seguridad), sin participar directamente en la compraventa del bien.",
    "id": 17,
    "question": "Podemos considerar como un \"beneficiario externo\" de un Proyecto, a:",
    "options": [
      "Al público",
      "A los directores",
      "A los clientes",
      "A las familias",
      "A los proveedores"
    ],
    "correct": 0,
    "explanation": "En el análisis de externalidades y partes interesadas (stakeholders), el público en general o la comunidad adyacente actúa como beneficiario externo indirecto al verse favorecido por externalidades positivas generadas por el proyecto (mejora de infraestructura urbana, dinamismo económico, seguridad), sin participar directamente en la compraventa del bien."
  },
  {
    "modulo": 2,
    "moduloNombre": "Módulo 2: Metodología y Evaluación de Proyectos",
    "enunciado": "¿Qué justifica que el EML (Enfoque de Marco Lógico) sea el enfoque más utilizado en la evaluación de proyectos?",
    "opciones": [
      "Un método único de la evaluación de proyectos",
      "Mejores a los enfoques tradicionales",
      "Un nuevo concepto para evaluar proyectos",
      "La utilidad en el ciclo de vida de los proyectos",
      "Lo utilizan solo los países con grandes proyectos de envergadura"
    ],
    "correcta": 3,
    "resumen": "La utilidad en el ciclo de vida de los proyectos.",
    "fundamentacion": "El Enfoque de Marco Lógico (EML) destaca internacionalmente (utilizado por el BID, Banco Mundial, CEPAL) porque proporciona una herramienta integral de gestión estructurada que articula fin, propósito, componentes y actividades, sirviendo transversalmente en la identificación, formulación, seguimiento y evaluación ex-post a lo largo de todo el ciclo de vida.",
    "id": 18,
    "question": "¿Qué justifica que el EML (Enfoque de Marco Lógico) sea el enfoque más utilizado en la evaluación de proyectos?",
    "options": [
      "Un método único de la evaluación de proyectos",
      "Mejores a los enfoques tradicionales",
      "Un nuevo concepto para evaluar proyectos",
      "La utilidad en el ciclo de vida de los proyectos",
      "Lo utilizan solo los países con grandes proyectos de envergadura"
    ],
    "correct": 3,
    "explanation": "El Enfoque de Marco Lógico (EML) destaca internacionalmente (utilizado por el BID, Banco Mundial, CEPAL) porque proporciona una herramienta integral de gestión estructurada que articula fin, propósito, componentes y actividades, sirviendo transversalmente en la identificación, formulación, seguimiento y evaluación ex-post a lo largo de todo el ciclo de vida."
  },
  {
    "modulo": 2,
    "moduloNombre": "Módulo 2: Metodología y Evaluación de Proyectos",
    "enunciado": "¿Qué significado posee el \"Preconcepto del Evaluador\"?",
    "opciones": [
      "Generar proyectos sin financiamiento",
      "Evaluar mal el proyecto",
      "Preconcebir ideas del proyecto lo que vuelve sesgado a los resultados",
      "No admitir que el proyecto está mal formulado",
      "Dejarse llevar por el mercado"
    ],
    "correcta": 2,
    "resumen": "Preconcebir ideas del proyecto lo que vuelve sesgado a los resultados.",
    "fundamentacion": "El sesgo o preconcepto del evaluador ocurre cuando el analista asume hipótesis previas no fundamentadas o manipula parámetros técnicos y proyecciones para forzar que el proyecto resulte rentable, perdiendo objetividad e induciendo a malas decisiones de asignación de capital.",
    "id": 19,
    "question": "¿Qué significado posee el \"Preconcepto del Evaluador\"?",
    "options": [
      "Generar proyectos sin financiamiento",
      "Evaluar mal el proyecto",
      "Preconcebir ideas del proyecto lo que vuelve sesgado a los resultados",
      "No admitir que el proyecto está mal formulado",
      "Dejarse llevar por el mercado"
    ],
    "correct": 2,
    "explanation": "El sesgo o preconcepto del evaluador ocurre cuando el analista asume hipótesis previas no fundamentadas o manipula parámetros técnicos y proyecciones para forzar que el proyecto resulte rentable, perdiendo objetividad e induciendo a malas decisiones de asignación de capital."
  },
  {
    "modulo": 2,
    "moduloNombre": "Módulo 2: Metodología y Evaluación de Proyectos",
    "enunciado": "¿Cuál de los siguientes es un estudio que se encuentra en la categoría según el \"objetivo y finalidad\" de la inversión?",
    "opciones": [
      "Estudio para crear nuevas líneas de negocio",
      "Estudio para medir los hábitos del Proyecto",
      "Estudio para medir la capacidad competitiva",
      "Estudio para medir la fuerza laboral",
      "Estudio para modernizar la planta"
    ],
    "correcta": 0,
    "resumen": "Estudio para crear nuevas líneas de negocio.",
    "fundamentacion": "Según la finalidad del estudio y de la inversión (clasificación de Nassir Sapag Chain), los proyectos se dividen en: estudios para evaluar la creación de un nuevo negocio/nuevas líneas de negocio versus estudios para evaluar modificaciones en proyectos en marcha (outsourcing, internalización, reemplazo o ampliación).",
    "id": 20,
    "question": "¿Cuál de los siguientes es un estudio que se encuentra en la categoría según el \"objetivo y finalidad\" de la inversión?",
    "options": [
      "Estudio para crear nuevas líneas de negocio",
      "Estudio para medir los hábitos del Proyecto",
      "Estudio para medir la capacidad competitiva",
      "Estudio para medir la fuerza laboral",
      "Estudio para modernizar la planta"
    ],
    "correct": 0,
    "explanation": "Según la finalidad del estudio y de la inversión (clasificación de Nassir Sapag Chain), los proyectos se dividen en: estudios para evaluar la creación de un nuevo negocio/nuevas líneas de negocio versus estudios para evaluar modificaciones en proyectos en marcha (outsourcing, internalización, reemplazo o ampliación)."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "Un \"Monopolio\" es:",
    "opciones": [
      "Cuando existe un solo demandante del producto o servicio",
      "Cuando existe un solo proveedor",
      "Cuando solo existe un solo tipo de insumo",
      "Cuando existe un solo oferente del producto",
      "Cuando el precio de los bienes baja"
    ],
    "correcta": 3,
    "resumen": "Cuando existe un solo oferente del producto.",
    "fundamentacion": "Por definición microeconómica, una estructura de mercado en monopolio se caracteriza por la existencia de un único productor/vendedor (oferente) que satisface toda la demanda del mercado y ejerce poder sobre la fijación de precios, careciendo de sustitutos cercanos.",
    "id": 21,
    "question": "Un \"Monopolio\" es:",
    "options": [
      "Cuando existe un solo demandante del producto o servicio",
      "Cuando existe un solo proveedor",
      "Cuando solo existe un solo tipo de insumo",
      "Cuando existe un solo oferente del producto",
      "Cuando el precio de los bienes baja"
    ],
    "correct": 3,
    "explanation": "Por definición microeconómica, una estructura de mercado en monopolio se caracteriza por la existencia de un único productor/vendedor (oferente) que satisface toda la demanda del mercado y ejerce poder sobre la fijación de precios, careciendo de sustitutos cercanos."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "¿Cuál de los siguientes aspectos es considerado en un \"Estudio de Mercado\"?",
    "opciones": [
      "Demostrar que existe demanda de mercado para el producto",
      "Determinar el valor de los insumos",
      "Calcular el precio de los insumos",
      "Calcular el precio del producto",
      "Revisar los flujos de caja"
    ],
    "correcta": 0,
    "resumen": "Demostrar que existe demanda de mercado para el producto.",
    "fundamentacion": "El objetivo primario e insustituible del estudio de mercado es ratificar empíricamente la existencia de un conjunto suficiente de consumidores dispuestos a adquirir el bien o servicio propuesto a determinados precios y calidades. Si no hay demanda demostrada, el proyecto carece de base.",
    "id": 22,
    "question": "¿Cuál de los siguientes aspectos es considerado en un \"Estudio de Mercado\"?",
    "options": [
      "Demostrar que existe demanda de mercado para el producto",
      "Determinar el valor de los insumos",
      "Calcular el precio de los insumos",
      "Calcular el precio del producto",
      "Revisar los flujos de caja"
    ],
    "correct": 0,
    "explanation": "El objetivo primario e insustituible del estudio de mercado es ratificar empíricamente la existencia de un conjunto suficiente de consumidores dispuestos a adquirir el bien o servicio propuesto a determinados precios y calidades. Si no hay demanda demostrada, el proyecto carece de base."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "La elasticidad de la demanda es importante para determinar cambios en los precios de los productos, ya que:",
    "opciones": [
      "Cambios en la cantidad demandada afectan la cantidad ofrecida",
      "Cambios en los precios no significan necesariamente mayores ingresos",
      "Cambios en la demanda alteran el precio de equilibrio",
      "Cambios tecnológicos aumentan la oferta y precio de los productos",
      "Cambios en la cantidad alteran la cantidad ofrecida del producto"
    ],
    "correcta": 1,
    "resumen": "Cambios en los precios no significan necesariamente mayores ingresos.",
    "fundamentacion": "La elasticidad precio de la demanda mide la sensibilidad porcentual del consumo ante variaciones en el precio. Si la demanda es elástica (|Ep| > 1), un alza de precios contraerá tanto la cantidad que los ingresos totales caerán; si es inelástica, subir los precios incrementará los ingresos totales. Por ello, alterar el precio no implica automáticamente ganar más.",
    "id": 23,
    "question": "La elasticidad de la demanda es importante para determinar cambios en los precios de los productos, ya que:",
    "options": [
      "Cambios en la cantidad demandada afectan la cantidad ofrecida",
      "Cambios en los precios no significan necesariamente mayores ingresos",
      "Cambios en la demanda alteran el precio de equilibrio",
      "Cambios tecnológicos aumentan la oferta y precio de los productos",
      "Cambios en la cantidad alteran la cantidad ofrecida del producto"
    ],
    "correct": 1,
    "explanation": "La elasticidad precio de la demanda mide la sensibilidad porcentual del consumo ante variaciones en el precio. Si la demanda es elástica (|Ep| > 1), un alza de precios contraerá tanto la cantidad que los ingresos totales caerán; si es inelástica, subir los precios incrementará los ingresos totales. Por ello, alterar el precio no implica automáticamente ganar más."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "Ante un aumento en la demanda de mercado, ¿qué sucede con el precio y cantidad demandada de equilibrio?",
    "opciones": [
      "Ambos disminuyen",
      "Ambos aumentan",
      "El precio sube y la cantidad baja",
      "El precio baja y la cantidad de equilibrio",
      "Solo se altera el precio de equilibrio"
    ],
    "correcta": 1,
    "resumen": "Ambos aumentan.",
    "fundamentacion": "En el modelo clásico de oferta y demanda con pendiente normal, un desplazamiento hacia la derecha de la curva de demanda (ceteris paribus) genera un exceso de demanda temporal que empuja el precio hacia arriba y estimula a los productores a ofertar mayor cantidad, alcanzando un nuevo equilibrio con mayor precio y mayor cantidad transada.",
    "id": 24,
    "question": "Ante un aumento en la demanda de mercado, ¿qué sucede con el precio y cantidad demandada de equilibrio?",
    "options": [
      "Ambos disminuyen",
      "Ambos aumentan",
      "El precio sube y la cantidad baja",
      "El precio baja y la cantidad de equilibrio",
      "Solo se altera el precio de equilibrio"
    ],
    "correct": 1,
    "explanation": "En el modelo clásico de oferta y demanda con pendiente normal, un desplazamiento hacia la derecha de la curva de demanda (ceteris paribus) genera un exceso de demanda temporal que empuja el precio hacia arriba y estimula a los productores a ofertar mayor cantidad, alcanzando un nuevo equilibrio con mayor precio y mayor cantidad transada."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "¿Qué pasaría si en la industria existen productos muy diferenciados?",
    "opciones": [
      "Se genera especialización",
      "Se generan barreras de entrada a nuevos consumidores",
      "Se genera mayor competencia",
      "Se genera mayor utilidad para las empresas competidoras",
      "La industria elimina las barreras de entrada"
    ],
    "correcta": 0,
    "resumen": "Se genera especialización.",
    "fundamentacion": "La diferenciación acusada de productos fomenta que cada competidor atienda nichos específicos mediante ventajas competitivas únicas (especialización), fidelizando clientes y reduciendo la sustitución directa por precio.",
    "id": 25,
    "question": "¿Qué pasaría si en la industria existen productos muy diferenciados?",
    "options": [
      "Se genera especialización",
      "Se generan barreras de entrada a nuevos consumidores",
      "Se genera mayor competencia",
      "Se genera mayor utilidad para las empresas competidoras",
      "La industria elimina las barreras de entrada"
    ],
    "correct": 0,
    "explanation": "La diferenciación acusada de productos fomenta que cada competidor atienda nichos específicos mediante ventajas competitivas únicas (especialización), fidelizando clientes y reduciendo la sustitución directa por precio."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "Los productos según su tipo de consumo se clasifican en:",
    "opciones": [
      "Bienes Duraderos y Bienes Perecederos",
      "Bienes Sustitutos y Bienes Complementarios",
      "Bienes Reales y Bienes Demandados",
      "Bienes Ofrecidos y Bienes Producidos",
      "Bienes de Consumo y Bienes de Capital"
    ],
    "correcta": 0,
    "resumen": "Bienes Duraderos y Bienes Perecederos.",
    "fundamentacion": "Desde el punto de vista del comportamiento temporal del consumo y durabilidad del bien, los productos se categorizan fundamentalmente en Bienes Duraderos (utilizables por periodos prolongados como electrodomésticos o autos) y Perecederos (consumibles inmediatamente o de rápida caducidad como alimentos).",
    "id": 26,
    "question": "Los productos según su tipo de consumo se clasifican en:",
    "options": [
      "Bienes Duraderos y Bienes Perecederos",
      "Bienes Sustitutos y Bienes Complementarios",
      "Bienes Reales y Bienes Demandados",
      "Bienes Ofrecidos y Bienes Producidos",
      "Bienes de Consumo y Bienes de Capital"
    ],
    "correct": 0,
    "explanation": "Desde el punto de vista del comportamiento temporal del consumo y durabilidad del bien, los productos se categorizan fundamentalmente en Bienes Duraderos (utilizables por periodos prolongados como electrodomésticos o autos) y Perecederos (consumibles inmediatamente o de rápida caducidad como alimentos)."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "Las \"economías de escala\", son:",
    "opciones": [
      "Capacidad de atender una mayor demanda de mercado",
      "Capacidad de ofrecer mayor cantidad de productos",
      "Capacidad de negociación con los productores",
      "Capacidad de uso de instalaciones para mantener bajos costos",
      "Capacidad de aumentar el poder de negociación con los proveedores de insumos"
    ],
    "correcta": 3,
    "resumen": "Capacidad de uso de instalaciones para mantener bajos costos.",
    "fundamentacion": "Las economías de escala surgen cuando la empresa expande su capacidad productiva y nivel de producción, diluyendo sus costos fijos y optimizando procesos en sus instalaciones, lo que provoca que el costo medio unitario de producción disminuya conforme aumenta el volumen.",
    "id": 27,
    "question": "Las \"economías de escala\", son:",
    "options": [
      "Capacidad de atender una mayor demanda de mercado",
      "Capacidad de ofrecer mayor cantidad de productos",
      "Capacidad de negociación con los productores",
      "Capacidad de uso de instalaciones para mantener bajos costos",
      "Capacidad de aumentar el poder de negociación con los proveedores de insumos"
    ],
    "correct": 3,
    "explanation": "Las economías de escala surgen cuando la empresa expande su capacidad productiva y nivel de producción, diluyendo sus costos fijos y optimizando procesos en sus instalaciones, lo que provoca que el costo medio unitario de producción disminuya conforme aumenta el volumen."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "¿Cuál de las siguientes se considera una \"fuerza competitiva\"?",
    "opciones": [
      "Amenaza de nuevos competidores",
      "La calidad del producto",
      "Los medios de producción",
      "La velocidad de la reacción de la demanda",
      "El aumento del precio de los productos"
    ],
    "correcta": 0,
    "resumen": "Amenaza de nuevos competidores.",
    "fundamentacion": "Bajo el clásico modelo de las 5 Fuerzas de Michael Porter para el análisis de atractivo industrial, las fuerzas son: 1) Amenaza de nuevos entrantes, 2) Poder de clientes, 3) Poder de proveedores, 4) Amenaza de sustitutos y 5) Rivalidad interna.",
    "id": 28,
    "question": "¿Cuál de las siguientes se considera una \"fuerza competitiva\"?",
    "options": [
      "Amenaza de nuevos competidores",
      "La calidad del producto",
      "Los medios de producción",
      "La velocidad de la reacción de la demanda",
      "El aumento del precio de los productos"
    ],
    "correct": 0,
    "explanation": "Bajo el clásico modelo de las 5 Fuerzas de Michael Porter para el análisis de atractivo industrial, las fuerzas son: 1) Amenaza de nuevos entrantes, 2) Poder de clientes, 3) Poder de proveedores, 4) Amenaza de sustitutos y 5) Rivalidad interna."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "¿Qué es el \"poder negociador\" de los clientes como fuerza competitiva?",
    "opciones": [
      "Cuando los clientes no desean comprar el producto ofrecido",
      "Cuando los clientes demandan una mayor cantidad de productos a la ofrecida",
      "Cuando los clientes reclaman por los productos y exigen su devolución",
      "Cuando los clientes poseen muchas alternativas de productos en el mercado y presionan a la baja en el precio",
      "Cuando los clientes se trasladan de zona geográfica"
    ],
    "correcta": 3,
    "resumen": "Cuando los clientes poseen muchas alternativas de productos en el mercado y presionan a la baja en el precio.",
    "fundamentacion": "El poder de los compradores reside en su capacidad de forzar reducciones de precios, exigir mayor calidad o mejores condiciones comerciales al contar con un bajo costo de cambio y múltiples opciones sustitutas en el mercado.",
    "id": 29,
    "question": "¿Qué es el \"poder negociador\" de los clientes como fuerza competitiva?",
    "options": [
      "Cuando los clientes no desean comprar el producto ofrecido",
      "Cuando los clientes demandan una mayor cantidad de productos a la ofrecida",
      "Cuando los clientes reclaman por los productos y exigen su devolución",
      "Cuando los clientes poseen muchas alternativas de productos en el mercado y presionan a la baja en el precio",
      "Cuando los clientes se trasladan de zona geográfica"
    ],
    "correct": 3,
    "explanation": "El poder de los compradores reside en su capacidad de forzar reducciones de precios, exigir mayor calidad o mejores condiciones comerciales al contar con un bajo costo de cambio y múltiples opciones sustitutas en el mercado."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "El \"poder negociador\" de los clientes aumenta cuando:",
    "opciones": [
      "El cliente no sabe dónde comprar",
      "El cliente no conoce los productos sustitutos",
      "El cliente no conoce a los proveedores",
      "El cliente conoce a los distribuidores",
      "El cliente posee total información de la oferta de mercado"
    ],
    "correcta": 4,
    "resumen": "El cliente posee total información de la oferta de mercado.",
    "fundamentacion": "La simetría y transparencia informativa sobre costos, precios de la competencia y características de los productos otorga al comprador un apalancamiento definitivo para exigir condiciones más favorables.",
    "id": 30,
    "question": "El \"poder negociador\" de los clientes aumenta cuando:",
    "options": [
      "El cliente no sabe dónde comprar",
      "El cliente no conoce los productos sustitutos",
      "El cliente no conoce a los proveedores",
      "El cliente conoce a los distribuidores",
      "El cliente posee total información de la oferta de mercado"
    ],
    "correct": 4,
    "explanation": "La simetría y transparencia informativa sobre costos, precios de la competencia y características de los productos otorga al comprador un apalancamiento definitivo para exigir condiciones más favorables."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "De acuerdo con el ejemplo del caso \"La Insolencia\", ¿qué estrategia se realiza para mitigar el poder negociador de los clientes?",
    "opciones": [
      "Restringir la oferta de productos",
      "Aumentar el precio de los productos",
      "Generar fidelización de los clientes con productos de calidad",
      "Ofrecer nueva información de los productos",
      "Disminuir la cantidad de insumos"
    ],
    "correcta": 2,
    "resumen": "Generar fidelización de los clientes con productos de calidad.",
    "fundamentacion": "En el caso 'La Insolencia' (comercio de medialunas gourmet en calle con presentación formal), la estrategia central para neutralizar la presión de precios fue una fuerte propuesta de valor fundamentada en calidad superior, imagen de marca y fidelización afectiva, aislando al producto de la competencia genérica.",
    "id": 31,
    "question": "De acuerdo con el ejemplo del caso \"La Insolencia\", ¿qué estrategia se realiza para mitigar el poder negociador de los clientes?",
    "options": [
      "Restringir la oferta de productos",
      "Aumentar el precio de los productos",
      "Generar fidelización de los clientes con productos de calidad",
      "Ofrecer nueva información de los productos",
      "Disminuir la cantidad de insumos"
    ],
    "correct": 2,
    "explanation": "En el caso 'La Insolencia' (comercio de medialunas gourmet en calle con presentación formal), la estrategia central para neutralizar la presión de precios fue una fuerte propuesta de valor fundamentada en calidad superior, imagen de marca y fidelización afectiva, aislando al producto de la competencia genérica."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "Si observamos el caso de \"La Insolencia\": Este emprendimiento creó un concepto, una marca y una forma de entender la realidad desde la observación del comercio en la calle. ¿Cuál de los siguientes aspectos es considerado en un \"Estudio de Mercado\"?",
    "opciones": [
      "Revisar los flujos de caja",
      "Determinar el valor de los insumos",
      "Demostrar que existe demanda de mercado para el producto",
      "Calcular el precio de venta",
      "Calcular el precio de los insumos"
    ],
    "correcta": 2,
    "resumen": "Demostrar que existe demanda de mercado para el producto.",
    "fundamentacion": "Al igual que en la pregunta conceptual del módulo, la observación directa en la calle buscaba probar que existía una demanda activa no satisfecha de trabajadores y transeúntes dispuestos a consumir panadería de alta calidad al paso.",
    "id": 32,
    "question": "Si observamos el caso de \"La Insolencia\": Este emprendimiento creó un concepto, una marca y una forma de entender la realidad desde la observación del comercio en la calle. ¿Cuál de los siguientes aspectos es considerado en un \"Estudio de Mercado\"?",
    "options": [
      "Revisar los flujos de caja",
      "Determinar el valor de los insumos",
      "Demostrar que existe demanda de mercado para el producto",
      "Calcular el precio de venta",
      "Calcular el precio de los insumos"
    ],
    "correct": 2,
    "explanation": "Al igual que en la pregunta conceptual del módulo, la observación directa en la calle buscaba probar que existía una demanda activa no satisfecha de trabajadores y transeúntes dispuestos a consumir panadería de alta calidad al paso."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "¿Qué pasaría si un aumento tecnológico afecta positivamente a la industria?",
    "opciones": [
      "Aumenta la oferta de mercado",
      "Aumenta la demanda de mercado",
      "Aumenta la cantidad de competidores",
      "No afecta, ya que el mercado es indiferente a los cambios tecnológicos",
      "La industria elimina las barreras de entrada"
    ],
    "correcta": 0,
    "resumen": "Aumenta la oferta de mercado.",
    "fundamentacion": "Un avance o innovación tecnológica reduce los costos unitarios de producción y agiliza los procesos, lo que desplaza la curva de oferta agregada hacia la derecha (aumento de la oferta disponible a cada nivel de precio).",
    "id": 33,
    "question": "¿Qué pasaría si un aumento tecnológico afecta positivamente a la industria?",
    "options": [
      "Aumenta la oferta de mercado",
      "Aumenta la demanda de mercado",
      "Aumenta la cantidad de competidores",
      "No afecta, ya que el mercado es indiferente a los cambios tecnológicos",
      "La industria elimina las barreras de entrada"
    ],
    "correct": 0,
    "explanation": "Un avance o innovación tecnológica reduce los costos unitarios de producción y agiliza los procesos, lo que desplaza la curva de oferta agregada hacia la derecha (aumento de la oferta disponible a cada nivel de precio)."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "Mientras más alta es la tasa de interés de descuento del Proyecto, se tendrá que:",
    "opciones": [
      "La TIR será mayor, ya que la tasa condiciona el resultado en el tiempo",
      "La TIR será menor, ya que la tasa condiciona el resultado en el tiempo",
      "El VAN del Proyecto será menor a mayor tasa, ya que los flujos disminuyen",
      "El VAN del Proyecto será mayor a mayor tasa, ya que los flujos disminuyen"
    ],
    "correcta": 2,
    "resumen": "El VAN del Proyecto será menor a mayor tasa, ya que los flujos disminuyen.",
    "fundamentacion": "En la fórmula del VAN: VAN = Σ [Ft / (1+i)^t] - I0, la tasa de descuento i se encuentra en el denominador. Conforme se incrementa la tasa i, el factor de descuento (1+i)^t crece exponencialmente, lo que reduce sustancialmente el valor presente de los flujos futuros de caja y hace que el VAN disminuya progresivamente.",
    "id": 34,
    "question": "Mientras más alta es la tasa de interés de descuento del Proyecto, se tendrá que:",
    "options": [
      "La TIR será mayor, ya que la tasa condiciona el resultado en el tiempo",
      "La TIR será menor, ya que la tasa condiciona el resultado en el tiempo",
      "El VAN del Proyecto será menor a mayor tasa, ya que los flujos disminuyen",
      "El VAN del Proyecto será mayor a mayor tasa, ya que los flujos disminuyen"
    ],
    "correct": 2,
    "explanation": "En la fórmula del VAN: VAN = Σ [Ft / (1+i)^t] - I0, la tasa de descuento i se encuentra en el denominador. Conforme se incrementa la tasa i, el factor de descuento (1+i)^t crece exponencialmente, lo que reduce sustancialmente el valor presente de los flujos futuros de caja y hace que el VAN disminuya progresivamente."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "¿Qué sucede si el PRC > T (donde T es el plazo de evaluación del proyecto)?",
    "opciones": [
      "Se recupera el capital al mismo año de la inversión",
      "No se alcanza a recuperar el capital",
      "Se aplaza el proyecto la empresa",
      "Se anula el proyecto",
      "Se recupera el capital al primer año"
    ],
    "correcta": 1,
    "resumen": "No se alcanza a recuperar el capital.",
    "fundamentacion": "El Periodo de Recuperación del Capital (PRC o Payback) mide el tiempo requerido para que los flujos generados amorticen íntegramente la inversión inicial. Si el PRC excede el horizonte temporal 'T' previsto de vida útil del proyecto, significa que dentro del plazo estimado de evaluación la inversión no alcanza a recuperarse.",
    "id": 35,
    "question": "¿Qué sucede si el PRC > T (donde T es el plazo de evaluación del proyecto)?",
    "options": [
      "Se recupera el capital al mismo año de la inversión",
      "No se alcanza a recuperar el capital",
      "Se aplaza el proyecto la empresa",
      "Se anula el proyecto",
      "Se recupera el capital al primer año"
    ],
    "correct": 1,
    "explanation": "El Periodo de Recuperación del Capital (PRC o Payback) mide el tiempo requerido para que los flujos generados amorticen íntegramente la inversión inicial. Si el PRC excede el horizonte temporal 'T' previsto de vida útil del proyecto, significa que dentro del plazo estimado de evaluación la inversión no alcanza a recuperarse."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "VAN lo definimos como:",
    "opciones": [
      "Valor presente de los flujos de un proyecto",
      "Valor de la tasa de interés utilizado en el proyecto de inversión",
      "Valor del dinero en el tiempo",
      "Valor actualizado del proyecto",
      "Valor Anualizado de las ganancias"
    ],
    "correcta": 3,
    "resumen": "Valor actualizado del proyecto (o Valor de flujos netos descontados menos inversión).",
    "fundamentacion": "El Valor Actual Neto representa el valor actualizado (traído a moneda de hoy) de todos los beneficios y costos del proyecto descontados a la tasa de exigencia mínima requerida, descontando el desembolso inicial.",
    "id": 36,
    "question": "VAN lo definimos como:",
    "options": [
      "Valor presente de los flujos de un proyecto",
      "Valor de la tasa de interés utilizado en el proyecto de inversión",
      "Valor del dinero en el tiempo",
      "Valor actualizado del proyecto",
      "Valor Anualizado de las ganancias"
    ],
    "correct": 3,
    "explanation": "El Valor Actual Neto representa el valor actualizado (traído a moneda de hoy) de todos los beneficios y costos del proyecto descontados a la tasa de exigencia mínima requerida, descontando el desembolso inicial."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "El resultado de un escenario optimista implicará:",
    "opciones": [
      "Un VAN mayor, PRC bajo y una TIR alta",
      "Un VAN menor, TIR baja y PRC más largo",
      "Un VAN mayor, un PRC menor y una TIR menor",
      "Un VAN positivo, pero una TIR menor"
    ],
    "correcta": 0,
    "resumen": "Un VAN mayor, PRC bajo y una TIR alta.",
    "fundamentacion": "En un escenario optimista (donde las ventas son superiores, los costos inferiores o los precios favorables), los flujos de caja netos se incrementan, lo que consecuentemente eleva el VAN a niveles máximos, incrementa la TIR muy por encima de la tasa de descuento y reduce el tiempo necesario para recuperar la inversión inicial (PRC menor).",
    "id": 37,
    "question": "El resultado de un escenario optimista implicará:",
    "options": [
      "Un VAN mayor, PRC bajo y una TIR alta",
      "Un VAN menor, TIR baja y PRC más largo",
      "Un VAN mayor, un PRC menor y una TIR menor",
      "Un VAN positivo, pero una TIR menor"
    ],
    "correct": 0,
    "explanation": "En un escenario optimista (donde las ventas son superiores, los costos inferiores o los precios favorables), los flujos de caja netos se incrementan, lo que consecuentemente eleva el VAN a niveles máximos, incrementa la TIR muy por encima de la tasa de descuento y reduce el tiempo necesario para recuperar la inversión inicial (PRC menor)."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "¿Qué sucede si VAN > 0 y TIR = i de descuento?",
    "opciones": [
      "Se anula el proyecto",
      "Es indiferente realizar el proyecto",
      "Se rechaza el proyecto",
      "Se realiza el proyecto la empresa",
      "Se finaliza el proyecto"
    ],
    "correcta": 3,
    "resumen": "Se realiza el proyecto (Aceptación del proyecto).",
    "fundamentacion": "Si el criterio de decisión del VAN es mayor a cero (VAN > 0), el proyecto genera valor por encima de la exigencia del costo de capital. En la lógica de evaluación planteada en este reactivo, un VAN positivo es condición suficiente de viabilidad para aprobar la realización del proyecto.",
    "id": 38,
    "question": "¿Qué sucede si VAN > 0 y TIR = i de descuento?",
    "options": [
      "Se anula el proyecto",
      "Es indiferente realizar el proyecto",
      "Se rechaza el proyecto",
      "Se realiza el proyecto la empresa",
      "Se finaliza el proyecto"
    ],
    "correct": 3,
    "explanation": "Si el criterio de decisión del VAN es mayor a cero (VAN > 0), el proyecto genera valor por encima de la exigencia del costo de capital. En la lógica de evaluación planteada en este reactivo, un VAN positivo es condición suficiente de viabilidad para aprobar la realización del proyecto."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "¿Qué tipo de escenarios se consideran para un análisis de sensibilidad?",
    "opciones": [
      "Tasa de interés fija y tasa variable",
      "Flujos de caja positivos y negativos",
      "VAN>0 y TIR>0",
      "Favorable y neutro",
      "Conservador y optimista"
    ],
    "correcta": 4,
    "resumen": "Conservador (pesimista) y optimista.",
    "fundamentacion": "El análisis de sensibilidad por escenarios modela comúnmente tres situaciones: Pesimista/Conservador (caída de demanda, encarecimiento de costos), Base o más probable, y Optimista (expansión acelerada de ingresos), permitiendo evaluar la solidez del proyecto ante variaciones críticas.",
    "id": 39,
    "question": "¿Qué tipo de escenarios se consideran para un análisis de sensibilidad?",
    "options": [
      "Tasa de interés fija y tasa variable",
      "Flujos de caja positivos y negativos",
      "VAN>0 y TIR>0",
      "Favorable y neutro",
      "Conservador y optimista"
    ],
    "correct": 4,
    "explanation": "El análisis de sensibilidad por escenarios modela comúnmente tres situaciones: Pesimista/Conservador (caída de demanda, encarecimiento de costos), Base o más probable, y Optimista (expansión acelerada de ingresos), permitiendo evaluar la solidez del proyecto ante variaciones críticas."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "¿Cuáles de los siguientes ítems corresponden a las conclusiones del Proyecto?",
    "opciones": [
      "Un resumen ejecutivo, introducción y conclusión del proyecto",
      "Un resumen ejecutivo, determinación de flujos de caja y análisis de sensibilidad",
      "Un resumen ejecutivo, análisis de variables y conclusión del proyecto",
      "Un resumen ejecutivo, flujos de caja y ampliación del proyecto",
      "Flujos de caja y conclusión del proyecto"
    ],
    "correcta": 2,
    "resumen": "Un resumen ejecutivo, análisis de variables y conclusión del proyecto.",
    "fundamentacion": "El informe final de evaluación de un proyecto condensa en su cierre ejecutivo el Resumen Ejecutivo (hallazgos clave), el Análisis de Variables (impacto de riesgos y supuestos) y la Recomendación/Conclusión final respecto a ejecutar, postergar o rechazar la inversión.",
    "id": 40,
    "question": "¿Cuáles de los siguientes ítems corresponden a las conclusiones del Proyecto?",
    "options": [
      "Un resumen ejecutivo, introducción y conclusión del proyecto",
      "Un resumen ejecutivo, determinación de flujos de caja y análisis de sensibilidad",
      "Un resumen ejecutivo, análisis de variables y conclusión del proyecto",
      "Un resumen ejecutivo, flujos de caja y ampliación del proyecto",
      "Flujos de caja y conclusión del proyecto"
    ],
    "correct": 2,
    "explanation": "El informe final de evaluación de un proyecto condensa en su cierre ejecutivo el Resumen Ejecutivo (hallazgos clave), el Análisis de Variables (impacto de riesgos y supuestos) y la Recomendación/Conclusión final respecto a ejecutar, postergar o rechazar la inversión."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "¿Qué sucede si el VAN es positivo?",
    "opciones": [
      "Se realiza el proyecto",
      "Se evalúa el proyecto",
      "Se rechaza el proyecto",
      "Se aplaza el proyecto la empresa",
      "Se anula el proyecto"
    ],
    "correcta": 0,
    "resumen": "Se realiza el proyecto.",
    "fundamentacion": "La regla de decisión financiera incondicional del VAN establece: Si VAN > 0, el proyecto genera riqueza neta por encima del costo de oportunidad del capital y del retorno exigido, por lo que debe ser aceptado y realizado.",
    "id": 41,
    "question": "¿Qué sucede si el VAN es positivo?",
    "options": [
      "Se realiza el proyecto",
      "Se evalúa el proyecto",
      "Se rechaza el proyecto",
      "Se aplaza el proyecto la empresa",
      "Se anula el proyecto"
    ],
    "correct": 0,
    "explanation": "La regla de decisión financiera incondicional del VAN establece: Si VAN > 0, el proyecto genera riqueza neta por encima del costo de oportunidad del capital y del retorno exigido, por lo que debe ser aceptado y realizado."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "Los criterios más utilizados para evaluar un Proyecto son:",
    "opciones": [
      "VAN, TIR, PRC",
      "Flujos correctos",
      "Rentabilidad",
      "Tasa de interés",
      "Proyectos paralelos"
    ],
    "correcta": 0,
    "resumen": "VAN, TIR, PRC.",
    "fundamentacion": "La tríada clásica de indicadores de evaluación cuantitativa son: 1) VAN (mide agregación de valor monetario), 2) TIR (mide rentabilidad porcentual periódica) y 3) PRC o Payback (mide tiempo de liquidez y exposición al riesgo del capital invertido).",
    "id": 42,
    "question": "Los criterios más utilizados para evaluar un Proyecto son:",
    "options": [
      "VAN, TIR, PRC",
      "Flujos correctos",
      "Rentabilidad",
      "Tasa de interés",
      "Proyectos paralelos"
    ],
    "correct": 0,
    "explanation": "La tríada clásica de indicadores de evaluación cuantitativa son: 1) VAN (mide agregación de valor monetario), 2) TIR (mide rentabilidad porcentual periódica) y 3) PRC o Payback (mide tiempo de liquidez y exposición al riesgo del capital invertido)."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "¿Qué es la tasa interna de retorno (TIR)?",
    "opciones": [
      "Es la tasa de interés del proyecto",
      "Es la tasa de interés del capital",
      "Es la tasa de interés de los flujos",
      "Es la tasa de interés de descuento",
      "Es la tasa de interés de descuento que hace que el VAN = 0"
    ],
    "correcta": 4,
    "resumen": "Es la tasa de interés de descuento que hace que el VAN = 0.",
    "fundamentacion": "La definición matemática y económica estricta de la TIR es aquella tasa de descuento específica que iguala el valor presente de los flujos de fondos futuros con la inversión inicial, resultando en un VAN exactamente igual a cero.",
    "id": 43,
    "question": "¿Qué es la tasa interna de retorno (TIR)?",
    "options": [
      "Es la tasa de interés del proyecto",
      "Es la tasa de interés del capital",
      "Es la tasa de interés de los flujos",
      "Es la tasa de interés de descuento",
      "Es la tasa de interés de descuento que hace que el VAN = 0"
    ],
    "correct": 4,
    "explanation": "La definición matemática y económica estricta de la TIR es aquella tasa de descuento específica que iguala el valor presente de los flujos de fondos futuros con la inversión inicial, resultando en un VAN exactamente igual a cero."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "Si la TIR es mayor a la tasa de descuento del proyecto, ¿qué conclusión se realiza?",
    "opciones": [
      "Se realiza el proyecto",
      "Se rechaza el proyecto",
      "Es indiferente",
      "Se modifica la tasa de interés"
    ],
    "correcta": 0,
    "resumen": "Se realiza el proyecto.",
    "fundamentacion": "Cuando la TIR supera la tasa de descuento (TIR > i), significa que el proyecto rinde a una tasa superior a la que exige el inversionista o la que cuesta financiarlo en el mercado, generando rentabilidad económica excedente (VAN > 0) y ameritando su ejecución.",
    "id": 44,
    "question": "Si la TIR es mayor a la tasa de descuento del proyecto, ¿qué conclusión se realiza?",
    "options": [
      "Se realiza el proyecto",
      "Se rechaza el proyecto",
      "Es indiferente",
      "Se modifica la tasa de interés"
    ],
    "correct": 0,
    "explanation": "Cuando la TIR supera la tasa de descuento (TIR > i), significa que el proyecto rinde a una tasa superior a la que exige el inversionista o la que cuesta financiarlo en el mercado, generando rentabilidad económica excedente (VAN > 0) y ameritando su ejecución."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "¿Por qué se utilizan distintos escenarios de sensibilidad?",
    "opciones": [
      "Porque se puede escoger el mejor resultado",
      "Porque se puede rechazar el peor resultado",
      "Porque se observa cómo se modelan y afectan los flujos de caja ante variaciones",
      "Para no escoger el peor resultado",
      "Porque se necesita comprobar si el VAN es positivo"
    ],
    "correcta": 2,
    "resumen": "Porque se observa cómo se modelan y afectan los flujos de caja ante variaciones.",
    "fundamentacion": "El análisis de sensibilidad permite a la gerencia identificar qué variables críticas (precio, costos, demanda, tasa) tienen mayor impacto sobre el flujo de fondos y determinar los rangos de tolerancia en que el proyecto se mantiene rentable frente a imprevistos del entorno.",
    "id": 45,
    "question": "¿Por qué se utilizan distintos escenarios de sensibilidad?",
    "options": [
      "Porque se puede escoger el mejor resultado",
      "Porque se puede rechazar el peor resultado",
      "Porque se observa cómo se modelan y afectan los flujos de caja ante variaciones",
      "Para no escoger el peor resultado",
      "Porque se necesita comprobar si el VAN es positivo"
    ],
    "correct": 2,
    "explanation": "El análisis de sensibilidad permite a la gerencia identificar qué variables críticas (precio, costos, demanda, tasa) tienen mayor impacto sobre el flujo de fondos y determinar los rangos de tolerancia en que el proyecto se mantiene rentable frente a imprevistos del entorno."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "Si un Proyecto posee flujos negativos (pérdidas) en algunos periodos de tiempo y positivos (ganancias) en otros periodos de tiempo, ¿entonces se puede calcular el VAN?",
    "opciones": [
      "Sí se puede, ya que considera el plazo total del proyecto y descuenta cada flujo individual",
      "No se puede, porque los resultados serán errados",
      "Puede ser, siempre que existan más flujos positivos que negativos",
      "Se puede, siempre que existan menos de dos flujos negativos",
      "Se puede, solo si el resultado del VAN>0"
    ],
    "correcta": 0,
    "resumen": "Sí se puede, ya que considera el plazo total del proyecto y descuenta cada flujo individual.",
    "fundamentacion": "El cálculo del VAN es perfectamente aplicable a cualquier secuencia de flujos de caja, sean positivos, negativos o mixtos, pues cada término del flujo de caja Ft se descuenta algebraicamente mediante su factor (1+i)^t. (Nota: donde sí pueden surgir inconsistencias matemáticas de múltiples tasas es en la TIR, pero nunca en el VAN).",
    "id": 46,
    "question": "Si un Proyecto posee flujos negativos (pérdidas) en algunos periodos de tiempo y positivos (ganancias) en otros periodos de tiempo, ¿entonces se puede calcular el VAN?",
    "options": [
      "Sí se puede, ya que considera el plazo total del proyecto y descuenta cada flujo individual",
      "No se puede, porque los resultados serán errados",
      "Puede ser, siempre que existan más flujos positivos que negativos",
      "Se puede, siempre que existan menos de dos flujos negativos",
      "Se puede, solo si el resultado del VAN>0"
    ],
    "correct": 0,
    "explanation": "El cálculo del VAN es perfectamente aplicable a cualquier secuencia de flujos de caja, sean positivos, negativos o mixtos, pues cada término del flujo de caja Ft se descuenta algebraicamente mediante su factor (1+i)^t. (Nota: donde sí pueden surgir inconsistencias matemáticas de múltiples tasas es en la TIR, pero nunca en el VAN)."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "¿Qué son los costos directos?",
    "opciones": [
      "Gastos generales de administración",
      "Costos que se relacionan directamente con el producto o servicio, fácilmente identificables",
      "Todos los costos financieros",
      "Únicamente la materia prima"
    ],
    "correcta": 1,
    "resumen": "Costos que se relacionan directamente con el producto o servicio, fácilmente identificables",
    "fundamentacion": "Los costos directos son aquellos identificables y asignables directamente a un producto o servicio, como mano de obra directa y materiales (sección 5.1.1).",
    "id": 47,
    "question": "¿Qué son los costos directos?",
    "options": [
      "Gastos generales de administración",
      "Costos que se relacionan directamente con el producto o servicio, fácilmente identificables",
      "Todos los costos financieros",
      "Únicamente la materia prima"
    ],
    "correct": 1,
    "explanation": "Los costos directos son aquellos identificables y asignables directamente a un producto o servicio, como mano de obra directa y materiales (sección 5.1.1)."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "Dentro de los costos directos de mano de obra se incluye:",
    "opciones": [
      "Sueldos de gerentes administrativos",
      "Salarios y prestaciones de operarios de producción",
      "Gastos de limpieza de oficinas",
      "Renta de instalaciones"
    ],
    "correcta": 1,
    "resumen": "Salarios y prestaciones de operarios de producción",
    "fundamentacion": "La mano de obra directa incluye salarios de operarios, supervisión directa y capacitación del personal productivo (5.1.1.1).",
    "id": 48,
    "question": "Dentro de los costos directos de mano de obra se incluye:",
    "options": [
      "Sueldos de gerentes administrativos",
      "Salarios y prestaciones de operarios de producción",
      "Gastos de limpieza de oficinas",
      "Renta de instalaciones"
    ],
    "correct": 1,
    "explanation": "La mano de obra directa incluye salarios de operarios, supervisión directa y capacitación del personal productivo (5.1.1.1)."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "¿Cuál de los siguientes es un costo indirecto típico?",
    "opciones": [
      "Materia prima para el producto",
      "Sueldos del personal administrativo",
      "Salario de operarios de producción",
      "Empaques específicos del producto"
    ],
    "correcta": 1,
    "resumen": "Sueldos del personal administrativo",
    "fundamentacion": "Los costos indirectos son comunes a muchos productos, como sueldos administrativos, rentas o servicios generales (sección 5.2).",
    "id": 49,
    "question": "¿Cuál de los siguientes es un costo indirecto típico?",
    "options": [
      "Materia prima para el producto",
      "Sueldos del personal administrativo",
      "Salario de operarios de producción",
      "Empaques específicos del producto"
    ],
    "correct": 1,
    "explanation": "Los costos indirectos son comunes a muchos productos, como sueldos administrativos, rentas o servicios generales (sección 5.2)."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "Los costos fijos se caracterizan por:",
    "opciones": [
      "Variar proporcionalmente con la producción",
      "No variar con el nivel de producción",
      "Depender solo de la materia prima",
      "Ser siempre financieros"
    ],
    "correcta": 1,
    "resumen": "No variar con el nivel de producción",
    "fundamentacion": "Los costos fijos no cambian con el nivel de producción, ej. rentas, seguros (clasificación complementaria, pág.2).",
    "id": 50,
    "question": "Los costos fijos se caracterizan por:",
    "options": [
      "Variar proporcionalmente con la producción",
      "No variar con el nivel de producción",
      "Depender solo de la materia prima",
      "Ser siempre financieros"
    ],
    "correct": 1,
    "explanation": "Los costos fijos no cambian con el nivel de producción, ej. rentas, seguros (clasificación complementaria, pág.2)."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "¿Qué mide la depreciación de activos tangibles?",
    "opciones": [
      "El incremento del valor de mercado",
      "La distribución del costo del activo durante su vida útil por desgaste u obsolescencia",
      "Gastos de mantenimiento",
      "Solo la pérdida fiscal"
    ],
    "correcta": 1,
    "resumen": "La distribución del costo del activo durante su vida útil por desgaste u obsolescencia",
    "fundamentacion": "La depreciación refleja el desgaste o consumo de activos fijos tangibles y reduce utilidad fiscal (5.2.2).",
    "id": 51,
    "question": "¿Qué mide la depreciación de activos tangibles?",
    "options": [
      "El incremento del valor de mercado",
      "La distribución del costo del activo durante su vida útil por desgaste u obsolescencia",
      "Gastos de mantenimiento",
      "Solo la pérdida fiscal"
    ],
    "correct": 1,
    "explanation": "La depreciación refleja el desgaste o consumo de activos fijos tangibles y reduce utilidad fiscal (5.2.2)."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "¿Cuál es el propósito del flujo de efectivo proyectado (pro-forma)?",
    "opciones": [
      "Mostrar solo utilidades acumuladas",
      "Detallar entradas y salidas de efectivo previstas",
      "Calcular solo inversión inicial",
      "Mostrar el balance general"
    ],
    "correcta": 1,
    "resumen": "Detallar entradas y salidas de efectivo previstas",
    "fundamentacion": "El flujo de efectivo proyectado detalla las entradas y salidas de efectivo previstas (5.3).",
    "id": 52,
    "question": "¿Cuál es el propósito del flujo de efectivo proyectado (pro-forma)?",
    "options": [
      "Mostrar solo utilidades acumuladas",
      "Detallar entradas y salidas de efectivo previstas",
      "Calcular solo inversión inicial",
      "Mostrar el balance general"
    ],
    "correct": 1,
    "explanation": "El flujo de efectivo proyectado detalla las entradas y salidas de efectivo previstas (5.3)."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "¿Qué indica el Periodo de Recuperación de la Inversión (PRI)?",
    "opciones": [
      "La rentabilidad en porcentaje",
      "El tiempo en que se recupera la inversión inicial con flujos acumulados",
      "El valor actual neto",
      "La tasa de descuento"
    ],
    "correcta": 1,
    "resumen": "El tiempo en que se recupera la inversión inicial con flujos acumulados",
    "fundamentacion": "El PRI o Payback es el tiempo que tarda el proyecto en generar flujos suficientes para recuperar la inversión (5.3.1.2).",
    "id": 53,
    "question": "¿Qué indica el Periodo de Recuperación de la Inversión (PRI)?",
    "options": [
      "La rentabilidad en porcentaje",
      "El tiempo en que se recupera la inversión inicial con flujos acumulados",
      "El valor actual neto",
      "La tasa de descuento"
    ],
    "correct": 1,
    "explanation": "El PRI o Payback es el tiempo que tarda el proyecto en generar flujos suficientes para recuperar la inversión (5.3.1.2)."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "Fórmula básica del ROI (Return on Investment):",
    "opciones": [
      "(Utilidad Bruta / Ventas) × 100",
      "(Utilidad Neta / Inversión Total) × 100",
      "(Flujo de caja / Patrimonio)",
      "(VAN / Inversión) × 100"
    ],
    "correcta": 1,
    "resumen": "(Utilidad Neta / Inversión Total) × 100",
    "fundamentacion": "ROI = (Utilidad Neta / Inversión Total) × 100, según 5.3.1.3.",
    "id": 54,
    "question": "Fórmula básica del ROI (Return on Investment):",
    "options": [
      "(Utilidad Bruta / Ventas) × 100",
      "(Utilidad Neta / Inversión Total) × 100",
      "(Flujo de caja / Patrimonio)",
      "(VAN / Inversión) × 100"
    ],
    "correct": 1,
    "explanation": "ROI = (Utilidad Neta / Inversión Total) × 100, según 5.3.1.3."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "Un VAN mayor que cero (VAN > 0) significa que:",
    "opciones": [
      "El proyecto destruye valor, se rechaza",
      "El proyecto es rentable, genera valor superior a la inversión",
      "Es indiferente",
      "La TIR es menor a la tasa de oportunidad"
    ],
    "correcta": 1,
    "resumen": "El proyecto es rentable, genera valor superior a la inversión",
    "fundamentacion": "VAN > 0 indica rentabilidad, se acepta el proyecto (5.3.1.4).",
    "id": 55,
    "question": "Un VAN mayor que cero (VAN > 0) significa que:",
    "options": [
      "El proyecto destruye valor, se rechaza",
      "El proyecto es rentable, genera valor superior a la inversión",
      "Es indiferente",
      "La TIR es menor a la tasa de oportunidad"
    ],
    "correct": 1,
    "explanation": "VAN > 0 indica rentabilidad, se acepta el proyecto (5.3.1.4)."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "La Tasa Interna de Retorno (TIR) es la tasa que hace que:",
    "opciones": [
      "El ROI sea máximo",
      "El VAN sea igual a cero",
      "El periodo de recuperación sea 0",
      "La inversión inicial se duplique"
    ],
    "correcta": 1,
    "resumen": "El VAN sea igual a cero",
    "fundamentacion": "La TIR es la tasa de descuento que iguala el VAN a cero (5.3.2).",
    "id": 56,
    "question": "La Tasa Interna de Retorno (TIR) es la tasa que hace que:",
    "options": [
      "El ROI sea máximo",
      "El VAN sea igual a cero",
      "El periodo de recuperación sea 0",
      "La inversión inicial se duplique"
    ],
    "correct": 1,
    "explanation": "La TIR es la tasa de descuento que iguala el VAN a cero (5.3.2)."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "Si la TIR > tasa de oportunidad (costo de capital), el proyecto:",
    "opciones": [
      "Se rechaza por bajo rendimiento",
      "Es rentable y se acepta",
      "Es indiferente",
      "Genera pérdida segura"
    ],
    "correcta": 1,
    "resumen": "Es rentable y se acepta",
    "fundamentacion": "Si TIR > costo de oportunidad, el proyecto genera más de lo mínimo esperado y se acepta (5.3.2).",
    "id": 57,
    "question": "Si la TIR > tasa de oportunidad (costo de capital), el proyecto:",
    "options": [
      "Se rechaza por bajo rendimiento",
      "Es rentable y se acepta",
      "Es indiferente",
      "Genera pérdida segura"
    ],
    "correct": 1,
    "explanation": "Si TIR > costo de oportunidad, el proyecto genera más de lo mínimo esperado y se acepta (5.3.2)."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "En el punto de equilibrio en unidades, la fórmula es:",
    "opciones": [
      "Costos Fijos / (Precio - Costo Variable unitario)",
      "Costos Totales / Margen",
      "(Costos Fijos + Variables) / Precio",
      "Ventas totales / Unidades"
    ],
    "correcta": 0,
    "resumen": "Costos Fijos / (Precio - Costo Variable unitario)",
    "fundamentacion": "PE (unidades) = Costos Fijos Totales / (Precio de venta unitario – Costo variable unitario) (pág.6).",
    "id": 58,
    "question": "En el punto de equilibrio en unidades, la fórmula es:",
    "options": [
      "Costos Fijos / (Precio - Costo Variable unitario)",
      "Costos Totales / Margen",
      "(Costos Fijos + Variables) / Precio",
      "Ventas totales / Unidades"
    ],
    "correct": 0,
    "explanation": "PE (unidades) = Costos Fijos Totales / (Precio de venta unitario – Costo variable unitario) (pág.6)."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "Una empresa tiene CF=$15,000, Pvu=$50, Cvu=$5. ¿Cuál es el punto de equilibrio en unidades?",
    "opciones": [
      "300 unidades",
      "334 unidades",
      "375 unidades",
      "250 unidades"
    ],
    "correcta": 1,
    "resumen": "334 unidades",
    "fundamentacion": "PE = 15000 / (50-5) = 15000/45 = 334 unidades (ejemplo página 6).",
    "id": 59,
    "question": "Una empresa tiene CF=$15,000, Pvu=$50, Cvu=$5. ¿Cuál es el punto de equilibrio en unidades?",
    "options": [
      "300 unidades",
      "334 unidades",
      "375 unidades",
      "250 unidades"
    ],
    "correct": 1,
    "explanation": "PE = 15000 / (50-5) = 15000/45 = 334 unidades (ejemplo página 6)."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "El Plan de Negocios integra todos los estudios previos. ¿Cuál es el primer elemento en la estructura típica?",
    "opciones": [
      "Plan financiero",
      "Resumen ejecutivo",
      "Análisis de mercado",
      "Plan técnico"
    ],
    "correcta": 1,
    "resumen": "Resumen ejecutivo",
    "fundamentacion": "El resumen ejecutivo es el primer punto y se escribe al final pero aparece al inicio del documento (pág.7).",
    "id": 60,
    "question": "El Plan de Negocios integra todos los estudios previos. ¿Cuál es el primer elemento en la estructura típica?",
    "options": [
      "Plan financiero",
      "Resumen ejecutivo",
      "Análisis de mercado",
      "Plan técnico"
    ],
    "correct": 1,
    "explanation": "El resumen ejecutivo es el primer punto y se escribe al final pero aparece al inicio del documento (pág.7)."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "¿Qué gasto corresponde a la amortización de activos intangibles?",
    "opciones": [
      "Depreciación de maquinaria",
      "Distribución del costo de patentes, licencias o software",
      "Mantenimiento de edificios",
      "Pago de intereses"
    ],
    "correcta": 1,
    "resumen": "Distribución del costo de patentes, licencias o software",
    "fundamentacion": "La amortización aplica a activos intangibles como patentes, marcas o software (5.2.2).",
    "id": 61,
    "question": "¿Qué gasto corresponde a la amortización de activos intangibles?",
    "options": [
      "Depreciación de maquinaria",
      "Distribución del costo de patentes, licencias o software",
      "Mantenimiento de edificios",
      "Pago de intereses"
    ],
    "correct": 1,
    "explanation": "La amortización aplica a activos intangibles como patentes, marcas o software (5.2.2)."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "¿Qué indica el Margen de contribución unitario?",
    "opciones": [
      "La ganancia neta total",
      "Lo que aporta cada unidad para cubrir costos fijos (precio - costo variable unitario)",
      "El porcentaje de ROI",
      "El valor del VAN"
    ],
    "correcta": 1,
    "resumen": "Lo que aporta cada unidad para cubrir costos fijos (precio - costo variable unitario)",
    "fundamentacion": "Margen de contribución = Precio – costo variable unitario, utilizado en punto de equilibrio (pág.6).",
    "id": 62,
    "question": "¿Qué indica el Margen de contribución unitario?",
    "options": [
      "La ganancia neta total",
      "Lo que aporta cada unidad para cubrir costos fijos (precio - costo variable unitario)",
      "El porcentaje de ROI",
      "El valor del VAN"
    ],
    "correct": 1,
    "explanation": "Margen de contribución = Precio – costo variable unitario, utilizado en punto de equilibrio (pág.6)."
  },
  {
    "modulo": 5,
    "moduloNombre": "Módulo 5: Estudio Económico y Evaluación Financiera",
    "enunciado": "¿Cuál es la decisión recomendada si VAN < 0 y TIR < tasa de oportunidad?",
    "opciones": [
      "Aceptar el proyecto",
      "Rechazar el proyecto",
      "Indiferente",
      "Financiar con más deuda"
    ],
    "correcta": 1,
    "resumen": "Rechazar el proyecto",
    "fundamentacion": "VAN negativo y TIR inferior indican que no es rentable, se recomienda rechazar (conclusiones 5.6).",
    "id": 63,
    "question": "¿Cuál es la decisión recomendada si VAN < 0 y TIR < tasa de oportunidad?",
    "options": [
      "Aceptar el proyecto",
      "Rechazar el proyecto",
      "Indiferente",
      "Financiar con más deuda"
    ],
    "correct": 1,
    "explanation": "VAN negativo y TIR inferior indican que no es rentable, se recomienda rechazar (conclusiones 5.6)."
  },
  {
    "modulo": 6,
    "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
    "enunciado": "¿Qué estudia el impacto social de un proyecto?",
    "opciones": [
      "Únicamente costos financieros",
      "El cambio o efecto en la comunidad, en dimensiones como salud, empleo, cultura",
      "La rentabilidad para accionistas",
      "El cálculo de depreciación"
    ],
    "correcta": 1,
    "resumen": "El cambio o efecto en la comunidad, en dimensiones como salud, empleo, cultura",
    "fundamentacion": "El impacto social evalúa el bienestar de la población, cambios en salud, educación, economía local (6.1).",
    "id": 64,
    "question": "¿Qué estudia el impacto social de un proyecto?",
    "options": [
      "Únicamente costos financieros",
      "El cambio o efecto en la comunidad, en dimensiones como salud, empleo, cultura",
      "La rentabilidad para accionistas",
      "El cálculo de depreciación"
    ],
    "correct": 1,
    "explanation": "El impacto social evalúa el bienestar de la población, cambios en salud, educación, economía local (6.1)."
  },
  {
    "modulo": 6,
    "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
    "enunciado": "¿Cuál es un impacto social negativo posible de una fábrica en zona rural?",
    "opciones": [
      "Construcción de escuela",
      "Generación de empleo",
      "Migración masiva y saturación de servicios públicos",
      "Capacitación laboral"
    ],
    "correcta": 2,
    "resumen": "Migración masiva y saturación de servicios públicos",
    "fundamentacion": "La migración masiva y saturación de servicios públicos es un impacto negativo (ejemplo fábrica en comunidad rural, pág.2).",
    "id": 65,
    "question": "¿Cuál es un impacto social negativo posible de una fábrica en zona rural?",
    "options": [
      "Construcción de escuela",
      "Generación de empleo",
      "Migración masiva y saturación de servicios públicos",
      "Capacitación laboral"
    ],
    "correct": 2,
    "explanation": "La migración masiva y saturación de servicios públicos es un impacto negativo (ejemplo fábrica en comunidad rural, pág.2)."
  },
  {
    "modulo": 6,
    "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
    "enunciado": "¿Qué es la 'licencia social para operar'?",
    "opciones": [
      "Permiso municipal obligatorio",
      "Aceptación y aprobación de la comunidad para que el proyecto opere sin fricciones",
      "Un documento de impacto ambiental",
      "Un seguro de responsabilidad civil"
    ],
    "correcta": 1,
    "resumen": "Aceptación y aprobación de la comunidad para que el proyecto opere sin fricciones",
    "fundamentacion": "Más allá de permisos legales, la aceptación comunitaria es la licencia social para operar sin conflictos (6.1).",
    "id": 66,
    "question": "¿Qué es la 'licencia social para operar'?",
    "options": [
      "Permiso municipal obligatorio",
      "Aceptación y aprobación de la comunidad para que el proyecto opere sin fricciones",
      "Un documento de impacto ambiental",
      "Un seguro de responsabilidad civil"
    ],
    "correct": 1,
    "explanation": "Más allá de permisos legales, la aceptación comunitaria es la licencia social para operar sin conflictos (6.1)."
  },
  {
    "modulo": 6,
    "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
    "enunciado": "La Manifestación de Impacto Ambiental (MIA) es un documento que:",
    "opciones": [
      "Solo identifica impactos positivos",
      "Propone medidas para mitigar impactos negativos y monitoreo ambiental",
      "Es un estudio financiero",
      "Se usa para fijar precio de venta"
    ],
    "correcta": 1,
    "resumen": "Propone medidas para mitigar impactos negativos y monitoreo ambiental",
    "fundamentacion": "La MIA describe impactos, medidas de mitigación y plan de seguimiento (6.2).",
    "id": 67,
    "question": "La Manifestación de Impacto Ambiental (MIA) es un documento que:",
    "options": [
      "Solo identifica impactos positivos",
      "Propone medidas para mitigar impactos negativos y monitoreo ambiental",
      "Es un estudio financiero",
      "Se usa para fijar precio de venta"
    ],
    "correct": 1,
    "explanation": "La MIA describe impactos, medidas de mitigación y plan de seguimiento (6.2)."
  },
  {
    "modulo": 6,
    "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
    "enunciado": "¿Qué tipo de impacto ambiental es permanente e irreversible?",
    "opciones": [
      "Ruido durante construcción",
      "Contaminación temporal de un río",
      "Extinción de una especie local",
      "Polvo en el aire"
    ],
    "correcta": 2,
    "resumen": "Extinción de una especie local",
    "fundamentacion": "Extinción de una especie es irreversible y permanente (clasificación 6.2).",
    "id": 68,
    "question": "¿Qué tipo de impacto ambiental es permanente e irreversible?",
    "options": [
      "Ruido durante construcción",
      "Contaminación temporal de un río",
      "Extinción de una especie local",
      "Polvo en el aire"
    ],
    "correct": 2,
    "explanation": "Extinción de una especie es irreversible y permanente (clasificación 6.2)."
  },
  {
    "modulo": 6,
    "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
    "enunciado": "Un impacto ambiental positivo sería:",
    "opciones": [
      "Deforestación",
      "Emisión de gases",
      "Reforestación de un área degradada",
      "Vertido de aguas residuales"
    ],
    "correcta": 2,
    "resumen": "Reforestación de un área degradada",
    "fundamentacion": "La reforestación mejora el ambiente, es un impacto positivo (6.2).",
    "id": 69,
    "question": "Un impacto ambiental positivo sería:",
    "options": [
      "Deforestación",
      "Emisión de gases",
      "Reforestación de un área degradada",
      "Vertido de aguas residuales"
    ],
    "correct": 2,
    "explanation": "La reforestación mejora el ambiente, es un impacto positivo (6.2)."
  },
  {
    "modulo": 6,
    "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
    "enunciado": "¿Cuál es el objetivo principal de la seguridad industrial?",
    "opciones": [
      "Maximizar utilidades",
      "Proteger integridad física de trabajadores y prevenir daños en instalaciones",
      "Solo cumplir normas fiscales",
      "Reducir costo de mano de obra"
    ],
    "correcta": 1,
    "resumen": "Proteger integridad física de trabajadores y prevenir daños en instalaciones",
    "fundamentacion": "Seguridad industrial protege a empleados e instalaciones, evitando accidentes y garantizando continuidad (6.3).",
    "id": 70,
    "question": "¿Cuál es el objetivo principal de la seguridad industrial?",
    "options": [
      "Maximizar utilidades",
      "Proteger integridad física de trabajadores y prevenir daños en instalaciones",
      "Solo cumplir normas fiscales",
      "Reducir costo de mano de obra"
    ],
    "correct": 1,
    "explanation": "Seguridad industrial protege a empleados e instalaciones, evitando accidentes y garantizando continuidad (6.3)."
  },
  {
    "modulo": 6,
    "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
    "enunciado": "Ejemplo de gestión legal en un proyecto es:",
    "opciones": [
      "Calcular el ROI",
      "Obtener licencia de funcionamiento y cumplir NOM de seguridad",
      "Elaborar estudio de mercado",
      "Diseñar logotipo"
    ],
    "correcta": 1,
    "resumen": "Obtener licencia de funcionamiento y cumplir NOM de seguridad",
    "fundamentacion": "La gestión legal abarca permisos, licencias y cumplimiento de normas (pág.4-5).",
    "id": 71,
    "question": "Ejemplo de gestión legal en un proyecto es:",
    "options": [
      "Calcular el ROI",
      "Obtener licencia de funcionamiento y cumplir NOM de seguridad",
      "Elaborar estudio de mercado",
      "Diseñar logotipo"
    ],
    "correct": 1,
    "explanation": "La gestión legal abarca permisos, licencias y cumplimiento de normas (pág.4-5)."
  },
  {
    "modulo": 6,
    "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
    "enunciado": "¿Por qué es importante la evaluación de impacto social para acceder a financiamiento?",
    "opciones": [
      "Porque los bancos solo ven el VAN",
      "Porque bancos de desarrollo exigen evaluación de impacto social (EIS) como requisito",
      "No es relevante",
      "Solo para proyectos grandes de construcción"
    ],
    "correcta": 1,
    "resumen": "Porque bancos de desarrollo exigen evaluación de impacto social (EIS) como requisito",
    "fundamentacion": "Bancos como BID o fondos exigen EIS para financiar proyectos (6.1).",
    "id": 72,
    "question": "¿Por qué es importante la evaluación de impacto social para acceder a financiamiento?",
    "options": [
      "Porque los bancos solo ven el VAN",
      "Porque bancos de desarrollo exigen evaluación de impacto social (EIS) como requisito",
      "No es relevante",
      "Solo para proyectos grandes de construcción"
    ],
    "correct": 1,
    "explanation": "Bancos como BID o fondos exigen EIS para financiar proyectos (6.1)."
  },
  {
    "modulo": 6,
    "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
    "enunciado": "Dimensión del impacto social relacionada con la creación de empleos y dinamización comercial:",
    "opciones": [
      "Salud y bienestar",
      "Empleo y economía local",
      "Infraestructura",
      "Organización social"
    ],
    "correcta": 1,
    "resumen": "Empleo y economía local",
    "fundamentacion": "El empleo y economía local incluye generación de puestos de trabajo y aumento de ingresos (6.1).",
    "id": 73,
    "question": "Dimensión del impacto social relacionada con la creación de empleos y dinamización comercial:",
    "options": [
      "Salud y bienestar",
      "Empleo y economía local",
      "Infraestructura",
      "Organización social"
    ],
    "correct": 1,
    "explanation": "El empleo y economía local incluye generación de puestos de trabajo y aumento de ingresos (6.1)."
  },
  {
    "modulo": 6,
    "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
    "enunciado": "¿Qué significa que un impacto ambiental sea indirecto o inducido?",
    "opciones": [
      "Que ocurre inmediatamente",
      "Es consecuencia secundaria de la acción principal",
      "Que no afecta al entorno",
      "Es reversible"
    ],
    "correcta": 1,
    "resumen": "Es consecuencia secundaria de la acción principal",
    "fundamentacion": "Ejemplo: una carretera facilita llegada de colonos que talan bosque, impacto indirecto (6.2).",
    "id": 74,
    "question": "¿Qué significa que un impacto ambiental sea indirecto o inducido?",
    "options": [
      "Que ocurre inmediatamente",
      "Es consecuencia secundaria de la acción principal",
      "Que no afecta al entorno",
      "Es reversible"
    ],
    "correct": 1,
    "explanation": "Ejemplo: una carretera facilita llegada de colonos que talan bosque, impacto indirecto (6.2)."
  },
  {
    "modulo": 6,
    "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
    "enunciado": "¿Cuál es el doble objetivo de la seguridad industrial?",
    "opciones": [
      "Cuidar la vida de las personas y garantizar continuidad del proceso productivo",
      "Reducir costos y aumentar producción",
      "Evitar demandas legales únicamente",
      "Certificar calidad ISO"
    ],
    "correcta": 0,
    "resumen": "Cuidar la vida de las personas y garantizar continuidad del proceso productivo",
    "fundamentacion": "Proteger a los trabajadores y asegurar la operación sin interrupciones (6.3).",
    "id": 75,
    "question": "¿Cuál es el doble objetivo de la seguridad industrial?",
    "options": [
      "Cuidar la vida de las personas y garantizar continuidad del proceso productivo",
      "Reducir costos y aumentar producción",
      "Evitar demandas legales únicamente",
      "Certificar calidad ISO"
    ],
    "correct": 0,
    "explanation": "Proteger a los trabajadores y asegurar la operación sin interrupciones (6.3)."
  },
  {
    "modulo": 6,
    "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
    "enunciado": "¿Qué consecuencia puede traer ignorar la gestión legal en un proyecto?",
    "opciones": [
      "Mejor imagen corporativa",
      "Multas, clausuras y posibles responsabilidades penales",
      "Aumento de ventas",
      "Menor costo de producción"
    ],
    "correcta": 1,
    "resumen": "Multas, clausuras y posibles responsabilidades penales",
    "fundamentacion": "Incumplir normas genera sanciones, clausuras o carcel para directivos (conclusión pág.5).",
    "id": 76,
    "question": "¿Qué consecuencia puede traer ignorar la gestión legal en un proyecto?",
    "options": [
      "Mejor imagen corporativa",
      "Multas, clausuras y posibles responsabilidades penales",
      "Aumento de ventas",
      "Menor costo de producción"
    ],
    "correct": 1,
    "explanation": "Incumplir normas genera sanciones, clausuras o carcel para directivos (conclusión pág.5)."
  },
  {
    "modulo": 6,
    "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
    "enunciado": "¿Qué mide el impacto ambiental según su reversibilidad?",
    "opciones": [
      "Si el daño puede recuperarse con medidas o es permanente",
      "Si causa beneficios económicos",
      "La duración en meses",
      "La distancia del proyecto"
    ],
    "correcta": 0,
    "resumen": "Si el daño puede recuperarse con medidas o es permanente",
    "fundamentacion": "Reversible: puede recuperarse; irreversible: daño permanente (6.2).",
    "id": 77,
    "question": "¿Qué mide el impacto ambiental según su reversibilidad?",
    "options": [
      "Si el daño puede recuperarse con medidas o es permanente",
      "Si causa beneficios económicos",
      "La duración en meses",
      "La distancia del proyecto"
    ],
    "correct": 0,
    "explanation": "Reversible: puede recuperarse; irreversible: daño permanente (6.2)."
  },
  {
    "modulo": 6,
    "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
    "enunciado": "¿Cuál de los siguientes es un componente de la seguridad industrial además de protección personal?",
    "opciones": [
      "Ergonomía y mantenimiento preventivo",
      "Plan de marketing",
      "Análisis de precios",
      "Proyección de ingresos"
    ],
    "correcta": 0,
    "resumen": "Ergonomía y mantenimiento preventivo",
    "fundamentacion": "Incluye ergonomía, mantenimiento, planes contra incendios (6.3).",
    "id": 78,
    "question": "¿Cuál de los siguientes es un componente de la seguridad industrial además de protección personal?",
    "options": [
      "Ergonomía y mantenimiento preventivo",
      "Plan de marketing",
      "Análisis de precios",
      "Proyección de ingresos"
    ],
    "correct": 0,
    "explanation": "Incluye ergonomía, mantenimiento, planes contra incendios (6.3)."
  },
  {
    "modulo": 6,
    "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
    "enunciado": "¿Qué significa 'valor compartido' en relación con la comunidad?",
    "opciones": [
      "Reparto de dividendos",
      "Que el proyecto aporta beneficios reales a la comunidad creando un entorno próspero para ambos",
      "Donación del 1% de utilidades",
      "Patrocinio deportivo"
    ],
    "correcta": 1,
    "resumen": "Que el proyecto aporta beneficios reales a la comunidad creando un entorno próspero para ambos",
    "fundamentacion": "Generar valor compartido implica beneficios mutuos, comunidad más próspera y proyecto estable (6.1).",
    "id": 79,
    "question": "¿Qué significa 'valor compartido' en relación con la comunidad?",
    "options": [
      "Reparto de dividendos",
      "Que el proyecto aporta beneficios reales a la comunidad creando un entorno próspero para ambos",
      "Donación del 1% de utilidades",
      "Patrocinio deportivo"
    ],
    "correct": 1,
    "explanation": "Generar valor compartido implica beneficios mutuos, comunidad más próspera y proyecto estable (6.1)."
  },
  {
    "modulo": 6,
    "moduloNombre": "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad",
    "enunciado": "Un proyecto sostenible debe ser:",
    "opciones": [
      "Solo rentable económicamente",
      "Socialmente justo, ambientalmente responsable y legalmente impecable",
      "Únicamente innovador",
      "Independiente de la comunidad"
    ],
    "correcta": 1,
    "resumen": "Socialmente justo, ambientalmente responsable y legalmente impecable",
    "fundamentacion": "Conclusión Unidad VI: socialmente justo, ambientalmente responsable y legalmente impecable (pág.5).",
    "id": 80,
    "question": "Un proyecto sostenible debe ser:",
    "options": [
      "Solo rentable económicamente",
      "Socialmente justo, ambientalmente responsable y legalmente impecable",
      "Únicamente innovador",
      "Independiente de la comunidad"
    ],
    "correct": 1,
    "explanation": "Conclusión Unidad VI: socialmente justo, ambientalmente responsable y legalmente impecable (pág.5)."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "¿Cuál de las siguientes NO es una característica principal de un proyecto?",
    "opciones": [
      "Temporalidad",
      "Unicidad",
      "Certeza absoluta",
      "Interdisciplinariedad"
    ],
    "correcta": 2,
    "resumen": "Certeza absoluta",
    "fundamentacion": "El proyecto implica incertidumbre, no certeza absoluta (característica clave: incertidumbre).",
    "id": 81,
    "question": "¿Cuál de las siguientes NO es una característica principal de un proyecto?",
    "options": [
      "Temporalidad",
      "Unicidad",
      "Certeza absoluta",
      "Interdisciplinariedad"
    ],
    "correct": 2,
    "explanation": "El proyecto implica incertidumbre, no certeza absoluta (característica clave: incertidumbre)."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "Según la clasificación por su naturaleza, un proyecto de inversión pública busca principalmente:",
    "opciones": [
      "Maximizar rentabilidad financiera",
      "Generar bienestar social",
      "Producir bienes tangibles",
      "Minimizar costos operativos"
    ],
    "correcta": 1,
    "resumen": "Generar bienestar social",
    "fundamentacion": "Inversión pública busca bienestar social e impacto social (salud, educación).",
    "id": 82,
    "question": "Según la clasificación por su naturaleza, un proyecto de inversión pública busca principalmente:",
    "options": [
      "Maximizar rentabilidad financiera",
      "Generar bienestar social",
      "Producir bienes tangibles",
      "Minimizar costos operativos"
    ],
    "correct": 1,
    "explanation": "Inversión pública busca bienestar social e impacto social (salud, educación)."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "¿Qué tipo de proyectos son aquellos que se benefician mutuamente si se realizan en conjunto?",
    "opciones": [
      "Independientes",
      "Mutuamente excluyentes",
      "Complementarios",
      "Marginales"
    ],
    "correcta": 2,
    "resumen": "Complementarios",
    "fundamentacion": "Proyectos complementarios: al realizarse juntos potencian beneficios.",
    "id": 83,
    "question": "¿Qué tipo de proyectos son aquellos que se benefician mutuamente si se realizan en conjunto?",
    "options": [
      "Independientes",
      "Mutuamente excluyentes",
      "Complementarios",
      "Marginales"
    ],
    "correct": 2,
    "explanation": "Proyectos complementarios: al realizarse juntos potencian beneficios."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "Fuente interna de generación de proyectos:",
    "opciones": [
      "Demanda insatisfecha",
      "Nuevas tecnologías disponibles",
      "Reemplazo de equipos por obsolescencia",
      "Políticas gubernamentales"
    ],
    "correcta": 2,
    "resumen": "Reemplazo de equipos por obsolescencia",
    "fundamentacion": "Reemplazo de equipos es fuente interna; las otras son externas.",
    "id": 84,
    "question": "Fuente interna de generación de proyectos:",
    "options": [
      "Demanda insatisfecha",
      "Nuevas tecnologías disponibles",
      "Reemplazo de equipos por obsolescencia",
      "Políticas gubernamentales"
    ],
    "correct": 2,
    "explanation": "Reemplazo de equipos es fuente interna; las otras son externas."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "En el ciclo de vida del proyecto, ¿qué fase corresponde a la 'pre-inversión'?",
    "opciones": [
      "Ejecución y puesta en marcha",
      "Idea, perfil, prefactibilidad y factibilidad",
      "Operación y comercialización",
      "Abandono de activos"
    ],
    "correcta": 1,
    "resumen": "Idea, perfil, prefactibilidad y factibilidad",
    "fundamentacion": "Pre-inversión incluye idea, perfil, prefactibilidad y factibilidad.",
    "id": 85,
    "question": "En el ciclo de vida del proyecto, ¿qué fase corresponde a la 'pre-inversión'?",
    "options": [
      "Ejecución y puesta en marcha",
      "Idea, perfil, prefactibilidad y factibilidad",
      "Operación y comercialización",
      "Abandono de activos"
    ],
    "correct": 1,
    "explanation": "Pre-inversión incluye idea, perfil, prefactibilidad y factibilidad."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "El VAN (Valor Actual Neto) es un indicador utilizado en la evaluación:",
    "opciones": [
      "Técnica",
      "Legal",
      "Financiera",
      "Ambiental"
    ],
    "correcta": 2,
    "resumen": "Financiera",
    "fundamentacion": "VAN y TIR son indicadores financieros, evalúan rentabilidad del capital.",
    "id": 86,
    "question": "El VAN (Valor Actual Neto) es un indicador utilizado en la evaluación:",
    "options": [
      "Técnica",
      "Legal",
      "Financiera",
      "Ambiental"
    ],
    "correct": 2,
    "explanation": "VAN y TIR son indicadores financieros, evalúan rentabilidad del capital."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "¿Qué etapa del proyecto integra el estudio de mercado, estudio técnico y estudio financiero?",
    "opciones": [
      "Identificación del problema",
      "Preparación o formulación",
      "Decisión",
      "Operación y seguimiento"
    ],
    "correcta": 1,
    "resumen": "Preparación o formulación",
    "fundamentacion": "Preparación/formulación incluye estudios de mercado, técnico, legal y financiero.",
    "id": 87,
    "question": "¿Qué etapa del proyecto integra el estudio de mercado, estudio técnico y estudio financiero?",
    "options": [
      "Identificación del problema",
      "Preparación o formulación",
      "Decisión",
      "Operación y seguimiento"
    ],
    "correct": 1,
    "explanation": "Preparación/formulación incluye estudios de mercado, técnico, legal y financiero."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "La evaluación de sensibilidad y análisis de riesgo pertenece principalmente a la etapa de:",
    "opciones": [
      "Ejecución",
      "Evaluación",
      "Abandono",
      "Inversión"
    ],
    "correcta": 1,
    "resumen": "Evaluación",
    "fundamentacion": "En la etapa de evaluación se aplican análisis de sensibilidad y riesgo.",
    "id": 88,
    "question": "La evaluación de sensibilidad y análisis de riesgo pertenece principalmente a la etapa de:",
    "options": [
      "Ejecución",
      "Evaluación",
      "Abandono",
      "Inversión"
    ],
    "correct": 1,
    "explanation": "En la etapa de evaluación se aplican análisis de sensibilidad y riesgo."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "¿Cuál es la principal diferencia entre estudios de prefactibilidad y factibilidad?",
    "opciones": [
      "El costo del estudio",
      "La profundidad y fuentes de información (primarias vs secundarias)",
      "El tipo de producto",
      "La metodología legal"
    ],
    "correcta": 1,
    "resumen": "La profundidad y fuentes de información (primarias vs secundarias)",
    "fundamentacion": "Prefactibilidad usa fuentes secundarias; factibilidad requiere fuentes primarias y mayor detalle.",
    "id": 89,
    "question": "¿Cuál es la principal diferencia entre estudios de prefactibilidad y factibilidad?",
    "options": [
      "El costo del estudio",
      "La profundidad y fuentes de información (primarias vs secundarias)",
      "El tipo de producto",
      "La metodología legal"
    ],
    "correct": 1,
    "explanation": "Prefactibilidad usa fuentes secundarias; factibilidad requiere fuentes primarias y mayor detalle."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "Dentro de la clasificación por área organizacional, un proyecto de 'lanzamiento de nuevo producto' corresponde a:",
    "opciones": [
      "Proyecto financiero",
      "Proyecto de mercadotecnia",
      "Proyecto administrativo",
      "Proyecto de producción"
    ],
    "correcta": 1,
    "resumen": "Proyecto de mercadotecnia",
    "fundamentacion": "Mercadotecnia abarca lanzamientos, promoción y estudio de mercado.",
    "id": 90,
    "question": "Dentro de la clasificación por área organizacional, un proyecto de 'lanzamiento de nuevo producto' corresponde a:",
    "options": [
      "Proyecto financiero",
      "Proyecto de mercadotecnia",
      "Proyecto administrativo",
      "Proyecto de producción"
    ],
    "correct": 1,
    "explanation": "Mercadotecnia abarca lanzamientos, promoción y estudio de mercado."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "¿Qué indicador mide el tiempo necesario para recuperar la inversión?",
    "opciones": [
      "TIR",
      "Relación B/C",
      "Período de recuperación",
      "Valor actual neto"
    ],
    "correcta": 2,
    "resumen": "Período de recuperación",
    "fundamentacion": "Período de recuperación (payback) mide tiempo de retorno de la inversión.",
    "id": 91,
    "question": "¿Qué indicador mide el tiempo necesario para recuperar la inversión?",
    "options": [
      "TIR",
      "Relación B/C",
      "Período de recuperación",
      "Valor actual neto"
    ],
    "correct": 2,
    "explanation": "Período de recuperación (payback) mide tiempo de retorno de la inversión."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "Ejemplo de proyecto de inversión privada:",
    "opciones": [
      "Construcción de un hospital público",
      "Desarrollo de un nuevo software por una empresa",
      "Programa de alfabetización",
      "Construcción de una carretera estatal"
    ],
    "correcta": 1,
    "resumen": "Desarrollo de un nuevo software por una empresa",
    "fundamentacion": "Desarrollo de software con fines de lucro es inversión privada.",
    "id": 92,
    "question": "Ejemplo de proyecto de inversión privada:",
    "options": [
      "Construcción de un hospital público",
      "Desarrollo de un nuevo software por una empresa",
      "Programa de alfabetización",
      "Construcción de una carretera estatal"
    ],
    "correct": 1,
    "explanation": "Desarrollo de software con fines de lucro es inversión privada."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "¿Cuál es una fuente externa de origen de proyectos?",
    "opciones": [
      "Necesidades de expansión",
      "Modernización tecnológica",
      "Cambios en el entorno económico",
      "Cumplimiento normativo interno"
    ],
    "correcta": 2,
    "resumen": "Cambios en el entorno económico",
    "fundamentacion": "Cambios económicos, sociales o políticos son del entorno externo.",
    "id": 93,
    "question": "¿Cuál es una fuente externa de origen de proyectos?",
    "options": [
      "Necesidades de expansión",
      "Modernización tecnológica",
      "Cambios en el entorno económico",
      "Cumplimiento normativo interno"
    ],
    "correct": 2,
    "explanation": "Cambios económicos, sociales o políticos son del entorno externo."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "Fase del proyecto donde se generan los flujos de efectivo continuos:",
    "opciones": [
      "Pre-inversión",
      "Inversión",
      "Operación",
      "Cierre"
    ],
    "correcta": 2,
    "resumen": "Operación",
    "fundamentacion": "Operación produce ingresos y flujos de efectivo.",
    "id": 94,
    "question": "Fase del proyecto donde se generan los flujos de efectivo continuos:",
    "options": [
      "Pre-inversión",
      "Inversión",
      "Operación",
      "Cierre"
    ],
    "correct": 2,
    "explanation": "Operación produce ingresos y flujos de efectivo."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "En la metodología de evaluación, los árboles de decisión y simulación Monte Carlo son técnicas de:",
    "opciones": [
      "Evaluación determinista",
      "Evaluación de riesgo",
      "Evaluación legal",
      "Evaluación ambiental"
    ],
    "correcta": 1,
    "resumen": "Evaluación de riesgo",
    "fundamentacion": "Simulación Monte Carlo y árboles evalúan riesgo e incertidumbre.",
    "id": 95,
    "question": "En la metodología de evaluación, los árboles de decisión y simulación Monte Carlo son técnicas de:",
    "options": [
      "Evaluación determinista",
      "Evaluación de riesgo",
      "Evaluación legal",
      "Evaluación ambiental"
    ],
    "correct": 1,
    "explanation": "Simulación Monte Carlo y árboles evalúan riesgo e incertidumbre."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "¿Qué tipo de evaluación responde '¿El proyecto beneficia a la sociedad?'",
    "opciones": [
      "Financiera",
      "Económica social",
      "Técnica",
      "Ambiental"
    ],
    "correcta": 1,
    "resumen": "Económica social",
    "fundamentacion": "Evaluación económica social mide beneficio a la sociedad (precios sombra).",
    "id": 96,
    "question": "¿Qué tipo de evaluación responde '¿El proyecto beneficia a la sociedad?'",
    "options": [
      "Financiera",
      "Económica social",
      "Técnica",
      "Ambiental"
    ],
    "correct": 1,
    "explanation": "Evaluación económica social mide beneficio a la sociedad (precios sombra)."
  },
  {
    "modulo": 1,
    "moduloNombre": "Módulo 1: Conceptos Básicos y Formulación",
    "enunciado": "¿Los proyectos en los que solo uno de ellos puede realizarse (por ejemplo dos ubicaciones alternativas) se denominan?",
    "opciones": [
      "Independientes",
      "Complementarios",
      "Mutuamente excluyentes",
      "Concurrentes"
    ],
    "correcta": 2,
    "resumen": "Mutuamente excluyentes",
    "fundamentacion": "Mutuamente excluyentes: elegir uno impide el otro.",
    "id": 97,
    "question": "¿Los proyectos en los que solo uno de ellos puede realizarse (por ejemplo dos ubicaciones alternativas) se denominan?",
    "options": [
      "Independientes",
      "Complementarios",
      "Mutuamente excluyentes",
      "Concurrentes"
    ],
    "correct": 2,
    "explanation": "Mutuamente excluyentes: elegir uno impide el otro."
  },
  {
    "modulo": 2,
    "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
    "enunciado": "¿Cuál es la función administrativa que predetermina un curso de acción para alcanzar objetivos?",
    "opciones": [
      "Organización",
      "Dirección",
      "Planeación",
      "Control"
    ],
    "correcta": 2,
    "resumen": "Planeación",
    "fundamentacion": "Planeación es la función que define objetivos y acciones futuras.",
    "id": 98,
    "question": "¿Cuál es la función administrativa que predetermina un curso de acción para alcanzar objetivos?",
    "options": [
      "Organización",
      "Dirección",
      "Planeación",
      "Control"
    ],
    "correct": 2,
    "explanation": "Planeación es la función que define objetivos y acciones futuras."
  },
  {
    "modulo": 2,
    "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
    "enunciado": "¿Qué significa 'scope creep' en la gestión de proyectos?",
    "opciones": [
      "Reducción de costos",
      "Crecimiento no controlado del alcance",
      "Asignación eficiente de recursos",
      "Evaluación de riesgos"
    ],
    "correcta": 1,
    "resumen": "Crecimiento no controlado del alcance",
    "fundamentacion": "Scope creep es expansión del alcance sin control, causa fracasos.",
    "id": 99,
    "question": "¿Qué significa 'scope creep' en la gestión de proyectos?",
    "options": [
      "Reducción de costos",
      "Crecimiento no controlado del alcance",
      "Asignación eficiente de recursos",
      "Evaluación de riesgos"
    ],
    "correct": 1,
    "explanation": "Scope creep es expansión del alcance sin control, causa fracasos."
  },
  {
    "modulo": 2,
    "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
    "enunciado": "Dentro de la organización del proyecto, la estructura matricial implica:",
    "opciones": [
      "Dependencia única al director",
      "Doble cadena de mando (función y proyecto)",
      "Solo jefes funcionales",
      "Equipo autónomo sin jerarquía"
    ],
    "correcta": 1,
    "resumen": "Doble cadena de mando (función y proyecto)",
    "fundamentacion": "Estructura matricial combina autoridad funcional y por proyecto.",
    "id": 100,
    "question": "Dentro de la organización del proyecto, la estructura matricial implica:",
    "options": [
      "Dependencia única al director",
      "Doble cadena de mando (función y proyecto)",
      "Solo jefes funcionales",
      "Equipo autónomo sin jerarquía"
    ],
    "correct": 1,
    "explanation": "Estructura matricial combina autoridad funcional y por proyecto."
  },
  {
    "modulo": 2,
    "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
    "enunciado": "¿Qué herramienta descompone el trabajo en paquetes de trabajo?",
    "opciones": [
      "Diagrama de Gantt",
      "Estructura de Desglose de Trabajo (WBS)",
      "Matriz RACI",
      "Flujo de caja"
    ],
    "correcta": 1,
    "resumen": "Estructura de Desglose de Trabajo (WBS)",
    "fundamentacion": "WBS (Work Breakdown Structure) descompone el proyecto en tareas.",
    "id": 101,
    "question": "¿Qué herramienta descompone el trabajo en paquetes de trabajo?",
    "options": [
      "Diagrama de Gantt",
      "Estructura de Desglose de Trabajo (WBS)",
      "Matriz RACI",
      "Flujo de caja"
    ],
    "correct": 1,
    "explanation": "WBS (Work Breakdown Structure) descompone el proyecto en tareas."
  },
  {
    "modulo": 2,
    "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
    "enunciado": "¿Quién tiene la responsabilidad de inspirar y motivar al equipo más allá de la supervisión?",
    "opciones": [
      "El patrocinador",
      "El líder del proyecto",
      "El analista financiero",
      "El cliente"
    ],
    "correcta": 1,
    "resumen": "El líder del proyecto",
    "fundamentacion": "Liderazgo es inspirar; dirección incluye liderazgo.",
    "id": 102,
    "question": "¿Quién tiene la responsabilidad de inspirar y motivar al equipo más allá de la supervisión?",
    "options": [
      "El patrocinador",
      "El líder del proyecto",
      "El analista financiero",
      "El cliente"
    ],
    "correct": 1,
    "explanation": "Liderazgo es inspirar; dirección incluye liderazgo."
  },
  {
    "modulo": 2,
    "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
    "enunciado": "La designación de responsables debe venir acompañada de:",
    "opciones": [
      "Mayor presupuesto",
      "Autoridad necesaria para cumplir",
      "Jornada extendida",
      "Revisión diaria"
    ],
    "correcta": 1,
    "resumen": "Autoridad necesaria para cumplir",
    "fundamentacion": "Responsabilidad requiere autoridad equivalente.",
    "id": 103,
    "question": "La designación de responsables debe venir acompañada de:",
    "options": [
      "Mayor presupuesto",
      "Autoridad necesaria para cumplir",
      "Jornada extendida",
      "Revisión diaria"
    ],
    "correct": 1,
    "explanation": "Responsabilidad requiere autoridad equivalente."
  },
  {
    "modulo": 2,
    "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
    "enunciado": "¿Cuál es el objetivo principal del estudio de factibilidad?",
    "opciones": [
      "Descartar proyectos rápidamente",
      "Determinar con certeza la viabilidad integral",
      "Solo evaluar mercado",
      "Definir el nombre del proyecto"
    ],
    "correcta": 1,
    "resumen": "Determinar con certeza la viabilidad integral",
    "fundamentacion": "Factibilidad determina viabilidad técnica, económica, financiera, legal y ambiental.",
    "id": 104,
    "question": "¿Cuál es el objetivo principal del estudio de factibilidad?",
    "options": [
      "Descartar proyectos rápidamente",
      "Determinar con certeza la viabilidad integral",
      "Solo evaluar mercado",
      "Definir el nombre del proyecto"
    ],
    "correct": 1,
    "explanation": "Factibilidad determina viabilidad técnica, económica, financiera, legal y ambiental."
  },
  {
    "modulo": 2,
    "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
    "enunciado": "Los estudios de prefactibilidad se basan principalmente en:",
    "opciones": [
      "Fuentes primarias",
      "Fuentes secundarias",
      "Simulación avanzada",
      "Prototipos físicos"
    ],
    "correcta": 1,
    "resumen": "Fuentes secundarias",
    "fundamentacion": "Prefactibilidad usa información secundaria (estadísticas, publicaciones).",
    "id": 105,
    "question": "Los estudios de prefactibilidad se basan principalmente en:",
    "options": [
      "Fuentes primarias",
      "Fuentes secundarias",
      "Simulación avanzada",
      "Prototipos físicos"
    ],
    "correct": 1,
    "explanation": "Prefactibilidad usa información secundaria (estadísticas, publicaciones)."
  },
  {
    "modulo": 2,
    "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
    "enunciado": "¿Qué estudio dentro del plan de factibilidad analiza tamaño, localización óptima y procesos?",
    "opciones": [
      "Estudio de mercado",
      "Estudio técnico",
      "Estudio financiero",
      "Estudio legal"
    ],
    "correcta": 1,
    "resumen": "Estudio técnico",
    "fundamentacion": "Estudio técnico aborda tamaño, localización, ingeniería.",
    "id": 106,
    "question": "¿Qué estudio dentro del plan de factibilidad analiza tamaño, localización óptima y procesos?",
    "options": [
      "Estudio de mercado",
      "Estudio técnico",
      "Estudio financiero",
      "Estudio legal"
    ],
    "correct": 1,
    "explanation": "Estudio técnico aborda tamaño, localización, ingeniería."
  },
  {
    "modulo": 2,
    "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
    "enunciado": "La delegación de actividades en un proyecto busca:",
    "opciones": [
      "Concentrar todo el poder",
      "Empoderar al equipo y agilizar decisiones",
      "Reducir costos solo",
      "Eliminar la planeación"
    ],
    "correcta": 1,
    "resumen": "Empoderar al equipo y agilizar decisiones",
    "fundamentacion": "Delegación efectiva libera al director y empodera al equipo.",
    "id": 107,
    "question": "La delegación de actividades en un proyecto busca:",
    "options": [
      "Concentrar todo el poder",
      "Empoderar al equipo y agilizar decisiones",
      "Reducir costos solo",
      "Eliminar la planeación"
    ],
    "correct": 1,
    "explanation": "Delegación efectiva libera al director y empodera al equipo."
  },
  {
    "modulo": 2,
    "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
    "enunciado": "¿Cuál es la diferencia clave entre un programa y un proyecto?",
    "opciones": [
      "Un programa es más pequeño",
      "Un programa agrupa proyectos relacionados",
      "No hay diferencia",
      "El programa no tiene objetivos"
    ],
    "correcta": 1,
    "resumen": "Un programa agrupa proyectos relacionados",
    "fundamentacion": "Programa es conjunto de proyectos coordinados para beneficio mayor.",
    "id": 108,
    "question": "¿Cuál es la diferencia clave entre un programa y un proyecto?",
    "options": [
      "Un programa es más pequeño",
      "Un programa agrupa proyectos relacionados",
      "No hay diferencia",
      "El programa no tiene objetivos"
    ],
    "correct": 1,
    "explanation": "Programa es conjunto de proyectos coordinados para beneficio mayor."
  },
  {
    "modulo": 2,
    "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
    "enunciado": "¿Qué metodología de evaluación incluye el análisis del entorno y los estudios técnico, de mercado y financiero?",
    "opciones": [
      "Solo análisis de sensibilidad",
      "Metodología tradicional de evaluación de proyectos",
      "Control de calidad",
      "Gestión de stakeholders"
    ],
    "correcta": 1,
    "resumen": "Metodología tradicional de evaluación de proyectos",
    "fundamentacion": "Metodología típica: entorno, estudios, rentabilidad, riesgos.",
    "id": 109,
    "question": "¿Qué metodología de evaluación incluye el análisis del entorno y los estudios técnico, de mercado y financiero?",
    "options": [
      "Solo análisis de sensibilidad",
      "Metodología tradicional de evaluación de proyectos",
      "Control de calidad",
      "Gestión de stakeholders"
    ],
    "correct": 1,
    "explanation": "Metodología típica: entorno, estudios, rentabilidad, riesgos."
  },
  {
    "modulo": 2,
    "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
    "enunciado": "En la organización del trabajo en equipo, ¿qué define canales de comunicación y resolución de conflictos?",
    "opciones": [
      "El acta de constitución",
      "La dinámica y reglas del equipo",
      "La WBS",
      "El presupuesto"
    ],
    "correcta": 1,
    "resumen": "La dinámica y reglas del equipo",
    "fundamentacion": "Organización del trabajo en equipo define reglas, comunicación, conflictos.",
    "id": 110,
    "question": "En la organización del trabajo en equipo, ¿qué define canales de comunicación y resolución de conflictos?",
    "options": [
      "El acta de constitución",
      "La dinámica y reglas del equipo",
      "La WBS",
      "El presupuesto"
    ],
    "correct": 1,
    "explanation": "Organización del trabajo en equipo define reglas, comunicación, conflictos."
  },
  {
    "modulo": 2,
    "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
    "enunciado": "La definición de cada uno de los elementos del proyecto y su justificación se documenta en:",
    "opciones": [
      "Business Case (justificación del negocio)",
      "Plan de calidad",
      "Matriz de comunicación",
      "Registro de interesados"
    ],
    "correcta": 0,
    "resumen": "Business Case (justificación del negocio)",
    "fundamentacion": "Business Case justifica el proyecto con beneficios, costos y razón de ser.",
    "id": 111,
    "question": "La definición de cada uno de los elementos del proyecto y su justificación se documenta en:",
    "options": [
      "Business Case (justificación del negocio)",
      "Plan de calidad",
      "Matriz de comunicación",
      "Registro de interesados"
    ],
    "correct": 0,
    "explanation": "Business Case justifica el proyecto con beneficios, costos y razón de ser."
  },
  {
    "modulo": 2,
    "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
    "enunciado": "¿Qué tipo de estructura organizacional el equipo depende completamente del director del proyecto?",
    "opciones": [
      "Funcional",
      "Matricial débil",
      "Dedicada o por proyectos",
      "Redes"
    ],
    "correcta": 2,
    "resumen": "Dedicada o por proyectos",
    "fundamentacion": "Estructura dedicada (proyectizada) reporta al director del proyecto.",
    "id": 112,
    "question": "¿Qué tipo de estructura organizacional el equipo depende completamente del director del proyecto?",
    "options": [
      "Funcional",
      "Matricial débil",
      "Dedicada o por proyectos",
      "Redes"
    ],
    "correct": 2,
    "explanation": "Estructura dedicada (proyectizada) reporta al director del proyecto."
  },
  {
    "modulo": 2,
    "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
    "enunciado": "El estudio financiero dentro del proyecto incluye:",
    "opciones": [
      "Tamaño de planta",
      "Flujos de efectivo proyectados",
      "Segmentación de mercado",
      "Marco legal"
    ],
    "correcta": 1,
    "resumen": "Flujos de efectivo proyectados",
    "fundamentacion": "Estudio financiero elabora flujos de efectivo, presupuestos.",
    "id": 113,
    "question": "El estudio financiero dentro del proyecto incluye:",
    "options": [
      "Tamaño de planta",
      "Flujos de efectivo proyectados",
      "Segmentación de mercado",
      "Marco legal"
    ],
    "correct": 1,
    "explanation": "Estudio financiero elabora flujos de efectivo, presupuestos."
  },
  {
    "modulo": 2,
    "moduloNombre": "Módulo 2: Metodología, Organización y Ciclo de Vida",
    "enunciado": "La dirección del proyecto responde a la pregunta:",
    "opciones": [
      "¿Qué hacer?",
      "¿Quién hace qué?",
      "¿Cómo se ejecuta el plan?",
      "¿Cuándo se evalúa?"
    ],
    "correcta": 2,
    "resumen": "¿Cómo se ejecuta el plan?",
    "fundamentacion": "Dirección se enfoca en cómo ejecutar el plan, liderazgo y coordinación.",
    "id": 114,
    "question": "La dirección del proyecto responde a la pregunta:",
    "options": [
      "¿Qué hacer?",
      "¿Quién hace qué?",
      "¿Cómo se ejecuta el plan?",
      "¿Cuándo se evalúa?"
    ],
    "correct": 2,
    "explanation": "Dirección se enfoca en cómo ejecutar el plan, liderazgo y coordinación."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "¿Cuál es el objetivo principal del estudio de mercado?",
    "opciones": [
      "Diseñar el producto",
      "Verificar viabilidad comercial y existencia de mercado potencial",
      "Determinar la localización",
      "Calcular el VAN"
    ],
    "correcta": 1,
    "resumen": "Verificar viabilidad comercial y existencia de mercado potencial",
    "fundamentacion": "Objetivo: demostrar viabilidad comercial y mercado dispuesto a comprar.",
    "id": 115,
    "question": "¿Cuál es el objetivo principal del estudio de mercado?",
    "options": [
      "Diseñar el producto",
      "Verificar viabilidad comercial y existencia de mercado potencial",
      "Determinar la localización",
      "Calcular el VAN"
    ],
    "correct": 1,
    "explanation": "Objetivo: demostrar viabilidad comercial y mercado dispuesto a comprar."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "El método cualitativo en investigación de mercados utiliza herramientas como:",
    "opciones": [
      "Encuestas estructuradas",
      "Grupos focales y entrevistas a profundidad",
      "Análisis de regresión",
      "Muestreo probabilístico"
    ],
    "correcta": 1,
    "resumen": "Grupos focales y entrevistas a profundidad",
    "fundamentacion": "Método cualitativo: focus groups, entrevistas en profundidad.",
    "id": 116,
    "question": "El método cualitativo en investigación de mercados utiliza herramientas como:",
    "options": [
      "Encuestas estructuradas",
      "Grupos focales y entrevistas a profundidad",
      "Análisis de regresión",
      "Muestreo probabilístico"
    ],
    "correct": 1,
    "explanation": "Método cualitativo: focus groups, entrevistas en profundidad."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "¿Qué tipo de demanda representa la oportunidad real de negocio?",
    "opciones": [
      "Demanda satisfecha",
      "Demanda insatisfecha",
      "Demanda elástica",
      "Demanda inducida"
    ],
    "correcta": 1,
    "resumen": "Demanda insatisfecha",
    "fundamentacion": "Demanda insatisfecha = diferencia entre demanda proyectada y oferta, oportunidad.",
    "id": 117,
    "question": "¿Qué tipo de demanda representa la oportunidad real de negocio?",
    "options": [
      "Demanda satisfecha",
      "Demanda insatisfecha",
      "Demanda elástica",
      "Demanda inducida"
    ],
    "correct": 1,
    "explanation": "Demanda insatisfecha = diferencia entre demanda proyectada y oferta, oportunidad."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "Criterio de segmentación que agrupa por estilo de vida y personalidad:",
    "opciones": [
      "Geográfico",
      "Demográfico",
      "Psicográfico",
      "Conductual"
    ],
    "correcta": 2,
    "resumen": "Psicográfico",
    "fundamentacion": "Segmentación psicográfica: estilo de vida, valores, personalidad.",
    "id": 118,
    "question": "Criterio de segmentación que agrupa por estilo de vida y personalidad:",
    "options": [
      "Geográfico",
      "Demográfico",
      "Psicográfico",
      "Conductual"
    ],
    "correct": 2,
    "explanation": "Segmentación psicográfica: estilo de vida, valores, personalidad."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "En el análisis de la oferta, se debe analizar:",
    "opciones": [
      "Solo precios",
      "Número de competidores, market share, precios",
      "Únicamente calidad",
      "Promociones"
    ],
    "correcta": 1,
    "resumen": "Número de competidores, market share, precios",
    "fundamentacion": "Oferta incluye competidores, participación, estrategias y precios.",
    "id": 119,
    "question": "En el análisis de la oferta, se debe analizar:",
    "options": [
      "Solo precios",
      "Número de competidores, market share, precios",
      "Únicamente calidad",
      "Promociones"
    ],
    "correct": 1,
    "explanation": "Oferta incluye competidores, participación, estrategias y precios."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "¿Qué canal de comercialización es Productor → Minorista → Consumidor?",
    "opciones": [
      "Canal directo",
      "Canal corto",
      "Canal largo",
      "Canal inverso"
    ],
    "correcta": 1,
    "resumen": "Canal corto",
    "fundamentacion": "Canal corto: productor - minorista - consumidor (sin mayorista).",
    "id": 120,
    "question": "¿Qué canal de comercialización es Productor → Minorista → Consumidor?",
    "options": [
      "Canal directo",
      "Canal corto",
      "Canal largo",
      "Canal inverso"
    ],
    "correct": 1,
    "explanation": "Canal corto: productor - minorista - consumidor (sin mayorista)."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "Método de fijación de precios basado en lo que el consumidor está dispuesto a pagar:",
    "opciones": [
      "Basado en costos",
      "Basado en competencia",
      "Basado en el valor",
      "Precio de penetración"
    ],
    "correcta": 2,
    "resumen": "Basado en el valor",
    "fundamentacion": "Precio basado en el valor → percepción del consumidor.",
    "id": 121,
    "question": "Método de fijación de precios basado en lo que el consumidor está dispuesto a pagar:",
    "options": [
      "Basado en costos",
      "Basado en competencia",
      "Basado en el valor",
      "Precio de penetración"
    ],
    "correct": 2,
    "explanation": "Precio basado en el valor → percepción del consumidor."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "¿Qué herramienta cuantitativa es la más común para recolectar datos primarios?",
    "opciones": [
      "Observación",
      "Encuesta con cuestionario estructurado",
      "Focus group",
      "Entrevista no dirigida"
    ],
    "correcta": 1,
    "resumen": "Encuesta con cuestionario estructurado",
    "fundamentacion": "Encuesta es herramienta principal del método cuantitativo.",
    "id": 122,
    "question": "¿Qué herramienta cuantitativa es la más común para recolectar datos primarios?",
    "options": [
      "Observación",
      "Encuesta con cuestionario estructurado",
      "Focus group",
      "Entrevista no dirigida"
    ],
    "correct": 1,
    "explanation": "Encuesta es herramienta principal del método cuantitativo."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "El pronóstico de oferta y demanda se proyecta normalmente a:",
    "opciones": [
      "1 año",
      "3 a 5 años",
      "10 años mínimo",
      "1 mes"
    ],
    "correcta": 1,
    "resumen": "3 a 5 años",
    "fundamentacion": "Pronóstico típico de 3 a 5 años para evaluar ingresos futuros.",
    "id": 123,
    "question": "El pronóstico de oferta y demanda se proyecta normalmente a:",
    "options": [
      "1 año",
      "3 a 5 años",
      "10 años mínimo",
      "1 mes"
    ],
    "correct": 1,
    "explanation": "Pronóstico típico de 3 a 5 años para evaluar ingresos futuros."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "En el estudio de mercado, el análisis de precios 'basado en la competencia' consiste en:",
    "opciones": [
      "Costo total + margen",
      "Precio promedio del mercado",
      "Precio emocional",
      "Subasta inversa"
    ],
    "correcta": 1,
    "resumen": "Precio promedio del mercado",
    "fundamentacion": "Basado en competencia: tomar precio promedio del mercado.",
    "id": 124,
    "question": "En el estudio de mercado, el análisis de precios 'basado en la competencia' consiste en:",
    "options": [
      "Costo total + margen",
      "Precio promedio del mercado",
      "Precio emocional",
      "Subasta inversa"
    ],
    "correct": 1,
    "explanation": "Basado en competencia: tomar precio promedio del mercado."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "¿Cuál es una etapa del estudio de mercado?",
    "opciones": [
      "Definición de la tecnología",
      "Recolección de datos (trabajo de campo)",
      "Estudio de ingeniería",
      "Evaluación de proveedores"
    ],
    "correcta": 1,
    "resumen": "Recolección de datos (trabajo de campo)",
    "fundamentacion": "Etapas: definición problema, diseño, recolección datos, análisis, informe.",
    "id": 125,
    "question": "¿Cuál es una etapa del estudio de mercado?",
    "options": [
      "Definición de la tecnología",
      "Recolección de datos (trabajo de campo)",
      "Estudio de ingeniería",
      "Evaluación de proveedores"
    ],
    "correct": 1,
    "explanation": "Etapas: definición problema, diseño, recolección datos, análisis, informe."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "¿Qué se entiende por 'demanda proyectada'?",
    "opciones": [
      "Demanda histórica",
      "Estimación futura del consumo",
      "Oferta de la competencia",
      "Capacidad instalada"
    ],
    "correcta": 1,
    "resumen": "Estimación futura del consumo",
    "fundamentacion": "Demanda proyectada = estimación a futuro del comportamiento del consumo.",
    "id": 126,
    "question": "¿Qué se entiende por 'demanda proyectada'?",
    "options": [
      "Demanda histórica",
      "Estimación futura del consumo",
      "Oferta de la competencia",
      "Capacidad instalada"
    ],
    "correct": 1,
    "explanation": "Demanda proyectada = estimación a futuro del comportamiento del consumo."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "Según el material, ¿qué significa mercado de consumo?",
    "opciones": [
      "Empresas que compran maquinaria",
      "Personas que compran para uso personal",
      "Gobierno adquiriendo servicios",
      "Venta internacional"
    ],
    "correcta": 1,
    "resumen": "Personas que compran para uso personal",
    "fundamentacion": "Mercado de consumo: personas con necesidades y capacidad de pago.",
    "id": 127,
    "question": "Según el material, ¿qué significa mercado de consumo?",
    "options": [
      "Empresas que compran maquinaria",
      "Personas que compran para uso personal",
      "Gobierno adquiriendo servicios",
      "Venta internacional"
    ],
    "correct": 1,
    "explanation": "Mercado de consumo: personas con necesidades y capacidad de pago."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "¿Qué tipo de preguntas se recomiendan en una encuesta para facilitar tabulación?",
    "opciones": [
      "Preguntas abiertas",
      "Preguntas cerradas con escalas u opciones múltiples",
      "Preguntas ambiguas",
      "Preguntas proyectivas"
    ],
    "correcta": 1,
    "resumen": "Preguntas cerradas con escalas u opciones múltiples",
    "fundamentacion": "Preguntas cerradas fáciles de tabular y analizar estadísticamente.",
    "id": 128,
    "question": "¿Qué tipo de preguntas se recomiendan en una encuesta para facilitar tabulación?",
    "options": [
      "Preguntas abiertas",
      "Preguntas cerradas con escalas u opciones múltiples",
      "Preguntas ambiguas",
      "Preguntas proyectivas"
    ],
    "correct": 1,
    "explanation": "Preguntas cerradas fáciles de tabular y analizar estadísticamente."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "Las conclusiones del estudio de mercado deben incluir:",
    "opciones": [
      "Solo el presupuesto",
      "Demanda insatisfecha, estrategia 4Ps y pronóstico de ventas",
      "Planos de la fábrica",
      "Estructura legal"
    ],
    "correcta": 1,
    "resumen": "Demanda insatisfecha, estrategia 4Ps y pronóstico de ventas",
    "fundamentacion": "Conclusiones claves: demanda insatisfecha, comercialización y pronóstico.",
    "id": 129,
    "question": "Las conclusiones del estudio de mercado deben incluir:",
    "options": [
      "Solo el presupuesto",
      "Demanda insatisfecha, estrategia 4Ps y pronóstico de ventas",
      "Planos de la fábrica",
      "Estructura legal"
    ],
    "correct": 1,
    "explanation": "Conclusiones claves: demanda insatisfecha, comercialización y pronóstico."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "El análisis de la competencia permite identificar:",
    "opciones": [
      "Únicamente precios",
      "Oportunidades y amenazas",
      "Solo cuota de mercado",
      "Las compras"
    ],
    "correcta": 1,
    "resumen": "Oportunidades y amenazas",
    "fundamentacion": "Estudio de oferta/competencia: conocer rivales y detectar oportunidades/amenazas.",
    "id": 130,
    "question": "El análisis de la competencia permite identificar:",
    "options": [
      "Únicamente precios",
      "Oportunidades y amenazas",
      "Solo cuota de mercado",
      "Las compras"
    ],
    "correct": 1,
    "explanation": "Estudio de oferta/competencia: conocer rivales y detectar oportunidades/amenazas."
  },
  {
    "modulo": 3,
    "moduloNombre": "Módulo 3: Estudio de Mercado y Análisis Competitivo",
    "enunciado": "¿Cuál es la diferencia entre demanda satisfecha e insatisfecha?",
    "opciones": [
      "Satisfecha es futura",
      "Satisfecha ya cubierta por oferta actual; insatisfecha es oportunidad no cubierta",
      "No hay diferencia",
      "Insatisfecha es más cara"
    ],
    "correcta": 1,
    "resumen": "Satisfecha ya cubierta por oferta actual; insatisfecha es oportunidad no cubierta",
    "fundamentacion": "Demanda satisfecha cubierta por competidores; insatisfecha es mercado potencial.",
    "id": 131,
    "question": "¿Cuál es la diferencia entre demanda satisfecha e insatisfecha?",
    "options": [
      "Satisfecha es futura",
      "Satisfecha ya cubierta por oferta actual; insatisfecha es oportunidad no cubierta",
      "No hay diferencia",
      "Insatisfecha es más cara"
    ],
    "correct": 1,
    "explanation": "Demanda satisfecha cubierta por competidores; insatisfecha es mercado potencial."
  },
  {
    "modulo": 4,
    "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
    "enunciado": "¿Qué nivel de localización analiza región, estado o zona geográfica considerando cercanía a materias primas e infraestructura?",
    "opciones": [
      "Microlocalización",
      "Macrolocalización",
      "Localización de detalle",
      "Georreferenciación"
    ],
    "correcta": 1,
    "resumen": "Macrolocalización",
    "fundamentacion": "Macrolocalización determina la región o estado, analizando macrofactores como disponibilidad de insumos y mercado.",
    "id": 132,
    "question": "¿Qué nivel de localización analiza región, estado o zona geográfica considerando cercanía a materias primas e infraestructura?",
    "options": [
      "Microlocalización",
      "Macrolocalización",
      "Localización de detalle",
      "Georreferenciación"
    ],
    "correct": 1,
    "explanation": "Macrolocalización determina la región o estado, analizando macrofactores como disponibilidad de insumos y mercado."
  },
  {
    "modulo": 4,
    "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
    "enunciado": "Método de evaluación de localización que asigna ponderaciones a factores críticos y objetivos:",
    "opciones": [
      "Método de Brown y Gibson",
      "Diagrama de Pareto",
      "Método de los momentos",
      "Análisis FODA"
    ],
    "correcta": 0,
    "resumen": "Método de Brown y Gibson",
    "fundamentacion": "El método de Brown y Gibson combina factores críticos y objetivos/subjetivos para seleccionar ubicación.",
    "id": 133,
    "question": "Método de evaluación de localización que asigna ponderaciones a factores críticos y objetivos:",
    "options": [
      "Método de Brown y Gibson",
      "Diagrama de Pareto",
      "Método de los momentos",
      "Análisis FODA"
    ],
    "correct": 0,
    "explanation": "El método de Brown y Gibson combina factores críticos y objetivos/subjetivos para seleccionar ubicación."
  },
  {
    "modulo": 4,
    "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
    "enunciado": "¿Qué es el tamaño óptimo de planta?",
    "opciones": [
      "La capacidad máxima técnica posible",
      "La capacidad que maximiza la rentabilidad y minimiza costos unitarios",
      "La misma capacidad que el competidor líder",
      "El tamaño mínimo por ley"
    ],
    "correcta": 1,
    "resumen": "La capacidad que maximiza la rentabilidad y minimiza costos unitarios",
    "fundamentacion": "El tamaño óptimo es aquel que maximiza la rentabilidad, con costos unitarios mínimos y economías de escala adecuadas.",
    "id": 134,
    "question": "¿Qué es el tamaño óptimo de planta?",
    "options": [
      "La capacidad máxima técnica posible",
      "La capacidad que maximiza la rentabilidad y minimiza costos unitarios",
      "La misma capacidad que el competidor líder",
      "El tamaño mínimo por ley"
    ],
    "correct": 1,
    "explanation": "El tamaño óptimo es aquel que maximiza la rentabilidad, con costos unitarios mínimos y economías de escala adecuadas."
  },
  {
    "modulo": 4,
    "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
    "enunciado": "Factor que NO determina el tamaño de planta según la unidad:",
    "opciones": [
      "Demanda del mercado",
      "Disponibilidad de insumos",
      "Color del logotipo corporativo",
      "Tecnología y financiamiento"
    ],
    "correcta": 2,
    "resumen": "Color del logotipo corporativo",
    "fundamentacion": "El color del logotipo no influye en la capacidad productiva; factores determinantes son demanda, insumos, tecnología y financiamiento.",
    "id": 135,
    "question": "Factor que NO determina el tamaño de planta según la unidad:",
    "options": [
      "Demanda del mercado",
      "Disponibilidad de insumos",
      "Color del logotipo corporativo",
      "Tecnología y financiamiento"
    ],
    "correct": 2,
    "explanation": "El color del logotipo no influye en la capacidad productiva; factores determinantes son demanda, insumos, tecnología y financiamiento."
  },
  {
    "modulo": 4,
    "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
    "enunciado": "Principio de distribución de planta según R. Muther que indica que el material debe recorrer la menor distancia posible:",
    "opciones": [
      "Integración de conjunto",
      "Mínima distancia recorrida",
      "Espacio cúbico",
      "Flexibilidad"
    ],
    "correcta": 1,
    "resumen": "Mínima distancia recorrida",
    "fundamentacion": "El principio de mínima distancia recorrida busca eficiencia y reducción de tiempos de desplazamiento.",
    "id": 136,
    "question": "Principio de distribución de planta según R. Muther que indica que el material debe recorrer la menor distancia posible:",
    "options": [
      "Integración de conjunto",
      "Mínima distancia recorrida",
      "Espacio cúbico",
      "Flexibilidad"
    ],
    "correct": 1,
    "explanation": "El principio de mínima distancia recorrida busca eficiencia y reducción de tiempos de desplazamiento."
  },
  {
    "modulo": 4,
    "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
    "enunciado": "Tipo de distribución de planta ideal para producción continua o en masa:",
    "opciones": [
      "Por proceso (funcional)",
      "Por producto (en línea)",
      "Por posición fija",
      "Por celdas de manufactura"
    ],
    "correcta": 1,
    "resumen": "Por producto (en línea)",
    "fundamentacion": "Distribución por producto o en línea es adecuada para producción continua y grandes volúmenes.",
    "id": 137,
    "question": "Tipo de distribución de planta ideal para producción continua o en masa:",
    "options": [
      "Por proceso (funcional)",
      "Por producto (en línea)",
      "Por posición fija",
      "Por celdas de manufactura"
    ],
    "correct": 1,
    "explanation": "Distribución por producto o en línea es adecuada para producción continua y grandes volúmenes."
  },
  {
    "modulo": 4,
    "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
    "enunciado": "¿Qué representa un diagrama de bloques en ingeniería del proyecto?",
    "opciones": [
      "Dibujo arquitectónico detallado",
      "Representación gráfica simple con bloques de operaciones unitarias",
      "Listado de tuberías e instrumentación",
      "Cronograma de actividades"
    ],
    "correcta": 1,
    "resumen": "Representación gráfica simple con bloques de operaciones unitarias",
    "fundamentacion": "El diagrama de bloques muestra operaciones unitarias y flujo de materiales de forma sencilla y global.",
    "id": 138,
    "question": "¿Qué representa un diagrama de bloques en ingeniería del proyecto?",
    "options": [
      "Dibujo arquitectónico detallado",
      "Representación gráfica simple con bloques de operaciones unitarias",
      "Listado de tuberías e instrumentación",
      "Cronograma de actividades"
    ],
    "correct": 1,
    "explanation": "El diagrama de bloques muestra operaciones unitarias y flujo de materiales de forma sencilla y global."
  },
  {
    "modulo": 4,
    "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
    "enunciado": "En el balance de materiales se aplica el principio de:",
    "opciones": [
      "Conservación de la masa (lo que entra = lo que sale + acumulación)",
      "Ley de la oferta y demanda",
      "Maximización de la entropía",
      "Equilibrio energético exclusivo"
    ],
    "correcta": 0,
    "resumen": "Conservación de la masa (lo que entra = lo que sale + acumulación)",
    "fundamentacion": "Balance de materiales se basa en la conservación de la masa: entradas = salidas + acumulación.",
    "id": 139,
    "question": "En el balance de materiales se aplica el principio de:",
    "options": [
      "Conservación de la masa (lo que entra = lo que sale + acumulación)",
      "Ley de la oferta y demanda",
      "Maximización de la entropía",
      "Equilibrio energético exclusivo"
    ],
    "correct": 0,
    "explanation": "Balance de materiales se basa en la conservación de la masa: entradas = salidas + acumulación."
  },
  {
    "modulo": 4,
    "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
    "enunciado": "¿Cuál es el objetivo de la ingeniería de detalle?",
    "opciones": [
      "Definir únicamente el diagrama de bloques",
      "Desarrollar planos, especificaciones, diagramas de tuberías y manuales para construcción",
      "Realizar el estudio de mercado",
      "Estimar solo los costos fijos"
    ],
    "correcta": 1,
    "resumen": "Desarrollar planos, especificaciones, diagramas de tuberías y manuales para construcción",
    "fundamentacion": "Ingeniería de detalle genera toda la documentación detallada: planos, especificaciones técnicas y manuales.",
    "id": 140,
    "question": "¿Cuál es el objetivo de la ingeniería de detalle?",
    "options": [
      "Definir únicamente el diagrama de bloques",
      "Desarrollar planos, especificaciones, diagramas de tuberías y manuales para construcción",
      "Realizar el estudio de mercado",
      "Estimar solo los costos fijos"
    ],
    "correct": 1,
    "explanation": "Ingeniería de detalle genera toda la documentación detallada: planos, especificaciones técnicas y manuales."
  },
  {
    "modulo": 4,
    "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
    "enunciado": "Son ejemplos de servicios de planta:",
    "opciones": [
      "Mano de obra indirecta",
      "Suministro de agua, energía eléctrica, vapor, tratamiento de residuos",
      "Publicidad y marketing",
      "Capacitación en ventas"
    ],
    "correcta": 1,
    "resumen": "Suministro de agua, energía eléctrica, vapor, tratamiento de residuos",
    "fundamentacion": "Servicios auxiliares como agua, energía, vapor, aire comprimido y tratamiento de residuos son vitales para operación.",
    "id": 141,
    "question": "Son ejemplos de servicios de planta:",
    "options": [
      "Mano de obra indirecta",
      "Suministro de agua, energía eléctrica, vapor, tratamiento de residuos",
      "Publicidad y marketing",
      "Capacitación en ventas"
    ],
    "correct": 1,
    "explanation": "Servicios auxiliares como agua, energía, vapor, aire comprimido y tratamiento de residuos son vitales para operación."
  },
  {
    "modulo": 4,
    "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
    "enunciado": "¿Qué regulan las normas ecológicas en un proyecto?",
    "opciones": [
      "Los procedimientos contables",
      "Límites máximos permisibles de emisiones y manejo de residuos",
      "La distribución de planta",
      "El precio de venta al público"
    ],
    "correcta": 1,
    "resumen": "Límites máximos permisibles de emisiones y manejo de residuos",
    "fundamentacion": "Normas ecológicas regulan emisiones, residuos peligrosos, impacto ambiental y ruido.",
    "id": 142,
    "question": "¿Qué regulan las normas ecológicas en un proyecto?",
    "options": [
      "Los procedimientos contables",
      "Límites máximos permisibles de emisiones y manejo de residuos",
      "La distribución de planta",
      "El precio de venta al público"
    ],
    "correct": 1,
    "explanation": "Normas ecológicas regulan emisiones, residuos peligrosos, impacto ambiental y ruido."
  },
  {
    "modulo": 4,
    "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
    "enunciado": "¿Qué aspecto legal se refiere al tipo de sociedad como S.A. o S. de R.L. ?",
    "opciones": [
      "Normas de seguridad",
      "Constitución legal y tipo de sociedad",
      "Normas ISO 9001",
      "Estudio de tiempos"
    ],
    "correcta": 1,
    "resumen": "Constitución legal y tipo de sociedad",
    "fundamentacion": "Dentro de aspectos legales se define el tipo de sociedad mercantil: S.A., S. de R.L., etc.",
    "id": 143,
    "question": "¿Qué aspecto legal se refiere al tipo de sociedad como S.A. o S. de R.L. ?",
    "options": [
      "Normas de seguridad",
      "Constitución legal y tipo de sociedad",
      "Normas ISO 9001",
      "Estudio de tiempos"
    ],
    "correct": 1,
    "explanation": "Dentro de aspectos legales se define el tipo de sociedad mercantil: S.A., S. de R.L., etc."
  },
  {
    "modulo": 4,
    "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
    "enunciado": "Dentro de los costos de operación, ¿cuál es un costo variable típico?",
    "opciones": [
      "Depreciación de maquinaria",
      "Sueldos del personal administrativo",
      "Materias primas e insumos",
      "Seguro de la planta"
    ],
    "correcta": 2,
    "resumen": "Materias primas e insumos",
    "fundamentacion": "Materias primas e insumos varían directamente con el nivel de producción, son costos variables.",
    "id": 144,
    "question": "Dentro de los costos de operación, ¿cuál es un costo variable típico?",
    "options": [
      "Depreciación de maquinaria",
      "Sueldos del personal administrativo",
      "Materias primas e insumos",
      "Seguro de la planta"
    ],
    "correct": 2,
    "explanation": "Materias primas e insumos varían directamente con el nivel de producción, son costos variables."
  },
  {
    "modulo": 4,
    "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
    "enunciado": "La fórmula Costos fijos + Costos variables corresponde a:",
    "opciones": [
      "Costo de oportunidad",
      "Costos totales de operación",
      "Inversión fija",
      "Punto de equilibrio"
    ],
    "correcta": 1,
    "resumen": "Costos totales de operación",
    "fundamentacion": "El costo total de operación es la suma de costos fijos más costos variables.",
    "id": 145,
    "question": "La fórmula Costos fijos + Costos variables corresponde a:",
    "options": [
      "Costo de oportunidad",
      "Costos totales de operación",
      "Inversión fija",
      "Punto de equilibrio"
    ],
    "correct": 1,
    "explanation": "El costo total de operación es la suma de costos fijos más costos variables."
  },
  {
    "modulo": 4,
    "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
    "enunciado": "¿Qué proporciona el estudio técnico al estudio financiero?",
    "opciones": [
      "Demanda insatisfecha",
      "Inversiones requeridas, costos de operación y vida útil de equipos",
      "Estrategia de promoción",
      "Segmentación psicográfica"
    ],
    "correcta": 1,
    "resumen": "Inversiones requeridas, costos de operación y vida útil de equipos",
    "fundamentacion": "El estudio técnico entrega al financiero las inversiones (fija, diferida, capital de trabajo), costos de operación y calendario.",
    "id": 146,
    "question": "¿Qué proporciona el estudio técnico al estudio financiero?",
    "options": [
      "Demanda insatisfecha",
      "Inversiones requeridas, costos de operación y vida útil de equipos",
      "Estrategia de promoción",
      "Segmentación psicográfica"
    ],
    "correct": 1,
    "explanation": "El estudio técnico entrega al financiero las inversiones (fija, diferida, capital de trabajo), costos de operación y calendario."
  },
  {
    "modulo": 4,
    "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
    "enunciado": "¿Cuál es la conclusión principal del estudio técnico?",
    "opciones": [
      "Verificar la viabilidad comercial",
      "Evaluar si es técnicamente factible, determinar la mejor localización, tamaño y requerimientos de inversión",
      "Calcular el retorno sobre inversión",
      "Diseñar la campaña publicitaria"
    ],
    "correcta": 1,
    "resumen": "Evaluar si es técnicamente factible, determinar la mejor localización, tamaño y requerimientos de inversión",
    "fundamentacion": "El estudio técnico concluye sobre viabilidad técnica, localización, tamaño óptimo e inversiones necesarias.",
    "id": 147,
    "question": "¿Cuál es la conclusión principal del estudio técnico?",
    "options": [
      "Verificar la viabilidad comercial",
      "Evaluar si es técnicamente factible, determinar la mejor localización, tamaño y requerimientos de inversión",
      "Calcular el retorno sobre inversión",
      "Diseñar la campaña publicitaria"
    ],
    "correct": 1,
    "explanation": "El estudio técnico concluye sobre viabilidad técnica, localización, tamaño óptimo e inversiones necesarias."
  },
  {
    "modulo": 4,
    "moduloNombre": "Módulo 4: Estudio Técnico e Ingeniería de Planta",
    "enunciado": "Método de evaluación de localización que considera factores críticos y ponderación objetiva/subjetiva (mencionado en la unidad):",
    "opciones": [
      "Método de factores ponderados",
      "Método Brown y Gibson",
      "Método Delphi",
      "Análisis de regresión lineal"
    ],
    "correcta": 1,
    "resumen": "Método Brown y Gibson",
    "fundamentacion": "En la unidad se menciona el método de Brown y Gibson (factores críticos y objetivos).",
    "id": 148,
    "question": "Método de evaluación de localización que considera factores críticos y ponderación objetiva/subjetiva (mencionado en la unidad):",
    "options": [
      "Método de factores ponderados",
      "Método Brown y Gibson",
      "Método Delphi",
      "Análisis de regresión lineal"
    ],
    "correct": 1,
    "explanation": "En la unidad se menciona el método de Brown y Gibson (factores críticos y objetivos)."
  }
]
};
