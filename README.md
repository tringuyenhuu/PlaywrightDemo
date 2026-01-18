<!-- Setup -->
brew install k6
npm install --save-dev @types/k6

<!-- Structure -->
PLAYWRIGHTDEMO/
├── tests/
│   ├── playwright/          # Playwright-specific tests
│   │   ├── api  # API test, e.g, categories 
│   │       ├── api/api_test.spec.ts   
│   │   └── ui   # UI tests, e.g., login, search
│   │       └── ui_test.spec.ts
│   │   └── fixtures.ts   
│   ├── k6/                 # k6-specific tests
│       └── k6_script.ts
│   
├── api/                   # Shared API configuration
│   ├── api_request_config.ts
│   └── ...                   # Other API-related files (e.g., schemas, utils)
├── data/
│   ├── dev/
│   │   └── product-search.json
│   ├── sit/
│   │   └── product-search.json
├── environment/
│   ├── environments.ts
│   └── environments-dev.ts
|   └── environments-sit.ts
├── utils                   # DRY Principle
│   ├── test-data.ts 
├── playwright.config.ts    # Playwright configuration
├── k6.config.ts        # k6 config
├── package.json
└── ...

<!-- Explaination --> 
<!-- Data-Driven Testing -->

tests/
Purpose: To contain the actual test files (Playwright UI tests, API tests, and k6 load tests) and maintain a clear separation of concerns.

fixtures
Purpose: Centralized Environment Configuration, reusable instances of your page object classes

api/
Purpose: To centralize code related to API interactions. This is a critical part, as it allows you to reuse and modify your API calls across multiple tests and test types (API testing and K6)

data/
Purpose: To store test data separately from the test code. This improves maintainability and makes it easier to run the tests with different data sets.
dev/ sit: Contains test data specifically for the dev/sit environment.

environment/
Purpose: To manage environment-specific configurations (e.g., base URLs, API keys, database connection strings).

utils/ 
test-data/
Purpose: Same logic in multiple test files (e.g., generating a random email or formatting a date, parse data)

<!-- How to run -->
<!-- Playwright UI testing -->
ENV=sit npm test -- tests/playwright/ui/test-demoblaze-login-search.spec.ts
<!-- Playwright API testing -->
ENV=sit npm test -- tests/playwright/api/api-test.spec.ts


