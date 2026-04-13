import { ref, watchEffect } from 'vue'

const isDark = ref(false)

export function useTheme() {
  watchEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  })
  const toggleTheme = () => { isDark.value = !isDark.value }
  return { isDark, toggleTheme }
}