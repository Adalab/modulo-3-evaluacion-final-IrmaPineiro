import "../scss/App.scss";
import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import CharacterList from "./CharacterList";

function App() {
  return (
    <>
      <header>
        <h1>Rick and Morty</h1>
        <main>
          <CharacterList />
        </main>
      </header>
    </>
  );
}

export default App;
