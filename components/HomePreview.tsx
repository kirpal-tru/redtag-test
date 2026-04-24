
'use client'; 

import { useEffect, useState } from 'react';
import { ContentfulLivePreview } from '@contentful/live-preview';

export default function HomePreview({ initialData }: { initialData: { title: string }[] }) {
  const [home, setHome] = useState(initialData);

  useEffect(() => {
    ContentfulLivePreview.init({
      locale: 'en-US', // This is required and allows you to set the locale once and have it reused throughout the preview
      enableInspectorMode: false, // This allows you to toggle the inspector mode which is on by default
      enableLiveUpdates: false, // This allows you to toggle the live updates which is on by default
      debugMode: false, // This allows you to toggle the debug mode which is off by default
      targetOrigin: 'https://app.contentful.com', // This allows you to configure the allowed host of the live preview (default: ['https://app.contentful.com', 'https://app.eu.contentful.com'])
    });
  }, []);

  return (
    <>
      {home.map((post, idx) => (
        <div key={idx} className="border p-4 rounded shadow">
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">{post.title}</p>
        </div>
      ))}
    </>
  );
}