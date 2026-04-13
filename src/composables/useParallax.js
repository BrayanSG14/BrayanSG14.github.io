/**
 * useParallax
 * Mueve los blobs del hero sutilmente al hacer scroll y al mover el ratón,
 * creando un efecto parallax ligero y no distractor.
 */
import { onMounted, onUnmounted } from 'vue'

export function useParallax(blob1Ref, blob2Ref) {
  let ticking = false
  let mouseX = 0
  let mouseY = 0
  let scrollY = 0
  let raf = null

  function applyTransforms() {
    const b1 = blob1Ref.value
    const b2 = blob2Ref.value
    if (!b1 || !b2) return

    // Parallax suave: el blob se mueve más lento que el scroll
    const scrollOffset1 = scrollY * 0.12
    const scrollOffset2 = scrollY * 0.08

    // Seguimiento sutil del ratón
    const w = window.innerWidth
    const h = window.innerHeight
    const mx = (mouseX / w - 0.5) * 30
    const my = (mouseY / h - 0.5) * 20

    b1.style.transform = `translate(${mx * 0.5}px, ${-scrollOffset1 + my * 0.4}px)`
    b2.style.transform = `translate(${-mx * 0.4}px, ${scrollOffset2 - my * 0.3}px)`

    ticking = false
  }

  function onScroll() {
    scrollY = window.scrollY
    if (!ticking) {
      raf = requestAnimationFrame(applyTransforms)
      ticking = true
    }
  }

  function onMouseMove(e) {
    mouseX = e.clientX
    mouseY = e.clientY
    if (!ticking) {
      raf = requestAnimationFrame(applyTransforms)
      ticking = true
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMouseMove, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('mousemove', onMouseMove)
    if (raf) cancelAnimationFrame(raf)
  })
}