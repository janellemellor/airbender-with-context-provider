import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchCharacters } from '../services/airbenderApi';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    fetchCharacters()
      .then(characters => setCharacters(characters));
  }, []);

  return (
    <CharacterContext.Provider value={{ characters, theme }} >
      {children}
    </CharacterContext.Provider>
  );
};

CharacterProvider.propTypes = {
  children: PropTypes.node
};

export const useCharacters = () => {
  const { characters } = useContext(CharacterContext);
  return characters;
};

export const useCharacter = ( index ) => {
  const characters = useCharacters();
  return characters[index];
};

