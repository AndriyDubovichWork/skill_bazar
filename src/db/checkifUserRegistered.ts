import mysql from 'mysql2/promise';

const checkifUserRegistered = (connection: mysql.Connection, email: string) => {
  try {
    connection.execute(`
         INSERT INTO Users(
             email,passwordHash
         )
         VALUES(
             '${email}',
         )
           `);
  } catch (e) {
    return e;
  }
};

export default checkifUserRegistered;
