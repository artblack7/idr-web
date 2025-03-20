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

      <div className="HeroSectionWrap Dark" id="about-hero">
          <div className="Overlay"></div>
        <div className="HeroSection">
          <div className="HeroContent animation-up" data-animate="slide-up">
            <div className='HeroTitle'>
              <h6>PROJECTES</h6>
              <h2>La depuradora dels curtidors d'Igualada</h2>
            </div>
          </div>
        </div>

      </div>

      {/* MAIN SECTION */}

      <section className="SectionWrap" id="about-main">

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
              <p className='tagline'>QUI SOM</p>
              <h3>La depuradora dels curtidors</h3>
              <p className='highlight'>
              IDR va ser fundada com una iniciativa col·laborativa entre els curtidors del barri del Rec d'Igualada. Aquesta planta depuradora és gestionada per les mateixes empreses de la indústria de la pell, amb l'objectiu de garantir un futur sostenible per al sector.
              </p>
              <p>
              La nostra estructura organitzativa es basa en la col·laboració activa dels nostres socis, amb comitès i grups de treball que assessoren en aspectes com la traçabilitat, el desenvolupament tècnic i l'impacte ambiental, assegurant així que cada decisió contribueixi a un cicle de producció més sostenible.
              </p>
              <p>
              Gràcies a aquesta aliança, IDR s'ha convertit en una plataforma única a Catalunya, dedicada al tractament d'aigües residuals específiques del procés de curtits i a la gestió de residus líquids industrials per altres sectors.
              </p>
            </div>
          </div>

        </div>

        {/* LEFT */}

        <div className="SideSection ">
          <div className="SideContent Left animation-up" data-animate="slide-up">
            <div className="SideTxt">
              <p className='tagline'>LA NOSTRA MISSIÓ</p>
              <h3>La revolució sostenible del sector dels curtits</h3>
              <p>
              Com a part del Leather Cluster Barcelona, IDR ha contribuït a la millora contínua dels processos en el sector de la pell, amb un sistema innovador de depuració biològica que ha permès reduir de manera significativa l’impacte ambiental de la indústria. 
              </p>
              <p>
              Aquest esforç col·lectiu impulsa una indústria de la pell orientada al futur, amb un ferm compromís amb l'eficiència i el respecte pel medi ambient, aportant valor tant a la cadena productiva com a la comunitat local.
              </p>

            <div className="AppBtn">
              <Link href="/empresa"><button>Saber més<Arrow_Icon /></button></Link>
            </div>

          </div>

            <div className="SideImg">
              <div className='ImgWrap'>
                <Image className="radius-4 animation-up" data-animate="slide-up"  loading="eager" 
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

      <section className="SectionWrap Dark" id="about-quote">
        <div className="CenterSection">
            <div className="QuoteContent animation-up" data-animate="slide-up">
              <p className='tagline'>VISIÓ DE FUTUR</p>
              <h4>
              Volem ser un referent internacional en sistemes avançats de depuració d’aigües industrials, liderant la transició del sector de la pell cap a un model d’economia circular de l’aigua d’impacte zero.
              </h4>
            </div>

        </div>
      </section>

          {/* COLLAB */}

          <section className="SectionWrap" id="about-collab">
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

        <section>
        <div className='Stripe Green'></div>
      </section>

        <section className="SectionWrap" id="about-socis">
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
                  alt="IDR" src='/logos/aj-black.png' 
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
