// backend/server.js
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import newsRouter from "./controllers/news.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// --- Настройки Middleware ---
app.use(cors());
app.use(express.json());

// --- API для новостей ---
app.use("/api/news", newsRouter);

// --- Раздача фронтенда после сборки ---
const frontendDist = path.join(__dirname, "../frontend/dist");
app.use(express.static(frontendDist));

// Для SPA: любые пути, кроме /api/*, отдадим index.html
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(frontendDist, "index.html"));
});

// --- Запуск сервера ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
