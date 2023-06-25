import mysql from 'mysql2/promise';

const createDBConnection = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    database: 'SkillBazar',
    user: 'andriy',
    password: '1234',
  });
};

export default createDBConnection;
