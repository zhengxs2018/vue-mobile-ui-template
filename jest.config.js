// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
const { defaults } = require('jest-config')
const pkg = require('./package.json')

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  name: pkg.name,
  preset: 'ts-jest',
  globals: {
    'vue-jest': {
      babelConfig: false
    }
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.ts$': 'ts-jest'
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'vue', 'tsx'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['node_modules', '/docs/', '/mobile/'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,vue}',
    '!**/demo/**',
    '!**/test/**',
    '!**/lang/**',
  ],
}
