// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['/Users/brotherzeal/Desktop/Codesmith/TimeKube'],
  modulePaths: ['/Users/brotherzeal/Desktop/Codesmith/TimeKube'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['dotenv/config'],
};