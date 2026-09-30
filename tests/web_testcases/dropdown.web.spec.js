
const {test,expect} = require('@playwright/test');
const {DropDownHandling} = require('../../pages/DropDownHandling');


test('Dropdown Handling', async({ page }) => {
    const dropdownhandling = new DropDownHandling(page);

    // Use the exported page actions
    dropdownhandling.navigate();
    
})