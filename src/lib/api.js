export function getStrapiURL(path = '') {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function getAllArticles() {
  const requestUrl = getStrapiURL('/articles');
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function getPostBySlug(slug) {
  const requestUrl = getStrapiURL(`/articles/${slug}`);
  const response = await fetch(requestUrl);
  const data = await response.json();

  return data;
}
