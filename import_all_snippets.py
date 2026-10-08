# -*- coding: utf-8 -*-
"""
import_all_snippets.py
Extrae y consolida TODAS las preguntas de los 4 snippets del usuario:
- Snippet 1: 46 preguntas (Módulos 1, 2, 3, 4 con argumentación LaTeX y justificaciones)
- Snippet 2: 34 preguntas (17 Unidad V Financiero + 17 Unidad VI Social/Ambiental/Legal)
- Snippet 3: 51 preguntas (17 Unidad I Fundamentos + 17 Unidad II Gestión + 17 Unidad III Mercado)
- Snippet 4: 34 preguntas (17 Unidad III Mercado + 17 Unidad IV Técnico/Ingeniería)
"""

import json
import re

# 1. SNIPPET 1: 46 Preguntas completas
# (Ya cargadas en build_dataset.py)
from build_dataset import snippet1

# 2. SNIPPET 2: 34 Preguntas (Unidad V y VI)
snippet2_raw = [
    # UNIDAD V
    { "unit": "V", "text": "¿Qué son los costos directos?", "options": ["Gastos generales de administración", "Costos que se relacionan directamente con el producto o servicio, fácilmente identificables", "Todos los costos financieros", "Únicamente la materia prima"], "correct": 1, "justification": "Los costos directos son aquellos identificables y asignables directamente a un producto o servicio, como mano de obra directa y materiales (sección 5.1.1)." },
    { "unit": "V", "text": "Dentro de los costos directos de mano de obra se incluye:", "options": ["Sueldos de gerentes administrativos", "Salarios y prestaciones de operarios de producción", "Gastos de limpieza de oficinas", "Renta de instalaciones"], "correct": 1, "justification": "La mano de obra directa incluye salarios de operarios, supervisión directa y capacitación del personal productivo (5.1.1.1)." },
    { "unit": "V", "text": "¿Cuál de los siguientes es un costo indirecto típico?", "options": ["Materia prima para el producto", "Sueldos del personal administrativo", "Salario de operarios de producción", "Empaques específicos del producto"], "correct": 1, "justification": "Los costos indirectos son comunes a muchos productos, como sueldos administrativos, rentas o servicios generales (sección 5.2)." },
    { "unit": "V", "text": "Los costos fijos se caracterizan por:", "options": ["Variar proporcionalmente con la producción", "No variar con el nivel de producción", "Depender solo de la materia prima", "Ser siempre financieros"], "correct": 1, "justification": "Los costos fijos no cambian con el nivel de producción, ej. rentas, seguros (clasificación complementaria, pág.2)." },
    { "unit": "V", "text": "¿Qué mide la depreciación de activos tangibles?", "options": ["El incremento del valor de mercado", "La distribución del costo del activo durante su vida útil por desgaste u obsolescencia", "Gastos de mantenimiento", "Solo la pérdida fiscal"], "correct": 1, "justification": "La depreciación refleja el desgaste o consumo de activos fijos tangibles y reduce utilidad fiscal (5.2.2)." },
    { "unit": "V", "text": "¿Cuál es el propósito del flujo de efectivo proyectado (pro-forma)?", "options": ["Mostrar solo utilidades acumuladas", "Detallar entradas y salidas de efectivo previstas", "Calcular solo inversión inicial", "Mostrar el balance general"], "correct": 1, "justification": "El flujo de efectivo proyectado detalla las entradas y salidas de efectivo previstas (5.3)." },
    { "unit": "V", "text": "¿Qué indica el Periodo de Recuperación de la Inversión (PRI)?", "options": ["La rentabilidad en porcentaje", "El tiempo en que se recupera la inversión inicial con flujos acumulados", "El valor actual neto", "La tasa de descuento"], "correct": 1, "justification": "El PRI o Payback es el tiempo que tarda el proyecto en generar flujos suficientes para recuperar la inversión (5.3.1.2)." },
    { "unit": "V", "text": "Fórmula básica del ROI (Return on Investment):", "options": ["(Utilidad Bruta / Ventas) × 100", "(Utilidad Neta / Inversión Total) × 100", "(Flujo de caja / Patrimonio)", "(VAN / Inversión) × 100"], "correct": 1, "justification": "ROI = (Utilidad Neta / Inversión Total) × 100, según 5.3.1.3." },
    { "unit": "V", "text": "Un VAN mayor que cero (VAN > 0) significa que:", "options": ["El proyecto destruye valor, se rechaza", "El proyecto es rentable, genera valor superior a la inversión", "Es indiferente", "La TIR es menor a la tasa de oportunidad"], "correct": 1, "justification": "VAN > 0 indica rentabilidad, se acepta el proyecto (5.3.1.4)." },
    { "unit": "V", "text": "La Tasa Interna de Retorno (TIR) es la tasa que hace que:", "options": ["El ROI sea máximo", "El VAN sea igual a cero", "El periodo de recuperación sea 0", "La inversión inicial se duplique"], "correct": 1, "justification": "La TIR es la tasa de descuento que iguala el VAN a cero (5.3.2)." },
    { "unit": "V", "text": "Si la TIR > tasa de oportunidad (costo de capital), el proyecto:", "options": ["Se rechaza por bajo rendimiento", "Es rentable y se acepta", "Es indiferente", "Genera pérdida segura"], "correct": 1, "justification": "Si TIR > costo de oportunidad, el proyecto genera más de lo mínimo esperado y se acepta (5.3.2)." },
    { "unit": "V", "text": "En el punto de equilibrio en unidades, la fórmula es:", "options": ["Costos Fijos / (Precio - Costo Variable unitario)", "Costos Totales / Margen", "(Costos Fijos + Variables) / Precio", "Ventas totales / Unidades"], "correct": 0, "justification": "PE (unidades) = Costos Fijos Totales / (Precio de venta unitario – Costo variable unitario) (pág.6)." },
    { "unit": "V", "text": "Una empresa tiene CF=$15,000, Pvu=$50, Cvu=$5. ¿Cuál es el punto de equilibrio en unidades?", "options": ["300 unidades", "334 unidades", "375 unidades", "250 unidades"], "correct": 1, "justification": "PE = 15000 / (50-5) = 15000/45 = 334 unidades (ejemplo página 6)." },
    { "unit": "V", "text": "El Plan de Negocios integra todos los estudios previos. ¿Cuál es el primer elemento en la estructura típica?", "options": ["Plan financiero", "Resumen ejecutivo", "Análisis de mercado", "Plan técnico"], "correct": 1, "justification": "El resumen ejecutivo es el primer punto y se escribe al final pero aparece al inicio del documento (pág.7)." },
    { "unit": "V", "text": "¿Qué gasto corresponde a la amortización de activos intangibles?", "options": ["Depreciación de maquinaria", "Distribución del costo de patentes, licencias o software", "Mantenimiento de edificios", "Pago de intereses"], "correct": 1, "justification": "La amortización aplica a activos intangibles como patentes, marcas o software (5.2.2)." },
    { "unit": "V", "text": "¿Qué indica el Margen de contribución unitario?", "options": ["La ganancia neta total", "Lo que aporta cada unidad para cubrir costos fijos (precio - costo variable unitario)", "El porcentaje de ROI", "El valor del VAN"], "correct": 1, "justification": "Margen de contribución = Precio – costo variable unitario, utilizado en punto de equilibrio (pág.6)." },
    { "unit": "V", "text": "¿Cuál es la decisión recomendada si VAN < 0 y TIR < tasa de oportunidad?", "options": ["Aceptar el proyecto", "Rechazar el proyecto", "Indiferente", "Financiar con más deuda"], "correct": 1, "justification": "VAN negativo y TIR inferior indican que no es rentable, se recomienda rechazar (conclusiones 5.6)." },

    # UNIDAD VI
    { "unit": "VI", "text": "¿Qué estudia el impacto social de un proyecto?", "options": ["Únicamente costos financieros", "El cambio o efecto en la comunidad, en dimensiones como salud, empleo, cultura", "La rentabilidad para accionistas", "El cálculo de depreciación"], "correct": 1, "justification": "El impacto social evalúa el bienestar de la población, cambios en salud, educación, economía local (6.1)." },
    { "unit": "VI", "text": "¿Cuál es un impacto social negativo posible de una fábrica en zona rural?", "options": ["Construcción de escuela", "Generación de empleo", "Migración masiva y saturación de servicios públicos", "Capacitación laboral"], "correct": 2, "justification": "La migración masiva y saturación de servicios públicos es un impacto negativo (ejemplo fábrica en comunidad rural, pág.2)." },
    { "unit": "VI", "text": "¿Qué es la 'licencia social para operar'?", "options": ["Permiso municipal obligatorio", "Aceptación y aprobación de la comunidad para que el proyecto opere sin fricciones", "Un documento de impacto ambiental", "Un seguro de responsabilidad civil"], "correct": 1, "justification": "Más allá de permisos legales, la aceptación comunitaria es la licencia social para operar sin conflictos (6.1)." },
    { "unit": "VI", "text": "La Manifestación de Impacto Ambiental (MIA) es un documento que:", "options": ["Solo identifica impactos positivos", "Propone medidas para mitigar impactos negativos y monitoreo ambiental", "Es un estudio financiero", "Se usa para fijar precio de venta"], "correct": 1, "justification": "La MIA describe impactos, medidas de mitigación y plan de seguimiento (6.2)." },
    { "unit": "VI", "text": "¿Qué tipo de impacto ambiental es permanente e irreversible?", "options": ["Ruido durante construcción", "Contaminación temporal de un río", "Extinción de una especie local", "Polvo en el aire"], "correct": 2, "justification": "Extinción de una especie es irreversible y permanente (clasificación 6.2)." },
    { "unit": "VI", "text": "Un impacto ambiental positivo sería:", "options": ["Deforestación", "Emisión de gases", "Reforestación de un área degradada", "Vertido de aguas residuales"], "correct": 2, "justification": "La reforestación mejora el ambiente, es un impacto positivo (6.2)." },
    { "unit": "VI", "text": "¿Cuál es el objetivo principal de la seguridad industrial?", "options": ["Maximizar utilidades", "Proteger integridad física de trabajadores y prevenir daños en instalaciones", "Solo cumplir normas fiscales", "Reducir costo de mano de obra"], "correct": 1, "justification": "Seguridad industrial protege a empleados e instalaciones, evitando accidentes y garantizando continuidad (6.3)." },
    { "unit": "VI", "text": "Ejemplo de gestión legal en un proyecto es:", "options": ["Calcular el ROI", "Obtener licencia de funcionamiento y cumplir NOM de seguridad", "Elaborar estudio de mercado", "Diseñar logotipo"], "correct": 1, "justification": "La gestión legal abarca permisos, licencias y cumplimiento de normas (pág.4-5)." },
    { "unit": "VI", "text": "¿Por qué es importante la evaluación de impacto social para acceder a financiamiento?", "options": ["Porque los bancos solo ven el VAN", "Porque bancos de desarrollo exigen evaluación de impacto social (EIS) como requisito", "No es relevante", "Solo para proyectos grandes de construcción"], "correct": 1, "justification": "Bancos como BID o fondos exigen EIS para financiar proyectos (6.1)." },
    { "unit": "VI", "text": "Dimensión del impacto social relacionada con la creación de empleos y dinamización comercial:", "options": ["Salud y bienestar", "Empleo y economía local", "Infraestructura", "Organización social"], "correct": 1, "justification": "El empleo y economía local incluye generación de puestos de trabajo y aumento de ingresos (6.1)." },
    { "unit": "VI", "text": "¿Qué significa que un impacto ambiental sea indirecto o inducido?", "options": ["Que ocurre inmediatamente", "Es consecuencia secundaria de la acción principal", "Que no afecta al entorno", "Es reversible"], "correct": 1, "justification": "Ejemplo: una carretera facilita llegada de colonos que talan bosque, impacto indirecto (6.2)." },
    { "unit": "VI", "text": "¿Cuál es el doble objetivo de la seguridad industrial?", "options": ["Cuidar la vida de las personas y garantizar continuidad del proceso productivo", "Reducir costos y aumentar producción", "Evitar demandas legales únicamente", "Certificar calidad ISO"], "correct": 0, "justification": "Proteger a los trabajadores y asegurar la operación sin interrupciones (6.3)." },
    { "unit": "VI", "text": "¿Qué consecuencia puede traer ignorar la gestión legal en un proyecto?", "options": ["Mejor imagen corporativa", "Multas, clausuras y posibles responsabilidades penales", "Aumento de ventas", "Menor costo de producción"], "correct": 1, "justification": "Incumplir normas genera sanciones, clausuras o carcel para directivos (conclusión pág.5)." },
    { "unit": "VI", "text": "¿Qué mide el impacto ambiental según su reversibilidad?", "options": ["Si el daño puede recuperarse con medidas o es permanente", "Si causa beneficios económicos", "La duración en meses", "La distancia del proyecto"], "correct": 0, "justification": "Reversible: puede recuperarse; irreversible: daño permanente (6.2)." },
    { "unit": "VI", "text": "¿Cuál de los siguientes es un componente de la seguridad industrial además de protección personal?", "options": ["Ergonomía y mantenimiento preventivo", "Plan de marketing", "Análisis de precios", "Proyección de ingresos"], "correct": 0, "justification": "Incluye ergonomía, mantenimiento, planes contra incendios (6.3)." },
    { "unit": "VI", "text": "¿Qué significa 'valor compartido' en relación con la comunidad?", "options": ["Reparto de dividendos", "Que el proyecto aporta beneficios reales a la comunidad creando un entorno próspero para ambos", "Donación del 1% de utilidades", "Patrocinio deportivo"], "correct": 1, "justification": "Generar valor compartido implica beneficios mutuos, comunidad más próspera y proyecto estable (6.1)." },
    { "unit": "VI", "text": "Un proyecto sostenible debe ser:", "options": ["Solo rentable económicamente", "Socialmente justo, ambientalmente responsable y legalmente impecable", "Únicamente innovador", "Independiente de la comunidad"], "correct": 1, "justification": "Conclusión Unidad VI: socialmente justo, ambientalmente responsable y legalmente impecable (pág.5)." }
]

# 3. SNIPPET 3: 51 Preguntas (Unidades I, II y III)
snippet3_raw = [
    # Unidad I
    { "unit": "I", "text": "¿Cuál de las siguientes NO es una característica principal de un proyecto?", "options": ["Temporalidad", "Unicidad", "Certeza absoluta", "Interdisciplinariedad"], "correct": 2, "justification": "El proyecto implica incertidumbre, no certeza absoluta (característica clave: incertidumbre)." },
    { "unit": "I", "text": "Según la clasificación por su naturaleza, un proyecto de inversión pública busca principalmente:", "options": ["Maximizar rentabilidad financiera", "Generar bienestar social", "Producir bienes tangibles", "Minimizar costos operativos"], "correct": 1, "justification": "Inversión pública busca bienestar social e impacto social (salud, educación)." },
    { "unit": "I", "text": "¿Qué tipo de proyectos son aquellos que se benefician mutuamente si se realizan en conjunto?", "options": ["Independientes", "Mutuamente excluyentes", "Complementarios", "Marginales"], "correct": 2, "justification": "Proyectos complementarios: al realizarse juntos potencian beneficios." },
    { "unit": "I", "text": "Fuente interna de generación de proyectos:", "options": ["Demanda insatisfecha", "Nuevas tecnologías disponibles", "Reemplazo de equipos por obsolescencia", "Políticas gubernamentales"], "correct": 2, "justification": "Reemplazo de equipos es fuente interna; las otras son externas." },
    { "unit": "I", "text": "En el ciclo de vida del proyecto, ¿qué fase corresponde a la 'pre-inversión'?", "options": ["Ejecución y puesta en marcha", "Idea, perfil, prefactibilidad y factibilidad", "Operación y comercialización", "Abandono de activos"], "correct": 1, "justification": "Pre-inversión incluye idea, perfil, prefactibilidad y factibilidad." },
    { "unit": "I", "text": "El VAN (Valor Actual Neto) es un indicador utilizado en la evaluación:", "options": ["Técnica", "Legal", "Financiera", "Ambiental"], "correct": 2, "justification": "VAN y TIR son indicadores financieros, evalúan rentabilidad del capital." },
    { "unit": "I", "text": "¿Qué etapa del proyecto integra el estudio de mercado, estudio técnico y estudio financiero?", "options": ["Identificación del problema", "Preparación o formulación", "Decisión", "Operación y seguimiento"], "correct": 1, "justification": "Preparación/formulación incluye estudios de mercado, técnico, legal y financiero." },
    { "unit": "I", "text": "La evaluación de sensibilidad y análisis de riesgo pertenece principalmente a la etapa de:", "options": ["Ejecución", "Evaluación", "Abandono", "Inversión"], "correct": 1, "justification": "En la etapa de evaluación se aplican análisis de sensibilidad y riesgo." },
    { "unit": "I", "text": "¿Cuál es la principal diferencia entre estudios de prefactibilidad y factibilidad?", "options": ["El costo del estudio", "La profundidad y fuentes de información (primarias vs secundarias)", "El tipo de producto", "La metodología legal"], "correct": 1, "justification": "Prefactibilidad usa fuentes secundarias; factibilidad requiere fuentes primarias y mayor detalle." },
    { "unit": "I", "text": "Dentro de la clasificación por área organizacional, un proyecto de 'lanzamiento de nuevo producto' corresponde a:", "options": ["Proyecto financiero", "Proyecto de mercadotecnia", "Proyecto administrativo", "Proyecto de producción"], "correct": 1, "justification": "Mercadotecnia abarca lanzamientos, promoción y estudio de mercado." },
    { "unit": "I", "text": "¿Qué indicador mide el tiempo necesario para recuperar la inversión?", "options": ["TIR", "Relación B/C", "Período de recuperación", "Valor actual neto"], "correct": 2, "justification": "Período de recuperación (payback) mide tiempo de retorno de la inversión." },
    { "unit": "I", "text": "Ejemplo de proyecto de inversión privada:", "options": ["Construcción de un hospital público", "Desarrollo de un nuevo software por una empresa", "Programa de alfabetización", "Construcción de una carretera estatal"], "correct": 1, "justification": "Desarrollo de software con fines de lucro es inversión privada." },
    { "unit": "I", "text": "¿Cuál es una fuente externa de origen de proyectos?", "options": ["Necesidades de expansión", "Modernización tecnológica", "Cambios en el entorno económico", "Cumplimiento normativo interno"], "correct": 2, "justification": "Cambios económicos, sociales o políticos son del entorno externo." },
    { "unit": "I", "text": "Fase del proyecto donde se generan los flujos de efectivo continuos:", "options": ["Pre-inversión", "Inversión", "Operación", "Cierre"], "correct": 2, "justification": "Operación produce ingresos y flujos de efectivo." },
    { "unit": "I", "text": "En la metodología de evaluación, los árboles de decisión y simulación Monte Carlo son técnicas de:", "options": ["Evaluación determinista", "Evaluación de riesgo", "Evaluación legal", "Evaluación ambiental"], "correct": 1, "justification": "Simulación Monte Carlo y árboles evalúan riesgo e incertidumbre." },
    { "unit": "I", "text": "¿Qué tipo de evaluación responde '¿El proyecto beneficia a la sociedad?'", "options": ["Financiera", "Económica social", "Técnica", "Ambiental"], "correct": 1, "justification": "Evaluación económica social mide beneficio a la sociedad (precios sombra)." },
    { "unit": "I", "text": "¿Los proyectos en los que solo uno de ellos puede realizarse (por ejemplo dos ubicaciones alternativas) se denominan?", "options": ["Independientes", "Complementarios", "Mutuamente excluyentes", "Concurrentes"], "correct": 2, "justification": "Mutuamente excluyentes: elegir uno impide el otro." },

    # Unidad II
    { "unit": "II", "text": "¿Cuál es la función administrativa que predetermina un curso de acción para alcanzar objetivos?", "options": ["Organización", "Dirección", "Planeación", "Control"], "correct": 2, "justification": "Planeación es la función que define objetivos y acciones futuras." },
    { "unit": "II", "text": "¿Qué significa 'scope creep' en la gestión de proyectos?", "options": ["Reducción de costos", "Crecimiento no controlado del alcance", "Asignación eficiente de recursos", "Evaluación de riesgos"], "correct": 1, "justification": "Scope creep es expansión del alcance sin control, causa fracasos." },
    { "unit": "II", "text": "Dentro de la organización del proyecto, la estructura matricial implica:", "options": ["Dependencia única al director", "Doble cadena de mando (función y proyecto)", "Solo jefes funcionales", "Equipo autónomo sin jerarquía"], "correct": 1, "justification": "Estructura matricial combina autoridad funcional y por proyecto." },
    { "unit": "II", "text": "¿Qué herramienta descompone el trabajo en paquetes de trabajo?", "options": ["Diagrama de Gantt", "Estructura de Desglose de Trabajo (WBS)", "Matriz RACI", "Flujo de caja"], "correct": 1, "justification": "WBS (Work Breakdown Structure) descompone el proyecto en tareas." },
    { "unit": "II", "text": "¿Quién tiene la responsabilidad de inspirar y motivar al equipo más allá de la supervisión?", "options": ["El patrocinador", "El líder del proyecto", "El analista financiero", "El cliente"], "correct": 1, "justification": "Liderazgo es inspirar; dirección incluye liderazgo." },
    { "unit": "II", "text": "La designación de responsables debe venir acompañada de:", "options": ["Mayor presupuesto", "Autoridad necesaria para cumplir", "Jornada extendida", "Revisión diaria"], "correct": 1, "justification": "Responsabilidad requiere autoridad equivalente." },
    { "unit": "II", "text": "¿Cuál es el objetivo principal del estudio de factibilidad?", "options": ["Descartar proyectos rápidamente", "Determinar con certeza la viabilidad integral", "Solo evaluar mercado", "Definir el nombre del proyecto"], "correct": 1, "justification": "Factibilidad determina viabilidad técnica, económica, financiera, legal y ambiental." },
    { "unit": "II", "text": "Los estudios de prefactibilidad se basan principalmente en:", "options": ["Fuentes primarias", "Fuentes secundarias", "Simulación avanzada", "Prototipos físicos"], "correct": 1, "justification": "Prefactibilidad usa información secundaria (estadísticas, publicaciones)." },
    { "unit": "II", "text": "¿Qué estudio dentro del plan de factibilidad analiza tamaño, localización óptima y procesos?", "options": ["Estudio de mercado", "Estudio técnico", "Estudio financiero", "Estudio legal"], "correct": 1, "justification": "Estudio técnico aborda tamaño, localización, ingeniería." },
    { "unit": "II", "text": "La delegación de actividades en un proyecto busca:", "options": ["Concentrar todo el poder", "Empoderar al equipo y agilizar decisiones", "Reducir costos solo", "Eliminar la planeación"], "correct": 1, "justification": "Delegación efectiva libera al director y empodera al equipo." },
    { "unit": "II", "text": "¿Cuál es la diferencia clave entre un programa y un proyecto?", "options": ["Un programa es más pequeño", "Un programa agrupa proyectos relacionados", "No hay diferencia", "El programa no tiene objetivos"], "correct": 1, "justification": "Programa es conjunto de proyectos coordinados para beneficio mayor." },
    { "unit": "II", "text": "¿Qué metodología de evaluación incluye el análisis del entorno y los estudios técnico, de mercado y financiero?", "options": ["Solo análisis de sensibilidad", "Metodología tradicional de evaluación de proyectos", "Control de calidad", "Gestión de stakeholders"], "correct": 1, "justification": "Metodología típica: entorno, estudios, rentabilidad, riesgos." },
    { "unit": "II", "text": "En la organización del trabajo en equipo, ¿qué define canales de comunicación y resolución de conflictos?", "options": ["El acta de constitución", "La dinámica y reglas del equipo", "La WBS", "El presupuesto"], "correct": 1, "justification": "Organización del trabajo en equipo define reglas, comunicación, conflictos." },
    { "unit": "II", "text": "La definición de cada uno de los elementos del proyecto y su justificación se documenta en:", "options": ["Business Case (justificación del negocio)", "Plan de calidad", "Matriz de comunicación", "Registro de interesados"], "correct": 0, "justification": "Business Case justifica el proyecto con beneficios, costos y razón de ser." },
    { "unit": "II", "text": "¿Qué tipo de estructura organizacional el equipo depende completamente del director del proyecto?", "options": ["Funcional", "Matricial débil", "Dedicada o por proyectos", "Redes"], "correct": 2, "justification": "Estructura dedicada (proyectizada) reporta al director del proyecto." },
    { "unit": "II", "text": "El estudio financiero dentro del proyecto incluye:", "options": ["Tamaño de planta", "Flujos de efectivo proyectados", "Segmentación de mercado", "Marco legal"], "correct": 1, "justification": "Estudio financiero elabora flujos de efectivo, presupuestos." },
    { "unit": "II", "text": "La dirección del proyecto responde a la pregunta:", "options": ["¿Qué hacer?", "¿Quién hace qué?", "¿Cómo se ejecuta el plan?", "¿Cuándo se evalúa?"], "correct": 2, "justification": "Dirección se enfoca en cómo ejecutar el plan, liderazgo y coordinación." },

    # Unidad III
    { "unit": "III", "text": "¿Cuál es el objetivo principal del estudio de mercado?", "options": ["Diseñar el producto", "Verificar viabilidad comercial y existencia de mercado potencial", "Determinar la localización", "Calcular el VAN"], "correct": 1, "justification": "Objetivo: demostrar viabilidad comercial y mercado dispuesto a comprar." },
    { "unit": "III", "text": "El método cualitativo en investigación de mercados utiliza herramientas como:", "options": ["Encuestas estructuradas", "Grupos focales y entrevistas a profundidad", "Análisis de regresión", "Muestreo probabilístico"], "correct": 1, "justification": "Método cualitativo: focus groups, entrevistas en profundidad." },
    { "unit": "III", "text": "¿Qué tipo de demanda representa la oportunidad real de negocio?", "options": ["Demanda satisfecha", "Demanda insatisfecha", "Demanda elástica", "Demanda inducida"], "correct": 1, "justification": "Demanda insatisfecha = diferencia entre demanda proyectada y oferta, oportunidad." },
    { "unit": "III", "text": "Criterio de segmentación que agrupa por estilo de vida y personalidad:", "options": ["Geográfico", "Demográfico", "Psicográfico", "Conductual"], "correct": 2, "justification": "Segmentación psicográfica: estilo de vida, valores, personalidad." },
    { "unit": "III", "text": "En el análisis de la oferta, se debe analizar:", "options": ["Solo precios", "Número de competidores, market share, precios", "Únicamente calidad", "Promociones"], "correct": 1, "justification": "Oferta incluye competidores, participación, estrategias y precios." },
    { "unit": "III", "text": "¿Qué canal de comercialización es Productor → Minorista → Consumidor?", "options": ["Canal directo", "Canal corto", "Canal largo", "Canal inverso"], "correct": 1, "justification": "Canal corto: productor - minorista - consumidor (sin mayorista)." },
    { "unit": "III", "text": "Método de fijación de precios basado en lo que el consumidor está dispuesto a pagar:", "options": ["Basado en costos", "Basado en competencia", "Basado en el valor", "Precio de penetración"], "correct": 2, "justification": "Precio basado en el valor → percepción del consumidor." },
    { "unit": "III", "text": "¿Qué herramienta cuantitativa es la más común para recolectar datos primarios?", "options": ["Observación", "Encuesta con cuestionario estructurado", "Focus group", "Entrevista no dirigida"], "correct": 1, "justification": "Encuesta es herramienta principal del método cuantitativo." },
    { "unit": "III", "text": "El pronóstico de oferta y demanda se proyecta normalmente a:", "options": ["1 año", "3 a 5 años", "10 años mínimo", "1 mes"], "correct": 1, "justification": "Pronóstico típico de 3 a 5 años para evaluar ingresos futuros." },
    { "unit": "III", "text": "En el estudio de mercado, el análisis de precios 'basado en la competencia' consiste en:", "options": ["Costo total + margen", "Precio promedio del mercado", "Precio emocional", "Subasta inversa"], "correct": 1, "justification": "Basado en competencia: tomar precio promedio del mercado." },
    { "unit": "III", "text": "¿Cuál es una etapa del estudio de mercado?", "options": ["Definición de la tecnología", "Recolección de datos (trabajo de campo)", "Estudio de ingeniería", "Evaluación de proveedores"], "correct": 1, "justification": "Etapas: definición problema, diseño, recolección datos, análisis, informe." },
    { "unit": "III", "text": "¿Qué se entiende por 'demanda proyectada'?", "options": ["Demanda histórica", "Estimación futura del consumo", "Oferta de la competencia", "Capacidad instalada"], "correct": 1, "justification": "Demanda proyectada = estimación a futuro del comportamiento del consumo." },
    { "unit": "III", "text": "Según el material, ¿qué significa mercado de consumo?", "options": ["Empresas que compran maquinaria", "Personas que compran para uso personal", "Gobierno adquiriendo servicios", "Venta internacional"], "correct": 1, "justification": "Mercado de consumo: personas con necesidades y capacidad de pago." },
    { "unit": "III", "text": "¿Qué tipo de preguntas se recomiendan en una encuesta para facilitar tabulación?", "options": ["Preguntas abiertas", "Preguntas cerradas con escalas u opciones múltiples", "Preguntas ambiguas", "Preguntas proyectivas"], "correct": 1, "justification": "Preguntas cerradas fáciles de tabular y analizar estadísticamente." },
    { "unit": "III", "text": "Las conclusiones del estudio de mercado deben incluir:", "options": ["Solo el presupuesto", "Demanda insatisfecha, estrategia 4Ps y pronóstico de ventas", "Planos de la fábrica", "Estructura legal"], "correct": 1, "justification": "Conclusiones claves: demanda insatisfecha, comercialización y pronóstico." },
    { "unit": "III", "text": "El análisis de la competencia permite identificar:", "options": ["Únicamente precios", "Oportunidades y amenazas", "Solo cuota de mercado", "Las compras"], "correct": 1, "justification": "Estudio de oferta/competencia: conocer rivales y detectar oportunidades/amenazas." },
    { "unit": "III", "text": "¿Cuál es la diferencia entre demanda satisfecha e insatisfecha?", "options": ["Satisfecha es futura", "Satisfecha ya cubierta por oferta actual; insatisfecha es oportunidad no cubierta", "No hay diferencia", "Insatisfecha es más cara"], "correct": 1, "justification": "Demanda satisfecha cubierta por competidores; insatisfecha es mercado potencial." }
]

# 4. SNIPPET 4: 34 Preguntas (17 Mercado + 17 Técnico)
snippet4_raw = [
    # Parte II: Estudio Técnico (17)
    { "unit": "IV", "text": "¿Qué nivel de localización analiza región, estado o zona geográfica considerando cercanía a materias primas e infraestructura?", "options": ["Microlocalización", "Macrolocalización", "Localización de detalle", "Georreferenciación"], "correct": 1, "justification": "Macrolocalización determina la región o estado, analizando macrofactores como disponibilidad de insumos y mercado." },
    { "unit": "IV", "text": "Método de evaluación de localización que asigna ponderaciones a factores críticos y objetivos:", "options": ["Método de Brown y Gibson", "Diagrama de Pareto", "Método de los momentos", "Análisis FODA"], "correct": 0, "justification": "El método de Brown y Gibson combina factores críticos y objetivos/subjetivos para seleccionar ubicación." },
    { "unit": "IV", "text": "¿Qué es el tamaño óptimo de planta?", "options": ["La capacidad máxima técnica posible", "La capacidad que maximiza la rentabilidad y minimiza costos unitarios", "La misma capacidad que el competidor líder", "El tamaño mínimo por ley"], "correct": 1, "justification": "El tamaño óptimo es aquel que maximiza la rentabilidad, con costos unitarios mínimos y economías de escala adecuadas." },
    { "unit": "IV", "text": "Factor que NO determina el tamaño de planta según la unidad:", "options": ["Demanda del mercado", "Disponibilidad de insumos", "Color del logotipo corporativo", "Tecnología y financiamiento"], "correct": 2, "justification": "El color del logotipo no influye en la capacidad productiva; factores determinantes son demanda, insumos, tecnología y financiamiento." },
    { "unit": "IV", "text": "Principio de distribución de planta según R. Muther que indica que el material debe recorrer la menor distancia posible:", "options": ["Integración de conjunto", "Mínima distancia recorrida", "Espacio cúbico", "Flexibilidad"], "correct": 1, "justification": "El principio de mínima distancia recorrida busca eficiencia y reducción de tiempos de desplazamiento." },
    { "unit": "IV", "text": "Tipo de distribución de planta ideal para producción continua o en masa:", "options": ["Por proceso (funcional)", "Por producto (en línea)", "Por posición fija", "Por celdas de manufactura"], "correct": 1, "justification": "Distribución por producto o en línea es adecuada para producción continua y grandes volúmenes." },
    { "unit": "IV", "text": "¿Qué representa un diagrama de bloques en ingeniería del proyecto?", "options": ["Dibujo arquitectónico detallado", "Representación gráfica simple con bloques de operaciones unitarias", "Listado de tuberías e instrumentación", "Cronograma de actividades"], "correct": 1, "justification": "El diagrama de bloques muestra operaciones unitarias y flujo de materiales de forma sencilla y global." },
    { "unit": "IV", "text": "En el balance de materiales se aplica el principio de:", "options": ["Conservación de la masa (lo que entra = lo que sale + acumulación)", "Ley de la oferta y demanda", "Maximización de la entropía", "Equilibrio energético exclusivo"], "correct": 0, "justification": "Balance de materiales se basa en la conservación de la masa: entradas = salidas + acumulación." },
    { "unit": "IV", "text": "¿Cuál es el objetivo de la ingeniería de detalle?", "options": ["Definir únicamente el diagrama de bloques", "Desarrollar planos, especificaciones, diagramas de tuberías y manuales para construcción", "Realizar el estudio de mercado", "Estimar solo los costos fijos"], "correct": 1, "justification": "Ingeniería de detalle genera toda la documentación detallada: planos, especificaciones técnicas y manuales." },
    { "unit": "IV", "text": "Son ejemplos de servicios de planta:", "options": ["Mano de obra indirecta", "Suministro de agua, energía eléctrica, vapor, tratamiento de residuos", "Publicidad y marketing", "Capacitación en ventas"], "correct": 1, "justification": "Servicios auxiliares como agua, energía, vapor, aire comprimido y tratamiento de residuos son vitales para operación." },
    { "unit": "IV", "text": "¿Qué regulan las normas ecológicas en un proyecto?", "options": ["Los procedimientos contables", "Límites máximos permisibles de emisiones y manejo de residuos", "La distribución de planta", "El precio de venta al público"], "correct": 1, "justification": "Normas ecológicas regulan emisiones, residuos peligrosos, impacto ambiental y ruido." },
    { "unit": "IV", "text": "¿Qué aspecto legal se refiere al tipo de sociedad como S.A. o S. de R.L. ?", "options": ["Normas de seguridad", "Constitución legal y tipo de sociedad", "Normas ISO 9001", "Estudio de tiempos"], "correct": 1, "justification": "Dentro de aspectos legales se define el tipo de sociedad mercantil: S.A., S. de R.L., etc." },
    { "unit": "IV", "text": "Dentro de los costos de operación, ¿cuál es un costo variable típico?", "options": ["Depreciación de maquinaria", "Sueldos del personal administrativo", "Materias primas e insumos", "Seguro de la planta"], "correct": 2, "justification": "Materias primas e insumos varían directamente con el nivel de producción, son costos variables." },
    { "unit": "IV", "text": "La fórmula Costos fijos + Costos variables corresponde a:", "options": ["Costo de oportunidad", "Costos totales de operación", "Inversión fija", "Punto de equilibrio"], "correct": 1, "justification": "El costo total de operación es la suma de costos fijos más costos variables." },
    { "unit": "IV", "text": "¿Qué proporciona el estudio técnico al estudio financiero?", "options": ["Demanda insatisfecha", "Inversiones requeridas, costos de operación y vida útil de equipos", "Estrategia de promoción", "Segmentación psicográfica"], "correct": 1, "justification": "El estudio técnico entrega al financiero las inversiones (fija, diferida, capital de trabajo), costos de operación y calendario." },
    { "unit": "IV", "text": "¿Cuál es la conclusión principal del estudio técnico?", "options": ["Verificar la viabilidad comercial", "Evaluar si es técnicamente factible, determinar la mejor localización, tamaño y requerimientos de inversión", "Calcular el retorno sobre inversión", "Diseñar la campaña publicitaria"], "correct": 1, "justification": "El estudio técnico concluye sobre viabilidad técnica, localización, tamaño óptimo e inversiones necesarias." },
    { "unit": "IV", "text": "Método de evaluación de localización que considera factores críticos y ponderación objetiva/subjetiva (mencionado en la unidad):", "options": ["Método de factores ponderados", "Método Brown y Gibson", "Método Delphi", "Análisis de regresión lineal"], "correct": 1, "justification": "En la unidad se menciona el método de Brown y Gibson (factores críticos y objetivos)." }
]

def clean_opt(opt):
    # Remueve 'A) ', 'B) ', etc si existe
    return re.sub(r'^[A-E]\)\s*', '', opt).strip()

def normalizar(txt):
    return re.sub(r'\W+', '', txt.lower())

all_processed = []
vistos = set()

# Función para agregar items de snippet2, snippet3, snippet4
def agregar_snippet(lista, mod_default, mod_nombre_default):
    for item in lista:
        enunciado = item.get("enunciado") or item.get("text") or item.get("texto")
        opciones = [clean_opt(o) for o in (item.get("opciones") or item.get("options"))]
        correcta = item.get("correcta") if "correcta" in item else item.get("correct")
        resumen = item.get("resumen") or opciones[correcta]
        fundamentacion = item.get("fundamentacion") or item.get("justification") or item.get("justificacion")
        
        # Determinación del módulo
        mod = item.get("modulo", mod_default)
        mod_nombre = item.get("moduloNombre", mod_nombre_default)
        if "unit" in item:
            u = item["unit"]
            if u == "I":
                mod = 1
                mod_nombre = "Módulo 1: Conceptos Básicos y Formulación"
            elif u == "II":
                mod = 2
                mod_nombre = "Módulo 2: Metodología, Organización y Ciclo de Vida"
            elif u == "III":
                mod = 3
                mod_nombre = "Módulo 3: Estudio de Mercado y Análisis Competitivo"
            elif u == "IV":
                mod = 4
                mod_nombre = "Módulo 4: Estudio Técnico e Ingeniería de Planta"
            elif u == "V":
                mod = 5
                mod_nombre = "Módulo 5: Estudio Económico y Evaluación Financiera"
            elif u == "VI":
                mod = 6
                mod_nombre = "Módulo 6: Comunidad, Impacto Social, Ambiental y Seguridad"

        norm = normalizar(enunciado)
        if norm not in vistos:
            vistos.add(norm)
            all_processed.append({
                "modulo": mod,
                "moduloNombre": mod_nombre,
                "enunciado": enunciado,
                "opciones": opciones,
                "correcta": correcta,
                "resumen": resumen,
                "fundamentacion": fundamentacion
            })

# 1. Agregar snippet 1
for q in snippet1:
    norm = normalizar(q["enunciado"])
    vistos.add(norm)
    all_processed.append({
        "modulo": q["modulo"],
        "moduloNombre": q["moduloNombre"],
        "enunciado": q["enunciado"],
        "opciones": [clean_opt(o) for o in q["opciones"]],
        "correcta": q["correcta"],
        "resumen": q["resumen"],
        "fundamentacion": q["fundamentacion"]
    })

# 2. Agregar snippet 2
agregar_snippet(snippet2_raw, 5, "Módulo 5: Estudio Económico y Evaluación Financiera")

# 3. Agregar snippet 3
agregar_snippet(snippet3_raw, 1, "Módulo 1: Conceptos Básicos y Formulación")

# 4. Agregar snippet 4
agregar_snippet(snippet4_raw, 4, "Módulo 4: Estudio Técnico e Ingeniería de Planta")

# Asignar IDs
for idx, q in enumerate(all_processed):
    q["id"] = idx + 1

print(f"Total absoluto de preguntas recopiladas sin duplicados: {len(all_processed)}")

# Guardar en json
with open("all_master_questions.json", "w", encoding="utf-8") as f:
    json.dump(all_processed, f, ensure_ascii=False, indent=2)

print("Guardado en all_master_questions.json")
