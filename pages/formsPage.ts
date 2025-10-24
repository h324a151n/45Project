import { Page, Locator } from '@playwright/test';

export class FormsPage {
  readonly page: Page;

  readonly  practiceForm: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly mobile: Locator;
  readonly genderMale: Locator;
  readonly genderFemale: Locator;
  readonly genderOther: Locator;
  readonly dob: Locator;
  readonly subjects: Locator;
  readonly hobbiesSports: Locator;
  readonly hobbiesReading: Locator;
  readonly hobbiesMusic: Locator;
  readonly uploadPicture: Locator;
  readonly currentAddress: Locator;
  readonly stateDropdown: Locator;
  readonly cityDropdown: Locator;
  readonly submitBtn: Locator;

  readonly confirmationModal: Locator;
  readonly modalTitle: Locator;
  readonly modalCloseBtn: Locator;

  constructor(forms: Page) {
    this.page = forms;

    this.practiceForm = forms.locator('xpath=//span[normalize-space()="Practice Form"]');
    this.firstName = forms.locator('xpath=//input[@id="firstName"]');
    this.lastName = forms.locator('xpath=//input[@id="lastName"]');
    this.email = forms.locator('xpath=//input[@id="userEmail"]');
    this.mobile = forms.locator('xpath=//input[@id="userNumber"]');
    this.genderMale = forms.locator('xpath=//label[@for="gender-radio-1"]');
    this.genderFemale = forms.locator('xpath=//label[@for="gender-radio-2"]');
    this.genderOther = forms.locator('xpath=//label[@for="gender-radio-3"]');
    this.dob = forms.locator('xpath=//input[@id="dateOfBirthInput"]');
    this.subjects = forms.locator('xpath=//input[@id="subjectsInput"]');
    this.hobbiesSports = forms.locator('xpath=//label[@for="hobbies-checkbox-1"]');
    this.hobbiesReading = forms.locator('xpath=//label[@for="hobbies-checkbox-2"]');
    this.hobbiesMusic = forms.locator('xpath=//label[@for="hobbies-checkbox-3"]');
    this.uploadPicture = forms.locator('xpath=//label[@for="uploadPicture"]');
    this.currentAddress = forms.locator('xpath=//textarea[@id="currentAddress"]');
    this.stateDropdown = forms.locator('xpath=(//div[@class=" css-1hwfws3"])[1]');
    this.cityDropdown = forms.locator('xpath=(//div[@class=" css-1hwfws3"])[2]');
    this.submitBtn = forms.locator('xpath=//button[@id="submit"]');

    this.confirmationModal = forms.locator('xpath=//div[@class="modal-content"]');
    this.modalTitle = forms.locator('xpath=//div[@id="example-modal-sizes-title-lg"]');
    this.modalCloseBtn = forms.locator('xpath=//button[@id="closeLargeModal"]');
  }

async navigateToForm() {
  await this.page.goto("/forms");
  await this.practiceForm.click();
}

  async enterBasicInfo(data: {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
  }) {
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.email.fill(data.email);
    await this.mobile.fill(data.mobile);    
  }

async dateOfBirthday (dob: string){
    if (dob) await this.dob.fill(dob);

}

async enterGender (gender: 'male' | 'female' | 'other'){
    if (gender === 'male') await this.genderMale.click();
    else if (gender === 'female') await this.genderFemale.click();
    else await this.genderOther.click();
}

async enterSubjects (subjects: string[]){
    if (subjects) {
      for (const subject of subjects) {
        await this.subjects.fill(subject);
        await this.subjects.press('Enter');
      }
    }
}


async enterHobbies (hobbies: string[]){
    if (hobbies.includes('Sports')) await this.hobbiesSports.click({ force: true });
    if (hobbies.includes('Reading')) await this.hobbiesReading.click({ force: true });
    if (hobbies.includes('Music')) await this.hobbiesMusic.click({ force: true });
}

async enterAddress (address: string){
  if (address) await this.currentAddress.fill(address);

}


async uploadFile(picturePath: string) {
    if (picturePath) await this.uploadPicture.setInputFiles(picturePath);
}


async selectStateAndCity(
  state: 'NCR' | 'Uttar Paradesh' | 'Haryana' | 'Rajasthan',
  city: string
) {
  await this.stateDropdown.click();
  await this.page.getByText(state, { exact: true }).click();
  await this.cityDropdown.waitFor({ state: 'visible' });
  await this.cityDropdown.click();
  await this.page.getByText(city, { exact: true }).click();
}

async submitForm(){
      await this.submitBtn.click();
}


async verifySubmission() {
    await this.confirmationModal.waitFor({ state: 'visible' });
    await this.modalTitle.waitFor({ state: 'visible' });
  }
}
