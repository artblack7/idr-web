import React, { useEffect, useState } from "react";
import { Toolbar } from "./Toolbar";
import { useElementOnScreen } from "../../hooks/useElementOnScreen"
import useMediaQuery from "../../hooks/useMediaQuery";
import Head from 'next/head';
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslations } from 'next-intl';

export default function MainHeader(props: any) {
  const router = useRouter();
  const t = useTranslations('navigation');
  const [containerRef, isVisible ] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });

  const isMobile = useMediaQuery('(max-width: 480px)');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const persistedScrollState = localStorage.getItem("toolbarScrolled");
      setIsScrolled(persistedScrollState === "true");
      setIsScrolled(!isVisible);
      localStorage.setItem("toolbarScrolled", (!isVisible).toString());
    }
  }, [isVisible]);

  // const headerClass = isMobile ? "header-top-w" : (props.useWhite ? "header-top-w" : "header-top");
  // const headerScrolledClass = isMobile ? "header-scrolled-w" : (props.useWhite ? "header-scrolled-w" : "header-scrolled");
  const headerClass = props.useWhite ? "header-top-w" : "header-top";
  const headerScrolledClass = "header-scrolled";

  return (
    <>
    {props.meta}
    <div ref={containerRef}></div>
        <div className={isVisible ? headerClass : headerScrolledClass}>
          
        <Toolbar useWhite={props.useWhite} {...props}>
          <div className="MenuLinks">
            <Link href="/">{t('home')}</Link>
            <Link href="/laplanta">{t('laplanta')}</Link>
            <Link href="/innovacio">{t('innovacio')}</Link>
            <Link href="/sostenibilitat">{t('sostenibilitat')}</Link>
            <Link href="/serveis">{t('serveis')}</Link>
            <Link href="/empresa">{t('empresa')}</Link>
          </div>
        </Toolbar>

        </div>
        
    </>
  );
}
