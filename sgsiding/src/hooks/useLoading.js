import { useState, useEffect } from 'react';

export const useLoading = (minimumLoadTime = 1000) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      if (document.readyState === 'complete') {
        setTimeout(() => {
          setIsLoading(false);
        }, minimumLoadTime);
      }
    };

    // Check if already loaded
    if (document.readyState === 'complete') {
      setTimeout(() => {
        setIsLoading(false);
      }, minimumLoadTime);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, [minimumLoadTime]);

  return isLoading;
};
