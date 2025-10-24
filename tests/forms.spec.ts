import { test, expect } from '@playwright/test';
import { formData } from '../fixtures/data/formData';
import { FormsPage } from '../pages/formsPage';

test('Submit form with valid data', async ({ page }) => {
  const formsPage = new FormsPage(page);
  await formsPage.navigateToForm();
  await expect(page).toHaveTitle("DEMOQA");
  await expect(formsPage.firstName).toBeVisible();
  await expect(formsPage.submitBtn).toBeEnabled();
  await formsPage.enterBasicInfo(formData.basicInfo);
  await formsPage.enterGender(formData.gender);
  await formsPage.dateOfBirthday(formData.dob);
  await formsPage.enterSubjects(formData.subjects);
  await formsPage.enterHobbies(formData.hobbies);
  await formsPage.enterAddress(formData.address);
  await formsPage.uploadFile(formData.picturePath);
  await formsPage.selectStateAndCity(formData.state, formData.city);
  await formsPage.submitForm();
  await formsPage.verifySubmission();
});