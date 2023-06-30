import mysql from 'mysql2/promise';

const checkifUserRegistered = (connection: mysql.Connection, email: string) => {
  return connection.execute(`
        SELECT email,passwordHash FROM Users
        WHERE email = '${email}'
        LIMIT 1;
    `);
};

export default checkifUserRegistered;
