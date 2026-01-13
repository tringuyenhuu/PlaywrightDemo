<!-- Setup -->
brew install k6
npm install --save-dev @types/k6

<!-- Structure -->
PLAYWRIGHTDEMO/
├── tests/
│   ├── playwright/          # Playwright-specific tests
│   │   ├── api_test.spec.js   # API test, e.g, categories 
│   │   └── ui_test.spec.js   # UI tests, e.g., login, search
│   ├── k6/                 # k6-specific tests
│       └── k6_script.js
│   
├── api/                   # Shared API configuration
│   ├── api_request_config.js
│   └── ...                   # Other API-related files (e.g., schemas, utils)
├── data/
│   ├── dev/
│   │   └── product-search.json
│   ├── sit/
│   │   └── product-search.json
├── environment/
│   ├── environments.js
│   └── environments-dev.js
|   └── environments-sit.js
├── playwright.config.js    # Playwright configuration
├── k6.config.js          # k6 config
├── package.json
└── ...

<!-- Explaination --> 
<!-- Data-Driven Testing -->

tests/
Purpose: To contain the actual test files (Playwright UI tests, API tests, and k6 load tests) and maintain a clear separation of concerns.

api/
Purpose: To centralize code related to API interactions. This is a critical part, as it allows you to reuse and modify your API calls across multiple tests and test types (API testing and K6)

data/
Purpose: To store test data separately from the test code. This improves maintainability and makes it easier to run the tests with different data sets.
dev/ sit: Contains test data specifically for the dev/sit environment.

environment/
Purpose: To manage environment-specific configurations (e.g., base URLs, API keys, database connection strings).

<!-- How to run -->
ENV=sit npm test -- tests/ui/test-demoblaze-login-search.spec.ts


