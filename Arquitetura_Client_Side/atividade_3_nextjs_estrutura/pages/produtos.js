import Layout from "../components/Layout";
import Card from "../components/Card";

export default function Produtos() {
  return (
    <Layout titulo="Produtos">
      <h2>Área de Produtos</h2>
      <p>Esta página representa um módulo separado da aplicação.</p>

      <div className="grid">
        <Card titulo="Notebook" descricao="Produto com foco em produtividade." />
        <Card titulo="Mouse" descricao="Acessório para navegação." />
        <Card titulo="Teclado" descricao="Dispositivo de entrada reutilizável em diversos contextos." />
      </div>
    </Layout>
  );
}
