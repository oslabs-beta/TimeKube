import { DB } from "kysely-codegen"; // this is the Database interface we defined earlier
import SQLite from "better-sqlite3";
import { Kysely, SqliteDialect } from "kysely";
import { initDB } from "./appdb";
import cluster from "cluster";

const dialect = new SqliteDialect({
  database: new SQLite(process.env.DATABASE_URL || './appdata/snapshots.db'),
});

export const db = new Kysely<DB>({
  dialect,
});

export async function insertBackup(url: string, storageKey: string, clusterId: string = "default") {
  if (!clusterId) {
    clusterId = "default";
  }
  if (!storageKey) {
    throw new Error("NoCloudStorageFileKeyError")
  }
  console.log(clusterId, url)
  const insertedRow = await db
    .insertInto("backups")
    .values({ clusterId, url, storageKey })
    .returningAll()
    .executeTakeFirstOrThrow();
  return insertedRow;
}

export async function getBackup(id: number | null) {
  if (!id) {
    throw new Error("id is null");
  }
  const res = await db
    .selectFrom("backups")
    .selectAll()
    .where("id", "=", id)
    .executeTakeFirst();
  console.log(res);
  return res;
}

export async function getAllBackups() {
  return await db.selectFrom("backups").selectAll().execute();
}

export async function deleteBackupById(id: number | null) {
  if (!id) return;
  return await db.deleteFrom("backups").where("id", "=", id).executeTakeFirst();
}

export { initDB };
