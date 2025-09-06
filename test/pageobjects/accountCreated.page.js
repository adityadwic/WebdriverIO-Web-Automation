import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * Account Created page containing specific selectors and methods
 */
class AccountCreatedPage extends Page {
    /**
     * define selectors using getter methods
     */
    get accountCreatedText() {
        return $('//b[text()="Account Created!"]');
    }

    get continueButton() {
        return $('a[data-qa="continue-button"]');
    }

    get congratulationsText() {
        return $('p=Congratulations! Your new account has been successfully created!');
    }

    /**
     * Methods for account created page
     */
    async verifyAccountCreated() {
        await expect(this.accountCreatedText).toBeDisplayed();
        await expect(this.accountCreatedText).toHaveText('ACCOUNT CREATED!');
    }

    async clickContinue() {
        await this.continueButton.waitForDisplayed();
        await this.continueButton.click();
    }

    async verifyAccountCreatedAndContinue() {
        await this.verifyAccountCreated();
        await this.clickContinue();
    }
}

export default new AccountCreatedPage();
