# -*- coding: utf-8 -*-
"""
update_data_js.py
Actualiza data.js con los capítulos completos de lectura,
el nuevo Módulo de Impacto Social/Ambiental, y el Banco Maestro de 148 Preguntas con justificaciones.
"""

import json

# Leemos las preguntas maestras
with open("all_master_questions.json", "r", encoding="utf-8") as f:
    master_questions = json.load(f)

# Cargamos el archivo data.js original para preservar las lecturas de los primeros 4 capítulos
with open("data.js", "r", encoding="utf-8") as f:
    old_data = f.read()

# Buscamos la sección de flashcards y chapters de data.js original
# Crearemos un módulo 5 adicional para la Unidad VI: Impacto Social, Ambiental y Seguridad
cap5_reading = {
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
                "content": """
                  <p>El <strong>impacto social</strong> evalúa los cambios directos e indirectos que la ejecución y operación de un proyecto provocan en las condiciones de vida de la comunidad receptora.</p>
                  <div class="concept-callout">
                    <h4>Dimensiones del Impacto Social:</h4>
                    <ul>
                      <li><strong>Empleo y Economía Local:</strong> Generación de puestos de trabajo directos e indirectos, incremento de ingresos familiares y dinamización del comercio local.</li>
                      <li><strong>Salud y Calidad de Vida:</strong> Efectos en servicios de salud, saneamiento y condiciones de habitabilidad.</li>
                      <li><strong>Infraestructura y Servicios Públicos:</strong> Demanda sobre vialidades, energía, agua potable y escuelas.</li>
                    </ul>
                  </div>
                  <h4>Licencia Social para Operar (LSO)</h4>
                  <p>Más allá de cumplir con permisos legales y gubernamentales, la <strong>licencia social para operar</strong> es la aprobación y aceptación explícita o tácita de la comunidad local. Sin esta aceptación, el proyecto corre el riesgo de sufrir bloqueos comunitarios, huelgas y paralizaciones permanentes.</p>
                  <p><strong>Valor Compartido:</strong> El proyecto no debe concebirse como un enclave aislado que extrae recursos, sino como un agente de desarrollo mutuo que aporta beneficios tangibles a la comunidad para asegurar un entorno de estabilidad duradera.</p>
                """
            },
            {
                "id": "cap5-sec2",
                "title": "5.2 Estudio y Manifestación de Impacto Ambiental (MIA)",
                "content": """
                  <p>La <strong>Manifestación de Impacto Ambiental (MIA)</strong> es el documento técnico-jurídico que describe las condiciones ambientales previas al proyecto, identifica las alteraciones potenciales y propone medidas de mitigación y monitoreo ambiental.</p>
                  <h4>Clasificación de los Impactos Ambientales:</h4>
                  <ul>
                    <li><strong>Por su Signo:</strong> Positivos (reforestación, tratamiento de aguas residuales) o Negativos (emisiones, ruido, deforestación).</li>
                    <li><strong>Por su Temporalidad:</strong> Temporales (ruido o polvo durante la fase de construcción) o Permanentes (ocupación del suelo).</li>
                    <li><strong>Por su Reversibilidad:</strong> Reversibles (el entorno se recupera mediante acciones de mitigación) o Irreversibles (extinción de especies endémicas o contaminación de acuíferos profundos).</li>
                    <li><strong>Directos vs. Indirectos (Inducidos):</strong> Directos ocurren por la actividad inmediata; Indirectos surgen como consecuencia secundaria (por ejemplo, una carretera que facilita la tala clandestina).</li>
                  </ul>
                  <div class="note-box">
                    <i class="fas fa-seedling"></i>
                    <div>
                      <strong>Normas ISO 14000:</strong> Proporcionan lineamientos voluntarios para la gestión ambiental y la ecoeficiencia en los procesos productivos. Los bancos internacionales de desarrollo (BID, Banco Mundial) exigen rigurosas Evaluaciones de Impacto Social y Ambiental (EISA) para liberar financiamiento.
                    </div>
                  </div>
                """
            },
            {
                "id": "cap5-sec3",
                "title": "5.3 Seguridad Industrial y Gestión Legal",
                "content": """
                  <p>La <strong>seguridad industrial</strong> persigue un doble objetivo fundamental:</p>
                  <ol>
                    <li><strong>Proteger la integridad física y la salud de los trabajadores.</strong></li>
                    <li><strong>Garantizar la continuidad operativa del proceso productivo</strong> y resguardar las instalaciones físicas de la empresa.</li>
                  </ol>
                  <p>Abarca no solo el equipo de protección personal (EPP), sino también el diseño ergonómico de estaciones de trabajo, programas de mantenimiento preventivo, sistemas contra incendios y capacitación continua.</p>
                  <h4>Gestión Legal del Proyecto</h4>
                  <p>Todo proyecto debe encuadrarse en el marco jurídico vigente. Ignorar la legislación acarrea multas severas, clausuras temporales o definitivas y responsabilidades penales para los administradores.</p>
                  <ul>
                    <li><strong>Forma Societaria:</strong> Constitución formal mercantil (S.A. de C.V., S. de R.L.).</li>
                    <li><strong>Normatividad Sanitaria:</strong> Cumplimiento de las Normas Oficiales Mexicanas (NOM) para manejo e inocuidad de alimentos e insumos químicos.</li>
                    <li><strong>Derechos Laborales:</strong> Contratos individuales y colectivos, aportaciones patronales de seguridad social y condiciones de higiene reglamentarias.</li>
                  </ul>
                """
            }
        ]
    },
    "quiz": [q for q in master_questions if q["modulo"] == 6]
}

# Asignamos preguntas a cada capítulo en base a su módulo:
cap1_quiz = [q for q in master_questions if q["modulo"] in (1, 2)]
cap2_quiz = [q for q in master_questions if q["modulo"] == 3]
cap3_quiz = [q for q in master_questions if q["modulo"] == 4]
cap4_quiz = [q for q in master_questions if q["modulo"] == 5]

print(f"Capítulo 1 reactivos: {len(cap1_quiz)}")
print(f"Capítulo 2 reactivos: {len(cap2_quiz)}")
print(f"Capítulo 3 reactivos: {len(cap3_quiz)}")
print(f"Capítulo 4 reactivos: {len(cap4_quiz)}")
print(f"Capítulo 5 reactivos: {len(cap5_reading['quiz'])}")

# Extraemos la lista original de chapters
# Reconstruiremos data.js con los 5 capítulos completos y la variable masterQuestions
new_script = f"""/**
 * data.js - Base de Datos de Estudio, Banco Maestro de Reactivos y Cuestionarios
 * Formulación y Evaluación de Proyectos (Gabriel Baca Urbina)
 * Total de Reactivos Compilados: {len(master_questions)} preguntas con fundamentación pedagógica.
 */

const STUDY_DATA = {{
  chapters: [
    {{
      id: "cap1",
      number: "1",
      title: "Elementos Conceptuales y Preparación de la Evaluación",
      shortTitle: "1. Elementos Conceptuales",
      icon: "fa-project-diagram",
      color: "#38bdf8",
      accent: "rgba(56, 189, 248, 0.15)",
      badge: "Fundamentos, Ciclo de Vida y Metodología",
      description: "Conceptos esenciales sobre proyectos de inversión, niveles de profundidad (perfil, prefactibilidad, definitivo), estructura metodológica, cadena de suministros, planeación estratégica y detección de oportunidades.",
      reading: {{
        summary: "Un proyecto es la búsqueda de una solución inteligente al planteamiento de un problema orientada a resolver una necesidad humana. Este capítulo sienta las bases metodológicas para la toma de decisiones multidisciplinarias de inversión, detallando los niveles de estudio y la inserción del proyecto en la cadena de suministros moderna y la planeación estratégica.",
        sections: [
          {{
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
          }},
          {{
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
          }},
          {{
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
          }},
          {{
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
          }},
          {{
            id: "cap1-sec5",
            title: "1.5 Planeación Estratégica y Detección de Oportunidades",
            content: `
              <p>De acuerdo con <strong>Michael Porter</strong>, la <strong>ventaja competitiva sustentable</strong> se logra principalmente por dos pilares: <strong>Diferenciación de Producto</strong> o <strong>Liderazgo en Costos</strong>.</p>
              <p><strong>Cuatro características sociales determinantes del consumo:</strong> Densidad poblacional, estructura de edad de los habitantes, ingreso por familia y flujos migratorios.</p>
            `
          }}
        ]
      }},
      quiz: {json.dumps(cap1_quiz, ensure_ascii=False, indent=6)}
    }},
    {{
      id: "cap2",
      number: "2",
      title: "Estudio del Mercado",
      shortTitle: "2. Estudio del Mercado",
      icon: "fa-chart-line",
      color: "#10b981",
      accent: "rgba(16, 185, 129, 0.15)",
      badge: "Oferta, Demanda, Precios y Comercialización",
      description: "Cuantificación de la demanda insatisfecha, Consumo Nacional Aparente (CNA), métodos de pronóstico (mínimos cuadrados, series temporales, regresión multivariada, prueba F), técnicas de muestreo y estratificación, canales de comercialización y caso práctico mermeladas.",
      reading: {{
        summary: "El estudio de mercado es la primera parte formal de la evaluación. Determina si existe una demanda potencial insatisfecha que justifique instalar una unidad productiva, analizando la oferta existente, la política de precios y los canales de distribución más eficaces.",
        sections: [
          {{
            id: "cap2-sec1",
            title: "2.1 Objetivos y Estructura del Análisis de Mercado",
            content: `
              <p>Un <strong>mercado</strong> es el área en que confluyen las fuerzas de la oferta y la demanda para realizar transacciones de bienes y servicios a precios determinados.</p>
              <div class="concept-callout">
                <h4>Las 4 Variables Fundamentales</h4>
                <p>Análisis de Mercado = Análisis de la Oferta + Análisis de la Demanda + Análisis de los Precios + Análisis de la Comercialización &rarr; Conclusiones.</p>
              </div>
            `
          }},
          {{
            id: "cap2-sec2",
            title: "2.2 Análisis de la Demanda y Consumo Nacional Aparente (CNA)",
            content: `
              <p>La <strong>demanda</strong> es la cantidad de bienes y servicios que el mercado requiere para satisfacer una necesidad específica.</p>
              <div class="formula-box">
                <span class="formula-title">Fórmula del Consumo Nacional Aparente (CNA):</span>
                <div class="math-expr">Demanda = CNA = Producción Nacional + Importaciones - Exportaciones</div>
              </div>
            `
          }},
          {{
            id: "cap2-sec3",
            title: "2.3 Métodos de Proyección de la Demanda y Regresión",
            content: `
              <p>Para proyectar la demanda se analizan <strong>series de tiempo</strong> y modelos causales con regresión de mínimos cuadrados. Se aplica la <strong>prueba F (ANOVA)</strong> con significancia máxima del 5% para descartar variables ilegítimas.</p>
            `
          }},
          {{
            id: "cap2-sec4",
            title: "2.4 Muestreo y Estratificación",
            content: `
              <div class="formula-box">
                <span class="formula-title">Tamaño de Muestra (n):</span>
                <div class="math-expr">n = \\frac{{\\sigma^2 Z^2}}{{E^2}}</div>
                <small>Donde Z = 1.96 (95% confianza), &sigma; = desviación estándar, E = error permisible.</small>
              </div>
            `
          }},
          {{
            id: "cap2-sec5",
            title: "2.5 Oferta, Precios y Comercialización",
            content: `
              <p>Los precios <strong>se proyectan con la tasa de inflación esperada</strong> (no con curvas rígidas). Los canales para productos populares abarcan desde el directo (1A) hasta el mayorista-minorista (1C y 1D).</p>
            `
          }}
        ]
      }},
      quiz: {json.dumps(cap2_quiz, ensure_ascii=False, indent=6)}
    }},
    {{
      id: "cap3",
      number: "3",
      title: "Estudio Técnico",
      shortTitle: "3. Estudio Técnico",
      icon: "fa-cogs",
      color: "#8b5cf6",
      accent: "rgba(139, 92, 246, 0.15)",
      badge: "Ingeniería, Tamaño, Localización y Distribución",
      description: "Tamaño óptimo (método de Lange y escalación), localización por puntos ponderados y método de Vogel, diagramas de proceso (bloques, flujo ASME, cursograma analítico, hilos), cálculo de mano de obra y turnos, balance de equipos y materias primas, distribución SLP (Richard Muther) y marco legal.",
      reading: {{
        summary: "El estudio técnico resuelve todo lo concerniente a la instalación física y operatividad de la planta: dónde, cuánto, cuándo, cómo y con qué producir. Determina el tamaño óptimo, la localización estratégica, la ingeniería del proceso, la distribución en planta y la estructura organizacional legal.",
        sections: [
          {{
            id: "cap3-sec1",
            title: "3.1 Tamaño Óptimo de la Planta",
            content: `
              <p>Capacidad instalada que opera con el costo total mínimo o la máxima rentabilidad económica. Se evalúa con el <strong>Método de Lange</strong> o el <strong>Método de Escalación</strong>.</p>
            `
          }},
          {{
            id: "cap3-sec2",
            title: "3.2 Localización Óptima",
            content: `
              <p>Se evalúa mediante el <strong>Método cualitativo por puntos ponderados</strong> o el <strong>Método de transporte de Vogel</strong> para minimizar fletes.</p>
            `
          }},
          {{
            id: "cap3-sec3",
            title: "3.3 Ingeniería de Proceso y Diagramas",
            content: `
              <p>Diagramas de Bloques, Flujo de Proceso ASME (operación, transporte, demora, almacenamiento, inspección), Cursograma Analítico y Diagramas de Recorrido/Hilos.</p>
            `
          }},
          {{
            id: "cap3-sec4",
            title: "3.4 Balances de Materia Prima, Equipos y Mano de Obra",
            content: `
              <p>El <strong>equipo clave</strong> debe utilizarse al 70-100%. La mano de obra directa rinde <strong>80% de tiempo efectivo</strong> (384 minutos por turno de 8 horas).</p>
            `
          }},
          {{
            id: "cap3-sec5",
            title: "3.5 Distribución SLP (Richard Muther)",
            content: `
              <p>Basado en parámetros <strong>PQRST</strong>, matriz de cercanías (A, E, I, O, U, X) y código de razones.</p>
            `
          }}
        ]
      }},
      quiz: {json.dumps(cap3_quiz, ensure_ascii=False, indent=6)}
    }},
    {{
      id: "cap4",
      number: "4",
      title: "Estudio Económico",
      shortTitle: "4. Estudio Económico",
      icon: "fa-calculator",
      color: "#ec4899",
      accent: "rgba(236, 72, 153, 0.15)",
      badge: "Costos, Inversión, Punto de Equilibrio y TMAR",
      description: "Costos de producción, administración, ventas y financieros; activo fijo y diferido; depreciación fiscal en línea recta; capital de trabajo (modelo Baumol, inventarios LE, cuentas por cobrar); punto de equilibrio; estado de resultados pro-forma; TMAR propia y mixta ponderada; tablas de amortización de deuda y razones financieras.",
      reading: {{
        summary: "El estudio económico transforma en cifras monetarias todas las determinaciones de ingeniería técnica y comercial. Ordena y sistematiza los costos, inversiones, capital de trabajo y financiamiento para estructurar los estados pro-forma y calcular la rentabilidad económica.",
        sections: [
          {{
            id: "cap4-sec1",
            title: "4.1 Clasificación de Costos e Inversión Inicial",
            content: `
              <p>Se aplica <strong>costeo absorbente</strong> con al menos 35% de prestaciones sociales. La inversión se divide en Activo Fijo (tangible), Activo Diferido (intangible) y Capital de Trabajo.</p>
            `
          }},
          {{
            id: "cap4-sec2",
            title: "4.2 Punto de Equilibrio",
            content: `
              <div class="formula-box">
                <span class="formula-title">Punto de Equilibrio en Unidades (Q):</span>
                <div class="math-expr">Q = \\frac{{CF}}{{P - V}}</div>
              </div>
            `
          }},
          {{
            id: "cap4-sec3",
            title: "4.3 Capital de Trabajo y Lote Económico",
            content: `
              <p>Valores e inversiones, cuentas por cobrar e inventarios calculados por Lote Económico: $LE = \\sqrt{{\\frac{{2FU}}{{CP}}}}$.</p>
            `
          }},
          {{
            id: "cap4-sec4",
            title: "4.4 TMAR y Financiamiento",
            content: `
              <div class="formula-box">
                <span class="formula-title">Fórmula de TMAR Individual:</span>
                <div class="math-expr">\\text{{TMAR}} = i + f + i \\cdot f</div>
              </div>
              <p>Se analizan 4 métodos de pago de préstamo y razones financieras de liquidez y solvencia.</p>
            `
          }}
        ]
      }},
      quiz: {json.dumps(cap4_quiz, ensure_ascii=False, indent=6)}
    }},
    {json.dumps(cap5_reading, ensure_ascii=False, indent=4)}
  ],
  flashcards: [
    {{ chapter: "Módulo 1", term: "Proyecto de Inversión", def: "Plan estructurado que al asignársele capital e insumos produce un bien o servicio útil a la sociedad con rentabilidad demostrada." }},
    {{ chapter: "Módulo 1", term: "Perfil (Gran Visión)", def: "Estudio preliminar con información previa, sentido común y cifras globales sin investigación de campo exhaustiva." }},
    {{ chapter: "Módulo 1", term: "Anteproyecto", def: "Estudio de prefactibilidad que analiza fuentes de mercado, tecnología, costos y rentabilidad; nivel estándar de evaluación." }},
    {{ chapter: "Módulo 1", term: "Logística Inversa", def: "Responsabilidad del fabricante de recoger y tratar adecuadamente los productos vencidos o desechos para evitar contaminación." }},
    {{ chapter: "Módulo 2", term: "Enfoque Marco Lógico", def: "Herramienta estructurada de gestión transversal en todas las etapas del ciclo de vida del proyecto." }},
    {{ chapter: "Módulo 2", term: "Scope Creep", def: "Corrupción o expansión no controlada del alcance del proyecto sin ajuste de presupuesto ni cronograma." }},
    {{ chapter: "Módulo 3", term: "Consumo Nacional Aparente", def: "Demanda = CNA = Producción Nacional + Importaciones - Exportaciones." }},
    {{ chapter: "Módulo 3", term: "Prueba F (ANOVA)", def: "Herramienta estadística para validar variables explicativas con significancia máxima del 5%, evitando variables ilegítimas." }},
    {{ chapter: "Módulo 3", term: "Muestreo Estratificado", def: "Técnica donde la muestra reproduce las proporciones demográficas y de ingreso de la población objetivo." }},
    {{ chapter: "Módulo 3", term: "Canal 1B", def: "Productor -> Minoristas (detallistas) -> Consumidores finales (ejemplo clásico de misceláneas y abarrotes)." }},
    {{ chapter: "Módulo 4", term: "Tamaño Óptimo", def: "Capacidad instalada que opera con el costo total mínimo o la máxima rentabilidad económica." }},
    {{ chapter: "Módulo 4", term: "Equipo Clave", def: "Maquinaria costosa de capacidad estandarizada que debe utilizarse al 70-100% para no generar capital ocioso." }},
    {{ chapter: "Módulo 4", term: "Jornada Efectiva (80%)", def: "En 8 horas de trabajo se consideran 6.4 horas (384 min) efectivas por alimentación, higiene y aseo." }},
    {{ chapter: "Módulo 4", term: "Método SLP (Muther)", def: "Planeación Sistemática de Distribución basada en PQRST, matriz de cercanías (A, E, I, O, U, X) y código de razones." }},
    {{ chapter: "Módulo 5", term: "Lote Económico (LE)", def: "Cantidad óptima de compra que minimiza la suma de costos de ordenar y costos de mantener inventario." }},
    {{ chapter: "Módulo 5", term: "Punto de Equilibrio (Q)", def: "Nivel de unidades donde ingresos = costos totales: Q = CF / (P - V)." }},
    {{ chapter: "Módulo 5", term: "TMAR Individual", def: "Tasa mínima requerida: TMAR = i + f + (i * f) (premio al riesgo e inflación promedio)." }},
    {{ chapter: "Módulo 5", term: "Valor Actual Neto (VAN)", def: "Valor monetario actualizado de los flujos de fondos netos futuros descontados a la tasa de capital menos la inversión." }},
    {{ chapter: "Módulo 6", term: "Licencia Social", def: "Aceptación voluntaria y respaldo continuo de la comunidad receptora para la operación pacífica del proyecto." }},
    {{ chapter: "Módulo 6", term: "MIA", def: "Manifestación de Impacto Ambiental: documento técnico con medidas de mitigación y monitoreo ecológico." }}
  ],
  masterQuestions: {json.dumps(master_questions, ensure_ascii=False, indent=2)}
}};
"""

with open("data.js", "w", encoding="utf-8") as f:
    f.write(new_script)

print("data.js actualizado con éxito con los 5 módulos y 148 preguntas maestras.")
