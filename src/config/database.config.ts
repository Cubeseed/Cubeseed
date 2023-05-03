import { Sequelize } from "sequelize";

const db = new Sequelize('cubeseed', 'postgres', 'rootroot', {
    host: 'localhost',
    dialect: 'postgres' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

export default db;