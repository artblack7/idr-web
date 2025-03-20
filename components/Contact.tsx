import Image from 'next/image';
import Link from 'next/link';
import Arrow_Icon from './SVG/Arrow_Icon';
import ContactForm from './ContactForm';

const Contact = () => {

  return (
    <>

      <section id="services-stripe">
        <div className='GradStripe'></div>
      </section>

    <section className="DivSectionWrap" id="services-contact">
      <div className="DivSection Left animation-up" data-animate="slide-up">
        
          <div className="SideTxt">
            <h3>Contacte</h3>

            <ContactForm/>

          </div> 

          <div className="SideImg">
            <div className="animation-up" data-animate="slide-up">
              
            </div>
          </div>

        </div>
      </section>

    </>
  );
}

export default Contact; 