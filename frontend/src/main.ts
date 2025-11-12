import "./main_styles.css";
import { fetchNews } from "./fetches";

//modal
const requisitsLink = document.getElementById("link_requisits");
const modal = document.getElementById("requisits_modal");
const closeBtn = document.getElementById("close_modal");

// Открыть модалку
requisitsLink?.addEventListener("click", (e) => {
  e.preventDefault();
  modal?.setAttribute("style", "display: flex;");
});

// Закрыть при клике на крестик
closeBtn?.addEventListener("click", () => {
  modal?.setAttribute("style", "display: none;");
});

// Закрыть при клике вне окна
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal?.setAttribute("style", "display: none;");
  }
});

// CATEGORY
const links = document.querySelectorAll<HTMLAnchorElement>(
  "header .navigation_links a"
);
const currentPath = window.location.pathname;

links.forEach((link) => {
  const href = link.getAttribute("href") || "";

  if (href === currentPath || (href === "/" && currentPath === "/")) {
    link.classList.add("active_link");
  } else {
    link.classList.remove("active_link");
  }
});

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
            <img src="${
              n.image_url
            }" alt="Демонстрация работы интерфейса" class="image_src">
            <p>${n.content}</p></div>
        `
      )
      .join("");
  })
  .catch((err) => {
    console.error("Ошибка:", err);
    container!.innerHTML = "<p>Не удалось загрузить новости</p>";
  });
