module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/__mocks__/setupTests.js'],
  moduleNameMapper: {
    '.(css|jpg|png)$': '<rootDir>/src/__mocks__/empty-module.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
};
