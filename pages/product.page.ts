import { Page } from '@playwright/test';
import { getEnvironment } from '../environment/environments';

export class ProductPage {
  constructor(private page: Page) {}

  async selectCategories(categories: string) {
    await this.page.click(`text=${categories}`);
  }

}