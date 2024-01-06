import { DB } from "kysely-codegen"; // this is the Database interface we defined earlier
import SQLite from "better-sqlite3";
import { Kysely, SqliteDialect } from "kysely";
import { initDB } from "./appdb";

const dialect = new SqliteDialect({
  database: new SQLite("appdata/snapshots.db"),
});

export const db = new Kysely<DB>({
  dialect,
});

export async function insertBackup(clusterId: string, url: string) {
  const insertedRow = await db
    .insertInto("backups")
    .values({ clusterId, url })
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
    .executeTakeFirstOrThrow();
  console.log(res);
  return res;
}

export async function getAllBackups() {
  return await db.selectFrom("backups").selectAll().execute();
}

export async function deleteBackupById(id: number | null) {
  if (!id) return;
  return await db.deleteFrom("backups").where("id", "=", id).execute();
}

export { initDB };
