
const {test,expect} = require('@playwright/test');

const {SearchBoxWithTestData} = require('../../pages/SearchBoxWithTestData');

const {automationtestdata} = require('../../testdata/testdata1'); //importing test data


test('dynamic search with test data', async({ page }) => {

    const searchboxwithtestdata = new SearchBoxWithTestData(page);

    await searchboxwithtestdata.navigate();
    await searchboxwithtestdata.search(automationtestdata.validSearch1);

})