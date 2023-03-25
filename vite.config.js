import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// eslint-disable-next-line import/no-extraneous-dependencies
import sass from 'vite-plugin-sass'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sass()],
})
