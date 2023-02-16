import PropTypes from 'prop-types';
import cont from './section.module.css';

function Section({title, children }) {
  return <section className={cont.container}>
    <h1>{title}</h1>
    <div>{children}</div>
  </section>;
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
