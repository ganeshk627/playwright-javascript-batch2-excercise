//@ts-check
exports.LoginPage = class LoginPage {

    constructor(page) {
      this.page = page;
      this.logoLocator = '.logo';
      this.usernameInput = '#loginFrm_loginname';
      this.passwordInput = '#loginFrm_password';
      this.loginButton = '[title="Login"]';
      this.welcomeMessage = '.menu_text';
      this.logoutLink = 'a[title="Logout"]';
      this.continueLink = 'a[title="Continue"]';
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
  
    async logout() {
      await this.page.waitForSelector(this.logoutLink);
      await this.page.click(this.logoutLink);
    }
  
    async getWelcomeMessage() {
      await this.page.waitForSelector(this.welcomeMessage);
      return await this.page.textContent(this.welcomeMessage);
    }
  
    async clickContinueLink() {
      await this.page.waitForSelector(this.continueLink);
      await this.page.click(this.continueLink);
    }
  }
  