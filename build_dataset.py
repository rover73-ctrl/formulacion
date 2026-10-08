# -*- coding: utf-8 -*-
"""
build_dataset.py
Compila todas las preguntas proporcionadas por el usuario, eliminando duplicados
y estructurándolas en data.js con lecturas académicas completas y banco maestro de preguntas.
"""

import json

# Definición de preguntas extraídas de los 4 snippets

# 1. SNIPPET 1 (46 preguntas con argumentación completa)
snippet1 = [
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
    "fundamentacion": "En la teoría y praxis de formulación de proyectos, la asignación eficiente de un capital determinado exige mitigar el riesgo operativo, de información y de mercado. Contar con 'know-how' (experiencia técnica) y conocimiento certero de la demanda y competencia reduce la asimetría informativa, mientras que la condición 'si es rentable' garantiza que el flujo de beneficios supere el costo de oportunidad del capital (TIR > tasa de descuento). Invertir a ciegas o en megaproyectos sin respaldo técnico-financiero destruye valor económico."
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
    "fundamentacion": "La fase cuantitativa y decisiva de la evaluación económica y financiera de un proyecto se plasma de manera indispensable en el Flujo de Caja (Cash Flow). En él se proyectan de forma periódica todos los ingresos y egresos efectivos atribuibles al proyecto para luego aplicar sobre este saldo neto los indicadores matemáticos de bondad financiera (VAN, TIR, PRC y B/C). Sin flujo de caja, no existe base numérica para descontar dinero en el tiempo."
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
    "fundamentacion": "La entrevista directa a clientes potenciales (investigación de fuentes primarias) es el mecanismo fundamental y directo para levantar datos fidedignos sobre necesidades insatisfechas, hábitos de consumo, disposición a pagar (WTP) y validación de la propuesta de valor. Las demás opciones constituyen fuentes secundarias indirectas o de monitoreo complementario."
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
    "fundamentacion": "El ciclo de vida del proyecto contempla la etapa de Formulación (o preinversión), en la cual se elaboran rigurosamente el Estudio de Mercado, el Estudio Técnico, el Estudio Organizacional/Legal y el Estudio Financiero. El estudio de mercado cuantifica oferta, demanda, precios y canales de comercialización requeridos para dimensionar y formular técnicamente la propuesta."
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
    "fundamentacion": "En metodología de preparación y evaluación de proyectos, un proyecto viable surge de un proceso iterativo de identificación, formulación y comparación de múltiples alternativas de solución frente a un problema u oportunidad. La decisión final de materializarlo recae sobre aquella alternativa que optimiza los recursos y maximiza el beneficio económico o social frente a las demás alternativas evaluadas."
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
    "fundamentacion": "El Valor Actual Neto (VAN o NPV) es el criterio cuantitativo por excelencia de la evaluación económica y financiera de inversiones. Mide la riqueza neta adicional expresada en moneda de hoy que generará el proyecto, descontando los flujos netos futuros a una tasa de costo de oportunidad de capital. La liquidez y control de existencias son métricas contables y de gestión operativa, no de evaluación económica de proyectos."
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
    "fundamentacion": "Conceptualmente, un proyecto es una propuesta estructurada y justificada que busca resolver una necesidad, aprovechar una oportunidad de mercado o generar una optimización/mejora sustancial dentro de una organización o negocio en marcha mediante la asignación temporal de recursos."
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
    "fundamentacion": "En microeconomía y evaluación de proyectos, el mercado se conceptualiza formalmente como el espacio (físico o virtual) e interacción en el cual convergen las fuerzas de la oferta (vendedores/productores) y la demanda (compradores/consumidores) para determinar los precios y cantidades transadas de bienes y servicios."
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
    "fundamentacion": "El ciclo estándar y sistemático de un proyecto comprende secuencialmente: 1) Identificación (reconocer el problema/oportunidad y objetivos), 2) Formulación (diseño técnico, de mercado y organizacional), 3) Evaluación (determinación de viabilidad económica con flujos de fondos) y 4) Ejecución (puesta en marcha e implementación de la inversión)."
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
    "fundamentacion": "La génesis o gestación de la 'idea' en servicios de consumo (como un gimnasio) proviene del levantamiento directo de retroalimentación, insatisfacciones o tendencias manifestadas por los usuarios. Las redes sociales y canales directos proporcionan información valiosa y espontánea para orientar la propuesta antes de pasar a la formulación formal."
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
    "fundamentacion": "La justificación estratégica para la ejecución de proyectos de inversión radica principalmente en satisfacer demandas latentes o adaptarse al ciclo de vida del mercado mediante la innovación y lanzamiento de nuevos bienes o servicios que otorguen valor y sostenibilidad al negocio."
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
    "fundamentacion": "La Tasa Interna de Retorno (TIR o IRR) es el indicador dinámico de rentabilidad económica que iguala el valor actual de los flujos de caja futuros con la inversión inicial (haciendo el VAN igual a cero). Refleja la rentabilidad intrínseca porcentual del capital invertido."
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
    "fundamentacion": "Para evaluar rigurosamente la rentabilidad de un proyecto, es condición sine qua non haber transitado y completado previamente la concepción de la idea, la identificación del problema/oportunidad y la formulación técnica, comercial y de costos que alimentan el flujo de fondos."
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
    "fundamentacion": "El estudio técnico aborda de forma multidimensional la viabilidad operativa y productiva: tamaño del proyecto (cuánto), localización (dónde), especificaciones técnicas del bien (qué), articulado con los requerimientos identificados en el mercado (para quién y a qué condiciones de precio)."
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
    "fundamentacion": "El Plan de Inversión es el documento y cronograma estructurado donde se cuantifican, calendarizan y asignan las fuentes de financiamiento para todos los activos tangibles (maquinaria, infraestructura), intangibles (patentes, licencias) y capital de trabajo requeridos para materializar el proyecto."
  },

  # MÓDULO 2
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
    "fundamentacion": "El diseño de la metodología evaluativa depende críticamente del propósito del estudio: si se evalúa la rentabilidad del proyecto puro (sin deuda), la rentabilidad del inversionista (con deuda), la creación de un nuevo negocio o una decisión de outsourcing/modernización/reemplazo en una empresa en marcha."
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
    "fundamentacion": "En el análisis de externalidades y partes interesadas (stakeholders), el público en general o la comunidad adyacente actúa como beneficiario externo indirecto al verse favorecido por externalidades positivas generadas por el proyecto (mejora de infraestructura urbana, dinamismo económico, seguridad), sin participar directamente en la compraventa del bien."
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
    "fundamentacion": "El Enfoque de Marco Lógico (EML) destaca internacionalmente (utilizado por el BID, Banco Mundial, CEPAL) porque proporciona una herramienta integral de gestión estructurada que articula fin, propósito, componentes y actividades, sirviendo transversalmente en la identificación, formulación, seguimiento y evaluación ex-post a lo largo de todo el ciclo de vida."
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
    "fundamentacion": "El sesgo o preconcepto del evaluador ocurre cuando el analista asume hipótesis previas no fundamentadas o manipula parámetros técnicos y proyecciones para forzar que el proyecto resulte rentable, perdiendo objetividad e induciendo a malas decisiones de asignación de capital."
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
    "fundamentacion": "Según la finalidad del estudio y de la inversión (clasificación de Nassir Sapag Chain), los proyectos se dividen en: estudios para evaluar la creación de un nuevo negocio/nuevas líneas de negocio versus estudios para evaluar modificaciones en proyectos en marcha (outsourcing, internalización, reemplazo o ampliación)."
  },

  # MÓDULO 3
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
    "fundamentacion": "Por definición microeconómica, una estructura de mercado en monopolio se caracteriza por la existencia de un único productor/vendedor (oferente) que satisface toda la demanda del mercado y ejerce poder sobre la fijación de precios, careciendo de sustitutos cercanos."
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
    "fundamentacion": "El objetivo primario e insustituible del estudio de mercado es ratificar empíricamente la existencia de un conjunto suficiente de consumidores dispuestos a adquirir el bien o servicio propuesto a determinados precios y calidades. Si no hay demanda demostrada, el proyecto carece de base."
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
    "fundamentacion": "La elasticidad precio de la demanda mide la sensibilidad porcentual del consumo ante variaciones en el precio. Si la demanda es elástica (|Ep| > 1), un alza de precios contraerá tanto la cantidad que los ingresos totales caerán; si es inelástica, subir los precios incrementará los ingresos totales. Por ello, alterar el precio no implica automáticamente ganar más."
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
    "fundamentacion": "En el modelo clásico de oferta y demanda con pendiente normal, un desplazamiento hacia la derecha de la curva de demanda (ceteris paribus) genera un exceso de demanda temporal que empuja el precio hacia arriba y estimula a los productores a ofertar mayor cantidad, alcanzando un nuevo equilibrio con mayor precio y mayor cantidad transada."
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
    "fundamentacion": "La diferenciación acusada de productos fomenta que cada competidor atienda nichos específicos mediante ventajas competitivas únicas (especialización), fidelizando clientes y reduciendo la sustitución directa por precio."
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
    "fundamentacion": "Desde el punto de vista del comportamiento temporal del consumo y durabilidad del bien, los productos se categorizan fundamentalmente en Bienes Duraderos (utilizables por periodos prolongados como electrodomésticos o autos) y Perecederos (consumibles inmediatamente o de rápida caducidad como alimentos)."
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
    "fundamentacion": "Las economías de escala surgen cuando la empresa expande su capacidad productiva y nivel de producción, diluyendo sus costos fijos y optimizando procesos en sus instalaciones, lo que provoca que el costo medio unitario de producción disminuya conforme aumenta el volumen."
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
    "fundamentacion": "Bajo el clásico modelo de las 5 Fuerzas de Michael Porter para el análisis de atractivo industrial, las fuerzas son: 1) Amenaza de nuevos entrantes, 2) Poder de clientes, 3) Poder de proveedores, 4) Amenaza de sustitutos y 5) Rivalidad interna."
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
    "fundamentacion": "El poder de los compradores reside en su capacidad de forzar reducciones de precios, exigir mayor calidad o mejores condiciones comerciales al contar con un bajo costo de cambio y múltiples opciones sustitutas en el mercado."
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
    "fundamentacion": "La simetría y transparencia informativa sobre costos, precios de la competencia y características de los productos otorga al comprador un apalancamiento definitivo para exigir condiciones más favorables."
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
    "fundamentacion": "En el caso 'La Insolencia' (comercio de medialunas gourmet en calle con presentación formal), la estrategia central para neutralizar la presión de precios fue una fuerte propuesta de valor fundamentada en calidad superior, imagen de marca y fidelización afectiva, aislando al producto de la competencia genérica."
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
    "fundamentacion": "Al igual que en la pregunta conceptual del módulo, la observación directa en la calle buscaba probar que existía una demanda activa no satisfecha de trabajadores y transeúntes dispuestos a consumir panadería de alta calidad al paso."
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
    "fundamentacion": "Un avance o innovación tecnológica reduce los costos unitarios de producción y agiliza los procesos, lo que desplaza la curva de oferta agregada hacia la derecha (aumento de la oferta disponible a cada nivel de precio)."
  },

  # MÓDULO 4
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
    "fundamentacion": "En la fórmula del VAN: VAN = Σ [Ft / (1+i)^t] - I0, la tasa de descuento i se encuentra en el denominador. Conforme se incrementa la tasa i, el factor de descuento (1+i)^t crece exponencialmente, lo que reduce sustancialmente el valor presente de los flujos futuros de caja y hace que el VAN disminuya progresivamente."
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
    "fundamentacion": "El Periodo de Recuperación del Capital (PRC o Payback) mide el tiempo requerido para que los flujos generados amorticen íntegramente la inversión inicial. Si el PRC excede el horizonte temporal 'T' previsto de vida útil del proyecto, significa que dentro del plazo estimado de evaluación la inversión no alcanza a recuperarse."
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
    "fundamentacion": "El Valor Actual Neto representa el valor actualizado (traído a moneda de hoy) de todos los beneficios y costos del proyecto descontados a la tasa de exigencia mínima requerida, descontando el desembolso inicial."
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
    "fundamentacion": "En un escenario optimista (donde las ventas son superiores, los costos inferiores o los precios favorables), los flujos de caja netos se incrementan, lo que consecuentemente eleva el VAN a niveles máximos, incrementa la TIR muy por encima de la tasa de descuento y reduce el tiempo necesario para recuperar la inversión inicial (PRC menor)."
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
    "fundamentacion": "Si el criterio de decisión del VAN es mayor a cero (VAN > 0), el proyecto genera valor por encima de la exigencia del costo de capital. En la lógica de evaluación planteada en este reactivo, un VAN positivo es condición suficiente de viabilidad para aprobar la realización del proyecto."
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
    "fundamentacion": "El análisis de sensibilidad por escenarios modela comúnmente tres situaciones: Pesimista/Conservador (caída de demanda, encarecimiento de costos), Base o más probable, y Optimista (expansión acelerada de ingresos), permitiendo evaluar la solidez del proyecto ante variaciones críticas."
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
    "fundamentacion": "El informe final de evaluación de un proyecto condensa en su cierre ejecutivo el Resumen Ejecutivo (hallazgos clave), el Análisis de Variables (impacto de riesgos y supuestos) y la Recomendación/Conclusión final respecto a ejecutar, postergar o rechazar la inversión."
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
    "fundamentacion": "La regla de decisión financiera incondicional del VAN establece: Si VAN > 0, el proyecto genera riqueza neta por encima del costo de oportunidad del capital y del retorno exigido, por lo que debe ser aceptado y realizado."
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
    "fundamentacion": "La tríada clásica de indicadores de evaluación cuantitativa son: 1) VAN (mide agregación de valor monetario), 2) TIR (mide rentabilidad porcentual periódica) y 3) PRC o Payback (mide tiempo de liquidez y exposición al riesgo del capital invertido)."
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
    "fundamentacion": "La definición matemática y económica estricta de la TIR es aquella tasa de descuento específica que iguala el valor presente de los flujos de fondos futuros con la inversión inicial, resultando en un VAN exactamente igual a cero."
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
    "fundamentacion": "Cuando la TIR supera la tasa de descuento (TIR > i), significa que el proyecto rinde a una tasa superior a la que exige el inversionista o la que cuesta financiarlo en el mercado, generando rentabilidad económica excedente (VAN > 0) y ameritando su ejecución."
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
    "fundamentacion": "El análisis de sensibilidad permite a la gerencia identificar qué variables críticas (precio, costos, demanda, tasa) tienen mayor impacto sobre el flujo de fondos y determinar los rangos de tolerancia en que el proyecto se mantiene rentable frente a imprevistos del entorno."
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
    "fundamentacion": "El cálculo del VAN es perfectamente aplicable a cualquier secuencia de flujos de caja, sean positivos, negativos o mixtos, pues cada término del flujo de caja Ft se descuenta algebraicamente mediante su factor (1+i)^t. (Nota: donde sí pueden surgir inconsistencias matemáticas de múltiples tasas es en la TIR, pero nunca en el VAN)."
  }
]

print(f"Cargadas {len(snippet1)} preguntas del Snippet 1")
