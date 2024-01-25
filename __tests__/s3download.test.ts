import {checkFileExistsInS3, deleteFromS3, downloadFromS3, uploadToS3} from "@/services/aws-s3-service.ts";

describe("s3 file download tests", () => {

  it("should get a file from s3", async () => {
    const uploaded = await uploadToS3(
      "./__tests__/testExample.yaml",
      "download_test"
    );
    expect(uploaded.Key).toBeDefined();
    expect(uploaded.Location).toBeDefined();

    const fileExists = await checkFileExistsInS3(uploaded.Key);
    expect(fileExists).toBe(true);

    const fileText = await downloadFromS3(uploaded.Key);
    expect(fileText.length).toBeGreaterThan(30);

    // Cleanup
    await deleteFromS3(uploaded.Key)
  })
})