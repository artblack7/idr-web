import React from 'react';
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
import Link from 'next/link';
import MainHeader from "../components/navigation/Header";
import {Footer} from '../components/navigation/Footer';
import AnimationTrigger from '../components/AnimationTrigger';
import Arrow_Icon from '../components/SVG/Arrow_Icon';
import { Meta } from '../components/head/Meta';

import RecentPosts from '../components/blog/RecentPosts';
import { GetStaticProps } from 'next';
import { BlogArchiveConfig, Config } from '../utils/Config';
import { getAllPosts, getCategoryCollection, PostItems } from '../utils/Content';
import BlogArchive from '../components/blog/BlogArchive';

type IIndexProps = {
  initialPosts: PostItems[];
  allPosts: PostItems[];
};

export default function Innovation(props: IIndexProps) {
  const { allPosts, initialPosts } = props;

  return (
    <main className='Main'>
      <AnimationTrigger />
      <div>
        <MainHeader useWhite={false}
          meta={<Meta 
          title="Innovació" 
          metaTitle="Innovació │ Igualadina de Depuració i Recuperació." 
          metaImg="https://idr.com/thumb/thumb.png" 
          description="Depuració Innovadora per un futur sostenible." />} 
          />
      </div>

      <div className="HeroSectionWrap Dark" id="innovation-hero">
          <div className="Overlay"></div>
        <div className="HeroSection">
          <div className="HeroContent animation-right" data-animate="slide-right">
            <div className='HeroTitle'>
              <h6>PROJECTES</h6>
              <h2>Investigació, innovació i desenvolupament</h2>
            </div>
          </div>
        </div>

      </div>

      {/* MAIN SECTION */}

      <section className="SectionWrap" id="innovation-main">

        {/* RIGHT */}

        <div className="SideSection MiddleSpace">
          <div className="SideContent Right animation-up" data-animate="slide-up">
          
            <div className="SideImg">
              <div className='ImgWrap'>
                <Image className="radius-4 nimation-up" data-animate="slide-up"  
                loading="eager" 
                alt="IDR" src='/img/img-catedra.jpg' 
                sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                width={1200} height={400} />
              </div>
            </div>
            
            <div className="SideTxt">
              <p className='tagline'>Projectes</p>
              <h3>Projectes I+D per a nous reptes ambientals</h3>
              <p className='highlight'>
              Amb la missió de liderar la transició cap a un cicle de l’aigua més net i sostenible, IDR està compromesa amb la recerca i desenvolupament de solucions innovadores en el tractament d’aigües. 
              </p>
              <p>
               Col·laborem amb empreses adoberes, centres d'innovació i altres entitats del sector per optimitzar el tractament d’aigües residuals i avançar en models d’economia circular de l’aigua que permetin la reutilització de recursos dins la indústria de la pell, reduïnt així el consum de recursos naturals. 
              </p>
            </div>
          </div>

        </div>

        {/* LEFT */}

        <div className="SideSection">
          <div className="SideContent Left animation-up" data-animate="slide-up">
            <div className="SideTxt">
              <p className='tagline'>INNOVACIÓ</p>
              <h3>Tecnologies per avançar cap a l’impacte zero</h3>
              <p className='highlight'>
                IDR està especialitzada en el tractament biològic d’aigües residuals industrials i compta amb una llarga trajectòria en la implementació de tecnologies avançades per a la depuració d’aigua. 
              </p>
              <p>
              A través de l’investigació en tecnologies avançades com la nanofiltració i l’osmosis inversa, busquem aconseguir una depuració cada vegada més completa i eficient, orientada cap a un model d’impacte ambiental mínim, i avançant cap a l’impacte zero.
              </p>
              <p>
              Aquests sistemes eliminen contaminants com sals, metalls pesants i compostos orgànics, millorant l’eficiència i reduint el consum d’energia i químics. Això permet una gestió més sostenible de l’aigua, alineada amb els objectius ambientals globals.
              </p>

          </div>

            <div className="SideImg">
              <div className='ImgWrap'>
                <Image className="radius-4 nimation-up" data-animate="slide-up"  
                // loading="eager" 
                alt="IDR" src='/img/img-barometre.jpg' 
                sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                width={1200} height={400} />
              </div>
            </div>
          </div>
        </div>

        {/* NUMBERS */}

        <div className="CenterSection">
          <div className="CardGroup three Numbers">

            <div className="CardWrap animation-up" data-animate="slide-up">
              <div className="CardNumber">
                <h1 className='MainGrad'>+12</h1>
              </div>
                <div className='CardLineWrap'>
                  <div className="CardLine"></div>
                </div>
              <div>
                <h6 className='CardConcept blue-text'>Projectes</h6>
              </div>
            </div>

            <div className="CardWrap animation-up" data-animate="slide-up">
              <div className="CardNumber">
                <h1 className='MainGrad'>+7</h1>
              </div>
                <div className='CardLineWrap'>
                  <div className="CardLine"></div>
                </div>
              <div>
                <h6 className='CardConcept blue-text'>Entitats col·laboradores</h6>
              </div>
            </div>

            <div className="CardWrap animation-up" data-animate="slide-up">
              <div className="CardNumber">
                <h1 className='MainGrad'>+16</h1>
              </div>
                <div className='CardLineWrap'>
                  <div className="CardLine"></div>
                </div>
              <div>
                <h6 className='CardConcept blue-text'>Investigadors dedicats a I+D</h6>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="SectionWrap Dark" id="innovation-quote">
        <div className="CenterSection">
            <div className="QuoteContent">
              <h4>
              IDR, pionera en depuració biològica, impulsa la sostenibilitat i la innovació contínua en el tractament d'aigües per a la indústria de la pell.
              </h4>
            </div>
        </div>
      </section>
      
      <section className="SectionWrap" id="testbed">

        {/* RIGHT */}

        <div className="SideSection">
          <div className="SideContent Right animation-up" data-animate="slide-up">
          
            <div className="SideImg">
              <div className='ImgWrap'>
                <Image className="radius-4 nimation-up" data-animate="slide-up"  
                // loading="eager" 
                alt="IDR" src='/img/img-testbed.jpg' 
                sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                width={1200} height={400} />
              </div>
            </div>
            
            <div className="SideTxt">
              <p className='tagline'>FILTRACIÓ AMB MEMBRANES</p>
              <h3>IDR Test Bed</h3>
              <p className='highlight'>
                 IDR Test bed és una planta d’assaig oberta a empreses per provar, desenvolupar i optimitzar tecnologies avançades de tractament d’aigües residuals mitjançant sistemes de filtració amb membranes.
              </p>
              <p>
              Amb la voluntat de compartir coneixement i facilitar la innovació en el sector, IDR posa a disposició d’altres empreses la seva planta d’assaig per al tractament terciari avançat.              
              </p>
              <div className="AppBtn">
              <Link href="/post/testbed"><button>Saber més<Arrow_Icon /></button></Link>
              </div>
            </div>
          </div>
        </div>

      </section>

      <div className='GradStripe'></div>

      {/* PROJECTES */}
      
      <section className="SectionWrap" id="main-mission">
        <div className="CenterSection animation-up" data-animate="slide-up">
          <div>
            <div>
              <div>
                <h2>Projectes destacats</h2>
              </div>
            </div>
          </div>

          <BlogArchive allPosts={allPosts} initialPosts={[]}/>

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
