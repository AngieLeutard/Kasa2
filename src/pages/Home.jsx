import '../style/layouts/Body.css';
import '../style/pages/Home.css';
import Annonces from '../annonces.json';
import Card from '../components/Card';
import Banner from '../components/Banner';
import image from '../assets/images/IMG.png';

function Home() {

  return (
    <div className="body">
      <section className='home_bannerContainer'>
        <Banner
          title='Chez vous, partout et ailleurs'
          picture={ image }
        />
      </section>
      <section className='home_cardList_wrapper'>
        {Annonces.map((profile, index) => (
            <Card
            key={`${profile.id}-${index}`}
            picture={profile.cover}
            title={profile.title}
            id={profile.id}
            />
        ))}
      </section>
    </div>
  );
}

export default Home