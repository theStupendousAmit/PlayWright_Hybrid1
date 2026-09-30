
const {test,expect} = require('@playwright/test');
const {RegisterUser} = require('../../pages/RegisterUser');


test('Register a User', async({ page }) => {

    const registerUser = new RegisterUser(page);
    await registerUser.navigate();
    await registerUser.register('Amit','abc@xyz.com','123123');

    // Verify the result
    await expect(page).toHaveURL('https://www.way2automation.com/automationpracticesite1.html');
})