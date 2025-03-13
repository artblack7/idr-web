import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import ImgCarousel from "../carousel/ImgCarousel";

const Flickity = require('react-flickity-component');
const flickityOptions = {
    initialIndex: 0,
    wrapAround: true,
    prevNextButtons: false,
    autoPlay: 4000
}

const Slideshow: React.FC = () => {

    return (
        <>
            
        <section className="SlideSectionWrap">
          <div className="SlideSection">
           <div className="SlideSectionContent animation-up" data-animate="slide-up">
             <div>
               <Flickity
                    className={'carousel'}
                    elementType={'div'}
                    options={flickityOptions}
                    disableImagesLoaded={false}
                    reloadOnUpdate
                    static
                  >
                 
                  <div className="SlideRowWrap ">
                    <div className="SideTxt">
                      <h1><span className="OrangeGrad">100+</span></h1>
                      <h4>Lorem Ipsum Dolor</h4>
                      <p>
                      Lorem Ipsum Dolor sit amet eliqua et ud nam sapere.                      
                      </p>

                       {/* <div className="ImgCarousel">
                         <ImgCarousel set="socis" />
                      </div> */}

                    </div>
                  </div>

                  <div className="SlideRowWrap ">
                    <div className="SideTxt">
                      <h1><span className="OrangeGrad">100+</span></h1>
                      <h4>Lorem Ipsum Dolor</h4>
                      <p>
                      Lorem Ipsum Dolor sit amet eliqua et ud nam sapere.                      
                      </p>

                       <div className="ImgCarousel">
                         <ImgCarousel set="socis" />
                      </div>

                    </div>
                  </div>

                  <div className="SlideRowWrap ">
                    <div className="SideTxt">
                      <h1><span className="OrangeGrad">100+</span></h1>
                      <h4>Lorem Ipsum Dolor</h4>
                      <p>
                      Lorem Ipsum Dolor sit amet eliqua et ud nam sapere.                      
                      </p>

                       <div className="ImgCarousel">
                         <ImgCarousel set="socis" />
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


export { Slideshow };