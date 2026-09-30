
class LoginPage {
  
  constructor(page) {
    this.page = page; // Store the Playwright page instance
    this.usernameInput = page.locator('#login-username');
    this.passwordInput = page.locator('#login-password');
    this.loginButton = page.getByRole('button',{name:'Login'});
  }

  async navigate() {
    await this.page.goto('https://www.way2automation.com/automationpracticesite1.html');
    await this.page.getByRole('button', { name: 'Try Login (admin / admin)' }).click();
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

// Export the class so other files can import it
module.exports = { LoginPage };