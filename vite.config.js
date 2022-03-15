import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@src': path.resolve(__dirname, './src'),
      '@components' : path.resolve(__dirname, './src/components'),
      '@compose' : path.resolve(__dirname, './src/compose'),
      '@serv' : path.resolve(__dirname, './src/serv')
    },
  },
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar()
  ]
})
