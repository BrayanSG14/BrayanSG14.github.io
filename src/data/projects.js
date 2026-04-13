export const projects = [
  {
    id: 'learning-development-platform',
    type: 'web',
    typeLabel: { es: 'Web Empresarial', en: 'Enterprise Web' },
    featured: true,
    confidential: true,
    hasImages: true,
    color: '#268700',

    name: 'Learning & Development Platform (LDP)',

    summary: {
      es: 'Plataforma web de seguimiento de entrenamiento para toda una planta de manufactura Ford Irapuato. Múltiples roles, dashboard con métricas en tiempo real e integración con herramientas empresariales de nube.',
      en: 'Web platform for training tracking across an entire Ford Irapuato manufacturing plant. Multiple roles, real-time metrics dashboard and cloud enterprise tools integration.',
    },

    context: {
      es: 'Durante mis prácticas profesionales en Ford Irapuato, Me asignaron un proyecto para monitorear la capacitación del personal de la planta, ya que anteriormente este seguimiento se realizaba en Excel, y en muchas ocasiones estos archivos no se actualizaban y el equipo de L&D no podía revisar las estadísticas de avance de las personas, areas y planta general.',
      en: 'During my internship at Ford Irapuato, I was assigned a project to monitor employee training across the plant. Previously, this tracking was done manually in Excel, and often these files were not updated, preventing the L&D team from reviewing progress statistics for individuals, departments, and the entire plant.',
    },

    problem: {
      es: 'Una planta de manufactura con cientos de empleados necesitaba saber en tiempo real el porcentaje de avance en entrenamiento por persona, área y planta completa. Los datos estaban dispersos y no existía una herramienta centralizada.',
      en: 'A manufacturing plant with hundreds of employees needed to know in real time the training completion percentage per person, area and the whole plant. Data was scattered and no centralized tool existed.',
    },

    process: {
      es: [
        'Relevé los requerimientos directamente con people leaders, área managers y el equipo de L&D para entender qué información necesitaba cada rol.',
        'Diseñé la arquitectura de datos en BigQuery considerando los volúmenes reales de la planta y la necesidad de consultas rápidas sobre grandes conjuntos de datos.',
        'Construí el backend en Django con endpoints diferenciados por rol: usuario, people leader, área manager y administrador.',
        'Desarrollé el dashboard con gráficas de avance por área, personas con mejor rendimiento y porcentaje global de la planta.',
        'Desplegué la aplicación usando Cloud Run y Podman dentro de la infraestructura existente de Ford.',
      ],
      en: [
        'Gathered requirements directly from people leaders, area managers and L&D team to understand what information each role needed.',
        'Designed the data architecture in BigQuery considering real plant volumes and the need for fast queries on large datasets.',
        'Built the backend in Django with role-differentiated endpoints: user, people leader, area manager and administrator.',
        'Developed the dashboard with progress charts by area, top performers and plant-wide completion percentage.',
        'Deployed the application using Cloud Run and Podman within Ford\'s existing infrastructure.',
      ],
    },

    learnings: {
      es: 'Este proyecto fue mi primer contacto real con arquitectura empresarial. Aprendí que en un entorno corporativo no basta con que el código funcione — debe escalar, estar documentado y encajar dentro de procesos y herramientas ya existentes. BigQuery me enseñó a pensar diferente sobre el modelado de datos a escala.',
      en: 'This project was my first real contact with enterprise architecture. I learned that in a corporate environment it\'s not enough for the code to work — it must scale, be documented and fit within existing processes and tools. BigQuery taught me to think differently about data modeling at scale.',
    },

    stack: ['JavaScript', 'HTML', 'CSS', 'Django', 'BigQuery', 'Cloud Run', 'Podman'],

    highlights: {
      es: ['Múltiples roles de acceso', 'Dashboard con métricas en tiempo real', 'Integración con BigQuery', 'Desplegado en infraestructura Ford'],
      en: ['Multiple access roles', 'Real-time metrics dashboard', 'BigQuery integration', 'Deployed on Ford infrastructure'],
    },

    images: [],
    repo: null,
    demo: null,
    company: 'Ford Motor Company',
    period: { es: 'Ford Champ · 2025-2026', en: 'Ford Champ · 2025-2026' },
  },

  {
    id: 'bcc-business-control-center',
    type: 'web',
    typeLabel: { es: 'Web Empresarial', en: 'Enterprise Web' },
    featured: true,
    confidential: true,
    hasImages: false,
    color: '#960000',

    name: 'Business Control Center',

    summary: {
      es: 'Migración de un dashboard de Qlik Sence a plataforma web moderna. Dashboard con indicadores por área, gráficas de tendencias mensuales y métricas de producción para la planta Ford Irapuato.',
      en: 'Migration of a Qlik Sense dashboard to a modern web platform. Dashboard with area indicators, monthly trend charts and production metrics for the Ford Irapuato plant.',
    },

    context: {
      es: 'El Business Control Center existía como un dashboard creado en Qlik Sense que los equipos de cada área usaban para revisar sus indicadores semanales. La herramienta era lenta, difícil de mantener y no permitía visualizaciones modernas.',
      en: 'The Business Control Center existed as a dashboard created in Qlik Sense that teams used to review their weekly indicators. The tool was slow, hard to maintain and did not support modern visualizations.',
    },

    problem: {
      es: 'Los datos de producción, fallos y reclamos estaban almacenados en SharePoint en formatos no estructurados. El reto era migrarlos a BigQuery, modelarlos correctamente y construir encima una interfaz que cada área pudiera personalizar con sus propios métricas.',
      en: 'Production, failure and claim data was stored in SharePoint in unstructured formats. The challenge was migrating it to BigQuery, modeling it correctly and building on top an interface each area could customize with their own metrics.',
    },

    process: {
      es: [
        'Analicé la estructura de datos existente en SharePoint e identificé inconsistencias y formatos no estandarizados.',
        'Diseñé el esquema de tablas en BigQuery para normalizar los datos y permitir consultas eficientes por área y período.',
        'Migré los datos históricos y construí pipelines para mantener la información actualizada semanalmente.',
        'Desarrollé la interfaz web con Django, replicando los indicadores clave de cada área con gráficas interactivas y tendencias.',
        'Personalicé las vistas para que cada área viera únicamente sus métricas relevantes.',
      ],
      en: [
        'Analyzed existing data structure in SharePoint and identified inconsistencies and non-standardized formats.',
        'Designed the table schema in BigQuery to normalize data and enable efficient queries by area and period.',
        'Migrated historical data and built pipelines to keep information updated weekly.',
        'Developed the web interface with Django, replicating key indicators for each area with interactive charts and trends.',
        'Customized views so each area only saw their relevant metrics.',
      ],
    },

    learnings: {
      es: 'La migración de datos fue la parte más retadora — no solo técnicamente sino también conceptualmente. Aprendí que los datos en el mundo real rara vez están limpios o estructurados, y que gran parte del trabajo de un desarrollador es entender el negocio antes de escribir código.',
      en: 'Data migration was the most challenging part — not just technically but also conceptually. I learned that real-world data is rarely clean or structured, and that a big part of a developer\'s job is understanding the business before writing code.',
    },

    stack: ['TypeScript', 'Tailwind CSS', 'React', 'Django', 'BigQuery', 'Cloud Run', 'Podman'],

    highlights: {
      es: ['Migración de sistema legacy', 'Dashboards por área', 'Gráficas de tendencia mensual', 'Datos migrados desde SharePoint a BigQuery'],
      en: ['Legacy system migration', 'Per-area dashboards', 'Monthly trend charts', 'Data migrated from SharePoint to BigQuery'],
    },

    images: [],
    repo: null,
    demo: null,
    company: 'Ford Motor Company',
    period: { es: 'Ford Champ · 2025-2026', en: 'Ford Champ · 2025-2026' },
  },

  {
    id: 'sg-signare',
    type: 'web',
    typeLabel: { es: 'Web · E-commerce', en: 'Web · E-commerce' },
    featured: true,
    confidential: false,
    hasImages: true,
    color: '#874502',

    name: 'SG Signare',

    summary: {
      es: 'Plataforma web para personalizar y ordenar playeras con modelo 3D interactivo. El usuario agrega imágenes y texto sobre el modelo, genera una captura y hace su pedido directo por WhatsApp.',
      en: 'Web platform to customize and order t-shirts with an interactive 3D model. The user adds images and text over the model, generates a screenshot and places their order directly via WhatsApp.',
    },

    context: {
      es: 'Un negocio de playeras personalizadas necesitaba una forma de mostrar a sus clientes cómo quedaría el diseño antes de producirlo, eliminando los malentendidos en los pedidos y mejorando la experiencia de compra.',
      en: 'A custom t-shirt business needed a way to show customers what the design would look like before production, eliminating order misunderstandings and improving the purchase experience.',
    },

    problem: {
      es: 'El flujo de pedidos era completamente manual — el cliente describía lo que quería por mensaje y el negocio tenía que interpretar esas instrucciones. Esto generaba errores frecuentes y retrabajos. La solución necesitaba ser visual, intuitiva y no requerir que el cliente instalara nada.',
      en: 'The ordering flow was completely manual — the customer described what they wanted by message and the business had to interpret those instructions. This caused frequent errors and rework. The solution needed to be visual, intuitive and not require the customer to install anything.',
    },

    process: {
      es: [
        'Investigué librerías de 3D para web y seleccioné Three.js por su flexibilidad para manipular modelos y agregar objetos sobre ellos.',
        'Integré un modelo 3D creado en blender de playera y construí el sistema para proyectar imágenes y texto sobre la superficie del modelo de forma realista.',
        'Desarrollé la interfaz de personalización con controles para posicionar, escalar y rotar los elementos sobre la prenda.',
        'Implementé la captura de pantalla del modelo personalizado y el flujo de pedido por WhatsApp con los datos del cliente y el diseño.',
        'Utilicé TypeScript desde el inicio para manejar la complejidad del estado del editor 3D con mayor seguridad.',
      ],
      en: [
        'Researched 3D libraries for web and selected Three.js for its flexibility in manipulating models and adding objects on top of them.',
        'Integrated a 3D t-shirt model and built the system to project images and text onto the model surface realistically.',
        'Developed the customization interface with controls to position, scale and rotate elements on the garment.',
        'Implemented screenshot capture of the customized model and the WhatsApp ordering flow with customer data and design.',
        'Used TypeScript from the start to handle the complexity of the 3D editor state with greater safety.',
      ],
    },

    learnings: {
      es: 'Integrar el modelo 3D de la playera en una aplicación web fue un salto enorme. Aprendí que Three.js tiene una curva de aprendizaje real, pero abre posibilidades que pocas personas en el desarrollo web front-end exploran. También fue el primer proyecto donde usé TypeScript en producción — y no volvería atrás.',
      en: 'Integrating 3D into a web application was a huge leap. I learned that Three.js has a real learning curve, but opens up possibilities that few front-end web developers explore. It was also the first project where I used TypeScript in production — and I wouldn\'t go back.',
    },

    stack: ['React', 'TypeScript', 'Three.js', 'WhatsApp API'],

    highlights: {
      es: ['Modelo 3D interactivo en navegador', 'Editor de texto e imagen sobre 3D', 'Integración con WhatsApp'],
      en: ['Interactive 3D model in browser', 'Text and image editor on 3D', 'WhatsApp integration'],
    },

    images: ["/SG-SIGNARE.jpg", "/SG-SIGNARE2.jpg"],
    repo: null,
    demo: null,
    company: null,
    period: { es: 'Proyecto propio · 2024', en: 'Personal project · 2024' },
  },

  {
    id: 'recipe-app',
    type: 'mobile',
    typeLabel: { es: 'Móvil', en: 'Mobile' },
    featured: true,
    confidential: false,
    hasImages: true,
    color: '#00A878',

    name: 'Recipe App',

    summary: {
      es: 'Aplicación móvil de recetas de cocina con categorías por tiempo de comida, favoritos, CRUD completo e imágenes. Primer proyecto con integración real de API REST y base de datos.',
      en: 'Mobile cooking recipes app with meal-time categories, favorites, full CRUD and images. First project with real REST API and database integration.',
    },

    context: {
      es: 'Proyecto universitario para aplicar los conceptos de desarrollo móvil y conexión con servicios backend. El objetivo era construir una app funcional completa que fuera más allá de los ejemplos de clase.',
      en: 'University project to apply mobile development concepts and backend service connection. The goal was to build a complete functional app that went beyond classroom examples.',
    },

    problem: {
      es: 'La mayoría de apps de recetas que existen son de solo lectura. Quise construir una donde el usuario fuera dueño de su contenido — podía crear sus propias recetas, editarlas, eliminarlas y guardar sus favoritas, todo sincronizado con una base de datos real.',
      en: 'Most recipe apps that exist are read-only. I wanted to build one where the user owned their content — they could create their own recipes, edit them, delete them and save favorites, all synced with a real database.',
    },

    process: {
      es: [
        'Diseñé la estructura de la base de datos en MySQL con tablas para recetas, categorías, ingredientes e instrucciones.',
        'Construí la API REST en Node.js con endpoints para cada operación CRUD y autenticación básica.',
        'Desarrollé la aplicación en React Native con Expo, implementando navegación por pestañas y stack navigation.',
        'Integré la carga y visualización de imágenes para cada receta desde el dispositivo.',
        'Implementé el sistema de favoritos con persistencia local y sincronización con el servidor.',
      ],
      en: [
        'Designed the database structure in MySQL with tables for recipes, categories, ingredients and instructions.',
        'Built the REST API in Node.js with endpoints for each CRUD operation and basic authentication.',
        'Developed the app in React Native with Expo, implementing tab navigation and stack navigation.',
        'Integrated image loading and display for each recipe from the device.',
        'Implemented the favorites system with local persistence and server synchronization.',
      ],
    },

    learnings: {
      es: 'Fue el proyecto donde más aprendí en menos tiempo. Conectar un frontend móvil con una API y una base de datos real por primera vez me hizo entender cómo funcionan realmente las aplicaciones que usamos todos los días. Los errores de CORS, los tiempos de respuesta y el manejo de estados asíncronos fueron lecciones que no olvidaré.',
      en: 'It was the project where I learned the most in the least time. Connecting a mobile frontend with an API and a real database for the first time made me understand how the apps we use every day actually work. CORS errors, response times and async state management were lessons I won\'t forget.',
    },

    stack: ['React Native', 'JavaScript', 'Node.js', 'MySQL', 'Expo'],

    highlights: {
      es: ['CRUD completo de recetas', 'Categorías por tiempo de comida', 'Sistema de favoritos', 'Imágenes desde el dispositivo'],
      en: ['Full recipe CRUD', 'Meal-time categories', 'Favorites system', 'Images from device'],
    },

    images: ['/Recipe-app.jpg', '/Recipe-app2.jpg'],
    repo: null,
    demo: null,
    company: null,
    period: { es: 'Proyecto universitario · 2024', en: 'University project · 2024' },
  },
  {
    id: 'smart-helmet',
    type: 'hardware',
    typeLabel: { es: 'Hardware / IoT', en: 'Hardware / IoT' },
    featured: false,
    confidential: false,
    hasImages: false,
    color: '#D97706',

    name: 'Smart Helmet — Sistema de alerta de proximidad ',

    summary: {
      es: 'Modificación de un casco de motocicleta con sistema embebido de alerta por proximidad: sensores ultrasónicos laterales, LIDAR trasero con detección de velocidad, cámara de eventos y servidor web para revisión de fotos. Alimentado con panel solar y baterías de litio.',
      en: 'Motorcycle helmet modified with an embedded proximity alert system: lateral ultrasonic sensors, rear LIDAR with speed detection, event camera and web server for photo review. Powered by a solar panel and lithium batteries.',
    },

    context: {
      es: 'Proyecto personal motivado por la seguridad vial para motociclistas. La idea fue construir un sistema de asistencia al conductor integrado directamente en el casco, sin depender de aplicaciones externas ni hardware comercial costoso.',
      en: 'Personal project motivated by road safety for motorcyclists. The idea was to build a driver assistance system integrated directly into the helmet, without depending on external apps or expensive commercial hardware.',
    },

    problem: {
      es: 'Los motociclistas no tienen visibilidad de lo que ocurre en sus puntos ciegos laterales ni de los vehículos que se aproximan rápidamente por detrás. La solución debía ser autónoma, compacta, de bajo consumo y capaz de distinguir situaciones de peligro real de falsos positivos como semáforos o tráfico lento.',
      en: 'Motorcyclists have no visibility of what happens in their lateral blind spots or of vehicles rapidly approaching from behind. The solution had to be autonomous, compact, low-power and capable of distinguishing real danger from false positives like traffic lights or slow traffic.',
    },

    process: {
      es: [
        'Seleccioné el ESP32-S3 como cerebro del sistema por su capacidad de procesamiento, soporte de cámara y modos de bajo consumo.',
        'Integré dos sensores ultrasónicos laterales con lógica de tres zonas (verde/amarillo/rojo) representadas con LEDs RGB para cada lado.',
        'Implementé el sensor LIDAR TF-Luna trasero con algoritmos de cálculo de velocidad relativa comparando mediciones sucesivas, ajustando la intensidad del altavoz según distancia y velocidad del vehículo trasero.',
        'Añadí lógica anti-falsos-positivos para detectar situaciones estáticas (semáforo, tráfico detenido) y suprimir alertas innecesarias.',
        'Integré una cámara conectada al ESP32-S3 que toma fotos automáticamente al detectar peligro y las guarda en tarjeta microSD.',
        'Desarrollé dos modos de operación: modo conducción (sensores activos, servidor web apagado) y modo revisión (servidor web activo, sensores apagados) conmutables con un botón físico.',
        'Diseñé el sistema de energía con panel solar, baterías de litio y carga alternativa por cable para días nublados o nocturnos.',
      ],
      en: [
        'Selected the ESP32-S3 as the system brain for its processing power, camera support and low-power modes.',
        'Integrated two lateral ultrasonic sensors with three-zone logic (green/yellow/red) represented with RGB LEDs for each side.',
        'Implemented the rear TF-Luna LIDAR sensor with relative speed calculation algorithms by comparing successive measurements, adjusting speaker intensity based on rear vehicle distance and speed.',
        'Added anti-false-positive logic to detect static situations (traffic light, stopped traffic) and suppress unnecessary alerts.',
        'Integrated a camera connected to the ESP32-S3 that automatically takes photos when danger is detected and saves them to a microSD card.',
        'Developed two operating modes: driving mode (sensors active, web server off) and review mode (web server active, sensors off) switchable with a physical button.',
        'Designed the power system with solar panel, lithium batteries and alternative cable charging for cloudy or nighttime conditions.',
      ],
    },

    learnings: {
      es: 'Este proyecto me hizo entender que el desarrollo embebido tiene sus propias reglas: los recursos son limitados, el tiempo real importa y los falsos positivos pueden ser tan peligrosos como los falsos negativos. Aprender a trabajar con ESP32, sensores físicos y un servidor web dentro del mismo microcontrolador fue un salto enorme respecto al desarrollo web tradicional.',
      en: 'This project made me understand that embedded development has its own rules: resources are limited, real-time matters and false positives can be as dangerous as false negatives. Learning to work with ESP32, physical sensors and a web server within the same microcontroller was a huge leap from traditional web development.',
    },

    stack: ['ESP32-S3', 'C/C++', 'LIDAR TF-Luna', 'Sensores ultrasónicos', 'Servidor web embebido', 'Panel solar'],

    highlights: {
      es: [
        'Detección de velocidad relativa con LIDAR',
        'Lógica anti-falsos-positivos',
        'Cámara de eventos con almacenamiento en microSD',
        'Servidor web embebido para revisión de fotos',
        'Sistema de energía solar + batería de litio',
      ],
      en: [
        'Relative speed detection with LIDAR',
        'Anti-false-positive logic',
        'Event camera with microSD storage',
        'Embedded web server for photo review',
        'Solar + lithium battery power system',
      ],
    },

    images: [],
    repo: null,
    demo: null,
    company: null,
    period: { es: 'Proyecto personal · 2025', en: 'Personal project · 2025' },
  },
]