import { test, expect } from '@playwright/test';
import { createBycatRequestConfig } from '../../../api/api-request-config';
import { getEnvironment } from '../../../environment/environments';

const env = getEnvironment();
test('test_demoblaze_api_get_phones', async ({ request }) => {
  const category = 'phone'; // Define the category
  const requestConfig = createBycatRequestConfig(env.baseURL,category);
  const response = await request.post(requestConfig.url, {
    data: JSON.parse(requestConfig.body!),
    headers: requestConfig.headers,
  });

  // Verify the response
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(`Number of products in category '${category}': ${responseBody.length}`);
  expect(responseBody.length).toBeGreaterThan(0); // Expect at least one product
});