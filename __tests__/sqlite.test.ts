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
    const newRow = await insertBackup(
      "https://www.get-test.com",
      "test-no-s3-key",
      "default"
    );
    insertedId = newRow.id;
    if (insertedId === null) {
      throw new Error("Failure to insert: id is null");
    }

    const rows = await getAllBackups();
    expect(rows.length).toBeGreaterThan(0);
  });

  it("should get a backup by id", async () => {
    const newRow = await insertBackup(
      "https://www.get-id-test.com",
      "test-no-s3",
      "test"
    );
    insertedId = newRow.id;
    const inserted = await getBackup(insertedId);
    if (!inserted) {
      throw new Error("There was an unknown error inserting.");
    }
    expect(inserted.url).toBe("https://www.get-id-test.com");
  });

  it("should insert a url", async () => {
    const testUrl = "https://www.insert-test.com";
    const insertedRow = await insertBackup(testUrl, "test-no-s3", "test");
    insertedId = insertedRow.id;
    expect(insertedRow.url).toBe(testUrl);
  });

  it("should delete a row by id", async () => {
    const testUrl = "https://delete-test.com";
    const insertedRow = await insertBackup(testUrl, "test-no-s3", "test");
    const deleteResult = deleteBackupById(insertedRow.id);

    // Check if that item still exists
    const rowShouldBeDeleted = await getBackup(insertedRow.id);
    expect(rowShouldBeDeleted).toBeUndefined();
  });

  afterEach(async () => {
    if (insertedId) {
      await deleteBackupById(insertedId);
    }
  });
});
