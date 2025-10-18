# backend-mongodb-1

## Descrição

O projeto `backend-mongodb-1` foi desenvolvido como parte de um treinamento intensivo de back-end, com foco em aprender e aplicar os conceitos de uma API RESTful utilizando o Mongoose como ORM e o banco de dados MongoDB. O tema do projeto é um sistema de registro de atividades de caminhada para uma aplicação fictícia, permitindo listar, buscar, criar, atualizar e deletar informações de caminhadas. **Tempo de desenvolvimento**: 3 horas e 15 minutos.

## Tecnologias usadas

- ![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=flat-square) **Express**
- ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white&style=flat-square) **Node.js**
- ![Mongoose](https://img.shields.io/badge/Mongoose-880000?logo=mongodb&logoColor=white&style=flat-square) **Mongoose**
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white&style=flat-square) **MongoDB**

## Funcionalidades

- **Listagem de Caminhadas**: Exibir a lista de todas as atividades de caminhada cadastradas.
- **Buscar Caminhada**: Buscar uma atividade de caminhada específica com base no seu ID.
- **Criação de Caminhada**: Registrar novas atividades de caminhada com as informações: título, metros caminhados, data/hora de início e descrição (opcional).
- **Atualizar Caminhada**: Atualizar uma atividade de caminhada existente com base no seu ID.
- **Exclusão de Caminhada**: Excluir uma atividade de caminhada específica com base no ID.
- **API RESTful**: Endpoints organizados seguindo os padrões REST para gerenciar atividades de caminhada.

## Como Executar

1. **Pré-requisitos**:

   - Node.js instalado.
   - Conta no MongoDB (ou instância local) para configurar o banco de dados.

2. **Passos**:

   ```bash
   # Clone o repositório
   git clone <URL_DESTE_REPOSITORIO>

   # Entre no diretório do projeto
   cd backend-mongodb-1

   # Instale as dependências
   npm install

   # Configure o arquivo .env com a URL do banco MongoDB e a porta
   MONGODB="sua_url_do_mongodb"
   PORT="sua_porta"

   # Inicie o servidor
   npm run start
   ```

## Endpoints Principais

Observação: início dos endpoints abaixo precisam ser: `/api/walking`.

- `GET /`: Listar todas as atividades de caminhada cadastradas.
- `GET /:id`: Buscar uma atividade de caminhada específica com base no ID fornecido.
- `POST /`: Criar uma nova atividade de caminhada no sistema.
- `PUT /:id`: Atualizar uma atividade de caminhada existente com base no seu ID.
- `DELETE /:id`: Excluir uma atividade de caminhada específica com base no ID fornecido.
