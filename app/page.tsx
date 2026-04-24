import { client } from '@/lib/contentful';
import HomePreview from "@/components/HomePreview";

async function getHome() {
  const response = await client.getEntries({
    content_type: 'home', 
  });

  return response.items.map((item: any) => ({
    title: item.fields.title as string
  }));
}

export default async function Home() {
  
  const homeData = await getHome();
 
  return (
   <>
  <HomePreview initialData={homeData} />
          </>
  );
}
