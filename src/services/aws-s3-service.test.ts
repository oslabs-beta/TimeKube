import * as AWS from 'aws-sdk';
import s3 from './aws-s3-service'; // Assuming your AWS config file is in the same directory

// Use Jest's mocking capabilities
jest.mock('aws-sdk');

// Manually type the mocked module to include 'S3'
const mockAWS = AWS as jest.Mocked<typeof AWS> & { S3: jest.Mock };

describe('S3 Service Configuration', () => {
  beforeAll(() => {
    // Set up your environment variables for testing
    process.env.AWS_ACCESS_KEY_ID;
    process.env.AWS_SECRET_ACCESS_KEY;
    process.env.AWS_REGION;
  });

  it('should configure AWS SDK with environment variables', () => {
    // Arrange
    const expectedConfig = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    };

    // Act
    s3; // This line will import and run your AWS configuration file

    // Assert
    expect(mockAWS.config.update).toHaveBeenCalledWith(expectedConfig);
  });

  afterAll(() => {
    // Clean up after testing
    jest.restoreAllMocks();
  });
});
