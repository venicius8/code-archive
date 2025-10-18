# backend-neon-1

## Descrição

O projeto `backend-neon-1` foi desenvolvido como parte de um treinamento intensivo de back-end, com foco em aprender e aplicar os conceitos de uma API RESTful utilizando o Prisma como ORM e o banco de dados Neon. O tema do projeto é um sistema de registro de pets para adoção, permitindo listar, criar e deletar informações de pets para adoção. **Tempo de desenvolvimento**: 4 horas.

## Tecnologias usadas

- ![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=flat-square) **Express**
- ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white&style=flat-square) **Node.js**
- ![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white&style=flat-square) **Prisma**
- ![Neon](https://img.shields.io/badge/Neon-008B99?logoColor=white&style=flat-square) **Neon (database)**

## Funcionalidades

- **Listagem de Pets**: Exibir a lista de todos os pets cadastrados.
- **Criação de Pets**: Registrar novos pets com as informações: nome, gênero, raça e idade.
- **Exclusão de Pets**: Excluir cadastro de pets por meio de IDs únicos.
- **API RESTful**: Endpoints organizados seguindo os padrões REST para gerenciar pets.

## Como Executar

1. **Pré-requisitos**:

   - Node.js instalado.
   - Conta no Neon para configurar o banco de dados.

2. **Passos**:

   ```bash
   # Clone o repositório
   git clone <URL_DESTE_REPOSITORIO>

   # Entre no diretório do projeto
   cd backend-neon-1

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

Observação: início dos endpoits abaixo precisam ser: `/api/pets`.

- `GET /pets`: Listar todos os pets cadastrados.
- `POST /pets`: Criar um novo pet no sistema.
- `DELETE /pets/:id`: Exclui um pet especíico com base no ID fornecido.
