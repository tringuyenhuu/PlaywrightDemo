function createBycatRequestConfig(API_BASE_URL: string, category: string) {
  return {
    method: 'POST',
    url: `${API_BASE_URL}/bycat`,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ cat: category }),
  };
}

export { createBycatRequestConfig };