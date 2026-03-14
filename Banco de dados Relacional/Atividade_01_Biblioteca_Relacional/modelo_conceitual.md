# Modelo Conceitual

O sistema de biblioteca é composto por três entidades principais:

## 1. Usuário
Representa a pessoa que pode realizar empréstimos de livros.

### Atributos:
- id_usuario
- nome
- email
- telefone

## 2. Livro
Representa os livros disponíveis na biblioteca.

### Atributos:
- id_livro
- titulo
- autor
- categoria
- ano_publicacao
- disponivel

## 3. Empréstimo
Representa a relação entre usuário e livro no momento em que um livro é emprestado.

### Atributos:
- id_emprestimo
- data_emprestimo
- data_devolucao
- status

## Relacionamentos

- Um usuário pode realizar vários empréstimos.
- Um livro pode participar de vários empréstimos ao longo do tempo.
- Cada empréstimo pertence a um único usuário.
- Cada empréstimo está associado a um único livro.
