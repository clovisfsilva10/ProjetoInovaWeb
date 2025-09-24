export function loadVendas(container) {
  const vendas = [
    { id: 101, cliente: "João Silva", produto: "Notebook Dell XPS", valor: "R$ 6.500,00" },
    { id: 102, cliente: "Maria Oliveira", produto: "Galaxy S22", valor: "R$ 4.200,00" },
    { id: 103, cliente: "Carlos Santos", produto: "Monitor LG 29\"", valor: "R$ 1.700,00" },
    { id: 104, cliente: "Fernanda Souza", produto: "Teclado Redragon", valor: "R$ 450,00" }
  ];

  container.innerHTML = `
    <h2>Controle de Vendas</h2>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Cliente</th>
          <th>Produto</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        ${vendas.map(v => `
          <tr>
            <td>${v.id}</td>
            <td>${v.cliente}</td>
            <td>${v.produto}</td>
            <td>${v.valor}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}
