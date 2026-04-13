<!--
  CustomCursor.vue
  Cursor interactivo sutil: un anillo que sigue al ratón y se expande al hovear links/botones.
  Incluye un punto central que sigue sin delay para sensación de inmediatez.
  
  Úsalo en tu Layout.vue así:
  
  import CustomCursor from './CustomCursor.vue'
  
  Y en el template:
  <CustomCursor />
-->
<template>
  <div id="custom-cursor" ref="cursorRef"></div>
  <div id="custom-cursor-dot" ref="dotRef"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const cursorRef = ref(null)
const dotRef = ref(null)

let cursorX = 0
let cursorY = 0
let dotX = 0
let dotY = 0
let smoothX = 0
let smoothY = 0
let raf = null
let isVisible = false

const LERP = 0.12 // Suavidad del anillo (0 = inmóvil, 1 = sin suavidad)

function lerp(a, b, t) {
  return a + (b - a) * t
}

function animate() {
  // El anillo sigue al cursor con interpolación suave
  smoothX = lerp(smoothX, cursorX, LERP)
  smoothY = lerp(smoothY, cursorY, LERP)

  const cursor = cursorRef.value
  const dot = dotRef.value

  if (cursor) {
    cursor.style.left = `${smoothX}px`
    cursor.style.top  = `${smoothY}px`
  }

  // El punto sigue inmediatamente (sin delay)
  if (dot) {
    dot.style.left = `${dotX}px`
    dot.style.top  = `${dotY}px`
  }

  raf = requestAnimationFrame(animate)
}

function onMouseMove(e) {
  cursorX = e.clientX
  cursorY = e.clientY
  dotX = e.clientX
  dotY = e.clientY

  if (!isVisible) {
    isVisible = true
    cursorRef.value?.classList.add('visible')
    dotRef.value?.classList.add('visible')
    // Teleportar el anillo a la posición inicial sin animación
    smoothX = cursorX
    smoothY = cursorY
  }
}

function onMouseLeave() {
  cursorRef.value?.classList.remove('visible')
  dotRef.value?.classList.remove('visible')
  isVisible = false
}

function onMouseEnterInteractive() {
  cursorRef.value?.classList.add('hovered')
}

function onMouseLeaveInteractive() {
  cursorRef.value?.classList.remove('hovered')
}

// Detectar elementos interactivos dinámicamente
function setupDelegation() {
  document.addEventListener('mouseover', (e) => {
    const el = e.target.closest('a, button, [role="button"], .filter-btn, .c-item, .tool, .p-card, .s-card, .post-card, .featured-post, .featured-row, .other-row, .nav-proj-link, .nav-post-link, .detail-link-btn')
    if (el) onMouseEnterInteractive()
  })

  document.addEventListener('mouseout', (e) => {
    const el = e.target.closest('a, button, [role="button"], .filter-btn, .c-item, .tool, .p-card, .s-card, .post-card, .featured-post, .featured-row, .other-row, .nav-proj-link, .nav-post-link, .detail-link-btn')
    if (el) onMouseLeaveInteractive()
  })
}

onMounted(() => {
  // Iniciar el loop de animación
  smoothX = window.innerWidth / 2
  smoothY = window.innerHeight / 2
  raf = requestAnimationFrame(animate)

  document.addEventListener('mousemove', onMouseMove, { passive: true })
  document.addEventListener('mouseleave', onMouseLeave)

  setupDelegation()
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseleave', onMouseLeave)
  if (raf) cancelAnimationFrame(raf)
})
</script>

<style scoped>
/*
  Los estilos base del cursor están en main.css:
  #custom-cursor y #custom-cursor-dot
  Aquí solo agregamos overrides específicos del componente si fueran necesarios.
*/
</style>