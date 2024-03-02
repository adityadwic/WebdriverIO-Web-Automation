import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import { credentials } from '../data/user.js';
import DashboardPage from '../pageobjects/dashboard.page.js';
import dashboardPage from '../pageobjects/dashboard.page.js';

describe('My Login application', () => {
    // Test case: Login with invalid username
    it('Login with invalid username', async () => {
        // Open the login page
        await LoginPage.open()

        // Attempt login with invalid username
        await LoginPage.login(credentials.invalidUsername, credentials.validPassword)
        
        // Verify that invalid login validation message exists
        await expect(LoginPage.invalidLoginValidation).toBeExisting()
        
        // Verify the text of the invalid login validation message
        await expect(LoginPage.invalidLoginValidation).toHaveText(
            'Invalid credentials')
    })

    // Test case: Login with invalid password
    it('Login with invalid password', async () => {
        // Open the login page
        await LoginPage.open()

        // Attempt login with invalid password
        await LoginPage.login(credentials.validUsername, credentials.invalidPassword)
        
        // Verify that invalid login validation message exists
        await expect(LoginPage.invalidLoginValidation).toBeExisting()
        
        // Verify the text of the invalid login validation message
        await expect(LoginPage.invalidLoginValidation).toHaveText(
            'Invalid credentials')
    })

    // Test case: Login with invalid username and password
    it('Login with invalid username and password', async () => {
        // Open the login page
        await LoginPage.open()

        // Attempt login with invalid username and password
        await LoginPage.login(credentials.invalidUsername, credentials.invalidPassword)
        
        // Verify that invalid login validation message exists
        await expect(LoginPage.invalidLoginValidation).toBeExisting()
        
        // Verify the text of the invalid login validation message
        await expect(LoginPage.invalidLoginValidation).toHaveText(
            'Invalid credentials')
    })

    // Test case: Login with valid credentials
    it('Login with valid credentials', async () => {
        // Open the login page
        await LoginPage.open()

        // Attempt login with valid credentials
        await LoginPage.login(credentials.validUsername, credentials.validPassword)
        
        // Verify that dashboard title exists after successful login
        await expect(DashboardPage.dashboardTitle).toBeExisting()
        
        // Verify the text of the dashboard title
        await expect(DashboardPage.dashboardTitle).toHaveText(
            'Dashboard')
        
        // Verify the dashboard title using a method in DashboardPage object
        await dashboardPage.verifyDashboardTitle()
    })
})
