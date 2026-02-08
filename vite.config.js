import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],

  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },

    // Configure code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for React and related libs
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Icons as separate chunk
          'icons': ['react-icons'],
          // Motion library separate
          'motion': ['motion'],
          // Utilities
          'utils': ['react-scroll'],
        },
        // Optimize chunk loading
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },

    // Set chunk size warning limit
    chunkSizeWarningLimit: 600,

    // Enable CSS code splitting
    cssCodeSplit: true,

    // Source maps for debugging (disable in production for smaller builds)
    sourcemap: false,

    // Target modern browsers for smaller bundles
    target: 'es2015',
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: [],
  },

  // Performance optimizations 
  esbuild: {
    // Drop console and debugger in production
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
})
