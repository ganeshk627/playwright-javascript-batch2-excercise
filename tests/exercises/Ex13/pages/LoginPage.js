//@ts-check
exports.LoginPage = class LoginPage {

  constructor(page) {
    this.page = page;
    this.usernameInput = '//input[@id="user-name"]';
    this.passwordInput = '#password';
    this.loginButton = 'id=login-button';
  }

  async gotoLoginPage() {
    await this.page.goto('https://www.saucedemo.com'); // Update URL accordingly
  }

  async enterUsername(username) {
    await this.page.waitForSelector(this.usernameInput);
    await this.page.fill(this.usernameInput, username);
  }

  async enterPassword(password) {
    await this.page.waitForSelector(this.passwordInput);
    await this.page.fill(this.passwordInput, password);
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
