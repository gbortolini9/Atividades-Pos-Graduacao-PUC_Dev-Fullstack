const formTarefa = document.getElementById("formTarefa");
const inputTarefa = document.getElementById("inputTarefa");
const listaTarefas = document.getElementById("listaTarefas");
const mensagem = document.getElementById("mensagem");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
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

function renderizarTarefas() {
  listaTarefas.innerHTML = "";

  if (tarefas.length === 0) {
    listaTarefas.innerHTML = '<li class="vazia">Nenhuma tarefa cadastrada.</li>';
    return;
  }

  tarefas.forEach((tarefa, indice) => {
    const item = document.createElement("li");
    item.classList.add("tarefa-item");

    const info = document.createElement("div");
    info.classList.add("tarefa-info");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarefa.concluida;

    checkbox.addEventListener("change", () => {
      tarefas[indice].concluida = checkbox.checked;
      salvarTarefas();
      renderizarTarefas();
      mostrarMensagem("Status da tarefa atualizado.", "sucesso");
    });

    const texto = document.createElement("span");
    texto.textContent = tarefa.texto;
    texto.classList.add("tarefa-texto");

    if (tarefa.concluida) {
      texto.classList.add("concluida");
    }

    info.appendChild(checkbox);
    info.appendChild(texto);

    const acoes = document.createElement("div");
    acoes.classList.add("acoes");

    const botaoConcluir = document.createElement("button");
    botaoConcluir.textContent = tarefa.concluida ? "Reabrir" : "Concluir";
    botaoConcluir.classList.add("btn-concluir");

    botaoConcluir.addEventListener("click", () => {
      tarefas[indice].concluida = !tarefas[indice].concluida;
      salvarTarefas();
      renderizarTarefas();
      mostrarMensagem("Tarefa atualizada com sucesso.", "sucesso");
    });

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.classList.add("btn-remover");

    botaoRemover.addEventListener("click", () => {
      tarefas.splice(indice, 1);
      salvarTarefas();
      renderizarTarefas();
      mostrarMensagem("Tarefa removida com sucesso.", "sucesso");
    });

    acoes.appendChild(botaoConcluir);
    acoes.appendChild(botaoRemover);

    item.appendChild(info);
    item.appendChild(acoes);

    listaTarefas.appendChild(item);
  });
}

formTarefa.addEventListener("submit", function (event) {
  event.preventDefault();

  const textoTarefa = inputTarefa.value.trim();

  if (textoTarefa === "") {
    mostrarMensagem("Digite uma tarefa válida.", "erro");
    return;
  }

  const novaTarefa = {
    texto: textoTarefa,
    concluida: false
  };

  tarefas.push(novaTarefa);
  salvarTarefas();
  renderizarTarefas();
  mostrarMensagem("Tarefa adicionada com sucesso.", "sucesso");

  formTarefa.reset();
  inputTarefa.focus();
});

renderizarTarefas();
