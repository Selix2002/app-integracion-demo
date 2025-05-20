import { getDatabase } from './dbConfig';

export const seedDatabase = async () => {
  const db = getDatabase();
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO ejemplo (nombre) VALUES (?), (?), (?);',
        ['Registro 1', 'Registro 2', 'Registro 3'],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};