import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage{
    /**
     * define selectors using getter methods
     */
    get searchMenu () {
        return $('input[placeholder="Search"]');
    }

    get dashboardTitle () {
        return $('h6=Dashboard');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async verifyDashboardTitle () {
        await expect(this.dashboardTitle).toBeDisplayed()
    }

    async setsearchMenu(menu) {
        await this.searchMenu.waitForDisplayed(); // Wait for the element to be displayed
        await this.searchMenu.setValue(menu);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
}

export default new DashboardPage();
