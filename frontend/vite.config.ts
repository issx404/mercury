import { defineConfig } from "vite";

// если у тебя TypeScript — ничего больше не нужно
export default defineConfig({
  server: {
    port: 5173, // порт для разработки
    proxy: {
      "/api": {
        target: "http://localhost:5000", // твой backend
        changeOrigin: true,
      },
    },
  },
});
