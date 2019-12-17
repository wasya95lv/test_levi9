class homepage {
    getSeachButton () {
        return element(by.css('[data-e2e-id="searchButton"]'))
    }

    async clickSearchButton() {
        await this.getSeachButton().click();
    }

    getBrandDropDown () {
        return element(by.css('div[data-e2e-id="brandDropdown"]'));
    }

    async clickBrandDropDown () {
        await this.getBrandDropDown().click();
    }

    getModelDropDown () {
        return element(by.css('[data-e2e-id="modelDropdown"]'));
    }

    async clickModelDropDown () {
        await this.getModelDropDown().click();
    }

    async clickOnBrand (input) {
        await element(by.css(`input[value="${input.toLowerCase()}"] + div`)).click();
    }

    async clickOnModel (input) {
        const modelToSearch = input.split(" ").join("-").toLowerCase();
        await element(by.css(`input[value="${modelToSearch}"] + div`)).click();
    }

}

module.exports = new homepage();