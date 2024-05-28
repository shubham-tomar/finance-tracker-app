import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "ExpenseTracker.db";
const database_version = "1.0";
const database_displayname = "SQLite ExpenseTracker Database";
const database_size = 200000;

export const getDBConnection = async () => {
  return SQLite.openDatabase(
    database_name,
    database_version,
    database_displayname,
    database_size
  );
};

export const createTables = async (db) => {
  await db.executeSql(`
    CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      amount REAL,
      date TEXT
    );
  `);
};

export const addExpense = async (db, expense) => {
  const { title, amount, date } = expense;
  await db.executeSql(`
    INSERT INTO expenses (title, amount, date)
    VALUES (?, ?, ?);
  `, [title, amount, date]);
};

export const getExpenses = async (db) => {
  const results = await db.executeSql(`SELECT * FROM expenses;`);
  return results[0].rows.raw(); // Convert results to array of objects
};
