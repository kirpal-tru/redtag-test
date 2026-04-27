import { client } from '@/lib/contentful';
import HomePreview from "@/components/HomePreview";
import { ContentfulPreviewProvider } from '@/components/ContentfulPreviewProvider';


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

    <ContentfulPreviewProvider
            locale="en-US"
            enableInspectorMode={true}
            enableLiveUpdates={true}
            targetOrigin="https://app.contentful.com"
          >
            <HomePreview  initialData={homeData}/>
          </ContentfulPreviewProvider>

   
  );
}
