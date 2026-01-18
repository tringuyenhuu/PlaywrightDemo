import { test as base } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { ProductPage } from '../../pages/product.page';
import { getEnvironment, EnvironmentConfig } from '../../environment/environments';


type MyFixtures = {
  loginPage: LoginPage;
  productPage: ProductPage;
  env: EnvironmentConfig;
};


export const test = base.extend<MyFixtures>({

   env: async ({}, use) => {
    const env = getEnvironment();
    await use(env);
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
});

export { expect } from '@playwright/test';