import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function createAndPopulateUserTables(name, surname) {
  const db = await open({
    filename: "./banco.db",
    driver: sqlite3.Database,
  });

  db.run(
    `CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, surname TEXT)`
  );
}

createAndPopulateUserTables()
