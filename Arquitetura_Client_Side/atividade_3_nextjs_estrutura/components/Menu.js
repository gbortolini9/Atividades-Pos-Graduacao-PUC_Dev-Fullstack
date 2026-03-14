import Link from "next/link";

export default function Menu() {
  return (
    <nav className="menu">
      <Link href="/">Início</Link>
      <Link href="/produtos">Produtos</Link>
      <Link href="/usuarios">Usuários</Link>
    </nav>
  );
}
