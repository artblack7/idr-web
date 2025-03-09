import React, { useEffect, useState, FunctionComponent } from 'react';
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
import Link from 'next/link';
import MainHeader from "../components/navigation/Header";
import {Footer} from '../components/navigation/Footer';
import AnimationTrigger from '../components/AnimationTrigger';
import Contact from '../components/Contact';
import Arrow_Icon from '../components/SVG/Arrow_Icon';
import { Meta } from '../components/head/Meta';
import ImgCarousel from '../components/carousel/ImgCarousel';

import RecentPosts from '../components/blog/RecentPosts';
import { GetStaticProps } from 'next';
import { BlogArchiveConfig, Config } from '../utils/Config';
import { getAllPosts, getCategoryCollection, PostItems } from '../utils/Content';

type IAboutProps = {
  initialPosts: PostItems[];
  allPosts: PostItems[];
};

export default function Home(props: IAboutProps) {
  const isMobile = useMediaQuery('(max-width: 480px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  // const isDesktop = useMediaQuery('(min-width: 1025px)');
  const { allPosts, initialPosts } = props;

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

        {/* <div className="HeroBgWrap">      
          <div className="HeroBg">
            <video className="HeroVideo"  muted loop playsInline
              // autoPlay
              src="video/idr-video.mp4 type="video/mp4">
            </video>
            <div className="Overlay"></div>
          </div>
        </div> */}

      <div className="HeroSectionWrap Dark" id="MainHero">
          <video className="HeroVideo"  muted loop playsInline
            // autoPlay
            src="video/idr-video.mp4">
          </video>
          <div className="Overlay"></div>
        <div className="HeroSection main">
          <div className="MainHeroContent animation-up" data-animate="slide-up">
            <h1>Som IDR</h1>
            <h6 className=''>Igualadina de Depuració i Recuperació</h6>
            {/* <h2>
            Depuració Innovadora per <br></br>un futur sostenible            
            </h2> */}
            {/* <h2>Innovació</h2> */}
          </div>
        </div>

      </div>

      {/* QUI SOM */}

      <section className="SectionWrap" id="quisom">
        <div className="SideSection">
          <div className="SideContent Right animation-up" data-animate="slide-up">
          
          <div className="SideImg">
              <div className="ImgWrap">
                <Image className="animation-up" data-animate="slide-up"  loading="eager" 
                alt="IDR" src='/img/quisom.png' 
                // sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
                width={500} height={500} />
              </div>
            </div>
            
            <div className="SideTxt">
              <p className='tagline'>Qui Som</p>
              <h3>Units per una indústria de la pell Sostenible</h3>
              <p>
              Igualadina de Depuració i Recuperació és una una planta de depuració situada al barri del Rec d'Igualada, creada pels mateixos curtidors per tractar les seves aigües residuals i garantir un cicle d’aigua més net i respectuós amb el medi ambient. Ens uneix un compromís comú: impulsar una indústria de la pell sostenible.
              </p>
              <p>
              A més de servir el sector dels curtits, oferim serveis de gestió de residus líquids no perillosos per a altres indústries, ajudant a reduir l'impacte ambiental.
              </p>

            <div className="AppBtn">
              <Link href="/empresa"><button>Saber més<Arrow_Icon /></button></Link>
            </div>


         </div>

            {/* GUIA MIDA IMATGES 

                <Image className="index-1 animation-up" data-animate="slide-up"  loading="eager" 
                alt="IDR" src='/img/brand-logo.png' 
                sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
                width={500} height={500} />

             */}
          </div>

        </div>
      </section>

    {/* TECNOLOGIA */}

    <section className="SectionWrap" id="tech">
        <div className="CenterSection">
          <div className="CenterContent">
            <div className="CenterTxt animation-up" data-animate="slide-up">
              <h3>Tecnologia avançada al servei de l’aigua</h3>
              <div className="TextGroup">
                <div className="SuiteText">
                  <p>
                  La nostra planta, pionera a Europa en depuració biològica, utilitza tecnologia d'última generació per garantir l'eficiència i la qualitat del tractament de les aigües. 
                  </p>
                </div>
                <div className="SuiteText">
                  <p>
                  Comptem amb un equip de professionals especialitzats en el tractament d’aigues residuals industrials, que asseguren un control rigorós de qualitat en totes les fases del procés.                  <span className="pblue"> </span>                
                  </p>
                </div>
              </div>

             <div className="AppBtn Black">
               <Link href="/empresa"><button>Saber més<Arrow_Icon /></button></Link>
             </div>
            </div>

            <div className="CenterImg">
              <video muted loop playsInline
              autoPlay
              src="video/idr-video.mp4">
              </video>
            </div>

          </div>

        </div>
      </section>
      
        {/* RESIDUS */}

        <section className="DivSectionWrap DivLeft Dark" id="residus">
          <div className="DivSection Left animation-up" data-animate="slide-up">

            <div className="SideTxt">
              <p className='tagline'>PROJECTES</p>
              <h3><span className="GreenGrad">Gestió de Residus </span>
              per una indústria més neta</h3>              
              <p>
              Impulsem projectes I+D per optimitzar els processos existents i implementar tecnologies innovadores que permetin una depuració cada cop més completa i sostenible, avançant cap a un model d’economia circular i impacte zero.
              </p>
              <div className="AppBtn Green">
                <Link href="/gestioresidus"><button>Més Informació<Arrow_Icon /></button></Link>
              </div>
            </div>

            {/* <div className="SideImg"></div>  */}

            <div className="SideImg">

              {isTablet ? <Image alt="dashboard" src='/img/residus.jpg' width={800} height={800} />
              : (null )}

            </div>

          </div>
      </section>
      <section>
        <div className='Stripe Green'></div>
      </section>

        {/* MISSION */}

        <section className="SectionWrap" id="mission">
          <div className="SquareSection">
            <div>
              <div className="CenterHeading animation-up" data-animate="slide-up">
                {/* <h6 className='subtitle'>Why HIFI</h6> */}
                <div>
                  <h2><span>El nostre compromís</span>
                  <br />
                  {/* <span className='MainGrad'>for global businesses</span> */}
                  </h2>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. 
                  </p>
                </div>
              </div>
            </div>
      
            <div className="CardGroup CenterTri">
            
              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardImg">
                <Image className="animation-up" data-animate="slide-up"  loading="eager" 
                alt="img" src='/icons/mission-2.png' width={100} height={100}
                // sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
                 />           
               </div>
                <div className="CardTxt">
                  <h6>Qualitat de l’aigua</h6>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. 
                  </p>
                </div>
              </div>      

              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardImg">
                <Image className="animation-up" data-animate="slide-up"  loading="eager" 
                alt="img" src='/icons/mission-1.png' width={100} height={100}
                // sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
                 />           
                </div>
                <div className="CardTxt">
                  <h6>Sostenibilitat ambiental</h6>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. 
                  </p>
                </div>
              </div>       

              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardImg">
                <Image className="animation-up" data-animate="slide-up"  loading="eager" 
                alt="img" src='/icons/mission-3.png' width={100} height={100}
                // sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
                 />           
                </div>
                <div className="CardTxt">
                  <h6>Economia Circular</h6>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. 
                  </p>
                </div>
              </div>              
      
            </div>

          </div>
        </section>


        {/* INNOVATION */}

        <section className="DivSectionWrap DivLeft Dark" id="innovation">
          <div className="DivSection Left animation-up" data-animate="slide-up">

            <div className="SideTxt">
              <p className='tagline'>PROJECTES</p>
              <h3>Solucions <span className="BlueGrad">Innovadores </span>
              per a nous reptes ambientals</h3>              
              <p>
              Impulsem projectes I+D per optimitzar els processos existents i implementar tecnologies innovadores que permetin una depuració cada cop més completa i sostenible, avançant cap a un model d’economia circular i impacte zero.
              </p>
              <div className="AppBtn Blue">
                <Link href="/empresa"><button>Veure Projectes<Arrow_Icon /></button></Link>
              </div>
            </div>

            {/* <div className="SideImg"></div>  */}

            <div className="SideImg">

              {isTablet ? <Image alt="dashboard" src='/img/lab.jpg' width={800} height={800} />
              : (null )}

            </div>

          </div>
      </section>
      <section>
        <div className='Stripe Blue'></div>
      </section>

  {/* SOCIS  */}

      <section className="SectionWrap" id="socis">
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

            <div className="CenterImg mt-7">
              <div className="ImgCarousel">
              <ImgCarousel set="socis" />
              </div>
            </div>

          </div>

        </div>
      </section>

      <section>
        <div className='Stripe Brown'></div>
      </section>

      {/* POSTS */}

      {/* <section className="NewsSectionWrap">
          <div className="NewsSection">
            <div className="NewsContent">
              <div className='NewsTitle'>
                <h3>Projectes Recents</h3>
              </div>
              <RecentPosts allPosts={allPosts}/>
              </div>
          </div>
        </section> */}
  
      {/* <Slideshow /> */}

      {/* TEXT LEFT */}

      {/* <section className="SectionWrap" id="Quisom">
        <div className="SideSection">
          <div className="SideContent Left animation-up" data-animate="slide-up">
            <div className="SideTxt">
              <p className='tagline'>Qui Som</p>
              <h3>Units per una indústria de la pell Sostenible</h3>
              <p>
              Igualadina de Depuració i Recuperació és una una planta de depuració situada al barri del Rec d'Igualada, creada pels mateixos curtidors per tractar les seves aigües residuals i garantir un cicle d’aigua més net i respectuós amb el medi ambient. Ens uneix un compromís comú: impulsar una indústria de la pell sostenible.
              </p>
              <p>
              A més de servir el sector dels curtits, oferim serveis de gestió de residus líquids no perillosos per a altres indústries, ajudant a reduir l'impacte ambiental.
              </p>

            <div className="AppBtn">
              <Link href="/empresa"><button>Saber més<Arrow_Icon /></button></Link>
            </div>

          </div>

            <div className="SideImg">
              <div className="ImgWrap">
                <Image className="animation-up" data-animate="slide-up"  loading="eager" 
                alt="IDR" src='/img/quisom.png' 
                // sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
                width={500} height={500} />
              </div>
            </div>
          </div>

        </div>
      </section> */}

      <Contact />

      <Footer />

    </main>
  );
}


export const getStaticProps: GetStaticProps<IAboutProps> = async () => {
  const posts = getAllPosts(Config.post_fields);

  return {
    props: {
      allPosts: posts,
      initialPosts: posts.slice(0, BlogArchiveConfig.blog_pagination_size),
      categoryCollection: getCategoryCollection(['slug', 'tags']),    
    },
  };
};