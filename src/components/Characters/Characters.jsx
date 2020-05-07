import React from 'react';
import { useCharacters } from '../../hooks/CharacterProvider';
import Character from './Character.jsx';

const Characters = () => {
  const characters = useCharacters();

  const allCharacters = characters.map(character => (
    <li key={character.id}>
      <Character {...character} />
    </li>    
  ));

  return (
    <ul>
      {allCharacters}    
    </ul>
  );
};

export default Characters;

