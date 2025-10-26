import { Locator, Page, expect, Route } from '@playwright/test';
import { LookupAddress } from 'dns';

export class LoginPage {
  readonly page: Page;
  readonly loginContent: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;
  readonly newUserBtn: Locator;
  readonly registerContent: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly registerationUserName: Locator;
  readonly registrationPassword: Locator;
  readonly captcha: Locator;
  readonly captchaCheckMark: Locator;
  readonly registerBtn: Locator;
  readonly errorMsg: Locator;
  readonly userExistMsg: Locator;
  readonly logoutBtn: Locator;
  readonly userNameValue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginContent = page.locator('//h1[text()="Login"]');
    this.usernameInput = page.locator('#userName');
    this.passwordInput = page.locator('#password');
    this.loginBtn = page.locator('#login');
    this.newUserBtn = page.locator('#newUser');
    this.registerContent = page.locator('//h1[text()="Register"]')
    this.firstName = page.locator('#firstname');
    this.lastName = page.locator('#lastname');
    this.registerationUserName = page.locator('#userName');
    this.registrationPassword = page.locator('#password');
    this.captcha = page.locator('//label[@id="recaptcha-anchor-label"]');
    this.captchaCheckMark = page.locator('//div[@class="recaptcha-checkbox-spinner"]');
    this.registerBtn = page.locator('#register');
    this.errorMsg = page.locator('#name');
    this.userExistMsg = page.locator('//p[@id="name" and text()="User exists!"]');
    this.logoutBtn = page.locator('(//button[@id="submit"])[1]');
    this.userNameValue = page.locator('//label[@id="userName-value"]')
  }

  async navigateToLogin() {
    await this.page.goto('/login');
  }
  
  async navigateToRegister() {
    await this.page.goto('/register');
  }

  async login(username: string, password: string) {
    await expect(this.loginContent).toBeVisible();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }

  async newUser(page: Page, firstName: string, lastName: string, registerationUserName: string, registrationPassword: string) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.registerationUserName.fill(registerationUserName);
    await this.registrationPassword.fill(registrationPassword);
    await page.route('**/recaptcha/**', route => route.fulfill({ status: 200, body: 'OK' }));
    await this.registerBtn.click();
  }

  async expectLoginFailed() {
    await expect(this.errorMsg).toBeVisible();
    await expect(this.errorMsg).toHaveText('Invalid username or password!');
  }
}


