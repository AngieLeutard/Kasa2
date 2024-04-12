import '../style/components/Tag.css';
import '../style/assets/Font.css';
import PropTypes from 'prop-types';


function Tag({title}) {
    return (
        <div className='tag_container'>
            <span className='tag_text'>{title}</span>
        </div>
    )
}

Tag.propTypes = {
    title: PropTypes.string,
}

export default Tag