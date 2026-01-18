import { devEnvironment } from './environments-dev';
import { sitEnvironment } from './environments-sit';

export const environments = {
  dev: devEnvironment,
  sit: sitEnvironment,
};

interface EnvironmentConfig {
    baseURL: string;
    apiURL: string;
    waitTimeout: number;
    searchTimeout: number;
    retries: number;
}

type Environment = keyof typeof environments;

function getEnvironment(env?: Environment): EnvironmentConfig {
  const currentEnv: Environment = (env || (process.env.ENV || 'dev')) as Environment;
  return environments[currentEnv];
}

export { getEnvironment };
export type { EnvironmentConfig, Environment };