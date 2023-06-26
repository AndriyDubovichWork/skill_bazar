import mysql from 'mysql2/promise';

const AddUserToDB = (
  connection: mysql.Connection,
  email: string,
  passwordHash: string
) => {
  try {
    connection.execute(`
         INSERT INTO Users(
             email,passwordHash
         )
         VALUES(
             '${email}',
             '${passwordHash}'
         )
           `);
  } catch (e) {
    return e;
  }
};

export default AddUserToDB;
