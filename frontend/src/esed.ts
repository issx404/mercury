import "./esed_styles.css";

//aside
const asideLinks = document.querySelectorAll(".sidebar__link");

asideLinks.forEach((link) => {
  link.addEventListener("click", () => {
    asideLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

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

// IMG
const images = document.querySelectorAll<HTMLImageElement>(".image_src");

images.forEach((image) => {
  image.addEventListener("click", () => {
    const src = image.src;
    if (!src) return;
    const overlay: HTMLElement = document.createElement("div");
    overlay.className = "img_full";
    overlay.innerHTML = `<img class="image_full" src="${src}" alt="Изображение в полном экране">`;
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {
      overlay.remove();
    });
  });
});

//VIDEO
const figureVideo = document.querySelectorAll(".figure_video");

figureVideo.forEach((videoBlock) => {
  videoBlock.addEventListener("mouseenter", () => {
    const videoOverlay = document.createElement("div");
    videoOverlay.className = "video_overlay";
    videoOverlay.innerHTML = `<button class="restartBtn"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.9775 8.71452L15.5355 8.2621C13.5829 6.26318 10.4171 6.26318 8.46447 8.2621C6.51184 10.261 6.51184 13.5019 8.46447 15.5008C10.4171 17.4997 13.5829 17.4997 15.5355 15.5008C16.671 14.3384 17.1462 12.7559 16.9611 11.242M15.9775 8.71452H13.3258M15.9775 8.71452V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path> </g></svg></button>`;
    videoBlock.append(videoOverlay);

    const restartBtn = document.querySelector(".restartBtn");

    restartBtn?.addEventListener("click", () => {
      const videoPlayers = document.querySelectorAll(
        ".video_player"
      ) as NodeListOf<HTMLVideoElement>;

      videoPlayers.forEach((videoPlayer: HTMLVideoElement) => {
        videoPlayer.currentTime = 0;
        videoPlayer.play();
      });
    });

    videoBlock.addEventListener(
      "mouseleave",
      () => {
        videoOverlay.remove();
      },
      { once: true }
    );
  });
});
