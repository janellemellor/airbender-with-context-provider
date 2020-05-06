export const fetchCharacters = () => {
  return fetch('http://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(json => json.map(character => ({
      id: character._id, 
      name: character.name, 
      affiliation: character.affiliation, 
      image: character.photourl
    })));
};
