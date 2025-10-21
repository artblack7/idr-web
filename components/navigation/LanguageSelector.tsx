import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Arrow_Icon from '../SVG/Arrow_Icon';
import Language_Icon from '../SVG/Language_Icon';

interface LanguageSelectorProps {
  currentLocale: string;
  useWhite?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLocale, useWhite = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

  return (
    <div className="LanguageSelector" ref={dropdownRef}>
      <button 
        className={`LanguageButton ${useWhite ? 'white' : ''} ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <Language_Icon />
        <span>{currentLanguage.name}</span>
        <span className="arrow-right">
          {/* <div className='LanguageArrow'><Arrow_Icon /></div> */}
        </span>
      </button>
      
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
    </div>
  );
};
