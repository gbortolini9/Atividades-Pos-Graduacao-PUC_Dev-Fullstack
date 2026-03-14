# Modelo Conceitual

O sistema proposto é um banco de dados relacional para controle de biblioteca.

## Entidades

### Usuário
A entidade Usuário representa as pessoas cadastradas no sistema que podem realizar empréstimos de livros.

**Atributos:**
- id_usuario
- nome
- email
- telefone

### Livro
A entidade Livro representa os livros disponíveis para empréstimo na biblioteca.

**Atributos:**
- id_livro
- titulo
- autor
- categoria
- ano_publicacao
- disponivel

### Empréstimo
A entidade Empréstimo representa o registro de retirada de um livro por um usuário.

**Atributos:**
- id_emprestimo
- data_emprestimo
- data_devolucao
- status

## Relacionamentos

- Um usuário pode realizar vários empréstimos.
- Um livro pode participar de vários empréstimos ao longo do tempo.
- Cada empréstimo pertence a um único usuário.
- Cada empréstimo está associado a um único livro.
