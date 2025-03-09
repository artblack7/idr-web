import MainHeader from "../components/navigation/Header";
import {Footer} from '../components/navigation/Footer';
import { Meta } from '../components/head/Meta';

export default function Privacy() {

  return (
    <main className="Privacy">
      <div>
      <MainHeader useWhite={true}  
          meta={<Meta 
            title="Política de Privacitat" 
            metaTitle="Política de Privacitat │ IDR" 
            metaImg="https://idr.cat/thumb/thumb.png" 
            description="Política de Privacitat" />} 
            />
      </div>

      <section>
        <div className="LegalHero">
          <h1><span className="">Política de Privacitat</span></h1>
          <p>Data efectiva: Març 15, 2025</p>
          <p>
          At CompanyName, we take privacy and security seriously. This Privacy Policy outlines how CompanyName Inc. and its affiliates process the information we collect about you through our websites, mobile apps, and other online services (collectively, the “Services”) and when you otherwise interact with us, such as through our customer service channels.          </p>
        </div>
      </section>

      <section className="LegalSectionWrap">
        <div className="LegalSection">
          <h6>Section 01</h6>
          <h3>Information we collect and how we collect it</h3>

          <div className="legal-box">
           <h4>
           Information You Provide
            </h4>
            <p>
            We collect information you provide when you use our Services or otherwise engage or communicate with us as described below.
            </p>
            <li>
              Identity Data, such as your name, date of birth, marital status, and other data on government-issued identification documents;
            </li>
            <li>
              Contact Data, such as your email address, mailing address, and telephone number;
            </li>
            <li>
              Financial Data, such as your bank account and payment card details, and information about your income, account balances, financial transaction history, credit history, tax information, and credit scores;
            </li>
            <li>
              Profile Data, such as your username and password, your knowledge assessment results, your interests, preferences, feedback, and survey responses;
            </li>
            <li>
              Additional Data You Provide, such as via focus groups, survey responses, contests/sweepstakes, customer support, or other means.
            </li>
          </div>

          <div className="legal-box">
           <h4>
           Information We Collect Automatically
            </h4>
            <p>
            As is true of many digital platforms, we also collect certain information about you automatically when you use our Services, as described below.
            </p>
            <li>
              Usage Information. We collect information about your activity on our Services, which includes device identifiers (like IP address or mobile device identifiers), pages or features you use, time and date of access, and other similar usage information.
            </li>
            <li>
              Transactional Information. When you receive, submit, or complete a transaction via the Services, we collect information about the transaction, such as transaction amount, type and nature of the transaction, and time and date of the transaction.
            </li>
            <li>
              Location Data. We may collect the GPS location of your mobile device in accordance with your device permissions. You can stop the collection of this precise location information at any time (see the Your Control section below for details). Google uses technologies to approximate your location, including IP address (see Google’s Privacy Policy located at https://policies.google.com/privacy to learn more about how they process this information). We also approximate your location by your IP address.
            </li>
            <li>
              Information Collected Through Tracking Technologies. We and our service providers also use technologies, including cookies and web beacons, to automatically collect certain types of usage and device information when you use our Services or interact with our emails. The information collected through these technologies includes your IP address, browser type, Internet service provider, platform type, device type, operating system, date and time stamp, a unique device or account ID, usage information, and other similar information. For information about how to disable cookies, please see the Your Controls section below.
            </li>

          </div>

          <div className="legal-box">
           <h4>
           Information We Collect from Other Sources
            </h4>
            <p>
            We also obtain information about you from other sources as described below.            
            </p>
            <li>
              Vendors and Business Partners. We collect information about you from companies that we do business with, such as name, contact data, inferences about your preferences and attributes, as well as inferred fraud risk, from identity verification and fraud prevention partners.
            </li>
            <li>
              Financial Account Linking. CompanyName offers account linking and aggregation services through Stripe Inc. ("Stripe"). By utilizing these services, you acknowledge and agree that the terms of Stripe’s Privacy Policy (currently located at https://plaid.com/legal/#end-user-privacy-policy) will govern Plaid's use of such information, and you consent to Plaid's Privacy Policy. Further, you expressly grant Plaid the right, power, and authority to access and transmit your information as reasonably necessary for Plaid to provide its services. To the extent you previously utilized account linking and aggregation services through CompanyName's previous service provider, Quovo, Inc., you expressly authorize Quovo, Inc. to transmit any information or data arising out of those services to Plaid so that Plaid can provide its services.
            </li>
            <li>
              Connected Services. If you link, connect, or log in to your CompanyName Account with a third-party service (e.g., Google, Apple), the third-party service may send us information such as your profile information from that service. This information varies and is controlled by that service or as authorized by you via your privacy settings at that service.
            </li>
            <li>
              Publicly Available Data. includes contact information, your interactions with our social media platforms, and other information from publicly available sources, such as public websites.
            </li>
            <li>
              Advertising Data. We collect information in connection with our ad campaigns that surfaced on other platforms, such as the ads you clicked on and other interactions with our ads.
            </li>
            <li>
              Data from other users. If you are in another user’s contact list and they choose to share that list with us, then we will collect the contact information and your association with that user.
            </li>

          </div>

        </div>
      </section>
      <section className="LegalSectionWrap Grey">
        <div className="LegalSection">
          <h6>Section 02</h6>
          <h3>Disclosures of information</h3>
          <div className="legal-box">
           <h4>
           We are committed to maintaining your trust, and we want you to understand when and with whom we share information about you. We share information about you in the instances described below.            
           </h4>
            <li>
              Authorized third-party vendors and service providers. We share information about you with third-party vendors and service providers who perform services for us, such as identification verification, fraud prevention, advertising, mailing services, tax and accounting services, contest fulfillment, web hosting, and analytics services. We use an identification verification service provider to determine whether a selfie you take matches the photo in your government-issued identification. With your consent, we may record your voice and send this data to our third-party partner to authenticate you and to help prevent fraud. The information collected from your photo and your voice by our third-party vendors may include biometric data.
            </li>
            <li>
              Companies in which you hold securities. CompanyName may provide your name, address, email address, and securities positions to requesting companies in which you hold securities.
            </li>
            <li>
              CompanyName affiliates. Where appropriate, we share information about you with other companies owned or controlled by CompanyName. For example, CompanyName Securities, LLC may receive information to provide you with custody and other related services as described in your customer agreement. These companies will process any information shared in the same manner as described under this Privacy Policy.
            </li>
            <li>
              Substantial corporate transactions. We may share information about you in connection with a substantial corporate transaction, a merger, consolidation, reorganization, financing, change in control or acquisition of all or a portion of our business by a third party, or in the unlikely event of a bankruptcy or similar proceeding.
            </li>
            <li>
              Legal purposes. We disclose information about you if we believe that disclosure is in accordance with, or required by, any applicable law or legal process or to protect and defend the rights, interests, safety, and security of CompanyName, our users, or the public.
            </li>
            <li>
              With your consent. We share information about you for any other purposes disclosed to you with your consent.
            </li>
            <p>
            We share information with others in an aggregated or otherwise de-identified form that does not reasonably identify you.
            </p>
          </div>
        </div>
      </section>

      <section className="LegalSectionWrap">
        <div className="LegalSection">
          <h6>Section 03</h6>
          <h3>Third-party tracking and online advertising</h3>
          <div className="legal-box">
           <h4>
           We use third-party advertising and analytics services to better understand your online activity and serve you targeted advertisements.
            </h4>
            <p>
            For example, we use Google Analytics and you can review the “How Google uses information from sites or apps that use our services” linked here: g.co/policies/privacy/partners/ for information about how Google processes the information it collects. These companies collect information about your use of our Services and other websites and online services over time through cookies, device identifiers, or other tracking technologies. The information collected includes your IP address, web browser, mobile network information, pages viewed, time spent, links clicked, and conversion information. We and our third-party partners use this information to, among other things, analyze and track data, determine the popularity of content, and deliver advertisements targeted to your interests on our Services and other platforms, as well as to provide advertising-related services to us such as reporting, attribution, analytics, and market research.
            </p>
            <p>
            For more information about interest-based ads, including to learn about options for opting out of having your web browsing information used for targeted advertising purposes, please visit www.aboutads.info/choices. You should also review your mobile device settings and controls for features that allow you to opt out or opt in to having certain information collected for behavioral advertising purposes. Please note, as a self-directed broker-dealer, we do not advertise on behalf of specific securities or investment options on our Services.
            </p>
          </div>
        </div>
      </section>
      <section className="LegalSectionWrap Grey">
        <div className="LegalSection">
          <h6>Section 04</h6>
          <h3>Do not track</h3>
          <div className="legal-box">
            <p>
            Some web browsers transmit “do-not-track” signals to websites. We currently don’t take action in response to these signals.         
            </p>
          </div>
        </div>
      </section>

      <section className="LegalSectionWrap">
        <div className="LegalSection">
          <h6>Section 05</h6>
          <h3>Your controls</h3>
          <div className="legal-box">
          <h4>Account profile</h4>
          <p>You may update certain account profile information by logging into your account.</p>

          <h4>Access to your device data</h4>
          <p>You may disconnect our mobile app’s access to certain stored device information through your device’s settings. For instance, you can withdraw permission for the app to access your contact list or photo gallery.</p>

          <h4>How to control your communications preferences</h4>
          <p>You can stop receiving promotional emails from us by clicking the “unsubscribe” link in those emails. We may still send you service-related or other non-promotional communications, such as account notifications, receipts, security notices, and other transactional or relationship messages.</p>

          <h4>Affiliate sharing opt out</h4>
          <p>In some cases, you can limit sharing between CompanyName affiliates for more details. If you want to exercise this right, please contact us at contact@company.net.</p>

          <h4>Disabling certain data sharing</h4>
          <p>You can limit how we share your data with our marketing partners to more effectively market our Services to you across sites and apps. When disabled, we will no longer share personal information with these partners for these purposes.</p>

          <h4>Cookie controls</h4>
          <p>Many web browsers are set to accept cookies and similar tracking technologies by default. If you prefer, you can set your browser to delete or reject these technologies. If you choose to delete or reject these technologies, this could affect certain features of our Services. Furthermore, if you use a different device, change browsers, or delete the opt-out cookies that contain your preferences, you may need to perform the opt-out task again.</p>

          </div>
        </div>
      </section>

      <section className="LegalSectionWrap">
        <div className="LegalSection">
          <h6>Section 07</h6>
          <h3>Children</h3>
          <div className="legal-box">
           <h4>
           We do not knowingly collect or solicit any information from anyone under the age of 13 on these Services.
            </h4>
            <p>
            In the event we learn that we have inadvertently collected personal information from a child under age 13, we will take reasonable steps to delete that information. If you believe that we might have any information from a child under 13, 
            please contact us at contact@akashalabs.net
            </p>
          </div>
        </div>
      </section>
      <section className="LegalSectionWrap Grey">
        <div className="LegalSection">
          <h6>Section 08</h6>
          <h3>Transfer of information</h3>
          <div className="legal-box">
           <h4>
           Our Services are currently designed for use only in the United States.
            </h4>
            <p>
            If you are using our Services from another jurisdiction, your information may be processed in the United States or other countries that may not provide levels of data protection that are equivalent to those of your home jurisdiction.            </p>
          </div>
        </div>
      </section>

      <section className="LegalSectionWrap">
        <div className="LegalSection">
          <h6>Section 09</h6>
          <h3>Changes to this policy</h3>
          <div className="legal-box">
           <p>
           This Privacy Policy will evolve with time, and when we update it, we will revise the "Effective Date" above and post the new Policy and, in some cases, we provide additional notice (such as adding a statement to our website or sending you a notification). To stay informed of our privacy practices, we recommend you review the Policy on a regular basis as you continue to use our Services.
            </p>
            <p>
            </p>
          </div>
        </div>
      </section>
      <section className="LegalSectionWrap Grey">
        <div className="LegalSection">
          <h6>Section 10</h6>
          <h3>How to contact us</h3>
          <div className="legal-box">
           <p>
           If you have any questions about this Privacy Policy, please contact us at contact@company.net</p>
          </div>
        </div>
      </section>

      <Footer />

    

    </main>
  );
}


