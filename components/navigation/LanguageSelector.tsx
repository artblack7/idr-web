import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Arrow_Icon from '../SVG/Arrow_Icon';
import Language_Icon from '../SVG/Language_Icon';
import useMediaQuery from "../../hooks/useMediaQuery";

interface LanguageSelectorProps {
  currentLocale: string;
  useWhite?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLocale, useWhite = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const languages = [
    { code: 'ca', name: 'CA', fullName: 'Català', flag: '/icons/globe.png' },
    { code: 'es', name: 'ES', fullName: 'Español', flag: '/icons/globe.png' },
    { code: 'en', name: 'EN', fullName: 'English', flag: '/icons/globe.png' }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (locale: string) => {
    setIsOpen(false);
    // The router will handle the navigation to the new locale
  };

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className={isMobile ? "LanguageSelectorMobile" : "LanguageSelectorToolbar"} ref={dropdownRef}>
      <button 
        className={`LanguageButton ${useWhite ? 'white' : ''} ${isOpen ? 'open' : ''}`}
        onClick={handleButtonClick}
        aria-label="Select language"
      >
        <div className="language-content">
          <Language_Icon />
          <span>{currentLanguage.name}</span>
        </div>
        {isMobile && (
          <div className={`arrow ${isOpen ? 'rotate-arrow' : ''}`}>
            <Arrow_Icon />
          </div>
        )}
        {!isMobile && (
          <span className="arrow-right">
            <div className='LanguageArrow'><Arrow_Icon /></div>
          </span>
        )}
      </button>
      
      {isMobile ? (
        // Mobile: Only show dropdown when open
        isOpen && (
          <div className="LanguageDropdown">
            {languages.map((language) => (
              <Link
                key={language.code}
                href={`/${language.code}${router.asPath.replace(`/${currentLocale}`, '')}`}
                className={`LanguageOption ${language.code === currentLocale ? 'active' : ''}`}
                onClick={() => handleLanguageChange(language.code)}
              >
                <span>{language.fullName}</span>
              </Link>
            ))}
          </div>
        )
      ) : (
        // Desktop: Always render but use CSS opacity/transform
        <div className={`LanguageDropdown ${isOpen ? 'open' : ''}`}>
          {languages.map((language) => (
            <Link
              key={language.code}
              href={`/${language.code}${router.asPath.replace(`/${currentLocale}`, '')}`}
              className={`LanguageOption ${language.code === currentLocale ? 'active' : ''}`}
              onClick={() => handleLanguageChange(language.code)}
            >
              <span>{language.fullName}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
