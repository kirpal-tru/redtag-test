
'use client'; 

import { useEffect, useState } from 'react';

import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from '@contentful/live-preview/react';

import { ContentfulLivePreview } from '@contentful/live-preview';


export default function HomePreview({ initialData }: { initialData: { title: string }[] }) {
  const [home, setHome] = useState(initialData);

  const inspectorProps = useContentfulInspectorMode({ entryId: "58tcaO243ZUIbAf1Rft469" });
  const updatedBlog = useContentfulLiveUpdates(home[0]);  
  return (
    <>

<p
        {...ContentfulLivePreview.getProps({
          entryId: "58tcaO243ZUIbAf1Rft469",
          fieldId: 'title',
          locale: 'en-US',
        })}
      >
        {updatedBlog.title}
      </p>
      
        <div className="border p-4 rounded shadow">
          <p  {...inspectorProps({ entryId: "58tcaO243ZUIbAf1Rft469", fieldId: 'title' })} className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">{updatedBlog.title}</p>
        </div>
     
    </>

     
     
  );
}