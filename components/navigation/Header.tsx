import React from "react";
import { Toolbar } from "./Toolbar";
import { useElementOnScreen } from "../../hooks/useElementOnScreen"
import useMediaQuery from "../../hooks/useMediaQuery";
import Head from 'next/head';
import Link from "next/link";

export default function MainHeader(props: any) {
  const [ bannerRef, isVisible ] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });

  const isMobile = useMediaQuery('(max-width: 480px)');

  const headerClass = isMobile ? "header-top-w" : (props.useWhite ? "header-top-w" : "header-top");
  const headerScrolledClass = isMobile ? "header-scrolled-w" : (props.useWhite ? "header-scrolled-w" : "header-scrolled");
  
  return (
    <>
    {props.meta}

        <div className={isVisible ? headerClass : headerScrolledClass}>
          
        <Toolbar useWhite={props.useWhite} {...props}>
          <div className="MenuLinks">
            {/* <ProductsDropdown /> */}
            <Link href="/">Inici</Link>
            <Link href="/laplanta">La Planta</Link>
            <Link href="/innovacio">Innovació</Link>
            {/* <Link href="/projectes">Projectes</Link> */}
            <Link href="/sostenibilitat">Sostenibilitat</Link>
            <Link href="/serveis">Gestió Residus</Link>
            <Link href="/empresa">Empresa</Link>
            {/* <Link href="/">Blog</Link> */}
          </div>
        </Toolbar>

        </div>
        
    </>
  );
}
