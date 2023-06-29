import mysql from 'mysql2/promise';

const AddUserToDB = (
  connection: mysql.Connection,
  email: string,
  passwordHash: string
) => {
  return connection.execute(`
         INSERT INTO Users(
             email,passwordHash
         )
         VALUES(
             '${email}',
             '${passwordHash}'
         )
           `);
};

export default AddUserToDB;
