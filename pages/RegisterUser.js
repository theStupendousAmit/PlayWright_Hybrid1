
class RegisterUser {

    constructor(page) {
        this.page = page;
        //this.signupbtn = page.getByRole('link', { name: 'Signup' });
        this.name = page.locator('#reg-name');
        this.emailid = page.locator('#reg-email');
        this.password = page.locator('#reg-password');
        this.createaccountbtn = page.getByRole('button',{name:'Create Account'});
    }


    async register(name, email, password) {
        //await this.signupbtn.click();
        await this.name.fill(name);
        await this.emailid.fill(email);
        await this.password.fill(password);
        await this.createaccountbtn.click();
    }


    async navigate() {
        await this.page.goto('https://www.way2automation.com/automationpracticesite1.html');
        await this.page.locator('a[onclick="showSection(\'signup\')"]').click();
    }
}

// Export the class so other files can import it
module.exports = {RegisterUser};