import { createClient } from 'contentful';


const space = process.env.CONTENTFUL_SPACE_ID;
const token = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

if (!space || !token) {
  throw new Error('Missing Contentful environment variables');
}

export const client = createClient({
  space,
  accessToken: token,
  host: 'preview.contentful.com',
});
