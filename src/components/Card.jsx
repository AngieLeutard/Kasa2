import '../style/components/Card.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Card({ picture, title, id }) {
const navigate = useNavigate();

    return (
        <div className='card_item' onClick={() => navigate(`/apartment/${id}`)}>
            <img src={ picture } alt="" className='card_picture'/>
            <span className='card_title'>{ title }</span>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    picture: PropTypes.string,
}

export default Card