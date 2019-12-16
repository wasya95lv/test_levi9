const homepage = require("./pageObjects/homepageObject.js");
const searchPage = require ("./pageObjects/searchPage.js");
const until = protractor.ExpectedConditions;

// spec.js
describe('Test task for Levi9: Scenario 1', function() {
    
    beforeEach(async function() {
        browser.waitForAngularEnabled(false);
        await browser.get('https://www.carnext.com/en-be/');
    });

    it(
    `1) User opens https://www.carnext.com/en-be/ page;
    2) User selects something in make and model dropdowns;
    3) User clicks search button;
    4) Verify that only cars with selected make and model are displayed;`, async function () {

        await homepage.clickBrandDropDown();
        await browser.sleep(1000);
        await homepage.clickOnBrand("BMW");
        
        await homepage.clickModelDropDown();
        await browser.sleep(1000);
        await homepage.clickOnModel("2 Serie");
        
        await homepage.clickSearchButton();

        await browser.wait(until.presenceOf($('div[data-e2e-id="appliedFilter"]')), 5000, 'Element taking too long to appear in the DOM');
        
        searchPage.getCarNames().then((cars) => {
            cars.forEach(function (element) {
                expect(element).toBe(searchPage.getActiveFilterText());
            });
        }).catch((e)=>{throw e;});

    });

});