import React from 'react';
import PropTypes from 'prop-types';
import { useCharacter } from '../../hooks/CharacterProvider';

const Character = ({ index }) => {
  const { name, image, affiliation } = useCharacter(index);
  return (
    <section>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{affiliation}</p>    
    </section>
  );
};

Character.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired, 
  affiliation: PropTypes.string.isRequired
};

export default Character;
