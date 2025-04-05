import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import MainHeader from "../components/navigation/Header";
import {Footer} from '../components/navigation/Footer';
import AnimationTrigger from '../components/AnimationTrigger';
import Arrow_Icon from '../components/SVG/Arrow_Icon';
import { Meta } from '../components/head/Meta';


export default function Sostenibilitat() {

  return (
    <main className='Main'>
     {/* <AnimationTrigger /> */}
      <div>
        <MainHeader useWhite={false}
          meta={<Meta 
          title="Sostenibilitat" 
          metaTitle="Sostenibilitat │ Igualadina de Depuració i Recuperació." 
          metaImg="https://idr.com/thumb/thumb.png" 
          description="Depuració Innovadora per un futur sostenible." />} 
          />
      </div>

      <div className="HeroSectionWrap Dark" id="eco-hero">
          <div className="Overlay"></div>
        <div className="HeroSection">
          <div className="HeroContent animation-up" data-animate="slide-up">
            <div className='HeroTitle'>
              <h6>SOSTENIBILITAT</h6>
              <h2>Compromís amb el medi ambient i les persones</h2>
            </div>
          </div>
        </div>

      </div>

      {/* MAIN SECTION */}

      <section className="SectionWrap" id="eco-main">

        {/* RIGHT */}

        <div className="SideSection MiddleSpace">
          <div className="SideContent Right animation-up" data-animate="slide-up">
          
            <div className="SideImg">
              <div className='ImgWrap'>
                <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                alt="IDR" src='/img/img-drop.jpg' 
                // sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
                width={500} height={500} />
              </div>
            </div>
            
            <div className="SideTxt">
              <p className='tagline'>LA NOSTRA MISSIÓ</p>
              <h3>El camí cap a una indústria d’impacte zero</h3>
              <p className='highlight'>
              IDR, com a part fonamental del Leather Cluster Barcelona, ha liderat la transformació del sector de la pell cap a una indústria més sostenible.              
              </p>
              <p>
              La planta de tractament d’aigües d’Igualada, que actualment depura les aigües residuals de 26 empreses, és un model pioner a Europa pel seu sistema biològic avançat, capaç de reduir significativament tant el consum d’aigua com la càrrega contaminant associada al procés de producció de la pell.
              </p>
            </div>
          </div>

        </div>

        {/* LEFT */}

        <div className="SideSection">
          <div className="SideContent Left animation-up" data-animate="slide-up">
            <div className="SideTxt">
              <p className='tagline'>L’IMPACTE EN DADES</p>
              <h3>Els nostres resultats des de l’inici fins l’actualitat</h3>
              <p className='highlight'>
              Gràcies a aquesta aliança, el consum d’aigua per unitat produïda s’ha reduït en un 50% i la càrrega contaminant en un altre 50% durant els últims 20 anys.              
              </p>
              <p>
              Aquest model de col·laboració ha fet possible que les empreses del clúster siguin més ecològiques i competitives, establint un estàndard d’excel·lència en la indústria adobera. 
              </p>
              <p>
              Mirant cap al futur, seguim innovant i explorant models d’economia circular per avançar cap a una indústria cada cop més eficient i respectuosa amb el medi ambient.
              </p>

            <div className="AppBtn">
              <Link href="/empresa"><button>Saber més<Arrow_Icon /></button></Link>
            </div>

          </div>

            <div className="SideImg">
              <div className='ImgWrap'>
                <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                alt="IDR" src='/img/img-riu.jpg' 
                // sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
                width={500} height={500} />
              </div>
            </div>
          </div>
        </div>

        {/* NUMBERS */}

        <div className="CenterSection">
            <div className="CardGroup three Numbers">
            
              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardNumber">
                  <h1 className='MainGrad'>50%</h1>
                </div>
                <div className='CardLineWrap'>
                    <div className="CardLine"></div>
                  </div>
                <div>
                  <h6 className='CardConcept blue-text'>Reducció d’aigua per unitat produïda durant els últims 20 anys</h6>
                </div>
              </div>    

              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardNumber">
                  <h1 className='MainGrad'>50%</h1>
                </div>
                <div className='CardLineWrap'>
                    <div className="CardLine"></div>
                  </div>
                <div className='CardConcept'>
                  <h6 className='blue-text'>
                  Reducció de càrrega contaminant durant els últims 20 anys
                  </h6>
                </div>
              </div>   

              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardNumber">
                  <h1 className='MainGrad'>26</h1>
                </div>
                  <div className='CardLineWrap'>
                    <div className="CardLine"></div>
                  </div>
                <div>
                  <h6 className='CardConcept blue-text'>Empreses que depuren les seves aigües a IDR</h6>
                </div>
              </div>     
             
            </div>

          </div>

      </section>


    {/* QUOTE */}

      <section className="SectionWrap Dark" id="eco-quote">
        <div className="CenterSection">
            <div className="QuoteContent animation-up" data-animate="slide-up">
              <h4>
              IDR facilita que les aigües residuals de les empreses del sector de la pell es sumin al compromís de la sostenibilitat, impulsant una indústria més respectuosa amb el medi ambient.
              </h4>
            </div>

        </div>
      </section>


   {/* CICLE VIDA */}

    <section className="SectionWrap" id="eco-cicle">
        <div className="CenterSection">
          <div className="CenterContent">
            <div className="CenterHeading animation-up" data-animate="slide-up">
            <p className='tagline'>SOSTENIBILITAT EN EL SECTOR</p>
              <h3>El cicle de vida sostenible dels curtits</h3>
            </div>

            <div className="Content animation-up" data-animate="slide-up">
              <div className="SideImg">
                <div className='SquareImgWrap'>
                  <Image className="radius-3 animation-up" data-animate="slide-up"  loading="eager" 
                  alt="IDR" src='/img/cicle-1.jpg' 
                  // sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
                  width={500} height={500} />
                </div>
              </div>
              
              <div className="SideTxt">
                <h5>Compromís amb l’economia circular</h5>
                <p>
                A IDR, apostem per l’economia circular com a base d’un desenvolupament sostenible. Els adobers recuperen la pell, un subproducte del consum de carn, font principal de proteïna per a més del 90% de la població mundial, i la reciclen per evitar que es converteixi en residu. Així, la revaloritzen en productes elegants, nobles i útils per a la societat, contribuint a la sostenibilitat gràcies a la seva durabilitat.
                </p>
              </div>
            </div>

            <div className="Content animation-up" data-animate="slide-up">
              <div className="SideImg">
               <div className='SquareImgWrap'>
                  <Image className="radius-3 animation-up" data-animate="slide-up"  loading="eager" 
                  alt="IDR" src='/img/cicle-2.jpg' 
                  // sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
                  width={500} height={500} />
                </div>
              </div>
              
              <div className="SideTxt">
                <h5>Valorització de subproductes</h5>
                <p>
                Des de fa segles, els adobers han recuperat aquest subproducte de la indústria alimentària i el reciclen per transformar-lo en béns de consum sostenible d’alt valor afegit. Aquesta pràctica no només redueix residus, sinó que també promou l’ús responsable dels recursos.                </p>
              </div>
            </div>

            <div className="Content animation-up" data-animate="slide-up">
              <div className="SideImg">
                <div className='SquareImgWrap'>
                  <Image className="radius-3 animation-up" data-animate="slide-up"  loading="eager" 
                  alt="IDR" src='/img/cicle-3.jpg' 
                  // sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
                  width={500} height={500} />
                </div>
              </div>
              
              <div className="SideTxt">
                <h5>Camí cap al residu zero</h5>
                <p>
                Els adobers catalans, agrupats a Leather Cluster Barcelona, mantenen el seu compromís amb el model de residu zero. El clúster impulsa diversos projectes per optimitzar la valorització dels subproductes i residus generats durant tot el procés de producció dins de la cadena de valor de la indústria de la pell.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className='Stripe Green'></div>
      </section>

    {/* COMPROMIS SOSTENIBLE */}

    <section className="ZeroSectionWrap" id="eco-compromis">
          <div className="ZeroSection">
            <div>
              <div className="CenterHeading animation-up" data-animate="slide-up">
                <div>
                <p className='tagline'>SOSTENIBILITAT A LA PLANTA</p>
                  <h2>El compromís sostenible de la depuradora</h2>
                  <p>
                  A IDR, el nostre compromís amb la sostenibilitat es reflecteix no només en la nostra tecnologia de depuració, sinó també en les pràctiques internes que adoptem per minimitzar el nostre impacte ambiental i garantir un entorn de treball segur i responsable.
                  </p>
                </div>
              </div>
            </div>
      
            <div className="CardGroup four Squares">
            
              <div className="CardWrap Card1 animation-up" data-animate="slide-up">
                <div className="CardImg">
                  <Image className="animation-up" data-animate="slide-up" loading="eager" 
                  alt="img" src='/icons/check-circle.png' width={100} height={100} />           
                </div>
                <div className="CardTxt">
                  <h6>Energies renovables</h6>
                  <p>
                  El 100% de l'energia que consumim prové de fonts renovables, i comptem amb un sistema de plaques solars pròpies per augmentar la nostra eficiència energètica.
                  </p>
                </div> 
              </div>   

              <div className="CardWrap Card2 animation-up" data-animate="slide-up">
                <div className="CardImg">
                <Image className="animation-up" data-animate="slide-up" loading="eager" 
                alt="img" src='/icons/check-circle.png' width={100} height={100} />           
               </div>
                <div className="CardTxt">
                  <h6>Reducció de l'ús d'agents químics</h6>
                  <p>
                  El nostre procés de depuració biològica optimitza la utilització de microorganismes per substituir els agents químics, amb l'objectiu de minimitzar l'impacte ambiental i afavorir solucions més sostenibles i ecològiques.                  </p>
                </div>
              </div>  

              <div className="CardWrap Card3 animation-up" data-animate="slide-up">
                <div className="CardImg">
                <Image className="animation-up" data-animate="slide-up" loading="eager" 
                alt="img" src='/icons/check-circle.png' width={100} height={100} />           
               </div>
                <div className="CardTxt">
                  <h6>Auditories mediambientals</h6>
                  <p>
                  Realitzem auditories mediambientals regulars i mantenim certificacions per assegurar que les nostres pràctiques compleixen els estàndards més alts de sostenibilitat i responsabilitat ambiental.                  </p>
                </div>
              </div>  

             <div className="CardWrap Card4 animation-up" data-animate="slide-up">
                <div className="CardImg">
                <Image className="animation-up" data-animate="slide-up" loading="eager" 
                alt="img" src='/icons/check-circle.png' width={100} height={100} />           
               </div>
                <div className="CardTxt">
                  <h6>Seguretat i prevenció de riscos laborals</h6>
                  <p>
                  Ens prenem molt seriosament la seguretat dels nostres treballadors, amb protocols estrictes per garantir un entorn laboral segur i complir amb totes les normatives de salut i seguretat.                  
                  </p>
                </div>
              </div>        
            </div>

          </div>
        </section>

    {/* CERTIFICATS*/}

    <section className="SectionWrap" id="eco-cert">
        <div className="CenterSection">
          <div className="CenterContent">
            <div className="CenterTxt animation-up" data-animate="slide-up">
              <h3>Certificacions i Auditories Mediambientals</h3>
                <div className=''>
                 <div className="">
                    <p className='highlight'>
                    A IDR, en col·laboració amb Tradebe, gestionem la depuradora seguint els més alts estàndards mediambientals, amb una clara vocació per la sostenibilitat.                   
                    </p>
                  </div>
                  <div className="">
                  <p>
                    Les nostres auditories i certificacions demostren la nostra dedicació a garantir les millors pràctiques en sostenibilitat, innovació i seguretat en tots els nostres serveis:                
                    </p>
                </div>
                </div>
            </div>

            {/* cards */}
            
            <div className="CardGroup Cert">
            
            <div>
              <div className="CardWrap">
                <div className="CardTopCert">
                  <div className="CardImg">
                    <Image className="animation-up" data-animate="slide-up" loading="eager" 
                    alt="img" src='/logos/enac1.png' width={250} height={200} />           
                  </div>
                </div>
                <div className="CardBottomCert">
                  <div className="CardTxt">
                    <h6>ISO 9001:2015: Qualitat en el Tractament d'aigües residuals i residus líquids no perillosos
                    </h6>
                    <ul>
                      <li>
                      Eficiència i seguretat en els processos de tractament.
                      </li>
                      <li>
                      Compliment normatiu ambiental i de seguretat.
                      </li>
                      <li>
                      Satisfacció del client a través de serveis de qualitat.
                      </li>
                      <li>
                      Millora contínua i adaptació constant.
                      </li>
                    </ul>
                    {/* <div className="SmallBtnWrap">
                      <Link href="/"><button className='SmallBtn'>Descarregar PDF</button></Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="CardWrap">
                <div className="CardTopCert">
                <div className="CardImg">
                  <Image className="animation-up" data-animate="slide-up" loading="eager" 
                  alt="img" src='/logos/enac1.png' width={250} height={200} />           
                </div>
                </div>
                <div className="CardBottomCert">
                  <div className="CardTxt">
                    <h6>
                    ISO 14001:2015: Gestió ambiental en el Tractament d'aigües residuals i residus líquids no perillosos
                    </h6>
                    <ul>
                      <li>
                      Minimització de l'impacte ambiental en els processos de tractament.
                      </li>
                      <li>
                      Compliment normatiu ambiental i regulador.
                      </li>
                      <li>
                      Gestió proactiva dels recursos naturals i residus.
                      </li>
                      <li>
                      Millora contínua en l'eficiència ambiental.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="CardWrap">
                <div className="CardTopCert">
                <div className="CardImg">
                  <Image className="animation-up" data-animate="slide-up" loading="eager" 
                  alt="img" src='/logos/enac1.png' width={250} height={200} />           
                </div>
                </div>
                <div className="CardBottomCert">
                  <div className="CardTxt">
                    <h6>
                    ISO 45001:2018: Seguretat i salut laboral en el Tractament d'aigües residuals i residus líquids no perillosos
                    </h6>
                    <ul>
                      <li>
                      Condicions de treball segures i saludables per als nostres empleats.
                      </li>
                      <li>
                      Compliment normatiu en matèria de seguretat i salut laboral.
                      </li>
                      <li>
                      Prevenció de riscos laborals mitjançant una gestió proactiva.
                      </li>
                      <li>
                      Millora contínua en la seguretat de les operacions.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="CardWrap">
                <div className="CardTopCert">
                <div className="CardImg">
                  <Image className="animation-up" data-animate="slide-up" loading="eager" 
                  alt="img" src='/logos/endesa.png' width={250} height={200} />           
                </div>
                </div>
                <div className="CardBottomCert">
                  <div className="CardTxt">
                    <h6>Certificat d'ús d'energia 100% sostenible
                    </h6>
                    <p>
                    A la nostra depuradora, estem compromesos amb la sostenibilitat i el respecte pel medi ambient. Així, tota la nostra energia prové de fonts 100% renovables. La CNMC acredita oficialment que utilitzem exclusivament energia neta, reflectint el nostre compromís amb la reducció de l'impacte ambiental.
                    </p>

                  </div>
                </div>
              </div>
            </div>
          
          </div>

          </div>

        </div>
      </section>

      <Footer />

    </main>
  );
}
