// import { initDB, insertBackup, getAllBackups } from "@/utils/appdb";
import {
  initDB,
  insertBackup,
  getAllBackups,
  deleteBackupById,
  getBackup,
} from "@/utils/appdb-kysely";

describe("sqlite database tests", () => {
  let insertedId: number | null;
  // let insertedId: any;

  beforeAll(async () => {
    insertedId = null;
    initDB();
  });

  it("should get all rows", async () => {
    // need to insert in case db is empty
    // need to assign insertedId for cleanup
    const newRow = await insertBackup("default", "https://www.get-test.com");
    insertedId = newRow.id;
    if (insertedId === null) {
      throw new Error("Failure to insert: id is null");
    }

    const rows = await getAllBackups();
    expect(rows.length).toBeGreaterThan(0);
  });

  it("should get a backup by id", async () => {
    const newRow = await insertBackup("default", "https://www.get-id-test.com");
    insertedId = newRow.id;
    const inserted = await getBackup(insertedId);
    expect(inserted.url).toBe("https://www.get-id-test.com");
  });

  it("should insert a url", async () => {
    const insertedRow = await insertBackup("default", "https://www.insert-test.com");
    insertedId = insertedRow.id;
  });

  afterEach(async () => {
    if (insertedId) {
      await deleteBackupById(insertedId);
    }
  });
});
