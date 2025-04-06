import "../scss/App.scss";
import PropTypes from "prop-types";
import { Link, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import Header from "./Header";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState("");
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
            origin: character.origin,
            status: character.status,
            // episode: character.episode,
          };
        });
        //console.log(usersData);
        setCharacters(usersData);
      });
  }, []); // 2. Empty array -> to run once.
  //Function -> change on filter
  const handleFilterChange = (searchName) => {
    setSearchName(searchName);
  };
  //Filter -> characters by name
  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(searchName.toLowerCase());
  });
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  searchName={searchName}
                  onFilterChange={handleFilterChange}
                />
                <CharacterList characters={filteredCharacters} />
              </>
            }
          />
          <Route
            path="/detail/:id"
            element={<CharacterDetail characters={characters} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
