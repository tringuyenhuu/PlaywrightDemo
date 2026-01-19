import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginNavButton: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginSubmitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginNavButton = page.locator('//a[@id="login2"]');
    this.usernameInput = page.locator('#loginusername');
    this.passwordInput = page.locator('#loginpassword');
    this.loginSubmitButton = page.locator('//button[text()="Log in"]');
  }

  async goto(baseURL: string) {
    await this.page.goto(baseURL);
  }

  async login(username: string, password: string) {
    await this.loginNavButton.click();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginSubmitButton.click();
  }
}