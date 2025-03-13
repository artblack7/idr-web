import React from 'react';
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
import Link from 'next/link';
import MainHeader from "../components/navigation/Header";
import {Footer} from '../components/navigation/Footer';
import AnimationTrigger from '../components/AnimationTrigger';
import Arrow_Icon from '../components/SVG/Arrow_Icon';
import { Meta } from '../components/head/Meta';

export default function Tech() {

  return (
    <main className='Main'>
     {/* <AnimationTrigger /> */}
      <div>
        <MainHeader useWhite={false}
          meta={<Meta 
          title="IDR" 
          metaTitle="IDR │ Igualadina de Depuració i Recuperació." 
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

      {/* TEXT RIGHT */}

      <section className="SectionWrap" id="">
        <div className="SideSection">
          <div className="SideContent Right animation-up" data-animate="slide-up">
          
          <div className="SideImg Square">
              <div className="ImgWrap">
                <Image className="animation-up" data-animate="slide-up"  loading="eager" 
                alt="IDR" src='/img/img-micro.jpg' 
                // sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
                width={500} height={500} />
              </div>
            </div>
            
            <div className="SideTxt">
              <p className='tagline'>Projectes</p>
              <h3>Projectes I+D per a nous reptes ambientals</h3>
              <p className='bold-text'>
              Amb la missió de liderar la transició cap a un cicle de l’aigua més net i sostenible, IDR està compromesa amb la recerca i desenvolupament de solucions innovadores en el tractament d’aigües.               </p>
              <p>
              Col·laborem amb empreses de curtits, centres d'innovació i altres entitats del sector per optimitzar el tractament d’aigües residuals i avançar en models d’economia circular de l’aigua que permetin la reutilització de recursos dins la indústria de la pell, reduïnt així el consum de recursos naturals. 
              </p>

         </div>
          </div>

        </div>
      </section>


      {/* TEXT LEFT */}

      <section className="SectionWrap" id="">
        <div className="SideSection">
          <div className="SideContent Left animation-up" data-animate="slide-up">
            <div className="SideTxt">
              <p className='tagline'>Qui Som</p>
              <h3>Tecnologies per avançar cap a l’impacte zero</h3>
              <p>
              Lorem Ipsum
              </p>
              <p>
              A través de l’investigació en tecnologies avançades com la nanofiltració i l’osmosis inversa, busquem aconseguir una depuració cada vegada més completa i eficient, orientada cap a un model d’impacte ambiental mínim, i avançant cap a l’impacte zero.
              </p>

            <div className="AppBtn">
              <Link href="/empresa"><button>Saber més<Arrow_Icon /></button></Link>
            </div>

          </div>

            <div className="SideImg Square">
              <div className="ImgWrap">
                <Image className="animation-up" data-animate="slide-up"  loading="eager" 
                alt="IDR" src='/img/img-micro.jpg' 
                // sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
                width={500} height={500} />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* NUMBER CARDS */}

            <section className="SectionWrap" id="">
          <div className="CenterSection">
      
            <div className="CardGroup Numbers">
            
              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="Card">
                  <h1 className='BlueGrad'>+10</h1>
                  <div className="CardLine"></div>
                  <h6>Projectes</h6>
                </div>
              </div>      

              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="Card">
                  <h1 className='BlueGrad'>+10</h1>
                  <div className="CardLine"></div>
                  <h6>Projectes</h6>
                </div>
              </div>        

              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="Card">
                  <h1 className='BlueGrad'>+10</h1>
                  <div className="CardLine"></div>
                  <h6>Projectes</h6>
                </div>
              </div>              
            </div>

          </div>
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

      <Footer />

    </main>
  );
}
