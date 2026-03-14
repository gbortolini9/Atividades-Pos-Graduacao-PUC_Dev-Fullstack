# Modelo Conceitual

O sistema de biblioteca é composto por três entidades principais:

## Usuário
Representa a pessoa cadastrada no sistema que pode realizar empréstimos.

### Atributos
- nome
- email
- telefone

## Livro
Representa os livros cadastrados na biblioteca.

### Atributos
- titulo
- autor
- categoria
- ano_publicacao
- disponivel

## Empréstimo
Representa a retirada de um livro por um usuário.

### Atributos
- data_emprestimo
- data_devolucao
- status

## Relacionamentos
- Um usuário pode realizar vários empréstimos.
- Um livro pode participar de vários empréstimos ao longo do tempo.
- Cada empréstimo pertence a um único usuário.
- Cada empréstimo está associado a um único livro.
