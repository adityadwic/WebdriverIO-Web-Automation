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

        // Perform menu search in the sidebar and validate the result
        const menuItems = [
            'Admin', 
            'PIM', 
            'Leave', 
            'Time', 
            'Recruitment', 
            'My Info', 
            'Performance', 
            'Dashboard', 
            'Directory', 
            'Maintenance', 
            'Claim', 
            'Buzz'
        ];
        
        for (const menuItem of menuItems) {
            await DashboardPage.setsearchMenu(menuItem);
            await DashboardPage.verifySearchResult(menuItem);
        }
        
    })
})
