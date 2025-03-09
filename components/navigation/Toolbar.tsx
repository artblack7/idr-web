import React, { useState } from 'react';
import useMediaQuery from "../../hooks/useMediaQuery";
import Exit_Icon from "../SVG/Exit_Icon";
import Link from "next/link";
import Image from 'next/image';
import Menu_Icon from "../SVG/Menu_Icon";
import Arrow_Icon from "../SVG/Arrow_Icon";

export const Toolbar = (props: any) => {
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 1025px)');
    const isMobile = useMediaQuery('(max-width: 480px)');
    const toolbarClass = isMobile ? 'ToolbarWhite' : (props.useWhite ? 'ToolbarWhite' : 'Toolbar');

    if (isDesktop) {
        return (
            <div className={toolbarClass}>
                <div className="ToolbarInner">
                    <div className="AppName">
                        <Link href="/">
                              <div className="toolbar-logo">
                                <Image alt="IDR Logo" src='/logos/logo.png' width={866} height={414} loading="eager"/>
                              </div>
                        </Link>
                    </div>
                    <div className='row'>
                      <div className="ToolbarMenu">
                          {props.children}
                      </div>
                      <div className="ButtonGroup right">
                          <div className="AppBtn">
                            <Link target="" href="/"><button>Àrea Clients<Arrow_Icon /></button></Link>
                          </div>
                      </div>
                    </div>

                </div>
            </div>
        );
    } else {
        return (
            <>
                <div className="Toolbar">
                    <div className="ToolbarInner">
                        <div className="AppName">
                            <Link href="/">
                             <div className="toolbar-logo">
                                <Image alt="IDR Logo" src='/logos/logo.png' width={866} height={414} loading="eager"/>
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

                        <div className="ToolbarMenuBackdrop" onClick={() => setBurgerMenuOpen(false)} style={{ visibility: burgerMenuOpen ? "visible" : "hidden" }}>
                            {burgerMenuOpen && <div className="ToolbarMenuBox" style={{ visibility: burgerMenuOpen ? "visible" : "hidden" }}>
                                <div className="MenuClose">
                                    <div className="AppName">
                                      <Link href="/">
                                        <div className="toolbar-logo">
                                          <Image alt="IDR Logo" src='/logos/logo.png' width={866} height={414} loading="eager"/>
                                        </div>
                                      </Link>
                                    </div>
                                    <button onClick={() => setBurgerMenuOpen(false)}>
                                        <Exit_Icon />
                                    </button>
                                </div>
                                {props.children}

                                {/* <div className="MenuLinks Extra">
                                    <Link href="/getstarted">Àrea Clients</Link>
                                </div>  */}

                                <div className="AppBtn">
                                <Link target="" href="/getstarted"><button>Àrea Clients<Arrow_Icon /></button></Link>
                                </div>
                                

                            </div>}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
