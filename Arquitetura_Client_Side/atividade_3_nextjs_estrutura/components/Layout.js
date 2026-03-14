import Menu from "./Menu";

export default function Layout({ titulo, children }) {
  return (
    <div className="container">
      <header className="topo">
        <h1>{titulo}</h1>
        <p>Exemplo de aplicação estruturada com Next.js</p>
      </header>

      <Menu />

      <main className="conteudo">{children}</main>
    </div>
  );
}
