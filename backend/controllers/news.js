import express from "express";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Создаём подключение к MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// GET /api/news — возвращаем новости
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM news ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка при получении новостей" });
  }
});

export default router;
