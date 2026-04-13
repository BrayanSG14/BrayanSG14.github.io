/**
 * useScrollReveal
 * Aplica animaciones de entrada al hacer scroll con IntersectionObserver.
 * Los elementos con clase .reveal se animan cuando entran al viewport.
 * Soporta stagger delays con .reveal-d1 ... .reveal-d6
 */
import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  let observer = null

  onMounted(() => {
    // Pequeño delay para que Vue termine de renderizar el DOM
    setTimeout(() => {
      const els = document.querySelectorAll('.reveal')

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              // Una vez visible, dejamos de observar para no repetir la animación
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -40px 0px',
        }
      )

      els.forEach((el) => observer.observe(el))
    }, 50)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}