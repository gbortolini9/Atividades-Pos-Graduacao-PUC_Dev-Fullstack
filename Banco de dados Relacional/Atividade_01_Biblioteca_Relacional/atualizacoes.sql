UPDATE usuario
SET telefone = '51977777777'
WHERE id_usuario = 1;

UPDATE livro
SET disponivel = 0
WHERE id_livro = 1;

UPDATE emprestimo
SET data_devolucao = '2026-03-20',
    status = 'Devolvido'
WHERE id_emprestimo = 1;
