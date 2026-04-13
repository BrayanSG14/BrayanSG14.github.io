<template>
  <Layout>

    <!-- HERO EDITORIAL -->
    <section class="projects-hero">
      <div class="hero-bg-text" aria-hidden="true">Work</div>
      <div class="container">
        <div class="hero-inner">
          <div class="hero-left">
            <p class="eyebrow animate-up">{{ lang === 'es' ? 'Trabajo' : 'Work' }}</p>
            <h1 class="page-title animate-up animate-up-d1">
              {{ lang === 'es' ? 'Proyectos' : 'Projects' }}
            </h1>
          </div>
          <div class="hero-right animate-up animate-up-d2">
            <p class="page-sub">
              {{
                lang === 'es'
                  ? 'Cada proyecto tiene una historia. Aquí cuento la mía: el problema, las decisiones, los errores y lo que aprendí.'
                  : 'Every project has a story. Here I tell mine: the problem, the decisions, the mistakes and what I learned.'
              }}
            </p>
            <div class="filters">
              <button
                v-for="f in filters"
                :key="f.id"
                class="filter-btn"
                :class="{ active: activeFilter === f.id }"
                @click="activeFilter = f.id"
              >
                {{ lang === 'es' ? f.labelEs : f.labelEn }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider container"></div>

    <!-- PROYECTOS DESTACADOS -->
    <section class="section projects-section">
      <div class="container">

        <div class="featured-list">
          <RouterLink
            v-for="(p, index) in filteredFeatured"
            :key="p.id"
            :to="`/proyectos/${p.id}`"
            class="featured-row reveal"
            :class="{ 'row-reverse': index % 2 !== 0 }"
          >
            <div class="row-index">
              <span class="row-num">{{ String(index + 1).padStart(2, '0') }}</span>
            </div>

            <!-- IMAGEN -->
            <div class="row-visual">
              <div class="visual-frame" :style="{ '--accent': p.color }">
                <img
                  v-if="p.hasImages && p.images && p.images.length"
                  :src="p.images[0]"
                  :alt="p.name"
                  class="visual-img"
                  @error="onImgError($event, p)"
                />
                <div v-else class="visual-placeholder">
                  <div class="placeholder-inner" :style="{ background: `${p.color}10` }">
                    <div class="placeholder-pattern"></div>
                    <div class="placeholder-content">
                      <div class="placeholder-lines">
                        <span class="ph-line ph-l1" :style="{ background: p.color }"></span>
                        <span class="ph-line ph-l2" :style="{ background: p.color }"></span>
                        <span class="ph-line ph-l3" :style="{ background: p.color }"></span>
                      </div>
                      <p class="placeholder-label" :style="{ color: p.color }">
                        {{ p.confidential
                            ? (lang === 'es' ? 'Confidencial' : 'Confidential')
                            : (lang === 'es' ? 'Sin imágenes' : 'No images') }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="frame-overlay" :style="{ '--c': p.color }"></div>
                <div v-if="p.confidential" class="badge badge-confidential">
                  <span class="badge-dot"></span>
                  {{ lang === 'es' ? 'Confidencial' : 'Confidential' }}
                </div>
                <div v-if="p.company" class="badge badge-company">{{ p.company }}</div>
              </div>
            </div>

            <!-- CONTENIDO -->
            <div class="row-content">
              <div class="row-meta">
                <span class="meta-type" :style="{ color: p.color }">
                  {{ lang === 'es' ? p.typeLabel.es : p.typeLabel.en }}
                </span>
                <span class="meta-sep">·</span>
                <span class="meta-period">{{ lang === 'es' ? p.period.es : p.period.en }}</span>
              </div>

              <h2 class="row-title">{{ p.name }}</h2>
              <p class="row-summary">{{ lang === 'es' ? p.summary.es : p.summary.en }}</p>

              <div class="row-stack">
                <span v-for="s in p.stack.slice(0, 4)" :key="s" class="stack-tag">{{ s }}</span>
                <span v-if="p.stack.length > 4" class="stack-tag muted">+{{ p.stack.length - 4 }}</span>
              </div>

              <div class="row-cta">
                <span class="cta-text">{{ lang === 'es' ? 'Ver caso completo' : 'View full case' }}</span>
                <span class="cta-arrow-wrap">
                  <span class="cta-arrow">→</span>
                </span>
              </div>
            </div>
          </RouterLink>
        </div>

        <!-- OTROS PROYECTOS -->
        <div v-if="filteredOthers.length" class="others-section">
          <div class="others-header reveal">
            <p class="eyebrow">{{ lang === 'es' ? 'Otros proyectos' : 'Other projects' }}</p>
            <div class="others-line"></div>
          </div>
          <div class="others-list">
            <RouterLink
              v-for="(p, idx) in filteredOthers"
              :key="p.id"
              :to="`/proyectos/${p.id}`"
              class="other-row reveal"
              :class="`reveal-d${(idx % 3) + 1}`"
            >
              <div class="other-accent" :style="{ background: p.color }"></div>
              <div class="other-main">
                <div class="other-header-row">
                  <span class="other-type" :style="{ color: p.color }">
                    {{ lang === 'es' ? p.typeLabel.es : p.typeLabel.en }}
                  </span>
                  <span class="other-period">{{ lang === 'es' ? p.period.es : p.period.en }}</span>
                </div>
                <h3 class="other-name">{{ p.name }}</h3>
                <p class="other-summary">{{ lang === 'es' ? p.summary.es : p.summary.en }}</p>
              </div>
              <div class="other-stack-col">
                <span v-for="s in p.stack.slice(0, 3)" :key="s" class="stack-tag">{{ s }}</span>
              </div>
              <div class="other-arrow">→</div>
            </RouterLink>
          </div>
        </div>

      </div>
    </section>

  </Layout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import Layout from '../components/Layout.vue'
import { useLang } from '../composables/useLang'
import { useScrollReveal } from '../composables/useScrollReveal'
import { projects } from '../data/projects'

const { lang } = useLang()
const activeFilter = ref('all')

useScrollReveal()

const filters = [
  { id: 'all',    labelEs: 'Todos',   labelEn: 'All' },
  { id: 'web',    labelEs: 'Web',     labelEn: 'Web' },
  { id: 'mobile', labelEs: 'Móvil',   labelEn: 'Mobile' },
]

const filtered = computed(() =>
  activeFilter.value === 'all'
    ? projects
    : projects.filter(p => p.type === activeFilter.value)
)

const filteredFeatured = computed(() => filtered.value.filter(p => p.featured))
const filteredOthers   = computed(() => filtered.value.filter(p => !p.featured))

function onImgError(e, project) {
  e.target.style.display = 'none'
  const frame = e.target.closest('.visual-frame')
  if (frame) frame.classList.add('img-failed')
}
</script>

<style scoped>
.container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ── HERO ── */
.projects-hero {
  padding: 6rem 0 4rem;
  background: var(--bg);
  position: relative;
  overflow: hidden;
}

.hero-bg-text {
  position: absolute;
  font-family: var(--font-display);
  font-size: clamp(10rem, 20vw, 18rem);
  font-weight: 700;
  color: var(--border);
  top: 50%;
  right: -2rem;
  transform: translateY(-50%);
  pointer-events: none;
  line-height: 1;
  letter-spacing: -0.05em;
  user-select: none;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: end;
  position: relative;
  z-index: 1;
}

.page-title {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 8vw, 7rem);
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.04em;
  line-height: 0.95;
  margin-bottom: 0;
}

.page-sub {
  font-size: 0.9rem;
  color: var(--text2);
  line-height: 1.85;
  font-weight: 300;
  margin-bottom: 1.75rem;
}

/* ── FILTROS ── */
.filters {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.filter-btn {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 400;
  padding: 0.4rem 1rem;
  border-radius: 100px;
  border: 1px solid var(--border2);
  background: transparent;
  color: var(--text2);
  cursor: none;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
}
.filter-btn:hover { color: var(--accent); border-color: var(--accent-line); background: var(--accent-soft); }
.filter-btn.active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}

/* ── PROJECTS SECTION ── */
.projects-section { padding: 4rem 0 7rem; }

/* ── FEATURED LIST ── */
.featured-list {
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
}

.featured-row {
  display: grid;
  grid-template-columns: 48px 1fr 1fr;
  gap: 2.5rem;
  padding: 4rem 0;
  border-top: 1px solid var(--border);
  text-decoration: none;
  color: inherit;
  align-items: center;
  position: relative;
  transition: background 0.3s;
}
.featured-row:last-child { border-bottom: 1px solid var(--border); }
.featured-row::after {
  content: '';
  position: absolute;
  bottom: -1px; left: 0;
  width: 0; height: 2px;
  background: var(--accent);
  transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.featured-row:hover::after { width: 100%; }

.row-index {
  display: flex;
  align-items: flex-start;
  padding-top: 4px;
}
.row-num {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text3);
  letter-spacing: 0.08em;
  transition: color 0.2s;
}
.featured-row:hover .row-num { color: var(--accent); }

.featured-row.row-reverse { direction: rtl; }
.featured-row.row-reverse > * { direction: ltr; }

/* ── VISUAL ── */
.visual-frame {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background: var(--bg3);
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              box-shadow 0.5s;
}
.featured-row:hover .visual-frame {
  transform: scale(1.025) rotate(-0.5deg);
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
}

.visual-img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.featured-row:hover .visual-img { transform: scale(1.06); }

.frame-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent 50%, color-mix(in srgb, var(--c, transparent) 20%, transparent));
  opacity: 0;
  transition: opacity 0.4s;
}
.featured-row:hover .frame-overlay { opacity: 1; }

.visual-placeholder { position: absolute; inset: 0; }
.placeholder-inner {
  width: 100%; height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.placeholder-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, var(--border2) 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.4;
}
.placeholder-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}
.placeholder-lines { display: flex; flex-direction: column; gap: 8px; width: 80px; }
.ph-line { display: block; height: 2px; border-radius: 2px; opacity: 0.35; }
.ph-l1 { width: 100%; }
.ph-l2 { width: 70%; }
.ph-l3 { width: 45%; }
.placeholder-label {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0.55;
}

.badge {
  position: absolute;
  font-family: var(--font-mono);
  font-size: 0.55rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.3rem 0.75rem;
  border-radius: 100px;
  backdrop-filter: blur(8px);
}
.badge-confidential {
  top: 1rem; right: 1rem;
  background: rgba(0, 0, 0, 0.45);
  color: rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.badge-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }
.badge-company {
  bottom: 1rem; left: 1rem;
  background: rgba(255, 255, 255, 0.18);
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255,255,255,0.25);
}

/* ── ROW CONTENT ── */
.row-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0;
}

.row-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.85rem;
}
.meta-type {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.meta-sep { color: var(--text3); font-size: 0.65rem; }
.meta-period {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  color: var(--text3);
}

.row-title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 2.8vw, 2.2rem);
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 1rem;
  transition: color 0.2s;
}
.featured-row:hover .row-title { color: var(--accent); }

.row-summary {
  font-size: 0.86rem;
  color: var(--text2);
  line-height: 1.85;
  font-weight: 300;
  margin-bottom: 1.5rem;
}

.row-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 1.75rem;
}
.stack-tag {
  font-family: var(--font-mono);
  font-size: 0.58rem;
  font-weight: 400;
  padding: 0.22rem 0.7rem;
  border-radius: 100px;
  background: var(--bg3);
  color: var(--text2);
  border: 1px solid var(--border);
  letter-spacing: 0.04em;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.featured-row:hover .stack-tag {
  background: var(--accent-soft);
  color: var(--accent);
  border-color: var(--accent-line);
}
.stack-tag.muted { color: var(--text3); }

.row-cta {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.8rem;
  color: var(--text3);
  transition: color 0.2s;
}
.cta-arrow-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px; height: 28px;
  border-radius: 50%;
  border: 1px solid var(--border2);
  transition: background 0.3s, border-color 0.3s, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.featured-row:hover .row-cta { color: var(--accent); }
.featured-row:hover .cta-arrow-wrap {
  background: var(--accent);
  border-color: var(--accent);
  transform: translateX(4px) rotate(-45deg);
}
.cta-arrow { font-size: 0.8rem; color: inherit; }
.featured-row:hover .cta-arrow { color: #fff; }

/* ── OTROS PROYECTOS ── */
.others-section { margin-top: 1rem; }
.others-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
}
.others-line { flex: 1; height: 1px; background: var(--border); }

.others-list { display: flex; flex-direction: column; }

.other-row {
  display: grid;
  grid-template-columns: 4px 1fr auto 2rem;
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem 0.75rem;
  border-bottom: 1px solid var(--border);
  text-decoration: none;
  color: inherit;
  border-radius: 8px;
  transition: background 0.2s, padding-left 0.2s;
}
.other-row:first-child { border-top: 1px solid var(--border); }
.other-row:hover { background: var(--hover-bg); padding-left: 1.25rem; }

.other-accent {
  width: 4px; height: 2rem;
  border-radius: 2px;
  flex-shrink: 0;
  opacity: 0.35;
  transition: opacity 0.2s, height 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.other-row:hover .other-accent { opacity: 1; height: 2.5rem; }

.other-header-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.3rem;
}
.other-type {
  font-family: var(--font-mono);
  font-size: 0.58rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.other-period {
  font-family: var(--font-mono);
  font-size: 0.58rem;
  color: var(--text3);
}

.other-name {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.02em;
  margin-bottom: 0.3rem;
  transition: color 0.2s;
}
.other-row:hover .other-name { color: var(--accent); }

.other-summary {
  font-size: 0.78rem;
  color: var(--text2);
  line-height: 1.65;
  font-weight: 300;
}

.other-stack-col {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-end;
}

.other-arrow {
  font-size: 0.9rem;
  color: var(--text3);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.2s;
}
.other-row:hover .other-arrow { transform: translateX(5px); color: var(--accent); }

/* ── RESPONSIVE ── */
@media (max-width: 860px) {
  .hero-inner { grid-template-columns: 1fr; gap: 2rem; }
  .hero-bg-text { display: none; }

  .featured-row,
  .featured-row.row-reverse {
    grid-template-columns: 1fr;
    direction: ltr;
    gap: 1.5rem;
  }
  .row-index { display: none; }

  .other-row { grid-template-columns: 4px 1fr 2rem; }
  .other-stack-col { display: none; }
}
</style>