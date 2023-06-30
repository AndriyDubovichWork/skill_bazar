import mysql from 'mysql2/promise';

const getUserById = (connection: mysql.Connection, id: string) => {
  return connection.execute(`
  SELECT email FROM Users
  WHERE id = '${id}';
           `);
};

export default getUserById;
