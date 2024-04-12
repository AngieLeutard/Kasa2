import '../style/components/Profile.css';
import '../style/assets/Font.css';
import PropTypes from 'prop-types';


function Profile({text, picture}) {
    return(
        <div className='profile'>
            <section className='profile_container'>
                <p className='profile_name'>{ text }</p>
                <img src={ picture } alt="" className='profile_picture' />
            </section>
        </div>
    )
}

Profile.propTypes = {
    title: PropTypes.string,
    picture: PropTypes.string,
}

export default Profile