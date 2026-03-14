# Modelo Lógico

## Tabela USUARIO
- id_usuario (PK)
- nome
- email
- telefone

## Tabela LIVRO
- id_livro (PK)
- titulo
- autor
- categoria
- ano_publicacao
- disponivel

## Tabela EMPRESTIMO
- id_emprestimo (PK)
- id_usuario (FK)
- id_livro (FK)
- data_emprestimo
- data_devolucao
- status

## Relacionamentos
- EMPRESTIMO.id_usuario referencia USUARIO.id_usuario
- EMPRESTIMO.id_livro referencia LIVRO.id_livro
