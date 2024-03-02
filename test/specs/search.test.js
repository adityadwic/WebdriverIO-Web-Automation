import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import { credentials } from '../data/user.js';
import DashboardPage from '../pageobjects/dashboard.page.js';

describe('Search Feature', () => {
    it('Search all menu in sidebar', async () => {
        // Open the login page
        await LoginPage.open()

        // Perform login with valid credentials
        await LoginPage.login(credentials.validUsername, credentials.validPassword)
        
        // Verify that the dashboard page is displayed after login
        await expect(DashboardPage.dashboardTitle).toBeExisting()

        // Perform menu search in the sidebar
        await DashboardPage.setSearchMenu('Admin')
        await DashboardPage.setSearchMenu('PIM')
        await DashboardPage.setSearchMenu('Leave')
        await DashboardPage.setSearchMenu('Admin')
        await DashboardPage.setSearchMenu('Admin')
        await DashboardPage.setSearchMenu('Admin')
    })
})
