import HomePreview from '@/components/HomePreview';
import { fetchHomePage } from '../lib/contentful';

export default async function HomePage() {
  
  const initialData = await fetchHomePage();
  
  return <HomePreview initialData={initialData} />;
}