export function loadConfig(container) {
  container.innerHTML = `
    <h2>Configurações</h2>
    <form class="mt-3">
      <div class="mb-3">
        <label class="form-label">Nome da Empresa</label>
        <input type="text" class="form-control" value="Inovaweb">
      </div>
      <div class="mb-3">
        <label class="form-label">Tema</label>
        <select class="form-select">
          <option selected>Claro</option>
          <option>Escuro</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Salvar</button>
    </form>
  `;
}
