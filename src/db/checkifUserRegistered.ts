import mysql from 'mysql2/promise';

const checkifUserRegistered = (connection: mysql.Connection, email: string) => {
  try {
    return connection.execute(`
        SELECT email,passwordHash FROM Users
        WHERE email = '${email}';
    `);
  } catch (e) {
    return e;
  }
};

export default checkifUserRegistered;
