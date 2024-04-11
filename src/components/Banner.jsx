import '../style/components/Banner.css';
import '../style/assets/Font.css';
import PropTypes from 'prop-types';

function Banner({ title, picture }) {
    return (
        <div className='banner_wrapper'>
            <img src={ picture } alt="" className='banner_picture' />
            <span className='banner_title'>{ title }</span>
        </div>
    )
}

Banner.propTypes = {
    title: PropTypes.string,
    picture: PropTypes.string,
}

export default Banner
