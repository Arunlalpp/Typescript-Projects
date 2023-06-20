module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx,tsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  };
  
  