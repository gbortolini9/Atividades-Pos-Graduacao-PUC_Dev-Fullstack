function produtosMicrofrontend() {
  return `
    <section class="pagina">
      <h2>Produtos</h2>
      <p>
        Este módulo representa um micro frontend voltado para a área de produtos,
        reforçando a separação de responsabilidades na arquitetura.
      </p>

      <ul class="lista">
        <li>Notebook - R$ 3.500,00</li>
        <li>Mouse - R$ 120,00</li>
        <li>Teclado - R$ 250,00</li>
      </ul>

      <div class="card-grid">
        <div class="card">
          <h3>Escalabilidade</h3>
          <p>Novos recursos podem ser adicionados ao módulo sem alterar o App Shell.</p>
        </div>

        <div class="card">
          <h3>Reutilização</h3>
          <p>A lógica do módulo pode ser reaproveitada em outros contextos do sistema.</p>
        </div>
      </div>
    </section>
  `;
}
