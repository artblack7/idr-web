import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="FooterContent">

          <div className="FooterNavWrap">
          
          <div className="FooterSection">
            <div className="">
              <div className="AppName">
                  <div className="footer-logo">
                    <img alt="IDR" src='/logos/logo.png' width={200} height={200} />
                  </div>
                </div>
              </div>
            </div>

          <div className="FooterSection">
            <div className="">
              <h6>Mapa Web</h6>
              <ul>
                <li>
                  <Link href="/" className="">La Planta</Link>
                </li>
                <li>
                  <Link href="/" className="">Innovació</Link>
                </li>
                <li>
                  <Link href="/" className="">Sostenibilitat</Link>
                </li>
                <li>
                  <Link href="/" className="">Gestió de Residus</Link>
                </li>
                <li>
                  <Link href="/" className="">Empresa</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="FooterSection">
            <div className='FooterColumnWrap'>
              <div className="FooterColumn">
                <h6>Direcció</h6>
                <ul>
                  <li>
                    <p>Direccio, 84</p>
                    <p>08700 Igualada</p>
                    <p>Barcelona, Espanya</p>
                  </li>
                </ul>
              </div>

              <div className="FooterColumn">
                <h6>Contacte</h6>
                <ul>
                  <li>
                    <p>T: +34 923 267 128</p>
                    <p>E: info@idr.cat</p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
            <div className="PartnerLogos animation-up" data-animate="slide-up">
              <Image src="/logos/logo-black.png" height="100" width="100" alt="Logo" />
              <Image src="/logos/logo-black.png" height="100" width="100" alt="Logo" />
              <Image src="/logos/logo-black.png" height="100" width="100" alt="Logo" />
            </div>
            </div>

            </div>
          </div>

            <div className="FooterInfoWrap">

              <div className="Legal">
                <div><p> © 2025 Igualadina de Depuració i Recuperació. All Rights Reserved.</p></div>
                <div className="LegalLinks">
                  {/* <Link href="/">Terms of Service </Link>-&nbsp; */}
                  <Link href="/privacitat">Política de Privacitat</Link>
                </div>
              </div>
            
            </div>
             
             {/* <div className="PoweredBy">
                <div className="PoweredByInner">
                  <span>Website by</span>
                  <a target="_blank" href="">
                  </a>
                  <Link href="web url">&nbsp;Akasha Labs</Link>
                </div>
              </div> */}

          </div>
      </div>
    </>
  );
};


export { Footer };