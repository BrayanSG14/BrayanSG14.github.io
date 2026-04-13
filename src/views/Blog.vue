<template>
  <Layout>

    <section class="blog-hero">
      <div class="hero-bg-text" aria-hidden="true">Blog</div>
      <div class="container">
        <p class="eyebrow animate-up">Blog</p>
        <h1 class="page-title animate-up animate-up-d1">
          <span>{{ lang === 'es' ? 'Más allá' : 'Beyond' }}</span>
          <em>{{ lang === 'es' ? ' del código' : ' the code' }}</em>
        </h1>
        <p class="page-sub animate-up animate-up-d2">
          {{
            lang === 'es'
              ? 'Escribo sobre lo que aprendo: decisiones técnicas, errores cometidos y reflexiones del proceso de desarrollo.'
              : 'I write about what I learn: technical decisions, mistakes made and reflections on the development process.'
          }}
        </p>
      </div>
    </section>

    <div class="section-divider container"></div>

    <section class="section">
      <div class="container">

        <!-- POST DESTACADO -->
        <RouterLink :to="`/blog/${featured.id}`" class="featured-post reveal">
          <div class="featured-left">
            <div class="post-meta">
              <span class="post-tag" :style="{ color: featured.tagColor }">
                {{ lang === 'es' ? featured.tag.es : featured.tag.en }}
              </span>
              <span class="meta-dot">·</span>
              <span class="post-date">{{ featured.date }}</span>
              <span class="meta-dot">·</span>
              <span class="post-read">{{ lang === 'es' ? featured.readTime.es : featured.readTime.en }}</span>
            </div>
            <h2 class="featured-title">
              {{ lang === 'es' ? featured.title.es : featured.title.en }}
            </h2>
            <p class="featured-summary">
              {{ lang === 'es' ? featured.summary.es : featured.summary.en }}
            </p>
            <div class="read-link">
              <span class="read-text">{{ lang === 'es' ? 'Leer artículo' : 'Read article' }}</span>
              <span class="read-arrow-wrap">
                <span class="read-arrow">→</span>
              </span>
            </div>
          </div>
          <div class="featured-right" :style="{ '--tag-color': featured.tagColor }">
            <div class="featured-decoration">
              <div class="deco-ring deco-ring-1"></div>
              <div class="deco-ring deco-ring-2"></div>
              <span class="featured-icon"></span>
            </div>
          </div>
        </RouterLink>

        <!-- GRID DE POSTS -->
        <div class="posts-header reveal">
          <p class="eyebrow">{{ lang === 'es' ? 'Todos los artículos' : 'All articles' }}</p>
          <div class="posts-line"></div>
        </div>

        <div class="posts-grid">
          <RouterLink
            v-for="(post, idx) in otherPosts"
            :key="post.id"
            :to="`/blog/${post.id}`"
            class="post-card reveal"
            :class="`reveal-d${(idx % 3) + 1}`"
          >
            <div class="card-color-bar" :style="{ background: post.tagColor }"></div>
            <div class="post-meta">
              <span class="post-tag" :style="{ color: post.tagColor }">
                {{ lang === 'es' ? post.tag.es : post.tag.en }}
              </span>
              <span class="post-date">{{ post.date }}</span>
            </div>
            <h3 class="post-title">
              {{ lang === 'es' ? post.title.es : post.title.en }}
            </h3>
            <p class="post-summary">
              {{ lang === 'es' ? post.summary.es : post.summary.en }}
            </p>
            <div class="post-footer">
              <span class="post-read">
                {{ lang === 'es' ? post.readTime.es : post.readTime.en }}
              </span>
              <span class="post-arrow">→</span>
            </div>
          </RouterLink>
        </div>

      </div>
    </section>

  </Layout>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import Layout from '../components/Layout.vue'
import { useLang } from '../composables/useLang'
import { useScrollReveal } from '../composables/useScrollReveal'
import { posts } from '../data/blog'

const { lang } = useLang()
useScrollReveal()

const featured   = computed(() => posts[0])
const otherPosts = computed(() => posts.slice(1))

const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString(
    lang.value === 'es' ? 'es-MX' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  )
}
</script>

<style scoped>
/* ── HERO ── */
.blog-hero {
  padding: 6rem 0 4rem;
  background: var(--bg);
  position: relative;
  overflow: hidden;
}

.hero-bg-text {
  position: absolute;
  font-family: var(--font-display);
  font-size: clamp(10rem, 22vw, 20rem);
  font-weight: 700;
  color: var(--border);
  top: 50%;
  right: -1rem;
  transform: translateY(-50%);
  pointer-events: none;
  line-height: 1;
  letter-spacing: -0.05em;
  user-select: none;
  font-style: italic;
}

.container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.page-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.04em;
  line-height: 1;
  margin-bottom: 1.25rem;
}
.page-title em {
  font-style: italic;
  color: var(--accent);
  font-weight: 400;
}

.page-sub {
  font-size: 0.95rem;
  color: var(--text2);
  max-width: 520px;
  line-height: 1.8;
  font-weight: 300;
}

.section { padding: 4rem 0 7rem; }

/* ── FEATURED ── */
.featured-post {
  display: grid;
  grid-template-columns: 1fr 300px;
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: 4rem;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              box-shadow 0.4s, border-color 0.3s;
  position: relative;
}
.featured-post::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.featured-post:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-line);
}
.featured-post:hover::before { transform: scaleX(1); }

.featured-left {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}
.post-tag {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.meta-dot { color: var(--text3); font-size: 0.65rem; }
.post-date, .post-read {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  color: var(--text3);
  font-weight: 400;
}

.featured-title {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2.8vw, 2rem);
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.03em;
  line-height: 1.2;
  transition: color 0.2s;
}
.featured-post:hover .featured-title { color: var(--accent); }

.featured-summary {
  font-size: 0.88rem;
  color: var(--text2);
  line-height: 1.8;
  font-weight: 300;
  flex: 1;
}

.read-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: auto;
}
.read-text {
  font-size: 0.78rem;
  color: var(--text2);
  transition: color 0.2s;
}
.featured-post:hover .read-text { color: var(--accent); }

.read-arrow-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px; height: 32px;
  border-radius: 50%;
  border: 1px solid var(--border2);
  transition: background 0.3s, border-color 0.3s, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.featured-post:hover .read-arrow-wrap {
  background: var(--accent);
  border-color: var(--accent);
  transform: translateX(4px) rotate(-45deg);
}
.read-arrow {
  font-size: 0.9rem;
  color: var(--text2);
  transition: color 0.2s;
}
.featured-post:hover .read-arrow { color: #fff; }

.featured-right {
  display: flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, var(--tag-color, var(--accent)) 8%, var(--bg3));
  transition: background 0.4s;
  position: relative;
  overflow: hidden;
}

.featured-decoration {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.deco-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid var(--border2);
}
.deco-ring-1 { width: 120px; height: 120px; opacity: 0.5; }
.deco-ring-2 { width: 180px; height: 180px; opacity: 0.25; }

.featured-icon {
  font-size: 3.5rem;
  position: relative;
  z-index: 1;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.featured-post:hover .featured-icon { transform: scale(1.15) rotate(-6deg); }

/* ── POSTS GRID ── */
.posts-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}
.posts-line { flex: 1; height: 1px; background: var(--border); }

.posts-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.post-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              box-shadow 0.35s, border-color 0.3s;
}

.card-color-bar {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  opacity: 0;
  transition: opacity 0.35s;
}
.post-card:hover .card-color-bar { opacity: 1; }
.post-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--border2);
}

.post-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.02em;
  line-height: 1.25;
  transition: color 0.2s;
}
.post-card:hover .post-title { color: var(--accent); }

.post-summary {
  font-size: 0.8rem;
  color: var(--text2);
  line-height: 1.8;
  font-weight: 300;
  flex: 1;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.25rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.post-arrow {
  font-size: 1rem;
  color: var(--text3);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.2s;
}
.post-card:hover .post-arrow {
  transform: translateX(5px) rotate(-45deg);
  color: var(--accent);
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .featured-post { grid-template-columns: 1fr; }
  .featured-right { display: none; }
  .posts-grid { grid-template-columns: 1fr; }
  .hero-bg-text { display: none; }
}
</style>