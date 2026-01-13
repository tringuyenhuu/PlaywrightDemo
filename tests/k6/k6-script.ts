import http from 'k6/http';
import { check, group } from 'k6';
import { createBycatRequestConfig } from '../../api/api-request-config';
import { getEnvironment } from '../../environment/environments';

const env = getEnvironment();
export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  const category = 'phone';  // Define the category
  const requestConfig = createBycatRequestConfig(env.baseURL,category);  // Use the function
  group('API Request - By Category (Phone)', () => {
    const response = http.post(
      requestConfig.url,
      requestConfig.body,
      {
        headers: requestConfig.headers,
      }
    );

    check(response, {
      'is status 200': (r) => r.status === 200
    });
  });
}