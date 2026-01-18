import { test, expect } from '../fixtures';
import { getProductSearchData } from '../../../utils/test-data';


const productSearchData = getProductSearchData();

// Scenario: Following user login, the user selects a category and confirms that the expected items are present within that category

for (const entry of productSearchData) {
test(`testcase id: ${entry.id}  User can search for a product: ${entry.description}`, async ({ 
    page, loginPage, productPage, env 
  }) => {
  
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