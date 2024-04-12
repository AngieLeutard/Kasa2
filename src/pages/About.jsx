import '../style/layouts/Body.css';
import '../style/pages/About.css'
import Banner from '../components/Banner';
import image from '../assets/images/IMG2.png';
import TextBox from '../../src/components/TextBox';


function About() {
  return (
    <div className="body">
      <section className='about_bannerContainer'>
        <Banner 
          picture={ image }
        />
      </section>
      <aside className='about_textWrapper'>
        <TextBox 
          title='Fiabilité'
          text='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
        />
        <TextBox 
          title='Respect'
          text='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        />
        <TextBox 
          title='Service'
          text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <TextBox 
          title='Securité'
          text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </aside>
    </div>
  );
}

export default About;
