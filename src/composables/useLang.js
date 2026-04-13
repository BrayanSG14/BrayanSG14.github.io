import { ref, computed } from 'vue'

const lang = ref('es')

const t = computed(() => translations[lang.value])

const translations = {
  es: {
    nav: { home: 'Inicio', projects: 'Proyectos', blog: 'Blog' },
    hero: { role: 'Desarrollador Full Stack' },
    work: { eyebrow: 'Cómo trabajo', title: 'Mis principios' },
    skills: { eyebrow: 'Habilidades', title: 'Qué sé hacer', tools: 'Herramientas' },
    principles: [
      { num: '01', title: 'Entender antes de construir', desc: 'Antes de escribir código me aseguro de entender el problema real. Una solución bien planteada vale más que código rápido que resuelve lo incorrecto.' },
      { num: '02', title: 'Documentar el proceso', desc: 'El código que escribo hoy lo leerá alguien más mañana — o yo mismo en seis meses. Por eso cuido que sea legible y esté bien explicado.' },
      { num: '03', title: 'Hardware y software como uno', desc: 'Entender cómo funciona el hardware me hace mejor desarrollador de software, y viceversa.' },
      { num: '04', title: 'Aprender de los errores', desc: 'Cada proyecto me enseñó algo que no estaba en ningún libro. Lo que falló es tan valioso como lo que funcionó.' },
    ],
    skillCategories: [
      { icon: '🌐', name: 'Desarrollo Web',    desc: 'Interfaces y backends conectados a bases de datos.',          tags: ['HTML','JavaScript','Vue','React','TypeScript','Tailwind CSS','GCP','AWS','MySQL','MongoDB','PostgreSQL','Docker','Podman'] },
      { icon: '📱', name: 'Desarrollo Móvil',  desc: 'Apps nativas para dispositivos móviles con servicios en la nube y APIs REST.',          tags: ['Android','TypeScript','React Native','Expo','MySQL'] },
      //{ icon: '⚡', name: 'IoT & Embebido',    desc: 'Sistemas con hardware real conectado a interfaces web en tiempo real.',    tags: ['Arduino','ESP32','C++','WebSocket'] },
    ],
  },
  en: {
    nav: { home: 'Home', projects: 'Projects', blog: 'Blog' },
    hero: { role: 'Full Stack Developer' },
    work: { eyebrow: 'How I work', title: 'My principles' },
    skills: { eyebrow: 'Skills', title: 'What I do', tools: 'Tools' },
    principles: [
      { num: '01', title: 'Understand before building', desc: 'Before writing code I make sure I understand the real problem. A well-framed solution is worth more than fast code that solves the wrong thing.' },
      { num: '02', title: 'Document the process', desc: 'The code I write today will be read by someone else tomorrow — or by me in six months. That\'s why I keep it readable and well explained.' },
      { num: '03', title: 'Hardware and software as one', desc: 'Understanding how hardware works makes me a better software developer, and vice versa.' },
      { num: '04', title: 'Learn from mistakes', desc: 'Every project taught me something that wasn\'t in any book. What went wrong is as valuable as what worked.' },
    ],
    skillCategories: [
      { icon: '🌐', name: 'Web Development',    desc: 'Interfaces and backends connected to databases.',              tags: ['HTML','JavaScript','Vue','React','TypeScript','Tailwind CSS','GCP','AWS','MySQL','MongoDB','PostgreSQL','Docker','Podman'] },
      { icon: '📱', name: 'Mobile Development',  desc: 'Native apps for mobile devices with cloud services and REST APIs.',                 tags: ['Android','TypeScript','React Native','Expo','MySQL'] },
      //{ icon: '⚡', name: 'IoT & Embedded',      desc: 'Systems with real hardware connected to real-time web interfaces.',      tags: ['Arduino','ESP32','C++','WebSocket'] },
    ],
  },
}

export function useLang() {
  const toggleLang = () => { lang.value = lang.value === 'es' ? 'en' : 'es' }
  return { lang, t, toggleLang }
}