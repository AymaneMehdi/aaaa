import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if the user has previously accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    // If cookies have not been accepted, show the cookie consent alert
    setShowConsent(!cookiesAccepted);
  }, []);

  const handleAcceptCookies = () => {
    // Set a cookie to remember the user's choice
    localStorage.setItem('cookiesAccepted', true);
    // Hide the cookie consent alert
    setShowConsent(false);
  };

  const handleDeclineCookies = () => {
    // Optionally, handle the user's choice to decline cookies
    // Hide the cookie consent alert
    setShowConsent(false);
  };

  return (
    <div style={{ display: showConsent ? 'block' : 'none', position: 'fixed', bottom: 0, left: 0, width: '100%', padding: '10px', backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
      <p>This website uses cookies to ensure you get the best experience on our website.</p>
      <button onClick={handleAcceptCookies}>Accept</button>
      <button onClick={handleDeclineCookies}>Decline</button>
    </div>
  );
};

export default CookieConsent;
