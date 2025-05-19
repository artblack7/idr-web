import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import ImgCarousel from "../carousel/ImgCarousel";

const Flickity = require('react-flickity-component');
const flickityOptions = {
    initialIndex: 0,
    wrapAround: true,
    prevNextButtons: true,
    autoPlay: 0
}

const TechSlideshow: React.FC = () => {

    return (
        <>

        <section className="BlogSectionWrap">
          <div className="BlogSection">
           <div className=" animation-up" data-animate="slide-up">
             <div>
                <Flickity
                    className={'blog-carousel'}
                    elementType={'div'}
                    options={flickityOptions}
                    disableImagesLoaded={false}
                    reloadOnUpdate
                    static
                  >

                  <div  className="BlogSlideWrap">
                    <div className="BlogSlideInner">
                      <div className="SideImg">
                        <div className='ImgWrapSlide'>
                          <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                          alt="IDR" src='/img/proces-01.jpg' 
                          sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                          width={1200} height={400} />
                        </div>
                      </div>
                      <div className="SideTxt">
                        <p>ANÀLISIS DE L’AIGUA</p>
                        <h4>Anàlisis de les aigües de les adoberies</h4>
                          <p>
                          Cada dia, tècnics especialitzats de la depuradora recullen mostres d’aigua a les 26 empreses empreses adoberes associades, per a la seva anàlisi. 
                          </p>
                          <p>
                          Les mostres d’aigua es processen en un laboratori especialitzat situat a l’A3 Innovation Center de la Universitat de Lleida, al Campus d’Igualada. 
                          </p>
                          <p>
                          Els resultats obtinguts permeten determinar amb precisió la composició de les aigües residuals procedents de cada empresa. Això possibilita ajustar els processos de la depuradora als canvis en la composició de les aigües de les adoberies i notificar en temps real qualsevol anomalia que requereixi correcció.
                          </p>
                      </div>
                    </div>
                  </div>
                 
                  <div  className="BlogSlideWrap">
                    <div className="BlogSlideInner">
                    <div className="SideImg">
                        <div className='ImgWrapSlide'>
                          <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                          alt="IDR" src='/img/proces-02.jpg' 
                          sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                          width={1200} height={400} />
                        </div>
                      </div>
                      <div className="SideTxt">
                        <p>PRETRACTAMENT</p>
                        <h4>Desbast o garbellament</h4>
                          <p>
                          L’aigua arriba als pous d’entrada de la depuradora a través dels col·lectors: un per al col·lector industrial i un per al municipal. Aquestes línies d’aigua es mantenen separades fins que arriben al primer reactor biològic. En aquests pous, s’eliminen els sòlids gruixuts mitjançant una cullera bivalva i reixes de filtratge.
                          </p>
                          <p>
                          Després de l’extracció dels sòlids gruixuts, el pou de bombament bombeja l’aigua cap a la següent fase, on es retiren els sòlids fins mitjançant dos tamisos d’escala. Finalment, al desgreixador i dessorrador, els greixos es retiren per flotació i les sorres per decantació. 
                          </p>
                          <p>
                          Cada tipus de residu retirat en aquesta fase es diposita en banyeres separades per gestionar-los posteriorment.
                          </p>
                      </div>
                    </div>
                  </div>

                  <div  className="BlogSlideWrap">
                    <div className="BlogSlideInner">
                    <div className="SideImg">
                        <div className='ImgWrapSlide'>
                          <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                          alt="IDR" src='/img/proces-03.jpg' 
                          sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                          width={1200} height={400} />
                        </div>
                      </div>
                      <div className="SideTxt">
                        <p>TRACTAMENT QUÍMIC</p>
                        <h4>Correcció de pH i dessulfuració</h4>
                          <p>
                          L’aigua de la línia industrial passa pel corrector de pH, per adequar-lo a les següents fases del procés. Una part de l’aigua industrial es dirigeix directament al primer reactor biològic. Mentre que l’altre es tracta als tancs de dessulfuració, on els sulfurs es transformen en sulfats mitjançant l'addició d’oxigen líquid. Un cop dessulfurada, l’aigua es dirigeix cap al primer reactor biològic.
                          </p>
                          <p>
                          A més del tractament de l’aigua, la planta disposa de sistemes de desodorització, com els  scrubbers químics. L’aire que s’aspira dels pous de bombament, les basses de dessulfuració i els tancs d’emmagatzematge selectiu es tracta químicament per garantir que no alliberi contaminants perjudicials per a l’atmosfera.
                          </p>
                      </div>
                    </div>
                  </div>

                  <div  className="BlogSlideWrap">
                    <div className="BlogSlideInner">
                     <div className="SideImg">
                        <div className='ImgWrapSlide'>
                          <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                          alt="IDR" src='/img/proces-04.jpg' 
                          sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                          width={1200} height={400} />
                        </div>
                      </div>
                      <div className="SideTxt">
                        <p>TRACTAMENT BIOLÒGIC</p>
                        <h4>Reactor biològic I</h4>
                          <p>
                          Al reactor biològic I hi arriba l’aigua industrial i municipal un cop ha estat pretractada físicament i químicament. Aquest tanc està airejat mitjançant difusors i s’hi desenvolupen els bacteris necessaris per a la degradació de la matèria orgànica.
                          </p>
                          <p>
                          L’aigua del reactor biològic travessa dos decantadors secundaris, on el fang sedimenta per gravetat. L’aigua clarificada passa a un tanc d’alimentació per al reactor biològic II i els fangs es recullen en una arqueta per ser enviats cap al tractament de fangs o bé es recirculen per mantenir un volum de fang adient al reactor.
                          </p>
                      </div>
                    </div>
                  </div>

                  <div  className="BlogSlideWrap">
                    <div className="BlogSlideInner">
                      <div className="SideImg">
                        <div className='ImgWrapSlide'>
                          <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                          alt="IDR" src='/img/proces-05.jpg' 
                          sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                          width={1200} height={400} />
                        </div>
                      </div>

                      <div className="SideTxt">
                        <p>TRACTAMENT BIOLÒGIC</p>
                        <h4>Reactor biològic II</h4>
                          <p>
                          La planta compta amb quatre tancs SBR (Sequential Batch Reactor) configurables per a realitzar tant la reacció de nitrificació com la de desnitrificació. Generalment, es fan servir dos reactors per a cadascuna de les reaccions. Aquests reactors tenen la peculiaritat de poder dur a terme en un mateix tanc totes les fases d’un tractament biològic: alimentació, reacció, decantació, descàrrega i purga de fangs.
                          </p>
                          <p>
                          L’aigua passa als reactors nitrificants, on, mitjançant aeració, bacteris especialitzats transformen l’amoni a nitrats. L’aigua clarificada resultant va cap al reactor biològic III.
                          </p>
                      </div>
                    </div>
                  </div>

                  <div  className="BlogSlideWrap">
                    <div className="BlogSlideInner">
                      <div className="SideImg">
                        <div className='ImgWrapSlide'>
                          <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                          alt="IDR" src='/img/proces-06.jpg' 
                          sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                          width={1200} height={400} />
                        </div>
                      </div>
                      <div className="SideTxt">
                        <p>TRACTAMENT BIOLÒGIC</p>
                        <h4>Reactor biològic III</h4>
                          <p>
                          Als reactors desnitirifcants els bacteris transformen els nitrats a nitrogen gas, que s’allibera a l’atmosfera, mitjançant l’addició de matèria orgànica nova (aigua dessulfurada) i en absència d’aire. Al mateix temps es du a terme un tractament terciari de reducció del color mitjançant un coagulant.
                          </p>
                          <p>
                          Els fangs de tots els reactors biològics es recullen en una arqueta de fangs biològics, des d’on es bombegen cap al tractament de fangs.
                          </p>
                          <p>
                          Finalment, l’aigua clarificada resultant arriba a l’arqueta de sortida i s’aboca al col·lector municipal, que posteriorment arriba a la depuradora municipal de Vilanova del Camí.
                          </p>
                      </div>
                    </div>
                  </div>

                  <div  className="BlogSlideWrap">
                    <div className="BlogSlideInner">
                      <div className="SideImg">
                        <div className='ImgWrapSlide'>
                          <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                          alt="IDR" src='/img/proces-07.jpg' 
                          sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                          width={1200} height={400} />
                        </div>
                      </div>
                      <div className="SideTxt">
                        <p>TRACTAMENT TERCIARI</p>
                        <h4>DAF (Dissolved Air Flotation)</h4>
                          <p>
                          El tractament terciari està actualment en construcció i s'espera que l'operativa comenci a mitjans o finals del 2025. L’aigua provinent del reactor biològic III serà tractada amb un sistema de flotació per millorar-ne la qualitat i posteriorment serà abocada al col·lector municipal.
                          </p>
                      </div>
                    </div>
                  </div>

                  <div  className="BlogSlideWrap">
                    <div className="BlogSlideInner">
                      <div className="SideImg">
                        <div className='ImgWrapSlide'>
                          <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                          alt="IDR" src='/img/proces-08.jpg' 
                          sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                          width={1200} height={400} />
                        </div>
                      </div>
                      <div className="SideTxt">
                        <p>TRACTAMENT DE FANGS</p>
                        <h4>Estabilització i deshidratació dels fangs</h4>
                          <p>
                          Es duu a terme l’estabilització del fang afegint lletada de calç, a l’arqueta de fangs. Un cop estabilitzats, entren a les centrífugues per ser deshidratats. A la centrífuga també s’hi afegeix un polielectròlit per tal de flocular el fang i extreure’n el màxim d’aigua possible. L’aigua clarificada que en surt es retorna al reactor biològic I. 
                          </p>
                          <p>
                          Mitjançant un cargol d’Arquimedes, els fangs deshidratats són transportats fins a les sitges d’emmagatzematge, des d’on seran enviats a la Planta de Compostatge de Jorba per a la seva bioestabilització.                          
                          </p>
                          <p>
                          També es disposa de sistemes de desodorització, en aquest cas scrubbers biològics. L’aire aspirat de la sala de tractament de fangs es tracta biològicament per garantir que no alliberi contaminants nocius a l’atmosfera.
                          </p>
                      </div>
                    </div>
                  </div>

                  <div  className="BlogSlideWrap">
                    <div className="BlogSlideInner">
                      <div className="SideImg">
                        <div className='ImgWrapSlide'>
                          <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                          alt="IDR" src='/img/proces-09.jpg' 
                          sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                          width={1200} height={400} />
                        </div>
                      </div>
                      <div className="SideTxt">
                        <p>TRACTAMENT DE FANGS</p>
                        <h4>Bioestabilització de fangs</h4>
                          <p>
                          La bioestabilització dels fangs es duu a terme a la Planta de Compostatge de Jorba. El fang que arriba a la planta es descarrega i seguidament es barreja amb fusta triturada, per facilitar-ne la bioestabilització. Aquesta mescla inicial es diposita cap a l’espai de descomposició, anomenat meseta, on comença el procés de descomposició del material.                          
                          </p>
                          <p>
                          Posteriorment, es duu a terme la maniobra de volteig, fins a finalitzar el volteig de tota la meseta, airejant així el material per afavorir-ne la descomposició. Quan la temperatura assoleix als 70 ºC, es produeix la higienització.                          
                          </p>
                          <p>
                          Finalment, en la fase de maniobra i garbellament, el compost gris es separa de la fusta mitjançant una garbelladora (Trommel). La fusta es recircula al sistema, mentre que el compost gris es gestiona adequadament.
                          </p>
                      </div>
                    </div>
                  </div>

                  <div  className="BlogSlideWrap">
                    <div className="BlogSlideInner">
                      <div className="SideImg">
                        <div className='ImgWrapSlide'>
                          <Image className="radius-4 nimation-up" data-animate="slide-up"  loading="eager" 
                          alt="IDR" src='/img/proces-10.jpg' 
                          sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
                          width={1200} height={400} />
                        </div>
                      </div>
                      <div className="SideTxt">
                        <p>CONTROL DE QUALITAT I MANTENIMENT</p>
                        <h4>Instal·lacions de gestió i manteniment</h4>
                          <p>
                          Les instal·lacions compten amb un laboratori on es duen a terme els controls analítics diaris per garantir l’eficiència de la depuradora, així com l’anàlisi dels residus líquids que arriben a la planta. Des de les oficines es gestiona i dirigeix la depuradora, coordinant-ne el funcionament i el control general.
                          
                          </p>
                          <p>
                          La planta disposa de dues sales amb bufadors per proveir d’aire els reactors i tancs que ho necessiten. També hi ha nebulitzadors distribuïts per tota la planta en punts estratègics per evitar la dispersió d’olors desagradables a les àrees més properes a la depuradora.
                          
                          </p>
                          <p>
                          A més, compta amb 3 tancs dedicats a l’emmagatzematge selectiu transitori de residus líquids, permetent-ne la introducció i el tractament diferencial segons les seves característiques.
                          
                          </p>
                      </div>
                    </div>
                  </div>

                


                </Flickity>
              </div>
            </div>
          </div>
        </section>


        </>
    );
};


export default TechSlideshow;