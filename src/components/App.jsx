import "../scss/App.scss";
import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    //1. instructions:
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        const usersData = data.results.map((character) => {
          //console.log(character);
          return {
            id: character.id,
            name: character.name,
            image: character.image,
            species: character.species,
          };
        });
        console.log(usersData);
        setCharacters(usersData);
      });
  }, []); // 2. Empty array -> to run once.
  return (
    <>
      <header>
        <h1>Rick and Morty</h1>
        <main>
          <CharacterList characters={characters} />
        </main>
      </header>
    </>
  );
}

export default App;
