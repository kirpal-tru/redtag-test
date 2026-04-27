'use client'; 

import { useEffect, useState } from 'react';
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from '@contentful/live-preview/react';

export default function HomePreview({ initialData }: { initialData: any[] }) {
  
  const [home] = useState(initialData);
  const updatedEntry = useContentfulLiveUpdates(home[0]);

  const inspectorProps = useContentfulInspectorMode({ 
    entryId: home[0]?.sys?.id
  });

  if (!updatedEntry) return null;

  return (
    <div className="p-10">
      <div className="border p-4 rounded shadow">
        <p 
          {...inspectorProps({ fieldId: 'title' })} 
          className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400"
        >
          {updatedEntry.fields?.title || updatedEntry.title}
        </p>
      </div>
    </div>
  );
}