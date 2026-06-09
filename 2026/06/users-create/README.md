# Users Create

Esta é uma API para cadastro de usuário, autenticação, criação de posts e visualizar diferentes postagens dos autores, construída com Node.js, Express e MongoDB. E também, é um projeto e simples e direto ao ponto, além de ser bem padronizado e organizado.

## Funcionalidades

- Cadastro de usuários
- Login (recebe um token)
- Criação de posts autenticados
- Feed público de posts
- Middleware de autenticação


## Rotas Principais

- `POST /api/auth/signup` -> Cadastro de usuário
- `POST /api/auth/login` -> Login de usuário
- `POST /api/create` -> Criação de post (requer autenticação)
- `GET /api/feed` -> Listagem de posts
- `GET /api/feed/:id` -> Listagem de posts de um autor

## Tecnologias

- Node.js (JavaScript)
- Express
- MongoDB (Mongoose)
- JsonWebToken
