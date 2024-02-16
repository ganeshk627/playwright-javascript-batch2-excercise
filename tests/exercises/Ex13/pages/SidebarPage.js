//@ts-check
exports.SidebarPage = class SidebarPage {

  constructor(page) {
    this.page = page;
    this.logout_button = 'a#logout_sidebar_link';
  }

  async clickLogout() {
    await this.page.locator(this.logout_button).click();
  }


};
