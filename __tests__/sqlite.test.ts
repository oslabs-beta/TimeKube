// import { initDB, insertBackup, getAllBackups } from "@/utils/appdb";
import { initDB, insertBackup, getAllBackups, deleteBackupById, getBackup } from "@/utils/appdb-kysely";

describe('sqlite database tests', () => {
  let insertedId: number | null;
  // let insertedId: any;

  beforeAll(async () => {
    insertedId = -1;
    initDB();
  });

  xit('should get all rows', async () => {
    insertedId = await insertBackup('default', 'https://www.get-test.com');
    const rows = await getAllBackups();
    console.log(rows);
    expect(rows.length).toBeGreaterThan(0);
  })

  it('should get a backup by id', async () => {
    insertedId = await insertBackup('default', 'https://www.get-id-test.com');
    console.log(insertedId)
    const inserted = await getBackup(insertedId);
    expect(inserted.url).toBe('https://www.get-id-test.com');
  })

  xit('should insert a url', async () => {
    insertedId = await insertBackup('default', 'https://www.insert-test.com');
    const inserted = await getBackup(insertedId);
  });

  afterEach(async () => {
    if (insertedId) {
      await deleteBackupById(insertedId);
    }
  })

})