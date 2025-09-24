import { loadDashboard } from "./dashboard.js";
import { loadProdutos } from "./produtos.js";
import { loadVendas } from "./vendas.js";
import { loadConfig } from "./config.js";

export function router(page) {
  const content = document.getElementById("page-content");
  const title = document.getElementById("page-title");

  switch (page) {
    case "dashboard":
      title.textContent = "Dashboard";
      loadDashboard(content);
      break;

    case "produtos":
      title.textContent = "Gestão de Produtos";
      loadProdutos(content);
      break;

    case "vendas":
      title.textContent = "Controle de Vendas";
      loadVendas(content);
      break;

    case "relatorios":
      title.textContent = "Relatórios";
      content.innerHTML = `<h2>Relatórios</h2><p>Aqui você poderá gerar relatórios detalhados.</p>`;
      break;

    case "config":
      title.textContent = "Configurações";
      loadConfig(content);
      break;

    default:
      content.innerHTML = `<h2>404</h2><p>Página não encontrada.</p>`;
  }
}
