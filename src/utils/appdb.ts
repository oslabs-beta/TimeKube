const db = require("better-sqlite3")("appdata/snapshots.db"); // Replace with your database path

export async function initDB() {
  await db.prepare(
    "CREATE TABLE IF NOT EXISTS myTable (id INTEGER PRIMARY KEY AUTOINCREMENT, creationDate DATETIME DEFAULT CURRENT_TIMESTAMP, url TEXT)"
  );
}

export async function insertBackup(url: string) {
  await db.prepare("INSERT INTO myTable (url) VALUES (?)").run(url);
}

export async function getAllBackups() {
  return await db.prepare("SELECT * FROM myTable").all();
}