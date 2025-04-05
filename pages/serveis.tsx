import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import MainHeader from "../components/navigation/Header";
import {Footer} from '../components/navigation/Footer';
import AnimationTrigger from '../components/AnimationTrigger';
import Arrow_Icon from '../components/SVG/Arrow_Icon';
import { Meta } from '../components/head/Meta';
import Table from '../components/Table';
import Contact from '../components/Contact';
import ContactForm from '../components/ContactForm';

export default function Serveis() {

  return (
    <main className='Main'>
     {/* <AnimationTrigger /> */}
      <div>
        <MainHeader useWhite={false}
          meta={<Meta 
          title="Gestió de residus" 
          metaTitle="Gestió de residus │ Igualadina de Depuració i Recuperació." 
          metaImg="https://idr.com/thumb/thumb.png" 
          description="Depuració Innovadora per un futur sostenible." />} 
          />
      </div>

      <div className="HeroSectionWrap Dark" id="services-hero">
          <div className="Overlay"></div>
        <div className="HeroSection">
          <div className="HeroContent animation-up" data-animate="slide-up">
            <div className='HeroTitle'>
              <h6>SERVEIS</h6>
              <h2>Gestió de residus líquids industrials</h2>
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
                alt="IDR" src='/img/img-residus.jpg' 
                // sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
                width={500} height={500} />
              </div>
            </div>
            
            <div className="SideTxt">
              <p className='tagline'>SERVEIS PER EMPRESES</p>
              <h3>Servei de gestió de residus líquids no perillosos</h3>
              <p className='highlight'>
              IDR ofereix els seus serveis de depuració i gestió de residus líquids no perillosos, assessorant a les empreses en la minimització del seu impacte ambiental.
              </p>
              <p>
              La nostra filosofia de millora continua fa que constantment treballem en optimitzar el procés de tractament de les nostres aigües, aplicant un tractament fisicoquímic i biològic personalitzat i òptim per a cada residu.              
              </p>
            </div>
          </div>

        </div>

        {/* LEFT */}

        <div className="SideSection">
          <div className="SideContent Left animation-up" data-animate="slide-up">
            <div className="SideTxt">
              <p className='tagline'>LLICÈNCIES</p>
              <h3>Gestió de residus líquids amb garanties ambientals</h3>
              <p className='highlight'>
              IDR disposa de la Llicència Ambiental Integrada per la gestió de residus líquids no perillosos, amb codi de gestor E-1706.17.
              </p>
              <p>
              IDR és pionera a Catalunya en combinar dues activitats, la depuració d’aigües industrials i urbanes i la gestió de residus líquids no perillosos.
              </p>
              <p>
              L’alta capacitat tecnològica de la depuradora d’IDR, permet tractar residus líquids no perillosos amb totes les garanties mediambientals.
              </p>
            <div className="AppBtn">
              <Link href="/empresa"><button>Saber més<Arrow_Icon /></button></Link>
            </div>

          </div>

            <div className="SideImg">
              <div className='ImgWrap'>
                <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                alt="IDR" src='/img/img-gestio.jpg' 
                // sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
                width={500} height={500} />
              </div>
            </div>
          </div>
        </div>

      </section>

  {/* CODIS LER */}

      <section>
        {/* <div className='GradStripe'></div> */}
        <div className='Stripe Green'></div>
      </section>

    <section className="SectionWrap" id="services-codes">
        <div className="CenterSection">
          <div className="CenterContent">
            <div className="CenterTxt animation-up" data-animate="slide-up">
              <h3>Llistat de Codis LER</h3>
              <div className="">
                <p>
                Consulta els codis LER dels residus que estem autorizats a tractar.                </p>
              </div>
            </div>

            <Table />

          </div>

        </div>
      </section>

      <Contact />
 
      <Footer />

    </main>
  );
}
