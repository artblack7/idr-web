import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ScrollIndicator: React.FC = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isSmallScreen = window.innerWidth <= 1024;
      // Hide on blog pages (blog index or blog post pages)
      const isBlogPage = router.pathname?.includes('/blog') || router.pathname?.includes('/post');
      setIsVisible(isSmallScreen && !isBlogPage);
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('scroll', handleScroll);
    
    // Re-check when route changes
    router.events?.on('routeChangeComplete', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('scroll', handleScroll);
      router.events?.off('routeChangeComplete', checkScreenSize);
    };
  }, [router]);

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`ScrollIndicator ${!isVisible ? 'hidden' : hasScrolled ? 'fade-out' : 'fade-in'}`}
      onClick={handleClick}
    >
      <div className="ScrollIndicatorCircle">
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path 
            d="M8 10L12 14L16 10" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ScrollIndicator;

