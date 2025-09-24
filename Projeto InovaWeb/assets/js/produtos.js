export function loadProdutos(container) {
  const produtos = [
    { id: 1, nome: "Notebook Dell XPS", preco: "R$ 6.500,00" },
    { id: 2, nome: "Smartphone Galaxy S22", preco: "R$ 4.200,00" },
    { id: 3, nome: "Mouse Gamer Logitech", preco: "R$ 320,00" },
    { id: 4, nome: "Teclado Mecânico Redragon", preco: "R$ 450,00" },
    { id: 5, nome: "Monitor LG Ultrawide 29\"", preco: "R$ 1.700,00" }
  ];

  container.innerHTML = `
    <h2>Gestão de Produtos</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Produto</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        ${produtos.map(p => `
          <tr>
            <td>${p.id}</td>
            <td>${p.nome}</td>
            <td>${p.preco}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}
