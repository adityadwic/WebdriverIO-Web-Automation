import { expect } from '@wdio/globals'
import allure from '@wdio/allure-reporter'
import HomePage from '../pageobjects/home.page.js'
import LoginPage from '../pageobjects/login.page.js'
import AccountInfoPage from '../pageobjects/accountInfo.page.js'
import AccountCreatedPage from '../pageobjects/accountCreated.page.js'
import AccountDeletedPage from '../pageobjects/accountDeleted.page.js'
import HeaderPage from '../pageobjects/dashboard.page.js'
import { userData } from '../data/user.js';

describe('User Registration and Account Management', () => {
    it('Should complete full user registration workflow', async () => {
        // Test metadata
        allure.addDescription('Complete user registration workflow from signup to account deletion');
        allure.addSeverity('critical');
        allure.addFeature('User Registration');
        allure.addStory('Complete Registration Flow');
        allure.addTag('registration');
        allure.addTag('e2e');

        // Step 1: Launch browser and navigate to home page
        await allure.step('Step 1: Navigate to AutomationExercise home page', async () => {
            await HomePage.open();
        });

                // Step 2: Verify home page is visible
        await allure.step('Step 2: Verify home page is visible', async () => {
            expect(HomePage.homePageContent).toBeDisplayed();
            expect(HomePage.sliderSection).toBeDisplayed();
        });

        // Take screenshot for Step 2
        allure.addAttachment('Home Page Screenshot', await browser.takeScreenshot(), 'image/png');

        // Step 3: Click on 'Signup / Login' button
        await allure.step('Step 3: Click on Signup/Login button', async () => {
            await HomePage.clickSignupLogin();
        });

                // Step 4: Verify 'New User Signup!' is visible
        await allure.step('Step 4: Verify New User Signup section is visible', async () => {
            await LoginPage.verifyNewUserSignupVisible();
        });

        // Take screenshot for Step 4
        allure.addAttachment('Signup Page Screenshot', await browser.takeScreenshot(), 'image/png');

        // Step 5: Enter name and email address
        await allure.step('Step 5: Enter name and email for signup', async () => {
            await LoginPage.enterSignupDetails(userData.name, userData.email);
        });

        // Step 6: Click 'Signup' button
        await allure.step('Step 6: Click Signup button', async () => {
            await LoginPage.clickSignupButton();
        });

                // Step 7: Verify 'ENTER ACCOUNT INFORMATION' is visible
        await allure.step('Step 7: Verify Enter Account Information page', async () => {
            await AccountInfoPage.verifyEnterAccountInfoVisible();
        });

        // Take screenshot for Step 7
        allure.addAttachment('Account Info Form Screenshot', await browser.takeScreenshot(), 'image/png');

        // Step 8: Fill account details
        await allure.step('Step 8: Fill account information details', async () => {
            const accountData = {
                title: userData.title,
                password: userData.password,
                day: userData.day,
                month: userData.month,
                year: userData.year,
                newsletter: userData.newsletter,
                specialOffers: userData.specialOffers
            };
            await AccountInfoPage.fillAccountDetails(accountData);
        });

        // Step 9: Fill address details
        await allure.step('Step 9: Fill address information details', async () => {
            const addressData = {
                firstName: userData.firstName,
                lastName: userData.lastName,
                company: userData.company,
                address1: userData.address1,
                address2: userData.address2,
                country: userData.country,
                state: userData.state,
                city: userData.city,
                zipcode: userData.zipcode,
                mobileNumber: userData.mobileNumber
            };
            await AccountInfoPage.fillAddressDetails(addressData);
        });

        // Step 10: Click 'Create Account' button
        await allure.step('Step 10: Click Create Account button', async () => {
            await AccountInfoPage.clickCreateAccount();
        });

                // Step 11: Verify 'ACCOUNT CREATED!' is visible
        await allure.step('Step 11: Verify Account Created message', async () => {
            await AccountCreatedPage.verifyAccountCreated();
        });

        // Take screenshot for Step 11
        allure.addAttachment('Account Created Screenshot', await browser.takeScreenshot(), 'image/png');

                // Step 12: Click 'Continue' button after account creation
        await allure.step('Step 12: Click Continue button after account creation', async () => {
            await AccountCreatedPage.clickContinue();
        });

                // Step 13: Verify 'Logged in as username' is visible
        await allure.step('Step 13: Verify user is logged in', async () => {
            await HeaderPage.verifyLoggedInAs('Test User');
            // Take screenshot directly in the step
            allure.addAttachment('Logged In Screenshot', await browser.takeScreenshot(), 'image/png');
        });

        // Step 14: Click 'Delete Account' button
        await allure.step('Step 14: Click Delete Account button', async () => {
            await HeaderPage.clickDeleteAccount();
        });

                // Step 15: Verify 'ACCOUNT DELETED!' and click 'Continue' button
        await allure.step('Step 15: Verify account deleted and click continue', async () => {
            await AccountDeletedPage.verifyAccountDeleted();
            await AccountDeletedPage.clickContinue();
            // Take screenshot directly in the step
            allure.addAttachment('Account Deleted Screenshot', await browser.takeScreenshot(), 'image/png');
        });

        console.log('✅ Complete user registration workflow completed successfully!');
    });
});
