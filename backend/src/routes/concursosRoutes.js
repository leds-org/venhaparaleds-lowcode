// Importa o módulo Express para criar o roteador
const express = require('express');

// Cria uma nova instância de roteador do Express
const router = express.Router();

// Importa o controlador que lida com a lógica da rota /concursos
// Esse controlador contém a função getConcursos que será executada quando a rota for chamada
const { getConcursos } = require('../controllers/concursosController');

// Define a rota GET /concursos e associa a função getConcursos como handler
// Quando essa rota for acessada, o Express irá chamar o controlador
router.get('/concursos', getConcursos);

// Exporta o roteador para que ele possa ser usado no app principal (index.js ou server.js)
module.exports = router;
