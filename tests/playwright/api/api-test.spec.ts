import { test, expect } from '../fixtures';
import { createBycatRequestConfig } from '../../../api/api-request-config';

// Scenario: The user selects a category and confirms that the expected items are present within that category

test('test_demoblaze_api_get_phones', async ({ request, env }) => {
  const category = 'phone'; // Define the category
  const requestConfig = createBycatRequestConfig(env.apiURL,category);
  const response = await request.post(requestConfig.url, {
    data: JSON.parse(requestConfig.body!),
    headers: requestConfig.headers,
  });

  // Verify the response
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(`Number of products in category '${category}': ${responseBody.Items.length}`);
  expect(responseBody.Items.length).toBeGreaterThan(0); // Expect at least one product
});