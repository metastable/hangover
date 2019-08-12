const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/.cache/', '<rootDir>/node_modules/'],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coverageReporters: ['lcov', 'text', 'html'],
  globals: {
    __PATH_PREFIX__: ``,
  },
  resolver: 'jest-pnp-resolver',
  watchPlugins: [
    '<rootDir>/node_modules/jest-watch-typeahead/filename.js',
    '<rootDir>/node_modules/jest-watch-typeahead/testname.js',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
