
exports.LogoutPage=class LogoutPage {

    constructor(page) {
      this.page = page;
      this.logoutButton = "#logout2"
    }
  
    async logout() {
     await this.page.waitForSelector(this.logoutButton)
     await this.page.locator(this.logoutButton).click()
    }
  }