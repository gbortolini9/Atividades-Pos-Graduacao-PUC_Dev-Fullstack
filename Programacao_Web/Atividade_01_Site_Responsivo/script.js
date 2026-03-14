const form = document.getElementById("formUsuario");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const listaUsuarios = document.getElementById("listaUsuarios");
const mensagem = document.getElementById("mensagem");

let usuarios = [];

function mostrarMensagem(texto, tipo) {
  mensagem.textContent = texto;
  mensagem.className = "mensagem";

  if (tipo === "sucesso") {
    mensagem.classList.add("sucesso");
  } else {
    mensagem.classList.add("erro");
  }
}

function renderizarUsuarios() {
  listaUsuarios.innerHTML = "";

  if (usuarios.length === 0) {
    listaUsuarios.innerHTML = "<li>Nenhum usuário cadastrado.</li>";
    return;
  }

  usuarios.forEach((usuario, indice) => {
    const item = document.createElement("li");
    item.classList.add("usuario-item");

    const info = document.createElement("div");
    info.classList.add("usuario-info");
    info.innerHTML = `
      <strong>${usuario.nome}</strong>
      <span>${usuario.email}</span>
    `;

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.classList.add("btn-remover");

    botaoRemover.addEventListener("click", () => {
      usuarios.splice(indice, 1);
      renderizarUsuarios();
      mostrarMensagem("Usuário removido com sucesso.", "sucesso");
    });

    item.appendChild(info);
    item.appendChild(botaoRemover);
    listaUsuarios.appendChild(item);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();

  if (nome === "" || email === "") {
    mostrarMensagem("Preencha todos os campos.", "erro");
    return;
  }

  const emailJaExiste = usuarios.some((usuario) => usuario.email === email);

  if (emailJaExiste) {
    mostrarMensagem("Já existe um usuário cadastrado com esse e-mail.", "erro");
    return;
  }

  const novoUsuario = {
    nome: nome,
    email: email
  };

  usuarios.push(novoUsuario);
  renderizarUsuarios();
  mostrarMensagem("Usuário cadastrado com sucesso.", "sucesso");

  form.reset();
  nomeInput.focus();
});

renderizarUsuarios();
