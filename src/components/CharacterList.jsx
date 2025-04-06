import CharacterDetail from "./CharacterDetail";
import "../scss/components/CharacterList.scss";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

function CharacterList({ characters }) {
  const renderCharacters = () => {
    if (!characters || characters.length === 0) {
      return <p>No hay ningún personaje que conincida.</p>;
    }
    return null;
  };
  return (
    <section className="character-list-container">
      <ul className="character-list">
        {characters.map((character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </ul>
    </section>
  );
}

export default CharacterList;
