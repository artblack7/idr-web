import Image from 'next/image';
import Link from 'next/link';
import Arrow_Icon from './SVG/Arrow_Icon';
import ContactForm from './ContactForm';
import ContactForm2 from './descarte/LoginForm';

const Contact = () => {

  return (
    <>

      <section id="services-stripe">
        <div className='GradStripe'></div>
      </section>

    <section className="DivSectionWrap" id="services-contact">
      <div className="DivSection Left">
        
          <div className="SideTxt">
            <h3>Contacte</h3>

            <ContactForm/>

          </div> 

          <div className="SideImg">
            <div>
              
            </div>
          </div>

        </div>
      </section>

    </>
  );
}

export default Contact; 