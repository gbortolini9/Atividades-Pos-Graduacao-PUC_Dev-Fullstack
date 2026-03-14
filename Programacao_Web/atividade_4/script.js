const produtos = [
{ id:1, nome:"Notebook", preco:3500 },
{ id:2, nome:"Mouse", preco:120 },
{ id:3, nome:"Teclado", preco:250 },
{ id:4, nome:"Monitor", preco:900 }
]

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

const listaProdutos = document.getElementById("listaProdutos")
const listaCarrinho = document.getElementById("listaCarrinho")
const totalElemento = document.getElementById("total")

function salvarCarrinho(){
localStorage.setItem("carrinho",JSON.stringify(carrinho))
}

function renderizarProdutos(){

listaProdutos.innerHTML=""

produtos.forEach(produto=>{

const div=document.createElement("div")
div.classList.add("produto")

div.innerHTML=`
<h3>${produto.nome}</h3>
<p>R$ ${produto.preco.toFixed(2)}</p>
<button onclick="adicionarCarrinho(${produto.id})">Adicionar</button>
`

listaProdutos.appendChild(div)

})

}

function adicionarCarrinho(id){

const produto = produtos.find(p=>p.id===id)

carrinho.push(produto)

salvarCarrinho()

renderizarCarrinho()

}

function removerItem(index){

carrinho.splice(index,1)

salvarCarrinho()

renderizarCarrinho()

}

function renderizarCarrinho(){

listaCarrinho.innerHTML=""

let total=0

carrinho.forEach((produto,index)=>{

total+=produto.preco

const li=document.createElement("li")

li.classList.add("item-carrinho")

li.innerHTML=`
${produto.nome} - R$ ${produto.preco.toFixed(2)}
<button class="remover" onclick="removerItem(${index})">X</button>
`

listaCarrinho.appendChild(li)

})

totalElemento.textContent="R$ "+total.toFixed(2)

}

renderizarProdutos()
renderizarCarrinho()
