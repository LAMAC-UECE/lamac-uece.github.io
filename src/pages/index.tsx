import React, { useEffect, useState } from 'react';
import App from '../components/App/App';


export default function IndexPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
