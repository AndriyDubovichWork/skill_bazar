import mysql from 'mysql2/promise';

const getAllUsersFromDB = (connection: mysql.Connection) => {
  return connection.execute(`
        SELECT * FROM Users
    `);
};

export default getAllUsersFromDB;
