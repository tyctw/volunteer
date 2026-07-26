import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/volunteer/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html',
        articles: 'articles.html',
        guide: 'guide.html',
        info: 'info.html',
        schedule: 'schedule.html',
        ranking: 'ranking.html',
        afterSubmission: 'after-submission.html',
      },
    },
  }
})
