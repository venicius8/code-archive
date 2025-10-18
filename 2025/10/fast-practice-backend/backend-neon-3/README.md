# backend-neon-3

## Descrição

O projeto `backend-neon-3` foi desenvolvido como parte de um treinamento intensivo de back-end, com foco em aprender e aplicar os conceitos de uma API RESTful utilizando o Prisma como ORM, o banco de dados Neon, JWT para autenticação e Argon2 para criptografar senhas. O tema do projeto é um sistema de gerenciamento de anotações privadas, permitindo listar, buscar, criar, atualizar e deletar notas, além de autenticação de usuários. **Tempo de desenvolvimento**: 5 horas e 20 minutos.

## Tecnologias usadas

- ![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=flat-square) **Express**
- ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white&style=flat-square) **Node.js**
- ![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white&style=flat-square) **Prisma**
- ![Neon](https://img.shields.io/badge/Neon-008B99?logoColor=white&style=flat-square) **Neon (database)**

## Funcionalidades

- **Autenticação de Usuários**: Registro e login de usuários com JWT e senhas criptografadas com Argon2.
- **Listagem de Notas**: Exibir a lista de todas as notas cadastradas por um usuário autenticado.
- **Buscar Nota**: Buscar uma nota específica com base no seu ID.
- **Criação de Nota**: Registrar novas notas com informações validadas.
- **Atualizar Nota**: Atualizar uma nota existente com base no seu ID.
- **Exclusão de Nota**: Excluir uma nota específica com base no ID.
- **API RESTful**: Endpoints organizados seguindo os padrões REST para gerenciar notas e autenticação.

## Como Executar

1. **Pré-requisitos**:

   - Node.js instalado.
   - Conta no Neon para configurar o banco de dados.

2. **Passos**:

   ```bash
   # Clone o repositório
   git clone <URL_DESTE_REPOSITORIO>

   # Entre no diretório do projeto
   cd backend-neon-3

   # Instale as dependências
   npm install

   # Configure o arquivo .env com a URL do banco Neon, a porta e a chave secreta para JWT
   DATABASE_URL="sua_url_do_neon"
   PORT="sua_porta"
   JWT="sua_chave_secreta"

   # Execute as migrações do Prisma
   npx prisma migrate dev

   # Inicie o servidor
   npm run start
   ```

## Endpoints Principais

### Notas

Observação: início dos endpoints abaixo precisam ser: `/api/notes`.

- `GET /`: Listar todas as notas cadastradas por um usuário autenticado.
- `GET /:id`: Buscar uma nota específica com base no ID fornecido.
- `POST /`: Criar uma nova nota no sistema.
- `PUT /:id`: Atualizar uma nota existente com base no seu ID.
- `DELETE /:id`: Excluir uma nota específica com base no ID fornecido.

### Autenticação

Observação: início dos endpoints abaixo precisam ser: `/api/auth`.

- `POST /signup`: Registrar um novo usuário no sistema.
- `POST /login`: Autenticar um usuário e retornar um token JWT.
