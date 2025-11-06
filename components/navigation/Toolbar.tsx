import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useMediaQuery from "../../hooks/useMediaQuery";
import Exit_Icon from "../SVG/Exit_Icon";
import Link from "next/link";
import Image from "next/image";
import Menu_Icon from "../SVG/Menu_Icon";
import Arrow_Icon from "../SVG/Arrow_Icon";
import { useTranslations } from 'next-intl';
import { LanguageSelector } from './LanguageSelector';
import Linkedin_Icon from '../SVG/Linkedin_Icon';

interface ToolbarProps {
  useWhite?: boolean;
  children: React.ReactNode;
  locale?: string;
}

export const Toolbar = ({ useWhite = false, children, locale = 'ca' }: ToolbarProps) => {
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 1025px)');
    const toolbarClass = useWhite ? 'ToolbarWhite' : 'Toolbar';
    const router = useRouter();
    const t = useTranslations('navigation');

  // Reset burger menu state on navigation
  useEffect(() => {
    const handleRouteChange = () => setBurgerMenuOpen(false);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router]);

    if (isDesktop) {
        return (
            <div className={toolbarClass}>
                <div className="ToolbarInner">
                    <div className="ToolbarLeft">
                      <div className="AppName">
                          <Link href={`/${locale}`}>
                                <div className="toolbar-logo">
                                  <Image alt="IDR Logo" src='/logos/logo.png' width={866} height={414} loading="eager"/>
                                </div>
                          </Link>
                      </div>
                    </div>
                    <div className="ToolbarCenter">
                      <div className="ToolbarMenu">
                          {children}
                      </div>
                    </div>
                    <div className="ToolbarRight">
                      <div className="ButtonGroup right">
                          <LanguageSelector currentLocale={locale} useWhite={useWhite} />
                          <div className="NavLinkedin">
                            <a href="https://www.linkedin.com/company/idr-igualadina-depuracio-recuperacio/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                              <Linkedin_Icon />
                            </a>
                          </div>
                          <div className="AppBtn">
                            <Link target="blank" href="https://clients.idr.cat/"><button>{t('clientArea')}<Arrow_Icon /></button></Link>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        );
      }

      return (
        <div className={toolbarClass}>
          <div className="ToolbarInner">
            <div className="AppName">
              <Link href={`/${locale}`}>
                <div className="toolbar-logo">
                  <Image alt="IDR Logo" src="/logos/logo.png"
                    width={866} height={414} loading="eager"
                  />
                </div>
              </Link>
            </div>
            <div className="ToolbarMenu">
              <div className="MenuHamburger">
                <button onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}>
                  <Menu_Icon />
                </button>
              </div>
            </div>
            <div
              className={`ToolbarMenuBackdrop ${burgerMenuOpen ? "open" : ""}`}
              onClick={() => setBurgerMenuOpen(false)}
            >
              {burgerMenuOpen && (
                <div className={`ToolbarMenuBox ${burgerMenuOpen ? "open" : ""}`}>
                  <div className="MenuClose">
                    <div className="AppName">
                      <Link href={`/${locale}`}>
                        <div className="toolbar-logo">
                          <Image
                            alt="IDR Logo"
                            src="/logos/logo.png"
                            width={866}
                            height={414}
                            loading="eager"
                          />
                        </div>
                      </Link>
                    </div>
                    <button onClick={() => setBurgerMenuOpen(false)}>
                      <Exit_Icon />
                    </button>
                  </div>
                  {children}
                  <div className="MenuLinks Extra">
                    <Link target="_blank" href="https://clients.idr.cat/">
                      {t('clientArea')}
                    </Link>
                    <div className="LanguageSelectorMobile">
                      <LanguageSelector currentLocale={locale} useWhite={false} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    };