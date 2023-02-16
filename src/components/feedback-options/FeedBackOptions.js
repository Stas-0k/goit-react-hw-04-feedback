import propTypes from 'prop-types';
import css from './feedback-options.module.css'

const FeedBackOptions = ({ options, onLeaveFeedback }) => { 
    const object = Object.keys(options)
    return (object.map(item =>  
            <button type='button' className={css.bttn} onClick={() => onLeaveFeedback(item)} key={item}>{[item]}</button>
    )        
    )
}

FeedBackOptions.propTypes = {
  options: propTypes.shape().isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};


export default FeedBackOptions