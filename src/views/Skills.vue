<template>
  <Layout>
    <section class="skills">
      <div class="container">

        <div class="page-header">
          <p class="eyebrow">Habilidades</p>
          <h1 class="page-title">Qué sé hacer y cómo lo aprendí</h1>
          <p class="page-subtitle">
            No es solo una lista de tecnologías — es el contexto en el que las usé
            y el nivel real de dominio que tengo en cada una.
          </p>
        </div>

        <!-- CATEGORÍAS -->
        <div class="categories">
          <button
            v-for="cat in categories"
            :key="cat.id"
            class="cat-btn"
            :class="{ active: activeCategory === cat.id }"
            @click="activeCategory = cat.id"
          >
            {{ cat.label }}
          </button>
        </div>

        <!-- SKILLS -->
        <div class="skills-grid">
          <div
            v-for="skill in filteredSkills"
            :key="skill.name"
            class="skill-card"
          >
            <div class="skill-top">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-context">{{ skill.context }}</span>
              </div>
              <span class="skill-level" :class="`level-${skill.level}`">
                {{ levelLabel[skill.level] }}
              </span>
            </div>

            <div class="skill-bar-track">
              <div
                class="skill-bar-fill"
                :class="`level-${skill.level}`"
                :style="{ width: levelWidth[skill.level] }"
              ></div>
            </div>

            <p class="skill-note">{{ skill.note }}</p>
          </div>
        </div>

        <div class="divider"></div>

        <!-- HERRAMIENTAS -->
        <div class="section-block">
          <p class="eyebrow">Entorno de trabajo</p>
          <h2 class="block-title">Herramientas y entorno</h2>
          <div class="tools-grid">
            <div class="tool-chip" v-for="tool in tools" :key="tool.name">
              <span class="tool-name">{{ tool.name }}</span>
              <span class="tool-use">{{ tool.use }}</span>
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <!-- APRENDIENDO -->
        <div class="section-block">
          <p class="eyebrow">En progreso</p>
          <h2 class="block-title">Lo que estoy aprendiendo ahora</h2>
          <div class="learning-grid">
            <div class="learning-card" v-for="item in learning" :key="item.name">
              <div class="learning-header">
                <span class="learning-name">{{ item.name }}</span>
                <span class="learning-badge">En curso</span>
              </div>
              <p class="learning-why">{{ item.why }}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  </Layout>
</template>

<script setup>
import { ref, computed } from 'vue'
import Layout from '../components/Layout.vue'

const activeCategory = ref('all')

const categories = [
  { id: 'all',    label: 'Todas' },
  { id: 'web',    label: 'Web' },
  { id: 'mobile', label: 'Móvil' },
//  { id: 'iot',    label: 'IoT / Embebido' },
  { id: 'db',     label: 'Bases de datos' },
  { id: 'tools',  label: 'Herramientas' },
]

const levelLabel = {
  beginner:     'Básico',
  intermediate: 'Intermedio',
  advanced:     'Avanzado',
}

const levelWidth = {
  beginner:     '33%',
  intermediate: '66%',
  advanced:     '90%',
}

const skills = [
  { name: 'HTML / CSS',    category: 'web',    level: 'advanced',     context: 'Proyectos web universitarios y personales', note: 'Maquetación responsive, animaciones CSS, diseño de componentes.' },
  { name: 'JavaScript',   category: 'web',    level: 'intermediate', context: 'Proyectos web y scripts de automatización',  note: 'DOM, fetch API, lógica de negocio en frontend.' },
  { name: 'Vue 3',        category: 'web',    level: 'intermediate', context: 'Este portafolio y proyectos personales',      note: 'Composition API, Vue Router, manejo de estado reactivo.' },
  { name: 'PHP',          category: 'web',    level: 'intermediate', context: 'Proyectos universitarios con backend',        note: 'APIs REST básicas, integración con MySQL.' },
  { name: 'Android / Java', category: 'mobile', level: 'intermediate', context: 'Apps universitarias y proyectos propios',  note: 'Activities, fragments, consumo de APIs, Firebase.' },
  //{ name: 'C / C++',      category: 'iot',    level: 'intermediate', context: 'Arduino y ESP32',                            note: 'Control de periféricos, sensores, comunicación serial.' },
  //{ name: 'Arduino',      category: 'iot',    level: 'advanced',     context: 'Proyectos de automatización y sensores',     note: 'Sensores, actuadores, comunicación I2C/SPI/UART.' },
  //{ name: 'ESP32',        category: 'iot',    level: 'intermediate', context: 'Proyectos con servidor web embebido',        note: 'WiFi, WebSocket, servidor HTTP embebido, OTA.' },
  { name: 'MySQL',        category: 'db',     level: 'intermediate', context: 'Proyectos web con backend en PHP',           note: 'Diseño de esquemas, consultas, relaciones.' },
  { name: 'Git / GitHub', category: 'tools',  level: 'intermediate', context: 'Control de versiones en todos los proyectos', note: 'Ramas, commits, pull requests, GitHub Pages.' },
]

const filteredSkills = computed(() =>
  activeCategory.value === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory.value)
)

const tools = [
  { name: 'VS Code',         use: 'Editor principal' },
  { name: 'Git',             use: 'Control de versiones' },
  { name: 'GitHub',          use: 'Repositorios y despliegue' },
  { name: 'Postman',         use: 'Pruebas de APIs' },
  { name: 'Android Studio',  use: 'Desarrollo móvil' },
  { name: 'Arduino IDE',     use: 'Programación embebida' },
  { name: 'Figma',           use: 'Diseño y prototipado' },
  { name: 'MySQL Workbench', use: 'Gestión de BD' },
]

const learning = [
  { name: 'TypeScript',  why: 'Para escribir JavaScript con mayor robustez y escalabilidad en proyectos más grandes.' },
  { name: 'Node.js',     why: 'Quiero manejar el backend completo con JavaScript y construir APIs más sólidas.' },
  { name: 'Docker',      why: 'Para entender cómo se despliegan aplicaciones en entornos reales de producción.' },
]
</script>

<style scoped>
.skills { padding: 5rem 0 6rem; }

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-header { margin-bottom: 3rem; }

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
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.page-subtitle {
  color: var(--text-secondary);
  font-size: 0.95rem;
  max-width: 520px;
  line-height: 1.7;
}

/* CATEGORÍAS */
.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 2.5rem;
}

.cat-btn {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  padding: 0.4rem 1rem;
  border-radius: 100px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s;
}

.cat-btn:hover { border-color: var(--navy); color: var(--text-primary); }
.cat-btn.active { background: var(--navy); border-color: var(--navy); color: #fff; }

/* SKILLS GRID */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}

.skill-card {
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.5rem;
  transition: border-color 0.2s;
}

.skill-card:hover { border-color: var(--border); }

.skill-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.9rem;
}

.skill-info {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.skill-name {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-primary);
}

.skill-context {
  font-size: 0.72rem;
  color: var(--text-secondary);
  font-family: var(--font-mono);
}

.skill-level {
  font-size: 0.65rem;
  font-family: var(--font-mono);
  font-weight: 500;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
  white-space: nowrap;
}

.level-beginner     { background: #fdf3e7; color: #8a6200; border: 1px solid #f0ddb0; }
.level-intermediate { background: #eef1f8; color: #2a4a7a; border: 1px solid #c9d1d4; }
.level-advanced     { background: #eef5f0; color: #1a5c35; border: 1px solid #b8d9c3; }

.skill-bar-track {
  height: 3px;
  background: var(--border);
  border-radius: 100px;
  margin-bottom: 0.9rem;
  overflow: hidden;
}

.skill-bar-fill {
  height: 100%;
  border-radius: 100px;
  transition: width 0.6s ease;
}

.skill-bar-fill.level-beginner     { background: #c8a84b; }
.skill-bar-fill.level-intermediate { background: #748c94; }
.skill-bar-fill.level-advanced     { background: #00162d; }

.skill-note {
  font-size: 0.78rem;
  color: var(--text-secondary);
  line-height: 1.6;
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
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  font-weight: 500;
  margin-bottom: 2rem;
}

/* HERRAMIENTAS */
.tools-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tool-chip {
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.6rem 1.1rem;
}

.tool-name {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-primary);
}

.tool-use {
  font-size: 0.7rem;
  font-family: var(--font-mono);
  color: var(--text-secondary);
}

/* APRENDIENDO */
.learning-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}

.learning-card {
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-left: 3px solid var(--navy);
  border-radius: var(--radius-sm);
  padding: 1.25rem 1.5rem;
}

.learning-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
  gap: 1rem;
}

.learning-name {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-primary);
}

.learning-badge {
  font-size: 0.65rem;
  font-family: var(--font-mono);
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
  background: var(--navy-mid);
  color: var(--fog);
  white-space: nowrap;
}

.learning-why {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

@media (max-width: 600px) {
  .skills-grid { grid-template-columns: 1fr; }
  .learning-grid { grid-template-columns: 1fr; }
}
</style>