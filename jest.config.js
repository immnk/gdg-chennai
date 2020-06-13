const packageName = process.env.npm_package_name;

module.exports = {
  collectCoverageFrom: ['src/**/*.js', '!src/**/index.js'],
  coverageDirectory: 'reports/coverage',
  coverageThreshold: {
    global: {
      statements: 10,
      branches: 10,
      functions: 10,
      lines: 10
    }
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: packageName,
        outputDirectory: 'reports',
        outputName: `${packageName}_junit.xml`,
        classNameTemplate: packageName
      }
    ]
  ],
  setupFiles: [],
  testMatch: ['<rootDir>/src/**/*.test.js'],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '.+\\.js$': './node_modules/babel-jest'
  },
  moduleFileExtensions: ['js'],
  moduleNameMapper: {
    '^store(.*)$': '<rootDir>/src/store$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^utils(.*)$': '<rootDir>/src/utils/$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|svg|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/fileMock.js'
  },
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
