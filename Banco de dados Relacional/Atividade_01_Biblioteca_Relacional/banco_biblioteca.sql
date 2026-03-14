CREATE TABLE usuario (
    id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    telefone TEXT
);

CREATE TABLE livro (
    id_livro INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    autor TEXT NOT NULL,
    categoria TEXT,
    ano_publicacao INTEGER,
    disponivel INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE emprestimo (
    id_emprestimo INTEGER PRIMARY KEY AUTOINCREMENT,
    id_usuario INTEGER NOT NULL,
    id_livro INTEGER NOT NULL,
    data_emprestimo TEXT NOT NULL,
    data_devolucao TEXT,
    status TEXT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_livro) REFERENCES livro(id_livro)
);
