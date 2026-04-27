import { createClient } from 'contentful';


const space = process.env.CONTENTFUL_SPACE_ID;
const token = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

if (!space || !token) {
  throw new Error('Missing Contentful environment variables');
}

export const client = createClient({
  space,
  accessToken: token,
  host: process.env.CONTENTFUL_HOST || "",
  environment: process.env.CONTENTFUL_ENVIRONMENT || "",
});

export async function fetchHomePage() {
  
  const response = await client.getEntries({
    content_type: 'home',
    limit: 1,
  });

  return response.items;
}