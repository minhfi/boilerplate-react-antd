import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import eslint from 'vite-plugin-eslint'
// import sassPlugin from 'vite-plugin-sass'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 3000
  },
  plugins: [
    react(),
    eslint(),
    // sassPlugin(),
    svgr({
      svgrOptions: {
        // svgr options
      }
    })
  ],
  optimizeDeps: {
    exclude: ['js-big-decimal']
  },
  resolve: {
    alias: [{
      find: 'src/',
      replacement: '/src/'
    }]
  }
})
