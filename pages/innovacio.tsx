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
     {/* <AnimationTrigger /> */}
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
          <div className="HeroContent animation-up" data-animate="slide-up">
            <div className='HeroTitle'>
              <h6>PROJECTES</h6>
              {/* <h2>Depuració innovadora per un futur sostenible</h2> */}
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

        <div className="SideSection">
          <div className="SideContent Left animation-up" data-animate="slide-up">
            <div className="SideTxt">
              <p className='tagline'></p>
              <h3>Tecnologies per avançar cap a l’impacte zero</h3>
              <p>
              A través de l’investigació en tecnologies avançades com la nanofiltració i l’osmosis inversa, busquem aconseguir una depuració cada vegada més completa i eficient, orientada cap a un model d’impacte ambiental mínim, i avançant cap a l’impacte zero.
              </p>
              <p>
              Aquests sistemes eliminen contaminants com sals, metalls pesants i compostos orgànics, millorant l’eficiència i reduint el consum d’energia i químics. Això permet una gestió més sostenible de l’aigua, alineada amb els objectius ambientals globals.
              </p>

            {/* <div className="AppBtn">
              <Link href="/empresa"><button>Saber més<Arrow_Icon /></button></Link>
            </div> */}

          </div>

            <div className="SideImg">
              <div className='ImgWrap'>
                <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                alt="IDR" src='/img/img-barometre.jpg' 
                // sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
                width={500} height={500} />
              </div>
            </div>
          </div>
        </div>

        {/* GUIA MIDA IMATGES 

            <Image className="index-1 animation-up" data-animate="slide-up"  loading="eager" 
            alt="IDR" src='/img/brand-logo.png' 
            sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
            width={500} height={500} />

          */}

        {/* NUMBERS */}

        <div className="CenterSection">
            <div className="CardGroup three Numbers">
            
              {/* <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="Card">
                  <h1 className='MainGrad'>+10</h1>
                  <div className="CardLine"></div>
                  <h6 className='blue-text'>Projectes</h6>
                </div>
              </div>      

              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="Card">
                  <h1 className='MainGrad'>+7</h1>
                  <div className="CardLine"></div>
                  <h6 className='blue-text'>Entitats col·laboradores</h6>
                </div>
              </div>        

              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="Card">
                  <h1 className='MainGrad'>+14</h1>
                  <div className="CardLine"></div>
                  <h6 className='blue-text'>Investigadors dedicats a I+D</h6>
                </div>
              </div>   */}

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
            <div className="QuoteContent animation-up" data-animate="slide-up">
              <h4>
              IDR, pionera en depuració biològica, impulsa la sostenibilitat i la innovació contínua en el tractament d'aigües per a la indústria de la pell.
              </h4>
            </div>

        </div>
        
      </section>

          {/* COLLAB */}
      
            <section className="SectionWrap" id="main-mission">
              <div className="CenterSection">
                <div>
                  <div className="animation-up" data-animate="slide-up">
                    <div>
                      <h2>Projectes destacats</h2>
                      {/* <p>
                      A IDR formem part d'una xarxa de col·laboració amb universitats, associacions, ajuntaments i empreses especialitzades, amb les quals treballem conjuntament per impulsar projectes d'I+D i garantir la sostenibilitat en la indústria de la pell.
                      </p> */}
                    </div>
                  </div>
                </div>

                <BlogArchive allPosts={allPosts} initialPosts={[]}/>

      
                {/* <div className="CardGroup Collab">
      
                  <Link href="/">
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
                  </Link>
                
                </div> */}

              </div>
            </section>
  

      {/* POSTS */}

      {/* <section className="NewsSectionWrap">
          <div className="NewsSection">
            <div className="NewsContent">
              <div className='NewsTitle'>
                <h4>Projectes Destacats Recents</h4>
              </div>
              <RecentPosts allPosts={allPosts}/>
              </div>
          </div>
        </section> */}


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
