import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project site: username.github.io/ilijan-cv-portfolio-web. For user site (username.github.io) use base: '/'
const base = '/ilijan-cv-portfolio-web/'

export default defineConfig({
  plugins: [react()],
  base,
})
