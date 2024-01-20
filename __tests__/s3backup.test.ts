import { checkFileExistsInS3, deleteFromS3, uploadToS3 } from "@/services/aws-s3-service";
import { backupFile } from "@/app/backup/backup.action";

describe("s3 upload database tests", () => {
  let fileCleanup: string | null;

  beforeAll(() => {
    // Set up your environment variables for testing
    process.env.AWS_ACCESS_KEY_ID;
    process.env.AWS_SECRET_ACCESS_KEY;
    process.env.AWS_REGION;
  });

  it("should upload to s3", async () => {
    const uploaded = await uploadToS3(
      "./__tests__/s3uploadtest.txt",
      "upload_test"
    );
    const fileCleanup = uploaded.Key;
    expect(uploaded.Key).toBeDefined();
    expect(uploaded.Location).toBeDefined();

    const fileExists = await checkFileExistsInS3(uploaded.Key);
    expect(fileExists).toBe(true);

    console.log(uploaded.Location);
  });

  it("should delete a file from s3", async () => {
    const uploaded = await uploadToS3(
      "./__tests__/s3uploadtest.txt",
      "upload_test"
    );
    const fileToDelete = uploaded.Key;
    await deleteFromS3(fileToDelete);

    const fileExists = await checkFileExistsInS3(fileToDelete);
    expect(fileExists).toBe(false);
  });

  it("should add an entry to the database for an uploaded file", async () => {
    const dbrow = await backupFile('./__tests__/s3uploadtest.txt', 'test');
    expect(dbrow).toBeDefined();
  })

  afterEach(async () => {
    if (fileCleanup) {
      await deleteFromS3(fileCleanup);
      fileCleanup = null;
    }
  })
});