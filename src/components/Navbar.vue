<template>
  <div class="nav-wrap">
    <nav class="navbar" :class="{ scrolled: isScrolled }">

      <RouterLink to="/" class="nav-logo">
        Brayan Segoviano
      </RouterLink>

      <div class="nav-sep"></div>

      <ul class="nav-links" :class="{ open: menuOpen }">
        <li>
          <RouterLink to="/proyectos" class="nav-link" :class="{ active: route.path.startsWith('/proyectos') }" @click="menuOpen = false">
            {{ t.nav.projects }}
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/blog" class="nav-link" :class="{ active: route.path.startsWith('/blog') }" @click="menuOpen = false">
            {{ t.nav.blog }}
          </RouterLink>
        </li>
      </ul>

      <div class="nav-sep"></div>

      <div class="nav-controls">
        <button class="ctrl-lang" @click="toggleLang">
          <span class="lang-flag">{{ lang === 'es' ? '🇲🇽' : '🇺🇸' }}</span>
          {{ lang.toUpperCase() }}
        </button>
        <button class="ctrl-theme" @click="toggleTheme" :title="isDark ? 'Modo claro' : 'Modo oscuro'" :aria-label="isDark ? 'Modo claro' : 'Modo oscuro'">
          <svg v-if="isDark" class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg v-else class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>
      </div>

      <button class="nav-hamburger" @click="menuOpen = !menuOpen" :class="{ open: menuOpen }" aria-label="Menu">
        <span></span><span></span>
      </button>

    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useTheme } from '../composables/useTheme'
import { useLang } from '../composables/useLang'

const route = useRoute()
const { isDark, toggleTheme } = useTheme()
const { lang, t, toggleLang } = useLang()
const menuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>

.nav-wrap {
  display: flex;
  justify-content: center;
  padding: 1.25rem 2rem 0;
  position: sticky;
  top: 1.25rem;
  z-index: 100;
  pointer-events: none;
  isolation: isolate; /* ← AGREGAR */
}

/* ─── GLASS REALISTA – TEMA CLARO ─── */
/* En claro: pill blanca-translúcida con reflejos oscuros sutiles */
.navbar {
  pointer-events: all;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.45rem 0.6rem;
  border-radius: 100px;

  /* Espejo de agua en fondo claro: blanco muy translúcido + ruido */
  background:
    linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.1) 100%,
      rgba(255, 255, 255, 0.48) 50%,
      rgba(230, 235, 245, 0.58) 100%
    );
  backdrop-filter: blur(6px) saturate(200%) brightness(1.06);
  -webkit-backdrop-filter: blur(28px) saturate(200%) brightness(1.06);
  transform: translateZ(0);      /* ← AGREGAR */
  will-change: backdrop-filter;  /* ← AGREGAR */
  
  /* Sombra interna de reflejo + sombra externa suave */
  box-shadow:
    inset 0 1px 0 rgba(0, 0, 0, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.05),
    0 8px 32px rgba(0, 0, 0, 0.14),
    0 2px 6px rgba(0, 0, 0, 0.10);

  transition:
    background 0.4s,
    border-color 0.4s,
    box-shadow 0.4s,
    backdrop-filter 0.4s;
}

/* ─── GLASS REALISTA – TEMA OSCURO ─── */
/* En oscuro: pill negra-translúcida con reflejos claros vivos */
[data-theme="dark"] .navbar {
  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.10) 0%,
      rgba(255, 255, 255, 0.04) 40%,
      rgba(200, 210, 255, 0.06) 100%
    );
  backdrop-filter: blur(32px) saturate(180%) brightness(0.9);
  -webkit-backdrop-filter: blur(32px) saturate(180%) brightness(0.9);

  /* Borde espejo oscuro: línea clara viva arriba, oscura abajo */
  border-top: 1px solid rgba(255, 255, 255, 0.30);
  border-left: 1px solid rgba(255, 255, 255, 0.14);
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);

  /* Reflejo interno blanco brillante arriba + sombra profunda externa */
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.22),
    inset 0 -1px 0 rgba(0, 0, 0, 0.5),
    inset 1px 0 0 rgba(255, 255, 255, 0.08),
    0 8px 32px rgba(0, 0, 0, 0.55),
    0 2px 6px rgba(0, 0, 0, 0.4);
}

/* scrolled: más opaco y sombra más pronunciada */
.navbar.scrolled {
  background:
    linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.1) 100%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.98),
    inset 0 -1px 0 rgba(0, 0, 0, 0.05),
    0 8px 32px rgba(0, 0, 0, 0.38),
    0 2px 6px rgba(0, 0, 0, 0.13);
}

[data-theme="dark"] .navbar.scrolled {
  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.13) 0%,
      rgba(255, 255, 255, 0.06) 40%,
      rgba(160, 180, 255, 0.08) 100%
    );
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.28),
    inset 0 -1px 0 rgba(0, 0, 0, 0.7),
    0 5px 35px rgba(255, 255, 255, 0.38),
    0 2px 5px rgba(255, 255, 255, 0.13);
}

/* ─── LOGO ─── */
.nav-logo {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.02em;
  padding: 0.4rem 0.75rem;
  white-space: nowrap;
}

/* ─── SEPARADOR ─── */
.nav-sep {
  width: 1px;
  height: 16px;
  background: linear-gradient(
    to bottom,
    transparent,
    var(--border2) 30%,
    var(--border2) 70%,
    transparent
  );
  margin: 0 0.2rem;
  flex-shrink: 0;
}

/* ─── LINKS ─── */
.nav-links {
  display: flex;
  list-style: none;
  gap: 0.1rem;
}

.nav-link {
  display: block;
  font-size: 0.78rem;
  font-weight: 400;
  color: var(--text2);
  padding: 0.4rem 0.85rem;
  border-radius: 100px;
  transition: background 0.2s, color 0.2s;
  white-space: nowrap;
}

.nav-link:hover,
.nav-link.active {
  background: rgba(0, 0, 0, 0.06);
  color: var(--text);
}

[data-theme="dark"] .nav-link:hover,
[data-theme="dark"] .nav-link.active {
  background: rgba(255, 255, 255, 0.10);
  color: var(--text);
}

/* ─── CONTROLES ─── */
.nav-controls {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding-left: 0.2rem;
}

/* Botón lang – cristal pequeño */
.ctrl-lang {
  font-family: 'Inter', sans-serif;
  font-size: 0.68rem;
  font-weight: 500;
  color: var(--text2);
  background: rgba(0, 0, 0, 0.055);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 100px;
  padding: 0.33rem 0.6rem;
  cursor: pointer;
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  transition: background 0.18s, color 0.18s, border-color 0.18s;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.7),
    0 1px 2px rgba(0, 0, 0, 0.06);
}

.ctrl-lang:hover {
  background: rgba(0, 0, 0, 0.09);
  color: var(--text);
}

[data-theme="dark"] .ctrl-lang {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.10);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.3);
}

[data-theme="dark"] .ctrl-lang:hover {
  background: rgba(255, 255, 255, 0.13);
}

.lang-flag { font-size: 0.75rem; line-height: 1; }

/* Botón tema – círculo espejo */
.ctrl-theme {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.055);
  border: 1px solid rgba(0, 0, 0, 0.08);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text2);
  flex-shrink: 0;
  transition: background 0.18s, color 0.18s, transform 0.2s, border-color 0.18s;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.7),
    0 1px 2px rgba(0, 0, 0, 0.06);
}

.ctrl-theme:hover {
  background: rgba(0, 0, 0, 0.09);
  color: var(--text);
  transform: rotate(15deg);
}

[data-theme="dark"] .ctrl-theme {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.10);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.3);
}

[data-theme="dark"] .ctrl-theme:hover {
  background: rgba(255, 255, 255, 0.13);
  transform: rotate(-15deg);
}

.theme-icon {
  width: 13px;
  height: 13px;
  flex-shrink: 0;
}

/* ─── HAMBURGER ─── */
.nav-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.4rem 0.6rem;
}

.nav-hamburger span {
  display: block;
  width: 18px;
  height: 1.5px;
  background: var(--text);
  transition: transform 0.3s, opacity 0.3s;
}

.nav-hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.nav-hamburger.open span:nth-child(2) { transform: translateY(-6.5px) rotate(-45deg); }

@media (max-width: 640px) {
  .nav-wrap { top: 0.75rem; }
  .nav-hamburger { display: flex; }
  .nav-sep:first-of-type { display: none; }

  .nav-links {
    display: none;
    position: fixed;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: column;
    /* Glass mobile menú – mismo tratamiento */
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(28px) saturate(200%);
    -webkit-backdrop-filter: blur(28px) saturate(200%);
    transform: translateZ(0);
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    border-left: 1px solid rgba(0, 0, 0, 0.08);
    border-right: 1px solid rgba(0, 0, 0, 0.04);
    border-bottom: 1px solid rgba(255, 255, 255, 0.9);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.95),
      0 8px 32px rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    padding: 0.5rem;
    min-width: 160px;
  }

  [data-theme="dark"] .nav-links {
    background: rgba(20, 20, 30, 0.65);
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.18),
      0 12px 40px rgba(0, 0, 0, 0.6);
  }

  .nav-links.open { display: flex; }

  .nav-link {
    text-align: center;
    padding: 0.6rem 1rem;
    border-radius: 12px;
  }
}
</style>