//@ts-check
exports.InventoryPage = class InventoryPage {

    constructor(page) {
        this.page = page;
        this.inventory_title = '.title';
        this.inventory_item = '.inventory_item';
        this.inventory_item_name = '.inventory_item_name';
        this.add_to_cart_button = 'button.btn_inventory';
    }

    // async getInventoryTitle() {
    //     const title = await this.page.locator(this.inventory_title).textContent();
    //     return title;
    // }

    async addProductToCart(productName) {
        await this.page.waitForSelector(this.inventory_item);
        const items = await this.page.locator(this.inventory_item).all();
        // console.log(`items: ${items.length}`)
        for (const item of items) {
            const itemName = await item.locator(this.inventory_item_name).textContent();
            // console.log(itemName)
            if (itemName === productName) {
                await item.locator(this.add_to_cart_button).click();
                console.log(`${productName} added to cart!!!`)
                break;
            }
        }
    }

};
