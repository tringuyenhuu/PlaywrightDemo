import { devEnvironment } from './environments-dev';
import { sitEnvironment } from './environments-sit';

export const environments = {
  dev: devEnvironment,
  sit: sitEnvironment,
};

export type Environment = keyof typeof environments;

export function getEnvironment(env?: string): typeof environments['dev'] {
  const currentEnv = (env || process.env.ENV || 'dev') as Environment;
  return environments[currentEnv];
}