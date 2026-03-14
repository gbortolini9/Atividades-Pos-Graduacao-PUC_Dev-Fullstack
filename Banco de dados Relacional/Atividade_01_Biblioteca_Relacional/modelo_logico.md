# Modelo Lógico

O modelo lógico do banco de dados é composto por três tabelas principais:

## Tabela: usuario
- id_usuario (PK)
- nome
- email
- telefone

## Tabela: livro
- id_livro (PK)
- titulo
- autor
- categoria     
- ano_publicacao
- disponivel

## Tabela: emprestimo
- id_emprestimo (PK)
- id_usuario (FK)
- id_livro (FK)
- data_emprestimo
- data_devolucao
- status

## Relacionamentos

- A chave estrangeira `id_usuario` na tabela `emprestimo` referencia a chave primária `id_usuario` da tabela `usuario`.
- A chave estrangeira `id_livro` na tabela `emprestimo` referencia a chave primária `id_livro` da tabela `livro`.
