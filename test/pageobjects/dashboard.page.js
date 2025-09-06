import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * Header/Navigation page containing specific selectors and methods for navigation functionality
 */
class HeaderPage extends Page {
    /**
     * define selectors using getter methods
     */
    get loggedInAsText() {
        return $('//a[contains(text(), "Logged in as")]');
    }

    get deleteAccountButton() {
        return $('a[href="/delete_account"]');
    }

    get logoutButton() {
        return $('a[href="/logout"]');
    }

    get homeButton() {
        return $('a[href="/"]');
    }

    get contactUsButton() {
        return $('a[href="/contact_us"]');
    }

    get cartButton() {
        return $('a[href="/view_cart"]');
    }

    /**
     * Methods for interacting with header elements
     */
    async verifyLoggedInAs(username) {
        await expect(this.loggedInAsText).toBeDisplayed();
        const loggedInText = await this.loggedInAsText.getText();
        expect(loggedInText).toContain(username);
    }

    async clickDeleteAccount() {
        await this.deleteAccountButton.waitForDisplayed();
        await this.deleteAccountButton.click();
    }

    async clickLogout() {
        await this.logoutButton.waitForDisplayed();
        await this.logoutButton.click();
    }

    async clickHome() {
        await this.homeButton.waitForDisplayed();
        await this.homeButton.click();
    }
}

export default new HeaderPage();
