import "../scss/App.scss";
import PropTypes from "prop-types";
import { Link, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchSpecie, setSearchSpecie] = useState("");
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
            episodes: character.episode.length,
          };
        });
        //console.log(usersData);
        setCharacters(usersData);
      });
  }, []); // 2. Empty array -> to run once.
  //Function -> change on filter
  const handleFilterChangeName = (searchName) => {
    setSearchName(searchName);
  };
  const handleFilterChangeSpecie = (searchSpecie) => {
    setSearchSpecie(searchSpecie);
  };
  //Filter -> characters by name
  const filteredCharacters = characters.filter((character) => {
    return (
      character.species.toLowerCase().includes(searchSpecie.toLowerCase()) &&
      character.name.toLowerCase().includes(searchName.toLowerCase())
    );
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
                  onFilterChangeName={handleFilterChangeName}
                  searchSpecie={searchSpecie}
                  onFilterChangeSpecie={handleFilterChangeSpecie}
                />
                <CharacterList
                  characters={filteredCharacters}
                  searchName={searchName}
                  searchSpecie={searchSpecie}
                />
              </>
            }
          />
          <Route
            path="/detail/:id"
            element={<CharacterDetail characters={characters} />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
