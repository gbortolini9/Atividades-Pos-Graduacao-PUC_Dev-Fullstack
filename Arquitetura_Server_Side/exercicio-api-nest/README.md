# Exercício – Arquitetura Server-Side com NestJS

Este projeto foi desenvolvido como parte da disciplina **Arquitetura Server-Side** do curso de **Pós-Graduação em Desenvolvimento Full Stack – PUCRS**.

O objetivo do exercício é demonstrar a construção de uma aplicação backend utilizando **Node.js** e o framework **NestJS**, aplicando conceitos fundamentais de arquitetura server-side e organização em camadas.

---

## Objetivos do exercício

- Demonstrar a inicialização de um servidor backend com NestJS
- Implementar uma API REST simples
- Aplicar separação de responsabilidades entre camadas da aplicação
- Utilizar a arquitetura modular proposta pelo framework NestJS

---

## Tecnologias utilizadas

- **Node.js**
- **NestJS**
- **TypeScript**
- **Express (HTTP Platform do NestJS)**

---

## Estrutura do projeto

O projeto segue uma arquitetura modular típica de aplicações NestJS:

src
├── main.ts
├── app.module.ts
└── users
├── users.controller.ts
├── users.service.ts
└── users.module.ts


### Descrição das camadas

**Controller**

Responsável por receber as requisições HTTP e retornar as respostas da API.

users.controller.ts


**Service**

Responsável pela lógica de negócio da aplicação.

users.service.ts


**Module**

Responsável por organizar e registrar os componentes da aplicação.

users.module.ts


---

## Funcionalidades da API

A aplicação implementa um pequeno serviço de gerenciamento de usuários.

### Listar usuários

GET /users


Retorna a lista de usuários cadastrados.

---

### Buscar usuário por ID

GET /users/:id


Retorna um usuário específico.

---

### Criar usuário

POST /users


Body da requisição:

{
"name": "João"
}


---

## Como executar o projeto

1. Instalar dependências

npm install


2. Iniciar o servidor

npm run start


3. Acessar a aplicação

http://localhost:3000/users


---

## Conceitos de arquitetura aplicados

Este exercício demonstra conceitos importantes de **arquitetura server-side**, como:

- Arquitetura modular
- Separação de responsabilidades
- Organização em camadas
- Criação de APIs REST
- Estrutura escalável para aplicações backend

---

## Autor

Projeto desenvolvido por **Guilherme Bortolini**  
Pós-Graduação em Desenvolvimento Full Stack – PUCRS