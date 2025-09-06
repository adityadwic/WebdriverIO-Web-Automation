import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * Account Deleted page containing specific selectors and methods
 */
class AccountDeletedPage extends Page {
    /**
     * define selectors using getter methods
     */
    get accountDeletedText() {
        return $('//b[text()="Account Deleted!"]');
    }

    get continueButton() {
        return $('a[data-qa="continue-button"]');
    }

    /**
     * Methods for account deleted page
     */
    async verifyAccountDeleted() {
        await expect(this.accountDeletedText).toBeDisplayed();
        await expect(this.accountDeletedText).toHaveText('ACCOUNT DELETED!');
    }

    async clickContinue() {
        await this.continueButton.waitForDisplayed();
        await this.continueButton.click();
    }

    async verifyAccountDeletedAndContinue() {
        await this.verifyAccountDeleted();
        await this.clickContinue();
    }
}

export default new AccountDeletedPage();
