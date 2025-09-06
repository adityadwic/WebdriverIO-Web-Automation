import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * Account Information page containing specific selectors and methods
 */
class AccountInfoPage extends Page {
    /**
     * define selectors using getter methods
     */
    get enterAccountInfoText() {
        return $('//b[text()="Enter Account Information"]');
    }

    // Account Information Form
    get titleMr() {
        return $('#id_gender1');
    }

    get titleMrs() {
        return $('#id_gender2');
    }

    get nameInput() {
        return $('#name');
    }

    get emailInput() {
        return $('#email');
    }

    get passwordInput() {
        return $('#password');
    }

    get daySelect() {
        return $('#days');
    }

    get monthSelect() {
        return $('#months');
    }

    get yearSelect() {
        return $('#years');
    }

    get newsletterCheckbox() {
        return $('#newsletter');
    }

    get specialOffersCheckbox() {
        return $('#optin');
    }

    // Address Information
    get firstNameInput() {
        return $('#first_name');
    }

    get lastNameInput() {
        return $('#last_name');
    }

    get companyInput() {
        return $('#company');
    }

    get address1Input() {
        return $('#address1');
    }

    get address2Input() {
        return $('#address2');
    }

    get countrySelect() {
        return $('#country');
    }

    get stateInput() {
        return $('#state');
    }

    get cityInput() {
        return $('#city');
    }

    get zipcodeInput() {
        return $('#zipcode');
    }

    get mobileNumberInput() {
        return $('#mobile_number');
    }

    get createAccountButton() {
        return $('button[data-qa="create-account"]');
    }

    /**
     * Methods for account information form
     */
    async verifyEnterAccountInfoVisible() {
        await expect(this.enterAccountInfoText).toBeDisplayed();
        await expect(this.enterAccountInfoText).toHaveText('ENTER ACCOUNT INFORMATION');
    }

    async fillAccountDetails(accountData) {
        // Fill basic account information
        if (accountData.title === 'Mr') {
            await this.titleMr.click();
        } else {
            await this.titleMrs.click();
        }

        // Password
        await this.passwordInput.setValue(accountData.password);

        // Date of birth
        await this.daySelect.selectByAttribute('value', accountData.day);
        await this.monthSelect.selectByAttribute('value', accountData.month);
        await this.yearSelect.selectByAttribute('value', accountData.year);

        // Checkboxes
        if (accountData.newsletter) {
            await this.newsletterCheckbox.click();
        }
        if (accountData.specialOffers) {
            await this.specialOffersCheckbox.click();
        }
    }

    async fillAddressDetails(addressData) {
        await this.firstNameInput.setValue(addressData.firstName);
        await this.lastNameInput.setValue(addressData.lastName);
        await this.companyInput.setValue(addressData.company);
        await this.address1Input.setValue(addressData.address1);
        await this.address2Input.setValue(addressData.address2);
        await this.countrySelect.selectByAttribute('value', addressData.country);
        await this.stateInput.setValue(addressData.state);
        await this.cityInput.setValue(addressData.city);
        await this.zipcodeInput.setValue(addressData.zipcode);
        await this.mobileNumberInput.setValue(addressData.mobileNumber);
    }

    async clickCreateAccount() {
        await this.createAccountButton.waitForDisplayed();
        await this.createAccountButton.click();
    }

    async fillCompleteForm(accountData, addressData) {
        await this.fillAccountDetails(accountData);
        await this.fillAddressDetails(addressData);
        await this.clickCreateAccount();
    }
}

export default new AccountInfoPage();
