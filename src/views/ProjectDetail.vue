<template>
  <Layout>
    <div v-if="project">

      <!-- PROGRESS BAR -->
      <div class="reading-progress" :style="{ width: scrollProgress + '%' }"></div>

      <!-- HERO -->
      <section class="detail-hero">
        <div class="container">
          <RouterLink to="/proyectos" class="back-link animate-up">
            <span class="back-arrow-wrap">←</span>
            {{ lang === 'es' ? 'Proyectos' : 'Projects' }}
          </RouterLink>

          <div class="hero-layout">
            <!-- INFO HERO -->
            <div class="hero-info animate-up">
              <div class="hero-meta">
                <span class="meta-type" :style="{ color: project.color }">
                  {{ lang === 'es' ? project.typeLabel.es : project.typeLabel.en }}
                </span>
                <span v-if="project.company" class="meta-pill">{{ project.company }}</span>
                <span v-if="project.confidential" class="meta-pill confidential-pill">
                  {{ lang === 'es' ? '🔒 Confidencial' : '🔒 Confidential' }}
                </span>
              </div>

              <h1 class="detail-title">{{ project.name }}</h1>
              <p class="detail-summary">{{ lang === 'es' ? project.summary.es : project.summary.en }}</p>

              <div class="detail-links">
                <a v-if="project.demo" :href="project.demo" target="_blank" class="detail-link-btn primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="14" height="14">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  {{ lang === 'es' ? 'Ver demo' : 'Live demo' }}
                </a>
                <a v-if="project.repo" :href="project.repo" target="_blank" class="detail-link-btn secondary">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  {{ lang === 'es' ? 'Repositorio' : 'Repository' }}
                </a>
              </div>
            </div>

            <!-- IMAGEN HERO -->
            <div class="hero-image-col animate-up animate-up-d2" v-if="project.hasImages && project.images && project.images.length">
              <div class="hero-img-frame" :style="{ '--accent': project.color }">
                <img :src="project.images[0]" :alt="project.name" class="hero-img" @error="onHeroImgError" />
              </div>
            </div>

            <div class="hero-image-col hero-no-image animate-up animate-up-d2" v-else :style="{ background: `${project.color}08` }">
              <div class="no-image-content">
                <div class="no-image-lines">
                  <span class="ni-line" :style="{ background: project.color }"></span>
                  <span class="ni-line ni-short" :style="{ background: project.color }"></span>
                  <span class="ni-line ni-shorter" :style="{ background: project.color }"></span>
                </div>
                <p class="no-image-label" :style="{ color: project.color }">
                  {{ project.confidential
                      ? (lang === 'es' ? 'Imágenes confidenciales' : 'Confidential images')
                      : (lang === 'es' ? 'Imágenes próximamente' : 'Images coming soon') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- STACK BANNER -->
      <div class="stack-banner">
        <div class="container">
          <div class="stack-row">
            <span class="stack-label">{{ lang === 'es' ? 'Tecnologías' : 'Stack' }}</span>
            <div class="stack-tags">
              <span v-for="s in project.stack" :key="s" class="stack-tag" :style="{ '--p-color': project.color }">{{ s }}</span>
            </div>
            <span class="stack-period">{{ lang === 'es' ? project.period.es : project.period.en }}</span>
          </div>
        </div>
      </div>

      <!-- CONTENIDO PRINCIPAL -->
      <section class="section">
        <div class="container detail-grid">

          <!-- COLUMNA PRINCIPAL -->
          <div class="detail-main">

            <div class="detail-block reveal">
              <div class="block-eyebrow">
                <span class="block-num" :style="{ color: project.color }">01</span>
                <h2 class="block-title">{{ lang === 'es' ? 'Contexto' : 'Context' }}</h2>
              </div>
              <p class="block-text">{{ lang === 'es' ? project.context.es : project.context.en }}</p>
            </div>

            <div class="detail-block reveal">
              <div class="block-eyebrow">
                <span class="block-num" :style="{ color: project.color }">02</span>
                <h2 class="block-title">{{ lang === 'es' ? 'El problema' : 'The problem' }}</h2>
              </div>
              <p class="block-text">{{ lang === 'es' ? project.problem.es : project.problem.en }}</p>
            </div>

            <div v-if="project.hasImages && project.images && project.images.length > 1" class="inline-image reveal">
              <img :src="project.images[1]" :alt="`${project.name} — vista 2`" class="inline-img"
                @error="(e) => e.target.closest('.inline-image').style.display = 'none'" />
            </div>

            <div class="detail-block reveal">
              <div class="block-eyebrow">
                <span class="block-num" :style="{ color: project.color }">03</span>
                <h2 class="block-title">{{ lang === 'es' ? 'Cómo lo desarrollé' : 'How I built it' }}</h2>
              </div>
              <div class="process-steps">
                <div v-for="(step, i) in (lang === 'es' ? project.process.es : project.process.en)" :key="i" class="process-step">
                  <div class="step-indicator">
                    <span class="step-num" :style="{ color: project.color }">{{ String(i + 1).padStart(2, '0') }}</span>
                    <div class="step-line" v-if="i < (lang === 'es' ? project.process.es : project.process.en).length - 1" :style="{ background: `${project.color}30` }"></div>
                  </div>
                  <p class="step-text">{{ step }}</p>
                </div>
              </div>
            </div>

            <div class="detail-block reveal">
              <div class="block-eyebrow">
                <span class="block-num" :style="{ color: project.color }">04</span>
                <h2 class="block-title">{{ lang === 'es' ? 'Qué aprendí' : 'What I learned' }}</h2>
              </div>
              <blockquote class="learning-quote" :style="{ '--accent': project.color }">
                <span class="quote-mark" :style="{ color: project.color }">"</span>
                {{ lang === 'es' ? project.learnings.es : project.learnings.en }}
              </blockquote>
            </div>

          </div>

          <!-- SIDEBAR -->
          <aside class="detail-sidebar">

            <div class="sidebar-card">
              <p class="sidebar-label">{{ lang === 'es' ? 'Aspectos clave' : 'Key highlights' }}</p>
              <ul class="highlights-list">
                <li v-for="h in (lang === 'es' ? project.highlights.es : project.highlights.en)" :key="h" class="highlight-item">
                  <span class="highlight-dot" :style="{ background: project.color }"></span>
                  {{ h }}
                </li>
              </ul>
            </div>

            <div class="sidebar-card">
              <p class="sidebar-label">Stack</p>
              <div class="sidebar-stack">
                <span v-for="s in project.stack" :key="s" class="stack-tag-sm">{{ s }}</span>
              </div>
            </div>

            <div class="sidebar-meta">
              <div class="sidebar-row">
                <p class="sidebar-label">{{ lang === 'es' ? 'Período' : 'Period' }}</p>
                <p class="sidebar-value">{{ lang === 'es' ? project.period.es : project.period.en }}</p>
              </div>
              <div v-if="project.company" class="sidebar-row">
                <p class="sidebar-label">{{ lang === 'es' ? 'Empresa' : 'Company' }}</p>
                <p class="sidebar-value">{{ project.company }}</p>
              </div>
              <div class="sidebar-row">
                <p class="sidebar-label">{{ lang === 'es' ? 'Tipo' : 'Type' }}</p>
                <p class="sidebar-value" :style="{ color: project.color }">
                  {{ lang === 'es' ? project.typeLabel.es : project.typeLabel.en }}
                </p>
              </div>
            </div>

            <div v-if="project.confidential" class="confidential-note">
              <p class="sidebar-label">{{ lang === 'es' ? 'Nota' : 'Note' }}</p>
              <p class="confidential-text">
                {{
                  lang === 'es'
                    ? 'Este proyecto fue desarrollado en un entorno empresarial. Las capturas e imágenes no están disponibles por acuerdo de confidencialidad.'
                    : 'This project was developed in a corporate environment. Screenshots and images are not available due to confidentiality agreement.'
                }}
              </p>
            </div>

          </aside>

        </div>
      </section>

      <!-- NAV ENTRE PROYECTOS -->
      <div class="section-divider container"></div>
      <section class="nav-projects">
        <div class="container nav-projects-inner">
          <RouterLink v-if="prevProject" :to="`/proyectos/${prevProject.id}`" class="nav-proj-link">
            <span class="nav-proj-dir">← {{ lang === 'es' ? 'Anterior' : 'Previous' }}</span>
            <span class="nav-proj-name">{{ prevProject.name }}</span>
          </RouterLink>
          <div v-else></div>
          <RouterLink v-if="nextProject" :to="`/proyectos/${nextProject.id}`" class="nav-proj-link right">
            <span class="nav-proj-dir">{{ lang === 'es' ? 'Siguiente' : 'Next' }} →</span>
            <span class="nav-proj-name">{{ nextProject.name }}</span>
          </RouterLink>
        </div>
      </section>

    </div>

    <div v-else class="not-found">
      <div class="container">
        <h1>404</h1>
        <p>{{ lang === 'es' ? 'Proyecto no encontrado.' : 'Project not found.' }}</p>
        <RouterLink to="/proyectos" class="link-line">
          {{ lang === 'es' ? 'Ver proyectos' : 'View projects' }}
        </RouterLink>
      </div>
    </div>

  </Layout>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import Layout from '../components/Layout.vue'
import { useLang } from '../composables/useLang'
import { useScrollReveal } from '../composables/useScrollReveal'
import { projects } from '../data/projects'

const route = useRoute()
const { lang } = useLang()
useScrollReveal()

const project = computed(() => projects.find(p => p.id === route.params.id))
const currentIndex = computed(() => projects.findIndex(p => p.id === route.params.id))
const prevProject = computed(() => currentIndex.value > 0 ? projects[currentIndex.value - 1] : null)
const nextProject = computed(() => currentIndex.value < projects.length - 1 ? projects[currentIndex.value + 1] : null)

const scrollProgress = ref(0)

function updateProgress() {
  const total = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = total > 0 ? (window.scrollY / total) * 100 : 0
}

onMounted(() => window.addEventListener('scroll', updateProgress, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', updateProgress))

function onHeroImgError(e) {
  e.target.closest('.hero-image-col')?.classList.add('img-failed')
}
</script>

<style scoped>
.container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* PROGRESS */
.reading-progress {
  position: fixed;
  top: 0; left: 0;
  height: 3px;
  background: var(--accent);
  z-index: 1000;
  transition: width 0.1s linear;
  pointer-events: none;
}

/* HERO */
.detail-hero {
  padding: 3.5rem 0 4.5rem;
  background: var(--bg);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text3);
  margin-bottom: 3rem;
  transition: color 0.25s, gap 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.back-link:hover { color: var(--accent); gap: 0.8rem; }

.back-arrow-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px; height: 28px;
  border-radius: 50%;
  border: 1px solid var(--border2);
  font-size: 0.9rem;
  transition: border-color 0.25s, background 0.25s, transform 0.25s;
}
.back-link:hover .back-arrow-wrap {
  border-color: var(--accent-line);
  background: var(--accent-soft);
  transform: translateX(-3px);
}

.hero-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4.5rem;
  align-items: start;
}

.hero-meta {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
}
.meta-type {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.meta-pill {
  font-family: var(--font-mono);
  font-size: 0.58rem;
  color: var(--text3);
  padding: 0.2rem 0.65rem;
  border-radius: 100px;
  border: 1px solid var(--border2);
  letter-spacing: 0.06em;
}
.confidential-pill { color: var(--text2); }

.detail-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.8vw, 3.2rem);
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin-bottom: 1.1rem;
}

.detail-summary {
  font-size: 0.92rem;
  color: var(--text2);
  line-height: 1.85;
  font-weight: 300;
  margin-bottom: 2rem;
}

.detail-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.detail-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 400;
  padding: 0.55rem 1.1rem;
  border-radius: 100px;
  border: 1px solid var(--border2);
  background: var(--bg2);
  color: var(--text2);
  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  letter-spacing: 0.02em;
}
.detail-link-btn.primary:hover {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(196, 135, 58, 0.3);
}
.detail-link-btn.secondary:hover {
  background: var(--bg3);
  color: var(--text);
  border-color: var(--border2);
  transform: translateY(-2px);
}

/* Hero image */
.hero-image-col { border-radius: 20px; overflow: hidden; }

.hero-img-frame {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 4/3;
  background: var(--bg3);
  border: 1px solid var(--border);
  transition: box-shadow 0.4s;
}
.hero-img-frame::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 60%, color-mix(in srgb, var(--accent, transparent) 18%, transparent));
  pointer-events: none;
}
.hero-img-frame:hover { box-shadow: var(--shadow-lg); }
.hero-img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.hero-img-frame:hover .hero-img { transform: scale(1.03); }

.hero-no-image {
  border: 1px solid var(--border);
  border-radius: 20px;
  aspect-ratio: 4/3;
  display: flex;
  align-items: center;
  justify-content: center;
}
.no-image-content { display: flex; flex-direction: column; align-items: center; gap: 1.25rem; }
.no-image-lines { display: flex; flex-direction: column; gap: 8px; width: 80px; }
.ni-line { display: block; height: 2px; border-radius: 2px; opacity: 0.3; width: 100%; }
.ni-short { width: 70%; }
.ni-shorter { width: 45%; }
.no-image-label {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0.55;
}

/* STACK BANNER */
.stack-banner {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 1.1rem 0;
  background: var(--bg2);
}
.stack-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.stack-label {
  font-family: var(--font-mono);
  font-size: 0.58rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  flex-shrink: 0;
}
.stack-tags { display: flex; flex-wrap: wrap; gap: 6px; flex: 1; }
.stack-tag {
  font-family: var(--font-mono);
  font-size: 0.58rem;
  padding: 0.22rem 0.7rem;
  border-radius: 100px;
  background: var(--bg3);
  color: var(--text2);
  border: 1px solid var(--border);
  letter-spacing: 0.04em;
  cursor: default;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.stack-tag:hover {
  background: var(--accent-soft);
  color: var(--accent);
  border-color: var(--accent-line);
}
.stack-period {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  color: var(--text3);
  flex-shrink: 0;
}

/* DETAIL GRID */
.section { padding: 4.5rem 0 6rem; }
.detail-grid {
  display: grid;
  grid-template-columns: 1fr 240px;
  gap: 5rem;
  align-items: start;
}

.detail-main {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.detail-block { display: flex; flex-direction: column; gap: 1.5rem; }

.block-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}
.block-num {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.1em;
}
.block-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.02em;
}
.block-text {
  font-size: 0.9rem;
  color: var(--text2);
  line-height: 1.95;
  font-weight: 300;
}

/* INLINE IMAGE */
.inline-image {
  border-radius: 16px;
  overflow: hidden;
  background: var(--bg3);
  border: 1px solid var(--border);
  transition: box-shadow 0.3s;
}
.inline-image:hover { box-shadow: var(--shadow-lg); }
.inline-img {
  width: 100%; display: block;
  object-fit: cover;
  max-height: 480px;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.inline-image:hover .inline-img { transform: scale(1.02); }

/* PROCESO */
.process-steps { display: flex; flex-direction: column; gap: 0; }

.process-step {
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  gap: 1.25rem;
  padding: 1.5rem 0.75rem 1.5rem 0;
  border-bottom: 1px solid var(--border);
  border-radius: 8px;
  position: relative;
  transition: background 0.2s, padding-left 0.2s;
}
.process-step:first-child { border-top: 1px solid var(--border); }
.process-step:hover { background: var(--hover-bg); padding-left: 0.75rem; }

.step-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  padding-top: 2px;
}
.step-num {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  flex-shrink: 0;
}
.step-line {
  width: 1px;
  flex: 1;
  min-height: 12px;
  margin-top: 6px;
}
.step-text {
  font-size: 0.88rem;
  color: var(--text2);
  line-height: 1.85;
  font-weight: 300;
}

/* APRENDIZAJE */
.learning-quote {
  position: relative;
  padding: 2rem 2rem 2rem 2.5rem;
  background: var(--bg2);
  border-radius: 16px;
  font-size: 0.95rem;
  color: var(--text2);
  line-height: 1.95;
  font-weight: 300;
  font-style: italic;
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent, var(--text3));
}
.quote-mark {
  font-family: var(--font-display);
  font-size: 3rem;
  line-height: 0.5;
  display: block;
  margin-bottom: 1rem;
  opacity: 0.6;
}

/* SIDEBAR */
.detail-sidebar {
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sidebar-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.5rem;
}

.sidebar-meta {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
}

.sidebar-label {
  font-family: var(--font-mono);
  font-size: 0.56rem;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.85rem;
}

.sidebar-value {
  font-size: 0.82rem;
  color: var(--text);
  font-weight: 400;
}

.sidebar-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.stack-tag-sm {
  font-family: var(--font-mono);
  font-size: 0.56rem;
  font-weight: 400;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
  background: var(--bg3);
  color: var(--text2);
  border: 1px solid var(--border);
  letter-spacing: 0.04em;
}

.highlights-list { list-style: none; display: flex; flex-direction: column; gap: 0.75rem; }

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.8rem;
  color: var(--text2);
  font-weight: 300;
  line-height: 1.55;
  padding: 0.4rem 0.5rem;
  border-radius: 8px;
  transition: background 0.2s;
}
.highlight-item:hover { background: var(--hover-bg); }

.highlight-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 5px;
  opacity: 0.7;
  transition: opacity 0.2s, transform 0.2s;
}
.highlight-item:hover .highlight-dot { opacity: 1; transform: scale(1.3); }

.sidebar-row {
  padding: 0.85rem 1.5rem;
  border-bottom: 1px solid var(--border);
}
.sidebar-row:last-child { border-bottom: none; }
.sidebar-row .sidebar-label { margin-bottom: 0.3rem; }

.confidential-note {
  background: var(--accent-soft);
  border: 1px solid var(--accent-line);
  border-radius: 12px;
  padding: 1.25rem;
}
.confidential-note .sidebar-label { margin-bottom: 0.5rem; }
.confidential-text {
  font-size: 0.75rem;
  color: var(--text2);
  line-height: 1.75;
  font-weight: 300;
}

/* NAV */
.nav-projects { padding: 3rem 0 4rem; }
.nav-projects-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-proj-link {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 1rem 1.25rem;
  border-radius: 14px;
  border: 1px solid var(--border);
  transition: background 0.2s, border-color 0.2s, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  max-width: 280px;
}
.nav-proj-link:hover {
  background: var(--accent-soft);
  border-color: var(--accent-line);
  transform: translateY(-3px);
}
.nav-proj-link.right { text-align: right; }

.nav-proj-dir {
  font-family: var(--font-mono);
  font-size: 0.58rem;
  color: var(--accent);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.nav-proj-name {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.02em;
}

/* 404 */
.not-found { padding: 8rem 0; text-align: center; }
.not-found h1 {
  font-family: var(--font-display);
  font-size: 6rem;
  font-weight: 700;
  color: var(--border2);
  letter-spacing: -0.05em;
}
.not-found p { font-size: 1rem; color: var(--text2); margin: 1rem 0 2rem; }

.link-line {
  position: relative;
  display: inline-block;
  font-size: 0.82rem;
  color: var(--text2);
  padding-bottom: 2px;
  transition: color 0.2s;
}
.link-line::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 100%; height: 1px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.link-line:hover { color: var(--accent); }
.link-line:hover::after { transform: scaleX(1); }

/* RESPONSIVE */
@media (max-width: 860px) {
  .hero-layout { grid-template-columns: 1fr; gap: 2rem; }
  .hero-no-image { display: none; }
  .detail-grid { grid-template-columns: 1fr; gap: 3.5rem; }
  .detail-sidebar { position: static; }
  .nav-projects-inner { flex-direction: column; gap: 1rem; align-items: stretch; }
  .nav-proj-link.right { text-align: left; }
}
</style>