import { onMounted, onUnmounted } from 'vue';

export function useInteractions() {
  let observer;

  const handleMouseMove = (e) => {
    const cursor = document.querySelector('.custom-cursor');
    if (!cursor) return;
    
    // Movimiento fluido del cursor sin delay
    cursor.style.transform = `translate(${e.clientX - cursor.offsetWidth / 2}px, ${e.clientY - cursor.offsetHeight / 2}px)`;

    // Detectar si está sobre un elemento interactivo
    const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
    const isInteractive = hoveredElement?.closest('a, button, .glass, input, textarea');
    
    if (isInteractive) {
      cursor.classList.add('hovering');
    } else {
      cursor.classList.remove('hovering');
    }
  };

  const handleScroll = () => {
    const scrolled = window.scrollY;
    
    // Parallax
    document.querySelectorAll('.parallax').forEach(el => {
      const speed = el.dataset.speed || 0.15;
      el.style.transform = `translateY(${scrolled * speed}px)`;
    });

    // Blur Dinámico en Hero
    const heroBlur = document.querySelector('.dynamic-blur');
    if (heroBlur) {
      const blurValue = Math.min(scrolled / 25, 10);
      const opacityValue = Math.max(1 - scrolled / 500, 0);
      heroBlur.style.filter = `blur(${blurValue}px)`;
      heroBlur.style.opacity = opacityValue;
    }
  };

  onMounted(() => {
    // Inicializar Intersection Observer para animaciones .reveal
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Descomentar la siguiente línea si quieres que la animación ocurra solo 1 vez
          // observer.unobserve(entry.target); 
        }
      });
    }, { 
      threshold: 0.1, 
      rootMargin: "0px 0px -50px 0px" 
    });

    // Pequeño timeout para permitir que el DOM se renderice antes de observar
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Insertar el cursor en el body si no existe
    if (!document.querySelector('.custom-cursor')) {
      const cursorEl = document.createElement('div');
      cursorEl.classList.add('custom-cursor');
      document.body.appendChild(cursorEl);
    }
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('scroll', handleScroll);
  });
}