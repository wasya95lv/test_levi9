const searchPage = require ("./pageObjects/searchPage.js");
const until = protractor.ExpectedConditions;

// spec.js
describe('Test task for Levi9: Scenario 2', function() {
    
    beforeEach(async function() {
        await browser.restart();
        browser.waitForAngularEnabled(false);
        await browser.get('https://www.carnext.com/en-be/cars/');
    });
  

    it(`1) User opens https://www.carnext.com/en-be/cars/ page;
    2) User applies price and transmission filters;
    3) User applies sorting by price (asc);
    4) Verify that correct filters and sorting are applied.`, async function () {

        await searchPage.setFilter('min', '7500');
        await searchPage.getMinPriceFilter().click();
        
        await browser.sleep(1000);

        await searchPage.setFilter('max', '25000');
        await searchPage.getMaxPriceFilter().click();

        await browser.sleep(1000);

        await searchPage.getAgreeCoockiesButton().click();
        await browser.sleep(2500);

        await searchPage.setTransmitionFilter('manual');

        await searchPage.setAscPriceFilter();

        await browser.sleep(5000);
    });

});