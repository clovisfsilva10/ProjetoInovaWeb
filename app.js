import { router } from "./router.js";

// Navegação inicial
window.addEventListener("hashchange", () => {
  const page = location.hash.replace("#", "") || "dashboard";
  router(page);
});

// Carregar página inicial
window.addEventListener("load", () => {
  const page = location.hash.replace("#", "") || "dashboard";
  router(page);
});
