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

type IIndexProps = {
  initialPosts: PostItems[];
  allPosts: PostItems[];
};

export default function Home(props: IIndexProps) {
// export default function Home() {
  const isMobile = useMediaQuery('(max-width: 480px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
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

      <div className="HeroSectionWrap Dark" id="main-hero">
          <video className="HeroVideo"  muted loop playsInline
            autoPlay
            src="video/hero-video.mp4">
          </video>
          <div className="Overlay"></div>
        <div className="HeroSection Main">
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

      {/* <section className="SectionWrap" id="main-about">
        <div className="SideSection">
          <div className="SideContent Right animation-up" data-animate="slide-up">
          
          <div className="SideImg">
              <div className="ImgWrap">
                <Image className="animation-up" data-animate="slide-up"  loading="eager" 
                alt="IDR" src='/img/quisom.png' 
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
          </div>

        </div>
      </section> */}

    {/* LA PLANTA */}

    <section className="SectionWrap" id="main-tech">
        <div className="CenterSection">
          <div className="CenterContent">
            <div className="CenterTxt animation-up" data-animate="slide-up">
              <h3>Depuració innovadora per un futur sostenible</h3>
              <div className="TextGroup">
                <div className="HalfText">
                  <p className='highlight'>
                  La planta d’IDR, pionera a Europa en depuració biològica, utilitza tecnologia d'última generació per garantir l'eficiència i la qualitat del tractament de les aigües. 
                  </p>
                  <p>
                  Aquesta instal·lació reflecteix el compromís col·lectiu amb una indústria més neta, sostenible i preparada per als reptes mediambientals del present i del futur.
                  </p>
                  </div>
                  <div className="HalfText">
                  <p className='highlight'>
                  Gestionada per un equip de professionals especialitzats en el tractament d'aigües residuals industrials, assegura un control rigorós de qualitat en totes les fases del procés, complint amb tots els estàndards mediambientals vigents.
                  </p>
                  <p>
                  La planta també ofereix serveis de gestió de residus líquids no perillosos per a altres indústries, ajudant a reduir l'impacte ambiental de la indústria catalana.
                  </p>
                </div>
              </div>

             <div className="AppBtn Black">
               <Link href="/laplanta"><button>Veure la planta<Arrow_Icon /></button></Link>
             </div>
            </div>

            <div className="CenterImg">
              <video playsInline controls
              
              src="video/hero-video.mp4">
              </video>
            </div>

          </div>

        </div>
      </section>

          {/* QUI SOM */}

        <section className="DivSectionWrap DivLeft Dark" id="main-about">
          <div className="DivSection Left animation-up" data-animate="slide-up">

            <div className="SideTxt">
              <p className='tagline'>QUI SOM</p>
              <h3><span className="BrownGrad">Units per una indústria</span> de la pell sostenible
              </h3>              
              <p>
              Igualadina de Depuració i Recuperació (IDR) és una iniciativa col·laborativa entre els curtidors del barri del Rec d'Igualada, creada amb l’objectiu de tractar les aigües residuals del sector dels curtits i garantir un cicle d’aigua més net i respectuós amb el medi ambient.
              </p>
              <p>
              Gràcies a aquesta aliança, IDR s'ha convertit en una plataforma única a Catalunya, amb una missió clara: Impulsar una indústria de la pell més sostenible.
              </p>
              <div className="AppBtn Brown">
                <Link href="/empresa"><button>Saber més<Arrow_Icon /></button></Link>
              </div>
            </div>

            {/* <div className="SideImg"></div>  */}

            <div className="SideImg">

              {isTablet ? <Image alt="dashboard" src='/img/img-pells.jpg' width={800} height={800} />
              : (null )}

            </div>

          </div>
      </section>
      <section>
        <div className='Stripe Brown'></div>
      </section>

        {/* SOCIS  */}

        <section className="SectionWrap" id="main-socis">
        <div className="CenterSection">
          <div className="CenterContent">
            <div className="CenterHeading animation-up" data-animate="slide-up">
              <h3>Socis</h3>
              <div className="center-subtitle">
                <p>
                Els nostres socis fundadors inclouen destacades empreses del sector dels curtits, així com l’Ajuntament d’Igualada i representants de les indústries tèxtil i química, tots compromesos amb la sostenibilitat ambiental.
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

            <div className=" mt-7">
              <div className="ImgCarousel">
              <ImgCarousel set="socis" />
              </div>
            </div>

          </div>

        </div>
      </section>
      
        {/* RESIDUS */}

        <section className="DivSectionWrap DivLeft Dark" id="main-services">
          <div className="DivSection Left animation-up" data-animate="slide-up">

            <div className="SideTxt">
              <p className='tagline'>SERVEIS</p>
              <h3><span className="GreenGrad">Gestió de residus </span>
              líquids per una indústria més neta</h3>              
              <p>
              IDR és l'única planta depuradora autoritzada a Catalunya per tractar residus líquids industrials no perillosos.               
              </p>
              <p>
              Afegim valor a la indústria catalana oferint un servei especialitzat de depuració d’aigües per a empreses externes, amb tecnologia avançada i processos sostenibles.
              </p>
              <div className="AppBtn Green">
                <Link href="/serveis"><button>Més Informació<Arrow_Icon /></button></Link>
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

        <section className="SectionWrap" id="main-mission">
          <div className="CenterSection">
            <div>
              <div className="CenterHeading animation-up" data-animate="slide-up">
                <div>
                  <h3>La nostra missió</h3>
                  <p>
                  A IDR, ens esforcem per oferir solucions de depuració sostenibles, innovant constantment per explorar models d’economia circular i avançar cap a una indústria cada dia més eficient i responsable amb el medi ambient.
                  </p>
                </div>
              </div>
            </div>
      
            <div className="CardGroup three Mission">
            
              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardImg">
                <Image className="animation-up" data-animate="slide-up"  loading="eager" 
                alt="img" src='/img/mission-1.jpg' width={500} height={500}
                // sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
                 />           
               </div>
                <div className="CardTxt">
                  <h6>Qualitat de l’aigua</h6>
                  <p>
                  Apliquem processos avançats de tractament per garantir una aigua depurada de màxima qualitat, protegint l’entorn mitjançant una gestió eficient de l’aigua durant tot el procés de depuració.                  </p>
                </div>
              </div>      

              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardImg">
                <Image className="animation-up" data-animate="slide-up"  loading="eager" 
                alt="img" src='/img/mission-2.jpg' width={500} height={500}
                // sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
                 />           
                </div>
                <div className="CardTxt">
                  <h6>Sostenibilitat ambiental</h6>
                  <p>
                  Estem compromesos amb la reducció de l'impacte ecològic del sector dels curtits, depurant les aigües residuals del procés d’adobat mitjançant tractaments biològics per minimitzar-ne l'efecte ambiental.
                  </p>
                </div>
              </div>       

              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardImg">
                <Image className="animation-up" data-animate="slide-up"  loading="eager" 
                alt="img" src='/img/mission-3.jpg' width={500} height={500}
                // sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
                 />           
                </div>
                <div className="CardTxt">
                  <h6>Economia Circular</h6>
                  <p>
                  Fomentem la recerca d’alternatives per reintegrar l’aigua depurada en el procés productiu, contribuint així a un sistema més circular i optimitzant l'ús dels recursos hídrics.
                  </p>
                </div>
              </div>              
      
            </div>

          </div>
        </section>

      {/* INNOVATION */}

        <section className="DivSectionWrap DivLeft Dark" id="main-innovation">
          <div className="DivSection Left animation-up" data-animate="slide-up">

            <div className="SideTxt">
              <p className='tagline'>PROJECTES</p>
              <h3><span className="BlueGrad">Solucions innovadores </span>
              per a nous reptes ambientals</h3>              
              <p>
              Impulsem projectes I+D per optimitzar els processos existents i implementar tecnologies innovadores que permetin una depuració cada cop més completa i sostenible, avançant cap a un model d’economia circular i impacte zero.              
              </p>
              <div className="AppBtn Blue">
                <Link href="/innovacio"><button>Veure Projectes<Arrow_Icon /></button></Link>
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

      {/* POSTS */}

      <section className="NewsSectionWrap">
          <div className="NewsSection">
            <div className="NewsContent">
              <div className='NewsTitle'>
                <h3>Projectes Destacats</h3>
              </div>
              <RecentPosts allPosts={allPosts}/>
              </div>
          </div>
        </section>

      <Footer />

    </main>
  );
}


export const getStaticProps: GetStaticProps<IIndexProps> = async () => {
  const posts = getAllPosts(Config.post_fields);

  return {
    props: {
      allPosts: posts,
      initialPosts: posts.slice(0, BlogArchiveConfig.blog_pagination_size),
      categoryCollection: getCategoryCollection(['slug', 'tags']),    
    },
  };
};
