import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage{
    /**
     * define selectors using getter methods
     */
    get adminMenu () {
        return $('//li/a/span[text()="Admin"]');
    }

    get userManagementSubMenu () {
        return $('//span[text()="User Management "]');
    }

    get userList () {
        return $('//li/a[text()="Users"]');
    }

    get userList () {
        return $('//li/a[text()="Users"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    async verifyUserPage () {
        await expect(browser).toHaveUrl('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
    }

    async setsearchMenu(menu) {
        await this.searchMenu.waitForDisplayed(); // Wait for the element to be displayed
        await this.searchMenu.setValue(menu);
    }

    async verifySearchResult (menu) {
        await this.searchResult.waitForDisplayed()
        await expect(this.searchResult).toBeDisplayed()
        await expect(this.searchResult).toHaveText(menu)
        await browser.refresh()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
}

export default new DashboardPage();
