import CharacterDetail from "./CharacterDetail";

function CharacterList({ characters }) {
  return (
    <section>
      <ul>
        {characters.map((character) => {
          return (
            <li key={character.id}>
              <img src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
              <p>{character.species}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CharacterList;
