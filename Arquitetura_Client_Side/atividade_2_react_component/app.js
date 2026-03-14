function Saudacao(props){

return(
<div className="card">

<h2>Olá {props.nome}</h2>

<p>
Este é um componente React que recebe dados externos
utilizando props.
</p>

</div>
)

}

function App(){

return(

<div className="container">

<h1>Componentes Visuais com React</h1>

<Saudacao nome="Guilherme" />
<Saudacao nome="Maria" />
<Saudacao nome="Carlos" />

</div>

)

}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App />)
