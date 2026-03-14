SELECT * FROM usuario;

SELECT * FROM livro;

SELECT * FROM emprestimo;

SELECT 
    e.id_emprestimo,
    u.nome AS usuario,
    l.titulo AS livro,
    e.data_emprestimo,
    e.data_devolucao,
    e.status
FROM emprestimo e
JOIN usuario u ON e.id_usuario = u.id_usuario
JOIN livro l ON e.id_livro = l.id_livro;

SELECT * FROM livro
WHERE disponivel = 1;

SELECT * FROM emprestimo
WHERE status = 'Ativo';
