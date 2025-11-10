import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "0.0.0.0", // слушать все сетевые интерфейсы
    port: 5173, // порт фронтенда
    strictPort: true, // чтобы не переключался на другой
    proxy: {
      "/api": "http://10.80.53.11:5000", // проксируем запросы на backend
    },
  },
});

// import { defineConfig } from "vite";

// export default defineConfig({
//   server: {
//     port: 5173,
//     proxy: {
//       "/api": {
//         target: "http://localhost:5000",
//         changeOrigin: true,
//       },
//     },
//   },
// });
