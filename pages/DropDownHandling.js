
class DropDownHandling {

    constructor (page) {

        this.page = page;

        //dropdown locators
        this.dropdown1 = page.locator('#dropdown').selectOption('Option 1');
        this.dropdown2 = page.locator('#elementsPerPageSelect').selectOption('100');
        this.dropdown3 = page.locator('#country').selectOption('India');

    }

    async navigate() {
        await this.page.goto('https://practice.expandtesting.com/dropdown');
    }
}

// Export the class so other files can import it
module.exports = { DropDownHandling }; 