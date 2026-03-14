function usuariosMicrofrontend() {
  return `
    <section class="pagina">
      <h2>Usuários</h2>
      <p>
        Este módulo simula um micro frontend responsável pela área de usuários.
        Ele pode ser desenvolvido e mantido separadamente dos demais módulos.
      </p>

      <ul class="lista">
        <li>João Silva - Administrador</li>
        <li>Maria Oliveira - Analista</li>
        <li>Carlos Souza - Desenvolvedor</li>
      </ul>

      <div class="card-grid">
        <div class="card">
          <h3>Responsabilidade</h3>
          <p>Gerenciamento de dados e visualização de usuários do sistema.</p>
        </div>

        <div class="card">
          <h3>Independência</h3>
          <p>Esse módulo pode ser alterado sem impactar diretamente outros módulos.</p>
        </div>
      </div>
    </section>
  `;
}
