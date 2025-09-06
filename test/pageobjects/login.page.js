import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * Login/Signup page containing specific selectors and methods for authentication
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    // Signup section
    get newUserSignupText() {
        return $('//h2[text()="New User Signup!"]');
    }

    get signupNameInput() {
        return $('input[data-qa="signup-name"]');
    }

    get signupEmailInput() {
        return $('input[data-qa="signup-email"]');
    }

    get signupButton() {
        return $('button[data-qa="signup-button"]');
    }

    // Login section  
    get loginEmailInput() {
        return $('input[data-qa="login-email"]');
    }

    get loginPasswordInput() {
        return $('input[data-qa="login-password"]');
    }

    get loginButton() {
        return $('button[data-qa="login-button"]');
    }

    get loginToYourAccountText() {
        return $('//h2[text()="Login to your account"]');
    }

    /**
     * Methods for signup functionality
     */
    async verifyNewUserSignupVisible() {
        await expect(this.newUserSignupText).toBeDisplayed();
        await expect(this.newUserSignupText).toHaveText('New User Signup!');
    }

    async enterSignupDetails(name, email) {
        await this.signupNameInput.waitForDisplayed();
        await this.signupNameInput.setValue(name);
        await this.signupEmailInput.setValue(email);
    }

    async clickSignupButton() {
        await this.signupButton.waitForDisplayed();
        await this.signupButton.click();
    }

    async performSignup(name, email) {
        await this.enterSignupDetails(name, email);
        await this.clickSignupButton();
    }

    /**
     * Methods for login functionality
     */
    async performLogin(email, password) {
        await this.loginEmailInput.waitForDisplayed();
        await this.loginEmailInput.setValue(email);
        await this.loginPasswordInput.setValue(password);
        await this.loginButton.click();
    }

    /**
     * Navigate to login page
     */
    open() {
        return super.open('login');
    }
}

export default new LoginPage();
