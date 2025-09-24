export function loadDashboard(container) {
  const data = {
    produtos: 42,
    vendas: 128,
    clientes: 57,
    vendasMensais: [12, 19, 15, 30, 22, 35]
  };

  container.innerHTML = `
    <h2>Visão Geral</h2>
    <div class="row">
      <div class="col-md-4">
        <div class="card p-3 shadow-sm">
          <h5>Produtos</h5>
          <p>${data.produtos} Produtos</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card p-3 shadow-sm">
          <h5>Vendas</h5>
          <p>${data.vendas} Vendas</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card p-3 shadow-sm">
          <h5>Clientes</h5>
          <p>${data.clientes} Clientes</p>
        </div>
      </div>
    </div>
    <canvas id="salesChart" class="mt-4"></canvas>
  `;

  new Chart(document.getElementById("salesChart"), {
    type: "line",
    data: {
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
      datasets: [{
        label: "Itens Vendidos",
        data: data.vendasMensais,
        borderColor: "blue",
        backgroundColor: "rgba(0,123,255,0.2)",
        fill: true
      }]
    }
  });
}
