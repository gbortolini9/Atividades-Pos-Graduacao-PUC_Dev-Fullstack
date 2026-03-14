INSERT INTO usuario (nome, email, telefone)
VALUES
('Ana Silva', 'ana@email.com', '51999999999'),
('Carlos Souza', 'carlos@email.com', '51988888888');

INSERT INTO livro (titulo, autor, categoria, ano_publicacao, disponivel)
VALUES
('Dom Casmurro', 'Machado de Assis', 'Romance', 1899, 1),
('O Hobbit', 'J.R.R. Tolkien', 'Fantasia', 1937, 1),
('Clean Code', 'Robert C. Martin', 'Tecnologia', 2008, 1);

INSERT INTO emprestimo (id_usuario, id_livro, data_emprestimo, data_devolucao, status)
VALUES
(1, 1, '2026-03-14', NULL, 'Ativo'),
(2, 2, '2026-03-10', '2026-03-15', 'Devolvido');
