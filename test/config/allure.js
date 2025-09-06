// Allure environment configuration
export const allureEnvironment = {
    // Browser information
    'Browser': process.env.BROWSER || 'chrome',
    'Browser Version': 'Latest',
    
    // Environment information
    'Environment': process.env.TEST_ENV || 'dev',
    'Base URL': process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com',
    
    // System information
    'OS': process.platform,
    'Node Version': process.version,
    
    // Test framework information
    'Framework': 'WebdriverIO',
    'Framework Version': '8.32.3',
    'Test Framework': 'Mocha',
    'Reporting': 'Allure',
    
    // Execution information
    'Executed By': process.env.USER || process.env.USERNAME || 'Automation',
    'Execution Date': new Date().toISOString().split('T')[0],
    'Execution Time': new Date().toTimeString().split(' ')[0]
};

// Allure categories for better test organization
export const allureCategories = [
    {
        "name": "Ignored tests",
        "matchedStatuses": ["skipped"]
    },
    {
        "name": "Infrastructure problems",
        "matchedStatuses": ["broken", "failed"],
        "messageRegex": ".*selenide.*"
    },
    {
        "name": "Outdated tests",
        "matchedStatuses": ["broken"],
        "traceRegex": ".*FileNotFoundException.*"
    },
    {
        "name": "Product defects",
        "matchedStatuses": ["failed"]
    },
    {
        "name": "Test defects",
        "matchedStatuses": ["broken"]
    }
];

// Test severities
export const SEVERITY = {
    BLOCKER: 'blocker',
    CRITICAL: 'critical',
    NORMAL: 'normal',
    MINOR: 'minor',
    TRIVIAL: 'trivial'
};

// Test features
export const FEATURES = {
    USER_REGISTRATION: 'User Registration',
    AUTHENTICATION: 'Authentication',
    ACCOUNT_MANAGEMENT: 'Account Management',
    NAVIGATION: 'Navigation',
    FORM_HANDLING: 'Form Handling'
};

// Test stories
export const STORIES = {
    COMPLETE_REGISTRATION: 'Complete User Registration Flow',
    SIGNUP_PROCESS: 'User Signup Process',
    ACCOUNT_CREATION: 'Account Creation',
    ACCOUNT_DELETION: 'Account Deletion',
    LOGIN_VERIFICATION: 'Login Verification'
};
