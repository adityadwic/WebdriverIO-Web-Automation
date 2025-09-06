# 🚀 WebdriverIO Web Automation Framework

[![WebdriverIO](https://img.shields.io/badge/WebdriverIO-v8.32.3-orange.svg)](https://webdriver.io/)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-green.svg)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Allure](https://img.shields.io/badge/Allure-v2.27.0-blue.svg)](https://docs.qameta.io/allure/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> A professional web automation testing framework built with WebdriverIO, featuring modern JavaScript (ES6+), Page Object Model design pattern, and comprehensive Allure reporting.

## 🎯 Project Overview

This automation framework demonstrates professional test automation capabilities by testing **AutomationExercise.com** - a complete e-commerce application. The framework showcases industry best practices with a comprehensive 15-step user registration workflow that covers:

### 🎪 **Demo Application Features Tested**
- **🏠 Homepage Navigation** - Landing page verification and navigation
- **👤 User Registration** - Complete account creation workflow (15 detailed steps)
- **📋 Form Handling** - Complex form interactions and validations  
- **✅ Account Verification** - Multi-step confirmation processes
- **🗑️ Account Management** - Account deletion and cleanup procedures

### 🏆 **Framework Highlights**
- **Complete E2E Workflow**: Full user journey from registration to account deletion
- **Detailed Step Reporting**: 15 granular test steps with comprehensive validation
- **Screenshot Automation**: Automatic capture at key workflow points
- **Professional Structure**: Industry-standard Page Object Model implementation
- **Rich Reporting**: Beautiful Allure reports with step-by-step execution details

## ✨ Technical Features

### 🧪 **Testing Capabilities**
- ✅ **Complete User Registration Flow** (15 comprehensive steps)
- ✅ **Form Validation & Data Entry** (Personal info, account details, address)
- ✅ **Multi-page Navigation** (Homepage → Signup → Account Info → Confirmation → Deletion)
- ✅ **Dynamic Element Handling** (Dropdowns, checkboxes, radio buttons)
- ✅ **Account Lifecycle Management** (Creation, verification, deletion)

### 🏗️ **Framework Architecture**
- 📖 **Page Object Model** - Clean, maintainable, reusable code structure
- 🔧 **Environment Configuration** - Flexible environment management system
- 📊 **Allure Reporting** - Professional test reports with screenshots
- 🎯 **Step-by-Step Tracking** - Detailed execution flow with Allure steps
- 🛠️ **Utility Functions** - Reusable helper functions and data management

### 🎨 **Reporting & Documentation**
- 📈 **Interactive Allure Reports** - Beautiful HTML reports with charts and metrics
- 📸 **Automatic Screenshots** - Captured at critical test execution points  
- 📋 **Detailed Test Steps** - Granular step documentation with descriptions
- 🕐 **Execution Timeline** - Complete test duration and performance tracking
- 📊 **Test Analytics** - Pass/fail statistics and trend analysis

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **WebdriverIO** | v8.32.3 | Core automation framework |
| **Node.js** | v18+ | Runtime environment |
| **Mocha** | Latest | Test framework and runner |
| **Allure Reporter** | v2.27.0 | Advanced test reporting |
| **JavaScript ES6+** | Latest | Modern JavaScript features |
| **Chrome/Firefox** | Latest | Browser automation support |

## 📁 Project Structure

```
WebdriverIO-Web-Automation/
├── 📋 package.json                 # Dependencies and scripts
├── ⚙️ wdio.conf.js                # WebdriverIO configuration
├── 📖 README.md                    # Project documentation
└── test/
    ├── 🔧 config/
    │   └── environment.js          # Environment configurations
    ├── 📊 data/
    │   └── user.js                 # Test data and user credentials
    ├── 📄 pageobjects/
    │   ├── page.js                 # Base page object class
    │   ├── home.page.js            # Homepage interactions
    │   ├── login.page.js           # Login/Signup page handling
    │   ├── accountInfo.page.js     # Account information form
    │   ├── accountCreated.page.js  # Account creation confirmation
    │   ├── accountDeleted.page.js  # Account deletion confirmation
    │   └── dashboard.page.js       # Header navigation functionality
    ├── 🧪 specs/
    │   └── user-registration.test.js   # Complete registration test suite
    └── 🛠️ utils/
        └── helpers.js              # Utility functions and helpers
```

## 📋 Prerequisites

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Google Chrome** (latest version)
- **Git** for version control

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/adityadwic/WebdriverIO-Web-Automation.git
   cd WebdriverIO-Web-Automation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   npx wdio --version
   ```

## 🎯 Running Tests

### Quick Start
```bash
# Run all tests
npm test

# Run specific test suite
npm run test:registration

# Run tests in headless mode
npm run test:headless
```

### Available Scripts
```bash
npm test                    # Execute all test suites
npm run test:registration   # Run user registration workflow tests
npm run test:headless      # Execute tests in headless browser mode
npm run test:report        # Run tests + generate + open Allure reports
```

## 📊 Test Reports & Analytics

### 🎨 **Allure Reporting System**

<img width="1439" height="898" alt="webdriverIO-Test-report" src="https://github.com/user-attachments/assets/b2c16160-da62-462d-a144-b89afa25f703" />

Generate comprehensive, interactive test reports with detailed execution analytics:

```bash
# Complete reporting workflow
npm run test:report         # Run tests + generate + open reports

# Individual report commands  
npm run allure:generate     # Generate Allure HTML report
npm run allure:open         # Open existing report in browser
npm run allure:serve        # Generate and serve report locally
npm run report:clean        # Clean all report artifacts
```

### 📈 **Report Features & Capabilities**

#### **📊 Interactive Dashboard**
- Visual test execution summary with pass/fail metrics
- Test duration and performance analytics
- Historical trend analysis and comparisons
- Environment and browser configuration details

#### **📸 Screenshot Integration**
- **Automatic Capture**: Screenshots at critical test steps
- **Failure Documentation**: Visual evidence of test failures
- **Step-by-Step Images**: Visual workflow documentation
- **Timeline Integration**: Screenshots linked to execution timeline

#### **🔍 Detailed Test Analytics**
- **Granular Step Reporting**: 15 detailed steps per test execution
- **Execution Timeline**: Complete test flow with timing data
- **Error Analysis**: Detailed failure analysis with stack traces
- **Environment Context**: Browser, OS, and system information

#### **📑 Multiple Report Formats**
- **Allure HTML** - Interactive, professional-grade reports
- **JSON Format** - Machine-readable test results for CI/CD
- **JUnit XML** - Standard format for integration tools
- **Console Output** - Real-time test execution feedback

### 🎯 **Report Output Examples**

The framework automatically generates:
- ✅ **Step-by-Step Execution** - Detailed workflow progression
- 📊 **Test Metrics** - Duration, pass rates, and performance data
- 🖼️ **Visual Documentation** - Screenshots and execution evidence
- 📈 **Trend Analysis** - Historical test execution patterns

## 🏗️ Page Object Model Implementation

### **Architecture Design Pattern**

This framework implements the Page Object Model (POM) design pattern for maximum maintainability and reusability:

#### **Base Page Object**
```javascript
// test/pageobjects/page.js
export default class Page {
    /**
     * Opens a specific page path
     */
    open(path) {
        const environment = getCurrentEnvironment();
        const baseUrl = config.environments[environment];
        return browser.url(`${baseUrl}/${path}`);
    }

    /**
     * Common page interactions
     */
    async waitForPageLoad() {
        await browser.waitUntil(() => browser.execute(() => document.readyState === 'complete'));
    }
}
```

#### **Page Object Example - Homepage**
```javascript
// test/pageobjects/home.page.js
import Page from './page.js';

class HomePage extends Page {
    // Selectors
    get signupLoginBtn() { return $('a[href="/login"]'); }
    get homePageHeader() { return $('.navbar-brand'); }

    // Actions
    async navigateToSignup() {
        await this.signupLoginBtn.click();
    }

    async verifyHomePage() {
        await expect(this.homePageHeader).toBeDisplayed();
    }

    open() {
        return super.open('');
    }
}

export default new HomePage();
```

#### **Complex Form Handling Example**
```javascript
// test/pageobjects/accountInfo.page.js
class AccountInfoPage extends Page {
    get titleMr() { return $('#id_gender1'); }
    get titleMrs() { return $('#id_gender2'); }
    get passwordField() { return $('#password'); }
    get dobDay() { return $('#days'); }
    get dobMonth() { return $('#months'); }
    get dobYear() { return $('#years'); }

    async fillAccountInformation(userData) {
        await this.titleMr.click();
        await this.passwordField.setValue(userData.password);
        
        // Handle dynamic dropdowns
        await this.dobDay.selectByVisibleText(userData.dateOfBirth.day);
        await this.dobMonth.selectByVisibleText(userData.dateOfBirth.month);
        await this.dobYear.selectByVisibleText(userData.dateOfBirth.year);
    }
}
```

## 📝 Test Implementation Examples

### **Complete User Registration Test**
```javascript
// test/specs/user-registration.test.js
describe('AutomationExercise.com - User Registration', () => {
    it('Should complete full user registration workflow', async () => {
        await allure.step('Step 1: Navigate to Homepage', async () => {
            await HomePage.open();
            await HomePage.verifyHomePage();
        });

        await allure.step('Step 2: Navigate to Signup Page', async () => {
            await HomePage.navigateToSignup();
            await LoginPage.verifyLoginPageVisible();
        });

        await allure.step('Step 3: Fill Signup Information', async () => {
            await LoginPage.fillSignupForm(userData.name, userData.email);
            await LoginPage.clickSignupButton();
        });

        // Continue with remaining 12 steps...
        // Each step includes proper verification and error handling
    });
});
```

### **Advanced Form Interactions**
```javascript
await allure.step('Step 7: Fill Account Information', async () => {
    await AccountInfoPage.verifyEnterAccountInfoVisible();
    await AccountInfoPage.selectTitle();
    await AccountInfoPage.enterPassword(userData.password);
    await AccountInfoPage.selectDateOfBirth(userData.dateOfBirth);
    await AccountInfoPage.selectNewsletterOption();
    await AccountInfoPage.selectSpecialOffersOption();
    await browser.takeScreenshot();
});
```

## 🎯 Key Features for Portfolio

### 💼 **Professional Development Standards**
- ✅ **Modern JavaScript (ES6+)** - Latest language features and syntax
- ✅ **Page Object Model** - Industry-standard design pattern implementation
- ✅ **Environment Management** - Flexible configuration for multiple environments
- ✅ **Comprehensive Error Handling** - Robust exception management and reporting
- ✅ **Detailed Documentation** - Thorough code documentation and README

### 🔧 **Technical Excellence**
- ✅ **Cross-browser Compatibility** - Support for Chrome, Firefox, and Edge
- ✅ **Parallel Test Execution** - Optimized performance with concurrent testing
- ✅ **Automatic Screenshot Capture** - Visual documentation and failure analysis
- ✅ **Professional Test Reporting** - Beautiful, interactive Allure reports
- ✅ **CI/CD Integration Ready** - JSON/JUnit outputs for pipeline integration

### 📊 **Quality Assurance Capabilities**
- ✅ **Complete E2E Testing** - Full user journey validation from start to finish
- ✅ **Form Validation Testing** - Complex form interactions and data validation
- ✅ **Multi-step Workflow Testing** - Comprehensive business process validation
- ✅ **Visual Regression Testing** - Screenshot-based validation capabilities
- ✅ **Performance Monitoring** - Test execution timing and performance metrics

## 🚀 Getting Started for Developers

### **For QA Engineers**
1. Clone repository and run `npm install`
2. Execute `npm run test:registration` to see complete workflow
3. Generate reports with `npm run test:report`
4. Explore page objects in `/test/pageobjects/` for pattern understanding

### **For Test Automation Engineers**
1. Study the Page Object Model implementation in `/test/pageobjects/`
2. Review test structure in `/test/specs/user-registration.test.js`
3. Examine Allure step integration and reporting mechanisms
4. Analyze configuration files for environment management

### **For DevOps Engineers**
1. Review `package.json` scripts for CI/CD integration
2. Examine report generation and artifact management
3. Study WebdriverIO configuration for pipeline optimization
4. Analyze JSON/JUnit report outputs for integration

## 📈 Project Metrics & Statistics

- **📊 Test Coverage**: Complete user registration flow (15 detailed steps)
- **⏱️ Execution Time**: ~45-60 seconds for full workflow
- **📸 Screenshot Points**: 6 strategic capture points throughout execution
- **🎯 Success Rate**: Consistent execution with comprehensive error handling
- **📋 Page Objects**: 7 dedicated page objects following POM pattern
- **🔧 Utilities**: Custom helper functions for enhanced maintainability

## 📧 Author & Contact

**Aditya Dwi Cahyono**
- 🐙 **GitHub**: [adityadwic](https://github.com/adityadwic)
- 💼 **LinkedIn**: [adityadwic](https://linkedin.com/in/adityadwic)
- 📧 **Email**: adityadwic@gmail.com
- 🌐 **Portfolio**: Professional QA Engineer & Test Automation Specialist

## 🙏 Acknowledgments

- **WebdriverIO Team** - For the excellent automation framework and documentation
- **AutomationExercise.com** - For providing a comprehensive demo application
- **Allure Framework** - For beautiful and detailed test reporting capabilities
- **Open Source Community** - For continuous inspiration and best practices

**⭐ If you found this project helpful, please give it a star!**

*This project demonstrates professional test automation capabilities using modern tools and industry best practices. Perfect for portfolio demonstration and learning purposes.*

