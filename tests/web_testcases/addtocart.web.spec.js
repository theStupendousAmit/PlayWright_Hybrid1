
const {test,expect} = require('@playwright/test');

const {AddProductsToCart} = require('../../pages/AddProductsToCart');


test('Adding Products to Cart', async({ page }) => {

    const AddProducts = new AddProductsToCart(page);
    
    await AddProducts.navigate();

    await AddProducts.checkout();

})