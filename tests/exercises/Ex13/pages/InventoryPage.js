//@ts-check
exports.InventoryPage = class InventoryPage {

    constructor(page) {
        this.page = page;
        this.inventory_item = '.inventory_item';
        this.inventory_title = '.title';
    }

    // async getInventoryTitle() {
    //     const title = await this.page.locator(this.inventory_title).textContent();
    //     return title;
    // }

};
