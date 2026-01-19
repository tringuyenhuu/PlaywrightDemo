import { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly categoryList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.categoryList = page.locator('.list-group');
  }

  async selectCategories(categoryName: string) {
    const categoryLink = this.categoryList.getByRole('link', { name: categoryName, exact: true });
    await categoryLink.click();
  }

  async getProductCount(): Promise<number> {
    // Locate the product cards
    return await this.page.locator('.card-block').count();
  }
}