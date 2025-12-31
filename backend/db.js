// Importa o módulo 'pg' (node-postgres) que permite conectar e consultar um banco PostgreSQL
const { Pool } = require('pg');

// Carrega variáveis de ambiente definidas no arquivo .env (caso esteja usando - não está)
require('dotenv').config();

// Cria um novo pool de conexões com o banco PostgreSQL
const pool = new Pool({
  // Define a URL de conexão diretamente (poderia usar process.env.DATABASE_URL no lugar... mas não consegui)
  connectionString: "postgresql://postgres.znzfjumybhqviopjrntq:FeE6SG150k5u2K9P@aws-0-sa-east-1.pooler.supabase.com:6543/postgres",

  // Configura SSL apenas se estiver em ambiente de produção
  // Isso é útil para garantir segurança em conexões externas (ex: Supabase)
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Exporta o pool de conexões para ser reutilizado em toda a aplicação
// Outros arquivos poderão usar `const pool = require('../../db');`
module.exports = pool;
