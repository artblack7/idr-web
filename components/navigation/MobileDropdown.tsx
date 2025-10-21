import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useMediaQuery from "../../hooks/useMediaQuery";
import Arrow_Icon from '../SVG/Arrow_Icon';

export const MobileDropdown = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const handleDropDownHover = () => {
    if (!isMobile) {
      setDropDownOpen(true);
    }
  }

  const handleDropDownLeave = () => {
    if (!isMobile) {
      setDropDownOpen(false);
    }
  }

  const handleDropDownOpen = (event: React.MouseEvent) => {
    if (isMobile) {
      event.stopPropagation();
      setDropDownOpen(!dropDownOpen);
    }
  };
  

  return (
      <div className={`dropdown ${dropDownOpen ? 'open' : ''}`}
            onMouseEnter={handleDropDownHover}
            onMouseLeave={handleDropDownLeave}
            onClick={handleDropDownOpen}>

          <div className="dropdown-link">
            <Link href="#" className={`dropdown-toggle ${dropDownOpen ? 'open-link' : ''}`}>Products</Link>
            {isMobile&& (
            <div className={`arrow ${dropDownOpen ? 'rotate-arrow' : ''}`}>
              <Arrow_Icon />
            </div>
            )}
          </div>

        {dropDownOpen &&
        <div className='dropdown-container'>
          <div className="dropdown-menu">
            <div className='dropdown-link-group'>
            <li>
            <Link href="/globalpay">
              <div className="dropdown-item">
                <div className="icon">
                <img src="/icons/global.svg" height="18" width="18" alt="Logo" loading='eager'/>
                </div>
                <div className="text">
                  <span>Global Payments</span>
                  <small>Transfer funds globally instantly, with near-zero cost</small>
                </div>
              </div>
              </Link>
            </li>
            <li>
            {/* <Link href=""> */}
              <div className="dropdown-item no-link">
                <div className="icon">
                <Image src="/icons/coins.svg" height="16" width="16" alt="Logo" />
                </div>
                <div className="text">
                  <span>Embedded Payments<span className="SmallTag">Coming soon</span></span>
                  <small>Launch the fastest payments products in your platform</small>
                </div>
              </div>
              {/* </Link> */}
            </li> 

            </div>
            <div className='dropdown-link-group'>
            <li>
            <Link href="/accounts">
              <div className="dropdown-item">
                <div className="icon">
                <Image src="/icons/virtual.svg" height="18" width="18" alt="Logo" />
                </div>
                <div className="text">
                  <span>Virtual Accounts
                    {/* <span className="SmallTag">Coming soon</span> */}
                  </span>
                  <small>Integrate virtual accounts to move between dollars and stablecoins</small>
                </div>
              </div>
              </Link>
            </li> 
          </div>
          </div>
          {!isMobile && 
           <Link href="/globalpay">
             <div className="dropdown-card">
                <div className="drop-img">
                    <Image alt="img" src='/img/grid-7.jpg' width={400} height={340} />
                </div>
                <div className="drop-txt">
                    <small>Global Operations</small>
                    <h5>A Modern Payments Platform</h5>
                    <p>Connect into every currency, blockchain, and banking rail in one platform.</p>
                </div>
              </div>
             </Link>
            }
        </div>
        }
    </div>
  );
}

export default MobileDropdown;
