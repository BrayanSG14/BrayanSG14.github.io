export const posts = [
  {
    id: 'lo-que-ford-me-enseno',
    date: '2025-2026',
    readTime: { es: '6 min de lectura', en: '6 min read' },
    tag: { es: 'Reflexión', en: 'Reflection' },
    tagColor: '#027387',
    title: {
      es: 'Lo que Ford me enseñó que la universidad no pudo',
      en: 'What Ford taught me that university couldn\'t',
    },
    summary: {
      es: 'Llegué a mis prácticas pensando que sabía programar. Salí entendiendo que programar es apenas el 30% del trabajo.',
      en: 'I arrived at my internship thinking I knew how to code. I left understanding that coding is barely 30% of the job.',
    },
    content: {
      es: [
        {
          type: 'paragraph',
          text: 'Cuando entré a Ford como practicante tenía una confianza razonable. Había hecho proyectos universitarios, conocía las bases de datos, programación web y móvil, frameworks, tecnologías. Pensaba que el salto a una empresa sería cuestión de adaptarme al ritmo.',
        },
        {
          type: 'paragraph',
          text: 'Estaba equivocado. No porque no supiera programar — sino porque programar en un entorno empresarial real es un problema completamente diferente al que te enseñan en clase.',
        },
        {
          type: 'heading',
          text: 'El primer choque: los datos reales no están limpios',
        },
        {
          type: 'paragraph',
          text: 'En la universidad los proyectos empiezan con una base de datos vacía que tú mismo diseñas. En Ford, el primer proyecto que me asignaron implicaba migrar datos históricos almacenados en distintos gestores de datos y en formatos inconsistentes, con columnas mal nombradas, con registros duplicados y sin documentación.',
        },
        {
          type: 'paragraph',
          text: 'Antes de escribir una sola línea de código del producto final, pasé días entendiendo esos datos. Ese trabajo invisible — que nadie ve — es donde realmente empieza cualquier proyecto de software en el mundo real.',
        },
        {
          type: 'heading',
          text: 'BigQuery cambió mi forma de pensar sobre los datos',
        },
        {
          type: 'paragraph',
          text: 'Hasta ese momento había trabajado con MySQL, PostgreSQL, SQLite en proyectos pequeños. BigQuery fue otro mundo: diseñado para consultas sobre millones de registros, con una forma diferente de pensar el esquema de datos. No puedes hacer UPDATE igual que en SQL tradicional. Tienes que pensar en términos de particiones, clustering y costos de consulta.',
        },
        {
          type: 'code',
          lang: 'sql',
          text: `-- En MySQL esto es normal\nUPDATE users SET completed = TRUE WHERE id = 123;\n\n-- En BigQuery lo correcto es pensar diferente\nINSERT INTO grids_v2\nSELECT * REPLACE(TRUE AS completed)\nFROM grids\nWHERE id = 123;`,
        },
        {
          type: 'paragraph',
          text: 'Ese cambio de mentalidad — entender que hay herramientas diseñadas para problemas específicos y que no todo es MySQL — fue una de las lecciones más valiosas de la estancia.',
        },
        {
          type: 'heading',
          text: 'Lo que nadie te enseña: el código debe encajar en un sistema',
        },
        {
          type: 'paragraph',
          text: 'En la universidad tu código vive solo. En una empresa, tu código tiene que convivir con la infraestructura existente, con los procesos del equipo, con estándares de seguridad y con decisiones técnicas que se tomaron años antes de que llegaras. Aprender a trabajar dentro de esas restricciones — y a proponer mejoras sin romper lo que ya funciona — es una habilidad que no se aprende en ningún curso.',
        },
        {
          type: 'paragraph',
          text: 'Salí de Ford con una certeza: la parte técnica es la más fácil de aprender. Lo difícil — y lo más valioso — es entender el negocio, comunicarte con personas que no son desarrolladores y tomar decisiones con información incompleta.',
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'When I joined Ford as an intern I had reasonable confidence. I had done university projects, I knew databases, web and mobile programming, frameworks, and technologies. I thought the jump to a company would just be a matter of adapting to the pace.',
        },
        {
          type: 'paragraph',
          text: 'I was wrong. Not because I didn\'t know how to code — but because coding in a real enterprise environment is a completely different problem than what you\'re taught in class.',
        },
        {
          type: 'heading',
          text: 'The first shock: real data isn\'t clean',
        },
        {
          type: 'paragraph',
          text: 'In university, projects start with an empty database that you design yourself. At Ford, the first project I was assigned involved migrating historical data stored in different data stores, with poorly named columns, with duplicate records and no documentation.',
        },
        {
          type: 'paragraph',
          text: 'Before writing a single line of the final product code, I spent days understanding that data. That invisible work — that nobody sees — is where any real-world software project actually begins.',
        },
        {
          type: 'heading',
          text: 'BigQuery changed how I think about data',
        },
        {
          type: 'paragraph',
          text: 'Until then I had worked with MySQL, PostgreSQL, SQLite on small projects. BigQuery was another world: designed for queries over millions of records, with a different way of thinking about data schema. You can\'t do UPDATE the same way as in traditional SQL. You have to think in terms of partitions, clustering and query costs.',
        },
        {
          type: 'code',
          lang: 'sql',
          text: `-- In MySQL this is normal\nUPDATE users SET completed = TRUE WHERE id = 123;\n\n-- In BigQuery the right way is to think differently\nINSERT INTO grids_v2\nSELECT * REPLACE(TRUE AS completed)\nFROM grids\nWHERE id = 123;`,
        },
        {
          type: 'paragraph',
          text: 'That mindset shift — understanding that there are tools designed for specific problems and that not everything is MySQL — was one of the most valuable lessons of the internship.',
        },
        {
          type: 'heading',
          text: 'What nobody teaches you: code must fit into a system',
        },
        {
          type: 'paragraph',
          text: 'In university your code lives alone. In a company, your code has to coexist with existing infrastructure, with team processes, with security standards and with technical decisions made years before you arrived. Learning to work within those constraints — and to propose improvements without breaking what already works — is a skill you don\'t learn in any course.',
        },
        {
          type: 'paragraph',
          text: 'I left Ford with one certainty: the technical part is the easiest to learn. The hard part — and the most valuable — is understanding the business, communicating with people who aren\'t developers and making decisions with incomplete information.',
        },
      ],
    },
  },

  {
    id: 'threejs-desde-cero',
    date: '2025',
    readTime: { es: '8 min de lectura', en: '8 min read' },
    tag: { es: 'Técnico', en: 'Technical' },
    tagColor: '#a10000',
    title: {
      es: 'Cómo metí un modelo 3D en una página web',
      en: 'How I put a 3D model in a webpage',
    },
    summary: {
      es: 'El proceso real de aprender Three.js desde cero para un proyecto con deadline: los errores, los atajos y por qué TypeScript salvó el proyecto.',
      en: 'The real process of learning Three.js from scratch for a project with a deadline: the mistakes, the shortcuts and why TypeScript saved the project.',
    },
    content: {
      es: [
        {
          type: 'paragraph',
          text: 'Para el proyecto SG Signare necesitaba un modelo 3D de una playera en el que el usuario pudiera agregar imágenes y texto, ver el resultado en tiempo real y hacer un pedido. Nunca había tocado Three.js.',
        },
        {
          type: 'heading',
          text: 'El primer error: querer entenderlo todo antes de hacer algo',
        },
        {
          type: 'paragraph',
          text: 'Mi primer instinto fue leerme la documentación completa de Three.js antes de escribir código. Eso fue un error. Three.js es una librería enorme y la mayoría de sus conceptos solo tienen sentido cuando los ves funcionando. Después de dos días leyendo sin hacer nada, cambié de estrategia: construir primero, entender después.',
        },
        {
          type: 'heading',
          text: 'La pieza más difícil: proyectar una imagen sobre un modelo 3D',
        },
        {
          type: 'paragraph',
          text: 'Agregar un modelo 3D a la página es relativamente directo. Lo complicado fue hacer que las imágenes que el usuario sube se "peguen" al modelo y se muevan con él cuando rota. Eso requiere trabajar con texturas dinámicas y mapear coordenadas UV.',
        },
        {
          type: 'code',
          lang: 'typescript',
          text: `// Crear un canvas dinámico como textura\nconst canvas = document.createElement('canvas');\nconst ctx = canvas.getContext('2d');\n\n// Dibujar la imagen del usuario sobre el canvas\nctx.drawImage(userImage, posX, posY, width, height);\n\n// Usar ese canvas como textura del modelo\nconst texture = new THREE.CanvasTexture(canvas);\nmaterial.map = texture;\nmaterial.needsUpdate = true;`,
        },
        {
          type: 'paragraph',
          text: 'La clave está en usar un canvas HTML como textura dinámica. Cada vez que el usuario mueve o redimensiona un elemento, redibujas el canvas y actualizas la textura. Simple en concepto, complicado en la práctica cuando tienes múltiples elementos superpuestos.',
        },
        {
          type: 'heading',
          text: 'Por qué TypeScript fue la decisión correcta',
        },
        {
          type: 'paragraph',
          text: 'Un editor 3D tiene estado complejo: la posición de cada elemento, su escala, su rotación, qué elemento está seleccionado, el historial de cambios. Sin tipos claros, ese estado se convierte en un caos muy rápido. TypeScript me forzó a definir exactamente qué forma tiene cada objeto desde el inicio — y eso previno docenas de bugs que hubiera encontrado solo en runtime.',
        },
        {
          type: 'code',
          lang: 'typescript',
          text: `interface DesignElement {\n  id: string;\n  type: 'image' | 'text';\n  posX: number;\n  posY: number;\n  width: number;\n  height: number;\n  rotation: number;\n  content: string;\n  isSelected: boolean;\n}`,
        },
        {
          type: 'paragraph',
          text: 'Si volviera a hacer este proyecto, empezaría exactamente igual: Three.js + TypeScript. Y le dedicaría el doble de tiempo a planear la estructura de datos antes de tocar el 3D.',
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'For the SG Signare project I needed a 3D t-shirt model where users could add images and text, see the result in real time and place an order. I had never touched Three.js.',
        },
        {
          type: 'heading',
          text: 'The first mistake: wanting to understand everything before doing anything',
        },
        {
          type: 'paragraph',
          text: 'My first instinct was to read the entire Three.js documentation before writing code. That was a mistake. Three.js is a huge library and most of its concepts only make sense when you see them working. After two days of reading without doing anything, I changed strategy: build first, understand later.',
        },
        {
          type: 'heading',
          text: 'The hardest piece: projecting an image onto a 3D model',
        },
        {
          type: 'paragraph',
          text: 'Adding a 3D model to the page is relatively straightforward. The hard part was making the images the user uploads "stick" to the model and move with it when it rotates. That requires working with dynamic textures and mapping UV coordinates.',
        },
        {
          type: 'code',
          lang: 'typescript',
          text: `// Create a dynamic canvas as texture\nconst canvas = document.createElement('canvas');\nconst ctx = canvas.getContext('2d');\n\n// Draw user image on the canvas\nctx.drawImage(userImage, posX, posY, width, height);\n\n// Use that canvas as the model's texture\nconst texture = new THREE.CanvasTexture(canvas);\nmaterial.map = texture;\nmaterial.needsUpdate = true;`,
        },
        {
          type: 'paragraph',
          text: 'The key is using an HTML canvas as a dynamic texture. Every time the user moves or resizes an element, you redraw the canvas and update the texture. Simple in concept, complex in practice when you have multiple overlapping elements.',
        },
        {
          type: 'heading',
          text: 'Why TypeScript was the right call',
        },
        {
          type: 'paragraph',
          text: 'A 3D editor has complex state: the position of each element, its scale, its rotation, which element is selected, the change history. Without clear types, that state becomes chaos very quickly. TypeScript forced me to define exactly what shape each object has from the start — and that prevented dozens of bugs I would have only found at runtime.',
        },
        {
          type: 'code',
          lang: 'typescript',
          text: `interface DesignElement {\n  id: string;\n  type: 'image' | 'text';\n  posX: number;\n  posY: number;\n  width: number;\n  height: number;\n  rotation: number;\n  content: string;\n  isSelected: boolean;\n}`,
        },
        {
          type: 'paragraph',
          text: 'If I were to redo this project, I would start exactly the same way: Three.js + TypeScript. And I would spend twice as much time planning the data structure before touching the 3D.',
        },
      ],
    },
  },

  {
    id: 'primer-api-rest',
    date: '2024',
    readTime: { es: '5 min de lectura', en: '5 min read' },
    tag: { es: 'Aprendizaje', en: 'Learning' },
    tagColor: '#00A878',
    title: {
      es: 'Mi primera API REST: todo lo que nadie te dice',
      en: 'My first REST API: everything nobody tells you',
    },
    summary: {
      es: 'CORS, estados asíncronos y datos que no llegan cuando deben. Lo que realmente aprendes cuando conectas un frontend móvil con un backend por primera vez.',
      en: 'CORS, async states and data that doesn\'t arrive when it should. What you really learn when connecting a mobile frontend with a backend for the first time.',
    },
    content: {
      es: [
        {
          type: 'paragraph',
          text: 'El proyecto de la app de recetas fue el primero donde conecté un frontend — en este caso móvil con React Native — a una API REST propia con Node.js y una base de datos MySQL real. En papel suena simple. En la práctica fueron varios días de errores que nadie me había advertido.',
        },
        {
          type: 'heading',
          text: 'El error que todos encuentran primero: CORS',
        },
        {
          type: 'paragraph',
          text: 'Literalmente la primera llamada que hice a mi API desde la app falló con un error de CORS. No entendía qué significaba ni por qué aparecía. CORS es un mecanismo de seguridad del navegador — pero en React Native no hay navegador, entonces el problema era otro: mi servidor no estaba configurado para aceptar peticiones desde origins distintos.',
        },
        {
          type: 'code',
          lang: 'javascript',
          text: `// Lo que faltaba en mi servidor Node.js\nconst cors = require('cors');\n\napp.use(cors({\n  origin: '*', // En producción, especifica los origins permitidos\n  methods: ['GET', 'POST', 'PUT', 'DELETE'],\n  allowedHeaders: ['Content-Type', 'Authorization'],\n}));`,
        },
        {
          type: 'heading',
          text: 'El segundo problema: los datos no llegan cuando crees que llegan',
        },
        {
          type: 'paragraph',
          text: 'Una vez resuelto CORS, el siguiente problema fue más sutil. Hacía la llamada a la API, los datos "llegaban", pero cuando intentaba usarlos en la siguiente línea eran undefined. El clásico error de no entender async/await correctamente.',
        },
        {
          type: 'code',
          lang: 'javascript',
          text: `// Así lo hacía al principio\nconst fetchRecipes = () => {\n  const data = api.get('/recipes'); // Esto devuelve una Promise\n  console.log(data); // undefined\n  setRecipes(data);\n};\n\n// Así es correcto\nconst fetchRecipes = async () => {\n  try {\n    const data = await api.get('/recipes');\n    setRecipes(data);\n  } catch (error) {\n    console.error('Error:', error);\n  }\n};`,
        },
        {
          type: 'heading',
          text: 'Lo que más me costó aceptar',
        },
        {
          type: 'paragraph',
          text: 'La lección más dura no fue técnica. Fue aceptar que cuando algo no funciona, el problema casi siempre está en mi código — no en la librería, no en el framework, no en el servidor. Esa mentalidad de "el problema está afuera" es la que más tiempo me hizo perder al principio. Aprender a leer los errores con calma, a aislar el problema y a buscar en la dirección correcta vale más que conocer cualquier tecnología.',
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'The recipe app project was the first where I connected a frontend — in this case mobile with React Native — to my own REST API with Node.js and a real MySQL database. On paper it sounds simple. In practice it was several days of errors nobody had warned me about.',
        },
        {
          type: 'heading',
          text: 'The error everyone finds first: CORS',
        },
        {
          type: 'paragraph',
          text: 'Literally the first call I made to my API from the app failed with a CORS error. I didn\'t understand what it meant or why it appeared. CORS is a browser security mechanism — but in React Native there\'s no browser, so the problem was different: my server wasn\'t configured to accept requests from different origins.',
        },
        {
          type: 'code',
          lang: 'javascript',
          text: `// What was missing in my Node.js server\nconst cors = require('cors');\n\napp.use(cors({\n  origin: '*', // In production, specify allowed origins\n  methods: ['GET', 'POST', 'PUT', 'DELETE'],\n  allowedHeaders: ['Content-Type', 'Authorization'],\n}));`,
        },
        {
          type: 'heading',
          text: 'The second problem: data doesn\'t arrive when you think it does',
        },
        {
          type: 'paragraph',
          text: 'Once CORS was solved, the next problem was more subtle. I made the API call, the data "arrived", but when I tried to use it on the next line it was undefined. The classic error of not understanding async/await correctly.',
        },
        {
          type: 'code',
          lang: 'javascript',
          text: `// ❌ How I did it at first\nconst fetchRecipes = () => {\n  const data = api.get('/recipes'); // This returns a Promise\n  console.log(data); // undefined\n  setRecipes(data);\n};\n\n// ✅ This is correct\nconst fetchRecipes = async () => {\n  try {\n    const data = await api.get('/recipes');\n    setRecipes(data);\n  } catch (error) {\n    console.error('Error:', error);\n  }\n};`,
        },
        {
          type: 'heading',
          text: 'What cost me the most to accept',
        },
        {
          type: 'paragraph',
          text: 'The hardest lesson wasn\'t technical. It was accepting that when something doesn\'t work, the problem is almost always in my code — not the library, not the framework, not the server. That "the problem is outside" mindset is what wasted the most of my time early on. Learning to read errors calmly, isolate the problem and search in the right direction is worth more than knowing any technology.',
        },
      ],
    },
  },
]