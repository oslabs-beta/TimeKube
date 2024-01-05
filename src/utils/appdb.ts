const db = require("better-sqlite3")('appdata/snapshots.db'); // Replace with your database path

export function initDB() {
  db.exec(
    "CREATE TABLE IF NOT EXISTS backups (id INTEGER PRIMARY KEY AUTOINCREMENT, clusterId TEXT, creationDate DATETIME DEFAULT CURRENT_TIMESTAMP, url TEXT)"
  );
}

export function insertBackup(clusterId: string, url: string): number {
  // See info object from bettersqlite3 docs
  const info = db.prepare("INSERT INTO backups (url) VALUES (?)").run(url);
  console.log('Sample entry inserted with ID:', info.lastInsertRowid);
  return info.lastInsertRowid;
}

export async function getAllBackups() {
  return await db.prepare("SELECT * FROM backups").all();
}