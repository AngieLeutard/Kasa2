import '../style/components/TextBox.css';
import '../style/assets/Font.css';
import PropTypes from 'prop-types';

function TextBox({ title, text, liste }) {
    return (
        <details className='textBox_wrapper'>
            <summary className='textBox_title'>
                { title }
                <div className="summary-chevron-up">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
		        </div>
                <div className="summary-chevron-down">
		            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                </div>
            </summary>
            <p className='textBox_description'>{ text }</p>
            <ul className='textBox_description'>
                {liste && liste.map((li) => (
                    <li key={`${li}`}>
                        { li }
                    </li>
                ))}
            </ul>
        </details>
    )
}

TextBox.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    liste: PropTypes.array
}

export default TextBox