import '../style/pages/Apartment.css';
import '../style/layouts/Body.css';
import '../style/assets/Font.css';
import Slider from '../components/Slider';
import TextBox from '../../src/components/TextBox';
import Tag from '../../src/components/Tag';
import Profile from '../components/Profile';
import Star from '../components/Star';
import Annonces from '../../src/annonces.json';
import { useParams } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';

function Apartment() {
  const { id } = useParams();
  const annonce = Annonces.find(a => a.id === id)

    if(annonce === undefined)
      return(<ErrorPage />)

  return (
    <div className='body'>
      <section className='apartment_slider'>
        <Slider 
          image={ annonce.pictures }
        />
      </section>
      <section className='apartment_description_wrapper'>
        <div className='apartment_title_wrapper'>
          <h1 className='apartment_title'>{ annonce.title }</h1>
          <span className='apartment_location'>{ annonce.location }</span>
        </div>
        <div className='apartment_tag_wrapper'>
          {annonce.tags.map((tags) => (
            <Tag 
              key={`${tags}`}
              title={ tags }          
            />
          ))}
        </div>
        <div className='profile_wrapper'>
          <Profile 
            text={ annonce.host.name }
            picture={ annonce.host.picture }
          />
          <Star 
            hostRate={ annonce.rating }
          />
        </div>
        <div className='apartment_textBox_wrapper'>
          <section className='apartment_textBox'>
            <TextBox
              title='Description'
              text={ annonce.description }
            />
          </section>
          <section className='apartment_textBox'>
              <TextBox
              title='Équipements'
              liste={ annonce.equipments }
            />
          </section>
        </div>
      </section>
    </div>
  );
}

export default Apartment