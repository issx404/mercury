import "./main_styles.css";
import { fetchNews } from "./fetches";

const container = document.getElementById("main_container");

fetchNews()
  .then((news) => {
    // сортировка новые сверху
    news.sort(
      (a: any, b: any) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

    // рендерим
    container!.innerHTML = news
      .map(
        (n: any) => `<div id="article_container" class="article">
            <figcaption>${new Date(n.created_at).toLocaleString()}</figcaption>
            <h2>${n.title}</h2>
            <img src="images/img1.png" alt="Демонстрация работы интерфейса" class="image_src">
            <p>${n.content}</p></div>
        `
      )
      .join("");
  })
  .catch((err) => {
    console.error("Ошибка:", err);
    container!.innerHTML = "<p>Не удалось загрузить новости</p>";
  });
