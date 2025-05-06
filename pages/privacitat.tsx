import MainHeader from "../components/navigation/Header";
import { Footer } from '../components/navigation/Footer';
import { Meta } from '../components/head/Meta';

export default function Privacy() {
  return (
    <main className="Privacy">
      <div>
        <MainHeader
          useWhite={true}
          meta={
            <Meta
              title="Política de Privacitat"
              metaTitle="Política de Privacitat │ IDR"
              metaImg="https://idr.cat/thumb/thumb.png"
              description="Política de Privacitat"
            />
          }
        />
      </div>

      <section className="SectionWrap" id="privacy">
        <div className="LegalHero">
          <h2><span className="">Política de Privacitat</span></h2>
          <p>Data efectiva: 4 de maig de 2025</p>
          <p>
            A IDR, ens prenem seriosament la privadesa. Aquesta política de privacitat explica com gestionem la informació a la nostra pàgina web i els nostres serveis en línia. Ens comprometem a protegir la vostra privadesa i a ser transparents sobre les nostres pràctiques.
          </p>
        </div>
      </section>

      <section className="SectionWrap">
        <div className="LegalSection">
          <h6>Secció 01</h6>
          <h4>No recollim dades personals</h4>
          <div className="">
            <p>
              No recollim, emmagatzemem ni processem cap tipus de dades personals dels usuaris que visiten la nostra pàgina web. Això inclou, però no es limita a, informació com noms, adreces, correus electrònics, adreces IP o qualsevol altra dada que pugui identificar-vos.
            </p>
          </div>
        </div>

        <div className="LegalSection">
          <h6>Secció 02</h6>
          <h4>No compartim dades amb tercers</h4>
          <div className="">
            <p>
              Com que no recollim cap dada personal, no compartim cap informació amb tercers, ja siguin empreses, organitzacions o individus. La vostra interacció amb la nostra pàgina web és completament privada.
            </p>
          </div>
        </div>

        <div className="LegalSection">
          <h6>Secció 03</h6>
          <h4>Galetes i tecnologies de seguiment</h4>
          <div className="">
            <p>
              La nostra pàgina web no utilitza galetes (cookies) ni cap altra tecnologia de seguiment per monitoritzar l’activitat dels usuaris. No fem servir eines d’anàlisi, anuncis publicitaris ni altres formes de seguiment.
            </p>
          </div>
        </div>

        <div className="LegalSection">
          <h6>Secció 04</h6>
          <h4>Enllaços a llocs de tercers</h4>
          <div className="">
            <p>
              La nostra pàgina web pot contenir enllaços a altres llocs web que no són operats per nosaltres. No tenim control sobre les polítiques de privacitat d’aquests llocs i us recomanem que reviseu les seves polítiques abans de proporcionar-hi qualsevol informació.
            </p>
          </div>
        </div>
{/* 
        <div className="LegalSection">
          <h6>Secció 05</h6>
          <h4>Menors d’edat</h4>
          <div className="">
            <p>
              No recollim ni sol·licitem intencionadament informació de persones menors de 13 anys. Si descobrim que hem recollit informació d’un menor de 13 anys sense voler, prendrem mesures raonables per eliminar aquesta informació. Si creieu que tenim informació d’un menor de 13 anys, contacteu-nos a <a href="mailto:contacte@idr.cat">contact@idr.cat</a>.
            </p>
          </div>
        </div> */}

        <div className="LegalSection">
          <h6>Secció 05</h6>
          <h4>Canvis a aquesta política</h4>
          <div className="">
            <p>
              Aquesta política de privacitat pot evolucionar amb el temps. Quan l’actualitzem, revisarem la "Data efectiva" i publicarem la nova política. Per mantenir-vos informats sobre les nostres pràctiques de privacitat, us recomanem revisar aquesta política regularment mentre utilitzeu els nostres serveis.
            </p>
          </div>
        </div>

        <div className="LegalSection">
          <h6>Secció 06</h6>
          <h4>Com contactar-nos</h4>
          <div className="">
            <p>
              Si teniu qualsevol dubte sobre aquesta política de privacitat, podeu contactar-nos a <a href="mailto:contacte@idr.cat">info@idr.cat</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}