import { Link } from 'react-router-dom'; 
import logo from '../../src/assets/logos/logo.png';
import '../style/components/Header.css';
import '../style/assets/Font.css';

function Header() {
    return (
        <div className='header_wrapper'>
            <img src={logo} alt='logo' className='header_logo' />
            <nav className='header_nav'>
                <Link to="/Kasa" className='header_link'>Accueil</Link>
                <Link to="/about" className='header_link'>À propos</Link>
            </nav>
        </div>
        
    )
}

export default Header