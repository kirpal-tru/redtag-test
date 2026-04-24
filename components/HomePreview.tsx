
'use client'; 

import { useEffect, useState } from 'react';

import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from '@contentful/live-preview/react';

export default function HomePreview({ initialData }: { initialData: { title: string }[] }) {
  const [home, setHome] = useState(initialData);

  const inspectorProps = useContentfulInspectorMode({ entryId: "58tcaO243ZUIbAf1Rft469" });
  const updatedBlog = useContentfulLiveUpdates(home);  
  return (
    <>


      {updatedBlog.map((post, idx) => (
        <div key={idx} className="border p-4 rounded shadow">
          <p  {...inspectorProps({ fieldId: 'title' })} className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">{post.title}</p>
        </div>
      ))}
    </>

     
     
  );
}