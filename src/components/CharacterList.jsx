import "../scss/components/CharacterList.scss";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

function CharacterList({ characters, searchName, searchSpecie }) {
  const renderCharacters = () => {
    if (!characters || characters.length === 0) {
      return (
        <p>
          No hay ningún personaje que conincida con la palabra "
          <strong>{searchName} </strong>
          <strong>{searchSpecie} </strong>".
        </p>
      );
    }
    return characters.map((character) => {
      return <CharacterCard key={character.id} character={character} />;
    });
  };
  return (
    <section className="character-list-container">
      <ul className="character-list">{renderCharacters()}</ul>
    </section>
  );
}

export default CharacterList;
