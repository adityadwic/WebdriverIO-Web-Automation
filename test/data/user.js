// User test data for Automation Exercise website
export const userData = {
    name: "Test User",
    email: `testuser${Date.now()}@example.com`, // Dynamic email to avoid conflicts
    password: "TestPassword123",
    
    // Account Information
    title: "Mr", // or "Mrs"
    day: "15",
    month: "7",
    year: "1990",
    newsletter: true,
    specialOffers: true,
    
    // Address Information
    firstName: "John",
    lastName: "Doe",
    company: "Test Company Inc",
    address1: "123 Test Street",
    address2: "Apartment 4B",
    country: "United States",
    state: "California",
    city: "Los Angeles",
    zipcode: "90210",
    mobileNumber: "+1234567890"
};

// Alternative user data for different test scenarios
export const alternativeUserData = {
    name: "Jane Smith",
    email: `janesmith${Date.now()}@example.com`,
    password: "SecurePass456",
    
    title: "Mrs",
    day: "25",
    month: "12",
    year: "1995",
    newsletter: false,
    specialOffers: true,
    
    firstName: "Jane",
    lastName: "Smith",
    company: "Smith & Associates",
    address1: "456 Main Avenue",
    address2: "Suite 100",
    country: "Canada",
    state: "Ontario",
    city: "Toronto",
    zipcode: "M5V 3A1",
    mobileNumber: "+14165551234"
};

// Test scenarios data
export const testScenarios = {
    completeRegistration: {
        name: "Complete Registration Test",
        description: "Full user registration workflow with account creation and deletion"
    },
    registrationWithNewsletter: {
        name: "Registration with Newsletter",
        description: "User registration with newsletter subscription"
    }
};

// Validation messages
export const validationMessages = {
    accountCreated: "Account Created!",
    accountDeleted: "Account Deleted!",
    enterAccountInfo: "Enter Account Information",
    newUserSignup: "New User Signup!"
};

// URLs for different pages (relative to base URL)
export const pageUrls = {
    home: '',
    login: 'login',
    signup: 'signup',
    accountInfo: 'signup',
    accountCreated: 'account_created',
    accountDeleted: 'delete_account'
};