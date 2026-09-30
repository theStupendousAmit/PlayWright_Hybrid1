
class AddProductsToCart {

    constructor(page) {
        
        this.page = page;
        this.atc1 = page.locator('button[onclick*="addToCart(1)"]');
        this.atc2 = page.locator('button[onclick*="addToCart(2)"]');
        this.atc4 = page.locator('button[onclick*="addToCart(4)"]');
        this.cartcount = page.locator('#cart-count');
        this.checkoutbtn = page.getByRole('button',{name:'Proceed to Checkout'});
    }


    async navigate() {
        await this.page.goto('https://ww2automation.cow.waym/automationpracticesite1.html');
        await expect(page).toHaveUrl('https://www.way2automation.com/automationpracticesite1.html');
        await this.page.locator('a[onclick="showSection(\'products\')"]').click();

    }

    async checkout() {
        await this.atc1.click();
        await this.atc2.click();
        await this.atc4.click();
        await this.cartcount.click();
        await this.checkoutbtn.click();  
    }
}

// Export the class so other files can import it
module.exports = {AddProductsToCart};