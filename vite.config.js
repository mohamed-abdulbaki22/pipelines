import { defineConfig } from 'vite'

export default defineConfig({
  // Build configuration
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
    target: 'es2015',
    rollupOptions: {
      external: ['fsevents'],
      output: {
        manualChunks: {
          vendor: ['vite']
        }
      }
    }
  },
  
  // Development server configuration
  server: {
    port: 5173,
    open: true,
    cors: true
  }
})
