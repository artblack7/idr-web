import React, { useEffect, useState } from 'react';
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
import Link from 'next/link';
import MainHeader from "../components/navigation/Header";
import {Footer} from '../components/navigation/Footer';
import {Slideshow} from '../components/carousel/Slideshow';
import AnimationTrigger from '../components/AnimationTrigger';
import Arrow_Icon from '../components/SVG/Arrow_Icon';
import { Meta } from '../components/head/Meta';
import ImgCarousel from '../components/carousel/ImgCarousel';
import { Faq } from '../components/Faq';

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

      <div className="HeroSectionWrap Dark" id="Projectes">
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

      {/* RIGHT TEXT */}

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
          </div>

        </div>
      </section>


      {/* TEXT LEFT */}

      <section className="SectionWrap" id="Quisom">
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
      </section>


      {/* POSTS */}

      <section className="NewsSectionWrap">
          <div className="NewsSection">
            <div className="NewsContent">
              <div className='NewsTitle'>
                <h3>Projectes Recents</h3>
              </div>
              <RecentPosts allPosts={allPosts}/>
              </div>
          </div>
        </section>


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