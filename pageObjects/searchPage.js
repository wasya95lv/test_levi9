class SearchPage {
    async getActiveFilter () {
        return ( await element.all(by.css('div[data-e2e-id="appliedFilter"] span span') ).getText() );
    }

    async getActiveFilterText () {
        return ( await this.getActiveFilter() ).join(" ").trim();
    }

    async getCarNames () {
        return ( await element.all(by.css('h3[data-e2e-id="cardCarName"]')).getText() );
    }

    getMaxPriceFilter () {
        return element(by.id('salePriceTo'));
    }

    getMinPriceFilter () {
        return element(by.id('salePriceFrom'));
    }

    async setFilter (filter, price) {
        if (filter === "min") {
            await this.getMinPriceFilter().click();
            await browser.sleep(1000);
            await this.getMinPriceFilter().element(by.css(`option[value="${price}"]`)).click();

        } else if ( filter === "max") {
            await this.getMaxPriceFilter().click();
            await browser.sleep(1000);
            await this.getMaxPriceFilter().element(by.css(`option[value="${price}"]`)).click();
        }
    }

    getTransmitionFilterHolder() {
        return element(by.css('div[data-e2e-id="FilterSet_transmission"]'));
    }

    getAgreeCoockiesButton () {
        return element(by.className('optanon-allow-all accept-cookies-button'));
    }

    async setTransmitionFilter(transmition) {
        await this.getTransmitionFilterHolder().element(by.css(`input[value="${transmition}"] + div`)).click();
    }

    async setAscPriceFilter () {
        await browser.executeScript('window.scrollTo(0,0);').then(function(){
            console.log('SCROLLED TO TOP');
        });

        /*
          Tried here different ways to click on the drop-down filter, but every time it throws an
          error defines that element is not interactable.
        */
        let locationToClick = await element(by.css('div.HideWithCss-sc-18psked.fgmKut')).getLocation();
        await browser.actions().mouseMove(locationToClick).perform();
        //await element(by.css('div.HideWithCss-sc-18psked.fgmKut')).click();
        // await element(by.css('select[data-e2e-select-input]')).click();
        await browser.sleep(5000);
        await element(by.css('option[value="priceAsc"]')).click();
    }
}

module.exports = new SearchPage();