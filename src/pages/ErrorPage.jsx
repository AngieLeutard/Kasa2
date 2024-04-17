import '../style/pages/ErrorPage.css';
import '../style/assets/Font.css';
import { Link } from 'react-router-dom'; 

function ErrorPage() {
  return (
    <div className="body error404_wrapper">
      <p className='error404_number'>404</p>
      <h1 className='error404_text'>Oups! La page que vous demandez n'existe pas.</h1>
      <nav className='error404_nav'>
        <Link to="/" className='error404_link'>Retourner sur la page d'accueil</Link>
      </nav>
    </div>
  );
}

export default ErrorPage