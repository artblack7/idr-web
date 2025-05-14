import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import MainHeader from "../components/navigation/Header";
import {Footer} from '../components/navigation/Footer';
import AnimationTrigger from '../components/AnimationTrigger';
import Arrow_Icon from '../components/SVG/Arrow_Icon';
import { Meta } from '../components/head/Meta';
import TechSlideshow from '../components/carousel/TechSlideshow';
import RecentPosts from '../components/blog/RecentPosts';
import { GetStaticProps } from 'next';
import { BlogArchiveConfig, Config } from '../utils/Config';
import { getAllPosts, getCategoryCollection, PostItems } from '../utils/Content';
import VideoTecnic from '../components/VideoTecnic';

type IIndexProps = {
  initialPosts: PostItems[];
  allPosts: PostItems[];
};

export default function Tech(props: IIndexProps) {
// export default function Tech() {
  const { allPosts, initialPosts } = props;

  return (
    <main className='Main'>
     {/* <AnimationTrigger /> */}
      <div>
        <MainHeader useWhite={false}
          meta={<Meta 
          title="La Planta" 
          metaTitle="La Planta │ Igualadina de Depuració i Recuperació." 
          metaImg="https://idr.com/thumb/thumb.png" 
          description="Pioners en depuració biològica per al tractament d’aigües." />} 
          />
      </div>

      <div className="HeroSectionWrap Dark" id="tech-hero">
          <div className="Overlay"></div>
        <div className="HeroSection">
          <div className="HeroContent Wide animation-up" data-animate="slide-up">
            <div className='HeroTitle'>
              <h6>LA PLANTA</h6>
              <h2>Pioners en depuració biològica per al tractament d’aigües</h2>
            </div>
          </div>
        </div>

      </div>

      {/* MAIN SECTION */}

    <section className="SectionWrap" id="tech-main">

      {/* RIGHT */}

      <div className="SideSection MiddleSpace">
        <div className="SideContent Right animation-up" data-animate="slide-up">
        
          <div className="SideImg">
            <div className='ImgWrap'>
              <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
              alt="IDR" src='/img/img-uf.jpg' 
              sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
              width={1200} height={400} />
            </div>
          </div>
          
          <div className="SideTxt">
            <p className='tagline'>La planta</p>
            <h3>Tecnologia avançada al servei de l’aigua</h3>
            <p className='highlight'>
            La nostra planta, pionera a Europa en depuració biològica, realitza el tractament de les aigües residuals del sector de la pell a Igualada. 
            </p>
            <p>
            Equipada amb tecnologia d’última generació i gestionada per Tradebe, companyia internacional líder en el tractament de residus industrials, assegura un procés eficient que compleix els estàndards mediambientals més exigents.
            </p>
            <p>
            Amb una supervisió constant i rigorosa, analitzem diàriament les aigües residuals, la qual cosa ens permet conèixer amb precisió la seva composició i aplicar millores immediates per reduir l’impacte ambiental en temps real.
            </p>
          </div>
        </div>

      </div>

      {/* LEFT */}

      <div className="SideSection">
        <div className="SideContent Left animation-up" data-animate="slide-up">
          <div className="SideTxt">
            <p className='tagline'>El nostre procés</p>
            <h3>Depuració biològica: Aigua, aire i vida en harmonia</h3>

            <p className='highlight'>
            El nostre procés de depuració imita els cicles de la naturalesa, utilitzant l’aigua, l’aire i la vida microbiana.            
            </p>
            <p>
            L’aigua residual es tracta amb oxigen per afavorir el creixement de bacteris específics, que descomponen la matèria orgànica i transformen els contaminants a través del cicle natural del nitrogen. En fases finals, els bacteris, sense necessitat d’oxigen, converteixen els nitrats en nitrogen gas, retornant l’aigua neta al medi amb un impacte mínim. 
            </p>
            <p>
            Aquest sistema és una solució altament sostenible que reprodueix el funcionament de la natura en cada etapa.
            </p>

        </div>

          <div className="SideImg">
          <div className='ImgWrap'>
              <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
              alt="IDR" src='/img/img-bio.jpg' 
              sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
              width={1200} height={400} />
            </div>
          </div>
        </div>
      </div>

      {/* NUMBERS */}

      <div className="CenterSection">
          <div className="CardGroup three Numbers Small">

          <div className="CardWrap animation-up" data-animate="slide-up">
            <div className="CardNumber">
              <h1 className='MainGrad'>12M €</h1>
            </div>
              <div className='CardLineWrap'>
                <div className="CardLine"></div>
              </div>
            <div>
              <h6 className='CardConcept blue-text'>Inversió inicial</h6>
            </div>
          </div>   

          <div className="CardWrap animation-up" data-animate="slide-up">
            <div className="CardNumber">
              <h1 className='MainGrad'>4,5M €</h1>
            </div>
              <div className='CardLineWrap'>
                <div className="CardLine"></div>
              </div>
            <div>
              <h6 className='CardConcept blue-text'>Cost anual d’explotació</h6>
            </div>
          </div>   

          <div className="CardWrap animation-up" data-animate="slide-up">
            <div className="CardNumber">
              <h1 className='MainGrad'>4000m&sup3;</h1>
            </div>
              <div className='CardLineWrap'>
                <div className="CardLine"></div>
              </div>
            <div>
              <h6 className='CardConcept blue-text'>Aigua depurada diàriament</h6>
            </div>
          </div>   
          </div>

        </div>

      </section>

      <section>
        {/* <div className='GradStripe'></div> */}
        <div className='Stripe Blue'></div>
      </section>


    {/* INSTALACIONS */}

    <section className="SectionWrap" id="tech-planta">
        <div className="CenterSection">
          <div className="CenterContent">
            <div className="CenterTxt animation-up" data-animate="slide-up">
            <p className='tagline'>Les instal·lacions</p>
              <h3>Un recorregut per les instal·lacions i el procés de depuració</h3>
              <div className="TextGroup">
                <div className="HalfText">
                  <p>
                  Cada dia, tècnics especialitzats de la depuradora recullen mostres d’aigua a les 26 empreses associades per a la seva anàlisi. Els resultats obtinguts permeten conèixer amb exactitud la composició de les aigües residuals de cada empresa, i aquestes, al seu torn, prenen les mesures adequades per minimitzar l’impacte ambiental.
                  </p>
                </div>
                <div className="HalfText">
                  <p>
                  Un cop a la planta de tractament, l’aigua passa per processos físics, químics i biològics per eliminar sòlids, matèria en suspensió, substàncies dissoltes com matèria orgànica i nitrogen, així com el color. Finalment, l’aigua tractada es retorna neta al medi ambient, complint amb els requisits ambientals establerts.                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="TechImg">
          <img alt="IDR" src='/svg/cat-planta.svg'  />
        </div>

      </section>

      <TechSlideshow/>

      <section className="SectionWrap" id="tech-video">
        <div className='VideoWrap'>
          <p className='tagline'>RECORREGUT AUDIOVISUAL</p>
          <h3>El procés de depuració de l'aigua</h3>
            {/* <video playsInline controls 
            src="video/cat-tecnic.mp4">
            </video> */}

            <div
                style={{
                  padding: '56.25% 0 0 0',
                  position: 'relative',
                }}
              >
                <iframe
                  src="https://player.vimeo.com/video/1082373467?h=123456789a&badge=0&autopause=0&player_id=0&app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  className='VideoIframe'
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  title="Igualadina de Depuració i Recuperació IDR"
                ></iframe>
            </div>

          
          </div>       
          <div>

        </div>
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
