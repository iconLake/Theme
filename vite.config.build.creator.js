import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],
  build: {
    rollupOptions: {
      input: 'creator.html'
    },
    emptyOutDir: false
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    }
  }
})
