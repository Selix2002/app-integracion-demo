import { getDatabase } from '../database/dbConfig';

export const fetchData = async () => {
  const db = getDatabase();
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM ejemplo;',
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error)
      );
    });
  });
};

// Funciones adicionales (create, update, delete) según necesidad