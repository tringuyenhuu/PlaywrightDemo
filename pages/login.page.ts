import { Page } from '@playwright/test';
import { getEnvironment } from '../environment/environments';

export class LoginPage {

  constructor(private page: Page) {}

  async goto(baseURL: string) {
    await this.page.goto(baseURL);
  }

  async login(username: string, password: string) {
    await this.page.locator('//a[@id="login2"]').click();
    await this.page.locator('#loginusername').fill(username);
    await this.page.locator('#loginpassword').fill(password);
    await this.page.locator('//button[text()="Log in"]').click();
  }
}