// Detect environment
export const currentEnv = (process.env.ENV || 'dev') as 'dev' | 'sit';

// Helper function to load data based on current environment
export function getProductSearchData() {
  return require(`../data/${currentEnv}/product-search.json`);
}