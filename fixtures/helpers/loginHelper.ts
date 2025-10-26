import { Page, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { loginData } from '../../fixtures/data/loginData';

export async function loginWithCredentials(
  page: Page,
  username: string,
  password: string
) {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLogin();
  await expect(loginPage.loginBtn).toBeVisible();
  await expect(loginPage.newUserBtn).toBeEnabled();
  await loginPage.login(username, password);

}


export async function registration(
    page:Page,
    firstname: string,
    lastname: string,
    username: string,
    password: string
) {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToRegister();
  await expect (loginPage.registerContent).toBeVisible();
  await loginPage.newUser(page, firstname, lastname, username, password)
}


export async function loginAsValidUser(page: Page) {
  const loginPage = new LoginPage(page);
  await loginWithCredentials(page, loginData.valid.userName, loginData.valid.password);
  await expect(page).toHaveURL("profile");
  await expect(loginPage.logoutBtn).toBeVisible();
}


export async function loginAsInvalidUser(page: Page) {
  const loginPage = new LoginPage(page);
  await loginWithCredentials(page, loginData.invalid.userName, loginData.invalid.password);
  await loginPage.expectLoginFailed();
}


export async function registerAsNewUser(page:Page) {
    const loginPage = new LoginPage(page);
    await registration(page, loginData.register.firstName, loginData.register.lastName, loginData.register.userName, loginData.register.password);
    page.once('dialog', async (dialog) => {
    expect(dialog.message()).toBe('User Register Successfully');
    await dialog.accept();
  });
}

