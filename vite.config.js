import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/',
  css: {
    transformer: 'postcss', // fuerza postcss en lugar de lightningcss
  },
  build: {
    cssMinify: 'esbuild', // esbuild es menos agresivo que lightningcss con vendor props
  },
})