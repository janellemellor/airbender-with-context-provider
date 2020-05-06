import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image, affiliation }) => (
  <section>
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>{affiliation}</p>    
  </section>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired, 
  affiliation: PropTypes.string.isRequired
};

export default Character;
