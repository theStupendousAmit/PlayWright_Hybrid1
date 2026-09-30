
const {test,expect} = require('@playwright/test');

const {DragNDropItems} = require('../../pages/DragNDropItems');


test('Drag and Drop Items', async({ page }) => {

    const dragndrop = new DragNDropItems(page);

    await dragndrop.navigate();

    await dragndrop.draggable();

})