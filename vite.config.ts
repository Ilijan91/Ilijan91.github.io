import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// User site: repo Ilijan91.github.io → https://ilijan91.github.io/ (no subpath)
const base = '/';

export default defineConfig({
  plugins: [react()],
  base,
});
