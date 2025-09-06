import { browser } from '@wdio/globals'
import { config, getCurrentEnvironment } from '../config/environment.js'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path = '') {
        const environment = getCurrentEnvironment();
        const baseUrl = config.environments[environment];
        if (path) {
            return browser.url(`${baseUrl}/${path}`);
        }
        return browser.url(baseUrl);
    }

    /**
     * Wait for page to load
     */
    async waitForPageLoad() {
        await browser.waitUntil(
            () => browser.execute(() => document.readyState === 'complete'),
            {
                timeout: config.timeouts.pageLoad,
                timeoutMsg: 'Page did not load within expected time'
            }
        );
    }

    /**
     * Get page title
     */
    async getPageTitle() {
        return await browser.getTitle();
    }

    /**
     * Get current URL
     */
    async getCurrentUrl() {
        return await browser.getUrl();
    }
}
