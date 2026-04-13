<template>
  <Layout>

    <!-- HERO -->
    <section class="hero" ref="heroSection">
      <div class="hero-blob blob1" ref="blob1Ref"></div>
      <div class="hero-blob blob2" ref="blob2Ref"></div>

      <!-- Decorative grid lines -->
      <div class="hero-grid" aria-hidden="true">
        <span v-for="i in 5" :key="i" class="grid-line"></span>
      </div>

      <div class="hero-inner">
        <!-- Avatar col -->
        <div class="hero-left animate-up">
          <div class="avatar-ring">
            <div class="hero-avatar glass">
              <img src="/src/assets/Img.jpeg" alt="Brayan" />
            </div>
            <!-- Orbit dot -->
            <span class="orbit-dot"></span>
          </div>

          <div class="hero-badge animate-up animate-up-d1">
            <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            Guanajuato, México
          </div>
        </div>

        <!-- Text col -->
        <div class="hero-right">
          <p class="hero-eyebrow animate-up animate-up-d1">
            <span class="eyebrow-line"></span>
            Disponible para proyectos
          </p>

          <h1 class="hero-name animate-up animate-up-d2">
            <span class="name-first">Brayan Josue</span>
            <span class="name-last">Segoviano<em> Garnica</em></span>
          </h1>

          <p class="hero-role animate-up animate-up-d3">{{ t.hero.role }}</p>

          <div class="contact-row animate-up animate-up-d4">
            <a href="https://github.com/" target="_blank" class="c-item">
              <svg class="c-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" class="c-item">
              <svg class="c-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a href="https://wa.me/" target="_blank" class="c-item">
              <svg class="c-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <a href="mailto:tu@email.com" class="c-item">
              <svg class="c-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Correo
            </a>
          </div>
        </div>
      </div>

      <!-- Scroll hint -->
      <div class="scroll-hint animate-up animate-up-d4">
        <div class="scroll-line"></div>
        <span class="scroll-label">scroll</span>
      </div>
    </section>

    <div class="section-divider container"></div>

    <!-- CÓMO TRABAJO -->
    <section class="section">
      <div class="container">
        <p class="eyebrow reveal">{{ t.work.eyebrow }}</p>
        <h2 class="section-title reveal">{{ t.work.title }}</h2>
        <div class="principles-grid">
          <div
            v-for="(p, idx) in t.principles"
            :key="p.num"
            class="p-card reveal"
            :class="`reveal-d${idx + 1}`"
          >
            <div class="p-num-large">{{ p.num }}</div>
            <div class="p-header">
              <div class="p-icon-wrap">
                <svg v-if="idx === 0" class="p-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                <svg v-if="idx === 1" class="p-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                </svg>
                <svg v-if="idx === 2" class="p-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                  <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                </svg>
                <svg v-if="idx === 3" class="p-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
            </div>
            <h3 class="p-title">{{ p.title }}</h3>
            <p class="p-desc">{{ p.desc }}</p>
            <div class="p-accent-bar"></div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider container"></div>

    <!-- HABILIDADES -->
    <section class="section-alt">
      <div class="container">
        <p class="eyebrow reveal">{{ t.skills.eyebrow }}</p>
        <h2 class="section-title reveal">{{ t.skills.title }}</h2>

        <div class="skills-grid">
          <div
            v-for="(cat, idx) in t.skillCategories"
            :key="cat.name"
            class="s-card reveal"
            :class="`reveal-d${idx + 1}`"
          >
            <div class="s-icon-wrap">
              <svg v-if="cat.icon === '🌐'" class="s-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <svg v-if="cat.icon === '📱'" class="s-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                <line x1="12" y1="18" x2="12.01" y2="18"/>
              </svg>
              <svg v-if="cat.icon === '⚡'" class="s-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
            <h3 class="s-name">{{ cat.name }}</h3>
            <p class="s-desc">{{ cat.desc }}</p>
            <div class="s-tags">
              <span v-for="tag in cat.tags" :key="tag" class="s-tag">{{ tag }}</span>
            </div>
          </div>
        </div>

        <!-- HERRAMIENTAS -->
        <div class="tools-section reveal">
          <p class="eyebrow tools-eyebrow">{{ t.skills.tools }}</p>
          <div class="tools-grid">
            <div
              v-for="(tool, idx) in tools"
              :key="tool.name"
              class="tool"
              :style="{ animationDelay: `${idx * 0.04}s` }"
            >
              <div class="tool-logo" :style="{ background: tool.color }">
                <img v-if="tool.img" :src="tool.img" :alt="tool.name" />
                <span v-else class="tool-abbr">{{ tool.abbr }}</span>
              </div>
              {{ tool.name }}
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout>
</template>

<script setup>
import { ref } from 'vue'
import Layout from '../components/Layout.vue'
import { useLang } from '../composables/useLang'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useParallax } from '../composables/useParallax'

const { t } = useLang()

const heroSection = ref(null)
const blob1Ref = ref(null)
const blob2Ref = ref(null)

useScrollReveal()
useParallax(blob1Ref, blob2Ref)

const tools = [
  { name: 'Git',              abbr: 'Gt', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub',           abbr: 'GH', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'HTML',             abbr: 'HT', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'Vue 3',            abbr: 'Vu', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'React',            abbr: 'Re', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind CSS',     abbr: 'Tw', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Python',           abbr: 'Py', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Django',           abbr: 'Dj', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'Node.js',          abbr: 'No', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'GCP',              abbr: 'Gc', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'AWS',              abbr: 'Aw', img: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.png' },
  { name: 'MySQL Workbench',  abbr: 'My', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB',          abbr: 'Mo', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL',       abbr: 'Po', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker',           abbr: 'Do', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Podman',           abbr: 'Po', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/podman/podman-original.svg' },
  { name: 'Microsoft Power Platform', abbr: 'MP', img: 'https://az-icons.com/export/icons/80d8079c293d8a4447ade44c7322b65d.svg' },
]
</script>

<style scoped>
/* ── HERO ── */
.hero {
  min-height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7rem 2rem 5rem;
  position: relative;
  overflow: hidden;
  background: var(--bg);
}

.hero-grid {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  z-index: 0;
  padding: 0 2rem;
}
.grid-line {
  width: 1px;
  background: var(--border);
  height: 100%;
  opacity: 0.5;
}

.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
}
.blob1 {
  width: 500px; height: 500px;
  background: var(--blob1);
  top: -100px; left: -100px;
}
.blob2 {
  width: 400px; height: 400px;
  background: var(--blob2);
  bottom: -80px; right: -80px;
}

.hero-inner {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 5rem;
  align-items: center;
  max-width: 1080px;
  width: 100%;
  position: relative;
  z-index: 1;
}

/* Avatar */
.avatar-ring {
  position: relative;
  width: 180px;
  height: 180px;
  flex-shrink: 0;
}

.hero-avatar {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--accent-line);
  position: relative;
  z-index: 1;
}

.hero-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.orbit-dot {
  position: absolute;
  width: 14px;
  height: 14px;
  background: var(--accent);
  border-radius: 50%;
  border: 3px solid var(--bg);
  top: 10px;
  right: 0;
  animation: orbitPulse 2.5s ease-in-out infinite;
}

@keyframes orbitPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(58, 97, 196, 0.5); }
  50% { box-shadow: 0 0 0 6px rgba(196, 135, 58, 0); }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  color: var(--text2);
  background: var(--bg3);
  border: 1px solid var(--border2);
  border-radius: 100px;
  padding: 0.35rem 0.85rem;
  margin-top: 1.25rem;
}

.badge-icon {
  width: 11px;
  height: 11px;
  color: var(--accent);
  flex-shrink: 0;
}

/* Hero text */
.hero-right { display: flex; flex-direction: column; gap: 0; }

.hero-eyebrow {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}
.eyebrow-line {
  display: inline-block;
  width: 28px;
  height: 1px;
  background: var(--accent);
}

.hero-name {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 5.5vw, 4.5rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin-bottom: 1rem;
  color: var(--text);
  display: flex;
  flex-direction: column;
}
.name-first { display: block; }
.name-last { display: block; color: var(--text); }
.name-last em {
  font-style: italic;
  color: var(--accent);
  font-weight: 400;
}

.hero-role {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--text2);
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 480px;
}

/* Contact */
.contact-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.c-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  font-weight: 400;
  color: var(--text2);
  background: var(--bg2);
  border: 1px solid var(--border2);
  border-radius: 100px;
  padding: 0.5rem 1.1rem 0.5rem 0.85rem;
  transition: border-color 0.25s, color 0.25s, background 0.25s,
              transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.25s;
}
.c-item:hover {
  color: var(--accent);
  border-color: var(--accent-line);
  background: var(--accent-soft);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(58, 125, 196, 0.15);
}
.c-icon {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  color: inherit;
}

/* Scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, var(--accent), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}
@keyframes scrollPulse {
  0% { opacity: 0; transform: scaleY(0); transform-origin: top; }
  50% { opacity: 1; transform: scaleY(1); }
  100% { opacity: 0; transform: scaleY(1); }
}
.scroll-label {
  font-family: var(--font-mono);
  font-size: 0.55rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text3);
}

/* ── PRINCIPLES ── */
.principles-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
}

.p-card {
  background: var(--bg);
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: background 0.3s;
}
.p-card:hover { background: var(--bg2); }

.p-num-large {
  font-family: var(--font-display);
  font-size: 4rem;
  font-weight: 700;
  color: var(--border2);
  line-height: 1;
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  pointer-events: none;
  transition: color 0.3s;
}
.p-card:hover .p-num-large { color: var(--accent-soft); }

.p-header {
  margin-bottom: 1.25rem;
}

.p-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--accent-soft);
  border: 1px solid var(--accent-line);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.p-card:hover .p-icon-wrap { transform: rotate(-6deg) scale(1.08); }

.p-icon {
  width: 18px;
  height: 18px;
  color: var(--accent);
}

.p-title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.6rem;
  letter-spacing: -0.01em;
}

.p-desc {
  font-size: 0.85rem;
  color: var(--text2);
  line-height: 1.8;
  font-weight: 300;
}

.p-accent-bar {
  position: absolute;
  bottom: 0; left: 0;
  height: 2px;
  width: 0;
  background: var(--accent);
  transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.p-card:hover .p-accent-bar { width: 100%; }

/* ── SKILLS ── */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 4rem;
}

.s-card {
  background: transparent;
  border: none;
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.35s, border-color 0.3s;
}
.s-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  border-radius: 0;
}
.s-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--card-hover-shadow);
  border-color: var(--accent-line);
}
.s-card:hover::before { transform: scaleX(1); }

.s-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: var(--accent-soft);
  border: 1px solid var(--accent-line);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.s-card:hover .s-icon-wrap { transform: scale(1.08) rotate(-4deg); }

.s-icon-svg {
  width: 24px; height: 24px;
  color: var(--accent);
}

.s-name {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
}

.s-desc {
  font-size: 0.78rem;
  color: var(--text2);
  line-height: 1.7;
  font-weight: 300;
  margin-bottom: 1.5rem;
}

.s-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.s-tag {
  font-family: var(--font-mono);
  font-size: 0.58rem;
  font-weight: 400;
  padding: 0.25rem 0.7rem;
  border-radius: 100px;
  background: var(--bg3);
  color: var(--text2);
  border: 1px solid var(--border);
  letter-spacing: 0.04em;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.s-card:hover .s-tag {
  background: var(--accent-soft);
  color: var(--accent);
  border-color: var(--accent-line);
}

/* ── TOOLS ── */
.tools-section { }
.tools-eyebrow { margin-bottom: 1.5rem; }

.tools-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tool {
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  padding: 0.45rem 1.1rem 0.45rem 0.5rem;
  font-size: 0.78rem;
  font-weight: 400;
  color: var(--text2);
  background: transparent;
  border: none;
  cursor: default;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
              color 0.2s, border-color 0.2s, box-shadow 0.2s, background 0.2s;
}
.tool:hover {
  transform: translateY(-3px);
  color: var(--accent);
  border-color: var(--accent-line);
  background: var(--accent-soft);
  box-shadow: 0 4px 16px rgba(58, 65, 196, 0.12);
}

.tool-logo {
  width: 24px; height: 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
}
.tool-logo img {
  width: 100%; height: 100%;
  object-fit: contain;
}
.tool-abbr {
  font-size: 0.55rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.02em;
}

/* ── RESPONSIVE ── */
@media (max-width: 860px) {
  .hero-inner { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
  .hero-eyebrow, .contact-row { justify-content: center; }
  .hero-role { max-width: 100%; }
  .avatar-ring { margin: 0 auto; }
  .principles-grid { grid-template-columns: 1fr; gap: 1px; }
  .skills-grid { grid-template-columns: 1fr; }
  .scroll-hint { display: none; }
}
</style>    