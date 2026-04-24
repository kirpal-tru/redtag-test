
'use client'; 

import { useEffect, useState } from 'react';
import { ContentfulLivePreview } from '@contentful/live-preview';

export default function HomePreview({ initialData }: { initialData: { title: string }[] }) {
  const [home, setHome] = useState(initialData);

  useEffect(() => {
    ContentfulLivePreview.init({ locale: 'en-US' });

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