import { useState, useEffect } from 'react';
import '../styles/Loading.css';

export default function Loading() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='loading-container'>
      <div className='loading-content'>
        <img src='/sglogo.png' alt='SG Siding Logo' className='loading-logo' />
        <h2 className='loading-text'>Loading{dots}</h2>
      </div>
    </div>
  );
}
