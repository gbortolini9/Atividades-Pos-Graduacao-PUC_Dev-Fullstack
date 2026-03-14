import Layout from "../components/Layout";
import Card from "../components/Card";

export default function Usuarios() {
  return (
    <Layout titulo="Usuários">
      <h2>Área de Usuários</h2>
      <p>Esta página representa outro módulo da aplicação.</p>

      <div className="grid">
        <Card titulo="João Silva" descricao="Administrador do sistema." />
        <Card titulo="Maria Oliveira" descricao="Analista de negócios." />
        <Card titulo="Carlos Souza" descricao="Desenvolvedor front-end." />
      </div>
    </Layout>
  );
}
