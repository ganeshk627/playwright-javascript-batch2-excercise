//@ts-check
exports.LoginPage = class LoginPage {

  constructor(page) {
    this.page = page;
    this.usernameInput = '//input[@id="user_name"]';
    this.passwordInput = '#user_pass';
    this.loginButton = 'id=login_button';
  }

  async openLoginPage() {
    await this.page.goto('https://training.openspan.com/login'); // Update URL accordingly
  }

  async enterUsername(username) {
    await this.page.waitForSelector(this.usernameInput);
    await this.page.locator(this.usernameInput).pressSequentially(username);
  }

  async enterPassword(password) {
    await this.page.waitForSelector(this.passwordInput);
    await this.page.locator(this.passwordInput).pressSequentially(password);
  }

  async clickLoginButton() {
    await this.page.waitForSelector(this.loginButton);
    await this.page.click(this.loginButton);
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }
};
