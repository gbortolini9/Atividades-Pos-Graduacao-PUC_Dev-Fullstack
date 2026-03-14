function dashboardMicrofrontend() {
  return `
    <section class="pagina">
      <h2>Dashboard</h2>
      <p>
        Este módulo representa o micro frontend principal da aplicação.
        Ele é carregado dentro do App Shell, sem recarregar a página inteira.
      </p>
      <p>
        Nesse contexto, o container principal centraliza a estrutura visual,
        enquanto cada funcionalidade é tratada como um módulo independente.
      </p>

      <div class="card-grid">
        <div class="card">
          <h3>App Shell</h3>
          <p>Responsável pela estrutura principal da aplicação client-side.</p>
          <span class="badge">Container</span>
        </div>

        <div class="card">
          <h3>SPA</h3>
          <p>A navegação acontece dinamicamente, sem reload completo da página.</p>
          <span class="badge">Navegação</span>
        </div>

        <div class="card">
          <h3>Micro Frontends</h3>
          <p>Cada funcionalidade pode evoluir de forma separada e organizada.</p>
          <span class="badge">Modularização</span>
        </div>
      </div>
    </section>
  `;
}
