// Importa a função do model que realiza a consulta no banco de dados
// Essa função é responsável por acessar os dados dos concursos
const { findConcursosByCapacidades } = require('../models/concursosModel');

// Função assíncrona da camada de serviço que recebe a string de capacidades e prepara os dados
async function buscarConcursos(capacidades) {
  // Inicializa o array de capacidades vazio
  let capacidadesArray = [];

  // Se a string 'capacidades' foi passada na requisição, transforma em array
  // Exemplo: "marceneiro,carpinteiro" → ["marceneiro", "carpinteiro"]
  if (capacidades) {
    capacidadesArray = capacidades.split(',').map(p => p.trim());
  }

  // Chama a função do model passando o array já tratado
  // Essa função vai retornar os concursos compatíveis do banco
  const concursos = await findConcursosByCapacidades(capacidadesArray);

  // Retorna os concursos encontrados
  return concursos;
}

// Exporta a função para que ela possa ser usada pelo controller
module.exports = { buscarConcursos };