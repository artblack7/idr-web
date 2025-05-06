import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="FooterContent">

          <div className="FooterNavWrap">
            
            <div className='LogoWrap'>
              <div className="FooterSection Logo">
                <div className="">
                  <div className="">
                    <div className="footer-logo">
                      <img alt="IDR" src='/logos/logo.png' width={200} height={200} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

            <div className='ContentWrap'>
              <div className="FooterSection Nav">
                <div className="">
                  <h6>Mapa Web</h6>
                  <ul>
                    <li>
                      <Link href="/laplanta" className="">La Planta</Link>
                    </li>
                    <li>
                      <Link href="/innovacio" className="">Innovació</Link>
                    </li>
                    <li>
                      <Link href="/sostenibilitat" className="">Sostenibilitat</Link>
                    </li>
                    <li>
                      <Link href="/serveis" className="">Gestió de Residus</Link>
                    </li>
                    <li>
                      <Link href="/empresa" className="">Empresa</Link>
                    </li>
                    <li>
                      <Link href="/privacitat">Política de Privacitat</Link>
                    </li>

                  </ul>
                </div>
              </div>

              <div className="FooterSection Info">
                <div className='FooterColumnWrap'>
                  <div className="FooterColumn">
                    <h6>Direcció</h6>
                    <ul>
                      <li>
                        <p>Ronda del Rec, 163</p>
                        <p>08700 Igualada</p>
                        <p>Barcelona, Espanya</p>
                      </li>
                    </ul>
                  </div>

                  <div className="FooterColumn">
                    <h6>Contacte</h6>
                    <ul>
                      <li>
                        <p>Oficines: +34 93 806 85 95</p>
                        <p>Planta: +34 93 803 03 30</p>
                        <p>Email: info@idr.cat</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="PartnerLogos animation-up" data-animate="slide-up">
                    <Image src="/logos/cluster.png" height="300" width="300" alt="Logo" />
                    <Image src="/logos/tradebe.png" height="300" width="300" alt="Logo" />
                    <Image src="/logos/gremi.png" height="300" width="300" alt="Logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="FooterInfoWrap">

            <div className="Legal">
              <div><p> © 2025 Igualadina de Depuració i Recuperació. Tots els drets reservats.</p></div>
              {/* <div className="LegalLinks">
                <Link href="/">Terms of Service </Link>-&nbsp;
                <Link href="/privacitat">Política de Privacitat</Link>
              </div> */}
            </div>
          
          </div>

            {/*              
              <div className="PoweredBy">
                  <div className="PoweredByInner">
                    <span>Website by</span>
                    <a target="_blank" href="">
                    </a>
                    <Link href="www.akashalabs.com">&nbsp;Akasha Labs</Link>
                  </div>
                </div> */}
        
        </div>
      </div>
    </>
  );
};


export { Footer };