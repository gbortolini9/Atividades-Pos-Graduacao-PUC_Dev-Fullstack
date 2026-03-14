const app = document.getElementById("app");
const buttons = document.querySelectorAll(".menu button");

function renderPage(page) {
  if (page === "dashboard") {
    app.innerHTML = dashboardMicrofrontend();
  } else if (page === "usuarios") {
    app.innerHTML = usuariosMicrofrontend();
  } else if (page === "produtos") {
    app.innerHTML = produtosMicrofrontend();
  } else {
    app.innerHTML = `
      <section class="pagina">
        <h2>Página não encontrada</h2>
        <p>O módulo solicitado não existe.</p>
      </section>
    `;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const page = button.getAttribute("data-page");
    renderPage(page);
  });
});

renderPage("dashboard");
