import React, { useEffect, useState } from "react";
import { Toolbar } from "./Toolbar";
import { useElementOnScreen } from "../../hooks/useElementOnScreen"
import useMediaQuery from "../../hooks/useMediaQuery";
import Head from 'next/head';
import Link from "next/link";
import { useRouter } from "next/router";

export default function MainHeader(props: any) {
  const router = useRouter();
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
            <Link href="/">Inici</Link>
            <Link href="/laplanta">La Planta</Link>
            <Link href="/innovacio">Innovació</Link>
            <Link href="/sostenibilitat">Sostenibilitat</Link>
            <Link href="/serveis">Gestió Residus</Link>
            <Link href="/empresa">Empresa</Link>
          </div>
        </Toolbar>

        </div>
        
    </>
  );
}
