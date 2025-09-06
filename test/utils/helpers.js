/**
 * Utility functions for test automation
 */
import allure from '@wdio/allure-reporter'

/**
 * Generate random string
 * @param {number} length - Length of the string
 * @returns {string} Random string
 */
export const generateRandomString = (length = 8) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

/**
 * Generate random email
 * @returns {string} Random email
 */
export const generateRandomEmail = () => {
    return `test${generateRandomString(6)}@example.com`;
};

/**
 * Generate random number
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random number
 */
export const generateRandomNumber = (min = 1, max = 100) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Wait for a specific amount of time
 * @param {number} milliseconds - Time to wait in milliseconds
 */
export const wait = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};

/**
 * Take screenshot with timestamp and add to Allure report
 * @param {string} name - Screenshot name
 */
export const takeScreenshot = async (name) => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const screenshotName = `${name}_${timestamp}.png`;
    const screenshotPath = `./screenshots/${screenshotName}`;
    
    try {
        await browser.saveScreenshot(screenshotPath);
        console.log(`📸 Screenshot taken: ${screenshotName}`);
        
        // Add to Allure report
        const screenshot = await browser.takeScreenshot();
        allure.addAttachment('Screenshot', screenshot, 'image/png');
        
        return screenshotPath;
    } catch (error) {
        console.log(`❌ Failed to take screenshot: ${error.message}`);
        return null;
    }
};

/**
 * Scroll to element
 * @param {WebdriverIO.Element} element - Element to scroll to
 */
export const scrollToElement = async (element) => {
    await element.scrollIntoView();
    await wait(500); // Wait for scroll animation
};

/**
 * Clear and type text
 * @param {WebdriverIO.Element} element - Input element
 * @param {string} text - Text to type
 */
export const clearAndType = async (element, text) => {
    await element.waitForDisplayed();
    await element.clearValue();
    await element.setValue(text);
};

/**
 * Retry function with specified attempts
 * @param {Function} fn - Function to retry
 * @param {number} maxAttempts - Maximum number of attempts
 * @param {number} delay - Delay between attempts in milliseconds
 */
export const retry = async (fn, maxAttempts = 3, delay = 1000) => {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fn();
        } catch (error) {
            if (attempt === maxAttempts) {
                throw error;
            }
            console.log(`Attempt ${attempt} failed, retrying in ${delay}ms...`);
            await wait(delay);
        }
    }
};

/**
 * Log test step
 * @param {string} step - Test step description
 */
export const logStep = (step) => {
    console.log(`📝 Step: ${step}`);
};

/**
 * Log test information
 * @param {string} info - Information to log
 */
export const logInfo = (info) => {
    console.log(`ℹ️  Info: ${info}`);
};

/**
 * Log test warning
 * @param {string} warning - Warning to log
 */
export const logWarning = (warning) => {
    console.log(`⚠️  Warning: ${warning}`);
};

/**
 * Log test error
 * @param {string} error - Error to log
 */
export const logError = (error) => {
    console.log(`❌ Error: ${error}`);
};

// ============================================
// ALLURE REPORTING HELPER FUNCTIONS
// ============================================

/**
 * Add step to Allure report with proper step tracking
 * @param {string} stepName - Name of the step
 * @param {Function} stepFunction - Function to execute
 */
export const allureStep = async (stepName, stepFunction) => {
    console.log(`📝 Step: ${stepName}`);
    
    try {
        const result = await stepFunction();
        console.log(`✅ Step completed: ${stepName}`);
        return result;
    } catch (error) {
        console.log(`❌ Step failed: ${stepName}`);
        throw error;
    }
};

/**
 * Add description to test
 * @param {string} description - Test description
 */
export const addDescription = (description) => {
    console.log(`📖 Description: ${description}`);
    allure.addDescription(description);
};

/**
 * Add severity to test
 * @param {string} severity - Test severity
 */
export const addSeverity = (severity) => {
    console.log(`⚡ Severity: ${severity}`);
    allure.addSeverity(severity);
};

/**
 * Add feature label
 * @param {string} feature - Feature name
 */
export const addFeature = (feature) => {
    console.log(`🎯 Feature: ${feature}`);
    allure.addFeature(feature);
};

/**
 * Add story label
 * @param {string} story - Story name
 */
export const addStory = (story) => {
    console.log(`📚 Story: ${story}`);
    allure.addStory(story);
};

/**
 * Add epic label
 * @param {string} epic - Epic name
 */
export const addEpic = (epic) => {
    console.log(`🏛️ Epic: ${epic}`);
    allure.addEpic(epic);
};

/**
 * Add environment info
 * @param {string} name - Environment variable name
 * @param {string} value - Environment variable value
 */
export const addEnvironment = (name, value) => {
    console.log(`🌍 Environment ${name}: ${value}`);
    allure.addEnvironment(name, value);
};

/**
 * Add attachment
 * @param {string} name - Attachment name
 * @param {string} content - Content to attach
 * @param {string} type - MIME type
 */
export const addAttachment = (name, content, type = 'text/plain') => {
    console.log(`📎 Attachment: ${name}`);
    allure.addAttachment(name, content, type);
};

/**
 * Add test case link
 * @param {string} url - URL to test case
 * @param {string} name - Display name
 */
export const addTestCaseLink = (url, name = 'Test Case') => {
    console.log(`🔗 Test Case Link: ${name} - ${url}`);
    allure.addTestId(url, name);
};

/**
 * Add issue link
 * @param {string} url - URL to issue
 * @param {string} name - Display name
 */
export const addIssueLink = (url, name = 'Issue') => {
    console.log(`🐛 Issue Link: ${name} - ${url}`);
    allure.addIssue(url, name);
};

/**
 * Enhanced screenshot function with Allure integration for steps
 * @param {string} name - Screenshot name
 * @param {string} description - Screenshot description
 */
export const takeScreenshotWithAllure = async (name, description = '') => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const screenshotName = `${name}_${timestamp}`;
    
    try {
        const screenshotPath = `./screenshots/${screenshotName}.png`;
        await browser.saveScreenshot(screenshotPath);
        
        // Add screenshot to Allure report within current step context
        const screenshot = await browser.takeScreenshot();
        allure.addAttachment(description || `Screenshot: ${name}`, screenshot, 'image/png');
        
        if (description) {
            console.log(`📸 Screenshot: ${description}`);
        }
        
        logInfo(`📸 Screenshot saved: ${screenshotName}`);
        return screenshotPath;
    } catch (error) {
        logError(`Failed to take screenshot: ${error.message}`);
        return null;
    }
};

/**
 * Step function with screenshot capability that ensures screenshots are attached to steps
 * @param {string} stepName - Name of the step
 * @param {Function} stepFunction - Function to execute within step
 */
export const stepWithScreenshot = async (stepName, stepFunction) => {
    return await allure.step(stepName, async () => {
        const result = await stepFunction();
        return result;
    });
};
