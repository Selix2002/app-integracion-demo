import { openDatabase } from 'expo-sqlite';

const db = openDatabase('app_db.db');

export const initDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ejemplo (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT);',
        [],
        () => resolve(),
        (_, error) => reject(error)
      );
    });
  });
};

export const getDatabase = () => db;