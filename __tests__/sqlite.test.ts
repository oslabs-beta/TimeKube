import { initDB, insertBackup, getAllBackups } from "@/utils/appdb";

describe('sqlite database tests', () => {
  beforeAll(async () => {
    await initDB();
  });

  it('should insert a url', async () => {
    const beforeRows = await getAllBackups();
    await insertBackup('https://www.google.com');
    const afterRows = await getAllBackups();
    const dif = afterRows.length - beforeRows.length;
    expect(dif).toBe(1);
  });
})