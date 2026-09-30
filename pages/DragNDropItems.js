
class DragNDropItems {

    constructor(page) {

        this.page = page;

         // Define your source and target locators
       // const source = page.locator('#drag-source');

       // Locate all draggable divs
        this.dragItems = page.locator('div[draggable="true"]');    

        //this.source = page.getByText('Laptop', { exact: true });
        //this.source = page.getByText('Mouse', { exact: true });
        //this.source = page.getByText('Keyboard', { exact: true });
        this.target = page.locator('#drop-target');

    

    }


    async draggable() {
        // Perform the drag and drop action
        //await this.source.dragTo(this.target);

        const count = await this.dragItems.count();
        console.log(count);

        for (let i = 0; i < count; i++) {
            // .nth(i) selects the element at index i
            await this.dragItems.nth(i).dragTo(this.target);
            await this.page.waitForTimeout(3000);
        }


        
    }


    async navigate() {
        await this.page.goto('https://www.way2automation.com/automationpracticesite1.html');
        await this.page.waitForTimeout(3000);
        await this.page.locator('a[onclick="showSection(\'elements\')"]').click();
        await this.page.waitForTimeout(3000);
    }
}

// Export the class so other files can import it
module.exports = {DragNDropItems};