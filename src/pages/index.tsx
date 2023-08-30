import React, { useEffect, useState } from 'react';
import Home from './home';


export default function IndexPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  )
}
