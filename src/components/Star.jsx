import '../style/components/Profile.css';
import RedStar from '../assets/stars/RedStar.png';
import GreyStar from '../assets/stars/GreyStar.png';
import PropTypes from 'prop-types';

const Star = ({hostRate}) => {
    const fullStars = Array(5).fill(<img src={RedStar} alt='' className='stars'/>)
    const emptyStars = Array(5).fill(<img src={GreyStar} alt='' className='stars'/>)
    
    return (
            <section className='star_wrapper'>
                {fullStars.slice(5-hostRate).map((fullStar, index) => {
                    return (<p key={index}>{fullStar}</p>)
                })}
                {emptyStars.slice(hostRate).map((emptyStar, index) => {
                    return (<p key={index}>{emptyStar}</p>)
                })}
            </section>
    );
};

Star.propTypes = {
    hostRate: PropTypes.number
}

export default Star;