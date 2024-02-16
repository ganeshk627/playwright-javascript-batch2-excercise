//@ts-check
exports.HeaderPage = class HeaderPage {

  constructor(page) {
    this.page = page;
    this.header_title = '.app_logo';
    this.cart = '.shopping_cart_link';
    this.menu_button = '//button[@id="react-burger-menu-btn"]';
  }

  async openCart() {
    await this.page.locator(this.cart).click();
  }

  async openMenu() {
    await this.page.locator(this.menu_button).click();
  }


};
