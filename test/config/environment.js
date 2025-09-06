// Environment configuration for different testing environments
export const config = {
    // Base URL for different environments
    environments: {
        dev: 'https://automationexercise.com',
        staging: 'https://automationexercise.com',
        production: 'https://automationexercise.com'
    },
    
    // Browser configurations
    browsers: {
        chrome: {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [
                    '--disable-web-security',
                    '--disable-features=VizDisplayCompositor',
                    '--no-sandbox',
                    '--disable-dev-shm-usage',
                    '--disable-gpu'
                ]
            }
        },
        firefox: {
            browserName: 'firefox'
        },
        edge: {
            browserName: 'MicrosoftEdge'
        }
    },
    
    // Test timeouts
    timeouts: {
        default: 10000,
        pageLoad: 30000,
        script: 60000
    }
};

// Get current environment from command line or default to dev
export const getCurrentEnvironment = () => {
    return process.env.TEST_ENV || 'dev';
};

// Get current browser from command line or default to chrome
export const getCurrentBrowser = () => {
    return process.env.BROWSER || 'chrome';
};
