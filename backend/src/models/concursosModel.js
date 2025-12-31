// Importa o pool de conexões com o banco de dados PostgreSQL
// Esse pool foi provavelmente criado no arquivo db.js e é responsável por gerenciar as conexões
const pool = require('../../db');

// Função assíncrona que busca concursos com base em uma lista de capacidades (profissões)
async function findConcursosByCapacidades(capacidadesArray) {
  // Consulta base: seleciona todos os concursos
  let query = 'SELECT * FROM "Concursos"';
  let params = [];

  // Se capacidades foram fornecidas (e o array não está vazio), modifica a query
  // Filtra os concursos que tenham pelo menos uma vaga correspondente às capacidades
  if (capacidadesArray && capacidadesArray.length > 0) {
    query += `
      WHERE EXISTS (
        SELECT 1 
        FROM unnest(lista_de_vagas) AS vaga 
        WHERE vaga = ANY($1)
      )`;
    // Adiciona o array de capacidades como parâmetro para a consulta
    params.push(capacidadesArray);
  }

  // Executa a query no banco de dados com os parâmetros fornecidos
  const result = await pool.query(query, params);

  // Retorna apenas as linhas (concursos) obtidas da consulta
  return result.rows;
}

// Exporta a função para que possa ser usada em outros módulos (services, controllers, etc.)
module.exports = { findConcursosByCapacidades };
