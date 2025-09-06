import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * Home page containing specific selectors and methods for home page functionality
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get signupLoginButton() {
        return $('a[href="/login"]');
    }

    get homePageContent() {
        return $('.features_items');
    }

    get logoImage() {
        return $('img[alt="Website for automation practice"]');
    }

    get carousel() {
        return $('#slider-carousel');
    }

    /**
     * Methods for interacting with home page elements
     */
    async clickSignupLogin() {
        await this.signupLoginButton.waitForDisplayed();
        await this.signupLoginButton.click();
    }

    async verifyHomePage() {
        await expect(this.homePageContent).toBeDisplayed();
        await expect(this.logoImage).toBeDisplayed();
        const title = await browser.getTitle();
        expect(title).toContain('Automation Exercise');
    }

    /**
     * Navigate to home page
     */
    open() {
        return super.open();
    }
}

export default new HomePage();
