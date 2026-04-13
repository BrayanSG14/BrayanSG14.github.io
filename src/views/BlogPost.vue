<template>
  <Layout>
    <div v-if="post">

      <!-- READING PROGRESS BAR -->
      <div class="reading-progress" :style="{ width: readingProgress + '%' }"></div>

      <!-- HERO -->
      <section class="post-hero">
        <div class="container">
          <RouterLink to="/blog" class="back-link animate-up">
            <span class="back-arrow-wrap">←</span>
            Blog
          </RouterLink>

          <div class="post-meta animate-up animate-up-d1">
            <span class="post-tag" :style="{ color: post.tagColor, borderColor: post.tagColor + '40', background: post.tagColor + '12' }">
              {{ lang === 'es' ? post.tag.es : post.tag.en }}
            </span>
            <span class="meta-dot">·</span>
            <span class="post-date">{{ formatDate(post.date) }}</span>
            <span class="meta-dot">·</span>
            <span class="post-read">{{ lang === 'es' ? post.readTime.es : post.readTime.en }}</span>
          </div>

          <h1 class="post-title animate-up animate-up-d2">
            {{ lang === 'es' ? post.title.es : post.title.en }}
          </h1>
          <p class="post-summary animate-up animate-up-d3">
            {{ lang === 'es' ? post.summary.es : post.summary.en }}
          </p>
        </div>
      </section>

      <div class="section-divider container"></div>

      <!-- CONTENIDO -->
      <section class="post-body">
        <div class="container post-grid">

          <article class="post-content" ref="articleRef">
            <template v-for="(block, i) in (lang === 'es' ? post.content.es : post.content.en)" :key="i">
              <p v-if="block.type === 'paragraph'" class="content-p reveal">
                {{ block.text }}
              </p>
              <h2 v-else-if="block.type === 'heading'" class="content-h2 reveal">
                {{ block.text }}
              </h2>
              <div v-else-if="block.type === 'code'" class="content-code glass reveal">
                <div class="code-header">
                  <span class="code-dots">
                    <span class="code-dot dot-red"></span>
                    <span class="code-dot dot-amber"></span>
                    <span class="code-dot dot-green"></span>
                  </span>
                  <span class="code-lang">{{ block.lang }}</span>
                </div>
                <pre class="code-pre"><code>{{ block.text }}</code></pre>
              </div>
              <figure v-else-if="block.type === 'image'" class="content-image reveal">
                <img :src="block.src" :alt="block.caption" />
                <figcaption v-if="block.caption">{{ block.caption }}</figcaption>
              </figure>
            </template>
          </article>

          <!-- SIDEBAR -->
          <aside class="post-sidebar">
            <div class="sidebar-card">
              <p class="sidebar-label">
                {{ lang === 'es' ? 'Sobre este artículo' : 'About this post' }}
              </p>
              <div class="sidebar-info">
                <div class="info-row">
                  <span class="info-key">{{ lang === 'es' ? 'Publicado' : 'Published' }}</span>
                  <span class="info-val">{{ formatDate(post.date) }}</span>
                </div>
                <div class="info-row">
                  <span class="info-key">{{ lang === 'es' ? 'Lectura' : 'Read time' }}</span>
                  <span class="info-val">{{ lang === 'es' ? post.readTime.es : post.readTime.en }}</span>
                </div>
                <div class="info-row">
                  <span class="info-key">{{ lang === 'es' ? 'Tema' : 'Topic' }}</span>
                  <span class="info-val" :style="{ color: post.tagColor }">
                    {{ lang === 'es' ? post.tag.es : post.tag.en }}
                  </span>
                </div>
              </div>

              <div class="sidebar-progress-wrap">
                <div class="sidebar-progress-header">
                  <p class="sidebar-label" style="margin-bottom: 0;">{{ lang === 'es' ? 'Progreso' : 'Progress' }}</p>
                  <span class="sidebar-progress-pct">{{ Math.round(readingProgress) }}%</span>
                </div>
                <div class="sidebar-progress-track">
                  <div class="sidebar-progress-fill" :style="{ width: readingProgress + '%', background: post.tagColor || 'var(--accent)' }"></div>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </section>

      <!-- NAV POSTS -->
      <div class="section-divider container"></div>
      <section class="nav-posts">
        <div class="container nav-posts-inner">
          <RouterLink v-if="prevPost" :to="`/blog/${prevPost.id}`" class="nav-post-link">
            <span class="nav-dir">← {{ lang === 'es' ? 'Anterior' : 'Previous' }}</span>
            <span class="nav-name">{{ lang === 'es' ? prevPost.title.es : prevPost.title.en }}</span>
          </RouterLink>
          <div v-else></div>
          <RouterLink v-if="nextPost" :to="`/blog/${nextPost.id}`" class="nav-post-link right">
            <span class="nav-dir">{{ lang === 'es' ? 'Siguiente' : 'Next' }} →</span>
            <span class="nav-name">{{ lang === 'es' ? nextPost.title.es : nextPost.title.en }}</span>
          </RouterLink>
        </div>
      </section>

    </div>

    <div v-else class="not-found">
      <div class="container">
        <h1>404</h1>
        <p>{{ lang === 'es' ? 'Post no encontrado.' : 'Post not found.' }}</p>
        <RouterLink to="/blog" class="link-line">Blog</RouterLink>
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
import { posts } from '../data/blog'

const route = useRoute()
const { lang } = useLang()
useScrollReveal()

const post = computed(() => posts.find(p => p.id === route.params.id))
const currentIndex = computed(() => posts.findIndex(p => p.id === route.params.id))
const prevPost = computed(() => currentIndex.value > 0 ? posts[currentIndex.value - 1] : null)
const nextPost = computed(() => currentIndex.value < posts.length - 1 ? posts[currentIndex.value + 1] : null)

const readingProgress = ref(0)
const articleRef = ref(null)

function updateProgress() {
  const article = articleRef.value
  if (!article) return
  const rect = article.getBoundingClientRect()
  const articleTop = rect.top + window.scrollY
  const articleHeight = article.offsetHeight
  const scrolled = window.scrollY - articleTop
  const progress = Math.min(Math.max((scrolled / articleHeight) * 100, 0), 100)
  readingProgress.value = progress
}

onMounted(() => window.addEventListener('scroll', updateProgress, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', updateProgress))

const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString(
    lang.value === 'es' ? 'es-MX' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  )
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
  transition: width 0.12s linear;
  pointer-events: none;
}

/* HERO */
.post-hero {
  padding: 3.5rem 0 4.5rem;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text3);
  margin-bottom: 2.5rem;
  transition: color 0.25s, gap 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.back-link:hover { color: var(--accent); gap: 0.8rem; }

.back-arrow-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px; height: 26px;
  border-radius: 50%;
  border: 1px solid var(--border2);
  font-size: 0.85rem;
  transition: border-color 0.25s, background 0.25s, transform 0.25s;
}
.back-link:hover .back-arrow-wrap {
  border-color: var(--accent-line);
  background: var(--accent-soft);
  transform: translateX(-3px);
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}
.post-tag {
  font-family: var(--font-mono);
  font-size: 0.58rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.25rem 0.7rem;
  border-radius: 100px;
  border: 1px solid;
}
.meta-dot { color: var(--text3); font-size: 0.65rem; }
.post-date, .post-read {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  color: var(--text3);
}

.post-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin-bottom: 1.25rem;
  max-width: 780px;
}

.post-summary {
  font-size: 1rem;
  color: var(--text2);
  max-width: 640px;
  line-height: 1.8;
  font-weight: 300;
}

/* BODY */
.post-body { padding: 4.5rem 0 7rem; }

.post-grid {
  display: grid;
  grid-template-columns: 1fr 260px;
  gap: 5rem;
  align-items: start;
}

/* CONTENT */
.post-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.content-p {
  font-size: 0.96rem;
  color: var(--text2);
  line-height: 1.95;
  font-weight: 300;
}

.content-h2 {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.02em;
  margin-top: 1rem;
  margin-bottom: -0.5rem;
  position: relative;
  padding-left: 1.1rem;
}
.content-h2::before {
  content: '';
  position: absolute;
  left: 0; top: 0.15em;
  width: 3px;
  height: 1em;
  background: var(--accent);
  border-radius: 2px;
}

.content-code {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border);
}
.code-header {
  padding: 0.65rem 1.25rem;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--bg3);
}
.code-dots { display: flex; gap: 5px; }
.code-dot {
  width: 9px; height: 9px;
  border-radius: 50%;
}
.dot-red { background: #ff5f57; }
.dot-amber { background: #febc2e; }
.dot-green { background: #28c840; }

.code-lang {
  font-family: var(--font-mono);
  font-size: 0.58rem;
  color: var(--text3);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-left: auto;
}
.code-pre {
  padding: 1.5rem 1.25rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  line-height: 1.75;
  color: var(--text2);
  overflow-x: auto;
  white-space: pre;
}

.content-image {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border);
}
.content-image img { width: 100%; height: auto; display: block; }
.content-image figcaption {
  padding: 0.75rem 1rem;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--text3);
  text-align: center;
  background: var(--bg2);
  letter-spacing: 0.04em;
}

/* SIDEBAR */
.post-sidebar { position: sticky; top: 100px; }

.sidebar-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 1.5rem;
}

.sidebar-label {
  font-family: var(--font-mono);
  font-size: 0.56rem;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1rem;
}

.sidebar-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
}

.info-row { display: flex; flex-direction: column; gap: 3px; }
.info-key {
  font-family: var(--font-mono);
  font-size: 0.58rem;
  color: var(--text3);
  letter-spacing: 0.08em;
}
.info-val {
  font-size: 0.82rem;
  color: var(--text);
  font-weight: 400;
}

.sidebar-progress-wrap { display: flex; flex-direction: column; gap: 0.6rem; }
.sidebar-progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sidebar-progress-pct {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--text2);
  font-weight: 500;
}
.sidebar-progress-track {
  height: 4px;
  background: var(--bg3);
  border-radius: 4px;
  overflow: hidden;
}
.sidebar-progress-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.15s linear;
  min-width: 4px;
}

/* NAV */
.nav-posts { padding: 3rem 0 4rem; }
.nav-posts-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-post-link {
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 45%;
  padding: 1rem 1.25rem;
  border-radius: 14px;
  border: 1px solid var(--border);
  transition: background 0.25s, border-color 0.25s, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.nav-post-link:hover {
  background: var(--accent-soft);
  border-color: var(--accent-line);
  transform: translateY(-3px);
}
.nav-post-link.right { text-align: right; }

.nav-dir {
  font-family: var(--font-mono);
  font-size: 0.56rem;
  color: var(--accent);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.nav-name {
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.02em;
  line-height: 1.3;
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
.not-found p { color: var(--text2); margin: 1rem 0 2rem; }

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

@media (max-width: 768px) {
  .post-grid { grid-template-columns: 1fr; }
  .post-sidebar { display: none; }
  .nav-posts-inner { flex-direction: column; gap: 1rem; align-items: stretch; }
  .nav-post-link { max-width: 100%; }
  .nav-post-link.right { text-align: left; }
}
</style>