# backend-neon-2

## Descrição

O projeto `backend-neon-2` foi desenvolvido como parte de um treinamento intensivo de back-end, com foco em aprender e aplicar os conceitos de uma API RESTful utilizando o Prisma como ORM e o banco de dados Neon. O tema do projeto é um sistema de registro de produtos para uma loja fictícia, permitindo listar, buscar, criar, atualizar e deletar informações de produtos. **Tempo de desenvolvimento**: 3 horas e 40 minutos.

## Tecnologias usadas

- ![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=flat-square) **Express**
- ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white&style=flat-square) **Node.js**
- ![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white&style=flat-square) **Prisma**
- ![Neon](https://img.shields.io/badge/Neon-008B99?logoColor=white&style=flat-square) **Neon (database)**

## Funcionalidades

- **Listagem de Produtos**: Exibir a lista de todos os produtos cadastrados.
- **Buscar Produto**: Buscar um um produto específico com base no seu ID.
- **Criação de Produto**: Registrar novos produtos com as informações: nome do produto, categoria, descrição e preço (em BRL).
- **Atualizar Produto**: Atualizar um produto existente com base no seu ID.
- **Exclusão de Produto**: Excluir cadastro de produtos por meio de ID.
- **API RESTful**: Endpoints organizados seguindo os padrões REST para gerenciar produtos.

## Como Executar

1. **Pré-requisitos**:

   - Node.js instalado.
   - Conta no Neon para configurar o banco de dados.

2. **Passos**:

   ```bash
   # Clone o repositório
   git clone <URL_DESTE_REPOSITORIO>

   # Entre no diretório do projeto
   cd backend-neon-2

   # Instale as dependências
   npm install

   # Configure o arquivo .env com a URL do banco Neon e a porta
   DATABASE_URL="sua_url_do_neon"
   PORT="sua_porta"

   # Execute as migrações do Prisma
   npx prisma migrate dev

   # Inicie o servidor
   npm run start
   ```

## Endpoints Principais

Observação: início dos endpoits abaixo precisam ser: `/api/products`.

- `GET /`: Listar todos os procutos cadastrados.
- `GET /:id`: Buscar um produto específico com base no ID fornecido.
- `POST /`: Criar um novo procuto no sistema.
- `PUT /:id`: Atualizar produto existente com base no seu ID.
- `DELETE /:id`: Exclui um procuto especíico com base no ID fornecido.
