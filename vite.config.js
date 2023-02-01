import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: 'http://127.0.0.1:5173/menu',
  },
  plugins: [
    react(),
    svgr(),
  ],
  serve: {
    middleware: (app) => {
      app.use(
        '/poppins',
        createProxyMiddleware({
          target: 'https://fonts.cdnfonts.com/css/poppins',
          changeOrigin: true,
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        })
      );
    },
  },
});
