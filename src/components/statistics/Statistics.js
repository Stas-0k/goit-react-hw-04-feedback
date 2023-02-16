import propTypes from 'prop-types';
import css from './statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>            
            <p className={css.name}>Good: {good}</p>
            <p className={css.name}>Neutral: {neutral }</p>
            <p className={css.name}>Bad: {bad}</p>
            <p className={css.name}>Total: {total}</p>
            <p className={css.name}>Positive feedback: {positivePercentage}%</p> 
        </div>
   )
        

}

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};


export default Statistics; 