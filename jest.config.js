module.exports = {
  setupFiles: [
    '<rootDir>/config/jest/setup.js',
  ],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/config/jest/styleMock.js',
  },
  'snapshotSerializers': ['enzyme-to-json/serializer'],
};
