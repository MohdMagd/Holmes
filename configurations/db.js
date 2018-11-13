/**
 * Database configuration variables
 */
let dbConfig = {};

dbConfig.name = process.env.DB_NAME || "sample_db";
dbConfig.dialect = process.env.DB_DIALECT || "postgres";
dbConfig.user = process.env.DB_USER || null;
dbConfig.password = process.env.DB_PASSWORD || null;

module.exports = dbConfig;