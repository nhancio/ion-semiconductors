import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: any;
  }
}

const TawkToChat = () => {
  useEffect(() => {
    // Tawk.to Script
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    
    s1.async = true;
    s1.src = 'https://embed.tawk.to/67c2db6bce305519103664c1/1il8ii74o';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    
    s0.parentNode?.insertBefore(s1, s0);

    return () => {
      // Cleanup if needed
      s1.remove();
    };
  }, []);

  return null;
};

export default TawkToChat;