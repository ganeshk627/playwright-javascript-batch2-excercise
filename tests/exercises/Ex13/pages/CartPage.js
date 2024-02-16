//@ts-check
exports.CartPage = class CartPage {
    constructor(page) {
        this.page = page;
        this.checkout_button = '#checkout';
        this.firstname_input = '#first-name';
        this.lastname_input = '#last-name';
        this.zipcode_input = '#postal-code';
        this.continue_button = 'data-test=continue';
        this.finish_button = '[name="finish"]';
        this.back_to_home_button = '[name="back-to-products"]';
    }

    async checkout() {
        await this.page.locator(this.checkout_button).click();
    }

    async fillCheckoutInformation(firstName, lastName, zipCode) {
        await this.page.locator(this.firstname_input).fill(firstName);
        await this.page.locator(this.lastname_input).fill(lastName);
        await this.page.locator(this.zipcode_input).fill(zipCode);
    }

    async clickContinue() {
        await this.page.locator(this.continue_button).click();
    }

    async clickFinish() {
        await this.page.locator(this.finish_button).click();
    }

    async clickBackToHome() {
        await this.page.locator(this.back_to_home_button).click();
    }
}