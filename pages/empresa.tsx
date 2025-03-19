import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import MainHeader from "../components/navigation/Header";
import {Footer} from '../components/navigation/Footer';
import AnimationTrigger from '../components/AnimationTrigger';
import Arrow_Icon from '../components/SVG/Arrow_Icon';
import { Meta } from '../components/head/Meta';

export default function Empresa() {

  return (
    <main className='Main'>
     {/* <AnimationTrigger /> */}
      <div>
        <MainHeader useWhite={false}
          meta={<Meta 
          title="Empresa" 
          metaTitle="Empresa │ Igualadina de Depuració i Recuperació." 
          metaImg="https://idr.com/thumb/thumb.png" 
          description="Depuració Innovadora per un futur sostenible." />} 
          />
      </div>

      <div className="HeroSectionWrap Dark" id="innovation-hero">
          <div className="Overlay"></div>
        <div className="HeroSection">
          <div className="HeroContent animation-up" data-animate="slide-up">
            <div className='HeroTitle'>
              <h6>PROJECTES</h6>
              <h2>Depuració innovadora per un futur sostenible</h2>
            </div>
          </div>
        </div>

      </div>

      {/* MAIN SECTION */}

      <section className="SectionWrap" id="">

        {/* RIGHT */}

        <div className="SideSection MiddleSpace">
          <div className="SideContent Right animation-up" data-animate="slide-up">
          
            <div className="SideImg">
              <div className='ImgWrap'>
                <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                alt="IDR" src='/img/img-micro.jpg' 
                // sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
                width={500} height={500} />
              </div>
            </div>
            
            <div className="SideTxt">
              <p className='tagline'>Projectes</p>
              <h3>Projectes I+D per a nous reptes ambientals</h3>
              <p className='highlight'>
              Amb la missió de liderar la transició cap a un cicle de l’aigua més net i sostenible, IDR està compromesa amb la recerca i desenvolupament de solucions innovadores en el tractament d’aigües. 
              </p>
              <p>
               Col·laborem amb empreses de curtits, centres d'innovació i altres entitats del sector per optimitzar el tractament d’aigües residuals i avançar en models d’economia circular de l’aigua que permetin la reutilització de recursos dins la indústria de la pell, reduïnt així el consum de recursos naturals. 
              </p>
            </div>
          </div>

        </div>

        {/* LEFT */}

        <div className="SideSection MiddleSpace">
          <div className="SideContent Left animation-up" data-animate="slide-up">
            <div className="SideTxt">
              <p className='tagline'></p>
              <h3>Tecnologies per avançar cap a l’impacte zero</h3>
              {/* <p>
              Lorem Ipsum
              </p> */}
              <p>
              A través de l’investigació en tecnologies avançades com la nanofiltració i l’osmosis inversa, busquem aconseguir una depuració cada vegada més completa i eficient, orientada cap a un model d’impacte ambiental mínim, i avançant cap a l’impacte zero.
              </p>

            <div className="AppBtn">
              <Link href="/empresa"><button>Saber més<Arrow_Icon /></button></Link>
            </div>

          </div>

            <div className="SideImg">
              <div className='ImgWrap'>
                <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                alt="IDR" src='/img/img-micro.jpg' 
                // sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
                width={500} height={500} />
              </div>
            </div>
          </div>
        </div>

        {/* TIMELINE */}


      </section>

    {/* QUOTE */}

      <section className="SectionWrap Dark" id="quote-innovation">
        <div className="CenterSection">
            <div className="QuoteContent animation-up" data-animate="slide-up">
              <h5>
              IDR, pionera en depuració biològica, impulsa la sostenibilitat i la innovació contínua en el tractament d'aigües per a la indústria de la pell.
              </h5>
            </div>

        </div>
      </section>

          {/* COLLAB */}

          <section className="SectionWrap" id="main-mission">
        <div className="CenterSection">
          <div>
            <div className="CenterHeading animation-up" data-animate="slide-up">
              <div>
                <h2>Xarxa de Col·laboradors</h2>
                <p>
                A IDR formem part d'una xarxa de col·laboració amb universitats, associacions, ajuntaments i empreses especialitzades, amb les quals treballem conjuntament per impulsar projectes d'I+D i garantir la sostenibilitat en la indústria de la pell.
                </p>
              </div>
            </div>
          </div>

          <div className="CardGroup Collab">

            <a href="https://leatherbarcelona.com/" target="blank">
              <div className="CardWrap">
                <div className="CardTop Collab1">
                <div className="CardImg">
                  <Image className="animation-up" data-animate="slide-up" loading="eager" 
                  alt="img" src='/logos/tradebe.png' width={250} height={200} />           
                </div>
                </div>
                <div className="CardBottom">
      
                  <div className="CardTxt">
                    <h6>Leather Cluster Barcelona</h6>
                    <p className=''>
                    Associació que uneix empreses i institucions del sector de la pell per impulsar la col·laboració, la innovació sostenible i l’accés a nous mercats, promovent el networking i aplicant tecnologies avançades per una major responsabilitat ambiental.
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://www.tradebe.com/environmental-services/" target="blank">
              <div className="CardWrap">
                <div className="CardTop Collab2">
                  <Image className="animation-up" data-animate="slide-up" loading="eager" 
                    alt="img" src='/logos/tradebe.png' width={250} height={200} />           
                </div>
                <div className="CardBottom">
                  <div className="CardTxt">
                    <h6>Tradebe</h6>
                    <p className=''>
                    Tradebe és una empresa pionera en la gestió de residus, especialitzada en convertir-los en recursos valuosos a través de solucions innovadores. Amb un ferm compromís amb l’economia circular, Tradebe contribueix activament a un futur més verd i sostenible.                  
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://a3center.cat/index.php/en/" target="blank">
              <div className="CardWrap">
                <div className="CardTop Collab3">
                <Image className="animation-up" data-animate="slide-up" loading="eager" 
                  alt="img" src='/logos/tradebe.png' width={250} height={200} />           
                </div>
                <div className="CardBottom">
                  <div className="CardTxt">
                    <h6>A3 Leather Innovation Center</h6>
                    <p className=''>
                    Recerca i innovació amb noves tecnologies en el sector de la pell. A3 Leather Innovation Center impulsa projectes per obrir nous horitzons, crear pell ecològica d’alta gamma i millorar la sostenibilitat dels processos.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          
          </div>
        </div>
      </section>

        {/* SOCIS  */}

        <section className="SectionWrap" id="main-socis">
        <div className="CenterSection">
          <div className="CenterContent">
            <div className="CenterWrap animation-up" data-animate="slide-up">
              <h3>Socis i Col·laboradors</h3>
              <div className="center-subtitle">
                <p>
                Els nostres socis fundadors inclouen destacades empreses del sector dels curtits, així com l’Ajuntament d’Igualada i representants de les indústries tèxtil i química, tots compromesos amb la reducció de l'impacte ambiental i la reutilització de recursos.
                </p>
              </div>
              <div className="CenterWrap">
                <Image className="animation-up mt-5" data-animate="slide-up"  loading="eager" 
                  alt="IDR" src='/logos/ig-white.png' 
                  // sizes="(max-width: 480px) 200px, (max-width: 1024px) 300px, 400px"
                  width={250} height={50} />
                <p className='mt-3'>
                 SOCI IL·LUSTRE 
                </p>
              </div>

            </div>



          </div>

        </div>
      </section>


      <Footer />

    </main>
  );
}
