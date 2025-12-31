// Importa o framework Express para criação do servidor e rotas
const express = require('express');

// Cria a instância da aplicação Express
const app = express();

// Importa as rotas relacionadas a concursos, que ficam em um módulo separado
const concursosRoutes = require('./src/routes/concursosRoutes');

// Middleware para interpretar requisições com corpo JSON
// Isso permite que você acesse req.body como objeto JavaScript
app.use(express.json());

// Configura o uso das rotas importadas
app.use('/', concursosRoutes);

// Exporta o app para que o arquivo server.js ou testes possam importar e rodar o servidor
module.exports = app;
