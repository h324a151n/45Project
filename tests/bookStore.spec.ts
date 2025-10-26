import { test, expect } from '@playwright/test';
import { loginWithCredentials, loginAsValidUser, loginAsInvalidUser, registerAsNewUser } from '../fixtures/helpers/loginHelper';

test('Register As A New User', async ({ page }) => {
  await registerAsNewUser(page);
}); 

test('Login As A Valid User', async ({ page }) => {
  await loginAsValidUser(page);
});

test('Login As An Invalid User', async ({ page }) => {
  await loginAsInvalidUser(page);
}); 