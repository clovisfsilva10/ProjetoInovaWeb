const API_URL = "https://jsonplaceholder.typicode.com";

// Produtos simulados (posts)
export async function getProdutos() {
  const res = await fetch(`${API_URL}/posts`);
  if (!res.ok) throw new Error("Erro ao buscar produtos");
  return await res.json();
}

// Clientes simulados (users)
export async function getClientes() {
  const res = await fetch(`${API_URL}/users`);
  if (!res.ok) throw new Error("Erro ao buscar clientes");
  return await res.json();
}

// Vendas simuladas (todos)
export async function getVendas() {
  const res = await fetch(`${API_URL}/todos`);
  if (!res.ok) throw new Error("Erro ao buscar vendas");
  return await res.json();
}

// Dados agregados para o dashboard
export async function getDashboardData() {
  const [produtos, vendas, clientes] = await Promise.all([
    getProdutos(),
    getVendas(),
    getClientes()
  ]);

  return {
    produtos: produtos.length, // 100 posts
    vendas: vendas.length,     // 200 todos
    clientes: clientes.length, // 10 users
    vendasMensais: vendas.slice(0, 6).map(v => v.id) // só pra simular números
  };
}
