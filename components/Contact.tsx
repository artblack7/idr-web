import Image from 'next/image';
import Link from 'next/link';
import Arrow_Icon from './SVG/Arrow_Icon';

const Contact = () => {

  return (
    <>

<section className="SectionWrap" id="getstarted">
          <div className="DivSection Left animation-up" data-animate="slide-up">
            
            <div className="SideImg">
              <div className="animation-up" data-animate="slide-up">
              </div>
            </div>

            <div className="SideTxt">
              <h3>Contacte</h3>
              <p>
                Formulari
               </p>
              <div className="ButtonGroup">
                <div className="AppBtn">
                  <Link target="" href="/getstarted"><button>Enviar missatge<Arrow_Icon /></button></Link>
                </div>
              </div> 
            </div> 

          </div>
      </section>

    </>
  );
}

export default Contact; 