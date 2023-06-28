import mysql from 'mysql2/promise';

const createDBConnection = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    database: 'SkillBazar',
    user: 'andriy',
    password: '1234',
  });
  connection.execute(`
  CREATE DATABASE IF NOT EXISTS SkillBazar;
  `);
  connection.execute(`
    CREATE TABLE IF NOT EXISTS Users(
      id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      passwordHash VARCHAR(255) NOT NULL
    );
  `);

  return connection;
};

export default createDBConnection;
