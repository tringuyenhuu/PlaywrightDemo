import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/login.page';
import { ProductPage } from '../../../pages/product.page';
import { getEnvironment } from '../../../environment/environments';

const env = getEnvironment();
const currentEnv = (process.env.ENV || 'dev') as 'dev' | 'sit';
// Import data based on current environment
const productSearchData = require(`../../data/${currentEnv}/product-search.json`);
for (const entry of productSearchData) {
test(`testcase id: ${entry.id}  User can search for a product: ${entry.description}`, async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  
  await loginPage.goto(env.baseURL);
  await loginPage.login(entry.userName, entry.password);
  // Wait for login to complete
  await page.waitForTimeout(env.waitTimeout);
  await expect(page.locator('#nameofuser')).toBeVisible();
  await expect(page.locator('#nameofuser')).toHaveText(`Welcome ${entry.userName}`);
  
  await productPage.selectCategories(entry.categories);
  // Wait for products to load
  await page.waitForTimeout(env.searchTimeout);
  const productItems = page.locator('.card.h-100');
  const count = await productItems.count();
  console.log(`Found ${count} products for select categories: ${entry.categories}`);
  expect(count).toBeGreaterThanOrEqual(entry.expectedMinResults);
});}