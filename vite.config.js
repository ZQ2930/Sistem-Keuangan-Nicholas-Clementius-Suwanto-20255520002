import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'pwa_192x192.png', 'pwa_512x512.png'],
      manifest: {
        name: 'Sistem Keuangan',
        short_name: 'Wallet',
        description: 'Aplikasi pencatatan keuangan pribadi dan bisnis berbasis Cloud',
        theme_color: '#0d6efd',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'pwa_192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa_512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa_512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
});