import { useEffect } from 'react';

const useScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://example.com/some-script.js";  // Replace with your script URL
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export default useScript;

