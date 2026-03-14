const formCep = document.getElementById("formCep");
const inputCep = document.getElementById("cep");
const mensagem = document.getElementById("mensagem");
const resultado = document.getElementById("resultado");

const logradouro = document.getElementById("logradouro");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");

function mostrarMensagem(texto, tipo) {
  mensagem.textContent = texto;
  mensagem.className = "mensagem";

  if (tipo === "sucesso") {
    mensagem.classList.add("sucesso");
  } else {
    mensagem.classList.add("erro");
  }
}

function limparResultado() {
  resultado.classList.add("oculto");
  logradouro.textContent = "";
  bairro.textContent = "";
  cidade.textContent = "";
  estado.textContent = "";
}

function formatarCep(valor) {
  valor = valor.replace(/\D/g, "");

  if (valor.length > 5) {
    valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");
  }

  return valor;
}

inputCep.addEventListener("input", () => {
  inputCep.value = formatarCep(inputCep.value);
});

formCep.addEventListener("submit", async (event) => {
  event.preventDefault();

  const cep = inputCep.value.replace(/\D/g, "");

  limparResultado();

  if (cep.length !== 8) {
    mostrarMensagem("Digite um CEP válido com 8 números.", "erro");
    return;
  }

  try {
    mostrarMensagem("Buscando CEP...", "sucesso");

    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();

    if (dados.erro) {
      mostrarMensagem("CEP não encontrado.", "erro");
      return;
    }

    logradouro.textContent = dados.logradouro || "Não informado";
    bairro.textContent = dados.bairro || "Não informado";
    cidade.textContent = dados.localidade || "Não informado";
    estado.textContent = dados.uf || "Não informado";

    resultado.classList.remove("oculto");
    mostrarMensagem("CEP encontrado com sucesso.", "sucesso");
  } catch (error) {
    mostrarMensagem("Erro ao buscar o CEP. Tente novamente.", "erro");
  }
});
