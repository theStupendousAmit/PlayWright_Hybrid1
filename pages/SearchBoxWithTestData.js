
class SearchBoxWithTestData {

    constructor(page) {
        this.page = page;
        this.searchbox = page.locator('#search-input');

    }

    async navigate() {
        await this.page.goto('https://www.way2automation.com/automationpracticesite1.html');
        await this.page.locator('a[onclick="showSection(\'products\')"]').click();
    }

    async search(searchText) {
        await expect(searchbox).tobeVisible();
        await this.searchbox.fill(searchText);
        await this.searchbox.press('Enter');
    }

}

// Export the class so other files can import it
module.exports = {SearchBoxWithTestData};