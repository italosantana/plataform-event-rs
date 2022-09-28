import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    projects: ['<rootDir>/apps/web/jest.config.js'],
    verbose: true,
};
export default config;