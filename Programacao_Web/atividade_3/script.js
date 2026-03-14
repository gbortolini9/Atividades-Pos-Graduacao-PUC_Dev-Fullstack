const formProduto = document.getElementById("formProduto");
const nomeInput = document.getElementById("nome");
const precoInput = document.getElementById("preco");
const categoriaInput = document.getElementById("categoria");
const listaProdutos = document.getElementById("listaProdutos");
const mensagem = document.getElementById("mensagem");
const tituloFormulario = document.getElementById("tituloFormulario");
const btnSalvar = document.getElementById("btnSalvar");
const btnCancelar = document.getElementById("btnCancelar");

let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
let indiceEdicao = null;

function salvarProdutos() {
  localStorage.setItem("produtos", JSON.stringify(produtos));
}

function mostrarMensagem(texto, tipo) {
  mensagem.textContent = texto;
  mensagem.className = "mensagem";

  if (tipo === "sucesso") {
    mensagem.classList.add("sucesso");
  } else {
    mensagem.classList.add("erro");
  }
}

function limparFormulario() {
  formProduto.reset();
  indiceEdicao = null;
  tituloFormulario.textContent = "Novo Produto";
  btnSalvar.textContent = "Cadastrar Produto";
  btnCancelar.classList.add("oculto");
}

function renderizarProdutos() {
  listaProdutos.innerHTML = "";

  if (produtos.length === 0) {
    listaProdutos.innerHTML = '<li class="vazio">Nenhum produto cadastrado.</li>';
    return;
  }

  produtos.forEach((produto, indice) => {
    const item = document.createElement("li");
    item.classList.add("produto-item");

    const topo = document.createElement("div");
    topo.classList.add("produto-topo");

    const info = document.createElement("div");
    info.classList.add("produto-info");
    info.innerHTML = `
      <h3>${produto.nome}</h3>
      <p><strong>Preço:</strong> R$ ${Number(produto.preco).toFixed(2)}</p>
      <p><strong>Categoria:</strong> ${produto.categoria}</p>
    `;

    const acoes = document.createElement("div");
    acoes.classList.add("produto-acoes");

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.classList.add("btn-editar");

    btnEditar.addEventListener("click", () => {
      nomeInput.value = produto.nome;
      precoInput.value = produto.preco;
      categoriaInput.value = produto.categoria;

      indiceEdicao = indice;
      tituloFormulario.textContent = "Editar Produto";
      btnSalvar.textContent = "Salvar Alterações";
      btnCancelar.classList.remove("oculto");

      mostrarMensagem("Produto carregado para edição.", "sucesso");
      nomeInput.focus();
    });

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.classList.add("btn-excluir");

    btnExcluir.addEventListener("click", () => {
      produtos.splice(indice, 1);
      salvarProdutos();
      renderizarProdutos();
      mostrarMensagem("Produto excluído com sucesso.", "sucesso");

      if (indiceEdicao === indice) {
        limparFormulario();
      }
    });

    acoes.appendChild(btnEditar);
    acoes.appendChild(btnExcluir);

    topo.appendChild(info);
    topo.appendChild(acoes);

    item.appendChild(topo);
    listaProdutos.appendChild(item);
  });
}

formProduto.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = nomeInput.value.trim();
  const preco = precoInput.value.trim();
  const categoria = categoriaInput.value.trim();

  if (nome === "" || preco === "" || categoria === "") {
    mostrarMensagem("Preencha todos os campos.", "erro");
    return;
  }

  if (Number(preco) < 0) {
    mostrarMensagem("O preço não pode ser negativo.", "erro");
    return;
  }

  const produto = {
    nome: nome,
    preco: Number(preco),
    categoria: categoria
  };

  if (indiceEdicao === null) {
    produtos.push(produto);
    mostrarMensagem("Produto cadastrado com sucesso.", "sucesso");
  } else {
    produtos[indiceEdicao] = produto;
    mostrarMensagem("Produto atualizado com sucesso.", "sucesso");
  }

  salvarProdutos();
  renderizarProdutos();
  limparFormulario();
});

btnCancelar.addEventListener("click", () => {
  limparFormulario();
  mostrarMensagem("Edição cancelada.", "sucesso");
});

renderizarProdutos();
