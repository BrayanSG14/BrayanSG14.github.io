<template>
  <Layout>
    <section class="about">
      <div class="container">

        <!-- HEADER -->
        <div class="page-header">
          <p class="eyebrow">Sobre mí</p>
          <h1 class="page-title">La persona detrás del código</h1>
          <p class="page-subtitle">
            No solo qué sé hacer, sino cómo pienso y por qué hago lo que hago.
          </p>
        </div>

        <!-- BIO -->
        <div class="bio-grid">
          <div class="bio-text">
            <p>
              Soy egresado de Ingeniería en Sistemas Computacionales con especialidad en
              desarrollo de software. Desde la universidad me llamó la atención la posibilidad
              de construir cosas que funcionan de verdad — no solo en papel, sino en el mundo real.
            </p>
            <p>
              Eso me llevó a explorar áreas que pocos combinan: desarrollo web, aplicaciones
              móviles y sistemas embebidos con Arduino y ESP32. Me gusta entender cómo
              interactúa el software con el hardware, y eso me da una perspectiva diferente
              al momento de diseñar soluciones.
            </p>
            <p>
              Cuando enfrento un proyecto, lo primero que me pregunto no es
              <em>"¿cómo lo hago?"</em> sino <em>"¿por qué lo estamos haciendo?"</em>
              Esa mentalidad es la que guía cada decisión técnica que tomo.
            </p>
          </div>

          <div class="bio-aside">
            <div class="info-card">
              <div class="info-row" v-for="item in infoItems" :key="item.label">
                <span class="info-label">{{ item.label }}</span>
                <span class="info-value">{{ item.value }}</span>
              </div>
            </div>

            <div class="availability">
              <span class="avail-dot"></span>
              <span>Disponible para proyectos freelance y oportunidades laborales</span>
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <!-- EDUCACIÓN -->
        <div class="section-block">
          <p class="eyebrow">Formación</p>
          <h2 class="block-title">Educación</h2>

          <div class="timeline">
            <div class="timeline-item" v-for="edu in education" :key="edu.title">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <div class="timeline-header">
                  <h3 class="timeline-title">{{ edu.title }}</h3>
                  <span class="timeline-date">{{ edu.date }}</span>
                </div>
                <p class="timeline-place">{{ edu.place }}</p>
                <p class="timeline-desc">{{ edu.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <!-- VALORES / FORMA DE TRABAJAR -->
        <div class="section-block">
          <p class="eyebrow">Cómo trabajo</p>
          <h2 class="block-title">Mis principios</h2>

          <div class="principles-grid">
            <div class="principle-card" v-for="p in principles" :key="p.title">
              <span class="principle-icon">{{ p.icon }}</span>
              <h3 class="principle-title">{{ p.title }}</h3>
              <p class="principle-desc">{{ p.desc }}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from '../components/Layout.vue'

const infoItems = [
  { label: 'Nombre',     value: 'Brayan Segoviano' },
  { label: 'Ubicación',  value: 'Querétaro, México' },
  { label: 'Carrera',    value: 'Ing. Sistemas Computacionales' },
  { label: 'Especialidad', value: 'Desarrollo de Software' },
  { label: 'Egresado',   value: '2024' },
  { label: 'Email',      value: 'tu@email.com' },
]

const education = [
  {
    title: 'Ing. Sistemas Computacionales',
    place: 'Nombre de tu institución — Querétaro, MX',
    date: '2020 – 2024',
    desc: 'Especialidad en desarrollo de software. Cursé materias de programación web, móvil, bases de datos, redes y sistemas embebidos. Proyecto de titulación enfocado en [describe brevemente tu proyecto de tesis].',
  },
  {
    title: 'Bachillerato',
    place: 'Nombre de tu preparatoria',
    date: '2017 – 2020',
    desc: 'Área de matemáticas y ciencias. Primer acercamiento a la programación.',
  },
]

const principles = [
  {
    icon: '🔍',
    title: 'Entender antes de construir',
    desc: 'Antes de escribir código me aseguro de entender el problema real. Una solución bien planteada vale más que código rápido que resuelve lo incorrecto.',
  },
  {
    icon: '📖',
    title: 'Documentar el proceso',
    desc: 'El código que escribo hoy lo leerá alguien más mañana — o yo mismo en seis meses. Por eso cuido que sea legible y esté bien explicado.',
  },
  {
    icon: '🔧',
    title: 'Hardware y software como uno',
    desc: 'Me interesa la intersección entre ambos mundos. Entender cómo funciona el hardware me hace mejor desarrollador de software, y viceversa.',
  },
  {
    icon: '📈',
    title: 'Aprender de los errores',
    desc: 'Cada proyecto me ha enseñado algo que no estaba en ningún libro. Documentar lo que salió mal es tan valioso como documentar lo que funcionó.',
  },
]
</script>

<style scoped>
.about { padding: 5rem 0 6rem; }

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* HEADER */
.page-header { margin-bottom: 4rem; }

.eyebrow {
  font-size: 0.75rem;
  font-family: var(--font-mono);
  color: var(--slate);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.page-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.page-subtitle {
  color: var(--text-secondary);
  font-size: 1rem;
  max-width: 500px;
}

/* BIO */
.bio-grid {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 4rem;
  align-items: start;
  margin-bottom: 4rem;
}

.bio-text {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.85;
}

.bio-text em {
  color: var(--slate);
  font-style: normal;
}

.info-card {
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: 1rem;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem 1.25rem;
  border-bottom: 1px solid var(--border);
  gap: 1rem;
}

.info-row:last-child { border-bottom: none; }

.info-label {
  font-size: 0.78rem;
  font-family: var(--font-mono);
  color: var(--text-secondary);
  white-space: nowrap;
}

.info-value {
  font-size: 0.85rem;
  color: var(--text-primary);
  text-align: right;
}

.availability {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  color: var(--slate);
  background: var(--border-soft);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.75rem 1rem;
}

.avail-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--slate);
  flex-shrink: 0;
  animation: pulse 2s infinite;
}

/* DIVIDER */
.divider {
  height: 1px;
  background: var(--border);
  margin: 4rem 0;
}

/* BLOQUES */
.section-block { margin-bottom: 1rem; }

.block-title {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2.5vw, 1.9rem);
  font-weight: 500;
  margin-bottom: 2.5rem;
}

/* TIMELINE */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  border-left: 1px solid var(--border);
  padding-left: 2rem;
  margin-left: 0.5rem;
}

.timeline-item {
  position: relative;
  padding-bottom: 2.5rem;
}

.timeline-item:last-child { padding-bottom: 0; }

.timeline-dot {
  position: absolute;
  left: -2.45rem;
  top: 4px;
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--navy);
  border: 2px solid var(--bg);
  outline: 1px solid var(--navy);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.3rem;
  flex-wrap: wrap;
}

.timeline-title {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-primary);
}

.timeline-date {
  font-size: 0.75rem;
  font-family: var(--font-mono);
  color: var(--slate);
  white-space: nowrap;
}

.timeline-place {
  font-size: 0.82rem;
  color: var(--navy);
  margin-bottom: 0.6rem;
}

.timeline-desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.75;
}

/* PRINCIPIOS */
.principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.25rem;
}

.principle-card {
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  transition: border-color 0.2s;
}

.principle-card:hover { border-color: var(--navy); }

.principle-icon { font-size: 1.5rem; display: block; margin-bottom: 0.75rem; }

.principle-title {
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.principle-desc {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .bio-grid { grid-template-columns: 1fr; gap: 2.5rem; }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}
</style>