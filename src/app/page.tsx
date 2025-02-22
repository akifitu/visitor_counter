'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    fetch('/api/visit')
      .then((res) => res.json())
      .then((data) => setVisitorCount(data.count))
      .catch((err) => console.error('API Error:', err));
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Visitor Counter</h1>
      <p className="text-xl mt-4">Current visitor count: {visitorCount}</p>
    </main>
  );
}
