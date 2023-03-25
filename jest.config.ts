import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|ts|tsx)?$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!(@mui|@babel|@o2)/)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  collectCoverageFrom: ['src/core/**/*.(js|ts|tsx)', '!**/node_modules/**'],
  coverageReporters: ['text', 'text-summary', 'cobertura', 'html'],
  testMatch: ['**/*.test.(js|ts|tsx)'],
};

export default config;
