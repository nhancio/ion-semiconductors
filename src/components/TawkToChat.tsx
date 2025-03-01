import React, { useEffect } from 'react';

const TawkToChat: React.FC = () => {
  useEffect(() => {
    // Tawk.to integration script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/YOUR_TAWK_TO_PROPERTY_ID/default'; // Replace with your actual Tawk.to property ID
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.head.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default TawkToChat;