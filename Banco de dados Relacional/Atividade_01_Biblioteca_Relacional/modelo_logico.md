# Modelo Lógico

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

- `emprestimo.id_usuario` referencia `usuario.id_usuario`
- `emprestimo.id_livro` referencia `livro.id_livro`
