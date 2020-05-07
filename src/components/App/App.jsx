import React from 'react';
import { CharacterProvider } from '../../hooks/CharacterProvider';
import Characters from '../Characters/Characters';

export default function App() {
  return (
    <CharacterProvider >
      <Characters />
    </CharacterProvider > 
  );
}
