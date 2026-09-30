
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage'); // Import your page object

test('Login with valid credentials', async ({ page }) => {
  // Initialize the class by passing the active Playwright page instance
  const loginPage = new LoginPage(page);

  // Use the exported page actions
  await loginPage.navigate();
  
  await loginPage.login('admin', 'admin');


  // Verify the result (assertions)
  await expect(page).toHaveURL('https://www.way2automation.com/automationpracticesite1.html');

  //await expect(page).toHaveTitle('--------------title here---------------');

  //await expect(searchbox).tobeVisible();
  
});