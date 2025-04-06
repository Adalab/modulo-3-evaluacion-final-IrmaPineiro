import CharacterDetail from "./CharacterDetail";
import "../scss/components/CharacterList.scss";
import { Link } from "react-router-dom";

function CharacterList({ characters }) {
  return (
    <section>
      <ul className="character-list">
        {characters.map((character) => {
          return (
            <li className="characters" key={character.id}>
              <Link to={`/detail/${character.id}`}>
                <img src={character.image} alt={character.name} />
                <h3>{character.name}</h3>
                <p>{character.species}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CharacterList;
